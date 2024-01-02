import React from 'react';
import './DivFormMain.css';

export default function DivFormMain(props) 
{
  return ( 
    <div className="divFormMain">
      {props.children}
    </div>
  )
}