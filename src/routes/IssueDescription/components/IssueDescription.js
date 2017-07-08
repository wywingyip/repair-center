import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

class issueDescription extends Component {
  handleChange = (event) => {
    const { setDescription } = this.props
    setDescription(event.target.value)
  }

  render () {
    return (
      <div>
        <form>
          <div className='d-block'>
            <textarea name='description' placeholder='describe your issue'
              rows='3' cols='50'
              onChange={this.handleChange} />
          </div>
          <Link to='/' className='btn btn-primary'>Submit</Link>
        </form>
      </div>
    )
  }
}

issueDescription.propTypes = {
  setDescription: PropTypes.func
}

export default issueDescription
