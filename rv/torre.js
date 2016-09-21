var materialGris = new THREE.MeshBsicMaterial( { 
    color: 0x888888 
} ); 

//Base de la torre
var base = new THREE.Shape();

base.moveTo( -65, -10 );
base.lineTo( -65, 10 );
base.lineTo( 65, 10 );
base.lineTo( 65, -10 );
base.lineTo( -65, -10 );

var torre1 = new THREE.ExtrudeGeometry(base, { amount: 130 } );
torre1.translate(0, -95, -65);
var material1 = materialGris;
var malla1 = new THREE.Mesh(torre1, material1);


//Mitad inferior de la torre
var puntos = [];

for( var i = 0; i < 100; i++ ){ //Son 50 puntos
  puntos.push( new THREE.Vector2( Math.sin(i*0.1)*15+40, (i-5)*2) );
}

var torre2 = new THREE.LatheGeometry(puntos); //Torno
torre2.translate(0, -75, 0);

var material2 = materialGris;

var malla2 = new THREE.Mesh( torre2, material2 );
//malla2.rotateZ( Math.PI/6 );

//Mitad superior de la torre
var superior = new THREE.CylinderGeometry( 42, 42, 20, 32);

superior.translate( 0, 125, 0 );

var material3 = materialGris;

var malla3 = new THREE.Mesh( superior, material3 );


//Terminación de la torre
var puntos2 = [];

for ( var j = 0; j < 100 ; j++ ){
  puntos2.push( new THREE.Vector2( 25-j/4, j+135 ) );
}

var torre4 = new THREE.LatheGeometry(puntos2);

var material4 = materialGris;

var malla4 = new THREE.Mesh( torre4, material4 );


//Unión
var torreForma1 = new THREE.Geometry();
torreForma1.merge(malla1.geometry, malla1.matrix); //La malla calcula la matriz de la cinemática del objeto
torreForma1.merge(malla2.geometry, malla2.matrix); //La malla calcula la matriz de la cinemática del objeto
torreForma1.merge(malla3.geometry, malla3.matrix);//
torreForma1.merge(malla4.geometry, malla4.matrix);


var material = materialGris;
var mallaTorre = new THREE.Mesh(torreForma1, material);
