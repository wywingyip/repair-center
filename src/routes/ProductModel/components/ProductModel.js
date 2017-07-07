import React from 'react'
import PropTypes from 'prop-types'

const ProductModel = ({ ticket, setModel }) => (
  <div>
    <form>
      {modelsForCategory(ticket.category).map((model) => (
        <div className='d-block' key={model}>
          <input type='radio' name='model' value={model}
            onChange={() => setModel(model)}
            checked={ticket.model === model} />{model}
        </div>
      ))}
    </form>
  </div>
)

const models = {
  IPhone: ['IPhone6', 'IPhone6s', 'IPhone7', 'IPhone6 Plus', 'IPhone6s Plus', 'IPhone7 Plus'],
  Macbook: ['Macbook Pro', 'Macbook Air'],
  IPad: ['IPad Pro', 'IPad', 'IPad mini'],
}

const modelsForCategory = (category) => {
  return models[category] || models.IPhone
}

ProductModel.propTypes = {
  ticket: PropTypes.object,
  setModel: PropTypes.func
}

export default ProductModel
