var escena, renderizador, camara;
var luzPuntual1, luzPuntual2, luzPuntual3, luzPuntual4;
var tablero;

var cubo;
var cubos;
var marco1, marco2, marco3, marco4;
var orilla1, orilla2, orilla3, orilla4;
var material;

var indicador=0; //indicador=0 corresponde a "no hay pieza seleccionada/libre para elegir pieza"
		//indicador=1 corresponde a "hay pieza seleccionada"

//Texturas
var Gris = new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('black_marmol.jpg') });
var Blanco = new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('white_marmol.jpg') });
var Marco = new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('wood.jpg') });
var GrisLiso = new THREE.MeshLambertMaterial({color: 0xD3D3D3});
var BlancoLiso = new THREE.MeshLambertMaterial({color: 0xFFFFFF});

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
	this.actuator = new THREE.Mesh(king, Gris);
	this.actuator.commands = [];
	this.add(this.actuator);
	this.position.y=y;
	this.position.z=z;
	this.position.x=x;
	this.receiveShadow = true;
	this.scale.set(0.70, 0.70, 0.70);
	this.sensor = new Sensor();
}
//ReyBlanco
function ReyBlanco(x=0,y=0,z=0){
	Agent.call(this,x,y,z);
	this.actuator = new THREE.Mesh(king, Blanco);
	this.actuator.commands = [];
	this.add(this.actuator);
	this.position.y=y;
	this.position.z=z;
	this.position.x=x;
	this.receiveShadow = true;
	this.scale.set(0.70, 0.70, 0.70);
	this.sensor = new Sensor();
}
//ReinaNegra
function ReinaNegra(x=0,y=0,z=0){
	Agent.call(this,x,y,z);
	this.actuator = new THREE.Mesh(queen, Gris);
	this.actuator.commands = [];
	this.add(this.actuator);
	this.position.y=y;
	this.position.z=z;
	this.position.x=x;
	this.receiveShadow = true;
	this.scale.set(0.70, 0.70, 0.70);
	this.sensor = new Sensor();
}
//ReinaBlanca
function ReinaBlanca(x=0,y=0,z=0){
	Agent.call(this,x,y,z);
	this.actuator = new THREE.Mesh(queen, Blanco);
	this.actuator.commands = [];
	this.add(this.actuator);
	this.position.y=y;
	this.position.z=z;
	this.position.x=x;
	this.receiveShadow = true;
	this.scale.set(0.70, 0.70, 0.70);
	this.sensor = new Sensor();
}
//CaballoNegro
function CaballoNegro(x=0,y=0,z=0){
	Agent.call(this,x,y,z);
	this.actuator = new THREE.Mesh(knight, Gris);
	this.actuator.commands = [];
	this.add(this.actuator);
	this.position.y=y;
	this.position.z=z;
	this.position.x=x;
	this.receiveShadow = true;
	this.scale.set(0.70, 0.70, 0.70);
	this.sensor = new Sensor();
}
//CaballoBlanco
function CaballoBlanco(x=0,y=0,z=0){
	Agent.call(this,x,y,z); 
	this.actuator = new THREE.Mesh(knight, Blanco);
	this.actuator.commands = [];
	this.add(this.actuator);
	this.position.y=y;
	this.position.z=z;
	this.position.x=x;
	this.receiveShadow = true;
	this.scale.set(0.70, 0.70, 0.70);
	this.sensor = new Sensor();
}
//PeonNegro
function PeonNegro(x=0,y=0,z=0){
	Agent.call(this,x,y,z);
	this.actuator = new THREE.Mesh(pawn, Gris);
	this.actuator.commands = [];
	this.add(this.actuator);
	this.position.y=y;
	this.position.z=z;
	this.position.x=x;
	this.receiveShadow = true;
	this.scale.set(0.70, 0.70, 0.70);
	this.sensor = new Sensor();
}
//PeonBlanco
function PeonBlanco(x=0,y=0,z=0){
	Agent.call(this,x,y,z); 
	this.actuator = new THREE.Mesh(pawn, Blanco);
	this.actuator.commands = [];
	this.add(this.actuator);
	this.position.y=y;
	this.position.z=z;
	this.position.x=x;
	this.receiveShadow = true;
	this.scale.set(0.70, 0.70, 0.70);
	this.sensor = new Sensor();
}
//AlfilNegro
function AlfilNegro(x=0,y=0,z=0){
	Agent.call(this,x,y,z);
	this.actuator = new THREE.Mesh(bishop, Gris);
	this.actuator.commands = [];
	this.add(this.actuator);
	this.position.y=y;
	this.position.z=z;
	this.position.x=x;
	this.receiveShadow = true;
	this.scale.set(0.70, 0.70, 0.70);
	this.sensor = new Sensor();
}
//AlfilBlanco
function AlfilBlanco(x=0,y=0,z=0){
	Agent.call(this,x,y,z); 
	this.actuator = new THREE.Mesh(bishop, Blanco);
	this.actuator.commands = [];
	this.add(this.actuator);
	this.position.y=y;
	this.position.z=z;
	this.position.x=x;
	this.receiveShadow = true;
	this.scale.set(0.70, 0.70, 0.70);
	this.sensor = new Sensor();
}
//TorreNegra
function TorreNegra(x=0,y=0,z=0){
	Agent.call(this,x,y,z);
	this.actuator = new THREE.Mesh(rook, Gris);
	this.actuator.commands = [];
	this.add(this.actuator);
	this.position.y=y;
	this.position.z=z;
	this.position.x=x;
	this.receiveShadow = true;
	this.scale.set(0.70, 0.70, 0.70);
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
	this.scale.set(0.70, 0.70, 0.70);
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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////  CONSTRUCTOR REFERENCIA  ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Referencia(x=0,y=0,z=0){
  Agent.call(this,x,y,z);
  var texturaReferencia = new THREE.MeshLambertMaterial({color: 0x00ff00});
  this.add(new THREE.Mesh(new THREE.BoxGeometry(10, 10, 10), texturaReferencia));
  this.position.y=y;
  this.position.z=z;
  this.position.x=x;
}

