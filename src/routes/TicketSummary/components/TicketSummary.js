import React from 'react'
import { Link } from 'react-router'
import './TicketSummary.scss'

export const TicketSummary = ({ticket}) => {
  return(
    <div>
      <h4>Submitted ticket</h4>
      <div><span>Category: </span><span>{ticket.category}</span></div>
      <div><span>Model: </span><span>{ticket.model}</span></div>
      <div><span>Description: </span><span>{ticket.description}</span></div>
    </div>
  );
}

export default TicketSummary
