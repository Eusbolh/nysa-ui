import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StoryTitle extends Component {
  render() { 
    return (
      <div className="story-title">{this.props.children}</div>
    );
  }
}

StoryTitle.propTypes = {
  children: PropTypes.node,
};

StoryTitle.defaultProps = {
  children: null,
};
 
export default StoryTitle;
