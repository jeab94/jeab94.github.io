//Base de la torre
var base = new THREE.Shape();

base.moveTo( 10, 10 );
base.lineTo( 10, 40 );
base.lineTo( 40, 40 );
base.lineTo( 40, 10 );
base.lineTo( 10, 10 );

var torre1 = new THREE.ExtrudeGeometry(base, { amount:10 } );
var material1 = new THREE.MeshNormalMaterial();
var malla1 = new THREE.Mesh(torre1, material1);
malla1.rotateX( Math.PI/4 );

//Mitad de la torre
var puntos = [];

for( var i = 0; i < 50; i++ ){ //Son 50 puntos
  puntos.push( new THREE.Vector2( -i+10, i+2) );
}

var torre2 = new THREE.LatheGeometry(puntos); //Torno

var material2 = new THREE.MeshNormalMaterial();

var malla2 = new THREE.Mesh( torre2, material2 );
malla2.rotateX( Math.PI/6 );

//Unión
var torreForma = new THREE.Geometry();
torreForma.merge(malla1.geometry, malla1.matrix); //La malla calcula la matriz de la cinemática del objeto
torreForma.merge(malla2.geometry, malla2.matrix); //La malla calcula la matriz de la cinemática del objeto

var material = new THREE.MeshNormalMaterial();
var mallaTorre = new THREE.Mesh(torreForma, material);

var escena = new THREE.Scene();
escena.add(mallaTorre);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 500;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara);


