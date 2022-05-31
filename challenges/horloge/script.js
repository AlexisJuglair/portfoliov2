function init() 
{
    console.log("init();");

    // obtenir l'heure locale
    let date = new Date;
    let secondes = date.getSeconds();
    let minutes = date.getMinutes();
    let heures = date.getHours();
  
    // créez un objet avec chaque aiguille et son angle en degrés 
    let aiguilles = [
      {
        aiguille: 'heure',
        angle: (heures * 30) + (minutes / 2)
      },
      {
        aiguille: 'minute',
        angle: (minutes * 6)
      },
      {
        aiguille: 'seconde',
        angle: (secondes * 6)
      }
    ];

    // faire une boucle pour chacune des aiguilles pour définir leur angle 
    for (let j = 0; j < aiguilles.length; j++) {
        let elements = document.querySelectorAll('#' + aiguilles[j].aiguille);  
        for (let k = 0; k < elements.length; k++) {
            elements[k].style.webkitTransform = 'rotateZ('+ aiguilles[j].angle +'deg)';
            elements[k].style.transform = 'rotateZ('+ aiguilles[j].angle +'deg)';
        }
    }
  }