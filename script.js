/* MATRIX BACKGROUND */

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

function resizeCanvas(){
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const letters = "未来都市速度光";
const fontSize = 16;
let columns = canvas.width / fontSize;

const drops = [];

for(let i=0;i<columns;i++){
drops[i]=1;
}

function draw(){

ctx.fillStyle="rgba(0,0,0,0.05)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#ff2ea6";
ctx.font=fontSize+"px monospace";

for(let i=0;i<drops.length;i++){

const text = letters[Math.floor(Math.random()letters.length)];

ctx.fillText(text,ifontSize,drops[i]*fontSize);

if(drops[i]fontSize > canvas.height && Math.random() > 0.975){
drops[i] = 0;
}

drops[i]++;

}

}

setInterval(draw,33);


/ RANDOM GLITCH EFFECT */

setInterval(()=>{

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

if(Math.random()<0.15){

card.style.opacity="0.6";

setTimeout(()=>{
card.style.opacity="1";
},120);

}

});

},1500);