(ns garden-css-modules.core
  #?(:clj
       (:require
        [cljs.env]
        [clojure.string :as string]
        [garden.core :refer [css]]))

  #?(:cljs
     (:require
      [clojure.string :as string]
      [garden-css-modules.runtime :refer [inject-style!]]
      [garden.core :refer [css]]))


  #?(:cljs
     (:require-macros [garden-css-modules.core :refer [prod?]])))

(defn- get-namespace []
  (if (> (count (str *ns*)) 0)
    (str *ns*)
    "NAMESPACE_UNKNOWN"))

(defmacro prod? []
  (if cljs.env/*compiler*
    (= :advanced (get-in @cljs.env/*compiler* [:options :optimizations]))
    false)) ; TODO add support for prod mode in pure clojure
    ;; (string/starts-with? "prod" (System/getenv "ENV"))))

(defn- hash-part [part]
  (if (string/starts-with? part ".")
    (let [name (str part
                    "__"
                    (string/replace (get-namespace) #"\." "_"))
          hashed (hash name)]
      (if (prod?)
        (str ".s" hashed)
        (str name "-" hashed)))
    part))

(defn- hash-selector [selector]
  (let [parts (string/split (name selector) #"(?=\.)|(?=#)|(?=\[)|(?=:)|(?=\s)|(?=&)")
        hashed (reduce
                #(merge %1 {%2 (hash-part %2)})
                {}
                parts)]
   {:selector (keyword (apply str (map hashed parts)))
    :names (reduce-kv
            (fn [acc part hash]
              (merge acc
                 (if (string/starts-with? part ".")
                   {(keyword (string/replace (name part) #"^\." ""))
                    (string/replace hash #"^\." "")}
                   {})))
            {}
            hashed)}))

(defn- rule-identifier
  [rule]
  (cond
    (map? rule)
    (:identifier rule)
    (list? rule)
    (keyword (string/replace (first rule) #"^at-" ""))
    :else
    false))

(defn modularize
  [& args]
  (if (> (count args) 1)
    (let [modules (map modularize args)]
      {:styles (into [] (map #(% :styles) modules))
       :names (reduce #(merge %1 (%2 :names)) {} modules)})
    (let [rule (first args)
          identifier (rule-identifier rule)]
      (if identifier
        (let [{:keys [names styles]}
              (apply modularize
                (if (map? rule)
                  (get-in rule [:value :rules])
                  (nthrest rule 2)))]
          {:styles (if (map? rule)
                       (assoc-in rule [:value :rules] styles)
                       (list (first rule) (second rule) styles))
           :names names})
        (let [selector (first rule)
              style (when (map? (second rule)) (second rule))
              children (if style (rest (rest rule)) (rest rule))]
          (if (vector? selector)
           (let [modules (map modularize rule)]
              {:styles (map #(% :styles) modules)
               :names (reduce #(merge %1 (%2 :names)) {} modules)})
           (let [{:keys [styles names]}
                 (when (first children) (modularize (into [] children)))
                 hash (hash-selector selector)]
             {:styles (into [] (remove nil?
                                (concat
                                 [(hash :selector) style]
                                 styles)))
              :names (merge (hash :names) names)})))))))

(defmacro defstyle
  [style-id & styles]
  (let [{:keys [names styles]} (apply modularize styles)]
    (if (boolean (:ns &env))
      `(do
        (~(symbol "garden-css-modules.runtime" "inject-style!")
          (css {:pretty-print? (not (prod?))} ~styles)
          (get-namespace)
          ~(name style-id))
        (js/console.log (css {:pretty-print? (not (prod?))} ~:styles))
        (def ~style-id ~names))
      `(do
        (def ~style-id {:names ~names :styles ~styles})))))
