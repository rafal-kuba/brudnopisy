var wiersz1 = ["Ja chcę powiedzieć jedną rzecz:", "Trzeba powiedzieć jasno:", "Jak powiedział wybitny krakowianin Stanisław Lem,", "Proszę mnie dobrze zrozumieć: ", "Ja chciałem państwu przypomnieć, że", "Niech państwo nie mają złudzeń:", "Powiedzmy to wyraźnie:"];

var wiersz2 = ["przedstawiciele czerwonej hołoty", "ci wszyscy (tfu!) geje", "funkcjonariusze reżymowej telewizji", "tak zwani ekolodzy", "ci wszyscy (tfu!) demokraci", "agenci bezpieki", "feminaziski"];

var wiersz3 = ["zupełnie bezkarnie", "całkowicie bezczelnie", "o poglądach na lewo od komunizmu", "celowo i świadomie", "z premedytacją", "od czasów Okrągłego Stołu", "w ramach postępu"];

var wiersz4 = ["nawołują do podniesienia podatków", "próbują wyrzucić kierowców z miast", "próbują skłócić Polskę z Rosją", "głoszą brednię o globalnym ociepleniu", "zakazują posiadania broni", "nie dopuszczają prawicy do władzy", "uczą dzieci homoseksualizmu"];

var wiersz5 = ["bo dzięki temu mogą kraść", "bo dostają za to pieniądze", "bo tak się uczy w państwowej szkole", "bo bez tego (tfu!) demokracja nie może istnieć", "bo głupich jest więcej niż mądrych", "bo chcą tworzyć raj na ziemi", "bo chcą niszczyć cywilizację białego człowieka"];

var wiersz6 = ["przez kolejne kadencje", "o czym się nie mówi", "i właśnie dlatego Europa umiera", "ale przyjdą muzułmanie i zrobią porządek", "- tak samo zresztą jak za Hitlera", "- proszę zobaczyć, co siędzieje na Zachodzie, jeśli mi państwo nie wierzą", "co lat temu sto nikomu by nie przyszło do głowy"];

function Phrase(){
    var word1 = Math.floor(Math.random() * wiersz1.length);
    var word2 = Math.floor(Math.random() * wiersz2.length);
    var word3 = Math.floor(Math.random() * wiersz3.length);
    var word4 = Math.floor(Math.random() * wiersz4.length);
var zdanie = `${wiersz1[word1]} ${wiersz2[word2]} ${wiersz3[word3]} ${wiersz4[word4]}`;
alert(zdanie);
}

var text = document.getElementById("korwin");

var write = function(){
document.getElementById("przycisk").addEventListener("click", function(){
    var word1 = Math.floor(Math.random() * wiersz1.length);
    var word2 = Math.floor(Math.random() * wiersz2.length);
    var word3 = Math.floor(Math.random() * wiersz3.length);
    var word4 = Math.floor(Math.random() * wiersz4.length);
    var word5 = Math.floor(Math.random() * wiersz5.length);
    var word6 = Math.floor(Math.random() * wiersz6.length);
    
    var zdanie = `${wiersz1[word1]} ${wiersz2[word2]} ${wiersz3[word3]} ${wiersz4[word4]} ${wiersz5[word5]} ${wiersz6[word6]}`;
    
    text.innerHTML = zdanie;
})
}
write();