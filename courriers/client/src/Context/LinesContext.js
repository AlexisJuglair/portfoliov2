import React, {createContext, useState} from "react";
import Message from '../components/generic/Message/Message'

export const LinesContext = createContext();

const LinesContextProvider = props => 
{
  const [lines, setLines] = useState({});
  const [message, setMessage] = useState([]);

  const clickLine = (e) => 
  {
    console.log(e.target.parentNode);
    if (e.target.parentNode.className === "trList lineClicked")
    {
      e.target.parentNode.classList.remove("lineClicked");
      delete lines[e.target.parentNode.id];       
    }
    else 
    {
      e.target.parentNode.classList.add("lineClicked");
      lines[e.target.parentNode.id] = e.target.parentNode.id;
    } 
  }

  const deleteLines = (e) =>
  { 
    const user = sessionStorage.getItem('uid');
    console.log(Object.keys(lines).length);
    console.log(lines);
    if (e.target.id == "btnSupprimer" && Object.keys(lines).length > 0)
    {
      let table = Object.keys(lines)[0].split("_")[0];
      let tables_id = "";

      for(let line in lines)
      {
        let id = line.split("_")[1];
        tables_id += id+"-";
      }
      tables_id = tables_id.slice(0, -1);

      fetch(`http://courriers.server1/api/${table}/supprimer/${user}/${tables_id}`,
      {
        method: "DELETE",
      })
      .then(response => 
      {
        return response.json();
      })
      .then(records =>
      {      
        for(let line in lines)
        {
          document.getElementById(line).remove();
        }
        setLines({});

        setMessage(
          <Message message={`Les ${table} ont été supprimé !`} type="success" />
        );     
        setTimeout(() => setMessage([]), 3000);
      })
    }
    else
    {
      setMessage(
        <Message message={`Rien à supprimer !`} type="success" />
      );     
      setTimeout(() => setMessage([]), 3000);
    }
  }

  return (
    <LinesContext.Provider value={{lines, clickLine, deleteLines, message}}>
      {props.children}
    </LinesContext.Provider>
  )
}

export default LinesContextProvider;
