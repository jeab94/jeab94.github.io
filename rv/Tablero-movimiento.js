var escena;
var renderizador;
var camara;
var luzPuntual1, luzPuntual2, luzPuntual3, luzPuntual4;
var tablero;

var cubo;
var cubos;
var marco1;
var marco2;
var marco3;
var marco4;
var orilla1;
var orilla2;
var orilla3;
var orilla4;
var geometryCaballoNegro;
var material;

//Texturas
var Gris = new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('black_marmol.jpg') });
var Blanco = new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('white_marmol.jpg') });
var Marco = new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('wood.jpg') });
var GrisLiso = new THREE.MeshBasicMaterial({color: 0xD3D3D3});
var BlancoLiso = new THREE.MeshBasicMaterial({color: 0xFFFFFF});

//Sensor
function Sensor(position,direction){ 
  THREE.Raycaster.call(this,position,direction);
  this.colision = false;
}

Sensor.prototype = new THREE.Raycaster();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////  CONSTRUCTORES FICHAS  /////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ReyNegro
function ReyNegro(x=0,y=0,z=0){
	Agent.call(this,x,y,z);
	this.actuator = new THREE.Mesh(king, GrisLiso);
	this.actuator.commands = [];
	this.add(this.actuator);
	this.position.y=y;
	this.position.z=z;
	this.position.x=x;
	this.receiveShadow = true;
	//this.scale.set(0.40, 0.40, 0.40);
	this.sensor = new Sensor();
}
//ReyBlanco
function ReyBlanco(x=0,y=0,z=0){
	Agent.call(this,x,y,z);
	this.actuator = new THREE.Mesh(king, BlancoLiso);
	this.actuator.commands = [];
	this.add(this.actuator);
	this.position.y=y;
	this.position.z=z;
	this.position.x=x;
	this.receiveShadow = true;
	//this.scale.set(0.40, 0.40, 0.40);
	this.sensor = new Sensor();
}
//ReinaNegra
function ReinaNegra(x=0,y=0,z=0){
	Agent.call(this,x,y,z);
	this.actuator = new THREE.Mesh(queen, GrisLiso);
	this.actuator.commands = [];
	this.add(this.actuator);
	this.position.y=y;
	this.position.z=z;
	this.position.x=x;
	this.receiveShadow = true;
	//this.scale.set(0.40, 0.40, 0.40);
	this.sensor = new Sensor();
}
//ReinaBlanca
function ReinaBlanca(x=0,y=0,z=0){
	Agent.call(this,x,y,z);
	this.actuator = new THREE.Mesh(queen, BlancoLiso);
	this.actuator.commands = [];
	this.add(this.actuator);
	this.position.y=y;
	this.position.z=z;
	this.position.x=x;
	this.receiveShadow = true;
	//this.scale.set(0.40, 0.40, 0.40);
	this.sensor = new Sensor();
}
//CaballoNegro
function CaballoNegro(x=0,y=0,z=0){
	Agent.call(this,x,y,z);
	this.actuator = new THREE.Mesh(knight, GrisLiso);
	this.actuator.commands = [];
	this.add(this.actuator);
	this.position.y=y;
	this.position.z=z;
	this.position.x=x;
	this.receiveShadow = true;
	//this.scale.set(0.40, 0.40, 0.40);
	this.sensor = new Sensor();
}
//CaballoBlanco
function CaballoBlanco(x=0,y=0,z=0){
	Agent.call(this,x,y,z); 
	this.actuator = new THREE.Mesh(knight, BlancoLiso);
	this.actuator.commands = [];
	this.add(this.actuator);
	this.position.y=y;
	this.position.z=z;
	this.position.x=x;
	this.receiveShadow = true;
	//this.scale.set(0.40, 0.40, 0.40);
	this.sensor = new Sensor();
}
//PeonNegro
function PeonNegro(x=0,y=0,z=0){
	Agent.call(this,x,y,z);
	this.actuator = new THREE.Mesh(pawn, GrisLiso);
	this.actuator.commands = [];
	this.add(this.actuator);
	this.position.y=y;
	this.position.z=z;
	this.position.x=x;
	this.receiveShadow = true;
	//this.scale.set(0.40, 0.40, 0.40);
	this.sensor = new Sensor();
}
//PeonBlanco
function PeonBlanco(x=0,y=0,z=0){
	Agent.call(this,x,y,z); 
	this.actuator = new THREE.Mesh(pawn, BlancoLiso);
	this.actuator.commands = [];
	this.add(this.actuator);
	this.position.y=y;
	this.position.z=z;
	this.position.x=x;
	this.receiveShadow = true;
	//this.scale.set(0.40, 0.40, 0.40);
	this.sensor = new Sensor();
}
//AlfilNegro
function AlfilNegro(x=0,y=0,z=0){
	Agent.call(this,x,y,z);
	this.actuator = new THREE.Mesh(bishop, GrisLiso);
	this.actuator.commands = [];
	this.add(this.actuator);
	this.position.y=y;
	this.position.z=z;
	this.position.x=x;
	this.receiveShadow = true;
	//this.scale.set(0.40, 0.40, 0.40);
	this.sensor = new Sensor();
}
//AlfilBlanco
function AlfilBlanco(x=0,y=0,z=0){
	Agent.call(this,x,y,z); 
	this.actuator = new THREE.Mesh(bishop, BlancoLiso);
	this.actuator.commands = [];
	this.add(this.actuator);
	this.position.y=y;
	this.position.z=z;
	this.position.x=x;
	this.receiveShadow = true;
	//this.scale.set(0.40, 0.40, 0.40);
	this.sensor = new Sensor();
}
//TorreNegra
function TorreNegra(x=0,y=0,z=0){
	Agent.call(this,x,y,z);
	this.actuator = new THREE.Mesh(rook, GrisLiso);
	this.actuator.commands = [];
	this.add(this.actuator);
	this.position.y=y;
	this.position.z=z;
	this.position.x=x;
	this.receiveShadow = true;
	//this.scale.set(0.40, 0.40, 0.40);
	this.sensor = new Sensor();
}
//TorreBlanca
function TorreBlanca(x=0,y=0,z=0){
	Agent.call(this,x,y,z);
	this.actuator = new THREE.Mesh(rook, Blanco);
	this.actuator.commands = [];
	this.add(this.actuator);
	this.position.y=y;
	this.position.z=z;
	this.position.x=x;
	this.receiveShadow = true;
	//this.scale.set(0.40, 0.40, 0.40);
	this.sensor = new Sensor();
}

