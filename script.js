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
