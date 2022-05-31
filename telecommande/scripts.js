let remote = {};

remote = 
{

    start: false,

    init: () =>
    {
        console.log("remote.init()");

        let header = document.createElement("header");
        let pHeader = document.createElement("p");
        pHeader.innerText = "LIGHT REMOTE";

        let main = document.createElement("main");
        let divLed = document.createElement("div");
        divLed.id = "led";

        let footer = document.createElement("footer");
        let pFooter = document.createElement("p");
        pFooter.innerText = "by Alexis";

        document.body.appendChild(header);
        header.appendChild(pHeader);

        document.body.appendChild(main);
        main.appendChild(divLed);

        document.body.appendChild(footer);
        footer.appendChild(pFooter);

        for (let i = 1; i <= 4; i++) {
            let divGroup = document.createElement("div");
            divGroup.id = "group"+i;
            divGroup.className = "group";
            main.appendChild(divGroup);
        }

        for (let i = 1; i <= 3; i++) {
            let divG1 = document.createElement("div");
            divG1.id = "S"+i;
            divG1.className = "S";
            divG1.innerText = i;
            divG1.onclick = function(){remote.pressBouton("S"+i)};
            document.getElementById("group1").appendChild(divG1);
        }

        for (let i = 4; i <= 6; i++) {
            let divG2 = document.createElement("div");
            divG2.id = "S"+i;
            divG2.className = "S";
            divG2.innerText = i;
            divG2.onclick = function(){remote.pressBouton("S"+i)};
            document.getElementById("group2").appendChild(divG2);
        }

        for (let i = 7; i <= 9; i++) {
            let divG3 = document.createElement("div");
            divG3.id = "S"+i;
            divG3.className = "S";
            divG3.innerText = i;
            divG3.onclick = function(){remote.pressBouton("S"+i)};
            document.getElementById("group3").appendChild(divG3);
        }

        let divOff = document.createElement("div");
        divOff.id = "S10";
        divOff.className = "S";
        divOff.innerText = "OFF";
        divOff.onclick = function(){remote.pressBouton("S10")};
        document.getElementById("group4").appendChild(divOff);

        let divOn = document.createElement("div");
        divOn.id = "S11";
        divOn.className = "S";
        divOn.innerText = "ON";
        divOn.onclick = function(){remote.pressBouton("S11")};
        document.getElementById("group4").appendChild(divOn);
    },

    pressBouton: (id) =>
    {
        console.log("remote.pressBouton()");

        if (id == "S11")
        {
            console.log("S11 " + id);
            remote.start = true;
            document.getElementById('led').style.backgroundColor = '#FF0000';
            let audio11 = new Audio('audio/dtmf_0.wav');
            audio11.play();
        }
        else if (id == "S10")
        {
            console.log("S10 " + id);
            remote.start = false;
            document.getElementById('led').style.backgroundColor = '#000';
            let audio10 = new Audio('audio/dtmf_0.wav');
            audio10.play();
        }

        if (remote.start == true)
        {
            let result = null;
            let ajax = new XMLHttpRequest();
            let s = 1;
            console.log(remote.start);
            while (s <= 11) 
            {
                if ("S"+s == id)
                {
                    ajax.open("GET","server/set.php?S"+s+"=1",true); 
                }           
                s++;
            }
            
            ajax.onreadystatechange = ()=>
            {
                if(ajax.readyState === 4 && ajax.status === 200)
                {
                    result = ajax.responseText;
                }
            }

            ajax.send();

            if (id != "S10")
            {
                console.log(id);
                setTimeout("document.getElementById('led').style.backgroundColor = '#000'", 300);
                setTimeout("document.getElementById('led').style.backgroundColor = '#FF0000'", 600);
                setTimeout("document.getElementById('led').style.backgroundColor = '#000'", 900);
                setTimeout("document.getElementById('led').style.backgroundColor = '#FF0000'", 1200);
            }

            switch (id) {
                case "S1":
                    let audio1 = new Audio('audio/dtmf_1.wav');
                    audio1.play();
                    break;
                case "S2": 
                    let audio2 = new Audio('audio/dtmf_2.wav');
                    audio2.play();             
                    break;
                case "S3":
                    let audio3 = new Audio('audio/dtmf_3.wav');
                    audio3.play(); 
                    break;
                case "S4":
                    let audio4 = new Audio('audio/dtmf_4.wav');
                    audio4.play(); 
                    break;
                case "S5":
                    let audio5 = new Audio('audio/dtmf_5.wav');
                    audio5.play(); 
                    break;
                case "S6":
                    let audio6 = new Audio('audio/dtmf_6.wav');
                    audio6.play(); 
                    break;
                case "S7":
                    let audio7 = new Audio('audio/dtmf_7.wav');
                    audio7.play(); 
                    break;
                case "S8":
                    let audio8 = new Audio('audio/dtmf_8.wav');
                    audio8.play(); 
                    break;
                case "S9":
                    let audio9 = new Audio('audio/dtmf_9.wav');
                    audio9.play(); 
                    break;
                default:
                    break;
            }
            
        }      
    }
}