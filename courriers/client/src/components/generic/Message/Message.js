import React from 'react';
import './Message.css';

export default function Message(props) 
{
  return (
    <div className={`message ${props.type}`}>
      <p>{props.message}</p>
    </div>
  )
}
