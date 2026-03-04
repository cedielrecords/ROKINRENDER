const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "未来都市建築設計速度光空間";
const fontSize = 12;

const columns = canvas.width / fontSize;

const drops = [];

for(let x=0;x<columns;x++){
drops[x]=Math.random()*canvas.height;
}

function draw(){

ctx.fillStyle="rgba(0,0,0,0.08)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#ff2ea6";
ctx.font=fontSize+"px monospace";

for(let i=0;i<drops.length;i++){

const text = letters[Math.floor(Math.random()letters.length)];

ctx.fillText(text,ifontSize,drops[i]);

drops[i]+=fontSize;

if(drops[i] > canvas.height){
drops[i]=0;
}

}

}

setInterval(draw,40);