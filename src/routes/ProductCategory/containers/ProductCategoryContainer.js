import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ProductCategory from '../components/ProductCategory'
import { setCategory } from '../../../modules/ticket'

const mapDispatchToProps = {
  setCategory
}

const mapStateToProps = (state) => ({
  ticket: state.ticket,
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductCategory))
