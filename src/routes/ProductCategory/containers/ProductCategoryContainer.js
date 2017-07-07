import { connect } from 'react-redux'
import ProductCategory from '../components/ProductCategory'
import { setCategory } from '../../../modules/ticket'

const mapDispatchToProps = {
  setCategory
}

const mapStateToProps = (state) => ({
  selectedCategory: state.category,
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductCategory)
