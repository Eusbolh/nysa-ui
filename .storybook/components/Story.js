import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Story extends Component {
  render() { 
    return (
      <div className="story">{this.props.children}</div>
    );
  }
}

Story.propTypes = {
  children: PropTypes.node,
};

Story.defaultProps = {
  children: null,
};
 
export default Story;
