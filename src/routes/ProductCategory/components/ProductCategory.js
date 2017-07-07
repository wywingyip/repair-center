import React from 'react'
import PropTypes from 'prop-types'

const ProductCategory = ({ cateory }) => (
  <div>I choose {{ cateory }}</div>
)

ProductCategory.propTypes = {
  cateory: PropTypes.string
}

export default ProductCategory
