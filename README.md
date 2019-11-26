# hello_world
A template for a [typescript](https://www.typescriptlang.org)/[sass](https://sass-lang.com) web app, with polyfills and a CSS reset

## Highlights

- Webpack 4, Typescript, TSLint, Sass
- Polyfills ([core-js](https://github.com/zloirock/core-js), [regenerator-runtime](https://github.com/facebook/regenerator/tree/master/packages/regenerator-runtime)) and a CSS reset ([normalize.css](https://necolas.github.io/normalize.css/))
- [Hot reloading](https://webpack.js.org/concepts/hot-module-replacement) of stylesheets and selected TypeScript modules
- Source maps, css extraction
- Code minification in production mode

## Get started!

1. Clone the repo: `git clone https://github.com/Aloso/hello_world.git YOUR_APP_NAME`
2. Run `npm install` (you can ignore warnings for `sass-loader` and `fsevents`)
3. Replace the metadata in `package.json`
4. Insert your name and the current year in `LICENSE` after "Copyright (c)"
5. Search for comments starting with `TODO:`, here you probably have to do something
6. Start the development server with `npm start`
7. Start coding!

## Features

- Typescript configuration with
  - Source maps
  - `esnext` module syntax, e.g. `import { Foo } from 'bar'`
  - Dynamic imports, e.g. `import(/* webpackChunkName: "foo" */ './foo').then(...)`
  - `strict`, `noImplicitAny`: catches many bugs/mistakes with stricter type checking

- Tslint: Enforce good coding practices, as well as a uniform code style
  - Indent with spaces
  - No semicolons
  - Single quotes for strings
  - Trailing commas (better for diff tools)
  - Enforce `const`/`readonly` where possible
  - Enforce `===` in most cases
  - No fall-through in `switch`
  - ...

- Webpack bundler
  - Configured to bundle JS, TS, CSS and Sass files, with source maps
  - Stylesheets are extracted to separate files
  - Output is in `./dist`
  - **Development** mode, featuring _live reloading_ and _[hot module replacement](https://webpack.js.org/concepts/hot-module-replacement)_:
    - Start development server with `npm start` (recommended)
    - Compile once with `npm run build`
    - Compile and watch for changes with `npm run watch` (no live reloading, no hot module replacement)
  - **Production** mode, featuring best _code optimization_:
    - Compile with `npm run prod`
    - Run development server in production mode: `npm run serve` (not recommended)

- `index.ts` contains
  - Global imports for polyfills
  - Stylesheets `normalize.css` and `global-styles.sass`

- `index.html` contains
  - Charset, language, viewport
  - Roboto font
  - Title, description
  - Meta tags for social media
  - Comment linking to a professional favicon generator
  - Webpack script and stylesheet bundles

- `manifest.json` is a [web app manifest](https://developers.google.com/web/fundamentals/web-app-manifest).
  - You need to insert your app's info.
  - You can set a background and theme color, and make various customizations.
  - You can generate favicons in different sizes [here](https://realfavicongenerator.net/).
