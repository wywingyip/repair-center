import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'product-category',
  getComponent: (nextState, callback) => {
    require.ensure([], (require) => {
      const ProductCategoryContainer = require('./containers/ProductCategoryContainer').default
      const reducer = require('./modules/productCategory').default

      injectReducer(store, { key: 'ticket', reducer })

      callback(null, ProductCategoryContainer)
    }, 'productCategory')
  }
})
