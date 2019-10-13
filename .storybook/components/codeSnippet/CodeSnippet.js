import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CodeSnippet extends Component {
  render() {
    const { ...props } = this.props;
    return (
      <div className="n-code-snippet">
        {props.children}
      </div>
    );
  }
}

CodeSnippet.propTypes = {
  children: PropTypes.node.isRequired,
};

CodeSnippet.defaultProps = {
};

export default CodeSnippet;
