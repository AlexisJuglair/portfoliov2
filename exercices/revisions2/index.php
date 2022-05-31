<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Date</title>
    <style>
        #divHeure{text-shadow:0 4px 0 #00ecff, 0 -4px 0 #ff4045;}
    </style>
</head>
<body>
    <div id="divHeure"></div>
    <script>
        function f() 
        {
            let divHeure = document.getElementById("divHeure");
            let xhr = new XMLHttpRequest();
            xhr.open("GET", "serveur/index.php?cmd=1", true);
            xhr.onreadystatechange = () =>
            {
                if(xhr.readyState === 4 && xhr.status === 200) 
                {
                    divHeure.innerHTML = "";
                    divHeure.innerHTML = xhr.responseText;
                    setTimeout(function(){ divHeure.style.color = '#ff7575' }, 200);
                    setTimeout(function(){ divHeure.style.color = '#ffff75' }, 400);
                    setTimeout(function(){ divHeure.style.color = '#a0ff75' }, 600);
                    setTimeout(function(){ divHeure.style.color = '#5075ff' }, 800);
                    setTimeout(function(){ divHeure.style.color = '#a075ff' }, 1000);
                }
            }
            xhr.send();
            setTimeout(f,1000);
        }

        f();  
    </script>
</body>
</html>