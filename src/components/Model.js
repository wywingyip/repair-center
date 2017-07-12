import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setModel } from '../actionsAndReducers/ticket'

const models = {
  iPhone: ['iPhone6s', 'iPhone7', 'iPhone6s Plus', 'iPhone7 Plus'],
  Macbook: ['Macbook Pro', 'Macbook Air'],
  iPad: ['iPad Pro', 'iPad', 'iPad mini'],
}

const Model = ({ticket, setModel}) => (
  <div>
    {modelsForCategory(ticket.category).map((model, index) => (
      <Link to='/description'
        className={`btn btn-secondary d-block  ${model === ticket.model ? 'active' : ''}`}
        key={index} onClick={() => setModel(model)}>{model}
      </Link>
    ))}
  </div>
)


const modelsForCategory = (category) => {
  return models[category] || models.iPhone
}

const mapStateToProps = (state) => ({
  ticket: state.ticket
})

const mapDispatchToProps = {
  setModel
}

export default connect(mapStateToProps, mapDispatchToProps)(Model)
