/**
 * 基于antd的Input组件，封装Input，自带trim功能，可配置
 * trim:['both', 'all', 'none']
 * both: 去除字符串两端（默认）空白字符
 * all: 去除字符串内任何空白字符
 * none：不去除空白符
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from 'antd/lib/input';

export default class LocalInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trim: this.props.trim || 'both',
      value: this.props.value || this.props.defaultValue || '',
    };
  }
  localEvent(e) {
    let value = e.target.value;
    switch (this.state.trim) {
      case 'both':
        value = e.target.value.trim();
        break;
      case 'all':
        value = e.target.value.replace(/\s/g, '');
        break;
      default: value = e.target.value;
    }
    return {
      ...e,
      target: {
        ...e.target,
        value,
      },
    };
  }
  blur(e) {
    const event = this.localEvent(e);
    this.change(event);
    if (typeof this.props.onBlur === 'function') {
      this.props.onBlur(event);
    }
  }
  change(e) {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(e);
    }
  }
  pressEnter(e) {
    const event = this.localEvent(e);
    this.change(event);
    setTimeout(() => { // 保证在change之后执行
      if (typeof this.props.onPressEnter === 'function') {
        this.props.onPressEnter(event);
      }
    }, 0);
  }
  render() {
    const localProps = {
      ...this.props,
      onBlur: e => this.blur(e),
      onPressEnter: e => this.pressEnter(e),
    };
    return (
      <Input
        {...localProps}
      />
    );
  }
}

LocalInput.propTypes = {
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  trim: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onPressEnter: PropTypes.func,
};
