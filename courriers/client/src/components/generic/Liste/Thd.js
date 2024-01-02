import React, {useState, useEffect} from 'react';
import './Thd.css';

export default function Thd(props) 
{
  const [display, setDisplay] = useState(window.innerWidth < props.innerWidth && props.noneResponsive ? "none" : "table-cell");

  useEffect(() => 
  {
    window.addEventListener("resize", () => 
    {
      setDisplay(window.innerWidth < props.innerWidth && props.noneResponsive ? "none" : "table-cell");
    });
  }, []);

  return ( 
    (props.element === "th"
      ? <th className="thList" style={{textAlign: props.align, display: display}}>
          {props.label}
      </th>
      : <td className="tdList" style={{textAlign: props.align, display: display}} onClick={props.click}>
          {props.children}
          {props.label}
      </td>
    )
  )
}