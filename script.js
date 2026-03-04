// Pega aquí las URLs de tus videos de YouTube
// Ejemplos de formato válido:
// - https://www.youtube.com/watch?v=XXXXXXXXXXX
// - https://youtu.be/XXXXXXXXXXX
const youtubeVideos = [
  "https://www.youtube.com/watch?v=XXXXXXXXXXX",
  "https://youtu.be/YYYYYYYYYYY"
  https://youtu.be/9xNrNO7d7fc
https://youtu.be/2kovHZmMM3Y
https://youtu.be/DYYYPnJRFM8
https://youtu.be/VhxzUtWtCB4
https://youtu.be/OGT8tvaOQNk
https://youtu.be/EIJuO5EX7As
https://youtu.be/0JBDS1Qja0I
https://youtu.be/MJcvPYhIhtQ
https://youtu.be/GiBVvw2hMD4

  // añade los que quieras
];

// Saca el ID del video desde distintas formas de URL
function extractVideoId(url) {
  try {
    const u = new URL(url);
    // https://www.youtube.com/watch?v=ID
    if (u.searchParams.get("v")) {
      return u.searchParams.get("v");
    }
    // https://youtu.be/ID
    if (u.hostname === "youtu.be") {
      return u.pathname.replace("/", "");
    }
  } catch (e) {
    // por si no es URL válida
    console.warn("URL de YouTube inválida:", url);
  }
  return null;
}

const videoGrid = document.getElementById("videoGrid");

youtubeVideos.forEach((url) => {
  const id = extractVideoId(url);
  if (!id) return;

  const cell = document.createElement("div");
  cell.className = "video-cell";

  const iframe = document.createElement("iframe");
  iframe.src =
    "https://www.youtube.com/embed/" +
    id +
    "?autoplay=1&mute=1&loop=1&playlist=" +
    id +
    "&controls=0&modestbranding=1&rel=0&showinfo=0";
  iframe.allow = "autoplay; encrypted-media";
  iframe.loading = "lazy";

  cell.appendChild(iframe);
  videoGrid.appendChild(cell);
});


setInterval(()=>{

const cards=document.querySelectorAll(".card")

cards.forEach(card=>{

if(Math.random()<0.15){

card.style.opacity="0.6"

setTimeout(()=>{
card.style.opacity="1"
},120)

}

})

},1500)



const canvas=document.getElementById("matrix")
const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

const letters="未来都市速度光"
const fontSize=16
const columns=canvas.width/fontSize

const drops=[]

for(let x=0;x<columns;x++)
drops[x]=1

function draw(){

ctx.fillStyle="rgba(0,0,0,0.05)"
ctx.fillRect(0,0,canvas.width,canvas.height)

ctx.fillStyle="#ff2ea6"
ctx.font=fontSize+"px monospace"

for(let i=0;i<drops.length;i++){

const text=letters[Math.floor(Math.random()*letters.length)]

ctx.fillText(text,i*fontSize,drops[i]*fontSize)

if(drops[i]*fontSize>canvas.height && Math.random()>0.975)
drops[i]=0

drops[i]++

}

}

setInterval(draw,33)
