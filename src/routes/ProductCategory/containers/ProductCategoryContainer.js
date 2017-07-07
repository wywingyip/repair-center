import { connect } from 'react-redux'
import ProductCategory from '../components/ProductCategory'

const mapStateToProps = (state) => ({
  category: 'IPhone'
})

export default connect(mapStateToProps)(ProductCategory)
