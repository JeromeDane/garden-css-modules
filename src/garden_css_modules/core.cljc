(ns garden-css-modules.core
  #?(:clj
       (:require
        [clojure.string :as s]
        [clojure.pprint :refer [pprint]]
        [garden.stylesheet :refer [at-media at-keyframes]]))
  #?(:cljs
     (:requiretest
      [clojure.string :as s]
      [garden.stylesheet :refer [at-media at-keyframes]] ; TODO: Handle keyframes and @media
      [garden-css-modules.runtime :refer [inject-style!]])))

(defmacro get-namespace [] `~(str *ns*))

(defn- hash-part [part]
  (if (s/starts-with? part ".")
    (str part
      "__"
      (s/replace (get-namespace) #"\." "_"))
    part))


(defn- hash-selector [selector]
  (let [parts (s/split (name selector) #"(?=\.)|(?=#)|(?=\[)|(?=:)|(?=\s)")
        hashed (reduce
                #(merge %1 {%2 (hash-part %2)})
                {}
                parts)]
   {:selector (keyword (s/join "" (map hashed parts)))
    :names (reduce-kv
            (fn [acc part hash]
              (merge acc
                 (if (s/starts-with? part ".")
                   {(keyword (s/replace (name part) #"^." ""))
                    hash}
                   {})))
            {}
            hashed)}))

(defn modularize
  ([& garden]
   (let [garden (if (= 1 (count garden))
                    (first garden)
                    garden)
         selector (first garden)
         style (when (map? (second garden)) (second garden))
         children (into [] (if style (rest (rest garden)) (rest garden)))]
    (if (vector? selector)
      (let [modules (map modularize garden)]
        {:styles (into [] (map #(% :styles) modules))
         :names (reduce
                  #(merge (%1 :names) (%2 :names))
                  {}
                  modules)})
      (let [{:keys [styles names]}
            (when (first children) (modularize (into [] children)))
            hash (hash-selector selector)]
        (when (first children))
        {:styles (into [] (remove nil?
                            (concat
                             [(hash :selector) style]
                             styles)))
         :names (merge (hash :names) names)})))))

(defmacro defstyle
  [style-id & styles]
  (let [inject-style-fn (symbol "garden-css-modules.runtime" "inject-style!")
        module (apply modularize styles)]
    (if (boolean (:ns &env))
      `(do
        ; (~inject-style-fn (css (~module :styles)))
        (def ~style-id ~(module :names)))
      `(do
        (def ~style-id {:names ~(module :names)
                          :styles ~(module :styles)})))))
