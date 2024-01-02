import React, {useState, useEffect} from 'react';

import DivListe from '../generic/Liste/DivListe';
import Table from '../generic/Liste/Table';
import Theadbody from '../generic/Liste/Theadbody';
import Tr from '../generic/Liste/Tr';
import Thd from '../generic/Liste/Thd';

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

export default function AppCourrierListe(props) 
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
    window.addEventListener("resize", () => 
    {
      setInnerWidth(window.innerWidth);
    });

    fetch(`${process.env.REACT_APP_API_URL}courriers/liste/${user}`)
    .then(response => 
    {
      return response.json();
    })
    .then(r =>
    {
      console.log(r);
      setRecords(r);
      setNbRecords(r.length);
      setMainTitle("Liste des courriers");
    })
  }, [])

  const clickLine = (e) => 
  {
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
    setAppSelector(8);
  };

  const onSupprimer = (e) =>
  {
    console.log("onSupprimer");
    const id = e.target.id.split("_")[2];

    fetch(`${process.env.REACT_APP_API_URL}courrier/supprimer/${user}/${id}`,
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
                Le courrier a été supprimé !
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
      setAppSelector(8);
    }
  }

  const onPdfMenu = (e) =>
  {
    console.log("onPdfMenu");
    console.log(Object.keys(lines).length);
    console.log(lines);

    if (Object.keys(lines).length > 0)
    {
      setModalMain( () =>
      {
        return (
          <Modal h="200px" w="700px">
            <ModalTitle />
            <ModalBody>
              <p>
              <i className="fas fa-info-circle fa-lg" style={{color: "#0099cd", marginRight: "5px"}}></i>
                {e.target.id === "btnImprimer"
                  ? "Pour imprimer plusieurs fichiers, veuillez autoriser l'affichage des pop-ups dans votre navigateur."
                  : "Pour télécharger plusieurs fichiers, veuillez autoriser l'affichage des pop-ups dans votre navigateur."
                }
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

      for(let line in lines)
      {
        let id = line.split("_")[1];
        e.target.id === "btnImprimer" ||  e.target.id === "btnImprimer_i"
          ? window.open(`http://courriers.server1/pdf.php?cmd=imprimer&id=${id}`, '_blank')
          : window.open(`http://courriers.server1/pdf.php?cmd=telecharger&id=${id}`) 
      }
    }
    else
    {
      setModalMain( () =>
      {
        return (
          <Modal h="200px" w="400px">
            <ModalTitle />
            <ModalBody>
              <p>
              <i className="fas fa-times-circle fa-lg" style={{color: "#b71c1c", marginRight: "5px"}}></i>
                {e.target.id === "btnImprimer"
                  ? "Aucun courrier à imprimer !"
                  : "Aucun courrier à télécharger !"
                }
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

      fetch(`${process.env.REACT_APP_API_URL}courriers/supprimer/${user}/${tables_id}`,
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
                  Les courriers ont été supprimés !
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
                Aucun courrier à supprimer !
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

  const truncate = (input) => window.innerWidth < 576 && input.length > 15 ? `${input.substring(0, 15)}...` : input;

  return (
    <DivListe>
      <Table>
        <Theadbody element="thead" >
          <Tr>
            <Thd noneResponsive={1} innerWidth={992} element="th" align="right" label="id" />
            <Thd element="th" innerWidth={992} align="center" label="Modification" />
            <Thd noneResponsive={1} innerWidth={992} element="th" align="center" label="Envoi" />
            <Thd element="th" align="left" label="Destinataire" />
            <Thd noneResponsive={1} innerWidth={992} element="th" align="left" label="Lieu" />
            <Thd noneResponsive={1} innerWidth={992} element="th" align="left" label="Status" />
            <Thd noneResponsive={1} innerWidth={992} element="th" align="center" label="&nbsp;" />
          </Tr>
        </Theadbody>

        {records[0] !== undefined &&
          <Theadbody element="tbody" >
            {records.map((record, r) =>
              <Tr key={r} table="courriers" recordId={record[0]} >
                <Thd noneResponsive={1} innerWidth={992} element="td" align="right" label={record[0]} click={clickLine} />
                <Thd element="td" align="center" label={record[9]} click={clickLine} />
                <Thd noneResponsive={1} innerWidth={992} element="td" align="center" label={record[10]} click={clickLine} />
                <Thd element="td" align="left" label={`${record[18]} ${record[19]} (${truncate(record[21])})`} click={clickLine} />
                <Thd noneResponsive={1} innerWidth={992} element="td" align="left" label={`${record[23]} ${record[24]}`} click={clickLine} />
                <Thd noneResponsive={1} innerWidth={992} element="td" align="left" label={record[16]} click={clickLine} />
                <Thd noneResponsive={1} innerWidth={992} element="td" align="center">
                  <IconeAction table="courriers" action="modifier" recordId={record[0]} class="fas fa-edit" click={onModifier} />
                  <IconeAction table="courriers" action="imprimer" recordId={record[0]} class="fas fa-print" link={1} target={1} />
                  <IconeAction table="courriers" action="telecharger" recordId={record[0]} class="fas fa-download" link={1} />
                  <IconeAction table="courriers" action="supprimer" recordId={record[0]} class="fas fa-trash-alt" click={onSupprimer} />
                </Thd>
              </Tr>
            )}
          </Theadbody>
        }
      </Table>

      {innerWidth > 992
        ? <MenuBar>
            <MenuTexte label={`${nbRecords} enregistrement(s)`} float="left" />
            <Menu float="right" >
              {nbLines > 0 && 
                <MenuItem id="btnDeselect" label="Déselectionner" click={onDeselect} />
              }
              <MenuItem id="btnImprimer" label="Imprimer" click={onPdfMenu} />
              <MenuItem id="btnTelecharger" label="Télécharger" click={onPdfMenu} />
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
              <MenuItemBurger id="btnImprimer" click={onPdfMenu} label="Imprimer" icone="fas fa-print"/>
              <MenuItemBurger id="btnTelecharger" click={onPdfMenu} label="Télécharger" icone="fas fa-download" />
              <MenuItemBurger id="btnSupprimer" click={onSupprimerMenu} label="Supprimer" icone="fas fa-trash-alt" />
              <MenuItemBurger id="btnFermer" click={onFermer} label="Fermer" icone="fas fa-door-closed" />
            </MenuBurger>
        </MenuBar>
      }
      {modal === 1 && modalMain}
    </DivListe>
  );
}
