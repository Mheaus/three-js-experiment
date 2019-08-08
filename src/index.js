import * as THREE from 'three';
import { Power1, TimelineMax } from 'gsap';

import './main.css';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

function setSize() {
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function updateCamera() {
  setSize();
  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();
}

function init() {
  camera.position.z = 5;
  renderer.setClearColor('#efefef');

  document.body.appendChild(renderer.domElement);
  window.addEventListener('resize', updateCamera);

  setSize();
}

init();

// handling mouse position
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

class YellowBox {
  constructor() {
    this.geometry = new THREE.BoxGeometry(1, 1, 1);
    this.material = new THREE.MeshLambertMaterial({ color: 0xfefefe });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
  }
}

// add some yellow boxes
for (let i = 0; i < 15; i += 1) {
  const { mesh } = new YellowBox();

  mesh.position.x = (Math.random() - 0.5) * 10;
  mesh.position.y = (Math.random() - 0.5) * 10;
  mesh.position.z = (Math.random() - 0.5) * 10;

  scene.add(mesh);
}

// add lights
const light1 = new THREE.PointLight(0xffffff, 1, 1000);

light1.position.set(0, 0, 0);
scene.add(light1);

const light2 = new THREE.PointLight(0xffffff, 2, 1000);

light2.position.set(0, 0, 25);
scene.add(light2);

// render function
function render() {
  requestAnimationFrame(render);

  renderer.render(scene, camera);
}

function onMouseMove(event) {
  event.preventDefault();

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(scene.children, true);

  for (let i = 0; i < intersects.length; i += 1) {
    const { object } = intersects[i];
    const timeline = new TimelineMax();

    timeline.to(object.scale, 1, { x: 2, ease: Power1.easeOut });
    timeline.to(object.scale, 0.5, { x: 0.5, ease: Power1.easeInOut });
    timeline.to(object.position, 0.5, { x: 2, ease: Power1.easeOut });
    timeline.to(object.rotation, 0.5, { y: Math.PI * 0.5, ease: Power1.easeOut }, '=-1.5');
  }
}

render();

window.addEventListener('click', onMouseMove);
