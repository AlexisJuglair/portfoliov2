import React from 'react';
import './MenuSubItem.css'

export default function MenuSubItem(props) 
{
  return (
    <li id={props.id} className="subLine" onClick={props.click}>
      {props.label}
    </li>
  );
}
