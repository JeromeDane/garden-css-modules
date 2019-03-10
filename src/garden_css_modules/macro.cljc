(ns garden-css-modules.macro
  #?(:clj
       (:require
        [garden.core :refer [css]]
        [garden.stylesheet :refer [at-media at-keyframes]]))
    #?(:cljs
       (:require
        [garden.core :refer [css]]
        [garden.stylesheet :refer [at-media at-keyframes]]
        [garden-css-modules.runtime :refer [inject-style! modularize]])))

; (defmacro get-namespace [] `~(str *ns*))

(defmacro defstyle
  [style-id & styles]
  (let [inject-style-fn (symbol "garden-css-modules.runtime" "inject-style!")
        modularize-fn (symbol "garden-css-modules.runtime" "modularize")
        styles (into [] styles)
        module (symbol (str style-id "-module"))]
    (if (boolean (:ns &env))
      `(do
        (def ~module (apply ~modularize-fn ~styles))
        ; (~inject-style-fn (css (~module :styles)))
        (def ~style-id (~module :names)))
      `(def ~style-id {}))))
