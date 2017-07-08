import { connect } from 'react-redux'
import issueDescription from '../components/issueDescription'
import { setDescription } from '../../../modules/ticket'

const mapDispatchToProps = {
  setDescription
}

export default connect(null, mapDispatchToProps)(issueDescription)
