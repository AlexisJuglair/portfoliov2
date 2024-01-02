import React from 'react';
import './DivListe.css';

export default function DivListe(props) 
{
  const bottom = props.bottom ? props.bottom : "80px";

  const style = {
    bottom: bottom
  }

  return ( 
    <div className="divListe" style={style}>
      {props.children}
    </div>
  )
}