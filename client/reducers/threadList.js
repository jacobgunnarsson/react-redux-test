
import { SET_ACTIVE_CATEGORY } from '../actions'

const initialState = {
  activeCategory: 'top',
  paginationIndex: 0,
  paginationSize: 10,
}

export const threadList = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_CATEGORY:
      return Object.assign({}, state, {
        activeCategory: action.activeCategory
      })

    default: return state
  }
}
