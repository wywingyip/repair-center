import { connect } from 'react-redux'
import ProductModel from '../components/ProductModel'
import { setModel } from '../modules/productModel'

const mapDispatchToProps = {
  setModel
}

const mapStateToProps = (state) => ({
  selectedModel: state.model,
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductModel)
