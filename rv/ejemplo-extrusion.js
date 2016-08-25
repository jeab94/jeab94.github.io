//Para formar extrusión se debe formar primero una figura como base
var figura = new THREE.Shape();

figura.moveTo( 10, 10 );
figura.lineTo( 10, 40 );
figura.lineTo( 40, 40 );
figura.lineTo( 10, 10 );

//con la figura se produce la extrusión
var forma = new THREE.ExtrudeGeometry( figura, {amount: 10} ); //amount-->Propiedad cantidad (Qué tanto va a crecer)

//Generamos las propiedades de la malla como material y orientación
var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );
malla.rotateX( Math.PI/4 );

var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 500;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara);
