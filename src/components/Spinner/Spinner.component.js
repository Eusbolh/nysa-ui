import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { appendClasses } from '../../common/helpers';

class Spinner extends Component {
  getClasses = ({ ...props }) => {
    let classes = 'n-spinner';
    if (props.classes) {
      classes = appendClasses(classes, props.classes);
    }
    switch (props.size) {
      case 'small':
        classes = appendClasses(classes, 'n-spinner-small');
        break;
      case 'medium':
        classes = appendClasses(classes, 'n-spinner-medium');
        break;
      case 'large':
        classes = appendClasses(classes, 'n-spinner-large');
        break;
      default:
        classes = appendClasses(classes, 'n-spinner-small');
        break;
    }
    return classes;
  }

  getTheme = ({ ...props }) => {
    if (props.theme === 'light' || props.theme === 'dark') {
      return `n-spinner-${props.theme}`;
    }
    return 'n-spinner-light';
  }

  render() {
    const { ...props } = this.props;

    return (
      <div className={this.getTheme(props)}>
        <div className={this.getClasses(props)}></div>
      </div>
    );
  }
}

Spinner.propTypes = {
  classes: PropTypes.string,
  size: PropTypes.string,
  theme: PropTypes.string,
};

Spinner.defaultProps = {
  classes: null,
  size: 'small',
  theme: 'light',
};

export default Spinner;
