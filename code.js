function init()
{
  document.getElementById("formContact").reset();
  submitForm();
}

// Soumission du formulaire de contact (validation JS + PHP)
function submitForm() 
{
  let forms = document.querySelectorAll('.needs-validation');

  forms.forEach(function (form) 
  {
      form.addEventListener('submit', function (event) 
      {
        event.preventDefault();

        if (document.body.contains(document.getElementById("divAlert")))
        {
          document.getElementById("divAlert").remove();
        }

        if (!form.checkValidity()) 
        {         
          event.stopPropagation();
          form.classList.add('was-validated');
        }
        else 
        { 
          form.classList.remove('was-validated');

          let formContact = document.getElementById("formContact");
          let data = new FormData(formContact);
          let ajax = new XMLHttpRequest();
  
          ajax.open("POST","contact.php", true);
  
          ajax.onreadystatechange = function () 
          {
            if(ajax.readyState === 4 && ajax.status === 200) 
            {
              let divAlert = document.createElement("div");
              divAlert.id = "divAlert";
              divAlert.setAttribute("role", "alert");
              document.getElementById("formGroup").insertBefore(divAlert, document.getElementById("buttonContact"));

              let buttonAlert = document.createElement("i");
              divAlert.appendChild(buttonAlert);

              let divAlertBis = document.createElement("div");
              divAlertBis.className = "mx-2";
              divAlert.appendChild(divAlertBis);

              let response = ajax.responseText.split(";");

              document.getElementById("floatingCaptcha").value = "";
              document.getElementById("floatingCaptcha").setAttribute("placeholder", response[1]);
              
              if (response[0] == "OK")
              {
                formContact.reset();

                divAlert.className = "alert alert-success d-flex";
                buttonAlert.className = "fas fa-check-circle fa-lg";
                divAlertBis.innerText = "Votre message a été envoyé avec succès !"; 

                setTimeout(function() {divAlert.remove();}, 8000);
              }
              else
              {
                divAlert.className = "alert alert-danger d-flex";
                buttonAlert.className = "fas fa-exclamation-triangle fa-lg";
                divAlertBis.innerText = "Le champ "+response[0]+" est invalide !"; 
              }           
            }
          };
  
          ajax.send(data);
        }
      }, false)
  })
}