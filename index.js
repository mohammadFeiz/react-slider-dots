"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ReactSliderDots;

var _react = _interopRequireDefault(require("react"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ReactSliderDots(props) {
  return /*#__PURE__*/_react.default.createElement("div", _extends({}, props.attrs, {
    className: 'react-slider-dots' + (props.attrs && props.attrs.className ? ' ' + props.attrs.className : ''),
    style: {
      direction: props.rtl ? 'rtl' : 'ltr',
      ...props.attrs.style
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      flex: 1
    }
  }), new Array(props.length).fill(0).map((o, i) => {
    let active = i === props.index;
    let style = {
      width: props.size,
      height: props.size,
      background: active ? props.activeColor : props.deactiveColor,
      margin: props.gap ? `0 ${props.gap}px` : undefined
    };
    return /*#__PURE__*/_react.default.createElement("div", {
      className: 'react-slider-dots-item' + (active ? ' active' : ''),
      style: style
    });
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      flex: 1
    }
  }));
}