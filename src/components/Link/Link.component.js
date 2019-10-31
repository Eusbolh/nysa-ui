import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '..';
import { appendClasses } from '../../common/helpers';

class Link extends Component {
  getClasses = ({ ...props }) => {
    let classes = 'n-link';
    if (props.classes) {
      classes = appendClasses(classes, props.classes);
    }
    if (props.intent) {
      classes = appendClasses(classes, `n-link-intent-${props.intent}`);
    }
    return classes;
  }

  render() {
    const { ...props } = this.props;
    return (
      <Button
        anchor={true}
        classes={this.getClasses(props)}
        href={props.href}
        onClick={props.onClick}
        text={props.text}
      />
    );
  }
}

Link.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.string,
  href: PropTypes.string,
  intent: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
};

Link.defaultProps = {
  children: null,
  classes: null,
  href: null,
  intent: 'primary',
  onClick: null,
  text: null,
};

export default Link;
