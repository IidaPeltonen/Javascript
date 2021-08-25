/* 
    Created on : May, 2019 
    Author     : Liisa Auer, Oulu University of Applied Sciences
    License    : CC-BY-4.0
*/

//globaali
let numbers = [15, 4, 68, 23, 22, 7, 15, 10, 32, 15];

// copy and paste here the random number generator function
// noppa
function arpa(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function t01a() {
    document.getElementById("result_a1").innerHTML = "";
    document.getElementById("result_a2").innerHTML = "";


    document.getElementById("result_a1").innerHTML += numbers;

    for (let i = 0; i < numbers.length; i++) {
        document.getElementById("result_a2").innerHTML += numbers[i] + " ";
    }
}

function t01b() {
    document.getElementById("result_b").innerHTML = "";

    for (let i = numbers.length - 1; i >= 0; i--) {
        document.getElementById("result_b").innerHTML += numbers[i] + " ";
    }

}

function t01c() {
    document.getElementById("result_c1").innerHTML = "";
    document.getElementById("result_c2").innerHTML = "";

    let sum = numbers.reduce(function (a, b) {
        return a + b;
    }, 0);
    document.getElementById("result_c1").innerHTML += sum;

    let yht = 0;
    for (let i = 0; i < numbers.length; i++) {
        yht += numbers[i];
    }
    let ka = yht / numbers.length;

    document.getElementById("result_c2").innerHTML += ka;

}

function t01d() {
    document.getElementById("result_d1").innerHTML = "";
    document.getElementById("result_d2").innerHTML = "";
    let pienin = 15;
    let suurin = 15;

    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] < pienin) {
            pienin = numbers[i];
        }
        else {
            pienin = pienin;
        }
    }
    document.getElementById("result_d1").innerHTML += pienin;

    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] > suurin) {
            suurin = numbers[i];
        }
        else {
            suurin = suurin;
        }
    }
    document.getElementById("result_d2").innerHTML = suurin;
}

function t01e() {
    document.getElementById("result_e").innerHTML = "";

    numbers.sort(function (a, b) { return a - b });
    for (let i = 0; i < numbers.length; i++) {
        document.getElementById("result_e").innerHTML += numbers[i] + " ";
    }
}

function t01f() {
    numbers = new Array();
    let numeroita = 0;
    do {
        numbers.push(arpa(1, 21));
        numeroita++;
    } while (numeroita <= 20);


}
function t02() {
    document.getElementById("joker").innerHTML = "";

    let numeroita = 0;
    let jokers = new Array();
    do {
        jokers.push(arpa(1, 9));
        numeroita++;
    } while (numeroita < 7);


    for (let i = 0; i < jokers.length; i++) {
        document.getElementById("joker").innerHTML += jokers[i] + " ";
    }
}
function t03() {
    document.getElementById("lotto").innerHTML = "";
    document.getElementById("extra").innerHTML = "";
    document.getElementById("plus").innerHTML = "";

    let taytto = 0;
    let arvottu = 0;
    let paanumero = 0;
    //luodaan uusi taulu
    lottotaulu = new Array()
    //täytetään nollilla, tämä toimii
    do {
        lottotaulu.push("0");
        taytto++;
    } while (taytto <= 40);

    //arvotaan 7 numeroa
    do {
        paanumero = arpa(1, 40);
        if (lottotaulu[paanumero] = "0") {
            lottotaulu[paanumero] = ("1");
            arvottu++;
        }
        else if (lottotaulu[paanumero] = "1") {
            lottotaulu[paanumero] = ("1");
        }

    } while (arvottu < 8);

    //arvotaan lisänumero
    let arvottu2 = 0;
    do {
        let lisanumero = arpa(1, 41);
        if (lottotaulu[lisanumero] = "0") {
            lottotaulu[lisanumero] = ("2");
            arvottu2++;
        }
        else if (lottotaulu[lisanumero] = "1") {
            lottotaulu[lisanumero] = ("1");
        }
    } while (arvottu2 < 2);

    //etsitään oikeat lottonumerot
    for (i = 1; i <= 40; i++) {
        if (lottotaulu[i] === "1") {
            document.getElementById("lotto").innerHTML += i + " ";
        }
    }

    for (lisa = 1; lisa <= 40; lisa++) {
        if (lottotaulu[lisa] === "2") {
            document.getElementById("extra").innerHTML = lisa;
        }
    }

    //arvotaan bonusnro*/
    let bonus = arpa(1, 41);
    document.getElementById("plus").innerHTML = bonus;

}

function t04() {
    document.getElementById("random").innerHTML = "";
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    /* - Toistossa luot satunnaisluvun väliltä
     0 … array length-1, käytä tätä indeksinä - Tulosta taulukkoalkio, johon edellä 
     luotu indeksi osoittaa, välilyönti tulostuksen perään. - Poista tulostettu 
     taulukkoalkio taulukosta splice()-funktiolla asp; lue ensin definition ja 
     usage osat, sitten parametrien arvoista ja lopuksi esimerkki*/

    while (numbers.length > 0) {
        let luku = arpa(1, numbers.length - 1);
        document.getElementById("random").innerHTML += numbers[luku] + " ";
        numbers.splice(luku, 1);
    }
}

function t05() {
    document.getElementById("sixes").innerHTML = "";
    document.getElementById("dices").innerHTML = "";
    let laskuri = 0; //montako kertaa heitetty (0-100)
    let sixes = 0; //montako kutosta heitetty

    do {
        let numero = arpa(1, 7);
        if (numero === 1) {
            document.getElementById("dices").innerHTML += '<img alt="dice 1" src="img/noppa1.png">' + " ";
        }
        else if (numero === 2) {
            document.getElementById("dices").innerHTML += '<img alt="dice 2" src="img/noppa2.png">' + " ";

        } else if (numero === 3) {
            document.getElementById("dices").innerHTML += '<img alt="dice 3" src="img/noppa3.png">' + " ";
        }
        else if (numero === 4) {
            document.getElementById("dices").innerHTML += '<img alt="dice 4" src="img/noppa4.png">' + " ";

        } else if (numero === 5) {
            document.getElementById("dices").innerHTML += '<img alt="dice 5" src="img/noppa5.png">' + " ";
        }
        else if (numero === 6) {
            document.getElementById("dices").innerHTML += '<img alt="dice 6" src="img/noppa6.png">' + " ";
            sixes++;
        }
        laskuri++
    } while (laskuri <= 100);

    document.getElementById("sixes").innerHTML = sixes;

    let dices = ["",
        '<img alt="dice 1" src="img/noppa1.png">',
        '<img alt="dice 2" src="img/noppa2.png">',
        '<img alt="dice 3" src="img/noppa3.png">',
        '<img alt="dice 4" src="img/noppa4.png">',
        '<img alt="dice 5" src="img/noppa5.png">',
        '<img alt="dice 6" src="img/noppa6.png">'
    ];

}
