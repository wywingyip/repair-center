import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Summary = ({ ticket }) => (

  <div>
    {ticket.description ?
      (
        <div>
          <h1>Your ticket info</h1>
          <p>Category: {ticket.category}<br/>
          Model: {ticket.model}<br/>
          Description: {ticket.description}</p>
        </div>
      ) :
      (
        <div>You haven't submitted a ticket yet</div>
      )
    }

  </div>

)



const mapStateToProps = (state) => ({
  ticket: state.ticket,
})

export default connect(mapStateToProps, null)(Summary)
