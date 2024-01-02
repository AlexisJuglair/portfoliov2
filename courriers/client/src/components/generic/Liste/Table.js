import React from 'react';
import './Table.css';

export default function Table(props) 
{
  return ( 
    <table className="tableList">
      {props.children}
    </table>
  )
}