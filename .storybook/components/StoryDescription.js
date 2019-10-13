import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StoryDescription extends Component {
  render() { 
    return (
      <div className="story-description">{this.props.children}</div>
    );
  }
}

StoryDescription.propTypes = {
  children: PropTypes.node,
};

StoryDescription.defaultProps = {
  children: null,
};
 
export default StoryDescription;
