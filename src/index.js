// Threejs
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Style
import "./assets/style/style.scss"

// Main
import scene from "./main/scene";
import renderer from "./main/renderer"
import camera from "./main/camera"
import light from "./main/light";

// Meshes
import loadEarth from "./mesh/earth"
import loadClouds from './mesh/clouds';
import loadAtmosphere from './mesh/atomosphere';
import './sounds';
import { playSound, sounds } from './sounds';

// Helpers
// import helpers from "./helpers";
// scene.add(helpers);

// Nodes
const spinner = document.querySelector("div.spinner");
const startInfo = document.querySelector("div.start");
const canvas = document.querySelector("canvas");

// Main 
let objects = [];
//Earth, clouds, atmosphere
Promise.all([loadEarth(), loadClouds(), loadAtmosphere()])
    .then(objs => objects = objs)
    .catch(err => console.log(err))
    .finally(() => main());


let earth, clouds, atmosphere;
function main() {
    earth = objects[0];
    clouds = objects[1];
    atmosphere = objects[2];

    // Add Stuff
    scene.add(light);
    objects.map(obj => scene.add(obj));

    // Event listners
    window.addEventListener("resize", () => {
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
        renderer.render(scene, camera);
    });

    // Display
    spinner.remove();

    animate();
    let hidden = false;
    document.querySelector("button#start").addEventListener("click", () => {
        if (hidden) return;

        hidden = true;

        startInfo.remove()

        
        document.querySelector(".golden-platte").classList.add("show");
        canvas.style = "filter: none";

        playSound(0);
    });

}


// Display
const orbit = new OrbitControls(camera, canvas);
orbit.enableDamping = true;
orbit.rotateSpeed = 0.25;
orbit.enablePan = false;
orbit.maxDistance = 10;
orbit.minDistance = 4;

// Start animation
const animate = () => {
    earth.rotation.y += 0.0002;
    clouds.rotation.y -= 0.0005;

    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();

    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    orbit.update();
};
