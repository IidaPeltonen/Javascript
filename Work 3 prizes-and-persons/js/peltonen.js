//authot: Iida Peltonen, OAMK

//globaalit taulukot
let allPrizes = [];
let allPersons = [];
let prizeAndPerson = [];
let arvottu = -1;

//printtaus palkinnot
function printPrizes(i) {
    document.getElementById("prizes").innerHTML = "";
    document.getElementById("prizesAmount").innerHTML = i + 1;
    for (let j = i; j >= 0; j--) {
        document.getElementById("prizes").innerHTML += "<li>" + allPrizes[j] + "</li>";
    }
}

//printtaus henkilöt
function printPersons(i) {
    document.getElementById("persons").innerHTML = "";
    document.getElementById("personsAmount").innerHTML = i + 1;
    for (let j = i; j >= 0; j--) {
        document.getElementById("persons").innerHTML += "<li>" + allPersons[j] + "</li>";
    }
}

//printtaus palkintolista
function printAll(i) {
    document.getElementById("personAndPrice").innerHTML = "";
    for (let j = i; j >= 0; j--) {
        document.getElementById("personAndPrice").innerHTML += "<li>" + prizeAndPerson[j] + "</li>";
    }

}

//random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function newPrize() {
    //virheilmot
    const ERROR_PALKINTO = "Insert prize."; //palkinto puuttuu
    //luetaan syöte
    let palkinto = document.getElementById("prize").value;
    //jos kenttä on tyhjä
    if (palkinto === "") {
        document.getElementById("prizeError").innerHTML = ERROR_PALKINTO;
        //kohdistin takaisin syöttökenttään
        document.getElementById(prize.id).select();
    }
    //muuten
    else {
        //tyhjennetään mahdollinen herja
        document.getElementById("prizeError").innerHTML = "";
        //syötetään taulukkoon
        allPrizes.push(palkinto);
        //tyhjennetään syöttökenttä 
        document.getElementById("prize").value = '';
        //kohdistin takaisin syöttökenttään
        document.getElementById(prize.id).select();
        //kutsutaan tulostusfunktiota
        printPrizes(allPrizes.length - 1);
    }
}

function newPerson() {
    //virheilmot
    const ERROR_HENKILO = "Insert person."; //henkilö puuttuu
    //luetaan syöte
    let henkilo = document.getElementById("person").value;
    //jos kenttä on tyhjä
    if (henkilo === "") {
        document.getElementById("personError").innerHTML = ERROR_HENKILO;
        //kohdistin takaisin syöttökenttään
        document.getElementById(person.id).select();
    }
    //muuten
    else {
        //tyhjennetään mahdollinen herja
        document.getElementById("personError").innerHTML = "";
        //syötetään taulukkoon
        allPersons.push(henkilo);
        // tyhjennetään syöttökenttä 
        document.getElementById("person").value = '';
        //kohdistin takaisin syöttökenttään
        document.getElementById(person.id).select();
        //kutsutaan tulostusfunktiota
        printPersons(allPersons.length - 1);
    }
}

function toPerson() {
    //ei tehdä, jos henkilölistan pituus on alle 0
    if (allPersons.length <= 0) {
        alert("No more persons!");
        return;
    }
    //ei tehdä, jos lahjalistan pituus on alle 0
    if (allPrizes.length <= 0) {
        alert("No more prizes!");
        return;
    }
    // muuten
    else {
        //otetaan palkinto-taulukon eka 
        let annettavaPalkinto = allPrizes[0]; //eka taulukossa
        //arvotaan indeksi henkilöt-listasta välilä eka - max length
        let voittanutHlo = getRndInteger(0, allPersons.length);
        //etsitään oikea henkilö
        let voittaja = allPersons[voittanutHlo];
        //syötetään palkinto + voittaja uuteen taulukkoon 
        prizeAndPerson.push(annettavaPalkinto + " : " + voittaja);
        //lisätään arvottujen määrää
        arvottu++;
        //poistetaan palkinto 
        allPrizes.shift();
        // poistetaan henkilö
        allPersons.splice((voittanutHlo), 1);
        //tulostetaan taulukko ja palkinnot + määrät
        printPrizes(allPrizes.length - 1);
        printPersons(allPersons.length - 1);
        printAll(arvottu);
    }

}


