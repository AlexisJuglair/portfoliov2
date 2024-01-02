import React from 'react';
import './IconeAction.css';

export default function IconeAction(props) 
{
  return ( 
    (props.link 
      ? <a href={`http://courriers.server1/pdf.php?cmd=${props.action}&id=${props.recordId}`} 
      target={props.target && "_blank"}
      className="actionLink"
      style={{padding: "5px"}}
      id={`${props.table}_${props.action}_${props.recordId}`} 
      title={props.action.charAt(0).toUpperCase() + props.action.slice(1)} 
      >
      <i className={props.class}></i> 
      </a>
      : <i className={props.class}
          style={{padding: "5px"}}
          id={`${props.table}_${props.action}_${props.recordId}`} 
          title={props.action.charAt(0).toUpperCase() + props.action.slice(1)}
          onClick={props.click}
          >
      </i> 
    )
  )
}