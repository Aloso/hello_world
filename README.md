# ts-template
A template for a ts/sass web app, with core-js and normalize.css

## Features

- Typescript configuration with
  - Source maps
  - `esnext` module syntax, e.g. `import { Foo } from 'bar'`
  - `strict`, `noImplicitAny`: catches many bugs/mistakes by stricter type checks

- Tslint: Enforce good coding practices, as well as a uniform code style
  - indent with spaces
  - no semicolons
  - single quotes for strings
  - trailing commas (better for diff tools)
  - enforce `readonly` where possible
  - enforce `===` in most cases
  - ...

- Webpack bundler
  - bundles Javascript, Typescript, CSS and Sass files
  - source maps in development mode

- `index.ts` contains
  - global import for `core-js`
  - imports of the stylesheets `normalize.css` and `global-styles.sass`

- `index.html` contains
  - charset, language, viewport
  - Roboto font
  - Title, description
  - Meta tags for social media
  - comment linking to a professional favicon generator
  - webpack script/stylesheet bundle

- MIT license
