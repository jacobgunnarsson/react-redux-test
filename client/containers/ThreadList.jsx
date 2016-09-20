import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

import { fetchTopThreads, hideThread } from '../actions'

import Thread from '../containers/Thread';

class ThreadList extends Component {
  componentWillUpdate(prevProps, newProps) {

  }

  render() {
    return (
      <div>
        <p>
          {this.props.isFetchingPosts ? 'FETCHING POSTS!' : ''}
        </p>
        <ul>
          {Object.keys(this.props.threads).map(threadId => {
            const thread = this.props.threads[threadId]

            if (!thread.isHidden) {
              return <Thread key={thread.id} {...thread} />
            }
          })}
        </ul>
      </div>
    )
  }
};

ThreadList.propTypes = { }

const mapStateToProps = (state, { params }) => ({
  threads: state.threads,
  threadList: state.threadList,
  category: params.category,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onHideThreadButtonClick: threadId => {
    dispatch(hideThread(threadId))
  }
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(ThreadList))
