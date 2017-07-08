import ProductCategoryContainer from './containers/ProductCategoryContainer'
export default {
  path: 'product-category',
  component:   ProductCategoryContainer
}

// Advanced: Only load the component if we hit the matched path
// export default (store) => ({
//   path: 'product-category',
//   getComponent: (nextState, callback) => {
//     require.ensure([], (require) => {
//       const ProductCategoryContainer = require('./containers/ProductCategoryContainer').default

//       callback(null, ProductCategoryContainer)
//     }, 'productCategory')
//   }
// })
