// Calcule la taille d'une chaîne
let strlen = (str) =>
{
    let i = 0;

    if (typeof str === "string")
    {
        while(str[i] != undefined)
        {
            i++;
        }
        return i; 
    }     
    else 
    {
        return "Ce n'est pas une string !";
    }   
}

//Retourne un segment de chaîne
let substr = (str, start, end) =>
{
    let sub = "";
    for (let i=start; i<=end; i++) {
        sub += str[i];      
    }

    return sub;
}