# garden-css-modules
Apply CSS module style class name hashing to garden data. Learn more about the principle [here](https://glenmaddern.com/articles/css-modules).

WORK IN PROGRESS. NO GUARANTEES AT THIS POINT.

## To Do

* Inject styles into `head` tag when calling `defstyle` macro
* Handle @media and keyframes
* Allow concatination of hashed class names like `:class (my-style :foo :bar :baz)`
* Ensure proper detection of namespace
* Implement production mode to short hash class + namespace
* In dev mode, append class + namespace with short hash
* Re-implement figwheel in `projct.clj` and create easy-to use example
* Add documentation and examples to this readme
* Get feedback from colleagues and iterate
* Publish to clojars

## Development

For now, start a repl with `lein repl` and connect using an nrepl client. Evaluate the `garden-css-modules.core` namespace, then call modularize. E.G:

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

Note that the `garden-css-modules/defstyle` macro does not yet inject styles into the `head` tag in `cljs` mode as intendtended.

## Deprecated (TODO: restore Figwheel)

To get an interactive development environment run:

    lein figwheel

and open your browser at [localhost:3449](http://localhost:3449/).
This will auto compile and send all changes to the browser without the
need to reload.

To clean all compiled files:

    lein clean

To create a production build run:

    lein do clean, cljsbuild once min

And open your browser in `resources/public/index.html`. You will not
get live reloading, nor a REPL.

## Testing

`lein test`

## Credits

Macro implementation inspired by https://github.com/matthieu-beteille/cljs-css-modules
