import React from 'react'
import PropTypes from 'prop-types'

const ProductCategory = ({ category }) => (
  <div>
    <form>
      <div className='d-block'>
        <input type='radio' name='category' value='IPhone' />IPhone
      </div>
      <div className='d-block'>
        <input type='radio' name='category' value='Macbook' />Macbook
      </div>
      <div className='d-block'>
        <input type='radio' name='category' value='IPad' />IPad
      </div>
    </form>
  </div>
)

ProductCategory.propTypes = {
  category: PropTypes.string
}

export default ProductCategory
