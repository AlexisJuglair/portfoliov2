import React, {useState} from 'react';

import Form from '../generic/Formulaire/Form';
import Fieldset from '../generic/Formulaire/Fieldset';
import FieldInput from '../generic/Formulaire/FieldInput';

import MenuBar from '../generic/Menu/MenuBar';
import Menu from '../generic/Menu/Menu';
import MenuItem from '../generic/Menu/MenuItem';

import Modal from '../generic/Modal/Modal';
import ModalTitle from '../generic/Modal/ModalTitle';
import ModalBody from '../generic/Modal/ModalBody';
import ModalFoot from '../generic/Modal/ModalFoot';

export default function AppConnexion(props) 
{
  const setAppSelector = props.func;
  const setMainTitle = props.mainTitle;
  const [modal, setModal] = useState(0);
  const [modalMain, setModalMain] = useState([]);
  const setOverlay = props.overlay;

  setMainTitle("Courriers");

  const onSubmit = (e) =>
  { 
    let identifiant = document.getElementById("identifiant").value;
    let mdp = document.getElementById("mot_de_passe").value;

    if (identifiant !== "" && mdp !== "") 
    {
      let myHeaders = new Headers();
      let token = "Basic " + window.btoa(identifiant+":"+mdp);
      myHeaders.append('Authorization', token);
      console.log(myHeaders);

      let myInit = 
      { 
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default' 
      };
          
      e.preventDefault();
      fetch(`${process.env.REACT_APP_API_URL}connexion`, myInit)
      .then(response => 
      {
        console.log(response);
        return response.json();
      })
      .then(data =>
      {
        console.log(data);
        if (data !== null && data.status === "Activé") 
        {
          sessionStorage.setItem('uid', data.id);
          sessionStorage.setItem('identifiant', identifiant);
          sessionStorage.setItem('username', data.prenom + ' ' + data.nom);
          sessionStorage.setItem('role', JSON.parse(data.roles));
          setAppSelector(0);
        }
        else if (data.status === "Désactivé") 
        {
          console.log("Compte non activé !");
          setModalMain( () =>
          {
            return (
              <Modal h="200px" w="500px">
                <ModalTitle />
                <ModalBody>
                  <p>
                  <i class="fas fa-times-circle fa-lg" style={{color: "#b71c1c", marginRight: "5px"}}></i>
                    Votre compte n'est pas activé. Contactez un administrateur !
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
          console.log("mauvaise authentification !");
          setModalMain( () =>
          {
            return (
              <Modal h="200px" w="500px">
                <ModalTitle />
                <ModalBody>
                  <p>
                  <i class="fas fa-times-circle fa-lg" style={{color: "#b71c1c", marginRight: "5px"}}></i>
                    L'identifiant et/ou le mot de passe n'est/ne sont pas valide(s) !
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
    else
    {
      console.log("identifiants non rentrés !");
      setModalMain( () =>
      {
        return (
          <Modal h="200px" w="600px">
            <ModalTitle />
            <ModalBody>
              <p>
              <i class="fas fa-times-circle fa-lg" style={{color: "#b71c1c", marginRight: "5px"}}></i>
                Veuillez rentrer votre identifiant et votre mot de passe avant de vous connecter !
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

  const onInscription = () =>
  {
    setAppSelector(2);
  }

  const onFermerModal = () =>
  {
    setModalMain([]);
    setModal(0);
    setOverlay(0);
  }

  const style =
  {
    fontFamily: "'Oswald', sans-serif",
    backgroundColor: "#ccc",
    position: "absolute",
    top: "40px",
    bottom: "80px",
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }

  return (
    <div style={style}>
      <Form id="formConnexion" >
          <Fieldset legend="Connexion" >
              <FieldInput label="Identifiant" type="text" id="identifiant" />
              <FieldInput label="Mot de passe" type="password" id="mot_de_passe" />
          </Fieldset>
      </Form>

      <MenuBar>
        <Menu float="right" >
          <MenuItem label="S'inscrire" click={onInscription} />
          <MenuItem label="Valider" click={onSubmit} />
        </Menu>
      </MenuBar>

      {modal === 1 && modalMain}
    </div>
  )
}