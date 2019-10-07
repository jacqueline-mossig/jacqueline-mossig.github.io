
/*
//# sourceMappingURL=Finale Aufgabe.js.map

//Variablen 
let Spielfeld;
let KartenSpielfeld : number;
KartenSpielfeld = 9;

//Arrays
let KartenGegnerArray = [];
let KartenAblageArray = [];
let KartenDeckArray = [];
let KartenSpielerArray = [];
let TemporaryArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32];


window.onload = function () {
    KartenDeckErstellen();
    VerteileZufälligeKarten();
}

function KartenDeckErstellen() {
    let NeuerKartenWert;
    let NeueKartenFarbe;
    for (let i = 1; i <= 8; i++) {
        for (let k = 0; k < 4; k++) {
            NeuerKartenWert = i;
            switch (k) {
                case 0:
                    NeueKartenFarbe = "red";
                    break;
                case 1:
                    NeueKartenFarbe = "blue";
                    break;
                case 2:
                    NeueKartenFarbe = "yellow";
                    break;
                case 3:
                    NeueKartenFarbe = "green";
                    break;
            }
            let NeueKarte = {
                KartenWert : NeuerKartenWert, 
                KartenFarbe : NeueKartenFarbe 
            };
            KartenDeckArray.push(NeueKarte);   
        }
    }
    console.log("Kartendeck wurde erstellt. Mach dich bereit!");
}


function KartenDeckMischen() : number{
    let i : number = 0;
do{ 
    var temp = TemporaryArray[0];
    TemporaryArray[0] = TemporaryArray[1];
    TemporaryArray[1] = temp;
    i++;
  } 
  while (i=31)
  console.log("Vertauscht")
} 



function KartenVerteilen(KartenDeckArray, zählen){
for(let i = zählen; i > 0; i--)

{
    KartenDeckArray.push(NeueKarte.pop());
    if(NeueKarte.length == 0) {
        NeueKarte = mix(KartenDeckArray);
        KartenDeckArray = [];
    }  
}
}

//

function VerteileZufälligeKarten() : void 
{   
    for (let y = 0; y < KartenSpielfeld; y++){
        
    let x = Math.floor((Math.random() * KartenDeckArray.length));
    let v = Math.floor((Math.random() * KartenDeckArray.length));
        

    KartenSpielerArray.push(KartenDeckArray[x]);
    KartenGegnerArray.push(KartenDeckArray[v]);
    
    ErstelleSpielerKarten();
    /*
    writeHtml(y);
    writeHtml2(y)

    KartenDeckArray.splice(x, 1);
    }
    console.log("Karten wurden verteilt.");
}

function ErstelleSpielerKarten() {
    let SpielerKarten = document.getElementById("SpielerKarten");
    for(let i = 0;i < KartenSpielerArray.length; i++) {
        let Karte = document.createElement("div");
        Karte.setAttribute("class", "Karte");
        SpielerKarten.appendChild(Karte);
    }
}


KartenDeckArray = shuffle(KartenDeckArray); 

function shuffle(array : Karten[]){
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex != 0){
        randomIndex = Math.floor(Math.random()*currentIndex);
        currentIndex -= 1;

        temporaryValue = array [currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
*/





interface Karte {
    KartenFarbe: string;
    KartenWert: number;
}

let Kartenstapel: Karte[];
let Ablagestapel: Karte[];
let Gegnerdeck: Karte [];
let Spielerdeck: Karte [];

window.onload = function (){
    document.getElementById("Kartenstapel").addEventListener("click",KarteNehmen,false);
     GamePlay();   
}

function GamePlay (){
    Kartenstapel = [];
    Ablagestapel = [];
    Gegnerdeck = [];
    Spielerdeck = [];
    KartenGenerierung();
    Kartenstapel = shuffle(Kartenstapel); //Karten werden gemischt

    //Spielerkarten werden verteilt:
    for (let i = 0; i < 5; i++){
        Spielerdeck.push(Kartenstapel[i]);
        Gegnerdeck.push(Kartenstapel[i+5]);
    }

    Ablagestapel.push(Kartenstapel[10]);
    Kartenstapel.splice(0,11);

    console.log(Spielerdeck);
    console.log (Gegnerdeck);
    console.log (Kartenstapel);  
    
    updateHTML("Spielerdeck");
    updateHTML("Gegnerdeck");
    updateHTML("Ablagestapel");
    updateHTML("Kartenstapel");
}

