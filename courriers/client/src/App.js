import React, {useState, useEffect} from 'react';
import './App.css';

import Overlay from './components/generic/Modal/Overlay';

import MenuBar from './components/generic/Menu/MenuBar';
import Menu from './components/generic/Menu/Menu';
import MenuItem from './components/generic/Menu/MenuItem';
import MenuSubItem from './components/generic/Menu/MenuSubItem';
import MenuTexte from './components/generic/Menu/MenuTexte';
import MenuBurger from './components/generic/Menu/MenuBurger'; 
import MenuItemBurger from './components/generic/Menu/MenuItemBurger';

import AppConnexion from './components/application/AppConnexion';
import AppUtilisateurFormulaire from './components/application/AppUtilisateurFormulaire';
import AppCourrierListe from './components/application/AppCourrierListe';
import AppDestinataireListe from './components/application/AppDestinataireListe';
import AppCourrierFormulaire from './components/application/AppCourrierFormulaire';
import AppDestinataireFormulaire from './components/application/AppDestinataireFormulaire';
import AppUtilisateurListe from './components/application/AppUtilisateurListe';

function App()
{
  const role = sessionStorage.getItem("role");
  const [appSelector, setAppSelector] = useState(sessionStorage.getItem("uid") && sessionStorage.getItem("username") ? 0 : 1);
  const [mainTitle, setMainTitle] = useState("Courriers");
  const [overlay, setOverlay] = useState(0);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => 
  {
    // document.getElementById("menuTitre").style.position = "absolute";
    // document.getElementById("menuTitre").style.left = `calc(50% - ${document.getElementById("menuTitre").offsetWidth}px / 2)`;
    window.addEventListener("resize", () => 
    {
      setInnerWidth(window.innerWidth);
    });
  }, []);

  const onListeCourriers = (e) =>
  {
    console.log("onListeCourriers");
    setAppSelector(4);
  }

  const onListeDestinataires = () =>
  {
    console.log("onListeDestinataires");
    setAppSelector(5);
  }

  const onListeUtilisateurs = () =>
  {
    console.log("onListeUtilisateurs");
    setAppSelector(10);
  }

  const onAjouterCourrier = () =>
  {
    console.log("onAjouterCourrier");
    setAppSelector(6);
  }

  const onAjouterDestinataire = () =>
  {
    console.log("onAjouterDestinataire");
    setAppSelector(7);
  }

  const onProfil = () =>
  {
    console.log("onProfil");
    setAppSelector(3);
  }

  const onDeconnexion = () =>
  {
    console.log("onDeconnexion");
    sessionStorage.removeItem("uid");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("identifiant");
    sessionStorage.removeItem("id");
    setAppSelector(1);
  }

  const dateYear = () => 
  {
    let dateYear = new Date();
    return(dateYear.getFullYear());
  } 

  return (
    <div className="App">
      {overlay === 1 &&
        <Overlay />
      }

      {innerWidth > 992
        ? <MenuBar shadow="0 5px 30px black, 0 -2px 5px black" position="top" >
            {(appSelector !== 1 && appSelector !== 2 
              ? <Menu float="left" >
                  <MenuItem label="Listes" >
                    <MenuSubItem click={onListeCourriers} label="Courriers" />
                    <MenuSubItem click={onListeDestinataires} label="Destinataires" />
                    {role === "admin" &&
                      <MenuSubItem click={onListeUtilisateurs} label="Utilisateurs" />
                    }
                  </MenuItem>
                  <MenuItem label="Ajouter" >
                    <MenuSubItem click={onAjouterCourrier} label="Courrier" />
                    <MenuSubItem click={onAjouterDestinataire} label="Destinataire" />
                  </MenuItem>
                </Menu>
              : ""
            )}

            <MenuTexte id="menuTitre" label={mainTitle} fontSize="20px" noPadding={1} />

            {(appSelector !== 1 && appSelector !== 2 
              ? <Menu float="right" >
                  <MenuItem label={sessionStorage.getItem("username")} >
                    <MenuSubItem click={onProfil} label="Mon profil" />
                    <MenuSubItem click={onDeconnexion} label="Déconnexion" />
                  </MenuItem>
                </Menu>
              : ""
            )}
          </MenuBar>

        : <MenuBar shadow="0 5px 30px black, 0 -2px 5px black" position="top" >
            {(appSelector !== 1 && appSelector !== 2 
            ? <MenuBurger float="left" position="top" burger={1}>
                <MenuItemBurger click={onListeCourriers} label="Listes des courriers" icone="fas fa-clipboard-list"/>
                <MenuItemBurger click={onListeDestinataires} label="Listes des destinataires" icone="fas fa-clipboard-list" />
                {role === "admin" &&
                  <MenuItemBurger click={onListeUtilisateurs} label="Listes des utilisateurs" icone="fas fa-clipboard-list" />
                }
                <MenuItemBurger click={onAjouterCourrier} label="Ajouter un courrier" icone="fas fa-plus-circle" />
                <MenuItemBurger click={onAjouterDestinataire} label="Ajouter un destinataire" icone="fas fa-plus-circle" />
                <MenuItemBurger click={onProfil} label="Mon profil" icone="fas fa-user" />
                <MenuItemBurger click={onDeconnexion} label="Déconnexion" icone="fas fa-sign-out-alt" />
              </MenuBurger>
            : ""
          )}

          <MenuTexte label={mainTitle} fontSize="20px" noPadding={1} />
        </MenuBar>
      }

      {(appSelector === 1)
        ? <AppConnexion func={setAppSelector} mainTitle={setMainTitle} overlay={setOverlay} />
        : (appSelector === 2)
          ? <AppUtilisateurFormulaire func={setAppSelector} mainTitle={setMainTitle} overlay={setOverlay} action="inscrire" />
          : (appSelector === 3)
            ? <AppUtilisateurFormulaire func={setAppSelector} mainTitle={setMainTitle} overlay={setOverlay} action="modifier" />
            : (appSelector === 4)
              ? <AppCourrierListe func={setAppSelector} mainTitle={setMainTitle} overlay={setOverlay} />
              : (appSelector === 5)
                ? <AppDestinataireListe func={setAppSelector} mainTitle={setMainTitle} overlay={setOverlay} />
                : (appSelector === 6)
                  ? <AppCourrierFormulaire func={setAppSelector} mainTitle={setMainTitle} overlay={setOverlay} action="ajouter" />
                  : (appSelector === 7)
                    ? <AppDestinataireFormulaire func={setAppSelector} mainTitle={setMainTitle} overlay={setOverlay} action="ajouter" />
                    : (appSelector === 8)
                      ? <AppCourrierFormulaire func={setAppSelector} mainTitle={setMainTitle} overlay={setOverlay} action="modifier" />
                      : (appSelector === 9)
                        ? <AppDestinataireFormulaire func={setAppSelector} mainTitle={setMainTitle} overlay={setOverlay} action="modifier" />
                        : (appSelector === 10)
                          ? <AppUtilisateurListe func={setAppSelector} mainTitle={setMainTitle} overlay={setOverlay} />
                          : ""
      }

      <footer>
        &#xA9; {dateYear()} - <a href="https://alexisjuglair.fr/" target="_blank" rel="noreferrer">Alexis Juglair</a>
      </footer>
    </div>
  );
}

export default App;
