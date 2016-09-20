import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import CategoryPickerButton from './CategoryPickerButton'

class CategoryPicker extends Component {
  render() {
    return (
      <ul>
        <li>
          <CategoryPickerButton category="top">Top</CategoryPickerButton>
        </li>
        <li>
          <CategoryPickerButton category="new">New</CategoryPickerButton>
        </li>
      </ul>
    )
  }
}

CategoryPicker.propTypes = {};

const mapStateToProps = (state, ownProps) => ({ })

const mapDispatchToProps = (dispatch, ownProps) => ({ })

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryPicker)
