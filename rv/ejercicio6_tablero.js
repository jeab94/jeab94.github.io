var camara = new THREE.PerspectiveCamera();

camara.position.y = 150;
camara.position.x = 150;
camara.position.z = 150;
camara.lookAt(new THREE.Vector3(0,0,40));

var grayColor = new THREE.Color("rgb(128,128,128)");
var whiteColor = new THREE.Color("rgb(255,255,255)");
var brownColor = new THREE.Color("rgb(118,57,49)");
var materialBlanco = new THREE.MeshBasicMaterial();
var materialGris = new THREE.MeshBasicMaterial();
var materialCafe = new THREE.MeshBasicMaterial();
materialGris.color = grayColor;
materialBlanco.color = whiteColor;
materialCafe.color = brownColor;

//Tablero
var lado = 10;
var cubos = [];
var material = materialGris;
var forma = new THREE.BoxBufferGeometry(lado,lado,lado);
var tablero = new THREE.Geometry()

for (i=0;i<=7;i++){
for (var j=0;j<=7;j++){
    if ((i+j) % 2 == 0){
        var material= materialGris;
        }
    else{
        var material= materialBlanco;
        }
    var forma = new THREE.BoxBufferGeometry(lado,lado,lado);
    var cubo = new THREE.Mesh(forma ,material);
    cubo.position.x = j*lado+5;
    cubo.position.z = i*lado+5;
    cubos.push(cubo)
    }
}

var orilla1 = new THREE.BoxGeometry( 90, 10, 5 );
var material1 = materialCafe;
var marco1 = new THREE.Mesh( orilla1, material1 );
marco1.translateZ(-2.5);
marco1.translateX(40);

var orilla2 = new THREE.BoxGeometry( 5, 10, 80 );
var material2 = materialCafe;
var marco2 = new THREE.Mesh( orilla2, material2);
marco2.translateZ(40);
marco2.translateX(82.5);

var orilla3 = new THREE.BoxGeometry( 90, 10, 5 );
var material3 = materialCafe;
var marco3 = new THREE.Mesh( orilla3, material3);
marco3.translateZ(82.5);
marco3.translateX(40);

var orilla4 = new THREE.BoxGeometry( 5, 10, 80 );
var material4 = materialCafe;
var marco4 = new THREE.Mesh( orilla4, material4);
marco4.translateZ(40);
marco4.translateX(-2.5);


//Torre1Blanca

//Base de la torre
var base = new THREE.Shape();

base.moveTo( -40, -10 );
base.lineTo( -40, 10 );
base.lineTo( 40, 10 );
base.lineTo( 40, -10 );
base.lineTo( -40, -10 );

var torre1 = new THREE.ExtrudeGeometry(base, { amount: 80 } );
torre1.translate(0, -95, -40);
var materialTorre1 = new THREE.MeshNormalMaterial();
var malla1 = new THREE.Mesh(torre1, materialTorre1);

//Mitad inferior de la torre
var puntos = [];

for( var i = 0; i < 100; i++ ){ //Son 50 puntos
  puntos.push( new THREE.Vector2( Math.sin(i*0.1)*15+40, (i-5)*2) );
}

var torre2 = new THREE.LatheGeometry(puntos); //Torno
torre2.translate(0, -75, 0);

var malla2 = new THREE.Mesh( torre2, materialTorre1 );
//malla2.rotateZ( Math.PI/6 );

//Mitad superior de la torre
var superior = new THREE.CylinderGeometry( 42, 42, 20, 32);

superior.translate( 0, 125, 0 );

var malla4 = new THREE.Mesh( superior, materialTorre1 );

//Terminación de la torre
var puntos2 = [];

for ( var j = 0; j < 100 ; j++ ){
  puntos2.push( new THREE.Vector2( 25-j/4, j+135 ) );
}

var torre3 = new THREE.LatheGeometry(puntos2);

var malla3 = new THREE.Mesh( torre3, materialTorre1 );


//Unión
var torreForma1 = new THREE.Geometry();
//var torreForma2 = new THREE.Geometry();
torreForma1.merge(malla1.geometry, malla1.matrix); //La malla calcula la matriz de la cinemática del objeto
torreForma1.merge(malla2.geometry, malla2.matrix); //La malla calcula la matriz de la cinemática del objeto
//torreForma2.merge(torreForma1.geometry, torreForma1.matrix);
torreForma1.merge(malla3.geometry, malla3.matrix);//
torreForma1.merge(malla4.geometry, malla3.matrix);

var torre1 = new THREE.Mesh(torreForma1, materialTorre1);
torre1.translateY(10);
torre1.scale.set(0.07,0.05,0.07);

var escena = new THREE.Scene();
escena.add(marco1);
escena.add(marco2);
escena.add(marco3);
escena.add(marco4);
escena.add(torre1);

for (i = 0; i < 64; i++) {
escena.add(cubos[i]);
}

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth, window.innerHeight); //Renderizador en toda la pantalla

document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);
