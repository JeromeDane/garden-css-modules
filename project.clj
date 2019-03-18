(defproject garden-css-modules "0.1.0-SNAPSHOT"
  :description "cljs-css-modules: css modules in clojurescript"

  :url "https://github.com/jeromedane/garden-css-modules"

  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.238"]
                 [org.clojure/core.async  "0.4.474"]
                 [garden "1.3.2"]]

  :test-paths ["test/clj"]

  :plugins [[lein-auto "0.1.2"]
            [lein-doo "0.1.6"]
            [lein-cljsbuild "1.1.4"]
            [lein-figwheel "0.5.16"]
            [lein-cljsbuild "1.1.7" :exclusions [[org.clojure/clojure]]]]

  :cljsbuild {:builds
              [{:id "dev"
                 :source-paths ["src"]
                 :figwheel {:on-jsload "garden-css-modules.core/on-js-reload"}
                            ; :open-urls ["http://localhost:3449/index.html"]}
                 :compiler {:main garden-css-modules.example
                            :asset-path "js/compiled/out"
                            :output-to "resources/public/js/compiled/garden_css_modules.js"
                            :output-dir "resources/public/js/compiled/out"
                            :source-map-timestamp true
                            :preloads [devtools.preload]}}]}

               ; {:id           "test"
               ;   :source-paths ["src/" "test/cljs"]
               ;   :compiler     {:output-to     "resources/public/test/app.test.js"
               ;                  :output-dir    "resources/public/test/out"
               ;                  :main          'cljs-css-modules.runner
               ;                  :optimizations :none}}]}

  :figwheel {;; :http-server-root "public" ;; default and assumes "resources"
             ;; :server-port 3449 ;; default
             ;; :server-ip "127.0.0.1"

             :css-dirs ["resources/public/css"]} ;; watch and update CSS

             ;; Start an nREPL server into the running figwheel process
             ; :nrepl-port 7888

             ;; Server Ring Handler (optional)
             ;; if you want to embed a ring handler into the figwheel http-kit
             ;; server, this is for simple ring servers, if this

             ;; doesn't work for you just run your own server :) (see lein-ring)

             ;; :ring-handler hello_world.server/handler

             ;; To be able to open files in your editor from the heads up display
             ;; you will need to put a script on your path.
             ;; that script will have to take a file path and a line number
             ;; ie. in  ~/bin/myfile-opener
             ;; #! /bin/sh
             ;; emacsclient -n +$2 $1
             ;;
             ;; :open-file-command "myfile-opener"

             ;; if you are using emacsclient you can just use
             ;; :open-file-command "emacsclient"

             ;; if you want to disable the REPL
             ;; :repl false

             ;; to configure a different figwheel logfile path
             ;; :server-logfile "tmp/logs/figwheel-logfile.log"

             ;; to pipe all the output to the repl
             ;; :server-logfile false

             ;; Setting up nREPL for Figwheel and ClojureScript dev
             ;; Please see:
             ;; https://github.com/bhauman/lein-figwheel/wiki/Using-the-Figwheel-REPL-within-NRepl

  :profiles {:dev {:dependencies [[binaryage/devtools "0.9.9"]
                                  [figwheel-sidecar "0.5.16"]
                                  ; [cider/piggieback "0.3.1"]
                                  [figwheel-sidecar "0.5.16"]
                                  [philoskim/debux "0.5.6"]
                                  [reagent "0.8.1"]]
                                  
                   ;; need to add dev source path here to get user.clj loaded
                   :source-paths ["src" "dev"]
                   ;; for CIDER
                   ;; :plugins [[cider/cider-nrepl "0.12.0"]]
                   ; :repl-options {:nrepl-middleware [cider.piggieback/wrap-cljs-repl]}
                   ;; need to add the compliled assets to the :clean-targets
                   :clean-targets ^{:protect false} ["resources/public/js/compiled"
                                                     :target-path]}}

  :auto {:default {:file-pattern #"\.(clj|cljs|cljc|edn)$"}})