Referencia.prototype = new Agent();

Referencia.prototype.act = function(environment){
	window.onload=function(){document.onkeydown=desplazar};
	function desplazar(pieza){
	var key = pieza.which;
        switch (key){	
		case 37: //Left
			if(indicador===1){
				if(referencia.position.x>=15){
					referencia.translateX(-10);
				}
			}
			else{
				escena.remove(referencia);	
				if(referencia.position.x>=15){
					referencia.translateX(-10);
				}
			}
			break;
		case 38 :  //Up
			if(indicador===1){
				if(referencia.position.z>=15){
					referencia.translateZ(-10);
				}
			}
			else{
				if(referencia.position.z>=15){
					referencia.translateZ(-10);
				}
			}			
			break;
		case 39 :  //Right 
			if(indicador===1){
				if(referencia.position.x<=65){
					referencia.translateX(10);
				}
			}
			else{
				if(referencia.position.x<=65){
					referencia.translateX(10);
				}
			}		
			break;
		case 40 :  //Down
			if(indicador===1){
				if(referencia.position.z<=65){
					referencia.translateZ(10);
				}
			}
			else{
				if(referencia.position.z<=65){
					referencia.translateZ(10);
				}
			}				
			break;
		case 13 :  //Enter
			if(indicador===1){
				if (torreBlanca1.position.x===referencia.position.x && torreBlanca1.position.z===referencia.position.z){
					TorreBlanca.prototype.sense = function(environment){
						this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
						var obstaculo = this.sensor.intersectObjects(referencia,true);
						if(obstaculo.length >0){
							this.colision = 1;
							this.step=0;							
						}	
						else{
							this.colision = 0;
							this.step=0.25;							
						}
					} //Termino Prototype sense
					TorreBlanca.prototype.act = function(environment){ 	
					if (this.colision!=1){ //Si no está chocando
						if(torreBlanca1.position.x<=referencia.position.x) //Checa el sentido del avance de la pieza según la referencia en x
						  torreBlanca1.position.x += this.step;
						else
						  torreBlanca1.position.x -= this.step;
					      }
					if (this.colision!=1){ //Si no está chocando
						if(torreBlanca1.position.z<=referencia.position.z) //Checa el sentido del avance de la pieza según la referencia en z
						  torreBlanca1.position.z += this.step;
						else
						  torreBlanca1.position.z -= this.step;
					      }
						/////////////////////////////////  Revisar si existen piezas enemigas y las destruye  ///////////////////
						if((torreBlanca1.position.x==reyNegro.position.x && torreBlanca1.position.z==reyNegro.position.z)&&(torreBlanca1.position.y==reyNegro.position.y)){
							escena.remove(reyNegro);
							alert("Fin del juego, equipo blanco ha ganado");
						}
						if((torreBlanca1.position.x==reinaNegra.position.x && torreBlanca1.position.z==reinaNegra.position.z)&&(torreBlanca1.position.y==reinaNegra.position.y)){
							escena.remove(reinaNegra);
						}
						if((torreBlanca1.position.x==caballoNegro1.position.x && torreBlanca1.position.z==caballoNegro1.position.z)&&(torreBlanca1.position.y==caballoNegro1.position.y)){
							escena.remove(caballoNegro1);
						}
						if((torreBlanca1.position.x==caballoNegro2.position.x && torreBlanca1.position.z==caballoNegro2.position.z)&&(torreBlanca1.position.y==caballoNegro2.position.y)){
							escena.remove(caballoNegro2);
						}				
						if((torreBlanca1.position.x==alfilNegro1.position.x && torreBlanca1.position.z==alfilNegro1.position.z)&&(torreBlanca1.position.y==alfilNegro1.position.y)){
							escena.remove(alfilNegro1);
						}
						if((torreBlanca1.position.x==alfilNegro2.position.x && torreBlanca1.position.z==alfilNegro2.position.z)&&(torreBlanca1.position.y==alfil.position.y)){
							escena.remove(caballoNegro2);
						}				
						if((torreBlanca1.position.x==torreNegra1.position.x && torreBlanca1.position.z==torreNegra1.position.z)&&(torreBlanca1.position.y==torreNegra1.position.y)){
							escena.remove(torreNegra1);
						}
						if((torreBlanca1.position.x==torreNegra2.position.x && torreBlanca1.position.z==torreNegra2.position.z)&&(torreBlanca1.position.y==torreNegra2.position.y)){
							escena.remove(torreNegra2);
						}				
						if((torreBlanca1.position.x==peonNegro1.position.x && torreBlanca1.position.z==peonNegro1.position.z)&&(torreBlanca1.position.y==peonNegro1.position.y)){
							escena.remove(peonNegro1);
						}
						if((torreBlanca1.position.x==peonNegro2.position.x && torreBlanca1.position.z==peonNegro2.position.z)&&(torreBlanca1.position.y==peonNegro2.position.y)){
							escena.remove(peonNegro2);
						}				
						if((torreBlanca1.position.x==peonNegro3.position.x && torreBlanca1.position.z==peonNegro3.position.z)&&(torreBlanca1.position.y==peonNegro3.position.y)){
							escena.remove(peonNegro3);
						}								
						if((torreBlanca1.position.x==peonNegro4.position.x && torreBlanca1.position.z==peonNegro4.position.z)&&(torreBlanca1.position.y==peonNegro4.position.y)){
							escena.remove(peonNegro4);
						}							
						if((torreBlanca1.position.x==peonNegro5.position.x && torreBlanca1.position.z==peonNegro5.position.z)&&(torreBlanca1.position.y==peonNegro5.position.y)){
							escena.remove(peonNegro5);
						}								
						if((torreBlanca1.position.x==peonNegro6.position.x && torreBlanca1.position.z==peonNegro6.position.z)&&(torreBlanca1.position.y==peonNegro6.position.y)){
							escena.remove(peonNegro6);
						}	
						if((torreBlanca1.position.x==peonNegro7.position.x && torreBlanca1.position.z==peonNegro7.position.z)&&(torreBlanca1.position.y==peonNegro7.position.y)){
							escena.remove(peonNegro7);
						}	
						if((torreBlanca1.position.x==peonNegro8.position.x && torreBlanca1.position.z==peonNegro8.position.z)&&(torreBlanca1.position.y==peonNegro8.position.y)){
							escena.remove(peonNegro8);
						}							
					} //Termino Prototype act
									
				}//Termino if ficha y referencia
			}//Termino if indicador
			break;
		     } //Termino de switch
	} //Termino de función
} //Termino de Prototype

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////  CONSTRUCTOR MOVIMIENTO INVALIDO  ///////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Negativo(x=0,y=0,z=0){
  Agent.call(this,x,y,z);
  var texturaNegativo = new THREE.MeshLambertMaterial({color: 0xff0000});
  this.add(new THREE.Mesh(new THREE.BoxGeometry(10, 10, 10), texturaNegativo));
  this.position.y=y;
  this.position.z=z;
  this.position.x=x;
}

