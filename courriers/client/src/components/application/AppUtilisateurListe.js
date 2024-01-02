import React, {useState, useEffect} from 'react';

import DivListe from '../generic/Liste/DivListe';
import Table from '../generic/Liste/Table';
import Theadbody from '../generic/Liste/Theadbody';
import Tr from '../generic/Liste/Tr';
import Thd from '../generic/Liste/Thd';

import Switch from '../generic/Divers/Switch';
import IconeAction from '../generic/Divers/IconeAction';

import MenuBar from '../generic/Menu/MenuBar';
import MenuTexte from '../generic/Menu/MenuTexte';
import Menu from '../generic/Menu/Menu';
import MenuItem from '../generic/Menu/MenuItem';
import MenuBurger from '../generic/Menu/MenuBurger';
import MenuItemBurger from '../generic/Menu/MenuItemBurger';

import Modal from '../generic/Modal/Modal';
import ModalTitle from '../generic/Modal/ModalTitle';
import ModalBody from '../generic/Modal/ModalBody';
import ModalFoot from '../generic/Modal/ModalFoot';

export default function AppUtilisateurListe(props) 
{
  const user = sessionStorage.getItem('uid');
  const [records, setRecords] = useState([]);
  const setAppSelector = props.func;
  const setMainTitle = props.mainTitle;
  const [nbRecords, setNbRecords] = useState("");
  const [lines, setLines] = useState({});
  const [nbLines, setNbLines] = useState(0);
  const [modal, setModal] = useState(0);
  const [modalMain, setModalMain] = useState([]);
  const setOverlay = props.overlay;
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => 
  {
    fetch(`${process.env.REACT_APP_API_URL}utilisateurs/liste/${user}`)
    .then(response => 
    {
      return response.json();
    })
    .then(r =>
    {
      console.log(r);
      setRecords(r);
      setNbRecords(r.length);
      setMainTitle("Liste des utilisateurs");
    })
  }, [])

  const clickLine = (e) => 
  {
    console.log(e.target.parentNode);
    if (e.target.parentNode.className === "trList lineClicked")
    {
      e.target.parentNode.classList.remove("lineClicked");
      delete lines[e.target.parentNode.id];     
      setNbLines(nbLines - 1);     
    }
    else 
    {
      e.target.parentNode.classList.add("lineClicked");
      lines[e.target.parentNode.id] = e.target.parentNode.id;
      setNbLines(nbLines + 1);
    } 
  }

  const onDeselect = () =>
  {
    console.log("onDeselect");

    for(let line in lines)
    {
      document.getElementById(line).classList.remove("lineClicked");
    }

    setLines({});
    setNbLines(0);
  };

  const onModifier = (e) =>
  {
    console.log(e.target.id.split("_")[2]);
    sessionStorage.setItem("id", e.target.id.split("_")[2]);
    setAppSelector(3);
  }

  const onSupprimer = (e) =>
  {
    console.log("onSupprimer");
    const id = e.target.id.split("_")[2];

    fetch(`${process.env.REACT_APP_API_URL}utilisateur/supprimer/${user}/${id}`,
    {
      method: "DELETE",
    })
    .then(response => 
    {
      return response.json();
    })
    .then(records =>
    {
      e.target.parentNode.parentNode.remove();
      delete lines[e.target.parentNode.parentNode.id];

      setNbRecords(document.getElementsByClassName('trList').length - 1);
      
      setModalMain( () =>
      {
        return (
          <Modal h="200px" w="400px">
            <ModalTitle />
            <ModalBody>
              <p>
                <i className="fas fa-check-circle fa-lg" style={{color: "#4caf50", marginRight: "5px"}}></i>
                L'utilisateur a été supprimé !
              </p>
            </ModalBody>
            <ModalFoot>
              <Menu float="right" >
                <MenuItem label="Fermer" click={onFermerModal} />
              </Menu>
            </ModalFoot>
          </Modal>
        )
      });  

      setOverlay(1);        
      setModal(1);
    })
  }

  const onModifierMenu = () =>
  {
    console.log("onModifierMenu");
    console.log(lines);

    for(let line in lines)
    {
      console.log(line.split("_")[1]);
      sessionStorage.setItem("id", line.split("_")[1]);
      setAppSelector(3);
    }
  }

  const onSupprimerMenu = () =>
  {
    console.log(Object.keys(lines).length);
    console.log(lines);
    if (Object.keys(lines).length > 0)
    {
      let tables_id = "";

      for(let line in lines)
      {
        let id = line.split("_")[1];
        tables_id += id+"-";
      }
      tables_id = tables_id.slice(0, -1);

      fetch(`${process.env.REACT_APP_API_URL}utilisateurs/supprimer/${user}/${tables_id}`,
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

        setNbRecords(document.getElementsByClassName('trList').length - 1);

        setModalMain( () =>
        {
          return (
            <Modal h="200px" w="400px">
              <ModalTitle />
              <ModalBody>
                <p>
                  <i className="fas fa-check-circle fa-lg" style={{color: "#4caf50", marginRight: "5px"}}></i>
                  Les utilisateurs ont été supprimés !
                </p>
              </ModalBody>
              <ModalFoot>
                <Menu float="right" >
                  <MenuItem label="Fermer" click={onFermerModal} />
                </Menu>
              </ModalFoot>
            </Modal>
          )
        });  

        setOverlay(1);        
        setModal(1);
      })
    }
    else
    {
      console.log("rien à supprimer !");
      setModalMain( () =>
      {
        return (
          <Modal h="200px" w="400px">
            <ModalTitle />
            <ModalBody>
              <p>
              <i className="fas fa-times-circle fa-lg" style={{color: "#b71c1c", marginRight: "5px"}}></i>
                Aucun utilisateur à supprimer !
              </p>
            </ModalBody>
            <ModalFoot>
              <Menu float="right" >
                <MenuItem label="Fermer" click={onFermerModal} />
              </Menu>
            </ModalFoot>
          </Modal>
        )
      });  

      setOverlay(1);        
      setModal(1);
    }
  }

  const onFermer = () =>
  {
    console.log("onFermer");
    setAppSelector(0);
    setMainTitle("Courriers");
  }

  const onFermerModal = () =>
  {
    setModalMain([]);
    setModal(0);
    setOverlay(0);
  }

  return (
    <DivListe>
      <Table>
        <Theadbody element="thead" >
          <Tr>
            <Thd noneResponsive={1} innerWidth={768} lement="th" align="right" label="id" />
            <Thd element="th" align="left" label="Identifiant" />
            <Thd noneResponsive={1} innerWidth={768} element="th" align="left" label="Mot de passe" />
            <Thd noneResponsive={1} innerWidth={768} element="th" align="left" label="Nom" />
            <Thd noneResponsive={1} innerWidth={768} element="th" align="left" label="Téléphone" />
            <Thd noneResponsive={1} innerWidth={768} element="th" align="left" label="Email" />
            <Thd element="th" align="left" label="admin" />
            <Thd element="th" align="left" label="activé" />
            <Thd noneResponsive={1} innerWidth={768} element="th" align="center" label="&nbsp;" />
          </Tr>
        </Theadbody>

        {records[0] !== undefined &&
          <Theadbody element="tbody" >
            {records.map((record, r) =>
              <Tr key={r} table="utilisateurs" recordId={record[0]} click={clickLine} >
                <Thd noneResponsive={1} innerWidth={768} element="td" align="right" label={record[0]} click={clickLine} />
                <Thd element="td" align="left" label={`${record[1]}`} click={clickLine} />
                <Thd noneResponsive={1} innerWidth={768} element="td" align="left" label={record[3]} click={clickLine} />
                <Thd noneResponsive={1} innerWidth={768} element="td" align="left" label={`${record[6]} ${record[5]}`} click={clickLine} />
                <Thd noneResponsive={1} innerWidth={768} element="td" align="left" label={record[7]} click={clickLine} />
                <Thd noneResponsive={1} innerWidth={768} element="td" align="left" label={record[8]} click={clickLine} />
                <Thd element="td" align="left" label={JSON.parse(record[2])[0] === "admin" ? "Oui" : "Non"} click={clickLine} />
                <Thd element="td" align="left" label={record[12] === "Activé" ? "Oui" : "Non"} click={clickLine} />
                <Thd noneResponsive={1} innerWidth={768} element="td" align="center">
                  <IconeAction table="utilisateurs" action="modifier" recordId={record[0]} class="fas fa-edit" click={onModifier} />
                  <IconeAction table="utilisateurs" action="supprimer" recordId={record[0]} class="fas fa-trash-alt" click={onSupprimer}/>
                </Thd>
              </Tr>
            )}
          </Theadbody>
        }   
      </Table>
      
      {innerWidth > 992
      ? <MenuBar>
          <MenuTexte label={`${nbRecords} enregistrement(s)`} float="left"/>
          <Menu float="right">
            {nbLines > 0 && 
              <MenuItem id="btnDeselect" label="Déselectionner" click={onDeselect} />
            }
            <MenuItem id="btnSupprimer" label="Supprimer" click={onSupprimerMenu} />
            <MenuItem label="Fermer" click={onFermer} />
          </Menu>
        </MenuBar>
      
      : <MenuBar>
          <MenuTexte label={`${nbRecords} enregistrement(s)`} float="left" />
          <MenuBurger>
            {nbLines > 0 && 
              <MenuItemBurger click={onDeselect} label="Déselectionner" icone="fas fa-hand-pointer" />
            }
            {nbLines === 1 &&
              <MenuItemBurger id="btnModifier" click={onModifierMenu} label="Modifier" icone="fas fa-edit"/>
            }
            <MenuItemBurger id="btnSupprimer" click={onSupprimerMenu} label="Supprimer" icone="fas fa-trash-alt" />
            <MenuItemBurger id="btnFermer" click={onFermer} label="Fermer" icone="fas fa-door-closed" />
          </MenuBurger>
        </MenuBar>
      }

      ({modal === 1 && modalMain})
    </DivListe>
  );
}