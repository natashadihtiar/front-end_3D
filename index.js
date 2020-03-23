const scene = new THREE.Scene();//eslint-disable-line
const fov = 70;
const aspectRatio = window.innerWidth/window.innerHeight;
const near = 0.1;
const far = 1000;
const camera = new THREE.PerspectiveCamera( fov, aspectRatio, near, far);//eslint-disable-line


const renderer = new THREE.WebGLRenderer({ antialias: true});//eslint-disable-line
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.prepend( renderer.domElement );
renderer.setClearColor('black');

const controls = new THREE.OrbitControls(camera, renderer.domElement);//eslint-disable-line

const geometry = new THREE.ConeGeometry(5,20,32);//eslint-disable-line
const material = new THREE.MeshPhongMaterial( { color: 'pink' } );//eslint-disable-line
const cone = new THREE.Mesh( geometry, material );//eslint-disable-line


scene.add(cone);
controls.update();

camera.position.z = 25;

const color = '0xffffff';
const intensity = 1;

const light = new THREE.DirectionalLight(color, intensity);//eslint-disable-line

light.position.set(-1, 2, 4);//eslint-disable-line
scene.add(light);

const animate = function () {
    requestAnimationFrame( animate );

    cone.rotation.y += 0.005;
    renderer.render( scene, camera );
    controls.update();
};

animate();