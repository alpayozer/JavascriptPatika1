let isim = prompt("Lütfen adınızı giriniz");
document.querySelector("#name").innerHTML = isim;


function tarihSaat() {
    var days = ["Pazar","Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
var day = new Date().getDay();
var hours = new Date().getHours();
var minutes = new Date().getMinutes();
var seconds = new Date().getSeconds();
document.querySelector("#clock").innerHTML = hours + ":" + minutes + ":" + seconds;
document.querySelector("#day").innerHTML = days[day];
}
// her 1 saniyede tarihSaat fonksiyonunu yeniden çalıştır
setInterval(tarihSaat, 1000); 
/*var days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi","Pazar"];
var day = new Date().getDay();
var hours = new Date().getHours();
var minutes = new Date().getMinutes();
var seconds = new Date().getSeconds();
document.querySelector("#clock").innerHTML = hours + ":" + minutes + ":" + seconds;
document.querySelector("#day").innerHTML = days[day];*/