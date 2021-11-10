const images = [ "0.jpg", "1.jpg", "2.jpg" ];

const image = images[Math.floor(Math.random() * images.length)];

const bgImage = `url('img/${image}')`;
document.body.style.backgroundImage = bgImage;