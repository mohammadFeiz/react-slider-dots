import React from "react";
import "./index.css";

export default function ReactSliderDots(props) {
  return (
    <div {...props.attrs} className={'react-slider-dots' + (props.attrs && props.attrs.className?' ' + props.attrs.className:'')} style={{direction:props.rtl?'rtl':'ltr',...props.attrs.style}}>
      <div style={{flex:1}}></div>
      {new Array(props.length).fill(0).map((o,i) => {
        let active = i === props.index;
        let style = {
          width:props.size,
          height:props.size,
          background:active?props.activeColor:props.deactiveColor,
          margin:props.gap?`0 ${props.gap}px`:undefined
        }
        return (
          <div className={'react-slider-dots-item' + (active?' active':'')} style={style}></div>
        )
      })}
      <div style={{flex:1}}></div>
    </div>
  )
}
