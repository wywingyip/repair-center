import ProductModelContainer from './containers/ProductModelContainer'

export default {
  path: 'product-model',
  component: ProductModelContainer
}

// Advanced: Only load the component if we hit the matched path
// export default (store) => ({
//   path: 'product-model',
//   getComponent: (nextState, callback) => {
//     require.ensure([], (require) => {
//       const ProductModelContainer = require('./containers/ProductModelContainer').default
//       callback(null, ProductModelContainer)
//     }, 'productModel')
//   }
// })
