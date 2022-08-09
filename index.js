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
  let {
    attrs = {},
    rtl,
    index,
    length,
    size,
    gap,
    activeColor,
    deactiveColor
  } = props;
  return /*#__PURE__*/_react.default.createElement("div", _extends({}, attrs, {
    className: 'react-slider-dots' + (attrs.className ? ' ' + attrs.className : ''),
    style: {
      direction: rtl ? 'rtl' : 'ltr',
      ...attrs.style
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      flex: 1
    }
  }), new Array(length).fill(0).map((o, i) => {
    let active = i === index;
    let style = {
      width: size,
      height: size,
      background: active ? activeColor : deactiveColor,
      margin: gap ? `0 ${gap}px` : undefined
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