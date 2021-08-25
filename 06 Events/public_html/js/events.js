/* Iida Peltonen */

/* Ajoneuvotehtävä 
******************** */
function tankille() {
    document.getElementById("autovirhe").innerHTML = "";
    if (document.forms.ajoneuvo.tankki.checked === true) {
        document.getElementById("ttankille").classList.remove("piilossa");
    } else {
        document.getElementById("ttankille").classList.add("piilossa");
        document.getElementById("tankilletulos").innerHTML = "";
    }
}

function toimintasäde() {
    document.getElementById("autovirhe").innerHTML = "";
    if (document.forms.ajoneuvo.toimsäde.checked === true) {
        document.getElementById("tsäde").classList.remove("piilossa");
    } else {
        document.getElementById("tsäde").classList.add("piilossa");
        document.getElementById("sädetulos").innerHTML = "";
    }
}

function tyhjennä() {
    document.getElementById("tankilletulos").innerHTML = "";
    document.getElementById("sädetulos").innerHTML = "";
    document.getElementById("autovirhe").innerHTML = "";
}

const valintapuuttuu = "Valitse ainakin toinen valintaruuduista.";
const arvotpuuttuu = "Kulutus ja jäljellä pitää olla yli nollan.";

function laskeriittävyys() {

    //tyhjennetään syötteet
    document.getElementById("autovirhe").innerHTML = "";
    document.getElementById("tankilletulos").innerHTML = "";
    document.getElementById("sädetulos").innerHTML = "";
    //luetaan syötteet stringeinä
    let polttoaine = document.getElementById("polttoaine").value;
    let kulutus = document.getElementById("kulutus").value;
    //jos kumpikaan ei ole boksi valittu
    if (document.forms.ajoneuvo.tankki.checked == false && document.forms.ajoneuvo.toimsäde.checked == false) {
        document.getElementById("autovirhe").innerHTML = valintapuuttuu;
    }
    //jos kumpikaan tekstikentistä on tyhjä
    if (kulutus === "" || polttoaine === "") {
        document.getElementById("autovirhe").innerHTML = arvotpuuttuu;
        return;
    }
    //muutetaan tekstikenttien tieto numeroksi
    polttoaine = Number(polttoaine);
    kulutus = Number(kulutus);
    //jos jompikumpi on 0 tai vähemmän
    if (kulutus < 0.1 || polttoaine < 0.1) {
        document.getElementById("autovirhe").innerHTML = arvotpuuttuu;
    }
    //lasketaan pelkkä viimeistään
    if (document.forms.ajoneuvo.tankki.checked == true) {
        let jaljella = polttoaine - 2;
        let tulos2 = (jaljella / kulutus) * 100;
        let valmis2 = Math.floor(tulos2);
        document.getElementById("tankilletulos").innerHTML = valmis2;
    }
    //lasketaan pelkkä toimintasäde
    if (document.forms.ajoneuvo.toimsäde.checked == true) {
        let tulos = (polttoaine / kulutus) * 100;
        let valmis = Math.floor(tulos);
        document.getElementById("sädetulos").innerHTML = valmis;
    }
}


/* Sauvatehtävät 
****************** */
let tekstit = [
    "Perinteisen sauvan pituus on ",
    "Vapaan sauvan pituus on ",
    "Sauvakävelysauvan pituus on "
];

let kertoimet = [0.83, 0.9, 0.68]

const sauvavirhe = "Lasketaan vain vähintään 120 cm pitkille.";
const sauvavirhe2 = "Valitse ainakin yksi sauvatyyppi.";

var valittuSauva = 0;
function valintanapit(valinta) {
    valittuSauva = valinta;
    document.getElementById("pituus1").focus();
}

/* kirjoita tästä eteenpäin muut tarvittavat funktiot Sauva-tehtäviin */

function tyhjennä1() {
    document.getElementById("sauvavirhe1").innerHTML = "";
    document.getElementById("sauvatulos1").innerHTML = "";
}

function yksivalittu() {
    let pituus = Number(document.getElementById("pituus1").value);

    if (pituus < 120) {
        document.getElementById("sauvavirhe1").innerHTML = sauvavirhe;
        return;
    }
    else {
        let kerroin = kertoimet[valittuSauva];
        let sauvanPituus = kerroin * pituus;
        let tulos = Math.round(sauvanPituus);
        let teksti = tekstit[valittuSauva];
        document.getElementById("sauvatulos1").innerHTML = teksti + tulos;
    }
}

//sauvat 2
function tyhjennä2() {
    document.getElementById("sauvavirhe2").innerHTML = "";
    document.getElementById("sauvatulos2").innerHTML = "";
}

function montavalittu() {
    let pituus2 = Number(document.getElementById("pituus2").value);
    let valittu = false;

    if (pituus2 < 120) {
        document.getElementById("sauvavirhe2").innerHTML = sauvavirhe;
        return;
    }

    let tulokset = document.getElementsByName("valinta2");

    for (let i = 0; i < 3; i++) {
        if (tulokset[i].checked === true) {
            let teksti2 = tekstit[i];
            let tulos = pituus2 * kertoimet[i];
            let valmis = Math.round(tulos);
            document.getElementById("sauvatulos2").innerHTML += teksti2 + valmis + "<br>";
            valittu = true;
        }
    }
    if (valittu === false) {
        document.getElementById("sauvavirhe2").innerHTML = sauvavirhe2;
    }
}


