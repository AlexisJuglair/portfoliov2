import React from 'react';
import './Tr.css';

export default function Tr(props) 
{
  return ( 
    <tr id={props.table+"_"+props.recordId} className="trList">
      {props.children}
    </tr>
  )
}