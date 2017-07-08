import React from 'react'
import { IndexLink } from 'react-router'
import PropTypes from 'prop-types'
import Redux from '../../routes/home/assets/redux.png'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div className='container text-center'>
    <h3>
      Welcome to our repair center
      <img className='icon' src={Redux} />
    </h3>
    <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>
    <div className='page-layout__viewport'>
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
