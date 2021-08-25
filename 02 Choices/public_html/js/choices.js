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

function v01() {
    let vuosi = Number(document.getElementById("year").value);
    let today = new Date(); // kuluva päivä
    let current_year = today.getFullYear();
    let ika = current_year - vuosi;

    if (ika < 18) {
        document.getElementById("allow").innerHTML = "too young";
    }
    else {
        document.getElementById("allow").innerHTML = "Welcome!";

    }

}

function v02() {

    let eka = Number(document.getElementById("number1").value);
    let toka = Number(document.getElementById("number2").value);

    if (eka < toka) {
        document.getElementById("smaller").innerHTML = eka;
    }
    else {
        document.getElementById("smaller").innerHTML = toka;
    }
}

function v03() {
    const NEG = "One of the numbers is negative."
    const POS = "Both numbers are either positive or negative."

    let luku1 = Number(document.getElementById("number1").value);
    let luku2 = Number(document.getElementById("number2").value);

    let kerto = luku1 * luku2;

    if (kerto > 0) {
        document.getElementById("negative").innerHTML = POS;
    }
    else {
        document.getElementById("negative").innerHTML = NEG;
    }
}

function v04() {
    const REC = "rectangle";
    const SQ = "square";

    let jana1 = Number(document.getElementById("side1").value);
    let jana2 = Number(document.getElementById("side2").value);


    if (jana1 == jana2) {
        document.getElementById("square").innerHTML = SQ;
    }
    else {
        document.getElementById("square").innerHTML = REC;
    }
}


function v05() {
    const EVEN = "even";
    const ODD = "odd";

    let numero = Number(document.getElementById("number3").value);

    if (numero % 2 == 0) {
        document.getElementById("even").innerHTML = EVEN;
    }
    else {
        document.getElementById("even").innerHTML = ODD;
    }
}


function v06() {
    let numero = Number(document.getElementById("number3").value);
    if (numero == 0) {
        document.getElementById("positive").innerHTML = "zero";
    }
    else if (numero > 0) {
        document.getElementById("positive").innerHTML = "positive";
    }
    else /*(numero < 0)*/ {
        document.getElementById("positive").innerHTML = "negative";
    }
}

function v07() {
    let yks = Number(document.getElementById("digit_a").value);
    let kaks = Number(document.getElementById("digit_b").value);
    let kolme = Number(document.getElementById("digit_c").value);
    let nelja = Number(document.getElementById("digit_d").value);

    let pienin = yks;

    if (kaks < pienin) {
        pienin = kaks;
    }
    if (kolme < pienin) {
        pienin = kolme;
    }
    if (nelja < pienin) {
        pienin = nelja;
    }

    let suurin = yks;

    if (kaks > suurin) {
        suurin = kaks;
    }
    if (kolme > suurin) {
        suurin = kolme;
    }
    if (nelja > suurin) {
        suurin = nelja;
    }
    document.getElementById("smallest").innerHTML = pienin;
    document.getElementById("biggest").innerHTML = suurin;
}

function v08() {

    let hyppy = Number(document.getElementById("yearx").value);

    if (hyppy % 4 == 0 && (hyppy % 100 != 0 || hyppy % 400 == 0)) {
        console.log("If");
        document.getElementById("leap_year").innerHTML = "is leap year";
    } else {
        console.log("Else");
        document.getElementById("leap_year").innerHTML = "is not leap year";
    }
}

function v09() {
    const FLOWER1 = '<img alt="flower1" src="img/flower1.png">';
    const FLOWER2 = '<img alt="flower2" src="img/flower2.png">';
    const FLOWER3 = '<img alt="flower3" src="img/flower3.png">';
    const FLOWER4 = '<img alt="flower4" src="img/flower4.png">';

    let kukka = Number(document.getElementById("number4").value);

    if (kukka % 3 == 0) {
        document.getElementById("flower").innerHTML = FLOWER1;
        if (kukka > 10) {
            document.getElementById("flower").innerHTML += FLOWER3;
        }
        else {
            document.getElementById("flower").innerHTML += FLOWER4;
        }
    }
    else if (kukka % 3 != 0) {
        document.getElementById("flower").innerHTML = FLOWER2;
        if (kukka > 10) {
            document.getElementById("flower").innerHTML += FLOWER3;
        }
        else {
            document.getElementById("flower").innerHTML += FLOWER4;
        }
    }
}