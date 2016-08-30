//Base de la torre
var torre1 = new THREE.Shape();

torre1.moveTo( 10, 10 );
torre1.lineTo( 10, 40 );
torre1.lineTo( 40, 40 );
torre1.lineTo( 40, 10 );
torre1.moveTo( 10, 10 );

var base = new THREE.ExtrudeGeometry(torre1, { amount:10 } );
var material1 = new THREE.MeshNormalMaterial();
var malla1 = new THREE.Mesh(torre1, material);
malla1.rotateY( Math.PI/4 );

//Mitad de la torre
var puntos = [];

for( var i = 0; i < 50; i++ ){ //Son 50 puntos
  puntos.push( new THREE.Vector2( Math.sin(i*0.2)*15+50, (i-5)*2) );
}

var torre2 = new THREE.LatheGeometry(puntos); //Torno

var material2 = new THREE.MeshNormalMaterial();

var malla2 = new THREE.Mesh( torre2, material2 );
malla2.rotateY( Math.PI/6 );

//Unión
var torreForma = new THREE.Geometry();
torreForma.merge(malla1.geometry, malla1.matrix); //La malla calcula la matriz de la cinemática del objeto
torreForma.merge(malla2.geometry, malla2.matrix); //La malla calcula la matriz de la cinemática del objeto

var material = new THREE.MeshNormalMaterial();
var mallaTorre = new THREE.Mesh(torreForma, material);

var escena = new THREE.Scene();
escena.add(mallaTorre);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara);


