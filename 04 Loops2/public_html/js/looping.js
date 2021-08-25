/* 
    Created on : May, 2019 
    Author     : Liisa Auer, Oulu University of Applied Sciences
    Licence    : CC-BY-4.0
*/

/*
 * Student name : Iida 
 * Started date :25.1
 * Ended   date :
 * 
 */

// define here the common functions calculateHedgeRow and getMeters
function calculateHedgeRow(plant, distance) {
    matka = plant * distance;
    return matka;
    // , joka laskee pensasaidan pituuden parametrien perusteella 
    //ja palauttaa tuloksen kutsuvalle.
}

function getMeters(distance) {
    pituus = distance / 100;
    return pituus;
    //, joka laskee pituuden metreinä ja palauttaa sen kutsuvalle. 
    //Parametrissa on pituus senttimetreinä.
}
let length_cm1_total = 0;
let length_m1_total = 0;
let plants1_total = 0;

function lt01() {

    let kasvit1 = Number(document.getElementById("plants1").value);
    let etaisyys1 = Number(document.getElementById("distance1").value);

    //lasketaan aidan pituus sentteinä
    let pituus_cm = kasvit1 * etaisyys1;

    //muunnetaan aidan pituus metreiksi
    let pituus_m = pituus_cm / 100;

    //kasvatetaan globaalien muuttujien määriä
    length_cm1_total = length_cm1_total + pituus_cm;
    length_m1_total = length_m1_total + pituus_m;
    plants1_total = plants1_total + kasvit1;

    document.getElementById("length_cm1").innerHTML = pituus_cm;
    document.getElementById("length_m1").innerHTML = pituus_m;

    document.getElementById("length_cm1_total").innerHTML = length_cm1_total;
    document.getElementById("length_m1_total").innerHTML = length_m1_total;
    document.getElementById("plants1_total").innerHTML = plants1_total;

}
let length_cm2_total = 0;
let length_m2_total = 0;
let plants2_total = 0;
let family_total = 1; //max 4

function lt02() {

    let kasvit2 = Number(document.getElementById("plants2").value);
    let etaisyys2 = Number(document.getElementById("distance2").value);

    //lasketaan aidan pituus sentteinä
    let pituus_cm2 = kasvit2 * etaisyys2;

    //muunnetaan aidan pituus metreiksi
    let pituus_m2 = pituus_cm2 / 100;

    //kasvatetaan globaalien muuttujien määriä
    length_cm2_total = length_cm2_total + pituus_cm2;
    length_m2_total = length_m2_total + pituus_m2;
    plants2_total = plants2_total + kasvit2;

    if (family_total <= 4) {
        document.getElementById("length_cm2").innerHTML = pituus_cm2;
        document.getElementById("length_m2").innerHTML = pituus_m2;

        document.getElementById("length_cm2_total").innerHTML = length_cm2_total;
        document.getElementById("length_m2_total").innerHTML = length_m2_total;
        document.getElementById("plants2_total").innerHTML = plants2_total;
        document.getElementById("finish").innerHTML = "";
        family_total++;
    } else {
        document.getElementById("finish").innerHTML = "All data entered.";
    }

}

function lt03() {
    let length_cm3_total = 0;
    let length_m3_total = 0;
    let plants3_total = 0;

    let kasvit3 = Number(document.getElementById("plants3").value);
    let etaisyys3 = Number(document.getElementById("distance3").value);
    let pituus_cm3 = kasvit3 * etaisyys3;
    let pituus_m3 = pituus_cm3 / 100;

    length_cm3_total = pituus_cm3 * 4;
    length_m3_total = pituus_m3 * 4;
    plants3_total = kasvit3 * 4;

    document.getElementById("length_cm3").innerHTML = pituus_cm3;
    document.getElementById("length_m3").innerHTML = pituus_m3;
    document.getElementById("length_cm3_total").innerHTML = length_cm3_total;
    document.getElementById("length_m3_total").innerHTML = length_m3_total;
    document.getElementById("plants3_total").innerHTML = plants3_total;




}