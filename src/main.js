import sampleImage from './assets/aaa.jpeg';
import { userName } from './name'

console.log(userName)

const img = new Image();
img.src = sampleImage;
document.body.appendChild(img);

for (let index = 0; index <= 5; index++) {
    console.log("index1 =>" + index)
}

for (let index = 5; index >= 0; index--) {
    console.log("index2 =>" + index)
}