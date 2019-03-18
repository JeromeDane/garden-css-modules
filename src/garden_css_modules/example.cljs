(ns garden-css-modules.example
    (:require [garden-css-modules.core :refer [modularize] :refer-macros [defstyle]]
              [reagent.core :as r]))

(enable-console-print!)

(defn on-js-reload [])
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)

; (defstyle style
(js/console.log
  (modularize
    [:div.foo.bar {:color "red"}
     [:a {}
       [:.link.yellow {:color "yellow"}]
       [:.link.blue {:color "blue"}]]]
    [:.container {:color "blue"}]))

; (js/console.log style)

(defn app []
  [:div "Check the dev console"])

(r/render [app]
  (.getElementById js/document "app"))
