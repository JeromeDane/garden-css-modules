(ns garden-css-modules.example
    (:require [garden-css-modules.core :refer [modularize] :refer-macros [defstyle]]))

(enable-console-print!)

(defstyle style
  [:div.foo.bar {:color "red"}
   [:a {}
     [:.link.yellow {:color "yellow"}]
     [:.link.blue {:color "blue"}]]]
  [:.container {:color "blue"}])

;;; TODO: Create example UI

(defn on-js-reload [])
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
