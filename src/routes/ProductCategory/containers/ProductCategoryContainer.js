import { connect } from 'react-redux'
import ProductCatefory from '../components/ProductCategory'

const mapStateToProps = (state) => ({
  counter: state.counter
})

export default connect(mapStateToProps)(ProductCatefory)
