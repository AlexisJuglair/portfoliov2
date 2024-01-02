import React from 'react';
import './Theadbody.css';

export default function Theadbody(props) 
{
  return ( 
    (props.element === "thead"
      ? <thead className="theadList">
        {props.children}
      </thead>
      : <tbody className="tbodyList">
        {props.children}
      </tbody>
    )
  )
}