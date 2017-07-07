// ------------------------------------
// Constants
// ------------------------------------
export const SET_MODEL = 'SET_MODEL'

// ------------------------------------
// Actions
// ------------------------------------
export function setModel (model) {
  return {
    type: SET_MODEL,
    model
  }
}

export const actions = {
  setModel,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_MODEL]: (state, action) => ({ ...state, model: action.model }),
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}
export default function modelReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
