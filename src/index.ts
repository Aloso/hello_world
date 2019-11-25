// polyfills:
import 'babel-polyfill'

// this is the entry point of your application!

// you can dynamically load other modules:
import(/* webpackChunkName: "dyn-module" */ './dyn-module').then(({ message }) => {
  console.log(message)
})
