import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StorySectionTitle extends Component {
  render() { 
    return (
      <div className="story-section-title">{this.props.children}</div>
    );
  }
}

StorySectionTitle.propTypes = {
  children: PropTypes.node,
};

StorySectionTitle.defaultProps = {
  children: null,
};
 
export default StorySectionTitle;
