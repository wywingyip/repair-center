import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setCategory } from '../actionsAndReducers/ticket'

const Category = ({ticket, setCategory}) => (
  <div>
    {['iPhone', 'iPad', 'Macbook'].map((category, index) => (
      <Link to='/model' className='btn btn-secondary d-block' onClick={() => setCategory(category)}>{category}</Link>
    ))}
  </div>
)

const mapStateToProps = (state) => ({
  ticket: state.ticket
})

const mapDispatchToProps = {
  setCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)
