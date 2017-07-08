export default (store) => ({
  path: 'product-model',
  getComponent: (nextState, callback) => {
    require.ensure([], (require) => {
      const ProductModelContainer = require('./containers/ProductModelContainer').default
      callback(null, ProductModelContainer)
    }, 'productModel')
  }
})
