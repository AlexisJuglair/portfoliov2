import React,{useState} from 'react';
import'./FieldSelect.css';

export default function FieldSelect(props) 
{
  const [value, setValue] = useState(props.value);
  const requis = props.requis ? <span>*</span> : "";

  const update = (e) =>
  {
    setValue(e.target.value);
  }

  return (
    <div className="fieldSelect">
      <label>{props.label} {requis}</label>
      <select name={props.id} id={props.id} value={value} onChange={update}>
        <option value="" disabled>--{props.default}--</option>
        {props.values.map((value, v) =>
          <option key={v} value={value[0]}>{value[1]}</option>
        )}
      </select>
    </div>
  );
}
