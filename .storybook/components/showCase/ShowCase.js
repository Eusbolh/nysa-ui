import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShowCase extends Component {
  render() {
    return (
      <div className="n-showcase">{this.props.children}</div>
    );
  }
}

ShowCase.propTypes = {
  children: PropTypes.node,
};

ShowCase.defaultProps = {
  children: null,
};

export default ShowCase;
