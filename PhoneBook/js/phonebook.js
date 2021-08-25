class tiedot {
    constructor(lastname, firstname, phone, year) {
        this._sukunimi = lastname;
        this._etunimi = firstname;
        this._puhelin = phone;
        this._vuosi = year;
    }
    //methods
    returnAge() {
        let now = new Date().getFullYear();
        return now - this._vuosi;
    }
    printTiedot() {
        return this._sukunimi + ", " + this._etunimi;
    }
    //setters
    set sukunimi(lastname) {
        this._sukunimi = lastname;
    }
    set etunimi(firstname) {
        this._etunimi = firstname;
    }
    set puhelin(phone) {
        this._puhelin = phone;
    }
    set vuosi(year) {
        this._vuosi = year;
    }
    //getters
    get sukunimi() {
        return this._sukunimi;
    }
    get etunimi() {
        return this._etunimi;
    }
    get puhelin() {
        return this._puhelin;
    }
    get vuosi() {
        return this._vuosi;
    }
}

let kaikki = {
    tiedot: new Array(),

    saveTyypit: function (tyyppi) {
        this.tiedot.push(tyyppi);
    },
    removeTyypit: function (index) {
        this.tiedot.splice(index, 1);
    },
    maara: function () {
        total = tiedot.length - 1;
        return total;
    },

    ika: function () {
        let total = 0;
        let yht = 0;
        let jakaja = this.tiedot.length;
        for (let i = 0; i < this.tiedot.length; i++) {
            let tyypit = this.tiedot[i];
            total = tyypit.returnAge();
            yht = yht + total;
        }
        let tulos = yht / jakaja;
        return tulos;
    }
};
function startData() {
    let hlo = new tiedot("Takanen", "Enni", "0402206838", 1995);
    kaikki.saveTyypit(hlo);

    hlo = new tiedot("Rantanen", "Tero", "0414306767", 1980);
    kaikki.saveTyypit(hlo);

    hlo = new tiedot("Peltonen", "Paula", "0503762683", 1949);
    kaikki.saveTyypit(hlo);

    print();
}

function print() {
    let output = document.getElementById("kaikkiIhmiset");
    output.innerHTML = "";
    document.getElementById("total").innerHTML = ""

    for (let i = 0; i < kaikki.tiedot.length; i++) {
        let oneHlo = kaikki.tiedot[i];
        output.innerHTML += "<label class='output' onclick='printOne(" + i + ")'> "
            + oneHlo.printTiedot() + "</label>" + "<br><br>";
    }
    document.getElementById("total").innerHTML =
        "<br>Average of age: " + kaikki.ika() + "<br><br>" +
        "Number of friends: " + kaikki.tiedot.length;

    document.getElementById("yksihlo").innerHTML = "";
}

function printOne(index) {
    let yksi = kaikki.tiedot[index]

    document.getElementById("yksihlo").innerHTML =
        yksi.printTiedot() + "<br><br>" +
        "Phone: " + yksi.puhelin + "<br><br>" +
        "Birth year :" + yksi.vuosi + "<br><br>" +
        "Age: " + yksi.returnAge() + "<br><br>" +
        "<button onclick='remove(" + index + ")'>Remove</button><br><br>" +
        "<button onclick='edit(" + index + ")'>Edit</button><br><br";

}

function remove(index) {
    kaikki.removeTyypit(index);
    print();
}

function edit(index) {
    let yksiHlo = kaikki.tiedot[index];

    document.getElementById('lastname').value = yksiHlo.sukunimi;
    document.getElementById('firstname').value = yksiHlo.etunimi;
    document.getElementById('phone').value = yksiHlo.puhelin;
    document.getElementById('birthyear').value = yksiHlo.vuosi;
    document.getElementById('index').value = index;
}

function save() {
    let today = new Date();
    let today2 = today.getFullYear();
    //jos kenttiä ei ole täytetty
    if (document.getElementById('lastname').value === "") {
        alert(message = "Please fill last name!");
    } else if (document.getElementById('firstname').value === "") {
        alert(message = "Please fill first name!");
    } else if (document.getElementById('phone').value === "") {
        alert(message = "Please fill phone number!");
    } else if (document.getElementById('birthyear').value === "") {
        alert(message = "Please fill birth year!");
    } else if (document.getElementById('birthyear').value > today2 || document.getElementById('birthyear').value < 1900) {
        alert(message = "Please check birth year!");
    }
    else {
        if (document.getElementById('index').value === "") {
            //uusi tyyppi
            let hlo = new tiedot(
                document.getElementById('lastname').value,
                document.getElementById('firstname').value,
                document.getElementById('phone').value,
                Number(document.getElementById('birthyear').value)
            );
            kaikki.saveTyypit(hlo);
        }
        else {
            //editoidaan vanhaa
            let i = Number(document.getElementById('index').value);
            let yksiHlo = kaikki.tiedot[i];

            yksiHlo.sukunimi = document.getElementById('lastname').value;
            yksiHlo.etunimi = document.getElementById('firstname').value;
            yksiHlo.puhelin = document.getElementById('phone').value;
            yksiHlo.vuosi = Number(document.getElementById('birthyear').value);
        }
        print();
        cancel();
    }
}

function cancel() {
    document.getElementById('lastname').value = "";
    document.getElementById('firstname').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('birthyear').value = "";
    document.getElementById('index').value = "";
}


