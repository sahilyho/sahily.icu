/** @format */

// pyramid animation

let scene = new THREE.Scene();
scene.background = null;
scene.transparent = true;
let camera = new THREE.PerspectiveCamera(
	13,
	window.innerWidth / window.innerHeight,
	0.1,
	800
);
camera.position.set(0, 30, 10);

let renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(300, 300);
const div = document.getElementById("pyramid");
div.appendChild(renderer.domElement);

let textureLoader = new THREE.TextureLoader();
let texture = textureLoader.load("static/images/wall.jpg");

let material = new THREE.MeshStandardMaterial({
	map: texture,
	bumpMap: texture,
	bumpScale: 0.01,
});
let geometry = new THREE.ConeGeometry(2, 1, 4);
let pyramid = new THREE.Mesh(geometry, material);

pyramid.position.set(0, 30, 1);
scene.add(pyramid);

let light = new THREE.PointLight(0xffffff, 2, 120);
light.position.set(0, 30, 10);
scene.add(light);

camera.position.z = 10;

const imageElement = document.createElement("img");
document.body.appendChild(imageElement);

let raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

function animate() {
	// Update the raycaster with the camera and mouse position
	raycaster.setFromCamera(pointer, camera);

	pyramid.rotation.y += 0.005;

	renderer.render(scene, camera);

	requestAnimationFrame(animate);
}

animate();

// Clicking on pyramid

const pyramidClick = document.querySelector(".pyramid_click");
const imageContainer = document.querySelector(".samples");

pyramidClick.onclick = function () {
	if (imageContainer.classList.contains("hidden")) {
		imageContainer.classList.remove("hidden");
		imageContainer.classList.add("visible");
	} else {
		imageContainer.classList.remove("visible");
		imageContainer.classList.add("hidden");
	}
};
