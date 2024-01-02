import React from 'react';
import './MenuTexte.css';

export default function MenuTexte(props) 
{
  const fontSize = props.fontSize ? props.fontSize : "16px";
  const float = props.float ? props.float : "";
  const padding = props.noPadding ? "0" : "20px";

  const style = 
  {
    fontSize: fontSize,
    float: float,
    paddingLeft: padding
  }

  return (
    <p id={props.id} className="menuTexte" style={style} >
      {props.label}
    </p>
  );;
}
