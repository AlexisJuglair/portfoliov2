import React from 'react';
import './MenuItemBurger.css';

export default function MenuItemBurger(props) 
{
  return (
    <li id={props.id} className="subLineBurger" onClick={props.click}>
      <i id={`${props.id}_i`} className={props.icone}></i>
      {props.label}
    </li>
  )
}