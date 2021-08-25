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

function v10() {
    const ERROR = "Points should be between 0 - 60.";
    //clear output data
    document.getElementById("points").innerHTML = "";
    document.getElementById("grade").innerHTML = "";
    document.getElementById("grade_error").innerHTML = "";


    let pisteet = Number(document.getElementById("points").value);

    if (pisteet < 0 || pisteet > 60) {
        document.getElementById("grade_error").innerHTML = ERROR;
    }
    else if (pisteet >= 0 && pisteet <= 29) {
        document.getElementById("grade").innerHTML = "fail";
    }
    else if (pisteet > 29 && pisteet <= 34) {
        document.getElementById("grade").innerHTML = "satisfactory";
    }
    else if (pisteet > 34 && pisteet <= 39) {
        document.getElementById("grade").innerHTML = "fair";
    }
    else if (pisteet > 39 && pisteet <= 49) {
        document.getElementById("grade").innerHTML = "good";
    }
    else if (pisteet > 49 && pisteet <= 60) {
        document.getElementById("grade").innerHTML = "excellent";
    }

}

function v11() {
    const ERROR = "Hours should be between 0 - 24.";

    //clear output data
    document.getElementById("clock").innerHTML = "";
    document.getElementById("greeting").innerHTML = "";
    document.getElementById("clock_error").innerHTML = "";


    let aika = Number(document.getElementById("clock").value);

    if (aika < 0 || aika > 24) {
        document.getElementById("clock_error").innerHTML = ERROR;
    }
    else if (aika >= 0 && aika <= 3) {
        document.getElementById("greeting").innerHTML = "Good night";
    }
    else if (aika >= 4 && aika <= 11) {
        document.getElementById("greeting").innerHTML = "Good morning";
    }
    else if (aika >= 12 && aika <= 17) {
        document.getElementById("greeting").innerHTML = "Good afternoon";
    }
    else if (aika >= 18 && aika <= 20) {
        document.getElementById("greeting").innerHTML = "Good evening";
    }
    else if (aika >= 21 && aika <= 24) {
        document.getElementById("greeting").innerHTML = "Good night";
    }

}


function v12() {
    const ERROR_NEG = "Number of guests cannot be negative.";
    const ERROR_DIGIT = "Number of guests must be integer.";
    const ERROR_FEW = "Party is cancelled due to too few guests.";

    const ADDRESS1 = "Naapuritie 1";
    const ADDRESS2 = "Naapuritie 12";
    const ADDRESS3 = "Juhlasalintie 34";

    //clear output data
    document.getElementById("guests").innerHTML = "";
    document.getElementById("shopping_list").innerHTML = "";
    document.getElementById("address").innerHTML = "";
    document.getElementById("party_error").innerHTML = "";

    let maara = Number(document.getElementById("guests").value);
    let makkara = maara;
    let tomaatti = maara;
    let juoma = maara;
    let muna = maara;


    //jos alle nolla
    if (maara < 0) {
        document.getElementById("party_error").innerHTML = ERROR_NEG;
    }
    // jos ei kokonaisluku
    else if (Number.isInteger(maara) === false) {
        document.getElementById("party_error").innerHTML = ERROR_DIGIT;
    }
    // jos alle 3 
    else if (maara >= 0 && maara <= 3) {
        document.getElementById("party_error").innerHTML = ERROR_FEW;
        document.getElementById("shopping_list").innerHTML = "";
        document.getElementById("address").innerHTML = "";

    }
    // jos 4-15
    else if (maara >= 4 && maara <= 15) {
        let tomaatti = maara * 2;
        let makkara = maara * 3;
        let juoma = maara * 5;
        let muna = maara * 1;

        document.getElementById("shopping_list").innerHTML = "Shopping list: <br>- Sausages " + makkara + " pcs<br>- Drinks " + juoma + " bottles<br>- Tomatoes " + tomaatti + " pcs<br>- Eggs " + muna + " pcs";
        document.getElementById("address").innerHTML = ADDRESS1;
    }
    // vieraita 16-50
    else if (maara >= 16 && maara <= 50) {
        let tomaatti = maara * 1;
        let makkara = maara * 2;
        let juoma = maara * 3;
        let muna = maara * 0.5;

        document.getElementById("shopping_list").innerHTML = "Shopping list: <br>- Sausages " + makkara + " pcs<br>- Drinks " + juoma + " bottles<br>- Tomatoes " + tomaatti + " pcs<br>- Eggs " + muna + " pcs";
        document.getElementById("address").innerHTML = ADDRESS2;
    }
    //vieraita yli 51
    else if (maara >= 51) {
        let tomaatti = maara * 1;
        let makkara = maara * 2;
        let juoma = maara * 3;
        let muna = maara * 0.5;

        document.getElementById("shopping_list").innerHTML = "Shopping list: <br>- Sausages " + makkara + " pcs<br>- Drinks " + juoma + " bottles<br>- Tomatoes " + tomaatti + " pcs<br>- Eggs " + muna + " pcs";
        document.getElementById("address").innerHTML = ADDRESS3;
    }

}

function v13() {
    const ERROR = "Number of right answers cannot be bigger than number of questions.";
    const RES1 = "Less than 25% right, you should study more.<br>";
    const RES2 = "Less than 50% right, nearly passed.<br>";
    const RES3 = "More than 50% right, good work.<br>";
    const RES4 = "More than 75% right, excellent.<br>";

    const prize1 = '<img src="img/prize1.png">';
    const prize2 = '<img src="img/prize2.png">';
    const prize3 = '<img src="img/prize3.png">';
    const prize4 = '<img src="img/prize4.png">';

    //clear output data
    document.getElementById("amount").innerHTML = "";
    document.getElementById("right").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("quiz_error").innerHTML = "";

    let kaikki = Number(document.getElementById("amount").value);
    let oikein = Number(document.getElementById("right").value);
    let tulos = oikein / kaikki;
    //jos oikeita enemmän kuin kaikki
    if (oikein > kaikki) {
        document.getElementById("quiz_error").innerHTML = ERROR;
    }
    else if (tulos <= 0.25) {
        document.getElementById("result").innerHTML = RES1 + prize1;
    }
    else if (tulos >= 0.26 && tulos <= 0.50) {
        document.getElementById("result").innerHTML = RES2 + prize2;
    }
    else if (tulos >= 0.51 && tulos <= 0.75) {
        document.getElementById("result").innerHTML = RES3 + prize3;
    }
    else if (tulos >= 0.76 && tulos <= 1.00) {
        document.getElementById("result").innerHTML = RES4 + prize4;
    }
}





