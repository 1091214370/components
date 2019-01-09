/* eslint-disable */
/**
 * 基于antd的Input组件，封装Input,提供trim和clear能力
 * 开发思路：考虑受控和非受控组件
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from 'antd/lib/input';
import { Icon } from 'antd';
import '../style/index.css';

export default class LocalInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmpty: false,
      trim: this.props.trim || 'both',
    };
  }
  localEvent(e) {
    let value = e.target.value;
    if (this.state.isEmpty) {
      value = '';
    } else {
      switch (this.state.trim) {
        case 'both':
          value = e.target.value.trim();
          break;
        case 'all':
          value = e.target.value.replace(/\s/g, '');
          break;
        default: value = e.target.value;
      }
    }

    if (this.state.isEmpty) this.setState({ isEmpty: false });
    return {
      ...e,
      target: {
        ...e.target,
        value,
      },
    };
  }
  focus(e) {
    this.clearInput.input.focus();
    const event = this.localEvent(e);
    this.change(event);
    if (typeof this.props.onFocus === 'function') {
      this.props.onFocus(event);
    }
  }
  blur(e) {
    const event = this.localEvent(e);
    this.change(event);
    if (typeof this.props.onBlur === 'function') {
      this.props.onBlur(event);
    }
  }
  change(e) {
    // this.setState({ value: e.target.value });
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(e);
    }
  }
  // 回车
  pressEnter(e) {
    const event = this.localEvent(e);
    this.change(event);
    setTimeout(() => { // 保证在change之后执行
      if (typeof this.props.onPressEnter === 'function') {
        this.props.onPressEnter(event);
      }
    }, 0);
  }
  // 点击清除
  clearValue = () => {
    this.setState({ isEmpty: true });
    setTimeout(() => { // 保证在change之后执行
      this.clearInput.input.focus();
    }, 0);
  }
  render() {
    const { value, defaultValue } = this.props;
    const localProps = {
      ...this.props,
      onFocus: e => this.focus(e),
      onBlur: e => this.blur(e),
      onPressEnter: e => this.pressEnter(e),
      onChange: e => this.change(e),
    };
    const flag = !('allowClear' in this.props) && 'clearbtn' in this.props && this.props.clearbtn !=='false' && (value || defaultValue);
    return (
      <div style={{ position: 'relative' }}>
        <Input
          {...localProps}
          ref={node => (this.clearInput = node)}
        />
        {flag && <Icon
          type="close-circle"
          className="clearIcon"
          onClick={this.clearValue}
        />}
      </div>
    );
  }
}

LocalInput.propTypes = {
  clearbtn: PropTypes.string,
  trim: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  onPressEnter: PropTypes.func,
};