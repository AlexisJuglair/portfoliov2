import React, {useState, useEffect} from 'react';

import DivFormMain from '../generic/Formulaire/DivFormMain';
import Form from '../generic/Formulaire/Form';
import Fieldset from '../generic/Formulaire/Fieldset';
import FieldSelect from '../generic/Formulaire/FieldSelect';
import FieldInput from '../generic/Formulaire/FieldInput';
import FieldTextarea from '../generic/Formulaire/FieldTextarea';

import MenuBar from '../generic/Menu/MenuBar';
import Menu from '../generic/Menu/Menu';
import MenuItem from '../generic/Menu/MenuItem';

import Modal from '../generic/Modal/Modal';
import ModalTitle from '../generic/Modal/ModalTitle';
import ModalBody from '../generic/Modal/ModalBody';
import ModalFoot from '../generic/Modal/ModalFoot';

export default function AppDestinataireFormulaire(props) 
{
  const user = sessionStorage.getItem('uid');
  const [records, setRecords] = useState([]);
  const setAppSelector = props.func;
  const setMainTitle = props.mainTitle;
  const [modal, setModal] = useState(0);
  const [modalMain, setModalMain] = useState([]);
  const setOverlay = props.overlay;

  const titres = 
  [
    ["M.","Monsieur"], 
    ["Mme.","Madame"],
  ]

  useEffect(() => 
  {
    if (props.action === "modifier")
    {
      fetch(`${process.env.REACT_APP_API_URL}destinataire/${user}/${sessionStorage.getItem('id')}`)
      .then(response => 
      {
        return response.json();
      })
      .then(records =>
      {
        console.log(records);
        setRecords(records);
        setMainTitle(`${records[0][4]} ${records[0][3]}`);
      })
    }
    else
    {
      setRecords([["","","","","","","","","","","","","","",""]]);
      setMainTitle("Ajouter un destinataire");
    }
  }, [])

  const onSubmit = (e) =>
  {
    let formData = new FormData(document.getElementById('formDestinataire'));

    e.preventDefault();

    if (props.action === "ajouter")
    {
      if (document.getElementById('nom').value === ""
      || document.getElementById('prenom').value === ""
      || document.getElementById('denomination').value === "")
      {
        setModalMain( () =>
        {
          return (
            <Modal h="200px" w="600px">
              <ModalTitle />
              <ModalBody>
                <p>
                  <i className="fas fa-times-circle fa-lg" style={{color: "#b71c1c", marginRight: "5px"}}></i>
                  Les champs nom, prénom et dénomination sont obligatoires !
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
        fetch(`${process.env.REACT_APP_API_URL}destinataire/ajouter/${user}`, 
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
                    Le destinataire a été ajouté !
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
    else if (props.action === "modifier")
    {
      console.log("modifier vide");
      const serialize_form = form => JSON.stringify(
        Array.from(new FormData(document.getElementById("formDestinataire")).entries())
        .reduce((m, [ key, value ]) => Object.assign(m, { [key]: value }), {})
      );

      if (document.getElementById('nom').value === ""
      || document.getElementById('prenom').value === ""
      || document.getElementById('denomination').value === "")
      {
        setModalMain( () =>
        {
          return (
            <Modal h="200px" w="600px">
              <ModalTitle />
              <ModalBody>
                <p>
                  <i className="fas fa-times-circle fa-lg" style={{color: "#b71c1c", marginRight: "5px"}}></i>
                  Les champs nom, prénom et dénomination sont obligatoires !
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
        console.log("modifier plein");
        fetch(`${process.env.REACT_APP_API_URL}destinataire/modifier/${user}/${records[0][0]}`, 
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
          if (records['affected'] === 1) 
          {
            setModalMain( () =>
            {
              return (
                <Modal h="200px" w="400px">
                  <ModalTitle />
                  <ModalBody>
                    <p>
                      <i className="fas fa-check-circle fa-lg" style={{color: "#4caf50", marginRight: "5px"}}></i>
                      Le destinataire a été modifié !
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
          else if (records['affected'] === 0) 
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
      <Form id="formDestinataire">

        {records[0] !== undefined &&
          <>
            <Fieldset legend="Identité">
              <FieldSelect label="Titre" id="titre" default="CHOISISSEZ VOTRE CIVILITÉ" value={records[0][2]} values={titres} />
              <FieldInput label="Nom" type="text" id="nom" value={records[0][3]} requis={1} />
              <FieldInput label="Prénom" type="text" id="prenom" value={records[0][4]} requis={1} />
              <FieldInput label="Fonction" type="text" id="fonction" value={records[0][5]} />
              <FieldInput label="Dénomination" type="text" id="denomination" value={records[0][6]} requis={1} />
            </Fieldset>

            <Fieldset legend="Adresse">
              <FieldTextarea label="Adresse" id="adresse" cols="10" rows="7" value={records[0][7]} />
              <FieldInput label="Code postal" type="text" id="code_postal" value={records[0][8]} />
              <FieldInput label="Localité" type="text" id="localite" value={records[0][9]} />
            </Fieldset>

            <Fieldset legend="Contact">
              <FieldInput label="Téléphone" type="tel" id="telephone" value={records[0][10]} />
              <FieldInput label="Email" type="email" id="email" value={records[0][11]} />
            </Fieldset>

            <Fieldset legend="Commentaire">
              <FieldTextarea label="Commentaire" id="commentaire" cols="30" rows="10" value={records[0][12]} />
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