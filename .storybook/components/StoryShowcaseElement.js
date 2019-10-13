import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StoryShowcaseElement extends Component {
  render() { 
    return (
      <div className="story-showcase-element">{this.props.children}</div>
    );
  }
}

StoryShowcaseElement.propTypes = {
  children: PropTypes.node,
};

StoryShowcaseElement.defaultProps = {
  children: null,
};
 
export default StoryShowcaseElement;
