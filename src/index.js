import imageViewer from "./image_viewer";

const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
    imageViewer();
    // System.import('./image_viewer')
    //     .then(module => {
    //         module.default();
    //     })
};

document.body.appendChild(button);