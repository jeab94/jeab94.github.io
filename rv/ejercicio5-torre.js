//Base de la torre
var base = new THREE.Shape();

base.moveTo( -65, -10 );
base.lineTo( -65, 10 );
base.lineTo( 65, 10 );
base.lineTo( 65, -10 );
base.lineTo( -65, -10 );

var torre1 = new THREE.ExtrudeGeometry(base, { amount: 130 } );
torre1.translate(0, -95, -65);
var material1 = new THREE.MeshNormalMaterial();
var malla1 = new THREE.Mesh(torre1, material1);


//Mitad inferior de la torre
var puntos = [];

for( var i = 0; i < 100; i++ ){ //Son 50 puntos
  puntos.push( new THREE.Vector2( Math.sin(i*0.1)*15+50, (i-5)*2) );
}

var torre2 = new THREE.LatheGeometry(puntos); //Torno
torre2.translate(0, -95, 0);

var material2 = new THREE.MeshNormalMaterial();

var malla2 = new THREE.Mesh( torre2, material2 );
//malla2.rotateZ( Math.PI/6 );

//Mitad superior de la torre
var superior = new THREE.CylinderGeometry( 75, 41.8, 10, 32);

var material4 = new THREE.MeshNormalMaterial();

var malla4 = new THREE.Mesh( superior, material4 );


//Terminación de la torre
var puntos2 = [];

for ( var j = 0; j < 75 ; j++ ){
  puntos2.push( new THREE.Vector2( 75-j, (j*2)+130 ) );
}

var torre3 = new THREE.LatheGeometry(puntos2);

var material3 = new THREE.MeshNormalMaterial();

var malla3 = new THREE.Mesh( torre3, material3 );


//Unión
var torreForma1 = new THREE.Geometry();
//var torreForma2 = new THREE.Geometry();
torreForma1.merge(malla1.geometry, malla1.matrix); //La malla calcula la matriz de la cinemática del objeto
torreForma1.merge(malla2.geometry, malla2.matrix); //La malla calcula la matriz de la cinemática del objeto
//torreForma2.merge(torreForma1.geometry, torreForma1.matrix);
//torreForma2.merge(malla3.geometry, malla3.matrix);//


var material = new THREE.MeshNormalMaterial();
var mallaTorre = new THREE.Mesh(torreForma1, material);

var escena = new THREE.Scene();
escena.add(mallaTorre, malla3, malla4);

var camara = new THREE.PerspectiveCamera();
camara.position.z = -500;
camara.position.x = 0;
camara.lookAt(new THREE.Vector3(0,0,0));

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara);


