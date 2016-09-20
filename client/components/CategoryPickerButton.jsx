import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class CategoryPickerButton extends Component {
  render() {
    return (
      <Link
        to={this.props.category === 'top' ? '' : this.props.category}
        activeStyle={{
          color: 'red'
        }}
      >
      {this.props.children}
      </Link>
    )
  }
}

CategoryPickerButton.propTypes = { };

export default CategoryPickerButton
