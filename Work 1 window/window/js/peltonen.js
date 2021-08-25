/* 
    Created on : Jan, 2021 
    Author     : Iida Peltonen, Oulu University of Applied Sciences
*/

function window_calculation() {
    //error-koodit
    const ERROR = "No amount. 1 assumed.";
    const ERROR_KOKO = "Minimum height and width of window is 50cm.";
    const ERROR_MAARA = "No more than 10 equal size windows.";
    const ERROR_KOKO2 = "Maximum height and width of window is 200cm.";

    //kenttien tyhjennys
    document.getElementById("window_height").innerHTML = "";
    document.getElementById("window_width").innerHTML = "";
    document.getElementById("window_amount").innerHTML = "";
    document.getElementById("error").innerHTML = "";
    document.getElementById("wood").innerHTML = "";
    document.getElementById("woods").innerHTML = "";
    document.getElementById("glass").innerHTML = "";
    document.getElementById("glasses").innerHTML = "";
    document.getElementById("size").innerHTML = "";

    //luetaa syötteet
    //ikkunan korkeus
    let korkeus = Number(document.getElementById("window_height").value);
    //ikkunan leveys
    let leveys = Number(document.getElementById("window_width").value);
    // ikkunoiden määrä
    let maara = Number(document.getElementById("window_amount").value);
    // tehdään laskutoimitukset
    // ikkuna-aukon koko
    let aukonkoko = korkeus * leveys;
    // aukon koko neliömetreinä
    let aukkoNelio = aukonkoko / 100;
    //puun määrä
    let puunkorkeus = korkeus - 6;
    let puunleveys = leveys - 6;
    let puunmaara = (puunkorkeus + puunleveys) * 4 / 100;
    //lasin määrä
    let lasinkorkeus = korkeus - 10;
    let lasinleveys = leveys - 10;
    let lasinmaara = lasinkorkeus * lasinleveys / 10000;
    //kokonaismäärä puu
    let puutYht = (puunmaara * maara);
    //kokonaismaara lasi
    let lasiYht = (lasinmaara * maara);

    //jos ikkunoita on alle 1
    if (maara < 1) {
        // tulostetaan virhekoodi ja ollataan tulokset
        document.getElementById("error").innerHTML = ERROR;
        return;
    }
    //jos koko on liian pieni
    if (korkeus < 50 || leveys < 50) {
        // tulostetaan virhekoodi ja ollataan tulokset
        document.getElementById("error").innerHTML = ERROR_KOKO;
        return;
    }
    // jos koko on liian iso
    if (korkeus > 200 || leveys > 200) {
        // tulostetaan virhekoodi ja nollataan tulokset
        document.getElementById("error").innerHTML = ERROR_KOKO2;
        return;
    }
    //jos liikaa ikkunoita
    if (maara > 10) {
        // tulostetaan virhekoodi ja ollataan tulokset
        document.getElementById("error").innerHTML = ERROR_MAARA;
        return;
    }
    // jos ikkunoita on 1
    else if (maara == 1){
        // tyhjätään useamman ikkuna tulokset
        document.getElementById("woods").innerHTML = "";
        document.getElementById("glasses").innerHTML = "";
        document.getElementById("wood").innerHTML = puunmaara;
        document.getElementById("glass").innerHTML = lasinmaara;
    }
    //jos ikkunoita on useampi
    else if (maara >= 2) {
        document.getElementById("wood").innerHTML = puunmaara;
        document.getElementById("glass").innerHTML = lasinmaara;
        document.getElementById("woods").innerHTML = puutYht;
        document.getElementById("glasses").innerHTML = lasiYht;
    }

    //lasketaan kokomääritys
    //jos pienempi kuin 0.5m2 -> small
    if (lasinmaara <= 0.5) {
        document.getElementById("size").innerHTML = "small window";
    }
    //jos 0.6 - 1.5 -> medium
    else if (lasinmaara >= 0.6 && lasinmaara <= 1.5) {
        document.getElementById("size").innerHTML = "medium window";
    }
    //jos 1.6 - 2.5 -> large
    else if (lasinmaara >= 1.6 && lasinmaara <= 2.5) {
        document.getElementById("size").innerHTML = "large window";
    }
    //jos yli 2.6 -> huge
    else if (lasinmaara >= 2.6) {
        document.getElementById("size").innerHTML = "huge window";
    }
}