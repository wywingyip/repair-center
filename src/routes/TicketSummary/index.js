export default (store) => ({
  path: 'ticket-summary',
  getComponent: (nextState, callback) => {
    require.ensure([], (require) => {
      const TicketSummaryContainer = require('./containers/TicketSummaryContainer').default
      callback(null, TicketSummaryContainer)
    }, 'ticketSummary')
  }
})
