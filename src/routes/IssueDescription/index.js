import IssueDescriptionContainer from './containers/issueDescriptionContainer'

export default {
  path: 'issue-description',
  component: IssueDescriptionContainer
}

// Advanced: Only load the component if we hit the matched path
// export default (store) => ({
//   path: 'issue-description',
//   getComponent: (nextState, callback) => {
//     require.ensure([], (require) => {
//       const issueDescriptionContainer = require('./containers/issueDescriptionContainer').default

//       callback(null, issueDescriptionContainer)
//     }, 'issueDescription')
//   }
// })
