import React from 'react'
import PropTypes from 'prop-types'

const ProductModel = ({ selectedModel, setModel }) => (
  <div>
    <form>
      {['IPhone6', 'IPhone6s', 'IPhone7', 'IPhone6 Plus', 'IPhone6s Plus', 'IPhone7 Plus'].map((model) => (
        <div className='d-block' key={model}>
          <input type='radio' name='model' value={model}
            onClick={() => setModel({ model })} />{model}
        </div>
      ))}
    </form>
  </div>
)

ProductModel.propTypes = {
  selectedModel: PropTypes.string,
  setModel: PropTypes.func
}

export default ProductModel
