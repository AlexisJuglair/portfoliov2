import React from 'react';
import './Menu.css';

export default function Menu(props) 
{
  return (
    <ul className="item" style={{float: props.float}}>
      {props.children}
    </ul>
  )
}