const image = ["blue.avif", "green.avif", "sky.avif"];

const chosenImage = image[Math.floor(Math.random() * image.length)];

/*const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);*/

document.body.style.backgroundImage = `url('img/${chosenImage}')`;
document.body.style.backgroundPosition = "top";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundAttachment = "fixed";
