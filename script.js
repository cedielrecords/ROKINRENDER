const videoFolder = './videos/';
const videoFiles = ['video1.mp4', 'video2.mp4', 'video3.mp4']; // agrega más si quieres

const grid = document.getElementById('videoGrid');

videoFiles.forEach(file => {
  const vid = document.createElement('video');
  vid.src = videoFolder + file;
  vid.autoplay = true;
  vid.loop = true;
  vid.muted = true;
  grid.appendChild(vid);
});
