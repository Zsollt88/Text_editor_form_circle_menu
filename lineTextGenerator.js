//charAt-gomb
function egyKarakter() {
    let manipulalandoSzoveg = document.getElementById('foSzoveg').value;
    let egyKarakterSzoveg = manipulalandoSzoveg.charAt(document.getElementById('charAtParametere').value); //charAt(bármilyen szám) működik azt kellene megoldani, hogy a felhasználó adja meg a számot, MEGOLDOTTAM MŰKÖDIK, valami el volt írva
    document.getElementById('eredmenyMegjelenito').innerHTML = '<b> ' + egyKarakterSzoveg + '</b>';

}
//concat
function hozzafuz() {
    let manipulalandoSzoveg = document.getElementById('foSzoveg').value;
    let pluszSzoveg = manipulalandoSzoveg.concat(' ' + document.getElementById('hozzaFuz').value);
    document.getElementById('eredmenyMegjelenito').innerHTML = '<b> ' + pluszSzoveg + '</b>';

}
//repeat
function ismetlo() { //nem tetszett a JS-nek vagy a HTML-nek, hogy a függvénynév és az input name tulajdonságánál ugyanazt (ismetlo) használtam!!
    let manipulalandoSzoveg = document.getElementById('foSzoveg').value;
    let ismetloSzoveg = manipulalandoSzoveg.repeat(document.getElementById('repeatParametere').value);
    document.getElementById('eredmenyMegjelenito').innerHTML = '<b> ' + ismetloSzoveg + '</b>';

}
//replace
function cserelo() {
    let manipulalandoSzoveg = document.getElementById('foSzoveg').value;
    let csereloSzoveg = manipulalandoSzoveg.replace(document.getElementById('csereBere1').value,
        document.getElementById('csereBere2').value);
    document.getElementById('eredmenyMegjelenito').innerHTML = '<b> ' + csereloSzoveg + '</b>';

}
//substr
function vagas() {
    let manipulalandoSzoveg = document.getElementById('foSzoveg').value;
    let vagottSzoveg = manipulalandoSzoveg.substr(document.getElementById('kivago1').value,
        document.getElementById('kivago2').value);
    document.getElementById('eredmenyMegjelenito').innerHTML = '<b> ' + vagottSzoveg + '</b>';

}
//camelCaseGenerator
function camelCaseGenerator() {

    let manipulalandoSzovegDarabok = document.getElementById('foSzoveg').value.split(' '); //new Array-al nem működött
    let camelCaseSzoveg = '';
    for (let i = 0; i < manipulalandoSzovegDarabok.length; i++) { //let kellett, hozzá, hogy letárolja a változót, ezért állt meg az első szóközönél
        if (i == 0) {
            camelCaseSzoveg += manipulalandoSzovegDarabok[0].toLowerCase();
        } else {
            camelCaseSzoveg += capitalize(manipulalandoSzovegDarabok[i]);
        }

    }
    document.getElementById('eredmenyMegjelenito').innerHTML = '<b> ' + camelCaseSzoveg + '</b>';
}

function capitalize(bemenetiSzoveg) { //V1_csak egy darabig futott le, V2_a második szóköznél akad el, 
    let capitalizedSzoveg = '';
    for (let i = 0; i < bemenetiSzoveg.length; i++) { //let kellett, hozzá, hogy letárolja a változót, ezért állt meg az első szóközönél
        if (i == 0) {
            capitalizedSzoveg += bemenetiSzoveg[0].toUpperCase();
        } else {
            capitalizedSzoveg += bemenetiSzoveg[i].toLowerCase();
        }
    }
    return capitalizedSzoveg; //ez nyilván kell, nélküle nem jön ki semmi a capitalize függvényből
}
//Játék
function kereso() {
    let megoldasAJatekhoz = ['próbáld'];
    //let aJatekosTippje = document.getElementById('jatek').value;
    let kereses = megoldasAJatekhoz.includes(document.getElementById('jatek').value);
    if (kereses == true) {
        document.getElementById('eredmenyMegjelenito').innerHTML = '<b>Helyes válasz, az erő veled van!</b>'
    } else {
        document.getElementById('eredmenyMegjelenito').innerHTML = '<b>Sokat kell még tanulnod ifjú Jedi lovag!;)</b> '
    }

}