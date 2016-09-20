import { RECEIVE_CATEGORY_THREADS } from '../actions'

export const categoryThreads = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CATEGORY_THREADS:
      return Object.assign({}, state, {
        [action.category]: [...action.threads]
      })

    default: return state
  }
}
