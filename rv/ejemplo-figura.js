var figura = new THREE.Shape(); 

//Definimos figura sobre plano xy
figura.moveTo( 10, 10 );
figura.lineTo( 10, 40 );
figura.lineTo( 40, 40 );
figura.lineTo( 10, 10 );

var forma = new THRE.ShapeGeometry(figura); //Agregamos plano a espacio 3D
var malla = new THREE.Mesh(forma); //El material por default es MeshBasicMaterial

var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 100;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
