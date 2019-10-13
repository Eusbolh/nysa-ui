import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StorySection extends Component {
  render() { 
    return (
      <div className="story-section">{this.props.children}</div>
    );
  }
}

StorySection.propTypes = {
  children: PropTypes.node,
};

StorySection.defaultProps = {
  children: null,
};
 
export default StorySection;
