import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StoryContent extends Component {
  render() {
    const { ...props } = this.props;
    return (
      <div className="n-story-content">
        {props.children}
      </div>
    );
  }
}

StoryContent.propTypes = {
  children: PropTypes.node.isRequired,
};

StoryContent.defaultProps = {
};

export default StoryContent;
