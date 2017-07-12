import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setDescription } from '../actionsAndReducers/ticket'

const Description = ({ ticket, setDescription }) => (
    <form>
        <textarea name='description'
          placeholder='describe your issue'
          rows='3' cols='50'
          defaultValue={ticket.description}
          className='form-control d-block'
          onBlur={(event) => setDescription(event.target.value)} />
        <Link to='/summary' className='btn btn-primary'>Submit</Link>
      </form>

)



const mapStateToProps = (state) => ({
  ticket: state.ticket,
})

const mapDispatchToProps = {
  setDescription
}

export default connect(mapStateToProps, mapDispatchToProps)(Description)
