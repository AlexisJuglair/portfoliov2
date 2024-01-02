import React from 'react';
import './MenuItem.css';

export default function MenuItem(props) 
{
  return (
    <li id={props.id} className="line" onClick={props.click} >
      {props.label}
      {props.children &&
        <ul className="subItem">
          {props.children}
        </ul>
      }
    </li>
  )
}
