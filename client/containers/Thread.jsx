import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { hideThread } from '../actions'

class Thread extends Component {
  render() {
    return (
      <li>
        <a href={this.props.url} target="_blank">{this.props.title}</a>
        <button onClick={this.props.onHideThreadButtonClick}>Hide</button>
      </li>
    )
  }
}

Thread.propTypes = { };

const mapStateToProps = (state, ownProps) => ({ })

const mapDispatchToProps = (dispatch, ownProps) => ({
  onHideThreadButtonClick: () => {
    dispatch(hideThread(ownProps.id))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Thread)