Negativo.prototype = new Agent();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////  SETUP  ////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function setup(){
   
   escena = new Environment();
	
   camara = new THREE.PerspectiveCamera();
   camara.position.y = 150;
   camara.position.x = 40;
   camara.position.z = 100;
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

	reyNegro = new ReyNegro(45, 10, 5);
  	reyBlanco = new ReyBlanco(45, 10, 75);
	escena.add(reyNegro, reyBlanco);
   	reinaNegra = new ReinaNegra(35, 10, 5);
	reinaBlanca = new ReinaBlanca(35, 10, 75);
   	escena.add(reinaNegra, reinaBlanca);
   	caballoNegro1 = new CaballoNegro(15, 10, 5);
   	caballoBlanco1 = new CaballoBlanco(15, 10, 75); 
   	caballoNegro2 = new CaballoNegro(65, 10, 5);
   	caballoBlanco2 = new CaballoBlanco(65, 10, 75); 
   	escena.add(caballoNegro1, caballoBlanco1);
   	escena.add(caballoNegro2, caballoBlanco2);
   	peonNegro1 = new PeonNegro(5, 10, 15);
   	peonBlanco1 = new PeonBlanco(5, 10, 65); 
   	escena.add(peonNegro1, peonBlanco1);
   	peonNegro2 = new PeonNegro(15, 10, 15);
   	peonBlanco2 = new PeonBlanco(15, 10, 65); 
   	escena.add(peonNegro2, peonBlanco2);
   	peonNegro3 = new PeonNegro(25, 10, 15);
   	peonBlanco3 = new PeonBlanco(25, 10, 65); 
   	escena.add(peonNegro3, peonBlanco3);
   	peonNegro4 = new PeonNegro(35, 10, 15);
   	peonBlanco4 = new PeonBlanco(35, 10, 65); 
   	escena.add(peonNegro4, peonBlanco4);
   	peonNegro5 = new PeonNegro(45, 10, 15);
   	peonBlanco5 = new PeonBlanco(45, 10, 65); 
   	escena.add(peonNegro5, peonBlanco5);
   	peonNegro6 = new PeonNegro(55, 10, 15);
   	peonBlanco6 = new PeonBlanco(55, 10, 65); 
   	escena.add(peonNegro6, peonBlanco6);
   	peonNegro7 = new PeonNegro(65, 10, 15);
   	peonBlanco7 = new PeonBlanco(65, 10, 65); 
   	escena.add(peonNegro7, peonBlanco7);
   	peonNegro8 = new PeonNegro(75, 10, 15);
   	peonBlanco8 = new PeonBlanco(75, 10, 65); 
   	escena.add(peonNegro8, peonBlanco8);
   	alfilNegro1 = new PeonNegro(25, 10, 5);
   	alfilBlanco1 = new PeonBlanco(25, 10, 75); 
   	escena.add(alfilNegro1, alfilBlanco1);
   	alfilNegro2 = new PeonNegro(55, 10, 5);
   	alfilBlanco2 = new PeonBlanco(55, 10, 75); 
   	escena.add(alfilNegro2, alfilBlanco2);
   	torreNegra1 = new TorreNegra(5, 10, 5);
	torreBlanca1 = new TorreBlanca(5, 10, 75);
   	escena.add(torreNegra1, torreBlanca1);
   	torreNegra2 = new TorreNegra(75, 10, 5);
	torreBlanca2 = new TorreBlanca(75, 10, 75);
   	escena.add(torreNegra2, torreBlanca2);
	
	referencia = new Referencia(5, 0, 75); 
	
	escena.add(referencia);
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

setup();
loop();
