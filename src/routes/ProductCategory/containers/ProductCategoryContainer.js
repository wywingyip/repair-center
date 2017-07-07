import { connect } from 'react-redux'
import ProductCategory from '../components/ProductCategory'
import { setCategory } from '../../../modules/ticket'

const mapDispatchToProps = {
  setCategory
}

const mapStateToProps = (state) => ({
  ticket: state.ticket,
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductCategory)
