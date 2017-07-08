import React from 'react'
import { Link } from 'react-router'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'

export const HomeView = () => (
  <div>
    <img alt='This is a duck, because Redux!' className='duck' src={DuckImage} />
    <Link to='/product-category' className='btn btn-secondary d-block'>New ticket</Link>
    <Link to='/ticket-summary' className='btn btn-secondary d-block'>View my ticket</Link>
  </div>
)

export default HomeView
