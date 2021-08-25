/* 
    Created on : May, 2019 
    Author     : Liisa Auer, Oulu University of Applied Sciences
    Licence    : CC-BY-4.0
*/

/*
 * Student name : Iida  
 * Started date : 24.1
 * Ended   date :
 * 
 */

function l01() {
    document.getElementById("first_name").innerHTML = "";
    document.getElementById("last_name").innerHTML = "";

    let etunimi = document.getElementById("name1").value;
    let sukunimi = document.getElementById("name2").value;

    for (let toistot = 0; toistot < 5; toistot++) {
        document.getElementById("first_name").innerHTML += etunimi + "<br>";
    }

    let kerrat = 0;
    while (kerrat < 5) {
        document.getElementById("last_name").innerHTML += sukunimi + "<br>";
        kerrat++;
    }
}

function l02() {
    document.getElementById("five").innerHTML = "";
    document.getElementById("six").innerHTML = "";


    let viisi = 5;

    for (let kerrat = 0; kerrat < 10; kerrat++) {
        document.getElementById("five").innerHTML += viisi + " ";
        viisi = viisi + 5;
    }

    let kuusi = 6;
    while (kuusi < 61) {
        document.getElementById("six").innerHTML += kuusi + " ";
        kuusi = kuusi + 6;
    }
}

function l03() {
    document.getElementById("stars1").innerHTML = "";
    document.getElementById("stars2").innerHTML = "";

    let amount = Number(document.getElementById("amount").value);

    let allekkain = 1;
    let vierekkain = 1;

    while (allekkain <= amount) {
        do {
            document.getElementById("stars1").innerHTML += "*";
            vierekkain++;
        } while (vierekkain <= allekkain)
        document.getElementById("stars1").innerHTML += "<br>";
        allekkain++;
        vierekkain = 1;
    }

    //for - stars2
    for (allekkain2 = 1; allekkain2 <= amount; allekkain2++) {
        for (let vierekkain2 = 1; vierekkain2 <= allekkain2; vierekkain2++) {
            document.getElementById("stars2").innerHTML += "*";
        }
        document.getElementById("stars2").innerHTML += "<br>";
        vierekkain2 = 1;
    }
}
/*while rivejä on vähemmän kuin annettu luku
    while vierekkäisiä tähtiä on yhtä monta kuin rivimäärä
        tulostaa tähtiä peräkkäin
        tähti++
    tulostaa br 
    rivimäärä++ */

function l04() {
    document.getElementById("numbers1").innerHTML = "";
    document.getElementById("numbers2").innerHTML = "";
    document.getElementById("numbers3").innerHTML = "";

    let eka = 10;
    let toka = -20;
    let kolmas = 29;
    do {
        document.getElementById("numbers1").innerHTML += eka + " ";
        eka--
    } while (eka >= -10);

    do {
        document.getElementById("numbers2").innerHTML += toka + " ";
        toka = toka + 2;
    } while (toka <= 20);

    do {
        document.getElementById("numbers3").innerHTML += kolmas + " ";
        kolmas = kolmas - 2;
    } while (kolmas > 0);

}

function l05() {
    document.getElementById("divisibility3").innerHTML = "";
    document.getElementById("divisibility5").innerHTML = "";

    let min = Number(document.getElementById("min").value);
    let max = Number(document.getElementById("max").value);
    let min2 = Number(document.getElementById("min").value);
    let max2 = Number(document.getElementById("max").value);

    //niin kauan kun numero välillä min ja max on jaollinen kolmella, tuosta se
    while (min <= max) {
        if (min % 3 === 0) {
            document.getElementById("divisibility3").innerHTML += min + " ";
        } else {
            document.getElementById("divisibility3").innerHTML += "";
        }
        min++;
    }
    while (min2 <= max2) {
        if (min2 % 5 === 0) {
            document.getElementById("divisibility5").innerHTML += min2 + " ";
        } else {
            document.getElementById("divisibility5").innerHTML += "";
        }
        min2++;
    }
}

// copy and paste here the random number generator function 
// and use it in the following functions
function arpa(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function l06() {
    document.getElementById("zeros").innerHTML = "";
    document.getElementById("ones").innerHTML = "";


    let ykkoset = 0; // arvottujen ykkösten märä
    let nollat = 0; // arvottujen nollien määrä
    let arpoja = 0;

    for (arvottu = 0; arvottu < 1000; arvottu++) {
        arpoja = arpa(0, 2)
        if (arpoja === 1) {
            ykkoset++;
        }
        if (arpoja === 0) {
            nollat++;
        }
    }
    document.getElementById("zeros").innerHTML = nollat;
    document.getElementById("ones").innerHTML = ykkoset;
}

function l07() {
    //tyhjennetään kentät
    document.getElementById("week").innerHTML = "";
    document.getElementById("joker").innerHTML = "";

    let numero = 0; // 0-9 
    let numeroita = 0; // tarvitaan 7
    let viikko = Math.floor(Math.random() * 53) + 1;
    document.getElementById("week").innerHTML = viikko;

    while (numeroita <= 7) {
        numero = arpa(0, 10);
        document.getElementById("joker").innerHTML += numero + " ";
        numeroita++
    }
    /*niin kauan, kunnes numeroita on arvottu 7
        arvo numero
        tulosta
        arvotut lisääntyy
    tulosta viikko*/
}
function l08() {

    let numero = Number(document.getElementById("multiplier").value);
    let kerroin = 0;

    while (kerroin <= 10) {
        let tulo = numero * kerroin
        document.getElementById("table").innerHTML += numero + " * " + kerroin + " = " + tulo + "<br>";
        kerroin++
    }
}

function l09() {
    const space = ";&nbsp;&nbsp;";
    let numero2 = 0;
    let kertoma = 0;
    let kertotaulu = 0;

    for (kertotaulu = 0; kertotaulu < 11; kertotaulu++) {
        for (kertoma = 0; kertoma < 11; kertoma++) {
            let tulo2 = numero2 * kertoma;
            document.getElementById("multiplication").innerHTML += numero2 + " * " + kertoma + " = " + tulo2 + space;
        }
        numero2++;
        document.getElementById("multiplication").innerHTML += "<br>";
    }

}

