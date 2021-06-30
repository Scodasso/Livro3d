
//Creating the scene

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// //CUBE
//
// const geometry = new THREE.BoxGeometry(3.5, 5, 0.5);
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );
//
// camera.position.z = 8;

// OBJ

// instantiate a loader
const loader = new THREE.OBJLoader();

// load a resource
loader.load(
	// resource URL
	'Livro.obj/',
	// called when resource is loaded
	function ( object ) {

		scene.add( object );

	},
	// called when loading is in progresses
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);

//Rendering the scene

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );

  //Animating the scene
  cube.rotation.x += 0.00;
  cube.rotation.y -= 0.01;
}
animate();
