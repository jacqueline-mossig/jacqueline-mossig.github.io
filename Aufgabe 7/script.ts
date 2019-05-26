//Mindestanforderungen

//Konsolenausgabe nach Start
console.log("Das ist ein Test.");

window.onload = function () {
    document.getElementById("Button").addEventListener("click", click);
    document.getElementById("ButtonKlasse").addEventListener("mouseover", changeclass);
    Rechnung();
    createp();
    createbutton();
    creatediv();
    createbuttonmitEvent();
    document.getElementById("ButtonmitEvent").addEventListener("click", click2);
    Test();
    Test2();
}

//Event-Listener mit "click"
function click() {
    document.getElementById("Button").innerHTML = "Wieso hast du das getan?";
    console.log("Es funktioniert!");
}

//Klasse eines HTML-Elements verändern
function changeclass() {
    document.getElementById("ButtonKlasse").className = "Neuer Klassenname";
    console.log("Es funktioniert!");
}

//Variable vom Typ "string" und eine variable vom Typ "number" mit einer Funktion und Rechnung zwischen strings und numbers
function Rechnung() {
    let Wort1 : string = "Hallö";
    let Wort2 : string = "chen!";
    let Nummer1 : number = 50;
    let Nummer2: number = 33;
    console.log(Wort1 + Wort2);
    console.log(Wort1 + Nummer1);
    console.log(Nummer1 + Nummer2);
    //Variable einen neuen Wert zuweisen
    Nummer1 = 55
}

//Über Typescript mehrere neue HTML-Elemente erstellen
function createp() {
    var newParagraph = document.createElement("p");
    var newContent = document.createTextNode("Dies ist ein in TypeScript erstellter Paragraph.");
    newParagraph.appendChild(newContent);
    document.getElementById("Neuerstellter Paragraph").innerHTML = "Dies ist ein in TypeScript erstellter Paragraph.";
    console.log("Es funktioniert!");
}

function createbutton() {
    var newButton = document.createElement("Button");
    var newContent = document.createTextNode("Dies ist ein in TypeScript erstellter Button ohne Funktion.");
    newButton.appendChild(newContent);
    document.getElementById("Neuerstellter Button").innerHTML = "Dies ist ein in TypeScript erstellter Button ohne Funktion";
    console.log("Es funktioniert!");
}

function creatediv() {
    var newdiv = document.createElement("div");
    var newContent = document.createTextNode("Dies ist ein in TypeScript erstelltes Div.");
    newdiv.appendChild(newContent);
    document.getElementById("Neuerstelltes Div").innerHTML = "Dies ist ein in TypeScript erstelltes Div.";
    console.log("Es funktioniert!");
}

//Optionale Ziele
//Eine Funktion, welche ein HTML-Element und ebenfalls einen Event-Listener darauf erzeugt
function createbuttonmitEvent() {
    var newButton = document.createElement("ButtonmitEvent");
    var newContent = document.createTextNode("Dies ist ein in TypeScript erstellter Button");
    newButton.appendChild(newContent);
    document.getElementById("ButtonmitEvent").innerHTML = "Dies ist ein in TypeScript erstellter Button";
}

function click2 () {
    var newButton = document.createElement("button");
    var newContent = document.createTextNode("Dies ist ein Button ausgelöst durch den EventListener");
    newButton.appendChild(newContent);
    document.getElementById("ButtonmitEvent").innerHTML = "Dies ist ein Button ausgelöst durch den EventListener";
    console.log("Es funktioniert!");
}

//return benutzen 
function Test(a=4, b=8) : number {
    console.log(a,b);
    let c : number = a + b;
    return c;
}

//Variable vom Typ Boolean
function Test2() {
    console.log(10 > 9);
    Boolean (10 > 9);
}
