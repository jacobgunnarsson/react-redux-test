import Api from '../api'

export const SET_ACTIVE_CATEGORY = 'SET_ACTIVE_CATEGORY'
export const setActiveCategory = activeCategory => ({
  type: SET_ACTIVE_CATEGORY,
  activeCategory,
})

export const RECEIVE_CATEGORY_THREADS = 'RECEIVE_CATEGORY_THREADS'
export const receiveCategoryThreads = (category, threads) => ({
  type: RECEIVE_CATEGORY_THREADS,
  category,
  threads,
})

export const RECEIVE_THREADS = 'RECEIVE_THREADS'
export const receiveThreads = threads => ({
  type: RECEIVE_THREADS,
  threads,
})

export const fetchCurrentThreads = () => {
  return (dispatch, getState) => {
    const state = getState()
    const activeCategory = state.threadList.activeCategory
    const fromIndex = state.threadList.paginationIndex * state.threadList.paginationSize
    const toIndex = fromIndex + state.threadList.paginationSize
    const currentThreads = state.categoryThreads[activeCategory].splice(fromIndex, toIndex);

    Promise.all(currentThreads.map(threadId => dispatch(fetchThreadDetails(threadId))))
      .then(results => {
        dispatch(receiveThreads(results))
      })
      .catch(error => {
        console.log(error);
      })
  }
}

export const fetchThreadDetails = threadId => {
  return dispatch => Api.fetchThreadDetails(threadId)
}

export const fetchCategoryThreads = category => {
  return dispatch => {
    return Api.fetchCategoryThreads(category).then(results => {
      dispatch(receiveCategoryThreads(category, results))
    })
  }
}

export const HIDE_THREAD = 'HIDE_THREAD';
export const hideThread = threadId => ({
  type: HIDE_THREAD,
  threadId,
})
