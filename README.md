# garden-css-modules
Apply CSS module style class name hashing to garden data. Learn more about the principle [here](https://glenmaddern.com/articles/css-modules).

WORK IN PROGRESS. NO GUARANTEES AT THIS POINT.

## Development

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

### Testing

`lein test`
