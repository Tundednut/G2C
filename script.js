$(document).ready(function(){
const height = window.innerHeight;
const upper = $('#upper');
const upperRow = $('#upper-row');
const main = $('#main');
const low = $('#low');
const lslider = $('#ls');
const h1 = (11.9284294*height)/100;
const h2 = ((68.1908549*height)/100)-2;
const sliderh = (7*height)/100;
const style1 = $("#style1")
const colorIcon = $("#color")
const all = document.getElementById("main").querySelectorAll("*")
upper.css('height', h1);
upperRow.css('height', h1);
main.css('height', h2);
low.css('height', h1);
lslider.css('height', sliderh);
style1.css('height', h1+sliderh+12)
});
