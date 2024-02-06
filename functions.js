function toggle(el){
closeModal()
modal = "content";
if(opened != ""){
opened.style.opacity= 0;
opened.style.display= 'none';
}

if(state == 0){
el.style.opacity= 1
el.style.display = 'block';
opened = el;
state = 1;
}else{
el.style.opacity = 0;
el.style.display= 'none';
state = 0;
}
}

function closeModal(){
if(modal != ""){
let md = document.getElementById(modal)
md.style.display = 'none'
}
}

const prep = function(element, outt, indicator){
 for(el of element){
el.onclick = function(){

if(indicator != "r"){
outt.innerHTML = outt.innerHTML.replace(/ text;/g, ";\n-webkit-background-clip: text;");
outt.innerHTML+= this.innerText+"\n";
}
this.parentElement.style.display = 'none';
if(indicator != "r"){
toSelect()
}
selectElement();
justNow = outt;
justNow.style.opacity = "1"
localStorage.setItem("len", len)
localStorage.setItem("iC", idCounter)
localStorage.setItem("cC", classCounter)
localStorage.setItem("saved", main.innerHTML.replace(/ text;/g, ";\n-webkit-background-clip: text;"));
}
}
}

function printInfo(info) {
let op =   document.querySelector(".cp1");

op.textContent = info;
op.style.opacity= '0';
op.style.display = 'block';
 
 setTimeout(() => {
 op.style.opacity = '1';
 }, 10);
 setTimeout(() => {
 op.style.opacity = '0';
}, 2000);
}



function appendStyle(innertext, attr, type, i, a){
closeModal()
modal = style1.id;
attribute = attr
style1.innerHTML = lowerContent[i];

let input = style1.querySelectorAll("*")[1]

if(type == "style"){
input.value = selected[len].style[attribute];
}else{
input.value = selected[len][attribute];
}

let h2 = style1.querySelector("h2")
h2.innerText = innertext
style1.style.display= "block";
if(a == 1){
reg()
}else{
reg1()
} 
}


function prepCode() {
 showEls();
let els= main.querySelectorAll("*");
base = main.innerHTML;
styles = ""
let lenn = els.length;
for(j=0; j<lenn; j++){
base = base.replaceAll('class="'+els[j].className+'"', '')
base = base.replaceAll('id="'+els[j].id+'"', '')
base = base.replaceAll('type="'+els[j].type+'"', '')
base = base.replaceAll('min="'+els[j].min+'"', '')
base = base.replaceAll('max="'+els[j].max+'"', '')
base = base.replaceAll('value="'+els[j].value+'"', '')
base = base.replaceAll('href="'+els[j].href+'"', '')
base = base.replaceAll('src="'+els[j].src+'"', '')
base = base.replaceAll('controls=""', '')
styles+= elementStyle(els[j]);
styles = styles.replaceAll("undefined", "")
styles = styles.replaceAll("&quot;", "")
styles = styles.replaceAll("background-position: initial;\nbackground-size: initial;\nbackground-repeat: initial;\nbackground-attachment: initial;\nbackground-origin: initial;\nbackground-color: initial;", "")
}


for(i in els){
els[i].style=""   
}
  
}

function toSelect(){
selected = [].slice.call(main.querySelectorAll("*"));
len = (selected.length-1);
selected[len].className = "el"+classCounter;
selected[len].id = idCounter;
selected[len].style.textAlign= "center";
selected[len].style.transform = "translate(0px,0px)";
selected[len].style.transition = ".3s";

fadeEls()
selected[len].style.opacity = "1"

idCounter++;
classCounter++;
}




function fadeEls(){
let els = main.querySelectorAll("*")
for(j of els){
j.style.opacity = 0.3;
} 
}

function showEls(){
let els = main.querySelectorAll("*")
for(j of els){
j.style.opacity = 1;
}    
}

function reg(){
let inn = style1.querySelector("#in");
let done = style1.querySelector("#done");

inn.oninput = function() {
selected[len][attribute]= this.value;
}

done.onclick = function(){
localStorage.setItem("len", len)
localStorage.setItem("iC", idCounter)
localStorage.setItem("cC", classCounter)
localStorage.setItem("saved", main.innerHTML) 
style1.style.display= 'none'

}
}

function reg1(){
let inn = style1.querySelector("#in");
let done = style1.querySelector("#done");

inn.oninput = function() {
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

function elementStyle(el){
let txt = "\n\n .el"+el.id+"{\n"
let ini = strBetween(base, 'style="', '"')
txt+= ini;
txt= txt.replaceAll("; ", ";\n")
base = base.replaceAll("opacity: 1;", "")
base = base.replace('style="', '')
base = base.replace('"', '')
txt+= "\n}"
txt = txt.replace("\n", "")
txt = txt.replace(/ text;/, ";\n-webkit-background-clip: text;");
return txt;
}


function strBetween(str, f, s){
let out = "";
let indexF = str.indexOf(f);
str = str.replace(f, "")
let indexS = str.indexOf(s);
out= str.slice(indexF, indexS);

return out;
}

function selectElement(){
let els = main.querySelectorAll("*");
for(s in els){
els[s].ondblclick = function(event){
if(this.parentElement.id != "main") {
event.stopPropagation()
}
fadeEls()
if(this.parentElement.id != "main") {
this.parentElement.style.opacity = "1" 
}
this.style.opacity = "1"
len = parseInt(this.getAttribute("id"))
selected[len] = this;
}
}
}


async function writeClipboard(text){
let cp = document.querySelector(".cp");
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    alert(error.message);
  }
  
  if(text == ""){
 cp.textContent = "Nothing to copy"
 cp.style.transform = "translate(70px,-100px)"
  }else{
cp.textContent = "Copied"
cp.style.transform = "translate(100px, -100px)"
  }
  
  cp.style.opacity= '0';
 cp.style.display = 'block';
 
 setTimeout(() => {cp.style.opacity = '1';}, 10);
 setTimeout(() => {
 cp.style.opacity = '0';
}, 2000);

}

function helper(){
 for(i in pre){
 pre[i].innerText= upperContent[i];
 }
  prep(pre, main, "r");
}

const uploadImage = function(input, output){
input.addEventListener('change', function(){
    if (this.files && this.files[0]) {
        URL.revokeObjectURL(output.src);
      output.src = URL.createObjectURL(this.files[0]);
    main.appendChild(output);
  
  toSelect();
  selectElement();
  localStorage.setItem("saved", main.innerHTML)
    }
  });  
}


function gradientify(el, condition){
if(condition){
el.style["-webkit-text-fill-color"] = "transparent";
el.style["-webkit-background-clip"] = "text";
}else{
el.style["-webkit-text-fill-color"] = "";
el.style["-webkit-background-clip"] = "";
}
}
