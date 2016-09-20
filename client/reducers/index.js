import { combineReducers } from 'redux'

import { threads } from './threads'
import { categoryThreads } from './categoryThreads'
import { threadList } from './threadList'

const RootReducer = combineReducers({
  threads,
  threadList,
  categoryThreads,
})

export default RootReducer
