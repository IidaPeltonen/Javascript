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

function t01() {
    let teksti = document.getElementById("name").value;
    document.getElementById("welcome").innerHTML = teksti;

}

function t02() {
    let secInMinutes = 60;
    let minInHours = 60;
    let hoursInDay = 24;
    let dayInYear = 365;

    let secInYear = secInMinutes * minInHours * hoursInDay * dayInYear;
    document.getElementById("seconds").innerHTML = secInYear;


}

function t03() {
    let eka = Number(document.getElementById("first").value);
    let toka = Number(document.getElementById("second").value);
    let kolmas = Number(document.getElementById("third").value);
    let ka = (eka + toka + kolmas) / 3;

    document.getElementById("average").innerHTML = ka;


}

function t04() {
    let eka = Number(document.getElementById("number1").value);
    let toka = Number(document.getElementById("number2").value);
    let summa = eka + toka;
    let erotus = eka - toka;
    let kerto = eka * toka;
    let jako = eka / toka;
    let jaanne = eka % toka;

    document.getElementById("d1").innerHTML = eka;
    document.getElementById("d2").innerHTML = toka;
    document.getElementById("d3").innerHTML = summa;
    document.getElementById("d4").innerHTML = eka;
    document.getElementById("d5").innerHTML = toka;
    document.getElementById("d6").innerHTML = erotus;
    document.getElementById("d7").innerHTML = eka;
    document.getElementById("d8").innerHTML = toka;
    document.getElementById("d9").innerHTML = kerto;
    document.getElementById("d10").innerHTML = eka;
    document.getElementById("d11").innerHTML = toka;
    document.getElementById("d12").innerHTML = jako;
    document.getElementById("d13").innerHTML = eka;
    document.getElementById("d14").innerHTML = toka;
    document.getElementById("d15").innerHTML = jaanne;
}


function t05() {
    let hinta = Number(document.getElementById("price").value);
    let ale = Number(document.getElementById("percent").value);

    let uusi = hinta - (hinta / 100 * ale);
    document.getElementById("newprice").innerHTML = uusi;
}

function t06() {
    let vuosi = Number(document.getElementById("year").value);
    let today = new Date(); // kuluva päivä
    let current_year = today.getFullYear();

    let ika = current_year - vuosi;

    document.getElementById("age").innerHTML = ika;

}

function t07() {

    let penkit = Number(document.getElementById("seats").value);
    let tyypit = Number(document.getElementById("guests").value);
    let yli = penkit - tyypit;

    document.getElementById("remaining").innerHTML = yli;


}

function t08() {
    let kasvit = Number(document.getElementById("plants").value);
    let matka = Number(document.getElementById("distance").value);

    let sentit = kasvit * matka;
    let metrit = sentit / 100;

    document.getElementById("length_cm").innerHTML = sentit;
    document.getElementById("length_m").innerHTML = metrit;
}

function t09() {
    let tyypit = Number(document.getElementById("participant").value);

    let makkara = tyypit * 3;
    let juomat = tyypit * 5;
    let tomaatit = tyypit * 2;
    let munat = tyypit * 1;

    document.getElementById("sausages").innerHTML = makkara;
    document.getElementById("drinks").innerHTML = juomat;
    document.getElementById("tomatoes").innerHTML = tomaatit;
    document.getElementById("eggs").innerHTML = munat;

}




