var figura = new THREE.Shape();

var R = 100;
var L = 5;
var paso = 2	
var estrella= L / paso
var rad = (2*Math.PI) / estrella;
X=10;
Y=10;

for( var i = 0; i < L; i++ ){
							x = X + R * Math.cos( rad*i );
							y = Y + R * Math.sin( rad*i );
							figura.lineTo(x, y);
							}

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