function KarteHTML (karte:Karte, Zielort: string, index : number){
     let holdingDiv: HTMLElement = document.createElement ("div");
     holdingDiv.setAttribute("class", "Karte"  + " " + karte.KartenFarbe);
     document.getElementById(Zielort).appendChild(holdingDiv);

     let Zahl: HTMLElement = document.createElement ("p");
     Zahl.setAttribute ("class", "Kartenzahl");
     Zahl.innerHTML = "" + karte.KartenWert;
     holdingDiv.appendChild(Zahl);

     if (Zielort == "Spielerdeck"){
         holdingDiv.addEventListener("click", function() {KarteLegen(karte, index)}, false);
     }
}

function KarteVerdeckt(karte: Karte, Zielort: string, index: number) {
    let holdingDiv: HTMLElement = document.createElement("div");
    holdingDiv.setAttribute("class", "Karte" + " " + "Verdeckt");
    document.getElementById(Zielort).appendChild(holdingDiv);
}

function KarteLegen(karte :Karte, index: number){
    if(karte.KartenFarbe == Ablagestapel[Ablagestapel.length-1].KartenFarbe || karte.KartenWert ==Ablagestapel[Ablagestapel.length-1].KartenWert){
        Ablagestapel.push(karte);
        Spielerdeck.splice(index, 1);
        updateHTML("Spielerdeck");
        updateHTML("Ablagestapel");
        if(Spielerdeck.length == 0){
            window.alert("Du hast gewonnen!");
            GamePlay();
        }
        else{
            Gegnerzug();
        }
    }
}

function KarteNehmen(){
    if(checkKarten(Spielerdeck)==false){
        Spielerdeck.push(Kartenstapel[Kartenstapel.length - 1]);
        Kartenstapel.splice(Kartenstapel.length -1, 1);
        updateHTML("Spielerdeck");
        updateHTML("Kartenstapel");
    }
    if(checkKarten(Spielerdeck)==false){
        Gegnerzug();
    }
}

function Gegnerzug(){
    //Wenn Gegner nicht legen kann, nimmt er Karte vom Kartenstapel
        let i = 0;
        for (i; i<Gegnerdeck.length;i++){
            if(Gegnerdeck[i].KartenFarbe == Ablagestapel[Ablagestapel.length-1].KartenFarbe || Gegnerdeck[i].KartenWert == Ablagestapel[Ablagestapel.length-1].KartenWert){
                Ablagestapel.push(Gegnerdeck[i]);
                Gegnerdeck.splice(i, 1);
                updateHTML("Ablagestapel");
                updateHTML("Gegnerdeck");
                break;
            }
        }
        if(Gegnerdeck.length == 0){
            window.alert("Du hast leider verloren!");
            GamePlay();
        }
        else if (i >= Gegnerdeck.length){

            Gegnerdeck.push(Kartenstapel[Kartenstapel.length-1]);
            Kartenstapel.splice(Kartenstapel.length-1,1);
            updateHTML("Gegnerdeck");
            updateHTML("Kartenstapel");
            if (Gegnerdeck[Gegnerdeck.length-1].KartenFarbe==Ablagestapel[Ablagestapel.length-1].KartenFarbe || Gegnerdeck[Gegnerdeck.length-1].KartenWert == Ablagestapel[Ablagestapel.length-1].KartenWert){
                Ablagestapel.push(Gegnerdeck[Gegnerdeck.length-1]);
                Gegnerdeck.splice(Gegnerdeck.length-1, 1);
                updateHTML("Ablagestapel");
                updateHTML("Gegnerdeck"); 
            }
        }
    

}

function checkKarten(array :Karte[]) :boolean {
    let passendeKarte : boolean = false;
    for (let i=0; i<array.length;i++){
        if(array[i].KartenFarbe == Ablagestapel[Ablagestapel.length-1].KartenFarbe || array[i].KartenWert == Ablagestapel[Ablagestapel.length-1].KartenWert){
            passendeKarte = true;
            break;
        }
    }
    return passendeKarte;
}

function updateHTML(Zielort :string){
    ClearHTML(Zielort);
    if (Zielort =="Spielerdeck"){
        for(let i = 0; i < Spielerdeck.length; i++) {
            KarteHTML(Spielerdeck[i],"Spielerdeck",i);
        }
    }
    if (Zielort == "Gegnerdeck"){
        for(let i = 0; i < Gegnerdeck.length; i++){
            KarteVerdeckt(Gegnerdeck [i], "Gegnerdeck",i);
        }
    }
    if (Zielort == "Ablagestapel"){
        KarteHTML(Ablagestapel[Ablagestapel.length - 1], "Ablagestapel",Ablagestapel.length-1);
    }
    if (Zielort == "Kartenstapel"){
        KarteVerdeckt(Kartenstapel[Kartenstapel.length-1], "Kartenstapel",Kartenstapel.length-1);
    }
}

