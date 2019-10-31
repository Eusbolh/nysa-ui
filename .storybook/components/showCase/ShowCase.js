import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { appendClasses } from '../../../src/common/helpers';

class ShowCase extends Component {
  getClasses = ({ ...props }) => {
    let classes = 'n-showcase';
    classes = appendClasses(classes, this.getTheme(props));
    return classes;
  }

  getTheme = ({ ...props }) => {
    if (props.theme === 'light' || props.theme === 'dark') {
      return `n-showcase-${props.theme}`;
    }
    return 'n-showcase-light';
  } 

  render() {
    const { ...props } = this.props;
    return (
      <div className={this.getClasses(props)}>{props.children}</div>
    );
  }
}

ShowCase.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.string,
};

ShowCase.defaultProps = {
  children: null,
  theme: 'light',
};

export default ShowCase;
