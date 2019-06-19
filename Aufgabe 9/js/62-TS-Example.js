// BEISPIEL UND AUFGABE:
// Dieses Skript soll als Beispiel dazu dienen, wie Interfaces und Arrays genutzt werden können.
// Hier wird ein ungefährer Aufbau eines simplen Klick-Spiels gezeigt. Der Nutzer kann dabei durch Button ein neues Monster erstellen.
// Zu beginn werden hier zuerst Interfaces, danach Variablen deklariert.
// Weiter unten kommen dann die Funktionen.
// ------- Variablen -------- //
// INSGESAMT EINGEBAUTE FEHLER bei den Variablen: I (1 / einer)
let monsterHolder = "monsterHoldingCell"; // ID für das Haupt-Element, in welchem die Monster sich befinden werden. Wird vielleicht mehrfach in dem Skript gebraucht, deshalb einmalig definitiert.
let playerName = "Spielername"; // Ein paar globale Variablen, welche den Spieler darstellen.
let playerXP = 0;
//////1. Fehler: let playerXP; ---> Man muss der Variable ein number zuweisen + Die Zählweise beginnt ab 0.//////                   // Stellt die gesammelte Erfahrung des Spielers dar.
//////Aufgabe: Erhöhung der Erfahrungspunkte von 500XP auf 5.000XP./////
let playerXPperLevel = 5000; // Da es nur einen Spieler gibt, ergibt sich noch nicht viel Sinn darin, für den Spieler ein interface (im Sinne der Programmierung) zu erstellen.
// Mehrere Arrays, welche jeweils Bauteile für Namen oder Eigenschaften der Monster beinhalten.
let prefix = ["Wald-", "Seuchen-", "Uralte(s) ", "Gift-", "Brennende(s) ", "Kniescheibenzertrümmernde(s) ", "Meer ", "Zombie ", "Tode(s) ", "Stinkende(s) ", "Lauernde(s) "]; // length = 6, da 6 Einträge. Von 0-5.
let monsterName = ["Ratte", "Nagetier", "Ungeziefer", "Biber", "Schlange", "Robotor", "Alien", "Sensenmann"]; // length = 3, da 3 Einträge. Von 0-2.
let suffix = [" des Verderbens", " aus der Hölle", " der Lethalität", " mit Rheuma", " der Redundanz", " der Zerberstung", " der Liebe", " der Zersteutheit", " der Verdammnis", " des guten Geschmacks"]; // length = 6, da hier 6 Einträge sind. Von 0-5.
let monsterModifers = ["Ist nervig", "Linkshänder", "Bier-Connoisseur", "Verfehlt häufig", "Prokrastiniert", "Müde", "Verwirrt", "Wasserscheu", "Bipolar", "Hat Schnupfen", "Verläuft sich oft"]; // Eine Reihe von zufälligen "Verstärkern" für das Monster.
//////Aufgabe: Erweiterung des Monster-Interfaces um zwei weitere Felder.//////   
let monsterElement = ["Feuer", "Wasser", "Luft", "Erde"];
let monsterStimmung = ["traurig", "aggressiv", "lustig", "depressiv", "melanchonisch", "zufrieden", "niedergeschlagen", "aufgewühlt"];
//////Aufgabe: Erstellen eines neuen Arrays.//////
let monsterBilder = ["Katze1.jpg", "Katze2.jpg", "Hase.jpg", "pinguin.png", "loewe.png", "elefant.png"];
// -- Initialisierung für viele/variable Anzahl an Monster --
let monsterArray = []; // Das Haupt-Array wurde erstellt und initialisiert!
console.log(monsterArray); // Gebe das Monster-Array einmal zu beginn aus. Es sollte leer sein.
//////Aufgabe: Neues Array mit neuem Wert.//////
let NeuerWert = [];
// ----------- Funktionen ----------- //
// INSGESAMT EINGEBAUTE FEHLER bei den Funktionen: IIIII (5 / fünf)
// Generelle onload-funktion um Event-Listener zum Dokument hinzuzufügen
window.onload = function () {
    document.getElementById("monsterSpawner").addEventListener("click", generateMonster, false);
    updatePlayerLevel(); // Zu Anfang wird durch eine Funktion ein HTML-Element mit Inhalt befüllt.
    console.log(document.getElementById("monsterSpawner"));
    //////2.Fehler : console.log(document.getElementById("monsterSpawner").innerHTML); ---> Man muss es in onload setzten und .innerHTML weggemacht.//////
    //////Aufgabe: Neues Array mit neuem Wert.//////
    NeuesArray_2(20);
    NeuesArray_2(35);
    NeuesArray_2(88);
    NeuesArray_2(167);
    NeuesArray_2(55);
};
//////Aufgabe: Neues Array mit neuem Wert.//////
function NeuesArray_2(zahl) {
    NeuerWert.push(zahl);
    console.log(NeuerWert);
}
// Die Hauptfunktion, um ein Monster zu erstellen. Wird von einem Button ausgerufen.
// Generiert ein neues Monster. Dieses wird zu dem Monster-Array hinzugefügt.
// Ruft eine Funktion auf, welche dann das entsprechende HTML erzeugt.
function generateMonster() {
    let randomNumber = getRNGNumber(3) + 1;
    console.log(randomNumber);
    for (let i = 0; i < randomNumber; i++) {
        let newMonsterName = generateMonsterName(); // Eigens-gebaute Funktion, welche einen string zurück gibt.
        let newMonsterHP = generateMonsterHitPoints(); // Eigens-gebaute Funktion, welche eine Zahl zurück gibt.
        let newMonsterXP = generateMonsterXP(); // Eigens-gebaute Funktion, welche eine Zahl zurück gibt.
        let newMonsterModifier = generateMonsterModifer(); // Eigens-gebaute Funktion, welche ein string-Array zurück gibt. 
        //////Aufgabe: Erweiterung des Monster-Interfaces um zwei weitere Felder.//////   
        let newMonsterElement = generateMonsterElement();
        let newMonsterStimmung = generateMonsterStimmung();
        let newMonster = {
            monsterName: newMonsterName,
            monsterHealthPoints: newMonsterHP,
            monsterExperience: newMonsterXP,
            monsterModifier: newMonsterModifier,
            //////3.Fehler: monsterMoney : 0, ---> Das letzte der Reihe darf kein Komma haben.//////
            //////4.Fehler: monsterMoney : 0, ---> Die Variable monsterMoney gibt es nicht und kann deshalb nicht ausgeführt werden.//////
            //////Aufgabe: Erweiterung des Monster-Interfaces um zwei weitere Felder.//////   
            monsterElement: newMonsterElement,
            monsterStimmung: newMonsterStimmung
        };
        monsterArray.push(newMonster);
    }
    console.log(monsterArray[monsterArray.length - 1].monsterExperience); // Man kann nur auf Array-Teile zugreifen, welche definiert sind. -1 ist nicht definitiert (und wird es auch nie sein).
    updateHTML();
    //////5.Fehler : console.log(monsterArray[-1].monsterExperience); ---> Man muss die Länge des Arrays ausgeben und 1 abziehen, weil man von 0 aus zählt.//////
}
// Generiert HTML-Elemente, welche dann einem Element untergeordnet werden. Erzeugt ebenfalls einen Event-Listener auf dem Button.
function monsterGenerateHTML(count) {
    let holdingDiv = document.createElement("div"); // Erstelle ein neues HTML-Element vom typ <div>. Es ist jedoch noch nicht zu sehen!
    holdingDiv.setAttribute("id", "monster" + count); // Die ID jedes neu-erstellten Monsters entspricht der aktuellen Array-Länge.
    holdingDiv.setAttribute("class", "monster"); // Klasse für Visuals.
    document.getElementById(monsterHolder).appendChild(holdingDiv); // Das HTML-Element muss erst noch zu einem Objekt hinzugefügt werden, in diesem Fall mit der id "monsterHoldingCell"
    let monsterName = document.createElement("p"); // Generiere einen <p>
    monsterName.innerHTML = monsterArray[count - 1].monsterName; // Inhalt des <p>: Monster-Name des letzten Monsters im Array.
    holdingDiv.appendChild(monsterName); // Füge das <p> zum HTML-Dokument hinzu, indem es dem holding-Div angefügt wird.
    let monsterMod = document.createElement("p"); // Generiere einen <p>
    monsterMod.innerHTML = monsterArray[count - 1].monsterModifier[0] + ", " + monsterArray[count - 1].monsterModifier[1]; // Inhalt des <p>: Monster-Modifizierer null und eins
    holdingDiv.appendChild(monsterMod); // Füge das <p> zum HTML-Dokument hinzu, indem es dem holding-Div angefügt wird.
    let monsterHP = document.createElement("p");
    monsterHP.innerHTML = "HP: " + monsterArray[count - 1].monsterHealthPoints;
    holdingDiv.appendChild(monsterHP);
    let monsterXP = document.createElement("p");
    monsterXP.innerHTML = "XP: " + monsterArray[count - 1].monsterExperience;
    holdingDiv.appendChild(monsterXP);
    ///////Aufgabe: Monster-Generierung///////
    let monsterImg = document.createElement("img"); // Erstelle ein <img>-Element
    monsterImg.setAttribute("src", "imgs/" + monsterBilder[getRNGNumber(6)]); // Der Pfad für das Bild muss über setAttribute festgelegt werden. Der Bildpfad kann natürlich auch anders aussehen.
    monsterImg.setAttribute("alt", "Schreckliches Monster"); // Das alt für das Bild wird hier festgelegt.
    holdingDiv.appendChild(monsterImg); // Füge das Bild zu dem holding-div hinzu (<div>, welche ein paar Zeilen zuvor erstellt worden ist)
    let monsterBtn = document.createElement("BUTTON"); // Erstelle ein <button>-Element
    monsterBtn.innerHTML = "Monster bekämpfen!"; // Verändere den Inhalt des HTML-Elementes. Der genaue Text ist dabei euch überlassen.
    holdingDiv.appendChild(monsterBtn); // Füge den Button zu dem holding-div hinzu.
    monsterBtn.addEventListener(// Füge dem Monster eine Funktion hinzu.
    'click', function () {
        fightMonster(count); // Wenn das Monster erstellt wird erhält die Funktion einen Parameter, welcher der aktuellen Anzahl entspricht.
    }, false); // Ignoriert das false.
    //////Aufgabe: Erweiterung des Monster-Interfaces um zwei weitere Felder.//////   
    let monsterElement = document.createElement("p");
    monsterElement.innerHTML = monsterArray[monsterArray.length - 1].monsterElement;
    holdingDiv.appendChild(monsterElement);
    let monsterStimmung = document.createElement("p");
    monsterStimmung.innerHTML = monsterArray[monsterArray.length - 1].monsterStimmung;
    holdingDiv.appendChild(monsterStimmung);
}
// Wird für den Zugriff auf eine zufällige Stelle in einem Array aufgerufen.
// [ ] Optionale Aufgabe: verkleinere diesen Code auf eine Zeile mit nur einem Semikolon!
// Muss mit einer Zahl aufgerufen werden: getRNGNumber(5); // Liefert eine ganze Zahl zwischen 0 bis 4 zurück.
function getRNGNumber(_maxNumber) {
    let rngNumber = Math.random(); // Macht folgendes: Generiere eine zufällige Komma-Zahl zwischen 0 - 1.
    rngNumber = rngNumber * _maxNumber; // Multipliziere diese Zahl mit der Länge des entsprechenden Array (hier: _maxNumber, ein Parameter, siehe in der runden Klammer der Funktion).
    rngNumber = Math.floor(rngNumber); // Floore diese Zahl, damit diese nun Ganzzahlig ist.
    /////6.Fehler: rngNumber = 0; ---> Es gibt keinen Sinn eine random number auf 0 zu setzten, dann ist sie nicht mehr random.//////
    return rngNumber; // Gebe diese Zahl zurück, Funktion kann ähnlich einer Variable in Rechnungen genutzt werden.                                                                      
}
// Diese Funktion gibt einen zusammengewürfelten Namen zurück.
// Wird für die Monster-generierung verwendet!
// Liefert einen zusammengesetzten String zurück.
function generateMonsterName() {
    let generatedMonsterName = ""; // Erstelle einen leeren String für das Monster
    // Monster-Vorname
    // Mathematik! Hier wird eine zufällig-generierte Zahl benötigt.
    let rngNumber = getRNGNumber(prefix.length); // Der Rückgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Anfang) zu generieren.
    generatedMonsterName = prefix[rngNumber]; // Füge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der zufallsgenerierten Zahl den entsprechenden Eintrag.
    // Monster-Mittelname
    rngNumber = getRNGNumber(monsterName.length); // Der Rückgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Mitte) zu generieren.
    generatedMonsterName += monsterName[rngNumber]; // Füge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der zufallsgenerierten Zahl den entsprechenden Eintrag.
    /////7.Fehler: generatedMonsterName += monsterName[0]; ---> Bei der Zahl 0 nimmt er immer "ratte" und nicht einen zufälligen Namen. Deshalb muss man sie random machen.//////
    // Monster-Titel
    rngNumber = getRNGNumber(suffix.length); // Der Rückgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Ende) zu generieren.
    generatedMonsterName += suffix[rngNumber]; // Füge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der zufallsgenerierten Zahl den entsprechenden Eintrag.
    return generatedMonsterName;
}
// Wird für die Monster-Lebenspunkte aufgerufen.
// Liefert eine variierende Zahl zurück.
function generateMonsterHitPoints() {
    // Diese Funktion gibt eine zufällige ganze Zahl (zwischen 0 und 10) + 1 zurück.
    let tempMonsterHP = 1 + getRNGNumber(10);
    return tempMonsterHP;
}
// Wird für die Erstellung der Monster-Lebenspunkte aufgerufen.
// Liefert eine variierende Zahl zurück.
function generateMonsterXP() {
    // Diese Funktion gibt eine zufällige ganze Zahl (zwischen 0 und 350) + 100 zurück.
    let tempMonsterXP = 100 + getRNGNumber(350);
    return tempMonsterXP;
}
// Wird für die Erstellung der Monster-Modifizierer aufgerufen.
// Liefert ein Array mit zwei Einträgen zurück.
function generateMonsterModifer() {
    let tempMonsterMod = []; // Initialisiere ein leeres Array (verhindert Folge-Fehler)
    tempMonsterMod[0] = monsterModifers[getRNGNumber(monsterModifers.length)]; // Setze Schublade 0 des Arrays auf einen Wert.
    tempMonsterMod[1] = monsterModifers[getRNGNumber(monsterModifers.length)]; // Setze Schublade 1 des Arrays auf einen Wert.
    return tempMonsterMod; // Gebe das hier zusammengesetzte Array wieder zurück.
}
//////Aufgabe: Erweiterung des Monster-Interfaces um zwei weitere Felder.//////   
function generateMonsterElement() {
    let tempMonsterEl;
    tempMonsterEl = monsterElement[getRNGNumber(monsterElement.length)];
    return tempMonsterEl;
}
function generateMonsterStimmung() {
    let tempMonsterSt;
    tempMonsterSt = monsterStimmung[getRNGNumber(monsterStimmung.length)];
    return tempMonsterSt;
}
// Aufgerufen, wenn man auf den Button klickt.
// Der Spieler kämpft gegen das entsprechende Monster. Er erhält dann Erfahrungspunkte.
function fightMonster(_index) {
    console.log("Spieler kämpft gegen Monster und gewinnt!"); // Ohne Logik mit if/else ist so etwas wie ein Kampf nicht leicht umzusetzen.
    console.log("Das Monster weigert sich zu verschwinden."); // Wird nächste Stunde erweitert.
    playerXP += monsterArray[_index - 1].monsterExperience; // _index ist in diesem Fall die Länge des Arrays - allerdings zählt der Computer beginnend von null, nicht eins! Deshalb _index-1.
    monsterArray.splice(_index - 1, 1);
    updatePlayerLevel();
    updateHTML();
}
// Aufgerufen, um das HTML-Element, welches das Spieler-Level darstellt, zu erneuern.
function updatePlayerLevel() {
    let tempLevel = Math.floor(playerXP / playerXPperLevel); // Spieler-Level = XP / XPproLevel
    document.getElementById("xpCounter").innerHTML = "Player-Level: " + tempLevel + " (XP: " + playerXP + " / " + playerXPperLevel + ")"; // Baue den String für die Spieler-Info zusammen
    console.log("Spieler " + playerName + " hat nun Level " + tempLevel + " mit " + playerXP + " (" + playerXPperLevel + " pro Level)"); // Spieler-Level in der Konsole.
}
function clearMonsterCell() {
    let monsterHoldingCell = document.getElementById("monsterHoldingCell");
    while (monsterHoldingCell.firstChild != null) {
        monsterHoldingCell.firstChild.remove();
    }
}
function getMonsterCount() {
    return document.getElementById("monsterHoldingCell").childElementCount;
}
function updateHTML() {
    clearMonsterCell();
    monsterGenerateHTMLAll();
    console.log(getMonsterCount());
}
function monsterGenerateHTMLAll() {
    for (let i = 1; i <= monsterArray.length; i++) {
        monsterGenerateHTML(i);
    }
}
//# sourceMappingURL=62-TS-Example.js.map
//# sourceMappingURL=62-TS-Example.js.map