function ClearHTML(Zielort: string){
    let Element: HTMLElement = document.getElementById(Zielort);
    while (Element.firstChild){
        Element.removeChild(Element.firstChild);
    }
}

function KartenGenerierung (){
    let Farbe: string;
    for(let i = 1; i <= 8; i++){
        for(let j = 1; j <= 4; j++){
          
           if (j == 1){
               Farbe = "Blau"  
           }

           else if (j == 2){
               Farbe = "Rot"
           }

           else if (j == 3){
               Farbe = "Gelb"
           }

           else if ( j == 4){
               Farbe = "Gruen"
           }
                
            let NewKarte: Karte = {
                KartenFarbe: Farbe,
                KartenWert: i
            }
            Kartenstapel.push(NewKarte);
        }
    }
    console.log(Kartenstapel);

}

function shuffle(array : Karte[]){
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex != 0){
        randomIndex = Math.floor(Math.random()*currentIndex);
        currentIndex -= 1;

        temporaryValue = array [currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

















/*
//# sourceMappingURL=Finale Aufgabe.js.map

interface Karte {
    KartenFarbe: string;
    KartenWert: number;
}

let KartenGegnerArray: Karte[];
let KartenAblageArray: Karte[];
let KartenDeckArray: Karte[];
let KartenSpielerArray: Karte[];

window.onload = function (){
    document.getElementById("KartenDeckArray").addEventListener("click",KarteNehmen,false);
     StarteSpiel();   
}

function StarteSpiel (){
    KartenGegnerArray = [];
    KartenAblageArray = [];
    KartenDeckArray = [];
    KartenSpielerArray = [];
    KartenGenerierung();
    KartenDeckArray = Mischen(KartenDeckArray); //Karten werden gemischt

    //Spielerkarten werden verteilt:
    for (let i = 0; i < 5; i++){
        KartenSpielerArray.push(KartenDeckArray[i]);
        KartenGegnerArray.push(KartenDeckArray[i+5]);
    }

    KartenAblageArray.push(KartenDeckArray[10]);
    KartenDeckArray.splice(0,11);

    console.log(KartenSpielerArray);
    console.log (KartenGegnerArray);
    console.log (KartenDeckArray);  
    
    updateHTML("Spielerdeck");
    updateHTML("Gegnerdeck");
    updateHTML("Ablagestapel");
    updateHTML("Kartenstapel");
}


function KartenGenerierung (){
    let Farbe: string;
    for(let i = 1; i <= 8; i++){
        for(let j = 1; j <= 4; j++){
          
           if (j == 1){
               Farbe = "Blau"  
           }

           else if (j == 2){
               Farbe = "Rot"
           }

           else if (j == 3){
               Farbe = "Gelb"
           }

           else if ( j == 4){
               Farbe = "Gruen"
           }
                
            let NewKarte: Karte = {
                KartenFarbe: Farbe,
                KartenWert: i
            }
            KartenDeckArray.push(NewKarte);
        }
    }
    console.log(KartenDeckArray);

}

function Mischen(array : Karte[]){
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex != 0){
        randomIndex = Math.floor(Math.random()*currentIndex);
        currentIndex -= 1;

        temporaryValue = array [currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function KarteHTML (karte:Karte, Zielort: string, index : number){
    let holdingDiv: HTMLElement = document.createElement ("div");
    holdingDiv.setAttribute("class", "Karte"  + " " + karte.KartenFarbe);
    document.getElementById(Zielort).appendChild(holdingDiv);

    let Zahl: HTMLElement = document.createElement ("p");
    Zahl.setAttribute ("class", "Kartenzahl");
    Zahl.innerHTML = "" + karte.KartenWert;
    holdingDiv.appendChild(Zahl);

    if (Zielort == "KartenSpielerArray"){
        holdingDiv.addEventListener("click", function() {KarteLegen(karte, index)}, false);
    }
}

function updateHTML(Zielort :string){
    ClearHTML(Zielort);
    if (Zielort =="KartenSpielerArray"){
         for(let i = 0; i < KartenSpielerArray.length; i++) {             
            KarteHTML(KartenSpielerArray[i],"KartenSpielerArray",i);
        }
    }
    if (Zielort == "KartenGegnerArray"){
        for(let i = 0; i < KartenGegnerArray.length; i++){
            KarteVerdeckt(KartenGegnerArray [i], "KartenGegnerArray",i);
        }
    }
    if (Zielort == "KartenAblageArray"){
        KarteHTML(KartenAblageArray[KartenAblageArray.length - 1], "KartenAblageArray",KartenAblageArray.length-1);
    }
    if (Zielort == "KartenDeckArray"){
        KarteVerdeckt(KartenDeckArray[KartenDeckArray.length-1], "KartenDeckArray",KartenDeckArray.length-1);
    }
}

function KarteLegen(karte :Karte, index: number){
    if(karte.KartenFarbe == KartenAblageArray[KartenAblageArray.length-1].KartenFarbe || karte.KartenWert == KartenAblageArray[KartenAblageArray.length-1].KartenWert){
        KartenAblageArray.push(karte);
        KartenSpielerArray.splice(index, 1);
        updateHTML("Spielerdeck");
        updateHTML("Ablagestapel");
        if(KartenSpielerArray.length == 0){
            window.alert("Du hast gewonnen!");
            StarteSpiel();
        }
        else{
            Gegnerzug();
        }
    }
}

function ClearHTML(Zielort: string){
    let Element: HTMLElement = document.getElementById(Zielort);
    while (Element.firstChild){
        Element.removeChild(Element.firstChild);
    }
}

function KarteVerdeckt(karte: Karte, Zielort: string, index: number) {
    let holdingDiv: HTMLElement = document.createElement("div");
    holdingDiv.setAttribute("class", "Karte" + " " + "Verdeckt");
    document.getElementById(Zielort).appendChild(holdingDiv);
}

function Gegnerzug(){
    //Wenn Gegner nicht legen kann, nimmt er Karte vom Kartenstapel
        let i = 0;
        for (i; i<KartenGegnerArray.length;i++){
            if(KartenGegnerArray[i].KartenFarbe == KartenAblageArray[KartenAblageArray.length-1].KartenFarbe || KartenGegnerArray[i].KartenWert == KartenAblageArray[KartenAblageArray.length-1].KartenWert){
                KartenAblageArray.push(KartenGegnerArray[i]);
                KartenGegnerArray.splice(i, 1);
                updateHTML("KartenAblageArray");
                updateHTML("KartenGegnerArray");
                break;
            }
        }
        if(KartenGegnerArray.length == 0){
            window.alert("Du hast leider verloren!");
            StarteSpiel();
        }
        else if (i >= KartenGegnerArray.length){

            KartenGegnerArray.push(KartenDeckArray[KartenDeckArray.length-1]);
            KartenDeckArray.splice(KartenDeckArray.length-1,1);
            updateHTML("KartenGegnerArray");
            updateHTML("KartenDeckArray");
            if (KartenGegnerArray[KartenGegnerArray.length-1].KartenFarbe==KartenAblageArray[KartenAblageArray.length-1].KartenFarbe || KartenGegnerArray[KartenGegnerArray.length-1].KartenWert == KartenAblageArray[KartenAblageArray.length-1].KartenWert){
                KartenAblageArray.push(KartenGegnerArray[KartenGegnerArray.length-1]);
                KartenGegnerArray.splice(KartenGegnerArray.length-1, 1);
                updateHTML("KartenAblageArray");
                updateHTML("KartenGegnerArray"); 
            }
        }
}

function KarteNehmen(){
    if(checkKarten(KartenSpielerArray)==false){
        KartenSpielerArray.push(KartenDeckArray[KartenDeckArray.length - 1]);
        KartenDeckArray.splice(KartenDeckArray.length -1, 1);
        updateHTML("KartenSpielerArray");
        updateHTML("KartenDeckArray");
    }
    if(checkKarten(KartenSpielerArray)==false){
        Gegnerzug();
    }
}

function checkKarten(array :Karte[]) :boolean {
    let passendeKarte : boolean = false;
    for (let i=0; i<array.length;i++){
        if(array[i].KartenFarbe == KartenAblageArray[KartenAblageArray.length-1].KartenFarbe || array[i].KartenWert == KartenAblageArray[KartenAblageArray.length-1].KartenWert){
            passendeKarte = true;
            break;
        }
    }
    return passendeKarte;
}
*/