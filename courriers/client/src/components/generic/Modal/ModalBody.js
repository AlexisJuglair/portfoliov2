import React from 'react';
import './ModalBody.css';

export default function ModalBody(props) 
{
  return (
    <div className="modalBody">
      {props.children}
    </div>
  );
}