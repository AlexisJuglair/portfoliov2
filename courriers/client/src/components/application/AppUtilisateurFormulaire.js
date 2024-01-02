import React, {useState, useEffect} from 'react';

import DivFormMain from '../generic/Formulaire/DivFormMain';
import Form from '../generic/Formulaire/Form';
import Fieldset from '../generic/Formulaire/Fieldset';
import FieldSelect from '../generic/Formulaire/FieldSelect';
import FieldInput from '../generic/Formulaire/FieldInput';
import FieldTextarea from '../generic/Formulaire/FieldTextarea';

import Switch from '../generic/Divers/Switch';

import MenuBar from '../generic/Menu/MenuBar';
import Menu from '../generic/Menu/Menu';
import MenuItem from '../generic/Menu/MenuItem';

import Modal from '../generic/Modal/Modal';
import ModalTitle from '../generic/Modal/ModalTitle';
import ModalBody from '../generic/Modal/ModalBody';
import ModalFoot from '../generic/Modal/ModalFoot';

export default function AppUtilisateurFormulaire(props) 
{
  const user = sessionStorage.getItem('uid');
  const identifiant = sessionStorage.getItem("identifiant");
  const role = sessionStorage.getItem("role");
  let id = sessionStorage.getItem('id');
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
    if (props.action === "modifier" && role === "admin")
    {
      id = id === null ? user : id;
      fetch(`${process.env.REACT_APP_API_URL}utilisateur/${user}/${id}`)
      .then(response => 
      {
        return response.json();
      })
      .then(records =>
      {
        setRecords(records);
        console.log(records);
        setMainTitle(`${records[0][6]} ${records[0][5]}`);
        
      })
    }
    else if (props.action === "modifier") 
    {
      fetch(`${process.env.REACT_APP_API_URL}utilisateur/${user}`)
      .then(response => 
      {
        return response.json();
      })
      .then(records =>
      {
        setRecords(records);
        console.log(identifiant);
        console.log(records[0][1]);
        setMainTitle("Mon profil");
      })
    }
    else
    {
      setRecords([["","","","","","","","","","","","","","",""]]);
      setMainTitle("Courriers | Inscription");
    }
  }, [])

  const onConnexion = () =>
  {
    setAppSelector(1);
  }

  const onSubmit = (e) =>
  {
    let formData = new FormData(document.getElementById('formUtilisateur'));

    e.preventDefault();

    if (props.action === "inscrire")
    {
      if (document.getElementById('identifiant').value === ""
      || document.getElementById('mot_de_passe').value === ""
      || document.getElementById('confirmation_mot_de_passe').value === ""
      || document.getElementById('nom').value === ""
      || document.getElementById('prenom').value === "")
      {
        setModalMain( () =>
        {
          return (
            <Modal h="200px" w="600px">
              <ModalTitle />
              <ModalBody>
                <p>
                  <i className="fas fa-times-circle fa-lg" style={{color: "#b71c1c", marginRight: "5px"}}></i>
                  Les champs identifiant, mot de passe, nom et prénom sont obligatoires !
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
      else if (document.getElementById('mot_de_passe').value === document.getElementById('confirmation_mot_de_passe').value)
      {
        fetch(`${process.env.REACT_APP_API_URL}utilisateur/ajouter`, 
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
              <Modal h="200px" w="500px">
                <ModalTitle />
                <ModalBody>
                  <p>
                    <i className="fas fa-check-circle fa-lg" style={{color: "#4caf50", marginRight: "5px"}}></i>
                    Votre compte a bien été créé !
                  </p>
                </ModalBody>
                <ModalFoot>
                  <Menu float="right" >
                    <MenuItem label="Fermer" click={onConnexionModal} />
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
        setModalMain( () =>
        {
          return (
            <Modal h="200px" w="500px">
              <ModalTitle />
              <ModalBody>
                <p>
                  <i className="fas fa-times-circle fa-lg" style={{color: "#b71c1c", marginRight: "5px"}}></i>
                  Les mots de passe ne correspondent pas !
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
    else if (props.action === "modifier")
    {
      id = id === null ? user : id;

      if (document.getElementById('identifiant').value === ""
      || document.getElementById('mot_de_passe').value === ""
      || document.getElementById('nom').value === ""
      || document.getElementById('prenom').value === "")
      {
        setModalMain( () =>
        {
          return (
            <Modal h="200px" w="600px">
              <ModalTitle />
              <ModalBody>
                <p>
                  <i className="fas fa-times-circle fa-lg" style={{color: "#b71c1c", marginRight: "5px"}}></i>
                  Les champs identifiant, mot de passe, nom et prénom sont obligatoires !
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
      else if (document.getElementById('nouveau_mot_de_passe').value === document.getElementById('confirmation_mot_de_passe').value) 
      {
        const serialize_form = form => JSON.stringify(
          Array.from(new FormData(document.getElementById("formUtilisateur")).entries())
          .reduce((m, [ key, value ]) => Object.assign(m, { [key]: value }), {})
        );

        if (role === "admin") 
        {
          fetch(`${process.env.REACT_APP_API_URL}utilisateur/modifier/${user}/${id}`, 
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
                  <Modal h="200px" w="500px">
                    <ModalTitle />
                    <ModalBody>
                      <p>
                      <i className="fas fa-check-circle fa-lg" style={{color: "#4caf50", marginRight: "5px"}}></i>
                      L'utilisateur a été modifié !
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
                  <Modal h="200px" w="500px">
                    <ModalTitle />
                    <ModalBody>
                      <p>
                        <i className="fas fa-times-circle fa-lg" style={{color: "#b71c1c", marginRight: "5px"}}></i>
                        Aucun changement détécté !
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
            }

            setOverlay(1);        
            setModal(1);
          })     
        }

        else
        {
          fetch(`${process.env.REACT_APP_API_URL}utilisateur/modifier/${user}`, 
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
                  <Modal h="200px" w="500px">
                    <ModalTitle />
                    <ModalBody>
                      <p>
                      <i className="fas fa-check-circle fa-lg" style={{color: "#4caf50", marginRight: "5px"}}></i>
                      Votre profil a été modifié !
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
                  <Modal h="200px" w="500px">
                    <ModalTitle />
                    <ModalBody>
                      <p>
                        <i className="fas fa-times-circle fa-lg" style={{color: "#b71c1c", marginRight: "5px"}}></i>
                        Aucun changement détécté !
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
            }

            setOverlay(1);        
            setModal(1);
          })     
        }
      }
      else
      {
        console.log("Les mots de passe ne correspondent pas !");

        setModalMain( () =>
        {
          return (
            <Modal h="200px" w="500px">
              <ModalTitle />
              <ModalBody>
                <p>
                  <i className="fas fa-times-circle fa-lg" style={{color: "#b71c1c", marginRight: "5px"}}></i>
                  Les mots de passe ne correspondent pas !
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
  }

  const onFermer = () =>
  {
    sessionStorage.removeItem("id");
    setAppSelector(0);
    setMainTitle("Courriers"); 
  }

  const onConnexionModal = () =>
  {
    setModalMain([]);
    setModal(0);
    setOverlay(0);
    setAppSelector(1);
  }

  const onFermerModal = () =>
  {
    setModalMain([]);
    setModal(0);
    setOverlay(0);
  }

  return (
    <DivFormMain>
      <Form id="formUtilisateur">

        {records[0] !== undefined &&
          <>
            <Fieldset legend="Identifiants">
              <FieldInput label="Identifiant" type="text" id="identifiant" value={records[0][1]} requis={1} />
              {(props.action === "inscrire"
                ? <>
                    <FieldInput label="Mot de passe" type="password" id="mot_de_passe" requis={1} />
                    <FieldInput label="Confirmation mot de passe" type="password" id="confirmation_mot_de_passe" requis={1} />
                  </>
                : <>
                    <FieldInput label="Mot de passe" type="password" id="mot_de_passe" value={records[0][3]} disabled={1} />
                    <FieldInput label="Nouveau mot de passe" type="password" id="nouveau_mot_de_passe" />
                    <FieldInput label="Confirmation nouveau mot de passe" type="password" id="confirmation_mot_de_passe" />
                  </>
              )}
            </Fieldset>
            
            <Fieldset legend="Identité">
              <FieldSelect label="Titre" id="titre" default="CHOISISSEZ VOTRE CIVILITÉ" value={records[0][4]} values={titres} />
              <FieldInput label="Nom" type="text" id="nom" value={records[0][5]} requis={1} />
              <FieldInput label="Prénom" type="text" id="prenom" value={records[0][6]} requis={1} />
            </Fieldset>

            <Fieldset legend="Adresse">
              <FieldTextarea label="Adresse" id="adresse" cols="10" rows="7" value={records[0][9]} />
              <FieldInput label="Code postal" type="text" id="code_postal" value={records[0][10]} />
              <FieldInput label="Localité" type="text" id="localite" value={records[0][11]} />
            </Fieldset>

            <Fieldset legend="Contact">
              <FieldInput label="Téléphone" type="tel" id="telephone" value={records[0][7]} />
              <FieldInput label="Email" type="email" id="email" value={records[0][8]} />
            </Fieldset>

            {role === "admin" &&
              <Fieldset legend="Paramètres">
                {identifiant === records[0][1] && <p style={{color: "#b71c1c"}}>Vous ne pouvez pas modifier les paramètres de votre compte !</p> }
                <Switch label="Administrateur" id="roles" checked="admin" value={JSON.parse(records[0][2])[0]} disabled={records[0][1] === identifiant ? true : false} />
                <Switch label="Compte activé" id="status" checked="Activé" value={records[0][12]} disabled={records[0][1] === identifiant ? true : false} />
              </Fieldset>
            }

            <Fieldset legend="Informations" >
              <p style={{color: "#b71c1c", marginTop: "5px"}}>Les champs marqués d'une * sont obligatoires.</p>
            </Fieldset>
          </>
        }

      </Form>

      <MenuBar>
        <Menu float="right">
          {props.action === "inscrire" && <MenuItem label="Se connecter" click={onConnexion} />}
          <MenuItem label="Valider" click={onSubmit} />
          {props.action === "modifier" && <MenuItem label="Fermer" click={onFermer} />}
        </Menu>
      </MenuBar>

      {modal === 1 && modalMain}
    </DivFormMain>
  )
}