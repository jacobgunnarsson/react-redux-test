const Api = {
  fetchCategoryThreads(category) {
    return new Promise((resolve, reject) => {
      fetch(`https://hacker-news.firebaseio.com/v0/${category}stories.json`)
        .then(response => response.json())
        .then(json => resolve(json))
    })
  },

  fetchThreadDetails(threadId) {
    return new Promise((resolve, reject) => {
      fetch(`https://hacker-news.firebaseio.com/v0/item/${threadId}.json`)
        .then(response => response.json())
        .then(json => resolve(json))
    })
  }
}

export default Api
