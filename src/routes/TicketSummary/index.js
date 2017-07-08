import TicketSummaryContainer from './containers/TicketSummaryContainer'

export default {
  path: 'ticket-summary',
  component: TicketSummaryContainer
}

// Advanced: Only load the component if we hit the matched path
// export default (store) => ({
//   path: 'ticket-summary',
//   getComponent: (nextState, callback) => {
//     require.ensure([], (require) => {
//       const TicketSummaryContainer = require('./containers/TicketSummaryContainer').default
//       callback(null, TicketSummaryContainer)
//     }, 'ticketSummary')
//   }
// })
