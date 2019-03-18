(ns garden-css-modules.example
    (:require [garden-css-modules.core :refer [modularize] :refer-macros [defstyle]]
              [reagent.core :as r]
              [garden.units :refer [em px]]))

(enable-console-print!)

(defn on-js-reload [])
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)

(defstyle style
  [:.container {:font-family "arial,sans-serif"}
    [:h1 {:border-bottom [[(px 1) 'solid]]}]
    [:.code {:font-style 'italic
             :background "#ccc"
             :padding [[(em .25) (em .5)]]}]
    [:a:hover {:border-bottom [[(px 2) 'solid]]
               :text-decoration 'none}]])

(defn app []
  [:div {:class (style :container)}
    [:h1 "Garden CSS Modules Demo App"]
    [:p "This is a demo. Edit "
        [:span {:class (style :code)} "garden-css-modules.example"]
        " to see live changes."]
    [:p "Everything supported in "
      [:a {:href "https://github.com/noprompt/garden"} "garden"]
      " should be supported here"]])

(r/render [app]
  (.getElementById js/document "app"))
