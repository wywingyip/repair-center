export default (store) => ({
  path: 'product-category',
  getComponent: (nextState, callback) => {
    require.ensure([], (require) => {
      const ProductCategoryContainer = require('./containers/ProductCategoryContainer').default
      callback(null, ProductCategoryContainer)
    }, 'productCategory')
  }
})
