export const message = 'other module loaded'

const interval = setInterval(() => console.log('Hello world'), 3000)

if (module.hot) {
  module.hot.addDisposeHandler(() => clearInterval(interval))
  module.hot.accept()
}
