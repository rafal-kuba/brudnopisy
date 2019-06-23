<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>


var wiersz1 = ["Ja chcę powiedzieć jedną rzecz:", "Trzeba powiedzieć jasno:", "Jak powiedział wybitny krakowianin Stanisław Lem,", "Proszę mnie dobrze zrozumieć: ", "Ja chciałem państwu przypomnieć, że", "Niech państwo nie mają złudzeń:", "Powiedzmy to wyraźnie:", 1];

var wiersz2 = ["przedstawiciele czerwonej hołoty", "ci wszyscy (tfu!) geje", "funkcjonariusze reżymowej telewizji", "tak zwani ekolodzy", "ci wszyscy (tfu!) demokraci", "agenci bezpieki", "feminaziski", 1];

var wiersz3 = ["zupełnie bezkarnie", "całkowicie bezczelnie", "o poglądach na lewo od komunizmu", "celowo i świadomie", "z premedytacją", "od czasów Okrągłego Stołu", "w ramach postępu", 1];

function Phrase(){
    var word1 = Math.floor(Math.random() * wiersz1.length);
    var word2 = Math.floor(Math.random() * wiersz2.length);
    var word3 = Math.floor(Math.random() * woersz3.length);

var zdanie = `${wiersz1[word1]} ${wiersz2[word2]} ${wiersz3[word3]}`;
alert(zdanie);
}

Phrase();


</body>
</html>