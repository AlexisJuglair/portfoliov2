import React from 'react';
import './ModalFoot.css';

export default function ModalFoot(props) 
{
  return (
    <div className="modalFoot">
      {props.children}
    </div>
  );
}