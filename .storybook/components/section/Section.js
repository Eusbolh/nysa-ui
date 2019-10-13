import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Section extends Component {
  render() {
    const { ...props } = this.props;
    return (
      <div className="n-section">
        {props.children}
      </div>
    );
  }
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

Section.defaultProps = {
};

export default Section;
