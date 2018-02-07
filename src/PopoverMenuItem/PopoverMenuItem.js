import React from 'react';
import PropTypes from 'prop-types';
import WixComponent from '../BaseComponents/WixComponent';
import styles from './PopoverMenuItem.scss';
import typography from '../../src/Typography';
import classNames from 'classnames';

class PopoverMenuItem extends WixComponent {
  static propTypes = {
    icon: PropTypes.node,
    text: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.oneOf(['normal', 'large'])
  };

  static defaultProps = {
    size: 'normal'
  };

  typographyStyle() {
    return this.props.size === 'normal' ? typography.t3 : typography.t1;
  }

  render() {
    return (
      <li className={classNames(this.typographyStyle(), styles.menuItem)}>
        <button type="button" className={styles.button} onClick={this.props.onClick}>
          <span className={styles.icon}>{this.props.icon}</span>
          <span className={styles.text} data-hook="menu-item-text">{this.props.text}</span>
        </button>
      </li>
    );
  }
}

export default PopoverMenuItem;
