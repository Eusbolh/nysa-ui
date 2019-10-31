import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { appendClasses } from '../../common/helpers';
import Spinner from '../Spinner';

class Button extends Component {
  getClasses = ({ ...props }) => {
    let classes = 'n-btn';
    if (props.classes) {
      classes = appendClasses(classes, props.classes);
    }
    if (props.intent) {
      classes = appendClasses(classes, `n-btn-intent-default n-btn-intent-${props.intent}`);
    }
    if (props.minimal) {
      classes = appendClasses(classes, 'n-btn-minimal');
    }
    if (props.disabled) {
      classes = appendClasses(classes, 'n-btn-disabled');
    }
    if (props.loading) {
      classes = appendClasses(classes, 'n-btn-loading');
    }
    return classes;
  }

  getContent = ({ ...props }) => {
    if (props.loading) {
      return (
        <div style={{ width: '19px', height: '19px' }}>
          <Spinner theme={props.spinnerTheme} />
        </div>
      );
    }
    return props.children || props.text;
  }

  render() {
    const { ...props } = this.props;
    if (props.anchor) {
      return (
        <button // eslint-disable-line
          className={this.getClasses(props)}
          onClick={props.onClick}
          type={props.type}
        >
          <a
            disabled={props.disabled || props.loading}
            href={props.href}
            onClick={e => e.preventDefault()}
            onKeyPress={props.onClick}
            role="button"
            tabIndex={props.disabled ? -1 : 0}
          >
            {this.getContent(props)}
          </a>
        </button>
      );
    }
    return (
      <button // eslint-disable-line
        className={this.getClasses(props)}
        disabled={props.disabled || props.loading}
        onClick={props.onClick}
        type={props.type}
      >
        {this.getContent(props)}
      </button>
    );
  }
}

Button.propTypes = {
  anchor: PropTypes.bool,
  classes: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  intent: PropTypes.string,
  loading: PropTypes.bool,
  minimal: PropTypes.bool,
  onClick: PropTypes.func,
  spinnerTheme: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  anchor: false,
  classes: null,
  children: null,
  disabled: false,
  href: null,
  intent: 'default',
  loading: false,
  minimal: false,
  onClick: null,
  spinnerTheme: 'light',
  text: null,
  type: 'button',
};

export default Button;