ReyNegro.prototype = new Agent();
ReyBlanco.prototype = new Agent();
ReinaNegra.prototype = new Agent();
ReinaBlanca.prototype = new Agent();
CaballoNegro.prototype = new Agent();
CaballoBlanco.prototype = new Agent();
TorreNegra.prototype = new Agent();
TorreBlanca.prototype = new Agent();
PeonNegro.prototype = new Agent();
PeonBlanco.prototype = new Agent();
AlfilNegro.prototype = new Agent();
AlfilBlanco.prototype = new Agent();

setup();
loop();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////  SETUP  ////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function setup(){
   
   escena = new Environment();
	
   camara = new THREE.PerspectiveCamera();
   camara.position.y = 150;
   camara.position.x = 40;
   camara.position.z = 60;
   camara.lookAt(new THREE.Vector3(40, 0, 60));

   var luzPuntual1 = new THREE.PointLight(0xFFFFFF,1);
   luzPuntual1.position.x = 10;
   luzPuntual1.position.y = 300;
   luzPuntual1.position.z = 10;
	
   var luzPuntual2 = new THREE.PointLight(0xFFFFFF,1);
   luzPuntual2.position.x = 90;
   luzPuntual2.position.y = 300;
   luzPuntual2.position.z = 10;

	
   var luzPuntual3 = new THREE.PointLight(0xFFFFFF,1);
   luzPuntual3.position.x = 10;
   luzPuntual3.position.y = 300;
   luzPuntual3.position.z = 90;
	
   var luzPuntual4 = new THREE.PointLight(0xFFFFFF,1);
   luzPuntual4.position.x = 90;
   luzPuntual4.position.y = 300;
   luzPuntual4.position.z = 90;

   renderizador = new THREE.WebGLRenderer();
   renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
   document.body.appendChild(renderizador.domElement);
	   
  
   //TABLERO (Comenzando cuadrícula en x=0, y=0)
   //Posicionamiento del tablero en el espacio
   x = 0; 
   y = 0;
   z = 0;
   var lado = 10;
   var forma = new THREE.BoxBufferGeometry(lado,lado,lado);
   cubos = [];
   var material = Blanco;
   
   for (var i=0;i<=7;i++){
   for (var j=0;j<=7;j++){
       if ((i+j) % 2 == 0){
           material= Blanco;
           }
       else{
           material= Gris;
           }
       cubo = new THREE.Mesh(forma ,material);
       cubo.position.x = j*lado+5+x;
       cubo.position.z = i*lado+5+z;
       cubo.position.y = y;
       cubos.push(cubo)

       }
   }

   orilla1 = new THREE.BoxGeometry( 90, 10, 5 ); //Superior
   var material1 = Marco;
   marco1 = new THREE.Mesh( orilla1, material1 );
   marco1.translateZ(-2.5+z);
   marco1.translateX(40+x);
   marco1.translateY(y);
   marco1.receiveShadow = true;

   orilla2 = new THREE.BoxGeometry( 5, 10, 90 ); //Derecha
   var material2 = Marco;
   marco2 = new THREE.Mesh( orilla2, material2);
   marco2.translateZ(40+z);
   marco2.translateX(82.5+x);
   marco2.translateY(y);
   marco2.receiveShadow = true;

   orilla3 = new THREE.BoxGeometry( 90, 10, 5 ); //Izquierda
   var material3 = Marco;
   marco3 = new THREE.Mesh( orilla3, material3);
   marco3.translateZ(82.5+z);
   marco3.translateX(40+x);
   marco3.translateY(y);
   marco3.receiveShadow = true;

   orilla4 = new THREE.BoxGeometry( 5, 10, 80 ); //Baja
   var material4 = Marco;
   marco4 = new THREE.Mesh( orilla4, material4);
   marco4.translateZ(40+z);
   marco4.translateX(-2.5+x);
   marco4.translateY(y);
   marco4.receiveShadow = true;
   
   //Agregar tablero a  escena
   escena.add(marco1, marco2, marco3, marco4);
   
   for(var q=0; q<=63; q++){
      cubos[q].receiveShadow = true;
      escena.add(cubos[q]);
   }

   reinaBlanca1 = new ReinaBlanca(40,10,40);
   reinaNegra1 = new ReinaNegra(30,10,30);
   reyNegro1 = new ReyNegro(15, 10, 10);
   reyBlanco1 = new ReyBlanco(15, 10, 10);
   caballoBlanco1 = new CaballoBlanco(70, 10, 20); 
   caballoNegro1 = new CaballoNegro(15, 10, 10);
   peonBlanco1 = new PeonBlanco(70, 10, 20); 
   peonNegro1 = new PeonNegro(15, 10, 10);
   alfilBlanco1 = new PeonBlanco(70, 10, 20); 
   alfilNegro1 = new PeonNegro(15, 10, 10);
   torreBlanca1 = new TorreBlanca(40,10,40);
   torreNegra1 = new TorreNegra(30,10,30);
	
   escena.add(reinaBlanca1, reinaNegra1, reyNegro1, reyBlanco1, caballoBlanco1, caballoNegro1, peonBlanco1, peonNegro1, alfilBlanco1, alfilNegro1, torreBlanca1, torreNegra1);
   escena.add(luzPuntual1, luzPuntual2, luzPuntual3, luzPuntual4);
  
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////  LOOP  /////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function loop(){
     requestAnimationFrame(loop);
     escena.sense();
     escena.plan();
     escena.act();
     
     renderizador.render(escena, camara);
      
}

