//Base de la torre
var base = new THREE.Shape();

base.moveTo( -40, -10 );
base.lineTo( -40, 10 );
base.lineTo( 40, 10 );
base.lineTo( 40, -10 );
base.lineTo( -40, -10 );

var torre1 = new THREE.ExtrudeGeometry(base, { amount:100 } );
torre1.position.x( 1600 );
var material1 = new THREE.MeshNormalMaterial();
var malla1 = new THREE.Mesh(torre1, material1);


//Mitad de la torre
var puntos = [];

for( var i = 0; i < 100; i++ ){ //Son 50 puntos
  puntos.push( new THREE.Vector2( Math.sin(i*0.1)*15+50, (i-5)*2) );
}

var torre2 = new THREE.LatheGeometry(puntos); //Torno

var material2 = new THREE.MeshNormalMaterial();

var malla2 = new THREE.Mesh( torre2, material2 );
//malla2.rotateZ( Math.PI/6 );

////Terminación de la torre
//var puntos2 = [];

//for ( var j = 0; j < 100 ; j++ ){
  //puntos2.push( new THREE.Vector2( 50, (j-5)*2));
//}

//var torre3 = new THREE.LatheGeometry(puntos2);

//var material3 = new THREE.MeshNormalMaterial();

//var malla3 = new THREE.Mesh( torre3, material3 );


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
escena.add(mallaTorre);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 0;
camara.position.x = -500;
camara.lookAt(new THREE.Vector3(0,0,0));

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara);


