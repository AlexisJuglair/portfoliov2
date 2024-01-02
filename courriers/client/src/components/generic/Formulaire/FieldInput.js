import React,{useState} from 'react';
import'./FieldInput.css';

const FieldInput = (props) => 
{
    const [value, setValue] = useState(props.value);
    const height = props.height ? props.height : "30px";
    const requis = props.requis ? <span>*</span> : "";

    const update = (e) =>
    {
        setValue(e.target.value);
    }

    const style = {
        height: height
    }

    return (
        <div className="fieldInput">
            <label>{props.label} {requis}</label>
            {props.disabled
                ? <input style={style} type={props.type} name={props.id} id={props.id} value={value} onChange={update} disabled />
                : <input style={style} type={props.type} name={props.id} id={props.id} value={value} onChange={update} />
            }
        </div>
    );
}

export default FieldInput;
