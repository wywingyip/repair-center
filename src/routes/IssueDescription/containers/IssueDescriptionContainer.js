import { connect } from 'react-redux'
import issueDescription from '../components/issueDescription'
import { setDescription } from '../../../modules/ticket'

const mapStateToProps = (state) => ({
  ticket: state.ticket,
})

const mapDispatchToProps = {
  setDescription
}

export default connect(mapStateToProps, mapDispatchToProps)(issueDescription)
