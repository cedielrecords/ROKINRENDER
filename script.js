const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

function resizeCanvas(){
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const letters = "未来都市建築設計速度光空間";
const fontSize = 14;

const columns = Math.floor(canvas.width / fontSize);

const drops = [];

for(let i = 0; i < columns; i++){
drops[i] = Math.random() * canvas.height;
}

function draw(){

ctx.fillStyle = "rgba(0,0,0,0.08)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle = "#ff2ea6";
ctx.font = fontSize + "px monospace";

for(let i = 0; i < drops.length; i++){

const text = letters[Math.floor(Math.random() * letters.length)];

ctx.fillText(text, i * fontSize, drops[i]);

drops[i] += fontSize;

if(drops[i] > canvas.height && Math.random() > 0.975){
drops[i] = 0;
}

}

}

setInterval(draw, 40);

