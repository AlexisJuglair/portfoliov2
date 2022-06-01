<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="CV et portfolio en ligne de Alexis Juglair, développeur de sites vitrines, e-commerces et applications web.">
	<meta name="author" content="Alexis Juglair"> 

    <title>Alexis Juglair - Développeur Web</title>
    <!-- <link rel="shortcut icon" href="#">  -->
    
    <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Reem+Kufi:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.css" rel="stylesheet"/>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/menu-navigation.css">
    <link rel="stylesheet" href="css/cv.css">
    <link rel="stylesheet" href="css/portfolio.css">
    <link rel="stylesheet" href="css/contact.css">

    <script src="code.js"></script>
</head>

<body>

    <?php

    function recoverFolder($path, $order=true)
    {
        $mainFolder = opendir($path);
        $i = 0;

        while ($folder = readdir($mainFolder))
        {
            if ($folder != '.' && $folder != '..')
            {                                    
                $listFolder[$i] = $folder;
                $i++;
            }
        }

        if ($order) 
        {
            sort($listFolder);
            return $listFolder;
        }
        else
        {
            rsort($listFolder);
            return $listFolder;
        }
        
    }

    $listeQuestions = array();
    $q = 1;

    for ($i=1; $i <= 9; $i++) 
    {
        for ($j=1; $j <= 9; $j++) 
        {
            $listQuestions[$q] = array(
                    'question' => "Combien font $i + $j ?",
                    'answer' => $i+$j
            );
            $q++;
        }
        $j = 1;   
    }

    session_start();
    $_SESSION['captcha']['listQuestions'] = $listQuestions;
    $questionForm = array_rand($listQuestions);
    $_SESSION['captcha']['answer'] = $listQuestions[$questionForm]['answer'];

    ?>

    <header class="header">
        <h1>Alexis Juglair</h1>
        <h2>Développeur Web et Mobile</h2>
        <div class="header-contact">
            <a href="tel:0682289934" target="_blank">
                <i class="fas fa-phone-alt fa-3x"></i>
            </a>
            <a href="https://www.linkedin.com/in/alexis-juglair/" target="_blank">
                <i class="fab fa-linkedin fa-3x"></i>
            </a>
            <a href="https://github.com/AlexisJuglair" target="_blank">
                <i class="fab fa-github fa-3x"></i>
            </a>
        </div>
        <ul class="menu">
            <li class="menu-ligne"><a href=#curriculumVitae>Curriculum Vitae</a></li>
            <li class="menu-ligne"><a href=#portfolio>Portfolio/Projets</a><i class="fas fa-caret-down fa-lg"></i>
                <ul class="sous-menu">
                    <div>
                        <li class="sous-menu-ligne">
                            <a href="/casse-briques" target="_blank">Casse-briques</a>
                        </li>
                        <li class="sous-menu-ligne">
                            <a href="/courriers/client" target="_blank">Courriers</a>
                        </li>
                        <li class="sous-menu-ligne">
                            <a href="#">Dance School Manager</a>
                        </li>
                        <li class="sous-menu-ligne">
                            <a href="/challenges/horloge" target="_blank">Horloge</a>
                        </li>
                        <li class="sous-menu-ligne">
                            <a href="/challenges/logo_ps" target="_blank">Logo PlayStation</a>
                        </li>
                        <li class="sous-menu-ligne">
                            <a href="https://www.sodipan01.fr/" target="_blank">Sodipan 01</a>
                        </li>
                    </div>
                    <div>
                        <li class="sous-menu-ligne">
                            <a href="https://www.sodipan-equipement.fr/" target="_blank">Sodipan Equipement</a>
                        </li>
                        <li class="sous-menu-ligne">
                            <a href="https://www.sodipan-fermetures.fr/" target="_blank">Sodipan Fermetures</a>
                        </li>
                        <li class="sous-menu-ligne">
                            <a href="#">SymShop</a>
                        </li>
                        <li class="sous-menu-ligne">
                            <a href="/tables" target="_blank">Tables de multiplications</a>
                        </li>
                        <li class="sous-menu-ligne">
                            <a href="/telecommande/remote.html" target="_blank">Télécommande</a>
                        </li>
                        <li class="sous-menu-ligne">
                            <a href="/tezuka-world" target="_blank">Tezuka World</a>
                        </li>
                    </div>
                </ul>
            </li>
            <li class="menu-ligne"><a href=#contact>Me contacter</a></li>
        </ul>
        <p>Sites vitrines</p>
        <p>Sites e-commerces</p>
        <p>Applications web</p>
    </header>

    <main id="main">
        <h2 id="curriculumVitae" class="heading">Curriculum Vitae</h2>
        <a class="heading-bouton" href="./CV-Alexis-Juglair-Développeur-Web.pdf" target="_blank">
            <i class="fas fa-download"></i>
            Télécharger
        </a>

        <section class="section">  
            <div>  
                <article class="cv-wrapper">

                    <div class="cv-header">
                        <div class="cv-photo">
                            <img src="images/profile.png" alt="cv-photo">
                        </div>
                        <div class="cv-intro">
                            <div class="cv-titre-contact">
                                <div class="cv-titre">
                                    <h2>Alexis Juglair</h2>
                                    <p>Développeur Web et Mobile</p>
                                </div>
                                <div class="cv-contact">
                                <p>06 82 28 99 34</p>
                                <p>alexis.juglair@gmail.com</p>
                                <p class="cv-contact-ville">Bourg-en-Bresse</p>
                                <a href="tel:0682289934" target="_blank">
                                    <i class="fas fa-phone-alt fa-2x"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/alexis-juglair/" target="_blank">
                                    <i class="fab fa-linkedin fa-2x"></i>
                                </a>
                                <a href="https://github.com/AlexisJuglair" target="_blank">
                                    <i class="fab fa-github fa-2x"></i>
                                </a>
                                </div>
                            </div>
                            <div class="cv-resume">
                                <p>
                                    Passionné par le code et ayant fait un BTS dans ce domaine, je souhaiterais mettre mes compétences techniques au service de votre entreprise. 
                                    J'ai décidé de me spécialiser dans le web en effectuant une formation.
                                    Actuellement à la recherche d'un CDI à la fin de celle-ci, à partir du 13 avril 2022.
                                </p>
                            </div>
                        </div>
                    </div>

                    <hr>

                    <div class="cv-body">
                        <div class="cv-experiences">
                            <h3>Expériences professionnelles</h3>  

                            <a href="https://www.jam-difus.com/" target="_blank">
                                <div class="cv-experience">
                                    <div class="cv-experience-logo">
                                        <img src="./images/experiences/jamdifus.png" alt="jamdiffus">
                                    </div>
                                    <div class="cv-experience-body">
                                        <h4>Jam Difus’ - 2022 | Villars-les-Dombes</h4>
                                        <p>Stagiaire développeur web</p>
                                        <p>
                                            - Formation en interne sur le framework de l'entreprise.<br>
                                            - Réalsiation d'un site institutionel one page responsive sur une des marques de l'entreprise(front-end en HTML, CSS, JavaScript et jQuery | back-end en PHP, MySQL et framework proprétaire).
                                        </p>
                                    </div>     
                                </div>
                            </a>

                            <a href="http://www.2bsystem.fr/" target="_blank">
                                <div class="cv-experience">
                                    
                                        <div class="cv-experience-logo">
                                            <img src="./images/experiences/2bsystem.png" alt="2bsystem">
                                        </div>
                                        <div class="cv-experience-body">
                                            <h4>2BSystem - 2020 | Bourg-en-Bresse</h4>
                                            <p>Développeur web</p>
                                            <p>
                                                - Développement d'un portail web pour les clients des clients dans le domaine de l'agroalimentaire (fon-end en HTML, CSS, JavaScript et Bulma | back-end en J2EE).
                                            </p>
                                        </div>     
                                </div>
                            </a>

                            <a href="http://www.acg-synergies.fr/" target="_blank">
                                <div class="cv-experience">
                                    <div class="cv-experience-logo">
                                        <img src="./images/experiences/acg-synergies.png" alt="acg-synergies">
                                    </div>
                                    <div class="cv-experience-body">
                                        <h4>ACG Synergies - 2018-2019 | Bourg-en-Bresse</h4>
                                        <p>Développeur</p>
                                        <p>
                                            - Correction de bugs sur le progiciel de logement social Aravis développé en Plex(langage dérivé du C).<br>
                                            - Gestion de requête et débugage sur serveur AS400.<br>
                                            - Méthodologie Agile SCRUM.
                                        </p>
                                    </div>
                                </div>
                            </a>

                            <a href="https://www.sodipan01.fr/" target="_blank">
                                <div class="cv-experience">
                                    <div class="cv-experience-logo">
                                        <img src="./images/experiences/sodipan.png" alt="sodipan">
                                    </div>
                                    <div class="cv-experience-body">
                                        <h4>Sodipan - 2018 | Péronnas</h4>
                                        <p>Développeur web</p>
                                        <p>
                                            - Développement des trois sites web de l'entreprise sous Wordpress(choix d'un thème et front-end en HTML et CSS).<br>
                                            - Référencement SEO.<br>
                                            - Formation utilisateur.<br>
                                            - Rédaction de documentations.<br>
                                            - Mise en ligne de produits.
                                        </p>
                                    </div>
                                </div>
                            </a>

                            <a href="https://www.reseau-canope.fr/academie-de-lyon/atelier-canope-01-bourg-en-bresse.html" target="_blank">
                                <div class="cv-experience">
                                    <div class="cv-experience-logo">
                                        <img src="./images/experiences/canope.png" alt="canope">
                                    </div>
                                    <div class="cv-experience-body">
                                        <h4>Réseau Canopé - 2016-2017 | Bourg-en-Bresse</h4>
                                        <p>Technicien/développeur informatique</p>
                                        <p>
                                            - Gestion et maintenance des postes/du matériel informatiques/tablettes iPad-Android.<br>
                                            - Préparation des salles de formation.<br>
                                            - Développement d'une application web de gestion de storyboard (front-end en HTML, CSS, JavaScript, jQuery | back-end en PHP).<br> 
                                            - Réalisation de web documentaires avec Klynt.</p>
                                    </div>
                                </div>
                            </a>

                            <a href="https://www.ameli.fr/assure/adresses-et-contact/points-accueil/agence-de-macon-0" target="_blank">
                                <div class="cv-experience">
                                    <div class="cv-experience-logo">
                                        <img src="./images/experiences/cpam.png" alt="cpam">
                                    </div>
                                    <div class="cv-experience-body">
                                        <h4>CPAM - 2014 | Mâcon</h4>
                                        <p>Technicien informatique</p>
                                        <p>- Gestion de requête SQL, avec mise en forme de tableaux EXCEL de résultats.</p>
                                    </div>
                                </div>
                            </a>

                            <a href="https://www.g-p-i.fr/" target="_blank">
                                <div class="cv-experience">
                                    <div class="cv-experience-logo">
                                        <img src="./images/experiences/gpi.png" alt="gpi">
                                    </div>
                                    <div class="cv-experience-body">
                                        <h4>GPI - 2014 | Craponne</h4>
                                        <p>Développeur</p>
                                        <p>- Maintenance et correction de bugs sur les programmes du progiciel de transport D'Artagnan avec le langage Progress.</p>
                                    </div>
                                </div>
                            </a>

                            <a href="https://www.nexans.fr/fr/" target="_blank">
                                <div class="cv-experience">
                                    <div class="cv-experience-logo">
                                        <img src="./images/experiences/nexans.png" alt="nexans">
                                    </div>
                                    <div class="cv-experience-body">
                                        <h4>Nexans - 2013 | Nexans</h4>
                                        <p>Développeur</p>
                                        <p>- Développement de 2 applications de gestion de lignes de production en langages VBA et VB.net avec le SGBD Access.</p>
                                    </div>
                                </div>
                            </a>

                            <a href="http://erea71-claudebrosse.ac-dijon.fr/" target="_blank">
                                <div class="cv-experience">
                                    <div class="cv-experience-logo">
                                        <img src="./images/experiences/erea.png" alt="erea">
                                    </div>
                                    <div class="cv-experience-body">
                                        <h4>Charnay-lès-Mâcon - 2012 | EREA</h4>
                                        <p>Stagiaire développeur</p>
                                        <p>- Développement d'une application de gestion des stocks avec le langage VB.net avec le SGBD Access.</p>
                                    </div>
                                </div>
                            </a>

                        </div>
                        <div class="cv-body-aside">
                             <div class="cv-competences">
                                <h3>Compétences</h3>
                                <div class="cv-techno">
                                    <div>
                                        <a href="https://html.spec.whatwg.org/multipage/" target="_blank">
                                            <img src="./images/competences/html5.png" alt="html5" title="HTML5">
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://www.w3.org/Style/CSS/" target="_blank">
                                            <img src="./images/competences/css3.png" alt="css3" title="CSS3"> 
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/" target="_blank">
                                            <img src="./images/competences/javascript2.png" alt="javascript" title="JavaScript">           
                                        </a>
                                    </div>  
                                    <div>
                                        <a href="https://www.php.net/" target="_blank">
                                            <img src="./images/competences/php.png" alt="php" title="PHP">           
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://www.mysql.com/" target="_blank">
                                            <img src="./images/competences/mysql.png" alt="mysql" title="MySql">           
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://git-scm.com/" target="_blank">
                                            <img src="./images/competences/git.png" alt="git" title="git">           
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://getbootstrap.com/" target="_blank">
                                            <img src="./images/competences/bootstrap.png" alt="bootstrap" title="Bootstrap">           
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://jquery.com/" target="_blank">
                                            <img src="./images/competences/jquery.png" alt="jquery" title="jQuery">           
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://fr.reactjs.org/" target="_blank">
                                            <img src="./images/competences/react.png" alt="react" title="React">           
                                        </a>
                                    </div>   
                                    
                                    <div>
                                        <a href="https://symfony.com/" target="_blank">
                                            <img src="./images/competences/symfony.png" alt="symfony" title="Symfony">
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://fr.wordpress.org/" target="_blank">
                                            <img src="./images/competences/wordpress.png" alt="wordpress" title="WordPress"> 
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://www.prestashop.com/fr/" target="_blank">
                                            <img src="./images/competences/prestashop.png" alt="prestashop" title="PrestaShop">           
                                        </a>
                                    </div>  
                                    <div>
                                        <a href="https://laragon.org/" target="_blank">
                                            <img src="./images/competences/laragon.png" alt="laragon" title="Laragon">           
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://code.visualstudio.com/" target="_blank">
                                            <img src="./images/competences/vscode.png" alt="vscode" title="Visual Studio Code">           
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://filezilla-project.org/" target="_blank">
                                            <img src="./images/competences/filezilla.png" alt="filezilla" title="FileZilla">           
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://www.adobe.com/fr/products/photoshop/landpb.html" target="_blank">
                                            <img src="./images/competences/photoshop.png" alt="photoshop" title="Photoshop">           
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://www.figma.com/" target="_blank">
                                            <img src="./images/competences/figma.png" alt="figma" title="Figma">           
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://www.microsoft.com/fr-fr/windows/" target="_blank">
                                            <img src="./images/competences/windows.png" alt="windows" title="Windows">           
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://ubuntu.com/" target="_blank">
                                            <img src="./images/competences/ubuntu.png" alt="ubuntu" title="Ubuntu">           
                                        </a>
                                    </div> 
                                </div>
                                <h4>Savoir-être professionnel</h4>
                                <p>
                                    Autonomie <span>/</span> Curiosité
                                    <br>
                                    Force de proposition <span>/</span> Rigueur
                                </p>
                             </div>

                             <div class="cv-formations">
                                <h3>Formations</h3>

                                <a href="https://www.onlineformapro.com/" target="_blank">
                                    <div class="cv-formation">
                                        <div class="cv-formation-logo-lieu">
                                            <div class="cv-formation-logo">
                                                <img src="./images/formations/onlineformapro.png" alt="onlineformapro">
                                            </div>
                                            <div class="cv-formation-lieu">
                                                <p>Onlineformapro</p>
                                                <p>Saint-Denis-lès-Bourg 2021-2022</p>
                                            </div>
                                        </div>
                                        <p>Titre professionnel niveau BAC+2</p>
                                        <p>Développeur Web et Web Mobile</p>
                                    </div>
                                </a>
                                <a href="https://lyc-lamartine-macon.eclat-bfc.fr/" target="_blank">
                                    <div class="cv-formation">
                                        <div class="cv-formation-logo-lieu">
                                            <div class="cv-formation-logo">
                                                <img src="./images/formations/lycee-lamartine.png" alt="lycee-lamartine">
                                            </div>
                                            <div class="cv-formation-lieu">
                                                <p>Lycée Lamartine</p>
                                                <p>Mâcon 2011-2013</p>
                                            </div>
                                        </div>
                                        <p>BTS Systèmes Informatiques aux Organisations</p>
                                        <p>Option Solutions Logicielles et Applications Métiers</p>
                                    </div>
                                </a>

                                <a href="https://www.lycee-saint-joseph.org/" target="_blank">
                                    <div class="cv-formation">
                                        <div class="cv-formation-logo-lieu">
                                            <div class="cv-formation-logo">
                                                <img src="./images/formations/lycee-saint-joseph.png" alt="lycee-saint-joseph">
                                            </div>
                                            <div class="cv-formation-lieu">
                                                <p>Lycée Saint Joseph</p>
                                                <p>Bourg-en-Bresse 2008-2011</p>
                                            </div>
                                        </div>
                                        <p>BAC pro Systèmes Electroniques Numériques</p>
                                        <p>Option Télécommunications et Réseaux</p>
                                    </div>
                                </a>

                             </div>  

                             <div class="cv-langues">
                                <h3>Langues</h3>
                                <img src="./images/langues/fr.svg" alt="francais" title="Français">
                                <img src="./images/langues/gb.svg" alt="anglais" title="Anglais">
                             </div> 

                             <div class="cv-hobbies">
                                <h3>Hobbies</h3>
                                <p>
                                    <i class="fas fa-film"></i>     
                                    Cinéma
                                </p>
                                <p>                       
                                    Footing
                                    <i class="fas fa-running"></i>
                                </p>
                                <p>
                                    <i class="fas fa-desktop"></i>
                                    Informatique
                                </p>
                                <p>
                                    Jeu vidéo
                                    <i class="fas fa-gamepad"></i>  
                                </p>
                                <p>
                                    <i class="fas fa-book"></i>     
                                    Lecture et écriture
                                </p>
                             </div> 
                        </div>

                    </div>

                </article>
            </div>
        </section>

        <h2 id="portfolio" class="heading">Portfolio</h2>
        
        <section class="section">
            <div>
               <div class="portfolio-wrapper">
                    <div class="projet">
                        <img src="./images/projets/casse-briques.png" alt="casse-briques">                 
                        <h5>Casse-briques</h5> 
                        <p class="projet-description">Réalisation d'un casse-briques en formation.</p> 
                        <p>Technologies utilisées :</p> 
                        <div class="projet-techno">
                            <div>
                                <img src="./images/competences/html5.png" alt="html5" title="HTML5">
                            </div>
                            <div>
                                <img src="./images/competences/css3.png" alt="css3" title="CSS3"> 
                            </div>
                            <div>
                                <img src="./images/competences/javascript2.png" alt="javascript" title="JavaScript">           
                            </div>                      
                        </div>  
                        <div class="projet-boutons">
                            <a href="/casse-briques" target="_blank">
                                <i class="fas fa-eye"></i> 
                                Voir
                            </a>
                            <a class="projet-boutons-disabled">
                                <i class="fas fa-download"></i> 
                                Télécharger
                            </a>   
                        </div>                      
                    </div>  

                    <div class="projet">
                        <img class="projet-img-border" src="./images/projets/courriers.png" alt="courriers">                        
                        <h5>Courriers</h5> 
                        <p class="projet-description">Réalisation d'une application de génération de lettres de motivation en formation avec une API.</p> 
                        <p>Technologies utilisées :</p> 
                        <div class="projet-techno">
                            <div>
                                <img src="./images/competences/html5.png" alt="html5" title="HTML5">
                            </div>
                            <div>
                                <img src="./images/competences/css3.png" alt="css3" title="CSS3"> 
                            </div>
                            <div>
                                <img src="./images/competences/javascript2.png" alt="javascript" title="JavaScript">           
                            </div>  
                            <div>
                                <img src="./images/competences/php.png" alt="php" title="PHP">           
                            </div>
                            <div>
                                <img src="./images/competences/mysql.png" alt="mysql" title="MySql">           
                            </div>
                            <div>
                                <img src="./images/competences/react.png" alt="react" title="React">           
                            </div>                     
                        </div>  
                        <div class="projet-boutons">
                            <a href="/courriers/client" target="_blank">
                                <i class="fas fa-eye"></i> 
                                Voir
                            </a>
                            <a class="projet-boutons-disabled">
                                <i class="fas fa-download"></i> 
                                Télécharger
                            </a>   
                        </div>                    
                   </div>   

                   <div class="projet">
                        <img src="./images/projets/dsm.png" alt="dance school manager">                      
                        <h5>Dance School Manager</h5> 
                        <p class="projet-description">Réalisation d'une application d'école de danse en formation.</p> 
                        <p>Technologies utilisées :</p> 
                        <div class="projet-techno">
                            <div>
                                <img src="./images/competences/html5.png" alt="html5" title="HTML5">
                            </div>
                            <div>
                                <img src="./images/competences/css3.png" alt="css3" title="CSS3"> 
                            </div>
                            <div>
                                <img src="./images/competences/javascript2.png" alt="javascript" title="JavaScript">           
                            </div>
                            <div>
                                <img src="./images/competences/php.png" alt="php" title="PHP">           
                            </div>
                            <div>
                                <img src="./images/competences/mysql.png" alt="mysql" title="MySql">           
                            </div>
                            </div>  
                            <div class="projet-boutons">
                                <a class="projet-boutons-disabled">
                                    <i class="fas fa-eye"></i> 
                                    Voir
                                </a>
                                <a class="projet-boutons-disabled">
                                    <i class="fas fa-download"></i> 
                                    Télécharger
                                </a> 
                            </div>                      
                   </div>

                   <div class="projet">
                        <img src="./images/projets/horloge.png" alt="horloge">                       
                        <h5>Horloge</h5> 
                        <p class="projet-description">Réalisation d'une horloge en formation.</p> 
                        <p>Technologies utilisées :</p> 
                        <div class="projet-techno">
                            <div>
                                <img src="./images/competences/html5.png" alt="html5" title="HTML5">
                            </div>
                            <div>
                                <img src="./images/competences/css3.png" alt="css3" title="CSS3"> 
                            </div>
                            <div>
                                <img src="./images/competences/javascript2.png" alt="javascript" title="JavaScript">           
                            </div>
                        </div>  
                        <div class="projet-boutons">
                            <a href="/challenges/horloge" target="_blank">
                                <i class="fas fa-eye"></i> 
                                Voir
                            </a>
                            <a class="projet-boutons-disabled">
                                <i class="fas fa-download"></i> 
                                Télécharger
                            </a>   
                        </div>                     
                    </div> 
                    
                    <div class="projet">
                        <img src="./images/projets/logops.png" alt="logo playstation">                       
                        <h5>Logo PlayStation</h5> 
                        <p class="projet-description">Reproduction d'un logo PlayStation.</p> 
                        <p>Technologies utilisées :</p> 
                        <div class="projet-techno">
                            <div>
                                <img src="./images/competences/html5.png" alt="html5" title="HTML5">
                            </div>
                            <div>
                                <img src="./images/competences/css3.png" alt="css3" title="CSS3"> 
                            </div>
                        </div>  
                        <div class="projet-boutons">
                            <a href="/challenges/logo_ps" target="_blank">
                                <i class="fas fa-eye"></i> 
                                Voir
                            </a>
                            <a class="projet-boutons-disabled">
                                <i class="fas fa-download"></i> 
                                Télécharger
                            </a>  
                        </div>                      
                    </div>  
                    
                    <div class="projet">
                        <img src="./images/projets/sodipan01.png" alt="sodipan 01">                       
                        <h5>Sodipan 01</h5> 
                        <p class="projet-description">Reprise du site Sodipan 01 avec un nouveau thème.</p> 
                        <p>Technologies utilisées :</p> 
                        <div class="projet-techno">
                            <div>
                                <img src="./images/competences/html5.png" alt="html5" title="HTML5">
                            </div>
                            <div>
                                <img src="./images/competences/css3.png" alt="css3" title="CSS3"> 
                            </div>
                            <div>
                                <img src="./images/competences/wordpress.png" alt="wordpress" title="WordPress"> 
                            </div>
                        </div>  
                        <div class="projet-boutons">
                            <a href="https://www.sodipan01.fr/" target="_blank">
                                <i class="fas fa-eye"></i> 
                                Voir
                            </a>
                            <a class="projet-boutons-disabled">
                                <i class="fas fa-download"></i> 
                                Télécharger
                            </a>   
                        </div>                     
                    </div> 

                    <div class="projet">
                        <img src="./images/projets/sodipan-equipement.png" alt="Sodipan Equipement">                       
                        <h5>Sodipan Equipement</h5> 
                        <p class="projet-description">Reprise du site Sodipan Equipement avec un nouveau thème.</p> 
                        <p>Technologies utilisées :</p> 
                        <div class="projet-techno">
                            <div>
                                <img src="./images/competences/html5.png" alt="html5" title="HTML5">
                            </div>
                            <div>
                                <img src="./images/competences/css3.png" alt="css3" title="CSS3"> 
                            </div>
                            <div>
                                <img src="./images/competences/wordpress.png" alt="wordpress" title="WordPress"> 
                            </div>
                        </div>  
                        <div class="projet-boutons">
                            <a href="https://www.sodipan-equipement.fr/" target="_blank">
                                <i class="fas fa-eye"></i> 
                                Voir
                            </a>
                            <a class="projet-boutons-disabled">
                                <i class="fas fa-download"></i> 
                                Télécharger
                            </a>   
                        </div>                      
                    </div> 

                    <div class="projet">
                        <img src="./images/projets/sodipan-fermetures.png" alt="Sodipan Fermetures">                       
                        <h5>Sodipan Fermetures</h5> 
                        <p class="projet-description">Reprise du site Sodipan Fermetures avec un nouveau thème.</p> 
                        <p>Technologies utilisées :</p> 
                        <div class="projet-techno">
                            <div>
                                <img src="./images/competences/html5.png" alt="html5" title="HTML5">
                            </div>
                            <div>
                                <img src="./images/competences/css3.png" alt="css3" title="CSS3"> 
                            </div>
                            <div>
                                <img src="./images/competences/wordpress.png" alt="wordpress" title="WordPress"> 
                            </div>
                        </div>  
                        <div class="projet-boutons">
                            <a href="https://www.sodipan-fermetures.fr/" target="_blank">
                                <i class="fas fa-eye"></i> 
                                Voir
                            </a>
                            <a class="projet-boutons-disabled">
                                <i class="fas fa-download"></i> 
                                Télécharger
                            </a>  
                        </div>                     
                    </div>
                    
                    <div class="projet">
                        <img src="./images/projets/symshop.png" alt="SymShop">                       
                        <h5>SymShop</h5> 
                        <p class="projet-description">Réalisation d'un tutoriel de site e-commerce.</p> 
                        <p>Technologies utilisées :</p> 
                        <div class="projet-techno">
                            <div>
                                <img src="./images/competences/html5.png" alt="html5" title="HTML5">
                            </div>
                            <div>
                                <img src="./images/competences/css3.png" alt="css3" title="CSS3"> 
                            </div>
                            <div>
                                <img src="./images/competences/php.png" alt="php" title="PHP"> 
                            </div>
                            <div>
                                <img src="./images/competences/symfony.png" alt="symfony" title="Symfony"> 
                            </div>
                        </div>  
                        <div class="projet-boutons">
                            <a class="projet-boutons-disabled">
                                <i class="fas fa-eye"></i> 
                                Voir
                            </a>
                            <a class="projet-boutons-disabled">
                                <i class="fas fa-download"></i> 
                                Télécharger
                            </a>    
                        </div>                      
                    </div>

                    <div class="projet">
                        <img src="./images/projets/tables-multiplication.png" alt="Tables Multiplications">                       
                        <h5>Tables de multiplications</h5> 
                        <p class="projet-description">Exercice fait en formation.</p> 
                        <p>Technologies utilisées :</p> 
                        <div class="projet-techno">
                            <div>
                                <img src="./images/competences/html5.png" alt="html5" title="HTML5">
                            </div>
                            <div>
                                <img src="./images/competences/css3.png" alt="css3" title="CSS3"> 
                            </div>
                            <div>
                                <img src="./images/competences/javascript2.png" alt="javascript" title="JavaScript"> 
                            </div>
                        </div>  
                        <div class="projet-boutons">
                            <a href="/tables" target="_blank">
                                <i class="fas fa-eye"></i> 
                                Voir
                            </a>
                            <a class="projet-boutons-disabled">
                                <i class="fas fa-download"></i> 
                                Télécharger
                            </a>   
                        </div>                     
                    </div>

                    <div class="projet">
                        <img src="./images/projets/telecommande.png" alt="Télécommande">                       
                        <h5>Télécommande</h5> 
                        <p class="projet-description">Télécommande pour spots lumineux développée en formation.</p> 
                        <p>Technologies utilisées :</p> 
                        <div class="projet-techno">
                            <div>
                                <img src="./images/competences/html5.png" alt="html5" title="HTML5">
                            </div>
                            <div>
                                <img src="./images/competences/css3.png" alt="css3" title="CSS3"> 
                            </div>
                            <div>
                                <img src="./images/competences/javascript2.png" alt="javascript" title="JavaScript"> 
                            </div>
                        </div>  
                        <div class="projet-boutons">
                            <a href="/telecommande/remote.html" target="_blank">
                                <i class="fas fa-eye"></i> 
                                Voir
                            </a>
                            <a class="projet-boutons-disabled">
                                <i class="fas fa-download"></i> 
                                Télécharger
                            </a>  
                        </div>                      
                    </div>

                    <div class="projet">
                        <img src="./images/projets/tezuka-world.png" alt="Tezuka World">                       
                        <h5>Tezuka World</h5> 
                        <p class="projet-description">Réalisation d'une page sur le mangaka Osamu Tezuka avec création d'un plugin pour compter les visiteurs.</p> 
                        <p>Technologies utilisées :</p> 
                        <div class="projet-techno">
                            <div>
                                <img src="./images/competences/html5.png" alt="html5" title="HTML5">
                            </div>
                            <div>
                                <img src="./images/competences/css3.png" alt="css3" title="CSS3"> 
                            </div>
                            <div>
                                <img src="./images/competences/php.png" alt="php" title="PHP"> 
                            </div>
                            <div>
                                <img src="./images/competences/wordpress.png" alt="wordpress" title="WordPress"> 
                            </div>
                        </div>  
                        <div class="projet-boutons">
                            <a href="https://alexisj802.promo-73.codeur.online/tezuka-world/" target="_blank">
                                <i class="fas fa-eye"></i> 
                                Voir
                            </a>
                            <a class="projet-boutons-disabled">
                                <i class="fas fa-download"></i> 
                                Télécharger
                            </a>   
                        </div>                     
                    </div>
                    
                </div> 
                </div>                              
            </div>
        </section>
                             
        <h2 id="contact" class="heading">Me contacter</h2>
        <section class="section">
            <div>
                <div class="contact-wrapper"> 
                    <div class="contact-coordonnees">
                        <p>Alexis Juglair</p>
                        <p>06 82 28 99 34</p>
                        <p>alexis.juglair@gmail.com</p>
                        <p class="contact-ville">Bourg-en-Bresse</p>
                        <a href="tel:0682289934" target="_blank">
                            <i class="fas fa-phone-alt fa-2x"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/alexis-juglair/" target="_blank">
                            <i class="fab fa-linkedin fa-2x"></i>
                        </a>
                        <a href="https://github.com/AlexisJuglair" target="_blank">
                            <i class="fab fa-github fa-2x"></i>
                        </a>
                    </div>                     
                    <form id="formContact" class="form-contact needs-validation" name="formContact" novalidate>
                        <div id="formGroup" class="form-group">
                            <div class="row row-contact">
                                <div class="form-floating form-floating-one">
                                    <input id="floatingLastName" class="form-control" type="text" placeholder="Nom" name="nom" required>
                                    <div class="invalid-feedback">
                                        Veuillez entrer un nom.
                                    </div>
                                </div>
                                <div class="form-floating form-floating-two">
                                    <input id="floatingFirstName" class="form-control" type="text" placeholder="Prénom" name="prenom" required>
                                    <div class="invalid-feedback">
                                        Veuillez entrer un prénom.
                                    </div>
                                </div>
                            </div>
                            <div class="form-floating">
                                <input id="floatingEmail" class="form-control" type="email" placeholder="E-mail" name="email" required>
                                <div class="invalid-feedback">
                                    Veuillez entrer un e-mail.
                                </div>
                            </div>
                            <div class="form-floating">
                                <input id="floatingObject" class="form-control" type="text" placeholder="Sujet" name="sujet" required>
                                <div class="invalid-feedback">
                                    Veuillez entrer un sujet.
                                </div>
                            </div>
                            <div class="form-floating">
                                <textarea  id="floatingTextarea" class="form-control" placeholder="Message" name="message" required></textarea>
                                <div class="invalid-feedback">
                                    Veuillez entrer un message.
                                </div>
                            </div>
                            <div class="form-floating">
                                <input id="floatingCaptcha" class="form-control" type="text" placeholder="<?php echo $listQuestions[$questionForm]['question']; ?>" name="captcha" required>
                                <div class="invalid-feedback">
                                    Veuillez répondre au captcha.
                                </div>
                            </div>
                            <div id="buttonContact" class="button-contact">
                                <button class="btn btn-reset" type="reset">
                                    <i class="fas fa-eraser"></i>
                                    Reset
                                </button>
                                <button class="btn" type="submit" >
                                    <i class="fas fa-paper-plane"></i>
                                    Envoyer
                                </button>
                            </div>
                        </div>
                    </form>
                </div> 
            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="container">
            <span>
                &copy;<?php echo date("Y"); ?>
                Alexis Juglair
            </span>
        </div>
    </footer>

    <script>init();</script>
</body>
</html>