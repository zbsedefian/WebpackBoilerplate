import big1 from "../assets/big1.jpg";
import small from "../assets/small.png";
import "./styles/image_viewer.css";

const image = document.createElement("img");
image.src = small;

document.body.appendChild(image);

// Big

const bigImage = document.createElement("img");
bigImage.src = big1;

document.body.appendChild(bigImage);
