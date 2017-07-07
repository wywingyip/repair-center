import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

const ProductCategory = ({ selectedCategory, setCategory }) => (
  <div>
    <form>
      {['Iphone', 'Macbook', 'IPad'].map((category, index) => (
        <div className='d-block' key={index}>
          <input type='radio' name='category'
            value={category} onClick={() => setCategory({ category })} />{category}
        </div>
      ))}
      <Link to='/product-model' className='btn btn-primary'>Next</Link>
    </form>
  </div>
)

ProductCategory.propTypes = {
  selectedCategory: PropTypes.string,
  setCategory: PropTypes.func
}

export default ProductCategory
