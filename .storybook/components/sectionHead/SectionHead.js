import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SectionHead extends Component {
  render() {
    const { ...props } = this.props;
    return (
      <div className="n-section-head">
        <div className="n-section-head-title">{props.title}</div>
        <div className="n-section-head-description">{props.description}</div>
      </div>
    );
  }
}

SectionHead.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
};

SectionHead.defaultProps = {
  description: null,
};

export default SectionHead;
