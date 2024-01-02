import React from 'react';
import './Fieldset.css';

export default function Fieldset(props) 
{
  return ( 
    <fieldset className="fieldset">
      <legend>{props.legend}</legend>
      {props.children}
    </fieldset>
  )
}
