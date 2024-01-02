import React from 'react';
import './ModalTitle.css';

export default function ModalTitle(props) 
{
  const type = props.type ? props.type : "default";
  const title = props.title ? props.title : "Information";

  return (
    <div className={`modalTitle ${type}`}>
      {title}
    </div>
  );
}