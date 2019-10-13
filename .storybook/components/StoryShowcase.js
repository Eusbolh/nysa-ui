import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { appendClasses } from '../../src/common/helpers';

class StoryShowcase extends Component {
  render() { 
    const { ...props } = this.props;
    return (
      <div className={appendClasses('story-showcase', props.classes)}>{this.props.children}</div>
    );
  }
}

StoryShowcase.propTypes = {
  classes: PropTypes.string,
  children: PropTypes.node,
};

StoryShowcase.defaultProps = {
  classes: null,
  children: null,
};
 
export default StoryShowcase;
