import React from 'react';
import './MenuBar.css';

export default function MenuBar(props) 
{
  const shadow = props.shadow ? props.shadow : "0 5px 30px black, 0 2px 5px black";
  const position = props.position ? props.position : "bottom";
  const align = window.innerWidth < 576 ? "left" : "center";

  const style = 
  {
    boxShadow: shadow,
    textAlign: align
  }
 
  style[position] = (position === "top") ? 0 : "40px";
  
  return (
    <nav className="itemsBar" style={style}>
      {props.children}
    </nav>
  )
}
