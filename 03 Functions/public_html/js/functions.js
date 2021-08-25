/*
    Created on : May, 2019
    Author     : Liisa Auer, Oulu University of Applied Sciences
    License    : CC-BY-4.0
*/

let whatShape = 1

function shape(i) {
    whatShape = i;
    document.getElementById('result').innerHTML = "";
}

function print(place, shape, area, around) {
    place.innerHTML = shape + " area is " + area + ", around is " + around + ".";
}

function calculateCirleAround(r) {
    return 2 * Math.PI * r;
}

function calculateCirleArea(r) {
    return Math.PI * Math.pow(r, 2);
}

function calculateSquareAround(s) {
    return 4 * s;
}

function calculateSquareArea(s) {
    return s * s;
}

// noppa
function noppa(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Button functions

function f01() {
    //ympyrän piiri
    let sade = Number(document.getElementById("radius1").value);
    let piiri = 2 * Math.PI * sade;
    document.getElementById("c_around").innerHTML = Math.round(piiri);

    //ympyrän pinta-ala
    let pa = Math.PI * Math.pow(sade, 2);
    document.getElementById("c_area").innerHTML = Math.round(pa);
}

function f02() {
    //kolmion korkeus
    let kylki = Number(document.getElementById("side").value);
    let pohja = Number(document.getElementById("bottom").value);
    let puolipohja = pohja / 2;
    let korkeus = Math.sqrt(Math.pow(kylki, 2) - Math.pow(puolipohja, 2));
    document.getElementById("t_height").innerHTML = Math.round(korkeus);

    //kolmion pinta-ala
    let kpa = pohja * korkeus / 2;
    document.getElementById("t_area").innerHTML = Math.round(kpa);

    //kolmion piiri
    let kolmio = pohja + kylki + kylki;
    document.getElementById("t_around").innerHTML = Math.round(kolmio);
}

function f03() {
    let ympyranSade = Number(document.getElementById("radius2").value);
    let ekaaround = calculateCirleAround(ympyranSade);
    let around = Math.round(ekaaround);
    let ekaarea = calculateCirleArea(ympyranSade);
    let area = Math.round(ekaarea);
    let place = document.getElementById("circle");
    let muoto = "Circle:";
    print(place, muoto, area, around);
}

function f04() {
    let nelionSivu = Number(document.getElementById("side2").value);
    let around2 = calculateSquareAround(nelionSivu);
    let area2 = calculateSquareArea(nelionSivu);
    let place = document.getElementById("square");
    let shape = "Square:";
    print(place, shape, area2, around2);
}


function f05() {

    let radiusSide = Number(document.getElementById("amount").value);
    let place = document.getElementById("result");

    // #2: Initialize the rest of the variables to avoid referencing null-values.
    let shapeString = "";
    let area = 0;
    let perimeter = 0;

    // #3: Calculate the area/perimeter based on the shape
    if (whatShape === 1) {
        // Circle
        shapeString = "Circle:";
        area = Math.round(calculateCirleArea(radiusSide)); // The values for the circles need to be rounded up.
        perimeter = Math.round(calculateCirleAround(radiusSide)); // The values for the circles need to be rounded up.
    }
    else if (whatShape === 2) {
        // Square
        shapeString = "Square:";
        area = calculateSquareArea(radiusSide);
        perimeter = calculateSquareAround(radiusSide);
    } //else {
    // The shapeValue was neither 1 or 2 (probably undefined).
    // What should be printed here? An error value to the User?
    //}

    // #4: Print the values to the HTML
    print(place, shapeString, area, perimeter);
}

//nopanheitto
function f06() {
    let luku = noppa(1, 6);
    document.getElementById("dice").innerHTML = luku;
}

//noppa tietyltä väliltä
function f07() {
    let minimi = Number(document.getElementById("min").value);
    let maximi = Number(document.getElementById("max").value);

    let luku2 = noppa(minimi, maximi);
    document.getElementById("randoms").innerHTML += luku2 + " ";
}

// Write getCharacter and getDigit functions here

function getCharacter(text, index, uppercase) {
    var nimenPituus = text.length;

    //muutetaan isoksi kirjaimeksi
    if (uppercase === true) {
        text = text.toUpperCase();
    }
    else if (uppercase === false) {
        text = text.toLowerCase();
    }
    return text.charAt(index);

}
//etsitään kuluvan vuoden viimeinen numero
function getDigit() {

    let today = new Date();
    let current_year = today.getFullYear();
    current_year = current_year.toString();
    var vikaNumero = current_year.charAt(3);
    return vikaNumero;
}

function f08() {
    // write here the user id and password by hand to have an example of 
    // the desired result of the task, use your own name
    // first name:  Iida    
    // last name: Peltonen
    // user id: n2iipe00
    // password: !?iApNE+/2

    let etunimi = document.getElementById("firstName").value;
    let sukunimi = document.getElementById("lastName").value;
    //tämä päivämäärä
    let today = new Date();
    let current_year = today.getFullYear();
    let vuodenVika = getDigit();
    let vuodenVika1 = getDigit();
    let vuodenVika2 = (Number(vuodenVika1) + 1);
    let etunimi1 = getCharacter(etunimi, 0, false);
    let etunimi2 = getCharacter(etunimi, 1, false);
    let etunimiVika = getCharacter(etunimi, etunimi.length - 1, true);
    let sukunimi1 = getCharacter(sukunimi, 0, false);
    let sukunimi2 = getCharacter(sukunimi, 1, false);
    let sukunimiVika = getCharacter(sukunimi, sukunimi.length - 1, true);
    let sukunimiTokaVika = getCharacter(sukunimi, sukunimi.length - 2, true);

    document.getElementById("userid").innerHTML = "n" + vuodenVika + etunimi1 + etunimi2 + sukunimi1 + sukunimi2 + "00";
    document.getElementById("password").innerHTML = "!?" + etunimi1 + etunimiVika + sukunimi1 + sukunimiVika + sukunimiTokaVika + "+/" + vuodenVika2;
}

// Write checkDate and luckyNumber functions here
function checkDate(day, month, year) {
    let message = "";

    if (day <= 0 || day >= 32) {
        message = "Day must be 1-31.";
    }
    if (month <= 0 || month >= 13) {
        message = "Month must be 1-12.";
    }
    if (year <= 1899 || year > 2021) {
        message = "Year must be between 1900 and current year.";
    }
    return message;
}

function luckyNumber(day, month, year) {
    const LUCKY = "2468013579";

    let verrokki = (day + month + year) % 10;
    return LUCKY.charAt(verrokki);
    //return verrokki;
}

function f09() {

    //kenttien tyhjennys
    document.getElementById("check_error").innerHTML = "";
    document.getElementById("check_result").innerHTML = "";

    //luetaan syötteet
    let dd = Number(document.getElementById("dd").value);
    let mm = Number(document.getElementById("mm").value);
    let yy = Number(document.getElementById("yy").value);

    let today = new Date();
    let current_year = today.getFullYear();
    let pvmOikein = checkDate(dd, mm, yy);
    if (pvmOikein != "") {
        let message = checkDate(dd, mm, yy);
        document.getElementById("check_error").innerHTML = message;
        document.getElementById("check_result").innerHTML = "";

    }
    else {
        ika = current_year - yy;
        let onnenNumero = luckyNumber(dd, mm, yy);
        document.getElementById("check_error").innerHTML = "";
        document.getElementById("check_result").innerHTML = "Your date is right and your are " + ika + " years old.<br>Your lucky number is " + onnenNumero;

    }
}