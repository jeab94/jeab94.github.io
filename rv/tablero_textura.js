var mat1 = false;
var mat2 = false;
var mat3 = false;

var fnBlack = function(textura) {
   Gris = new THREE.MeshBasicMaterial({map: textura});  
   mat1 = true;
}
var fnWhite = function(textura) {
   Blanco = new THREE.MeshBasicMaterial({map: textura});  
   mat2 = true;
}
var fnWood = function(textura) {
   Marco = new THREE.MeshBasicMaterial({map: textura});  
   mat3 = true;
}

var cargadorBlack=new THREE.TextureLoader();
cargadorBlack.load("black_marmol.jpg", fnBlack);
var cargadorWhite=new THREE.TextureLoader();
cargadorWhite.load("white_marmol.jpg", fnWhite);
var cargadorWood=new THREE.TextureLoader();
cargadorWood.load("wood.jpg", fnWood);

var poner=function(){
//Base de la torre
var base = new THREE.Shape();

base.moveTo( -65, -10 );
base.lineTo( -65, 10 );
base.lineTo( 65, 10 );
base.lineTo( 65, -10 );
base.lineTo( -65, -10 );

var torre1 = new THREE.ExtrudeGeometry(base, { amount: 130 } );
torre1.translate(0, -95, -65);
var material1 = Gris;
var malla1 = new THREE.Mesh(torre1, material1);


//Mitad inferior de la torre
var puntos = [];

for( var i = 0; i < 100; i++ ){ //Son 50 puntos
  puntos.push( new THREE.Vector2( Math.sin(i*0.1)*15+40, (i-5)*2) );
}

var torre2 = new THREE.LatheGeometry(puntos); //Torno
torre2.translate(0, -75, 0);

var material2 = Gris;

var malla2 = new THREE.Mesh( torre2, material2 );
//malla2.rotateZ( Math.PI/6 );

//Mitad superior de la torre
var superior = new THREE.CylinderGeometry( 42, 42, 20, 32);

superior.translate( 0, 125, 0 );

var material3 = Gris;

var malla3 = new THREE.Mesh( superior, material3 );


//Terminación de la torre
var puntos2 = [];

for ( var j = 0; j < 100 ; j++ ){
  puntos2.push( new THREE.Vector2( 25-j/4, j+135 ) );
}

var torre4 = new THREE.LatheGeometry(puntos2);

var material4 = Gris;

var malla4 = new THREE.Mesh( torre4, material4 );


//Unión
var torreForma1 = new THREE.Geometry();
torreForma1.merge(malla1.geometry, malla1.matrix); //La malla calcula la matriz de la cinemática del objeto
torreForma1.merge(malla2.geometry, malla2.matrix); //La malla calcula la matriz de la cinemática del objeto
torreForma1.merge(malla3.geometry, malla3.matrix);//
torreForma1.merge(malla4.geometry, malla4.matrix);


var material = Gris;
var mallaTorre = new THREE.Mesh(torreForma1, material);


var camara = new THREE.PerspectiveCamera();

camara.position.y = 100;
camara.position.x = 100;
camara.position.z = 100;
camara.lookAt(new THREE.Vector3(40,5,40));

var luzPuntual1 = new THREE.PointLight(0xFFFFFF,1);
luzPuntual1.position.x = 40;
luzPuntual1.position.y = 100;
luzPuntual1.position.z = 40;

//Tablero
var lado = 10;
var cubos = [];
var material = Gris;
var tablero = new THREE.Geometry()

for (i=0;i<=7;i++){
for (var j=0;j<=7;j++){
    if ((i+j) % 2 == 0){
        material= Gris;
        }
    else{
        material= Blanco;
        }
    var forma = new THREE.BoxBufferGeometry(lado,lado,lado);
    var cubo = new THREE.Mesh(forma ,material);
    cubo.position.x = j*lado+5;
    cubo.position.z = i*lado+5;
    cubos.push(cubo)
    
    }
}

var orilla1 = new THREE.BoxGeometry( 90, 10, 5 );
var material1 = Marco;
var marco1 = new THREE.Mesh( orilla1, material1 );
marco1.translateZ(-2.5);
marco1.translateX(40);

var orilla2 = new THREE.BoxGeometry( 5, 10, 80 );
var material2 = Marco;
var marco2 = new THREE.Mesh( orilla2, material2);
marco2.translateZ(40);
marco2.translateX(82.5);

var orilla3 = new THREE.BoxGeometry( 90, 10, 5 );
var material3 = Marco;
var marco3 = new THREE.Mesh( orilla3, material3);
marco3.translateZ(82.5);
marco3.translateX(40);

var orilla4 = new THREE.BoxGeometry( 5, 10, 80 );
var material4 = Marco;
var marco4 = new THREE.Mesh( orilla4, material4);
marco4.translateZ(40);
marco4.translateX(-2.5);

//Torre1Blanca
    torre1 = mallaTorre.clone();
    torre1.scale.set(0.07,0.07,0.07);
    torre1.translateY(10);
    torre1.translateX(5);
    torre1.translateZ(5);
    torre1.material = Blanco;
    
//Torre2Blanca
    torre2 = mallaTorre.clone();
    torre2.scale.set(0.07,0.07,0.07);
    torre2.translateY(10);
    torre2.translateX(5);
    torre2.translateZ(75);
    torre2.material = Blanco;

//Torre3Negra
    torre3 = mallaTorre.clone();
    torre3.scale.set(0.07,0.07,0.07);
    torre3.translateY(10);
    torre3.translateX(75);
    torre3.translateZ(5);
    torre3.material = Gris;
//Torre4Negra
    torre5 = mallaTorre.clone();
    torre5.scale.set(0.07,0.07,0.07);
    torre5.translateY(10);
    torre5.translateX(75);
    torre5.translateZ(75);
    torre5.material = Gris;
    
var escena = new THREE.Scene();
escena.add(marco1);
escena.add(marco2);
escena.add(marco3);
escena.add(marco4);
escena.add(torre1);
escena.add(torre2);
escena.add(torre3);
escena.add(torre5);
escena.add(luzPuntual1);


for (i = 0; i < 64; i++) {
escena.add(cubos[i]);
}

var renderizador = new THREE.WebGLRenderer({});
renderizador.setSize(window.innerWidth, window.innerHeight); //Renderizador en toda la pantalla

document.body.appendChild(renderizador.domElement);
}
var didSetup = false;

var loop = function(){
   requestAnimationFrame(loop);
   if(mat1 && mat2 && mat3){
      if (didSetup == false) {
      poner();
      didSetup = true;
      }
   
   renderizador.render(escena, camara);
   }
}
loop();

