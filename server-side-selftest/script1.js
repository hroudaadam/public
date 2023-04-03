var n = 0;
var otazky = new Array();
var odpovezene = new Array();
var spatneOtazky = new Array();

var spravne = 0;
var spatne = 0;

var otazka;

var x = 0;

function start() {
    zalozOtazky().then(() => {
        document.getElementById('start').remove();
    
        document.getElementById('otazka').style.visibility = 'visible';
        //document.getElementById('odpoved').style.visibility = 'visible';
        document.getElementById('check').style.visibility = 'visible';
        document.getElementById('otazkaCislo').style.visibility = 'visible';
    
        nactiOtazku();
    })
}

function nactiOtazku() {
    if (otazky.length <= n) {
        document.getElementById("form").style.visibility = 'hidden';
        document.getElementById("otazkaCislo").style.visibility = 'hidden';
        document.getElementById("dalsi").style.visibility = 'hidden';

        document.getElementById("check").innerHTML = '<p>Správných odpovědí: ' + spravne + '</p>' +
            '<p>Špatných odpovědí: ' + spatne + '</p>' +
            '<button id="spatneOtazky" type="button" onclick=nactiSpatne()>Znovu špatné otázky</button>';
        return;
    }

    while (true) {
        x = Math.floor((Math.random() * otazky.length));
        if (odpovezene.indexOf(x) >= 0)
            ;
        else
            break;
    }

    document.getElementById('otazkaCislo').innerHTML = "Otázka " + (n + 1) + " z " + (otazky.length);
    document.getElementById("check").style.visibility = 'hidden';
    document.getElementById("dalsi").style.visibility = 'hidden';
    otazka = otazky[x];
    document.getElementById('otazka').innerHTML = '<div id="form">' + otazka.otazka + '<br>' +
        '<br><input id="a" type="radio" name="a">' + `<span id="aa"> ` + otazka.a + '</span>' +
        '<br><input id="b" type="radio" name="a">' + '<span id="bb"> ' + otazka.b + '</span>' +
        '<br><input id="c" type="radio" name="a">' + '<span id="cc"> ' + otazka.c + '</span>' +
        '<br><input id="d" type="radio" name="a">' + '<span id="dd"> ' + otazka.d + '</span>' +
        '<br><input id="e" type="radio" name="a">' + '<span id="ee"> ' + otazka.e + '</span>' + '<br>' +
        '<br><input id="end" type="button" value="Odpovědět" onclick=check()>' +
        '</div>';
}

function nactiSpatne() {
    document.getElementById("form").style.visibility = 'visible';
    document.getElementById("otazkaCislo").style.visibility = 'visible';
    document.getElementById("dalsi").style.visibility = 'visible';
    document.getElementById('otazka').style.visibility = 'visible';
    document.getElementById('check').style.visibility = 'visible';

    otazky = [];
    otazky = spatneOtazky;
    spatneOtazky = [];
    n = 0;
    x = 0;
    spravne = 0;
    spatne = 0;
    odpovezene = [];
    nactiOtazku();
}

function isEnter(e) {
    if ((event.which == 13 || event.keyCode == 13)) {
        if (document.getElementById("dalsi").style.visibility == 'visible') {
            nactiOtazku();
        } else {
            check();
        }
    }
}

