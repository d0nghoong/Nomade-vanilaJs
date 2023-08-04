const image = ["blue.avif", "green.avif", "sky.avif"];

const chosenImage = image[Math.floor(Math.random() * image.length)];

const bgImage = document.createElement("img");

bgImage.src = "img/" + chosenImage;
document.body.appendChild(bgImage);
