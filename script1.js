const upperContent = ["<h1>New Text</h1>", "<h2>New Text</h2>", "<h3>New Text</h3>", "<h4>New Text</h4>", "<h5>New Text</h5>", "<h6>New Text</h6>", "<p>Paragraph</p>", "<input type='text'>", "<input type='number'>", "<input type='password'>", "<input type='file'>", "<textarea></textarea>", "<button>Button</button>","<video controls></video>",   "<def>Def</def>", "<img src='#'>", "<div>Div</div>", "<a href=''>Link</a>", "<i>Icon</i>", "<span>Span</span>", "<form>Form</form>", "<header>Header</header>", "<section>Section</section>", "<article>Article</article>", "<footer>Footer</footer>", "<iframe>Iframe</iframe>", "<sup>Superscript</sup>", "<sub>Subscript</sub>", "<cite>Cite</cite>", "<center>Center</center>", "<strong>Strong</strong>", "<b>Bold</b>", "<strike>Strike</strike>"];


const upperFun = [{fun: function(){ for(i in pre){ pre[i].innerText= upperContent[i]; } toggle(content); }}, {fun: function(){ showEls();} }];

const lowerContent = ["<h2>InnerText</h2> <textarea id=\"in\"></textarea><button id=\"done\"><span class='fa fa-check-circle'></span> Done</button>", "<h2></h2><input type=\"range\" id=\"in\" min=\"1\" max=\"900\"><button id=\"done\"><span class='fa fa-check-circle'></span> Done</button>", "<h2></h2> <select  id=\"inn\"><option value=\"static\">Static</option><option value=\"absolute\">Absolute</option><option value=\"relative\">Relative</option><option value=\"sticky\">Sticky</option><option value=\"fixed\">Fixed</option></select> <button id=\"done\"><span class='fa fa-check-circle'></span> Done</button>"];

const shapes = [];

const upperRow = document.querySelector('#upper-row');
const main = document.querySelector("#main");
const content = document.querySelector('.content');
const pre = document.querySelectorAll('.content > pre');

const lower = document.querySelector("#ls");
const style1 = document.querySelector("#style1");
const warning= document.querySelector("#warning");
const upperI = upperRow.getElementsByTagName('span');
const lowerI = lower.getElementsByTagName('span');
const codec = document.querySelector("#codec");
const upload = document.getElementById("upload");

var attribute, len = 0, selected, state = 0, before, opened= "", classCounter = 0, idCounter = 0, justNow, base, styles, modal = "";

window.onload = function(){
let html= localStorage.getItem("saved").replace(/ text;/g, ";\n-webkit-background-clip: text;");
main.innerHTML = html;
helper()
setTimeout(()=> selectElement(), 20)
let code = document.querySelector("#code");

code.innerText = "";

let sels = [].slice.call(main.querySelectorAll("*"));
selected = sels;
for(i of selected){
i.style.transition = ".3s"
i.style.opacity = "1"
i.src = ""
}
len = (localStorage.getItem("len") != null)? localStorage.getItem("len") : 0;
classCounter = (localStorage.getItem("cC") != null)? localStorage.getItem("cC") : 0;
idCounter = (localStorage.getItem("iC") != null)? localStorage.getItem("iC") : 0;

if(html === null || html === ""){
len = 0;
idCounter = 0;
classCounter = 0;
}

}





upperI[0].ontouchstart = function(){
if(pre[0].innerText != undefined){
upperFun[0].fun()
}

prep(pre, main, "")
}

upperI[1].ontouchstart = function(){
upperFun[1].fun()
localStorage.setItem("bugel", bugEl)
localStorage.setItem("len", len)
localStorage.setItem("iC", idCounter)
localStorage.setItem("cC", classCounter)
localStorage.setItem("saved", main.innerHTML)
showEls()
}

