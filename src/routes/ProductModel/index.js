import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'product-model',
  getComponent: (nextState, callback) => {
    require.ensure([], (require) => {
      const ProductModelContainer = require('./containers/ProductModelContainer').default
      const reducer = require('./modules/productModel').default

      injectReducer(store, { key: 'ticket', reducer })

      callback(null, ProductModelContainer)
    }, 'productModel')
  }
})