function check() {
    //document.getElementById("check").innerHTML = document.getElementById("id1").value;
    document.getElementById("check").style.visibility = 'visible';
    if (document.getElementById("a").checked == true) {
        if (otazka.a == otazka.odpoved) {
            document.getElementById("check").innerHTML = '<p style="color:green">Správná odpověď</p>';
            spravne++;
        } else {
            document.getElementById("aa").style.backgroundColor = 'LightCoral';
            if (otazka.b == otazka.odpoved)
                document.getElementById("bb").style.backgroundColor = 'LightGreen';
            else if (otazka.c == otazka.odpoved)
                document.getElementById("cc").style.backgroundColor = 'LightGreen';
            else if (otazka.d == otazka.odpoved)
                document.getElementById("dd").style.backgroundColor = 'LightGreen';
            else if (otazka.e == otazka.odpoved)
                document.getElementById("ee").style.backgroundColor = 'LightGreen';

            document.getElementById("check").innerHTML = '<p style="color:red">Špatně!</p>' +
                'Správná odpověď je: ' + otazka.odpoved;
            spatne++;
            spatneOtazky.push(otazka);
        }
    } else if (document.getElementById("b").checked == true) {
        if (otazka.b == otazka.odpoved) {
            document.getElementById("check").innerHTML = '<p style="color:green">Správná odpověď</p>';
            spravne++;
        } else {
            document.getElementById("bb").style.backgroundColor = 'LightCoral';
            if (otazka.a == otazka.odpoved)
                document.getElementById("aa").style.backgroundColor = 'LightGreen';
            else if (otazka.c == otazka.odpoved)
                document.getElementById("cc").style.backgroundColor = 'LightGreen';
            else if (otazka.d == otazka.odpoved)
                document.getElementById("dd").style.backgroundColor = 'LightGreen';
            else if (otazka.e == otazka.odpoved)
                document.getElementById("ee").style.backgroundColor = 'LightGreen';

            document.getElementById("check").innerHTML = '<p style="color:red">Špatně!</p>' +
                'Správná odpověď je: ' + otazka.odpoved;
            spatne++;
            spatneOtazky.push(otazka);
        }
    } else if (document.getElementById("c").checked == true) {
        if (otazka.c == otazka.odpoved) {
            document.getElementById("check").innerHTML = '<p style="color:green">Správná odpověď</p>';
            spravne++;
        } else {
            document.getElementById("cc").style.backgroundColor = 'LightCoral';
            if (otazka.a == otazka.odpoved)
                document.getElementById("aa").style.backgroundColor = 'LightGreen';
            else if (otazka.b == otazka.odpoved)
                document.getElementById("bb").style.backgroundColor = 'LightGreen';
            else if (otazka.d == otazka.odpoved)
                document.getElementById("dd").style.backgroundColor = 'LightGreen';
            else if (otazka.e == otazka.odpoved)
                document.getElementById("ee").style.backgroundColor = 'LightGreen';

            document.getElementById("check").innerHTML = '<p style="color:red">Špatně!</p>' +
                'Správná odpověď je: ' + otazka.odpoved;
            spatne++;
            spatneOtazky.push(otazka);
        }
    } else if (document.getElementById("d").checked == true) {
        if (otazka.d == otazka.odpoved) {
            document.getElementById("check").innerHTML = '<p style="color:green">Správná odpověď</p>';
            spravne++;
        } else {
            document.getElementById("dd").style.backgroundColor = 'LightCoral';
            if (otazka.a == otazka.odpoved)
                document.getElementById("aa").style.backgroundColor = 'LightGreen';
            else if (otazka.b == otazka.odpoved)
                document.getElementById("bb").style.backgroundColor = 'LightGreen';
            else if (otazka.c == otazka.odpoved)
                document.getElementById("cc").style.backgroundColor = 'LightGreen';
            else if (otazka.e == otazka.odpoved)
                document.getElementById("ee").style.backgroundColor = 'LightGreen';

            document.getElementById("check").innerHTML = '<p style="color:red">Špatně!</p>' +
                'Správná odpověď je: ' + otazka.odpoved;
            spatne++;
            spatneOtazky.push(otazka);
        }
    } else if (document.getElementById("e").checked == true) {
        if (otazka.e == otazka.odpoved) {
            document.getElementById("check").innerHTML = '<p style="color:green">Správná odpověď</p>';
            spravne++;
        } else {
            document.getElementById("ee").style.backgroundColor = 'LightCoral';
            if (otazka.a == otazka.odpoved)
                document.getElementById("aa").style.backgroundColor = 'LightGreen';
            else if (otazka.b == otazka.odpoved)
                document.getElementById("bb").style.backgroundColor = 'LightGreen';
            else if (otazka.c == otazka.odpoved)
                document.getElementById("cc").style.backgroundColor = 'LightGreen';
            else if (otazka.d == otazka.odpoved)
                document.getElementById("dd").style.backgroundColor = 'LightGreen';

            document.getElementById("check").innerHTML = '<p style="color:red">Špatně!</p>' +
                'Správná odpověď je: ' + otazka.odpoved;
            spatne++;
            spatneOtazky.push(otazka);
        }
    } else {
        if (otazka.a == otazka.odpoved)
            document.getElementById("aa").style.backgroundColor = 'LightGreen';
        else if (otazka.b == otazka.odpoved)
            document.getElementById("bb").style.backgroundColor = 'LightGreen';
        else if (otazka.c == otazka.odpoved)
            document.getElementById("cc").style.backgroundColor = 'LightGreen';
        else if (otazka.d == otazka.odpoved)
            document.getElementById("dd").style.backgroundColor = 'LightGreen';
        else if (otazka.e == otazka.odpoved)
            document.getElementById("ee").style.backgroundColor = 'LightGreen';

        document.getElementById("check").innerHTML = '<p style="color:red">Špatně!</p>' +
            'Správná odpověď je: ' + otazka.odpoved;
        spatne++;
        spatneOtazky.push(otazka);
    }

    if (otazky.length > n) {
        odpovezene.push(x);
        n++;

        //document.getElementById("end").style.visibility = 'hidden';
        //document.getElementById("dalsi").style.visibility = 'visible';
    }

    document.getElementById("end").value = "Další";
    document.getElementById("end").onclick = nactiOtazku;

    /*else{
     document.getElementById("form").remove();
     document.getElementById("otazkaCislo").remove();;
     document.getElementById("check").innerHTML = '<p>Správných odpovědí: ' + spravne + '</p>' + 
     '<p>Špatných odpovědí: ' + spatne + '</p>'
     }*/
}

async function zalozOtazky() {
    let res = await fetch('data.json');
    let data = await res.json();
    data.Table.map(d => {
        pridejOtazku(d["Value #2"], d["Value #3"], d["Value #4"], d["Value #5"], d["Value #6"], d["Value #7"])
    });
}

function pridejOtazku(otazka, a, b, c, d, e) {
    let arr = [a, b, c, d, e];
    arr = shuffle(arr);

    let q = {
        otazka: otazka,
        a: arr[0],
        b: arr[1],
        c: arr[2],
        d: arr[3],
        e: arr[4],
        odpoved: correctedHtmlString(a)
    };

    otazky.push(q);
}

function shuffle(input) {
    let array = [];
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        array.push(correctedHtmlString(element));
    }

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

function correctedHtmlString(value) {
    let pattern1 = /(<\s*)/g;
    let pattern2 = /(\s*>)/g;
    return value.replace(pattern1, '≺').replace(pattern2, ' ≻')
}