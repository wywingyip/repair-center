import React from 'react'
import PropTypes from 'prop-types'

const ProductCategory = ({ category }) => (
  <div>
    I choose {category}
  </div>
)

ProductCategory.propTypes = {
  category: PropTypes.string
}

export default ProductCategory
