const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

let fontSize = 14;
let columns;
let drops = [];

const letters = "未来都市建築設計速度光空間";

function setup(){

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

columns = Math.floor(canvas.width / fontSize);

drops = [];

for(let i = 0; i < columns; i++){
drops[i] = Math.random() * canvas.height;
}

}

window.addEventListener("resize", setup);

setup();

function draw(){

ctx.fillStyle = "rgba(0,0,0,0.08)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle = "#ff2bd6";
ctx.font = fontSize + "px monospace";

for(let i = 0; i < drops.length; i++){

const text = letters[Math.floor(Math.random() * letters.length)];

ctx.fillText(text, i * fontSize, drops[i]);

drops[i] += fontSize;

if(drops[i] > canvas.height && Math.random() > 0.975){
drops[i] = 0;
}

}

requestAnimationFrame(draw);

}

draw();