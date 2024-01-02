import React, {useState} from 'react';
import './Switch.css';

export default function Switch(props) 
{
  const [checked, setChecked] = useState(props.value === props.checked ? true : false);

  const update = () =>
  {
   setChecked(!checked);
  }

  console.log(props.disabled);

  return (
      <div className="fieldSwitch">
        <label>{props.label}</label>
        <label className="switch"> 
          {props.disabled
            ? <input id={props.id} type="checkbox" name={props.id} checked={checked} onChange={update} disabled />
            : <input id={props.id} type="checkbox" name={props.id} checked={checked} onChange={update} />
          }
          <span className="slider round"></span>
        </label>
      </div>
  );
}
