import React, {useState, useEffect} from 'react';
import './MenuBurger.css';

export default function MenuBurger(props) 
{
  const [children, setChildren] = useState(0);
  const float = props.float ? props.float : "right";
  const position = props.position ? props.position : "bottom";
  const margin = props.position ? "marginTop" : "marginBottom";
  const direction = props.position ? "" : "right";
  const burger = props.burger ? "fas fa-bars" : "fas fa-ellipsis-h";

  const onBurger = () =>
  {
    console.log("onBurger");
    setChildren(children === 0 ? 1 : 0);
  }

  const onFermerMenu = () =>
  {
    console.log("onFermerMenu");
    setTimeout(() => setChildren(0), 100);
  }

  const style = {};
 
  style[position] = "40px";
  style[margin] = "1px";
  style[direction] = 0;

  return (
      <div className="itemBurger" style={{float: float}}>
        <i className={`${burger} fa-2x burger`} onClick={onBurger}></i>
        {children === 1 && 
          <ul className="subItemBurger" style={style} onMouseUp={onFermerMenu}>
            {props.children}
          </ul>
        }
      </div>
  )
}