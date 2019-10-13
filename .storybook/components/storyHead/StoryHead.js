import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StoryHead extends Component {
  render() {
    const { ...props } = this.props;
    return (
      <div className="n-story-head">
        <div className="n-story-head-title">{props.title}</div>
        <div className="n-story-head-description">{props.description}</div>
      </div>
    );
  }
}

StoryHead.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
};

StoryHead.defaultProps = {
  description: null,
};
 
export default StoryHead;
