// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/PageLayout/PageLayout'
import React from 'react'
import { IndexRoute, Route } from 'react-router'
import HomeView from './Home/components/HomeView'
import ProductCategoryContainer from './ProductCategory/containers/ProductCategoryContainer'
import ProductModelContainer from './ProductModel/containers/ProductModelContainer'
import IssueDescriptionContainer from './IssueDescription/containers/IssueDescriptionContainer'
import TicketSummaryContainer from './TicketSummary/containers/TicketSummaryContainer'

export default (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={HomeView} />
    <Route path='product-category' component={ProductCategoryContainer} />
    <Route path='product-model' component={ProductModelContainer} />
    <Route path='issue-description' component={IssueDescriptionContainer} />
    <Route path='ticket-summary' component={TicketSummaryContainer} />
  </Route>
)
