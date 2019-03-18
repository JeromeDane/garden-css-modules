# garden-css-modules
Apply CSS module style class name hashing to garden data. Learn more about the principle [here](https://glenmaddern.com/articles/css-modules).

WORK IN PROGRESS. NO GUARANTEES AT THIS POINT.

## To Do

* Handle @media and keyframes
* Allow concatination of hashed class names like `{:class (my-style :foo :bar :baz)}`
* Implement production mode to short hash class + namespace
* In dev mode, append class + namespace with short hash
* Add documentation and examples to this readme
* Get feedback from colleagues and iterate
* Publish to clojars

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
