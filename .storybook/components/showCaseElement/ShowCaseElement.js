import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShowCaseElement extends Component {
  render() {
    return (
      <div className="n-showcaseelement">
        <div className="n-showcaseelement-title">{this.props.title}</div>
        <div className="n-showcaseelement-content">{this.props.children}</div>
      </div>
    );
  }
}

ShowCaseElement.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

ShowCaseElement.defaultProps = {
  children: null,
  title: null,
};

export default ShowCaseElement;
