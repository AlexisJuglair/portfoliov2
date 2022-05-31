<script>
    let ajax = new XMLHttpRequest();
    ajax.open("GET", "serveur/index.php?cmd=1",true);
    ajax.onreadystatechange = () => 
    {
        if(ajax.readyState === 4 && ajax.status === 200) 
        {
            document.write(ajax.responseText);
        }
    };
    ajax.send();
    document.write(ajax.responseText);
</script>