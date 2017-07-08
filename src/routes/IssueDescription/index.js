export default (store) => ({
  path: 'issue-description',
  getComponent: (nextState, callback) => {
    require.ensure([], (require) => {
      const issueDescriptionContainer = require('./containers/issueDescriptionContainer').default

      callback(null, issueDescriptionContainer)
    }, 'issueDescription')
  }
})