upperI[2].ontouchstart = function(){
showEls();
let els= main.querySelectorAll("*");
base = main.innerHTML;
styles = "";
let ic= document.querySelectorAll(".icon");
let bgi = document.querySelectorAll(".bgi");
let code = document.querySelector("#code");
let b1 = codec
let lenn = els.length;
closeModal()
modal = codec.id;
prepCode();
codec.style.display = 'block'
main.style.filter = "blur(10px)";
main.innerHTML = main.innerHTML.trim();
code.innerText = main.innerHTML;


bgi[0].style.background = "#B400FF"
ic[0].style.color = "white"
bgi[1].style.background = "white"
ic[1].style.color = "#B400FF"

bgi[0].onclick = function(){
for(i in els){
els[i].style = ""
}
code.innerText = (main.innerHTML.trim() != "")? main.innerHTML : "";
this.style.background = "#B400FF"
ic[0].style.color = "white"
bgi[1].style.background = "white"
ic[1].style.color = "#B400FF"
}

bgi[1].onclick = function() {
code.innerText = (styles != "")? styles : "";
this.style.background = "#B400FF"
ic[1].style.color = "white"
bgi[0].style.background = "white"
ic[0].style.color = "#B400FF"
}

hideCode.onclick = function() {

for(el of els){
el.style.transition = ".3s";
}
codec.style.display = 'none';
main.style.filter = "blur(0px)";
main.innerHTML = localStorage.getItem("saved").replace(/ text;/g, ";\n-webkit-background-clip: text;");
showEls();
selectElement();
}

copy.onclick = () => {
writeClipboard(code.innerText);
}
}

upperI[3].ontouchstart = function(){
let btn = warning.querySelector("button")
let i = warning.querySelector("i")
i.onclick = function(){
warning.style.display = 'none' 
}

btn.onclick = function(){
selected[len].remove()
warning.style.display = 'none';
localStorage.setItem("len", len)
localStorage.setItem("iC", idCounter)
localStorage.setItem("cC", classCounter)
localStorage.setItem("saved", main.innerHTML)
}
closeModal()
modal = warning.id;
warning.style.display= "block"
selectElement(); 

}

upperI[4].ontouchstart = function(){

let clone = selected[len].cloneNode(true);
let parent = selected[len].parentElement;
fadeEls();
clone.style.opacity = "1";
clone.id = idCounter;
clone.className = "el"+classCounter;
parent.appendChild(clone);

selectElement()

idCounter++;
classCounter++;
localStorage.setItem("len", len)
localStorage.setItem("iC", idCounter)
localStorage.setItem("cC", classCounter)
localStorage.setItem("saved", main.innerHTML)
}

upperI[5].ontouchstart = function(){
printInfo("Oops!, feature not yet added")  
}   

upperI[6].ontouchstart = function(){
printInfo("Oops!, feature not yet added")  
}

upperI[7].ontouchstart = function(){
printInfo("Oops!, feature not yet added")      
}


upperI[8].ontouchstart = function(){
let els = main.querySelectorAll("*");
let regex = /^[a-zA-Z]{1,}[0-9]*\.html$/;
let d = document.querySelector("#download");
let input = d.querySelector("input");
let b1 = d.querySelectorAll("button")[0];
let b2 = d.querySelectorAll("button")[1];

let first = "<!DOCTYPE html>\n<html lang='en'>\n<head>\n<meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>\n<meta name='viewport' content='width=device-width, initial-scale=1.0'>\n<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>\n<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/boxicons/2.1.4/css/boxicons.min.css'>\n<style>\n";

let validated = false;
d.style.display = "block";

main.style.filter = "blur(10px)";

input.oninput = ()=>{
if(regex.test(input.value) === false){
input.style.border = "2px solid red"
validated = false;
}else{
input.style.border = "2px solid #00D705"
validated = true;
}
}

b2.onclick = function() {
d.style.display = "none"
main.innerHTML = localStorage.getItem("saved").replace(/ text;/g, ";\n-webkit-background-clip: text;");
for(el of els){
el.style.transition = ".3s"
}

main.style.filter = "blur(0px)";
selectElement()

}


b1.onclick = function(){
let xml = (main.innerHTML)
let fileContent = first+styles+"\n</style>\n</head>\n<body>\n"+(xml)+"\n</body>\n</html>";
if(validated) {
let link = document.createElement("a");
let file1 = new Blob([fileContent], { type: 'text/html' });
link.href = URL.createObjectURL(file1);
link.download = input.value;
link.click();
URL.revokeObjectURL(link.href);
main.style.filter = "blur(0px)";
d.style.display = "none"  
} else {
printInfo("Invalid HTML filename")
}

for(el of els){
el.style.transition = ".3s"
}
main.innerHTML = localStorage.getItem("saved").replace(/ text;/g, ";\n-webkit-background-clip: text;");
selectElement()

}
prepCode();
}

upperI[9].ontouchstart = function(){
printInfo("Oops!, feature not yet added")      
}


lowerI[0].onclick= () => appendStyle("InnerText", "innerText", "", 0, 1);

lowerI[1].onclick= () =>{
upperFun[0].fun()
prep(pre, selected[len], "")
}

lowerI[2].onclick = () => appendStyle("Width", "width", "style", 0, 0);

lowerI[3].onclick = () => appendStyle("Height", "height", "style", 0, 0);

