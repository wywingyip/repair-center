import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

const ProductCategory = ({ ticket, setCategory }) => (
  <div>
    <form>
      {['IPhone', 'Macbook', 'IPad'].map((category, index) => (
        <div className='d-block' key={index}>
          <input type='radio' name='category' value={category}
            onChange={() => setCategory(category)}
            checked={ticket.category === category} />{category}
        </div>
      ))}
      <Link to='/product-model' className='btn btn-primary'>Next</Link>
    </form>
  </div>
)

ProductCategory.propTypes = {
  ticket: PropTypes.object,
  setCategory: PropTypes.func
}

export default ProductCategory
