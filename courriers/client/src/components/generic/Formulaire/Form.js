import React from 'react';
import './Form.css';

export default function Form(props) 
{
  return ( 
    <div className="divForm">
      <form id={props.id}>
        {props.children}
      </form>
    </div>
  )
}