lowerI[4].onclick = () =>{
closeModal()
modal = style1.id; 
attribute = "color"
style1.innerHTML = lowerContent[0];

let input = style1.querySelectorAll("*")[1]

input.value = selected[len].style[attribute]

let h2 = style1.querySelector("h2")
h2.innerText = "Color"
style1.style.display= "block";


let done = style1.querySelector("#done");

if(selected[len].style["background"] != "" && selected[len].style["color"] == ""){
input.value = selected[len].style["background"];
}else{
input.value = selected[len].style["color"]
}

input.oninput = function() {
if(input.value.includes("linear-gradient")){
selected[len].style["background"] = this.value;
gradientify(selected[len], true)
}else{
gradientify(selected[len], false)
selected[len].style[attribute] = this.value;
}
}

done.onclick = function(){
localStorage.setItem("len", len)
localStorage.setItem("iC", idCounter)
localStorage.setItem("cC", classCounter)
localStorage.setItem("saved", main.innerHTML)
style1.style.display= 'none'    
}
 
}

lowerI[5].onclick = () =>{
closeModal()
modal = style1.id; 
attribute = "background"
style1.innerHTML = lowerContent[0];

let input = style1.querySelectorAll("*")[1]

input.value = selected[len].style[attribute]

let h2 = style1.querySelector("h2")
h2.innerText = "Background"
style1.style.display= "block";


let done = style1.querySelector("#done");

if(selected[len].style["background"] != ""){
input.value = selected[len].style["background"];
}
else if(selected[len].style["background-image"] != ""){
input.value = selected[len].style["background-image"];
}else{
input.value = selected[len].style["background-color"]
}

input.oninput = function() {
selected[len].style[attribute] = this.value;
}

done.onclick = function(){
localStorage.setItem("len", len)
localStorage.setItem("iC", idCounter)
localStorage.setItem("cC", classCounter)
localStorage.setItem("saved", main.innerHTML)
style1.style.display= 'none'    
}
}

lowerI[6].onclick = () => appendStyle("Translate(x,y)", "transform", "style", 0, 0);

lowerI[7].onclick = () => appendStyle("Border", "border", "style", 0, 0);

lowerI[8].onclick = () => appendStyle("Border-radius", "borderRadius", "style", 0, 0);

lowerI[9].onclick = () => appendStyle("Outline", "outline", "style", 0, 0);


lowerI[10].onclick = () => appendStyle("Font-family", "fontFamily", "style", 0, 0);

lowerI[11].onclick = () => appendStyle("Font-size", "fontSize", "style", 0, 0);

lowerI[12].onclick = () => appendStyle("Font-weight", "fontWeight", "style", 1, 0);

lowerI[13].onclick = () => appendStyle("Rotate", "rotate", "style", 0, 0);

lowerI[14].onclick = () => appendStyle("Type", "type", "", 0, 1);

lowerI[15].onclick = () => appendStyle("Shadow", "boxShadow", "style", 0, 0);


lowerI[16].onclick = () => appendStyle("Text-shadow", "textShadow", "style", 0, 0); 

lowerI[17].onclick = () =>{
let str;
attribute = "className"
style1.innerHTML = lowerContent[0];

let input = style1.querySelectorAll("*")[1]

input.value = selected[len][attribute];

let h2 = style1.querySelector("h2")
h2.innerText = "Class-name"
style1.style.display= "block";

done.onclick = function(){
localStorage.setItem("len", len)
localStorage.setItem("iC", idCounter)
localStorage.setItem("cC", classCounter)
localStorage.setItem("saved", main.innerHTML) 
style1.style.display= 'none'
selected[len].className = "el"+selected[len].id+" "+input.value;
}  
}

lowerI[18].onclick = () => appendStyle("Text-align", "textAlign", "style", 0, 0);


lowerI[19].onclick = () =>{
attribute = "position"
style1.innerHTML = lowerContent[2];

let input = style1.querySelectorAll("*")[1]

input.value = selected[len].style[attribute];

let h2 = style1.querySelector("h2")
h2.innerText = "Position"
style1.style.display= "block";

done.onclick = function(){
localStorage.setItem("len", len)
localStorage.setItem("iC", idCounter)
localStorage.setItem("cC", classCounter)
localStorage.setItem("saved", main.innerHTML) 
style1.style.display= 'none'
}

input.onchange = function () {
selected[len].style[attribute] = input.value; 
}
}

lowerI[20].onclick = () => appendStyle("Padding", "padding", "style", 0, 0);

lowerI[21].onclick= () => appendStyle("Src", "src", "", 0, 1);
