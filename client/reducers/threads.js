
import { HIDE_THREAD, RECEIVE_THREADS } from '../actions'

export const threads = (state = {}, action) => {
  switch (action.type) {
    case HIDE_THREAD:
      if (Object.keys(state).indexOf(action.threadId) > 0) {
        state[action.threadId].isHidden = true;
      }

      return state

    case RECEIVE_THREADS:
      const newState = Object.assign({}, state)

      action.threads.map(thread => {
        newState[thread.id] = Object.assign(thread, {
          isHidden: false
        })
      })

      return newState

    default: return state
  }
};
