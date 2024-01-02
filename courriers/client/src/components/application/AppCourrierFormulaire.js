import React, {useState, useEffect} from 'react';

import DivFormMain from '../generic/Formulaire/DivFormMain';
import Form from '../generic/Formulaire/Form';
import Fieldset from '../generic/Formulaire/Fieldset';
import FieldInput from '../generic/Formulaire/FieldInput';
import FieldSelect from '../generic/Formulaire/FieldSelect';
import FieldTextarea from '../generic/Formulaire/FieldTextarea';

import MenuBar from '../generic/Menu/MenuBar';
import Menu from '../generic/Menu/Menu';
import MenuItem from '../generic/Menu/MenuItem';

import Modal from '../generic/Modal/Modal';
import ModalTitle from '../generic/Modal/ModalTitle';
import ModalBody from '../generic/Modal/ModalBody';
import ModalFoot from '../generic/Modal/ModalFoot';

export default function AppCourrierFormulaire(props) 
{
  const user = sessionStorage.getItem('uid');
  const [destinataires, setDestinataires] = useState([]);
  const [records, setRecords] = useState([]);
  const setAppSelector = props.func;
  const setMainTitle = props.mainTitle;
  const [modal, setModal] = useState(0);
  const [modalMain, setModalMain] = useState([]);
  const setOverlay = props.overlay;

  const status = 
  [
    ["Brouillon","Brouillon"], 
    ["Selectionné","Selectionné"], 
    ["Envoyé","Envoyé"],
  ]

  useEffect(() => 
  {
    fetch(`${process.env.REACT_APP_API_URL}destinataires/liste/${user}`)
    .then(response => 
    {
      return response.json();
    })
    .then(destinataires =>
    {
      let tabDest = [];
      destinataires.map((destinataire) =>
      {
        tabDest.push([destinataire[0], destinataire[2]+' - '+destinataire[4]+' '+destinataire[3]]);
      });
      setDestinataires(tabDest);
    })

    if (props.action == "modifier")
    {
      fetch(`${process.env.REACT_APP_API_URL}courrier/${user}/${sessionStorage.getItem('id')}`)
      .then(response => 
      {
        return response.json();
      })
      .then(records =>
      {
        console.log(records);
        setRecords(records);
        setMainTitle(`Courrier N° ${records[0][0]}`);
      })
    }
    else
    {
      setRecords([["","","","","","","","","","","","","","","","","",""]]);
      setMainTitle("Ajouter un courrier");
    }
  }, [])

  const onSubmit = (e) =>
  {
    let formData = new FormData(document.getElementById('formCourrier'));

    console.log(formData);

    e.preventDefault();

    if (props.action == "ajouter")
    {
      if (document.getElementById('destinataire_id').value === ""
      || document.getElementById('date_envoi').value === ""
      || document.getElementById('date_relance').value === ""
      || document.getElementById('status').value === "") 
      {
        setModalMain( () =>
        {
          return (
            <Modal h="200px" w="600px">
              <ModalTitle />
              <ModalBody>
                <p>
                  <i className="fas fa-times-circle fa-lg" style={{color: "#b71c1c", marginRight: "5px"}}></i>
                  Les champs destinataire, date d'envoi, date de relance et statut sont obligatoires !
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
      else
      {
        fetch(`${process.env.REACT_APP_API_URL}courrier/ajouter/${user}`, 
        {
          method: "POST",
          body: formData
        })
        .then(response => 
        {
          return response.json();
        })
        .then(records =>
        {
          setModalMain( () =>
          {
            return (
              <Modal h="200px" w="400px">
                <ModalTitle />
                <ModalBody>
                  <p>
                    <i className="fas fa-check-circle fa-lg" style={{color: "#4caf50", marginRight: "5px"}}></i>
                    Le courrier a été ajouté !
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
    }

    else
    {
      const serialize_form = form => JSON.stringify(
        Array.from(new FormData(document.getElementById("formCourrier")).entries())
        .reduce((m, [ key, value ]) => Object.assign(m, { [key]: value }), {})
      );

      if (document.getElementById('destinataire_id').value === ""
      || document.getElementById('date_envoi').value === ""
      || document.getElementById('date_relance').value === ""
      || document.getElementById('status').value === "") 
      {
        setModalMain( () =>
        {
          return (
            <Modal h="200px" w="600px">
              <ModalTitle />
              <ModalBody>
                <p>
                  <i className="fas fa-times-circle fa-lg" style={{color: "#b71c1c", marginRight: "5px"}}></i>
                  Les champs destinataire, date d'envoi, date de relance et statut sont obligatoires !
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
      else
      {
        fetch(`${process.env.REACT_APP_API_URL}courrier/modifier/${user}/${records[0][0]}`, 
        {
          method: "PUT",
          body: serialize_form(this),
          headers: {'content-type':'application/json'}
        })
        .then(response => 
        {
          return response.json();
        })
        .then(records =>
        {
          if (records['affected'] == 1) 
          {
            setModalMain( () =>
            {
              return (
                <Modal h="200px" w="400px">
                  <ModalTitle />
                  <ModalBody>
                    <p>
                      <i className="fas fa-check-circle fa-lg" style={{color: "#4caf50", marginRight: "5px"}}></i>
                      Le courrier a été modifié !
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
          else if (records['affected'] == 0) 
          {
            console.log("Aucun changement détécté !");
            setModalMain( () =>
            {
              return (
                <Modal h="200px" w="400px">
                  <ModalTitle />
                  <ModalBody>
                    <p>
                    <i className="fas fa-times-circle fa-lg" style={{color: "#b71c1c", marginRight: "5px"}}></i>
                      Aucun changement détecté !
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
        })   
      }
    }
  }

  const onFermer = () =>
  {
    console.log("onFermer");
    sessionStorage.removeItem("id");
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
    <DivFormMain>
      <Form id="formCourrier">

      {records[0] !== undefined &&
        <>
          <Fieldset legend="Objet et destinataire">
            <FieldInput label="Objet" type="text" id="objet" value={records[0][3]} />
            <FieldSelect label="Destinataire" id="destinataire_id" default="CHOISISSEZ UN DESTINATAIRE" value={records[0][1]} values={destinataires} requis={1} />
          </Fieldset>

          <Fieldset legend="Dates et statut">
            <FieldInput label="Date d'envoi" type="date" id="date_envoi" value={records[0][7]} requis={1} />
            <FieldInput label="Date de relance" type="date" id="date_relance" value={records[0][8]} requis={1} />
            <FieldSelect label="Statut" id="status" default="CHOISISSEZ UN STATUT" value={records[0][13]} values={status} requis={1} />
          </Fieldset>

          <Fieldset legend="Corps de la lettre">
            <FieldTextarea label="Paragraphe JE" id="paragraphe1" cols="10" rows="5" value={records[0][9]} />
            <FieldTextarea label="Paragraphe VOUS" id="paragraphe2" cols="10" rows="5" value={records[0][10]} />
            <FieldTextarea label="Paragraphe NOUS" id="paragraphe3" cols="10" rows="5" value={records[0][11]} />
            <FieldTextarea label="Formule de politesse" id="paragraphe4" cols="10" rows="5" value={records[0][12]} />
          </Fieldset>

          <Fieldset legend="Annonce et références">
            <FieldInput label="Offre" type="text" id="offre" value={records[0][4]} />
            <FieldInput label="Nos références" type="text" id="nosref" value={records[0][14]} />
            <FieldInput label="Vos références" type="text" id="vosref" value={records[0][15]} />
            <FieldTextarea label="Annonce" id="annonce" cols="30" rows="20" value={records[0][16]} />
          </Fieldset> 

          <Fieldset legend="Informations" >
            <p style={{color: "#b71c1c", marginTop: "5px"}}>Les champs marqués d'une * sont obligatoires.</p>
          </Fieldset>
        </>
      }
      </Form>

      <MenuBar>
        <Menu float="right">
          <MenuItem label="Valider" click={onSubmit} />
          <MenuItem label="Fermer" click={onFermer} />
        </Menu>
      </MenuBar>

      {modal === 1 && modalMain}
    </DivFormMain>
  )
}