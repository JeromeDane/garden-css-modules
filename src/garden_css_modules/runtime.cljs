(ns garden-css-modules.runtime
  (:require [garden.core :refer [css]]
            [clojure.string :as s]))

(def injected-styles (atom {}))

(defn- update-style! [element style]
  (set! (.-innerHTML element) style))

(defn- create-style-element! [style id]
  (let [head (.-head js/document)
        element (.createElement js/document "style")]
    (assert (some? head)
            "An head element is required in the dom to inject the style.")
    (.appendChild head element)
    (update-style! element style)
    (swap! injected-styles assoc id element)))

(defn- inject-style! [style ns name]
  (let [id (symbol (str ns "-" name))
        injected-style (id @injected-styles)]
    (if injected-style
      (update-style! injected-style style)
      (create-style-element! style id))))

(defn- get-namespace []
  (let [obj (clj->js {})]
    (.captureStackTrace js/Error obj get-namespace)
    (s/replace
      (s/replace
          (second (re-find #"([^/]+/[^/]+)\.js"
                            (str (.-stack obj))))
          #"_" "-")
      #"/" "--")))

(defn- hash-part [part]
  (if (s/starts-with? part ".")
    (str part "--" (get-namespace))
    part))

(defn- hash-selector [selector]
  (let [parts (s/split (name selector) #"(?=\.)|(?=#)|(?=\[)")
        hashed (reduce
                #(merge %1 {%2 (hash-part %2)})
                {}
                parts)]
   {:selector (s/join "" (map hashed parts))
    :names (reduce-kv
            #(merge %1
              (if (s/starts-with? %2 ".")
                {(keyword (s/replace (name %2) #"^." ""))
                 (hashed %2)}
                {}))
            {}
            hashed)}))

(defn modularize
  ([& garden]
   (let [garden (if (= 1 (count garden))
                    (first garden)
                    garden)
         selector (first garden)
         style (when (map? (second garden)) (second garden))
         children (if style (rest (rest garden)) (rest garden))]
    (if (vector? selector)
      (let [modules (map modularize garden)]
        {:styles (map #(% :styles) modules)
         :names (reduce #(merge (%1 :names) (%2 :names)) modules)})
      (let [{:keys [styles]} (when (first children) (modularize children))
            hash (hash-selector selector)]
        {:styles (into [] (remove nil?
                            (concat
                             [(hash :selector) style]
                             styles)))
         :names (hash :names)})))))
