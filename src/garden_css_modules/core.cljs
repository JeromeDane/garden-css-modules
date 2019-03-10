(ns garden-css-modules.core
    (:require [garden-css-modules.macro :refer-macros [defstyle]]))
              ; [garden-css-modules.runtime :refer [modularize]]))

(defn p [a]
  (js/console.log (js/JSON.stringify (clj->js a) nil 2)))

(defstyle style
  [:div.foo.bar {:color "red"}
   [:a {}
     [:.link.yellow {:color "yellow"}]
     [:.link.blue {:color "blue"}]]]
  [:.container {:color "blue"}])

(p style)
; (p style-module)




(defn on-js-reload [])
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
