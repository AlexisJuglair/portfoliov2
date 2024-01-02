import React from 'react';
import './Modal.css';

export default function Modal(props) 
{
  const width = window.innerWidth > 700 ? props.w : window.innerWidth - 20; 

  const style =
  {
    height: props.h,
    width: width
  }
  
  return (
    <div className="modal" style={style}>
      {props.children}
    </div>
  );
}
