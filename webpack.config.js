const path = require('path');

module.exports = {
  // webpack folder’s entry js — excluded from jekll’s build process.
  entry: "./webpack/entry.js",
  output: {
    // we’re going to put the generated file in the assets folder so jekyll will grab it.
    // if using GitHub Pages, use the following:
    // path: "assets/javascripts"
    path: path.resolve(__dirname, "src/assets/js/"),
    filename: "bundle.js"
  },
  module: {
    // configuration regarding modules
    rules:[ 
      // rules for modules (configure loaders, parser options, etc.)
      {
        test: /\.jsx?$/,
        
        exclude: /(node_modules)/,
        // these are matching conditions, each accepting a regular expression or string
        // test and include have the same behavior, both must be matched
        // exclude must not be matched (takes preferrence over test and include)
        // Best practices:
        // - Use RegExp only in test and for filename matching
        // - Use arrays of absolute paths in include and exclude
        // - Try to avoid exclude and prefer include
        //issuer: { test, include, exclude },
        // conditions for the issuer (the origin of the import)
        //enforce: "pre",
        //enforce: "post",
        // flags to apply these rules, even if they are overridden (advanced option)
        loader: "babel-loader",
        // the loader which should be applied, it'll be resolved relative to the context
        options: {
          presets: ["@babel/react"]
        }
        // options for the loader
      }

      ]
    },
    mode: 'development'
};