import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SectionContent extends Component {
  render() {
    const { ...props } = this.props;
    return (
      <div className="n-section-content">
        {props.children}
      </div>
    );
  }
}

SectionContent.propTypes = {
  children: PropTypes.node.isRequired,
};

SectionContent.defaultProps = {
};

export default SectionContent;
