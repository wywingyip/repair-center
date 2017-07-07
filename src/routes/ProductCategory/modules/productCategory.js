// ------------------------------------
// Constants
// ------------------------------------
export const SET_CATEGORY = 'SET_CATEGORY'

// ------------------------------------
// Actions
// ------------------------------------
export function setCategory (category) {
  return {
    type: SET_CATEGORY,
    category
  }
}

export const actions = {
  setCategory,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_CATEGORY]: (state, action) => ({ ...state, category: action.category }),
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}
export default function categoryReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
