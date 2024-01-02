import React,{useState} from 'react';
import'./FieldTextarea.css';

export default function FieldTextarea(props) 
{
  const [value, setValue] = useState(props.value);
  const requis = props.requis ? <span>*</span> : "";

  const update = (e) =>
  {
    setValue(e.target.value);
  }

  return (
    <div className="fieldTextarea">
        <label>{props.label} {requis}</label>
        <textarea name={props.id} id={props.id} cols={props.cols} rows={props.rows} value={value} onChange={update}></textarea>
    </div>
  );
}

