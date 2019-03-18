# garden-css-modules
Apply CSS module style class name hashing to [Garden](https://github.com/noprompt/garden) data in Clojure and ClojureScript. Learn more about the principle [here](https://glenmaddern.com/articles/css-modules).

WORK IN PROGRESS. NO GUARANTEES AT THIS POINT.

## To Do

* Handle @media and keyframes
* Implement production mode to short hash class + namespace
* Allow concatination of hashed class names like `{:class (my-style :foo :bar :baz)}`
* Get feedback from colleagues and iterate
* Publish to clojars

## Features

* Automatic, unique hashing of CSS class names
* Fully supports nested [Garden](https://github.com/noprompt/garden) declarations
* Support for complex CSS selectors
* Descriptive, namespaced class names in development
* Short hashes in production mode (coming soon)

## Example

Consider the following example namespace:

```
(ns garden-css-modules.example
    (:require [garden-css-modules.core :refer [modularize] :refer-macros [defstyle]]
              [reagent.core :as r]
              [garden.units :refer [em px]]))

(defstyle style
  [:.container {:font-family "arial,sans-serif"}
    [:h1 {:border-bottom [[(px 1) 'solid]]}]
    [:.code {:font-style 'italic
             :background "#ccc"
             :padding [[(em .25) (em .5)]]}]])

(defn app []
  [:div {:class (style :container)}
    [:h1 "Garden CSS Modules Demo App"]
    [:p "This is a demo. Edit "
        [:span {:class (style :code)} "garden-css-modules.example"]
        " to see live changes."]])

(r/render [app]
  (.getElementById js/document "app"))
```

This will create a small [reagent](https://github.com/reagent-project/reagent) component and mount it to the DOM element with ID of "app".

Resulting HTML:

```
<div class="container__garden-css-modules_example-1287325951">
  <h1>Garden CSS Modules Demo App</h1>
  <p>
    This is a demo. Edit
    <span class="code__garden-css-modules_example-132277090">garden-css-modules.example</span>
    to see live changes.</p>
</div>
```

Resulting CSS:

```
.container__garden-css-modules_example-1287325951 {
  font-family: arial,sans-serif;
}

.container__garden-css-modules_example-1287325951 h1 {
  border-bottom: 1px solid;
}

.container__garden-css-modules_example-1287325951 .code__garden-css-modules_example-132277090 {
  font-style: italic;
  background: #ccc;
  padding: 0.25em 0.5em;
}
```


## Development

`lein figwheel` will start an example app running on http://local.c0pt3r.com:3449/. This example app lets you easily play around with this library to see what it's capable of.

You can also start a repl with `lein repl` and connect using an nrepl client. Evaluate the `garden-css-modules.core` namespace, then call modularize. E.G:

```
(modularize
  [:div.foo.bar {:color "red"}
   [:a {}
     [:.link.yellow {:color "yellow"}]
     [:a.link.blue
      [:&;hover {:color "blue"}]]]
  [:.container {:color "blue"}])
  [".brother + .sister" {:color "orange"}])
```

This returns a map with the `:styles` key having the value of new garden data with all class names hashed and a `:names` map that allows you to look up the hashed name of any class name.

## Testing

`lein test`

## Credits

Macro implementation inspired by https://github.com/matthieu-beteille/cljs-css-modules
