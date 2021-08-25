/* 
    Created on : May, 2019 
    Author     : Liisa Auer, Oulu University of Applied Sciences
    Licence    : CC-BY-4.0
*/

/*
 * Student name :
 * Started date :
 * Ended   date :
 * 
 */

function j01() {
    let eka = Number(document.getElementById("year1").value);
    let toka = Number(document.getElementById("year2").value);

    let today = new Date(); // kuluva päivä
    let current_year = today.getFullYear();
    let ika1 = current_year - eka;
    let ika2 = current_year - toka;
    let ero = ika1 - ika2;

    document.getElementById("age1").innerHTML = "Person 1 age is " + ika1;
    document.getElementById("age2").innerHTML = "Person 2 age is " + ika2;
    document.getElementById("difference").innerHTML = "Person 1 is " + ero + " years older than person 2";

}

function j02() {
    let leveys = Number(document.getElementById("width").value);
    let korkeus = Number(document.getElementById("height").value);
    let pa = leveys * korkeus;

    document.getElementById("area").innerHTML = "The area is " + pa + " m2.";
}

function j03() {
    let eka = Number(document.getElementById("number1").value);
    let toka = Number(document.getElementById("number2").value);
    let summa = eka + toka;

    document.getElementById("sum").innerHTML = eka + " + " + toka + " = " + summa;

}

function j04() {
    const START = "Hello ";
    const MIDDLE = ", you are ";
    const END = " years of age.";

    let nimi = document.getElementById("name").value;
    let synty = Number(document.getElementById("year3").value);
    let today = new Date(); // kuluva päivä
    let current_year = today.getFullYear();
    let vanha = current_year - synty;

    document.getElementById("message").innerHTML = START + nimi + MIDDLE + vanha + END;

}
function j05() {
    let kolme = Number(document.getElementById("number3").value);
    let nelja = Number(document.getElementById("number4").value);

    let yht = kolme + nelja;

    document.getElementById("sums").innerHTML += kolme + " + " + nelja + " = " + yht + "<br>";


}

