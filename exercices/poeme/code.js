let c = 0;

function init()
{
    let ajax = new XMLHttpRequest();
    ajax.open("GET", "serveur.php?c="+c, true);
    
    ajax.onreadystatechange = function () 
    {
        if(ajax.readyState === 4 && ajax.status === 200) 
        {          
            if (ajax.responseText != "")
            {
                if (ajax.responseText != "\n")
                {
                    document.write(ajax.responseText);
                }
                else
                {
                    document.write("<br>");             
                }
                
                c++;
                init();
            }        
        }
    }

    ajax.send();         
}