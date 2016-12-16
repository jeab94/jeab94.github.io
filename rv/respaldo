var escena, renderizador, camara;
var luzPuntual1, luzPuntual2, luzPuntual3, luzPuntual4;
var tablero;

var cubo;
var cubos;
var marco1, marco2, marco3, marco4;
var orilla1, orilla2, orilla3, orilla4;
var material;

var objetivo, referencia, indicador=0;

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
//////////////////////////////////////////////  CONSTRUCTOR OBJETIVO  ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Objetivo(x=0,y=0,z=0){
  Agent.call(this,x,y,z);
  var texturaObjetivo = new THREE.MeshLambertMaterial({color: 0xff0000});
  this.add(new THREE.Mesh(new THREE.BoxGeometry(10, 10, 10), texturaObjetivo));
  this.position.y=y;
  this.position.z=z;
  this.position.x=x;
}

Objetivo.prototype = new Agent();

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
				if(referencia.position.x>=15){
					referencia.translateX(-10);
				}
			break;
		case 38 :  //Up
				if(referencia.position.z>=15){
					referencia.translateZ(-10);
				}
			break;
		case 39 :  //Right 
				if(referencia.position.x<=65){
					referencia.translateX(10);
				}
			break;
		case 40 :  //Down
				if(referencia.position.z<=65){
					referencia.translateZ(10);
				}
			break;
		case 13 :  //Enter
				indicador=1;
				if(indicador==1){ 
				objetivo = new Objetivo(referencia.position.x, 0, referencia.position.z);
				escena.add(objetivo);
				if (reyBlanco.position.x===referencia.position.x && reyBlanco.position.z===referencia.position.z){
					ReyBlanco.prototype.sense = function(environment){
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
					ReyBlanco.prototype.act = function(environment){ 	
					if (this.colision!=1){ //Si no está chocando
						if(reyBlanco.position.x<=referencia.position.x) //Checa el sentido del avance de la pieza según la referencia en x
						  reyBlanco.position.x += this.step;
						else
						  reyBlanco.position.x -= this.step;
					      }
					if (this.colision!=1){ //Si no está chocando
						if(reyBlanco.position.z<=referencia.position.z) //Checa el sentido del avance de la pieza según la referencia en z
						  reyBlanco.position.z += this.step;
						else
						  reyBlanco.position.z -= this.step;
					      }
						//////////////////////////////  Revisar si existen piezas enemigas y las destruye  //////////////////////
						if((reyBlanco.position.x==reyNegro.position.x && reyBlanco.position.z==reyNegro.position.z)&&(reyBlanco.position.y==reyNegro.position.y)){
							escena.remove(reyNegro);
							alert("Fin del juego, equipo blanco ha ganado");
						}
						if((reyBlanco.position.x==reinaNegra.position.x && reyBlanco.position.z==reinaNegra.position.z)&&(reyBlanco.position.y==reinaNegra.position.y)){
							escena.remove(reinaNegra);
						}
						if((reyBlanco.position.x==caballoNegro1.position.x && reyBlanco.position.z==caballoNegro1.position.z)&&(reyBlanco.position.y==caballoNegro1.position.y)){
							escena.remove(caballoNegro1);
						}
						if((reyBlanco.position.x==caballoNegro2.position.x && reyBlanco.position.z==caballoNegro2.position.z)&&(reyBlanco.position.y==caballoNegro2.position.y)){
							escena.remove(caballoNegro2);
						}				
						if((reyBlanco.position.x==alfilNegro1.position.x && reyBlanco.position.z==alfilNegro1.position.z)&&(reyBlanco.position.y==alfilNegro1.position.y)){
							escena.remove(alfilNegro1);
						}
						if((reyBlanco.position.x==alfilNegro2.position.x && reyBlanco.position.z==alfilNegro2.position.z)&&(reyBlanco.position.y==alfilNegro2.position.y)){
							escena.remove(alfilNegro2);
						}				
						if((reyBlanco.position.x==torreNegra1.position.x && reyBlanco.position.z==torreNegra1.position.z)&&(reyBlanco.position.y==torreNegra1.position.y)){
							escena.remove(torreNegra1);
						}
						if((reyBlanco.position.x==torreNegra2.position.x && reyBlanco.position.z==torreNegra2.position.z)&&(reyBlanco.position.y==torreNegra2.position.y)){
							escena.remove(torreNegra2);
						}				
						if((reyBlanco.position.x==peonNegro1.position.x && reyBlanco.position.z==peonNegro1.position.z)&&(reyBlanco.position.y==peonNegro1.position.y)){
							escena.remove(peonNegro1);
						}
						if((reyBlanco.position.x==peonNegro2.position.x && reyBlanco.position.z==peonNegro2.position.z)&&(reyBlanco.position.y==peonNegro2.position.y)){
							escena.remove(peonNegro2);
						}				
						if((reyBlanco.position.x==peonNegro3.position.x && reyBlanco.position.z==peonNegro3.position.z)&&(reyBlanco.position.y==peonNegro3.position.y)){
							escena.remove(peonNegro3);
						}								
						if((reyBlanco.position.x==peonNegro4.position.x && reyBlanco.position.z==peonNegro4.position.z)&&(reyBlanco.position.y==peonNegro4.position.y)){
							escena.remove(peonNegro4);
						}							
						if((reyBlanco.position.x==peonNegro5.position.x && reyBlanco.position.z==peonNegro5.position.z)&&(reyBlanco.position.y==peonNegro5.position.y)){
							escena.remove(peonNegro5);
						}								
						if((reyBlanco.position.x==peonNegro6.position.x && reyBlanco.position.z==peonNegro6.position.z)&&(reyBlanco.position.y==peonNegro6.position.y)){
							escena.remove(peonNegro6);
						}	
						if((reyBlanco.position.x==peonNegro7.position.x && reyBlanco.position.z==peonNegro7.position.z)&&(reyBlanco.position.y==peonNegro7.position.y)){
							escena.remove(peonNegro7);
						}	
						if((reyBlanco.position.x==peonNegro8.position.x && reyBlanco.position.z==peonNegro8.position.z)&&(reyBlanco.position.y==peonNegro8.position.y)){
							escena.remove(peonNegro8);
						}	
						//////////////////////////////  Revisar si existen piezas amigas y manda alerta ////////////////////////
						if (((((((((((((((reyBlanco.position.x==peonBlanco1.position.x && reyBlanco.position.z==peonBlanco1.position.z)||
						   (reyBlanco.position.x==peonBlanco2.position.x && reyBlanco.position.z==peonBlanco2.position.z))||
						   (reyBlanco.position.x==peonBlanco3.position.x && reyBlanco.position.z==peonBlanco3.position.z))||
						   (reyBlanco.position.x==peonBlanco4.position.x && reyBlanco.position.z==peonBlanco4.position.z))||
						   (reyBlanco.position.x==peonBlanco5.position.x && reyBlanco.position.z==peonBlanco5.position.z))||
						   (reyBlanco.position.x==peonBlanco6.position.x && reyBlanco.position.z==peonBlanco6.position.z))||
						   (reyBlanco.position.x==peonBlanco7.position.x && reyBlanco.position.z==peonBlanco7.position.z))||
						   (reyBlanco.position.x==peonBlanco8.position.x && reyBlanco.position.z==peonBlanco8.position.z))||
						   (reyBlanco.position.x==torreBlanca1.position.x && reyBlanco.position.z==torreBlanca1.position.z))||	  
						   (reyBlanco.position.x==torreBlanca2.position.x && reyBlanco.position.z==torreBlanca2.position.z))||
						   (reyBlanco.position.x==alfilBlanco1.position.x && reyBlanco.position.z==alfilBlanco1.position.z))||
						   (reyBlanco.position.x==alfilBlanco2.position.x && reyBlanco.position.z==alfilBlanco2.position.z))||
						   (reyBlanco.position.x==caballoBlanco1.position.x && reyBlanco.position.z==caballoBlanco1.position.z))||
						   (reyBlanco.position.x==caballoBlanco2.position.x && reyBlanco.position.z==caballoBlanco2.position.z))||
						   (reyBlanco.position.x==reinaBlanca.position.x && reyBlanco.position.z==reinaBlanca.position.z)){
							alert("Movimiento inválido");
							reyBlanco.position.x=referencia.position.x;reyBlanco.position.z=referencia.position.z;
						}
					} //Termino Prototype act				
				}//Termino if ficha y referencia	

				if (reyNegro.position.x===referencia.position.x && reyNegro.position.z===referencia.position.z){
					ReyNegro.prototype.sense = function(environment){
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
					ReyNegro.prototype.act = function(environment){ 	
					if (this.colision!=1){ //Si no está chocando
						if(reyNegro.position.x<=referencia.position.x) //Checa el sentido del avance de la pieza según la referencia en x
						  reyNegro.position.x += this.step;
						else
						  reyNegro.position.x -= this.step;
					      }
					if (this.colision!=1){ //Si no está chocando
						if(reyNegro.position.z<=referencia.position.z) //Checa el sentido del avance de la pieza según la referencia en z
						  reyNegro.position.z += this.step;
						else
						  reyNegro.position.z -= this.step;
					      }
						//////////////////////////////  Revisar si existen piezas enemigas y las destruye  //////////////////////
						if((reyNegro.position.x==reyBlanco.position.x && reyNegro.position.z==reyBlanco.position.z)&&(reyNegro.position.y==reyBlanco.position.y)){
							escena.remove(reyBlanco);
							alert("Fin del juego, equipo negro ha ganado");
						}
						if((reyNegro.position.x==reinaBlanca.position.x && reyNegro.position.z==reinaBlanca.position.z)&&(reyNegro.position.y==reinaBlanca.position.y)){
							escena.remove(reinaBlanca);
						}
						if((reyNegro.position.x==caballoBlanco1.position.x && reyNegro.position.z==caballoBlanco1.position.z)&&(reyNegro.position.y==caballoBlanco1.position.y)){
							escena.remove(caballoBlanco1);
						}
						if((reyNegro.position.x==caballoBlanco2.position.x && reyNegro.position.z==caballoBlanco2.position.z)&&(reyNegro.position.y==caballoBlanco2.position.y)){
							escena.remove(caballoBlanco2);
						}				
						if((reyNegro.position.x==alfilBlanco1.position.x && reyNegro.position.z==alfilBlanco1.position.z)&&(reyNegro.position.y==alfilBlanco1.position.y)){
							escena.remove(alfilBlanco1);
						}
						if((reyNegro.position.x==alfilBlanco2.position.x && reyNegro.position.z==alfilBlanco2.position.z)&&(reyNegro.position.y==alfilBlanco2.position.y)){
							escena.remove(alfilBlanco2);
						}				
						if((reyNegro.position.x==torreBlanca1.position.x && reyNegro.position.z==torreBlanca1.position.z)&&(reyNegro.position.y==torreBlanca1.position.y)){
							escena.remove(torreBlanca1);
						}
						if((reyNegro.position.x==torreBlanca2.position.x && reyNegro.position.z==torreBlanca2.position.z)&&(reyNegro.position.y==torreBlanca2.position.y)){
							escena.remove(torreBlanca2);
						}				
						if((reyNegro.position.x==peonBlanco1.position.x && reyNegro.position.z==peonBlanco1.position.z)&&(reyNegro.position.y==peonBlanco1.position.y)){
							escena.remove(peonBlanco1);
						}
						if((reyNegro.position.x==peonBlanco2.position.x && reyNegro.position.z==peonBlanco2.position.z)&&(reyNegro.position.y==peonBlanco2.position.y)){
							escena.remove(peonBlanco2);
						}				
						if((reyNegro.position.x==peonBlanco3.position.x && reyNegro.position.z==peonBlanco3.position.z)&&(reyNegro.position.y==peonBlanco3.position.y)){
							escena.remove(peonBlanco3);
						}								
						if((reyNegro.position.x==peonBlanco4.position.x && reyNegro.position.z==peonBlanco4.position.z)&&(reyNegro.position.y==peonBlanco4.position.y)){
							escena.remove(peonBlanco4);
						}							
						if((reyNegro.position.x==peonBlanco5.position.x && reyNegro.position.z==peonBlanco5.position.z)&&(reyNegro.position.y==peonBlanco5.position.y)){
							escena.remove(peonBlanco5);
						}								
						if((reyNegro.position.x==peonBlanco6.position.x && reyNegro.position.z==peonBlanco6.position.z)&&(reyNegro.position.y==peonBlanco6.position.y)){
							escena.remove(peonBlanco6);
						}	
						if((reyNegro.position.x==peonBlanco7.position.x && reyNegro.position.z==peonBlanco7.position.z)&&(reyNegro.position.y==peonBlanco7.position.y)){
							escena.remove(peonBlanco7);
						}	
						if((reyNegro.position.x==peonBlanco8.position.x && reyNegro.position.z==peonBlanco8.position.z)&&(reyNegro.position.y==peonBlanco8.position.y)){
							escena.remove(peonBlanco8);
						}
						//////////////////////////////  Revisar si existen piezas amigas y manda alerta ////////////////////////
						if (((((((((((((((reyNegro.position.x==peonNegro1.position.x && reyNegro.position.z==peonNegro1.position.z)||
						   (reyNegro.position.x==peonNegro2.position.x && reyNegro.position.z==peonNegro2.position.z))||
						   (reyNegro.position.x==peonNegro3.position.x && reyNegro.position.z==peonNegro3.position.z))||
						   (reyNegro.position.x==peonNegro4.position.x && reyNegro.position.z==peonNegro4.position.z))||
						   (reyNegro.position.x==peonNegro5.position.x && reyNegro.position.z==peonNegro5.position.z))||
						   (reyNegro.position.x==peonNegro6.position.x && reyNegro.position.z==peonNegro6.position.z))||
						   (reyNegro.position.x==peonNegro7.position.x && reyNegro.position.z==peonNegro7.position.z))||
						   (reyNegro.position.x==peonNegro8.position.x && reyNegro.position.z==peonNegro8.position.z))||
						   (reyNegro.position.x==torreNegra1.position.x && reyNegro.position.z==torreNegra1.position.z))||	  
						   (reyNegro.position.x==torreNegra2.position.x && reyNegro.position.z==torreNegra2.position.z))||
						   (reyNegro.position.x==alfilNegro1.position.x && reyNegro.position.z==alfilNegro1.position.z))||
						   (reyNegro.position.x==alfilNegro2.position.x && reyNegro.position.z==alfilNegro2.position.z))||
						   (reyNegro.position.x==caballoNegro1.position.x && reyNegro.position.z==caballoNegro1.position.z))||
						   (reyNegro.position.x==caballoNegro2.position.x && reyNegro.position.z==caballoNegro2.position.z))||
						   (reyNegro.position.x==reinaNegra.position.x && reyNegro.position.z==reinaNegra.position.z)){
							alert("Movimiento inválido");
							reyNegro.position.x=referencia.position.x;reyNegro.position.z=referencia.position.z;
						}
					} //Termino Prototype act				
				}//Termino if ficha y referencia	
						
				
				if (reinaBlanca.position.x===referencia.position.x && reinaBlanca.position.z===referencia.position.z){
					ReinaBlanca.prototype.sense = function(environment){
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
					ReinaBlanca.prototype.act = function(environment){ 	
					if (this.colision!=1){ //Si no está chocando
						if(reinaBlanca.position.x<=referencia.position.x) //Checa el sentido del avance de la pieza según la referencia en x
						  reinaBlanca.position.x += this.step;
						else
						  reinaBlanca.position.x -= this.step;
					      }
					if (this.colision!=1){ //Si no está chocando
						if(reinaBlanca.position.z<=referencia.position.z) //Checa el sentido del avance de la pieza según la referencia en z
						  reinaBlanca.position.z += this.step;
						else
						  reinaBlanca.position.z -= this.step;
					      }
						//////////////////////////////  Revisar si existen piezas enemigas y las destruye  //////////////////////
						if((reinaBlanca.position.x==reyNegro.position.x && reinaBlanca.position.z==reyNegro.position.z)&&(reinaBlanca.position.y==reyNegro.position.y)){
							escena.remove(reyNegro);
							alert("Fin del juego, equipo blanco ha ganado");
						}
						if((reinaBlanca.position.x==reinaNegra.position.x && reinaBlanca.position.z==reinaNegra.position.z)&&(reinaBlanca.position.y==reinaNegra.position.y)){
							escena.remove(reinaNegra);
						}
						if((reinaBlanca.position.x==caballoNegro1.position.x && reinaBlanca.position.z==caballoNegro1.position.z)&&(reinaBlanca.position.y==caballoNegro1.position.y)){
							escena.remove(caballoNegro1);
						}
						if((reinaBlanca.position.x==caballoNegro2.position.x && reinaBlanca.position.z==caballoNegro2.position.z)&&(reinaBlanca.position.y==caballoNegro2.position.y)){
							escena.remove(caballoNegro2);
						}				
						if((reinaBlanca.position.x==alfilNegro1.position.x && reinaBlanca.position.z==alfilNegro1.position.z)&&(reinaBlanca.position.y==alfilNegro1.position.y)){
							escena.remove(alfilNegro1);
						}
						if((reinaBlanca.position.x==alfilNegro2.position.x && reinaBlanca.position.z==alfilNegro2.position.z)&&(reinaBlanca.position.y==alfilNegro2.position.y)){
							escena.remove(alfilNegro2);
						}				
						if((reinaBlanca.position.x==torreNegra1.position.x && reinaBlanca.position.z==torreNegra1.position.z)&&(reinaBlanca.position.y==torreNegra1.position.y)){
							escena.remove(torreNegra1);
						}
						if((reinaBlanca.position.x==torreNegra2.position.x && reinaBlanca.position.z==torreNegra2.position.z)&&(reinaBlanca.position.y==torreNegra2.position.y)){
							escena.remove(torreNegra2);
						}				
						if((reinaBlanca.position.x==peonNegro1.position.x && reinaBlanca.position.z==peonNegro1.position.z)&&(reinaBlanca.position.y==peonNegro1.position.y)){
							escena.remove(peonNegro1);
						}
						if((reinaBlanca.position.x==peonNegro2.position.x && reinaBlanca.position.z==peonNegro2.position.z)&&(reinaBlanca.position.y==peonNegro2.position.y)){
							escena.remove(peonNegro2);
						}				
						if((reinaBlanca.position.x==peonNegro3.position.x && reinaBlanca.position.z==peonNegro3.position.z)&&(reinaBlanca.position.y==peonNegro3.position.y)){
							escena.remove(peonNegro3);
						}								
						if((reinaBlanca.position.x==peonNegro4.position.x && reinaBlanca.position.z==peonNegro4.position.z)&&(reinaBlanca.position.y==peonNegro4.position.y)){
							escena.remove(peonNegro4);
						}							
						if((reinaBlanca.position.x==peonNegro5.position.x && reinaBlanca.position.z==peonNegro5.position.z)&&(reinaBlanca.position.y==peonNegro5.position.y)){
							escena.remove(peonNegro5);
						}								
						if((reinaBlanca.position.x==peonNegro6.position.x && reinaBlanca.position.z==peonNegro6.position.z)&&(reinaBlanca.position.y==peonNegro6.position.y)){
							escena.remove(peonNegro6);
						}	
						if((reinaBlanca.position.x==peonNegro7.position.x && reinaBlanca.position.z==peonNegro7.position.z)&&(reinaBlanca.position.y==peonNegro7.position.y)){
							escena.remove(peonNegro7);
						}	
						if((reinaBlanca.position.x==peonNegro8.position.x && reinaBlanca.position.z==peonNegro8.position.z)&&(reinaBlanca.position.y==peonNegro8.position.y)){
							escena.remove(peonNegro8);
						}	
					
						//////////////////////////////  Revisar si existen piezas amigas y manda alerta ////////////////////////
						if (((((((((((((((reinaBlanca.position.x==peonBlanco1.position.x && reinaBlanca.position.z==peonBlanco1.position.z)||
						   (reinaBlanca.position.x==peonBlanco2.position.x && reinaBlanca.position.z==peonBlanco2.position.z))||
						   (reinaBlanca.position.x==peonBlanco3.position.x && reinaBlanca.position.z==peonBlanco3.position.z))||
						   (reinaBlanca.position.x==peonBlanco4.position.x && reinaBlanca.position.z==peonBlanco4.position.z))||
						   (reinaBlanca.position.x==peonBlanco5.position.x && reinaBlanca.position.z==peonBlanco5.position.z))||
						   (reinaBlanca.position.x==peonBlanco6.position.x && reinaBlanca.position.z==peonBlanco6.position.z))||
						   (reinaBlanca.position.x==peonBlanco7.position.x && reinaBlanca.position.z==peonBlanco7.position.z))||
						   (reinaBlanca.position.x==peonBlanco8.position.x && reinaBlanca.position.z==peonBlanco8.position.z))||
						   (reinaBlanca.position.x==torreBlanca1.position.x && reinaBlanca.position.z==torreBlanca1.position.z))||
						   (reinaBlanca.position.x==torreBlanca2.position.x && reinaBlanca.position.z==torreBlanca2.position.z))||	 
						   (reinaBlanca.position.x==alfilBlanco1.position.x && reinaBlanca.position.z==alfilBlanco1.position.z))||
						   (reinaBlanca.position.x==alfilBlanco2.position.x && reinaBlanca.position.z==alfilBlanco2.position.z))||
						   (reinaBlanca.position.x==caballoBlanco1.position.x && reinaBlanca.position.z==caballoBlanco1.position.z))||
						   (reinaBlanca.position.x==caballoBlanco2.position.x && reinaBlanca.position.z==caballoBlanco2.position.z))||
						   (reinaBlanca.position.x==reyBlanco.position.x && reinaBlanca.position.z==reyBlanco.position.z)){
							alert("Movimiento inválido");
							reinaBlanca.position.x=objetivo.position.x;reinaBlanca.position.z=objetivo.position.z;
						}
					} //Termino Prototype act				
				}//Termino if ficha y referencia

				if (reinaNegra.position.x===referencia.position.x && reinaNegra.position.z===referencia.position.z){
					ReinaNegra.prototype.sense = function(environment){
						this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
						var obstaculo = this.sensor.intersectObjects(objetivo,true);
						if(obstaculo.length >0){
							this.colision = 1;
							this.step=0;							
						}	
						else{
							this.colision = 0;
							this.step=0.25;							
						}
					} //Termino Prototype sense	
					
					ReinaNegra.prototype.act = function(environment){ 	
					if (this.colision!=1){ //Si no está chocando
						if(reinaNegra.position.x<=objetivo.position.x) //Checa el sentido del avance de la pieza según la referencia en x
						  reinaNegra.position.x += this.step;
						else
						  reinaNegra.position.x -= this.step;
					      }
					if (this.colision!=1){ //Si no está chocando
						if(reinaNegra.position.z<=objetivo.position.z) //Checa el sentido del avance de la pieza según la referencia en z
						  reinaNegra.position.z += this.step;
						else
						  reinaNegra.position.z -= this.step;
					      }	

						//////////////////////////////  Revisar si existen piezas enemigas y las destruye  //////////////////////
						if((reinaNegra.position.x==reyBlanco.position.x && reinaNegra.position.z==reyBlanco.position.z)&&(reinaNegra.position.y==reyBlanco.position.y)){
							escena.remove(reyBlanco);
							alert("Fin del juego, equipo blanco ha ganado");
						}
						if((reinaNegra.position.x==reinaNegra.position.x && reinaNegra.position.z==reinaNegra.position.z)&&(reinaNegra.position.y==reinaNegra.position.y)){
							escena.remove(reinaNegra);
						}
						if((reinaNegra.position.x==caballoBlanco1.position.x && reinaNegra.position.z==caballoBlanco1.position.z)&&(reinaNegra.position.y==caballoBlanco1.position.y)){
							escena.remove(caballoBlanco1);
						}
						if((reinaNegra.position.x==caballoBlanco2.position.x && reinaNegra.position.z==caballoBlanco2.position.z)&&(reinaNegra.position.y==caballoBlanco2.position.y)){
							escena.remove(caballoBlanco2);
						}				
						if((reinaNegra.position.x==alfilBlanco1.position.x && reinaNegra.position.z==alfilBlanco1.position.z)&&(reinaNegra.position.y==alfilBlanco1.position.y)){
							escena.remove(alfilBlanco1);
						}
						if((reinaNegra.position.x==alfilBlanco2.position.x && reinaNegra.position.z==alfilBlanco2.position.z)&&(reinaNegra.position.y==alfilBlanco2.position.y)){
							escena.remove(alfilBlanco2);
						}				
						if((reinaNegra.position.x==torreBlanca1.position.x && reinaNegra.position.z==torreBlanca1.position.z)&&(reinaNegra.position.y==torreBlanca1.position.y)){
							escena.remove(torreBlanca1);
						}
						if((reinaNegra.position.x==torreBlanca2.position.x && reinaNegra.position.z==torreBlanca2.position.z)&&(reinaNegra.position.y==torreBlanca2.position.y)){
							escena.remove(torreBlanca2);
						}				
						if((reinaNegra.position.x==peonBlanco1.position.x && reinaNegra.position.z==peonBlanco1.position.z)&&(reinaNegra.position.y==peonBlanco1.position.y)){
							escena.remove(peonBlanco1);
						}
						if((reinaNegra.position.x==peonBlanco2.position.x && reinaNegra.position.z==peonBlanco2.position.z)&&(reinaNegra.position.y==peonBlanco2.position.y)){
							escena.remove(peonBlanco2);
						}				
						if((reinaNegra.position.x==peonBlanco3.position.x && reinaNegra.position.z==peonBlanco3.position.z)&&(reinaNegra.position.y==peonBlanco3.position.y)){
							escena.remove(peonBlanco3);
						}								
						if((reinaNegra.position.x==peonBlanco4.position.x && reinaNegra.position.z==peonBlanco4.position.z)&&(reinaNegra.position.y==peonBlanco4.position.y)){
							escena.remove(peonBlanco4);
						}							
						if((reinaNegra.position.x==peonBlanco5.position.x && reinaNegra.position.z==peonBlanco5.position.z)&&(reinaNegra.position.y==peonBlanco5.position.y)){
							escena.remove(peonBlanco5);
						}								
						if((reinaNegra.position.x==peonBlanco6.position.x && reinaNegra.position.z==peonBlanco6.position.z)&&(reinaNegra.position.y==peonBlanco6.position.y)){
							escena.remove(peonBlanco6);
						}	
						if((reinaNegra.position.x==peonBlanco7.position.x && reinaNegra.position.z==peonBlanco7.position.z)&&(reinaNegra.position.y==peonBlanco7.position.y)){
							escena.remove(peonBlanco7);
						}	
						if((reinaNegra.position.x==peonBlanco8.position.x && reinaNegra.position.z==peonBlanco8.position.z)&&(reinaNegra.position.y==peonBlanco8.position.y)){
							escena.remove(peonBlanco8);
						}	
					
						//////////////////////////////  Revisar si existen piezas amigas y manda alerta ////////////////////////
						if (((((((((((((((reinaNegra.position.x==peonNegro1.position.x && reinaNegra.position.z==peonNegro1.position.z)||
						   (reinaNegra.position.x==peonNegro2.position.x && reinaNegra.position.z==peonNegro2.position.z))||
						   (reinaNegra.position.x==peonNegro3.position.x && reinaNegra.position.z==peonNegro3.position.z))||
						   (reinaNegra.position.x==peonNegro4.position.x && reinaNegra.position.z==peonNegro4.position.z))||
						   (reinaNegra.position.x==peonNegro5.position.x && reinaNegra.position.z==peonNegro5.position.z))||
						   (reinaNegra.position.x==peonNegro6.position.x && reinaNegra.position.z==peonNegro6.position.z))||
						   (reinaNegra.position.x==peonNegro7.position.x && reinaNegra.position.z==peonNegro7.position.z))||
						   (reinaNegra.position.x==peonNegro8.position.x && reinaNegra.position.z==peonNegro8.position.z))||
						   (reinaNegra.position.x==torreNegra1.position.x && reinaNegra.position.z==torreNegra1.position.z))||
						   (reinaNegra.position.x==torreNegra2.position.x && reinaNegra.position.z==torreNegra2.position.z))||
						   (reinaNegra.position.x==alfilNegro1.position.x && reinaNegra.position.z==alfilNegro1.position.z))||
						   (reinaNegra.position.x==alfilNegro2.position.x && reinaNegra.position.z==alfilNegro2.position.z))||
						   (reinaNegra.position.x==caballoNegro1.position.x && reinaNegra.position.z==caballoNegro1.position.z))||
						   (reinaNegra.position.x==caballoNegro2.position.x && reinaNegra.position.z==caballoNegro2.position.z))||
						   (reinaNegra.position.x==reyNegro.position.x && reinaNegra.position.z==reyNegro.position.z)){
							alert("Movimiento inválido");
							reinaNegra.position.x=objetivo.position.x;reinaNegra.position.z=objetivo.position.z;
						}
					} //Termino Prototype act				
				}//Termino if ficha y referencia

						
				if (torreBlanca1.position.x===objetivo.position.x && torreBlanca1.position.z===objetivo.position.z){
					TorreBlanca.prototype.sense = function(environment){
						this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
						var obstaculo = this.sensor.intersectObjects(objetivo,true);
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
						if(torreBlanca1.position.x<=objetivo.position.x) //Checa el sentido del avance de la pieza según la referencia en x
						  torreBlanca1.position.x += this.step;
						else
						  torreBlanca1.position.x -= this.step;
					      }
					if (this.colision!=1){ //Si no está chocando
						if(torreBlanca1.position.z<=objetivo.position.z) //Checa el sentido del avance de la pieza según la referencia en z
						  torreBlanca1.position.z += this.step;
						else
						  torreBlanca1.position.z -= this.step;
					      }
						//////////////////////////////  Revisar si existen piezas enemigas y las destruye  //////////////////////
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
						if((torreBlanca1.position.x==alfilNegro2.position.x && torreBlanca1.position.z==alfilNegro2.position.z)&&(torreBlanca1.position.y==alfilNegro2.position.y)){
							escena.remove(alfilNegro2);
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
						
						//////////////////////////////  Revisar si existen piezas amigas y manda alerta ////////////////////////
						if (((((((((((((((torreBlanca1.position.x==peonBlanco1.position.x && torreBlanca1.position.z==peonBlanco1.position.z)||
						   (torreBlanca1.position.x==peonBlanco2.position.x && torreBlanca1.position.z==peonBlanco2.position.z))||
						   (torreBlanca1.position.x==peonBlanco3.position.x && torreBlanca1.position.z==peonBlanco3.position.z))||
						   (torreBlanca1.position.x==peonBlanco4.position.x && torreBlanca1.position.z==peonBlanco4.position.z))||
						   (torreBlanca1.position.x==peonBlanco5.position.x && torreBlanca1.position.z==peonBlanco5.position.z))||
						   (torreBlanca1.position.x==peonBlanco6.position.x && torreBlanca1.position.z==peonBlanco6.position.z))||
						   (torreBlanca1.position.x==peonBlanco7.position.x && torreBlanca1.position.z==peonBlanco7.position.z))||
						   (torreBlanca1.position.x==peonBlanco8.position.x && torreBlanca1.position.z==peonBlanco8.position.z))||
						   (torreBlanca1.position.x==torreBlanca2.position.x && torreBlanca1.position.z==torreBlanca2.position.z))||
						   (torreBlanca1.position.x==alfilBlanco1.position.x && torreBlanca1.position.z==alfilBlanco1.position.z))||
						   (torreBlanca1.position.x==alfilBlanco2.position.x && torreBlanca1.position.z==alfilBlanco2.position.z))||
						   (torreBlanca1.position.x==caballoBlanco1.position.x && torreBlanca1.position.z==caballoBlanco1.position.z))||
						   (torreBlanca1.position.x==caballoBlanco2.position.x && torreBlanca1.position.z==caballoBlanco2.position.z))||
						   (torreBlanca1.position.x==reyBlanco.position.x && torreBlanca1.position.z==reyBlanco.position.z))||
						   (torreBlanca1.position.x==reinaBlanca.position.x && torreBlanca1.position.z==reinaBlanca.position.z)){
							alert("Movimiento inválido");
							torreBlanca1.position.x=objetivo.position.x;torreBlanca1.position.z=objetivo.position.z;
						}
					} //Termino Prototype act				
				}//Termino if ficha y referencia

				if (torreNegra1.position.x===objetivo.position.x && torreNegra1.position.z===objetivo.position.z){
					TorreNegra.prototype.sense = function(environment){
						this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
						var obstaculo = this.sensor.intersectObjects(objetivo,true);
						if(obstaculo.length >0){
							this.colision = 1;
							this.step=0;							
						}	
						else{
							this.colision = 0;
							this.step=0.25;							
						}
					} //Termino Prototype sense
					TorreNegra.prototype.act = function(environment){ 	
					if (this.colision!=1){ //Si no está chocando
						if(torreNegra1.position.x<=objetivo.position.x) //Checa el sentido del avance de la pieza según la referencia en x
						  torreNegra1.position.x += this.step;
						else
						  torreNegra1.position.x -= this.step;
					      }
					if (this.colision!=1){ //Si no está chocando
						if(torreNegra1.position.z<=objetivo.position.z) //Checa el sentido del avance de la pieza según la referencia en z
						  torreNegra1.position.z += this.step;
						else
						  torreNegra1.position.z -= this.step;
					      }
						//////////////////////////////  Revisar si existen piezas enemigas y las destruye  //////////////////////
						if((torreNegra1.position.x==reyBlanco.position.x && torreNegra1.position.z==reyBlanco.position.z)&&(torreNegra1.position.y==reyBlanco.position.y)){
							escena.remove(reyBlanco);
							alert("Fin del juego, equipo negro ha ganado");
						}
						if((torreNegra1.position.x==reinaBlanca.position.x && torreNegra1.position.z==reinaBlanca.position.z)&&(torreNegra1.position.y==reinaBlanca.position.y)){
							escena.remove(reinaBlanca);
						}
						if((torreNegra1.position.x==caballoBlanco1.position.x && torreNegra1.position.z==caballoBlanco1.position.z)&&(torreNegra1.position.y==caballoBlanco1.position.y)){
							escena.remove(caballoBlanco1);
						}
						if((torreNegra1.position.x==caballoBlanco2.position.x && torreNegra1.position.z==caballoBlanco2.position.z)&&(torreNegra1.position.y==caballoBlanco2.position.y)){
							escena.remove(caballoBlanco2);
						}				
						if((torreNegra1.position.x==alfilBlanco1.position.x && torreNegra1.position.z==alfilBlanco1.position.z)&&(torreNegra1.position.y==alfilBlanco1.position.y)){
							escena.remove(alfilBlanco1);
						}
						if((torreNegra1.position.x==alfilBlanco2.position.x && torreNegra1.position.z==alfilBlanco2.position.z)&&(torreNegra1.position.y==alfilBlanco2.position.y)){
							escena.remove(alfilBlanco2);
						}				
						if((torreNegra1.position.x==torreBlanca1.position.x && torreNegra1.position.z==torreNegra1.position.z)&&(torreNegra1.position.y==torreBlanca1.position.y)){
							escena.remove(torreBlanca1);
						}
						if((torreNegra1.position.x==torreBlanca2.position.x && torreNegra1.position.z==torreBlanca2.position.z)&&(torreNegra1.position.y==torreBlanca2.position.y)){
							escena.remove(torreBlanca2);
						}				
						if((torreNegra1.position.x==peonBlanco1.position.x && torreNegra1.position.z==peonBlanco1.position.z)&&(torreNegra1.position.y==peonBlanco1.position.y)){
							escena.remove(peonBlanco1);
						}
						if((torreNegra1.position.x==peonBlanco2.position.x && torreNegra1.position.z==peonBlanco2.position.z)&&(torreNegra1.position.y==peonBlanco2.position.y)){
							escena.remove(peonBlanco2);
						}				
						if((torreNegra1.position.x==peonBlanco3.position.x && torreNegra1.position.z==peonBlanco3.position.z)&&(torreNegra1.position.y==peonBlanco3.position.y)){
							escena.remove(peonBlanco3);
						}								
						if((torreNegra1.position.x==peonBlanco4.position.x && torreNegra1.position.z==peonBlanco4.position.z)&&(torreNegra1.position.y==peonBlanco4.position.y)){
							escena.remove(peonBlanco4);
						}							
						if((torreNegra1.position.x==peonBlanco5.position.x && torreNegra1.position.z==peonBlanco5.position.z)&&(torreNegra1.position.y==peonBlanco5.position.y)){
							escena.remove(peonBlanco5);
						}								
						if((torreNegra1.position.x==peonBlanco6.position.x && torreNegra1.position.z==peonBlanco6.position.z)&&(torreNegra1.position.y==peonBlanco6.position.y)){
							escena.remove(peonBlanco6);
						}	
						if((torreNegra1.position.x==peonBlanco7.position.x && torreNegra1.position.z==peonBlanco7.position.z)&&(torreNegra1.position.y==peonBlanco7.position.y)){
							escena.remove(peonBlanco7);
						}	
						if((torreNegra1.position.x==peonBlanco8.position.x && torreNegra1.position.z==peonBlanco8.position.z)&&(torreNegra1.position.y==peonBlanco8.position.y)){
							escena.remove(peonBlanco8);
						}	
						
						//////////////////////////////  Revisar si existen piezas amigas y manda alerta ////////////////////////
						if (((((((((((((((torreNegra1.position.x==peonNegro1.position.x && torreNegra1.position.z==peonNegro1.position.z)||
						   (torreNegra1.position.x==peonNegro2.position.x && torreNegra1.position.z==peonNegro2.position.z))||
						   (torreNegra1.position.x==peonNegro3.position.x && torreNegra1.position.z==peonNegro3.position.z))||
						   (torreNegra1.position.x==peonNegro4.position.x && torreNegra1.position.z==peonNegro4.position.z))||
						   (torreNegra1.position.x==peonNegro5.position.x && torreNegra1.position.z==peonNegro5.position.z))||
						   (torreNegra1.position.x==peonNegro6.position.x && torreNegra1.position.z==peonNegro6.position.z))||
						   (torreNegra1.position.x==peonNegro7.position.x && torreNegra1.position.z==peonNegro7.position.z))||
						   (torreNegra1.position.x==peonNegro8.position.x && torreNegra1.position.z==peonNegro8.position.z))||
						   (torreNegra1.position.x==torreNegra2.position.x && torreNegra1.position.z==torreNegra2.position.z))||
						   (torreNegra1.position.x==alfilNegro1.position.x && torreNegra1.position.z==alfilNegro1.position.z))||
						   (torreNegra1.position.x==alfilNegro2.position.x && torreNegra1.position.z==alfilNegro2.position.z))||
						   (torreNegra1.position.x==caballoNegro1.position.x && torreNegra1.position.z==caballoNegro1.position.z))||
						   (torreNegra1.position.x==caballoNegro2.position.x && torreNegra1.position.z==caballoNegro2.position.z))||
						   (torreNegra1.position.x==reyNegro.position.x && torreNegra1.position.z==reyNegro.position.z))||
						   (torreNegra1.position.x==reinaNegro.position.x && torreNegra1.position.z==reinaNegra.position.z)){
							alert("Movimiento inválido");
							torreNegra1.position.x=objetivo.position.x;torreNegra1.position.z=objetivo.position.z;
						}
					} //Termino Prototype act				
				}//Termino if ficha y referencia
				
				if (torreBlanca2.position.x===objetivo.position.x && torreBlanca2.position.z===objetivo.position.z){
					TorreBlanca.prototype.sense = function(environment){
						this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
						var obstaculo = this.sensor.intersectObjects(objetivo,true);
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
						if(torreBlanca2.position.x<=objetivo.position.x) //Checa el sentido del avance de la pieza según la referencia en x
						  torreBlanca2.position.x += this.step;
						else
						  torreBlanca2.position.x -= this.step;
					      }
					if (this.colision!=1){ //Si no está chocando
						if(torreBlanca2.position.z<=objetivo.position.z) //Checa el sentido del avance de la pieza según la referencia en z
						  torreBlanca2.position.z += this.step;
						else
						  torreBlanca2.position.z -= this.step;
					      }
						//////////////////////////////  Revisar si existen piezas enemigas y las destruye  //////////////////////
						if((torreBlanca2.position.x==reyNegro.position.x && torreBlanca2.position.z==reyNegro.position.z)&&(torreBlanca2.position.y==reyNegro.position.y)){
							escena.remove(reyNegro);
							alert("Fin del juego, equipo blanco ha ganado");
						}
						if((torreBlanca2.position.x==reinaNegra.position.x && torreBlanca2.position.z==reinaNegra.position.z)&&(torreBlanca2.position.y==reinaNegra.position.y)){
							escena.remove(reinaNegra);
						}
						if((torreBlanca2.position.x==caballoNegro1.position.x && torreBlanca2.position.z==caballoNegro1.position.z)&&(torreBlanca2.position.y==caballoNegro1.position.y)){
							escena.remove(caballoNegro1);
						}
						if((torreBlanca2.position.x==caballoNegro2.position.x && torreBlanca2.position.z==caballoNegro2.position.z)&&(torreBlanca2.position.y==caballoNegro2.position.y)){
							escena.remove(caballoNegro2);
						}				
						if((torreBlanca2.position.x==alfilNegro1.position.x && torreBlanca2.position.z==alfilNegro1.position.z)&&(torreBlanca2.position.y==alfilNegro1.position.y)){
							escena.remove(alfilNegro1);
						}
						if((torreBlanca2.position.x==alfilNegro2.position.x && torreBlanca2.position.z==alfilNegro2.position.z)&&(torreBlanca2.position.y==alfil.position.y)){
							escena.remove(alfilNegro2);
						}				
						if((torreBlanca2.position.x==torreNegra1.position.x && torreBlanca2.position.z==torreNegra1.position.z)&&(torreBlanca2.position.y==torreNegra1.position.y)){
							escena.remove(torreNegra1);
						}
						if((torreBlanca2.position.x==torreNegra2.position.x && torreBlanca2.position.z==torreNegra2.position.z)&&(torreBlanca2.position.y==torreNegra2.position.y)){
							escena.remove(torreNegra2);
						}				
						if((torreBlanca2.position.x==peonNegro1.position.x && torreBlanca2.position.z==peonNegro1.position.z)&&(torreBlanca2.position.y==peonNegro1.position.y)){
							escena.remove(peonNegro1);
						}
						if((torreBlanca2.position.x==peonNegro2.position.x && torreBlanca2.position.z==peonNegro2.position.z)&&(torreBlanca2.position.y==peonNegro2.position.y)){
							escena.remove(peonNegro2);
						}				
						if((torreBlanca2.position.x==peonNegro3.position.x && torreBlanca2.position.z==peonNegro3.position.z)&&(torreBlanca2.position.y==peonNegro3.position.y)){
							escena.remove(peonNegro3);
						}								
						if((torreBlanca2.position.x==peonNegro4.position.x && torreBlanca2.position.z==peonNegro4.position.z)&&(torreBlanca2.position.y==peonNegro4.position.y)){
							escena.remove(peonNegro4);
						}							
						if((torreBlanca2.position.x==peonNegro5.position.x && torreBlanca2.position.z==peonNegro5.position.z)&&(torreBlanca2.position.y==peonNegro5.position.y)){
							escena.remove(peonNegro5);
						}								
						if((torreBlanca2.position.x==peonNegro6.position.x && torreBlanca2.position.z==peonNegro6.position.z)&&(torreBlanca2.position.y==peonNegro6.position.y)){
							escena.remove(peonNegro6);
						}	
						if((torreBlanca2.position.x==peonNegro7.position.x && torreBlanca2.position.z==peonNegro7.position.z)&&(torreBlanca2.position.y==peonNegro7.position.y)){
							escena.remove(peonNegro7);
						}	
						if((torreBlanca2.position.x==peonNegro8.position.x && torreBlanca2.position.z==peonNegro8.position.z)&&(torreBlanca2.position.y==peonNegro8.position.y)){
							escena.remove(peonNegro8);
						}	
						
						//////////////////////////////  Revisar si existen piezas amigas y manda alerta ////////////////////////
						if (((((((((((((((torreBlanca2.position.x==peonBlanco1.position.x && torreBlanca2.position.z==peonBlanco1.position.z)||
						   (torreBlanca2.position.x==peonBlanco2.position.x && torreBlanca2.position.z==peonBlanco2.position.z))||
						   (torreBlanca2.position.x==peonBlanco3.position.x && torreBlanca2.position.z==peonBlanco3.position.z))||
						   (torreBlanca2.position.x==peonBlanco4.position.x && torreBlanca2.position.z==peonBlanco4.position.z))||
						   (torreBlanca2.position.x==peonBlanco5.position.x && torreBlanca2.position.z==peonBlanco5.position.z))||
						   (torreBlanca2.position.x==peonBlanco6.position.x && torreBlanca2.position.z==peonBlanco6.position.z))||
						   (torreBlanca2.position.x==peonBlanco7.position.x && torreBlanca2.position.z==peonBlanco7.position.z))||
						   (torreBlanca2.position.x==peonBlanco8.position.x && torreBlanca2.position.z==peonBlanco8.position.z))||
						   (torreBlanca2.position.x==torreBlanca1.position.x && torreBlanca2.position.z==torreBlanca1.position.z))||
						   (torreBlanca2.position.x==alfilBlanco1.position.x && torreBlanca2.position.z==alfilBlanco1.position.z))||
						   (torreBlanca2.position.x==alfilBlanco2.position.x && torreBlanca2.position.z==alfilBlanco2.position.z))||
						   (torreBlanca2.position.x==caballoBlanco1.position.x && torreBlanca2.position.z==caballoBlanco1.position.z))||
						   (torreBlanca2.position.x==caballoBlanco2.position.x && torreBlanca2.position.z==caballoBlanco2.position.z))||
						   (torreBlanca2.position.x==reyBlanco.position.x && torreBlanca2.position.z==reyBlanco.position.z))||
						   (torreBlanca2.position.x==reinaBlanca.position.x && torreBlanca2.position.z==reinaBlanca.position.z)){
							alert("Movimiento inválido");
							torreBlanca2.position.x=objetivo.position.x;torreBlanca2.position.z=objetivo.position.z;
						}
					} //Termino Prototype act				
				}//Termino if ficha y referencia

				if (torreNegra2.position.x===objetivo.position.x && torreNegra2.position.z===objetivo.position.z){
					TorreNegra.prototype.sense = function(environment){
						this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
						var obstaculo = this.sensor.intersectObjects(objetivo,true);
						if(obstaculo.length >0){
							this.colision = 1;
							this.step=0;							
						}	
						else{
							this.colision = 0;
							this.step=0.25;							
						}
					} //Termino Prototype sense
					TorreNegra.prototype.act = function(environment){ 	
					if (this.colision!=1){ //Si no está chocando
						if(torreNegra2.position.x<=objetivo.position.x) //Checa el sentido del avance de la pieza según la referencia en x
						  torreNegra2.position.x += this.step;
						else
						  torreNegra2.position.x -= this.step;
					      }
					if (this.colision!=1){ //Si no está chocando
						if(torreNegra2.position.z<=objetivo.position.z) //Checa el sentido del avance de la pieza según la referencia en z
						  torreNegra2.position.z += this.step;
						else
						  torreNegra2.position.z -= this.step;
					      }
						//////////////////////////////  Revisar si existen piezas enemigas y las destruye  //////////////////////
						if((torreNegra2.position.x==reyBlanco.position.x && torreNegra2.position.z==reyBlanco.position.z)&&(torreNegra2.position.y==reyBlanco.position.y)){
							escena.remove(reyBlanco);
							alert("Fin del juego, equipo negro ha ganado");
						}
						if((torreNegra2.position.x==reinaBlanca.position.x && torreNegra2.position.z==reinaBlanca.position.z)&&(torreNegra2.position.y==reinaBlanca.position.y)){
							escena.remove(reinaBlanca);
						}
						if((torreNegra2.position.x==caballoBlanco1.position.x && torreNegra2.position.z==caballoBlanco1.position.z)&&(torreNegra2.position.y==caballoBlanco1.position.y)){
							escena.remove(caballoBlanco1);
						}
						if((torreNegra2.position.x==caballoBlanco2.position.x && torreNegra2.position.z==caballoBlanco2.position.z)&&(torreNegra2.position.y==caballoBlanco2.position.y)){
							escena.remove(caballoBlanco2);
						}				
						if((torreNegra2.position.x==alfilBlanco1.position.x && torreNegra2.position.z==alfilBlanco1.position.z)&&(torreNegra2.position.y==alfilBlanco1.position.y)){
							escena.remove(alfilBlanco1);
						}
						if((torreNegra2.position.x==alfilBlanco2.position.x && torreNegra2.position.z==alfilBlanco2.position.z)&&(torreNegra2.position.y==alfil.position.y)){
							escena.remove(alfilBlanco2);
						}				
						if((torreNegra2.position.x==torreBlanca1.position.x && torreNegra2.position.z==torreBlanca1.position.z)&&(torreNegra2.position.y==torreBlanca1.position.y)){
							escena.remove(torreBlanca1);
						}
						if((torreNegra2.position.x==torreBlanca2.position.x && torreNegra2.position.z==torreBlanca2.position.z)&&(torreNegra2.position.y==torreBlanca2.position.y)){
							escena.remove(torreBlanca2);
						}				
						if((torreNegra2.position.x==peonBlanco1.position.x && torreNegra2.position.z==peonBlanco1.position.z)&&(torreNegra2.position.y==peonBlanco1.position.y)){
							escena.remove(peonBlanco1);
						}
						if((torreNegra2.position.x==peonBlanco2.position.x && torreNegra2.position.z==peonBlanco2.position.z)&&(torreNegra2.position.y==peonBlanco2.position.y)){
							escena.remove(peonBlanco2);
						}				
						if((torreNegra2.position.x==peonBlanco3.position.x && torreNegra2.position.z==peonBlanco3.position.z)&&(torreNegra2.position.y==peonBlanco3.position.y)){
							escena.remove(peonBlanco3);
						}								
						if((torreNegra2.position.x==peonBlanco4.position.x && torreNegra2.position.z==peonBlanco4.position.z)&&(torreNegra2.position.y==peonBlanco4.position.y)){
							escena.remove(peonBlanco4);
						}							
						if((torreNegra2.position.x==peonBlanco5.position.x && torreNegra2.position.z==peonBlanco5.position.z)&&(torreNegra2.position.y==peonBlanco5.position.y)){
							escena.remove(peonBlanco5);
						}								
						if((torreNegra2.position.x==peonBlanco6.position.x && torreNegra2.position.z==peonBlanco6.position.z)&&(torreNegra2.position.y==peonBlanco6.position.y)){
							escena.remove(peonBlanco6);
						}	
						if((torreNegra2.position.x==peonBlanco7.position.x && torreNegra2.position.z==peonBlanco7.position.z)&&(torreNegra2.position.y==peonBlanco7.position.y)){
							escena.remove(peonBlanco7);
						}	
						if((torreNegra2.position.x==peonBlanco8.position.x && torreNegra2.position.z==peonBlanco8.position.z)&&(torreNegra2.position.y==peonBlanco8.position.y)){
							escena.remove(peonBlanco8);
						}
	
						
						//////////////////////////////  Revisar si existen piezas amigas y manda alerta ////////////////////////
						if (((((((((((((((torreNegra2.position.x==peonNegro1.position.x && torreNegra2.position.z==peonNegro1.position.z)||
						   (torreNegra2.position.x==peonNegro2.position.x && torreNegra2.position.z==peonNegro2.position.z))||
						   (torreNegra2.position.x==peonNegro3.position.x && torreNegra2.position.z==peonNegro3.position.z))||
						   (torreNegra2.position.x==peonNegro4.position.x && torreNegra2.position.z==peonNegro4.position.z))||
						   (torreNegra2.position.x==peonNegro5.position.x && torreNegra2.position.z==peonNegro5.position.z))||
						   (torreNegra2.position.x==peonNegro6.position.x && torreNegra2.position.z==peonNegro6.position.z))||
						   (torreNegra2.position.x==peonNegro7.position.x && torreNegra2.position.z==peonNegro7.position.z))||
						   (torreNegra2.position.x==peonNegro8.position.x && torreNegra2.position.z==peonNegro8.position.z))||
						   (torreNegra2.position.x==torreNegra1.position.x && torreNegra2.position.z==torreNegra1.position.z))||
						   (torreNegra2.position.x==alfilNegro1.position.x && torreNegra2.position.z==alfilNegro1.position.z))||
						   (torreNegra2.position.x==alfilNegro2.position.x && torreNegra2.position.z==alfilNegro2.position.z))||
						   (torreNegra2.position.x==caballoNegro1.position.x && torreNegra2.position.z==caballoNegro1.position.z))||
						   (torreNegra2.position.x==caballoNegro2.position.x && torreNegra2.position.z==caballoNegro2.position.z))||
						   (torreNegra2.position.x==reyNegro.position.x && torreNegra2.position.z==reyNegro.position.z))||
						   (torreNegra2.position.x==reinaNegra.position.x && torreNegra2.position.z==reinaNegra.position.z)){
							alert("Movimiento inválido");
							torreNegra2.position.x=objetivo.position.x;torreNegra2.position.z=objetivo.position.z;
						}
					} //Termino Prototype act				
				}//Termino if ficha y referencia			

				if (peonBlanco1.position.x===objetivo.position.x && peonBlanco1.position.z===objetivo.position.z){
					PeonBlanco.prototype.sense = function(environment){
						this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
						var obstaculo = this.sensor.intersectObjects(objetivo,true);
						if(obstaculo.length >0){
							this.colision = 1;
							this.step=0;
						}
						else{
							this.colision = 0;
							this.step=0.25;
						}
					} //Termino Prototype sense
					PeonBlanco.prototype.act = function(environment){
						if (this.colision!=1){ //Si no está chocando
							if(peonBlanco1.position.x<=objetivo.position.x) //Checa el sentido del avance de la pieza según la referencia en x
							peonBlanco1.position.x += this.step;
							else
							peonBlanco1.position.x -= this.step;
						}
						if (this.colision!=1){ //Si no está chocando
							if(peonBlanco1.position.z<=objetivo.position.z) //Checa el sentido del avance de la pieza según la referencia en z
							peonBlanco1.position.z += this.step;
							else
							peonBlanco1.position.z -= this.step;
						}

						//////////////////////////////  Revisar si existen piezas enemigas y las destruye  //////////////////////
						if((peonBlanco1.position.x==reyNegro.position.x && peonBlanco1.position.z==reyNegro.position.z)&&(peonBlanco1.position.y==reyNegro.position.y)){
							escena.remove(reyNegro);
							alert("Fin del juego, equipo blanco ha ganado");
						}
						if((peonBlanco1.position.x==reinaNegra.position.x && peonBlanco1.position.z==reinaNegra.position.z)&&(peonBlanco1.position.y==reinaNegra.position.y)){
							escena.remove(reinaNegra);
						}
						if((peonBlanco1.position.x==caballoNegro1.position.x && peonBlanco1.position.z==caballoNegro1.position.z)&&(peonBlanco1.position.y==caballoNegro1.position.y)){
							escena.remove(caballoNegro1);
						}
						if((peonBlanco1.position.x==caballoNegro2.position.x && peonBlanco1.position.z==caballoNegro2.position.z)&&(peonBlanco1.position.y==caballoNegro2.position.y)){
							escena.remove(caballoNegro2);
						}
						if((peonBlanco1.position.x==alfilNegro1.position.x && peonBlanco1.position.z==alfilNegro1.position.z)&&(peonBlanco1.position.y==alfilNegro1.position.y)){
							escena.remove(alfilNegro1);
						}
						if((peonBlanco1.position.x==alfilNegro2.position.x && peonBlanco1.position.z==alfilNegro2.position.z)&&(peonBlanco1.position.y==alfilNegro2.position.y)){
							escena.remove(alfilNegro2);
						}
						if((peonBlanco1.position.x==torreNegra1.position.x && peonBlanco1.position.z==torreNegra1.position.z)&&(peonBlanco1.position.y==torreNegra1.position.y)){
							escena.remove(torreNegra1);
						}
						if((peonBlanco1.position.x==torreNegra2.position.x && peonBlanco1.position.z==torreNegra2.position.z)&&(peonBlanco1.position.y==torreNegra2.position.y)){
							escena.remove(torreNegra2);
						}
						if((peonBlanco1.position.x==peonNegro1.position.x && peonBlanco1.position.z==peonNegro1.position.z)&&(peonBlanco1.position.y==peonNegro1.position.y)){
							escena.remove(peonNegro1);
						}
						if((peonBlanco1.position.x==peonNegro2.position.x && peonBlanco1.position.z==peonNegro2.position.z)&&(peonBlanco1.position.y==peonNegro2.position.y)){
							escena.remove(peonNegro2);
						}
						if((peonBlanco1.position.x==peonNegro3.position.x && peonBlanco1.position.z==peonNegro3.position.z)&&(peonBlanco1.position.y==peonNegro3.position.y)){
							escena.remove(peonNegro3);
						}
						if((peonBlanco1.position.x==peonNegro4.position.x && peonBlanco1.position.z==peonNegro4.position.z)&&(peonBlanco1.position.y==peonNegro4.position.y)){
							escena.remove(peonNegro4);
						}
						if((peonBlanco1.position.x==peonNegro5.position.x && peonBlanco1.position.z==peonNegro5.position.z)&&(peonBlanco1.position.y==peonNegro5.position.y)){
							escena.remove(peonNegro5);
						}
						if((peonBlanco1.position.x==peonNegro6.position.x && peonBlanco1.position.z==peonNegro6.position.z)&&(peonBlanco1.position.y==peonNegro6.position.y)){
							escena.remove(peonNegro6);
						}
						if((peonBlanco1.position.x==peonNegro7.position.x && peonBlanco1.position.z==peonNegro7.position.z)&&(peonBlanco1.position.y==peonNegro7.position.y)){
							escena.remove(peonNegro7);
						}
						if((peonBlanco1.position.x==peonNegro8.position.x && peonBlanco1.position.z==peonNegro8.position.z)&&(peonBlanco1.position.y==peonNegro8.position.y)){
							escena.remove(peonNegro8);
						}
						
						//////////////////////////////  Revisar si existen piezas amigas y manda alerta ////////////////////////
						if (((((((((((((((peonBlanco1.position.x==caballoBlanco1.position.x && peonBlanco1.position.z==caballoBlanco1.position.z)||
						(peonBlanco1.position.x==peonBlanco2.position.x && peonBlanco1.position.z==peonBlanco2.position.z))||
						(peonBlanco1.position.x==peonBlanco3.position.x && peonBlanco1.position.z==peonBlanco3.position.z))||
						(peonBlanco1.position.x==peonBlanco4.position.x && peonBlanco1.position.z==peonBlanco4.position.z))||
						(peonBlanco1.position.x==peonBlanco5.position.x && peonBlanco1.position.z==peonBlanco5.position.z))||
						(peonBlanco1.position.x==peonBlanco6.position.x && peonBlanco1.position.z==peonBlanco6.position.z))||
						(peonBlanco1.position.x==peonBlanco7.position.x && peonBlanco1.position.z==peonBlanco7.position.z))||
						(peonBlanco1.position.x==peonBlanco8.position.x && peonBlanco1.position.z==peonBlanco8.position.z))||
						(peonBlanco1.position.x==torreBlanca1.position.x && peonBlanco1.position.z==torreBlanca1.position.z))||
						(peonBlanco1.position.x==torreBlanca2.position.x && peonBlanco1.position.z==torreBlanca2.position.z))||
						(peonBlanco1.position.x==alfilBlanco1.position.x && peonBlanco1.position.z==alfilBlanco1.position.z))||
						(peonBlanco1.position.x==alfilBlanco2.position.x && peonBlanco1.position.z==alfilBlanco2.position.z))||
						(peonBlanco1.position.x==caballoBlanco2.position.x && peonBlanco1.position.z==caballoBlanco2.position.z))||
						(peonBlanco1.position.x==reinaBlanca.position.x && peonBlanco1.position.z==reinaBlanca.position.z))||
						(peonBlanco1.position.x==reyBlanco.position.x && peonBlanco1.position.z==reyBlanco.position.z)){
							alert("Movimiento inválido");
							peonBlanco1.position.x=objetivo.position.x;peonBlanco1.position.z=objetivo.position.z;
						}
					} //Termino Prototype act
				}//Termino if ficha y referencia


				if (peonBlanco2.position.x===objetivo.position.x && peonBlanco2.position.z===objetivo.position.z){
					PeonBlanco.prototype.sense = function(environment){
						this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
						var obstaculo = this.sensor.intersectObjects(objetivo,true);
						if(obstaculo.length >0){
							this.colision = 1;
							this.step=0;
						}
						else{
							this.colision = 0;
							this.step=0.25;
						}
					} //Termino Prototype sense
					PeonBlanco.prototype.act = function(environment){
						if (this.colision!=1){ //Si no está chocando
							if(peonBlanco2.position.x<=objetivo.position.x) //Checa el sentido del avance de la pieza según la referencia en x
							peonBlanco2.position.x += this.step;
							else
							peonBlanco2.position.x -= this.step;
						}
						if (this.colision!=1){ //Si no está chocando
							if(peonBlanco2.position.z<=objetivo.position.z) //Checa el sentido del avance de la pieza según la referencia en z
							peonBlanco2.position.z += this.step;
							else
							peonBlanco2.position.z -= this.step;
						}

						//////////////////////////////  Revisar si existen piezas enemigas y las destruye  //////////////////////
						if((peonBlanco2.position.x==reyNegro.position.x && peonBlanco2.position.z==reyNegro.position.z)&&(peonBlanco2.position.y==reyNegro.position.y)){
							escena.remove(reyNegro);
							alert("Fin del juego, equipo blanco ha ganado");
						}
						if((peonBlanco2.position.x==reinaNegra.position.x && peonBlanco2.position.z==reinaNegra.position.z)&&(peonBlanco2.position.y==reinaNegra.position.y)){
							escena.remove(reinaNegra);
						}
						if((peonBlanco2.position.x==caballoNegro1.position.x && peonBlanco2.position.z==caballoNegro1.position.z)&&(peonBlanco2.position.y==caballoNegro1.position.y)){
							escena.remove(caballoNegro1);
						}
						if((peonBlanco2.position.x==caballoNegro2.position.x && peonBlanco2.position.z==caballoNegro2.position.z)&&(peonBlanco2.position.y==caballoNegro2.position.y)){
							escena.remove(caballoNegro2);
						}
						if((peonBlanco2.position.x==alfilNegro1.position.x && peonBlanco2.position.z==alfilNegro1.position.z)&&(peonBlanco2.position.y==alfilNegro1.position.y)){
							escena.remove(alfilNegro1);
						}
						if((peonBlanco2.position.x==alfilNegro2.position.x && peonBlanco2.position.z==alfilNegro2.position.z)&&(peonBlanco2.position.y==alfilNegro2.position.y)){
							escena.remove(alfilNegro2);
						}
						if((peonBlanco2.position.x==torreNegra1.position.x && peonBlanco2.position.z==torreNegra1.position.z)&&(peonBlanco2.position.y==torreNegra1.position.y)){
							escena.remove(torreNegra1);
						}
						if((peonBlanco2.position.x==torreNegra2.position.x && peonBlanco2.position.z==torreNegra2.position.z)&&(peonBlanco2.position.y==torreNegra2.position.y)){
							escena.remove(torreNegra2);
						}
						if((peonBlanco2.position.x==peonNegro1.position.x && peonBlanco2.position.z==peonNegro1.position.z)&&(peonBlanco2.position.y==peonNegro1.position.y)){
							escena.remove(peonNegro1);
						}
						if((peonBlanco2.position.x==peonNegro2.position.x && peonBlanco2.position.z==peonNegro2.position.z)&&(peonBlanco2.position.y==peonNegro2.position.y)){
							escena.remove(peonNegro2);
						}
						if((peonBlanco2.position.x==peonNegro3.position.x && peonBlanco2.position.z==peonNegro3.position.z)&&(peonBlanco2.position.y==peonNegro3.position.y)){
							escena.remove(peonNegro3);
						}
						if((peonBlanco2.position.x==peonNegro4.position.x && peonBlanco2.position.z==peonNegro4.position.z)&&(peonBlanco2.position.y==peonNegro4.position.y)){
							escena.remove(peonNegro4);
						}
						if((peonBlanco2.position.x==peonNegro5.position.x && peonBlanco2.position.z==peonNegro5.position.z)&&(peonBlanco2.position.y==peonNegro5.position.y)){
							escena.remove(peonNegro5);
						}
						if((peonBlanco2.position.x==peonNegro6.position.x && peonBlanco2.position.z==peonNegro6.position.z)&&(peonBlanco2.position.y==peonNegro6.position.y)){
							escena.remove(peonNegro6);
						}
						if((peonBlanco2.position.x==peonNegro7.position.x && peonBlanco2.position.z==peonNegro7.position.z)&&(peonBlanco2.position.y==peonNegro7.position.y)){
							escena.remove(peonNegro7);
						}
						if((peonBlanco2.position.x==peonNegro8.position.x && peonBlanco2.position.z==peonNegro8.position.z)&&(peonBlanco2.position.y==peonNegro8.position.y)){
							escena.remove(peonNegro8);
						}
						
						//////////////////////////////  Revisar si existen piezas amigas y manda alerta ////////////////////////
						if (((((((((((((((peonBlanco2.position.x==caballoBlanco1.position.x && peonBlanco2.position.z==caballoBlanco1.position.z)||
						(peonBlanco2.position.x==peonBlanco1.position.x && peonBlanco2.position.z==peonBlanco1.position.z))||
						(peonBlanco2.position.x==peonBlanco3.position.x && peonBlanco2.position.z==peonBlanco3.position.z))||
						(peonBlanco2.position.x==peonBlanco4.position.x && peonBlanco2.position.z==peonBlanco4.position.z))||
						(peonBlanco2.position.x==peonBlanco5.position.x && peonBlanco2.position.z==peonBlanco5.position.z))||
						(peonBlanco2.position.x==peonBlanco6.position.x && peonBlanco2.position.z==peonBlanco6.position.z))||
						(peonBlanco2.position.x==peonBlanco7.position.x && peonBlanco2.position.z==peonBlanco7.position.z))||
						(peonBlanco2.position.x==peonBlanco8.position.x && peonBlanco2.position.z==peonBlanco8.position.z))||
						(peonBlanco2.position.x==torreBlanca1.position.x && peonBlanco2.position.z==torreBlanca1.position.z))||
						(peonBlanco2.position.x==torreBlanca2.position.x && peonBlanco2.position.z==torreBlanca2.position.z))||
						(peonBlanco2.position.x==alfilBlanco1.position.x && peonBlanco2.position.z==alfilBlanco1.position.z))||
						(peonBlanco2.position.x==alfilBlanco2.position.x && peonBlanco2.position.z==alfilBlanco2.position.z))||
						(peonBlanco2.position.x==caballoBlanco2.position.x && peonBlanco2.position.z==caballoBlanco2.position.z))||
						(peonBlanco2.position.x==reinaBlanca.position.x && peonBlanco2.position.z==reinaBlanca.position.z))||
						(peonBlanco2.position.x==reyBlanco.position.x && peonBlanco2.position.z==reyBlanco.position.z)){
							alert("Movimiento inválido");
							peonBlanco2.position.x=objetivo.position.x;peonBlanco2.position.z=objetivo.position.z;
						}
					} //Termino Prototype act
				}//Termino if ficha y referencia
				
				if (peonBlanco3.position.x===objetivo.position.x && peonBlanco3.position.z===objetivo.position.z){
					PeonBlanco.prototype.sense = function(environment){
						this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
						var obstaculo = this.sensor.intersectObjects(objetivo,true);
						if(obstaculo.length >0){
							this.colision = 1;
							this.step=0;
						}
						else{
							this.colision = 0;
							this.step=0.25;
						}
					} //Termino Prototype sense
					PeonBlanco.prototype.act = function(environment){
						if (this.colision!=1){ //Si no está chocando
							if(peonBlanco3.position.x<=objetivo.position.x) //Checa el sentido del avance de la pieza según la referencia en x
							peonBlanco3.position.x += this.step;
							else
							peonBlanco3.position.x -= this.step;
						}
						if (this.colision!=1){ //Si no está chocando
							if(peonBlanco3.position.z<=objetivo.position.z) //Checa el sentido del avance de la pieza según la referencia en z
							peonBlanco3.position.z += this.step;
							else
							peonBlanco3.position.z -= this.step;
						}

						//////////////////////////////  Revisar si existen piezas enemigas y las destruye  //////////////////////
						if((peonBlanco3.position.x==reyNegro.position.x && peonBlanco3.position.z==reyNegro.position.z)&&(peonBlanco3.position.y==reyNegro.position.y)){
							escena.remove(reyNegro);
							alert("Fin del juego, equipo blanco ha ganado");
						}
						if((peonBlanco3.position.x==reinaNegra.position.x && peonBlanco3.position.z==reinaNegra.position.z)&&(peonBlanco3.position.y==reinaNegra.position.y)){
							escena.remove(reinaNegra);
						}
						if((peonBlanco3.position.x==caballoNegro1.position.x && peonBlanco3.position.z==caballoNegro1.position.z)&&(peonBlanco3.position.y==caballoNegro1.position.y)){
							escena.remove(caballoNegro1);
						}
						if((peonBlanco3.position.x==caballoNegro2.position.x && peonBlanco3.position.z==caballoNegro2.position.z)&&(peonBlanco3.position.y==caballoNegro2.position.y)){
							escena.remove(caballoNegro2);
						}
						if((peonBlanco3.position.x==alfilNegro1.position.x && peonBlanco3.position.z==alfilNegro1.position.z)&&(peonBlanco3.position.y==alfilNegro1.position.y)){
							escena.remove(alfilNegro1);
						}
						if((peonBlanco3.position.x==alfilNegro2.position.x && peonBlanco3.position.z==alfilNegro2.position.z)&&(peonBlanco3.position.y==alfilNegro2.position.y)){
							escena.remove(alfilNegro2);
						}
						if((peonBlanco3.position.x==torreNegra1.position.x && peonBlanco3.position.z==torreNegra1.position.z)&&(peonBlanco3.position.y==torreNegra1.position.y)){
							escena.remove(torreNegra1);
						}
						if((peonBlanco3.position.x==torreNegra2.position.x && peonBlanco3.position.z==torreNegra2.position.z)&&(peonBlanco3.position.y==torreNegra2.position.y)){
							escena.remove(torreNegra2);
						}
						if((peonBlanco3.position.x==peonNegro1.position.x && peonBlanco3.position.z==peonNegro1.position.z)&&(peonBlanco3.position.y==peonNegro1.position.y)){
							escena.remove(peonNegro1);
						}
						if((peonBlanco3.position.x==peonNegro2.position.x && peonBlanco3.position.z==peonNegro2.position.z)&&(peonBlanco3.position.y==peonNegro2.position.y)){
							escena.remove(peonNegro2);
						}
						if((peonBlanco3.position.x==peonNegro3.position.x && peonBlanco3.position.z==peonNegro3.position.z)&&(peonBlanco3.position.y==peonNegro3.position.y)){
							escena.remove(peonNegro3);
						}
						if((peonBlanco3.position.x==peonNegro4.position.x && peonBlanco3.position.z==peonNegro4.position.z)&&(peonBlanco3.position.y==peonNegro4.position.y)){
							escena.remove(peonNegro4);
						}
						if((peonBlanco3.position.x==peonNegro5.position.x && peonBlanco3.position.z==peonNegro5.position.z)&&(peonBlanco3.position.y==peonNegro5.position.y)){
							escena.remove(peonNegro5);
						}
						if((peonBlanco3.position.x==peonNegro6.position.x && peonBlanco3.position.z==peonNegro6.position.z)&&(peonBlanco3.position.y==peonNegro6.position.y)){
							escena.remove(peonNegro6);
						}
						if((peonBlanco3.position.x==peonNegro7.position.x && peonBlanco3.position.z==peonNegro7.position.z)&&(peonBlanco3.position.y==peonNegro7.position.y)){
							escena.remove(peonNegro7);
						}
						if((peonBlanco3.position.x==peonNegro8.position.x && peonBlanco3.position.z==peonNegro8.position.z)&&(peonBlanco3.position.y==peonNegro8.position.y)){
							escena.remove(peonNegro8);
						}
						
						//////////////////////////////  Revisar si existen piezas amigas y manda alerta ////////////////////////
						if (((((((((((((((peonBlanco3.position.x==caballoBlanco1.position.x && peonBlanco3.position.z==caballoBlanco1.position.z)||
						(peonBlanco3.position.x==peonBlanco2.position.x && peonBlanco3.position.z==peonBlanco2.position.z))||
						(peonBlanco3.position.x==peonBlanco1.position.x && peonBlanco3.position.z==peonBlanco1.position.z))||
						(peonBlanco3.position.x==peonBlanco4.position.x && peonBlanco3.position.z==peonBlanco4.position.z))||
						(peonBlanco3.position.x==peonBlanco5.position.x && peonBlanco3.position.z==peonBlanco5.position.z))||
						(peonBlanco3.position.x==peonBlanco6.position.x && peonBlanco3.position.z==peonBlanco6.position.z))||
						(peonBlanco3.position.x==peonBlanco7.position.x && peonBlanco3.position.z==peonBlanco7.position.z))||
						(peonBlanco3.position.x==peonBlanco8.position.x && peonBlanco3.position.z==peonBlanco8.position.z))||
						(peonBlanco3.position.x==torreBlanca1.position.x && peonBlanco3.position.z==torreBlanca1.position.z))||
						(peonBlanco3.position.x==torreBlanca2.position.x && peonBlanco3.position.z==torreBlanca2.position.z))||
						(peonBlanco3.position.x==alfilBlanco1.position.x && peonBlanco3.position.z==alfilBlanco1.position.z))||
						(peonBlanco3.position.x==alfilBlanco2.position.x && peonBlanco3.position.z==alfilBlanco2.position.z))||
						(peonBlanco3.position.x==caballoBlanco2.position.x && peonBlanco3.position.z==caballoBlanco2.position.z))||
						(peonBlanco3.position.x==reinaBlanca.position.x && peonBlanco3.position.z==reinaBlanca.position.z))||
						(peonBlanco3.position.x==reyBlanco.position.x && peonBlanco3.position.z==reyBlanco.position.z)){
							alert("Movimiento inválido");
							peonBlanco3.position.x=objetivo.position.x;peonBlanco3.position.z=objetivo.position.z;
						}
					} //Termino Prototype act
				}//Termino if ficha y referencia		

				if (peonBlanco4.position.x===objetivo.position.x && peonBlanco4.position.z===objetivo.position.z){
					PeonBlanco.prototype.sense = function(environment){
						this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
						var obstaculo = this.sensor.intersectObjects(objetivo,true);
						if(obstaculo.length >0){
							this.colision = 1;
							this.step=0;
						}
						else{
							this.colision = 0;
							this.step=0.25;
						}
					} //Termino Prototype sense
					PeonBlanco.prototype.act = function(environment){
						if (this.colision!=1){ //Si no está chocando
							if(peonBlanco4.position.x<=objetivo.position.x) //Checa el sentido del avance de la pieza según la referencia en x
							peonBlanco4.position.x += this.step;
							else
							peonBlanco4.position.x -= this.step;
						}
						if (this.colision!=1){ //Si no está chocando
							if(peonBlanco4.position.z<=objetivo.position.z) //Checa el sentido del avance de la pieza según la referencia en z
							peonBlanco4.position.z += this.step;
							else
							peonBlanco4.position.z -= this.step;
						}

						//////////////////////////////  Revisar si existen piezas enemigas y las destruye  //////////////////////
						if((peonBlanco4.position.x==reyNegro.position.x && peonBlanco4.position.z==reyNegro.position.z)&&(peonBlanco4.position.y==reyNegro.position.y)){
							escena.remove(reyNegro);
							alert("Fin del juego, equipo blanco ha ganado");
						}
						if((peonBlanco4.position.x==reinaNegra.position.x && peonBlanco4.position.z==reinaNegra.position.z)&&(peonBlanco4.position.y==reinaNegra.position.y)){
							escena.remove(reinaNegra);
						}
						if((peonBlanco4.position.x==caballoNegro1.position.x && peonBlanco4.position.z==caballoNegro1.position.z)&&(peonBlanco4.position.y==caballoNegro1.position.y)){
							escena.remove(caballoNegro1);
						}
						if((peonBlanco4.position.x==caballoNegro2.position.x && peonBlanco4.position.z==caballoNegro2.position.z)&&(peonBlanco4.position.y==caballoNegro2.position.y)){
							escena.remove(caballoNegro2);
						}
						if((peonBlanco4.position.x==alfilNegro1.position.x && peonBlanco4.position.z==alfilNegro1.position.z)&&(peonBlanco4.position.y==alfilNegro1.position.y)){
							escena.remove(alfilNegro1);
						}
						if((peonBlanco4.position.x==alfilNegro2.position.x && peonBlanco4.position.z==alfilNegro2.position.z)&&(peonBlanco4.position.y==alfilNegro2.position.y)){
							escena.remove(alfilNegro2);
						}
						if((peonBlanco4.position.x==torreNegra1.position.x && peonBlanco4.position.z==torreNegra1.position.z)&&(peonBlanco4.position.y==torreNegra1.position.y)){
							escena.remove(torreNegra1);
						}
						if((peonBlanco4.position.x==torreNegra2.position.x && peonBlanco4.position.z==torreNegra2.position.z)&&(peonBlanco4.position.y==torreNegra2.position.y)){
							escena.remove(torreNegra2);
						}
						if((peonBlanco4.position.x==peonNegro1.position.x && peonBlanco4.position.z==peonNegro1.position.z)&&(peonBlanco4.position.y==peonNegro1.position.y)){
							escena.remove(peonNegro1);
						}
						if((peonBlanco4.position.x==peonNegro2.position.x && peonBlanco4.position.z==peonNegro2.position.z)&&(peonBlanco4.position.y==peonNegro2.position.y)){
							escena.remove(peonNegro2);
						}
						if((peonBlanco4.position.x==peonNegro3.position.x && peonBlanco4.position.z==peonNegro3.position.z)&&(peonBlanco4.position.y==peonNegro3.position.y)){
							escena.remove(peonNegro3);
						}
						if((peonBlanco4.position.x==peonNegro4.position.x && peonBlanco4.position.z==peonNegro4.position.z)&&(peonBlanco4.position.y==peonNegro4.position.y)){
							escena.remove(peonNegro4);
						}
						if((peonBlanco4.position.x==peonNegro5.position.x && peonBlanco4.position.z==peonNegro5.position.z)&&(peonBlanco4.position.y==peonNegro5.position.y)){
							escena.remove(peonNegro5);
						}
						if((peonBlanco4.position.x==peonNegro6.position.x && peonBlanco4.position.z==peonNegro6.position.z)&&(peonBlanco4.position.y==peonNegro6.position.y)){
							escena.remove(peonNegro6);
						}
						if((peonBlanco4.position.x==peonNegro7.position.x && peonBlanco4.position.z==peonNegro7.position.z)&&(peonBlanco4.position.y==peonNegro7.position.y)){
							escena.remove(peonNegro7);
						}
						if((peonBlanco4.position.x==peonNegro8.position.x && peonBlanco4.position.z==peonNegro8.position.z)&&(peonBlanco4.position.y==peonNegro8.position.y)){
							escena.remove(peonNegro8);
						}
						
						//////////////////////////////  Revisar si existen piezas amigas y manda alerta ////////////////////////
						if (((((((((((((((peonBlanco4.position.x==caballoBlanco1.position.x && peonBlanco4.position.z==caballoBlanco1.position.z)||
						(peonBlanco4.position.x==peonBlanco2.position.x && peonBlanco4.position.z==peonBlanco2.position.z))||
						(peonBlanco4.position.x==peonBlanco1.position.x && peonBlanco4.position.z==peonBlanco1.position.z))||
						(peonBlanco4.position.x==peonBlanco3.position.x && peonBlanco4.position.z==peonBlanco3.position.z))||
						(peonBlanco4.position.x==peonBlanco5.position.x && peonBlanco4.position.z==peonBlanco5.position.z))||
						(peonBlanco4.position.x==peonBlanco6.position.x && peonBlanco4.position.z==peonBlanco6.position.z))||
						(peonBlanco4.position.x==peonBlanco7.position.x && peonBlanco4.position.z==peonBlanco7.position.z))||
						(peonBlanco4.position.x==peonBlanco8.position.x && peonBlanco4.position.z==peonBlanco8.position.z))||
						(peonBlanco4.position.x==torreBlanca1.position.x && peonBlanco4.position.z==torreBlanca1.position.z))||
						(peonBlanco4.position.x==torreBlanca2.position.x && peonBlanco4.position.z==torreBlanca2.position.z))||
						(peonBlanco4.position.x==alfilBlanco1.position.x && peonBlanco4.position.z==alfilBlanco1.position.z))||
						(peonBlanco4.position.x==alfilBlanco2.position.x && peonBlanco4.position.z==alfilBlanco2.position.z))||
						(peonBlanco4.position.x==caballoBlanco2.position.x && peonBlanco4.position.z==caballoBlanco2.position.z))||
						(peonBlanco4.position.x==reinaBlanca.position.x && peonBlanco4.position.z==reinaBlanca.position.z))||
						(peonBlanco4.position.x==reyBlanco.position.x && peonBlanco4.position.z==reyBlanco.position.z)){
							alert("Movimiento inválido");
							peonBlanco4.position.x=objetivo.position.x;peonBlanco4.position.z=objetivo.position.z;
						}
					} //Termino Prototype act
				}//Termino if ficha y referencia
				
		if (peonBlanco5.position.x===objetivo.position.x && peonBlanco5.position.z===objetivo.position.z){
			PeonBlanco.prototype.sense = function(environment){
				this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
				var obstaculo = this.sensor.intersectObjects(objetivo,true);
				if(obstaculo.length >0){
					this.colision = 1;
					this.step=0;
				}
				else{
					this.colision = 0;
					this.step=0.25;
				}
			} //Termino Prototype sense
			PeonBlanco.prototype.act = function(environment){
				if (this.colision!=1){ //Si no está chocando
					if(peonBlanco5.position.x<=objetivo.position.x) //Checa el sentido del avance de la pieza según la referencia en x
					peonBlanco5.position.x += this.step;
					else
					peonBlanco5.position.x -= this.step;
				}
				if (this.colision!=1){ //Si no está chocando
					if(peonBlanco5.position.z<=objetivo.position.z) //Checa el sentido del avance de la pieza según la referencia en z
					peonBlanco5.position.z += this.step;
					else
					peonBlanco5.position.z -= this.step;
				}

				//////////////////////////////  Revisar si existen piezas enemigas y las destruye  //////////////////////
				if((peonBlanco5.position.x==reyNegro.position.x && peonBlanco5.position.z==reyNegro.position.z)&&(peonBlanco5.position.y==reyNegro.position.y)){
					escena.remove(reyNegro);
					alert("Fin del juego, equipo blanco ha ganado");
				}
				if((peonBlanco5.position.x==reinaNegra.position.x && peonBlanco5.position.z==reinaNegra.position.z)&&(peonBlanco5.position.y==reinaNegra.position.y)){
					escena.remove(reinaNegra);
				}
				if((peonBlanco5.position.x==caballoNegro1.position.x && peonBlanco5.position.z==caballoNegro1.position.z)&&(peonBlanco5.position.y==caballoNegro1.position.y)){
					escena.remove(caballoNegro1);
				}
				if((peonBlanco5.position.x==caballoNegro2.position.x && peonBlanco5.position.z==caballoNegro2.position.z)&&(peonBlanco5.position.y==caballoNegro2.position.y)){
					escena.remove(caballoNegro2);
				}
				if((peonBlanco5.position.x==alfilNegro1.position.x && peonBlanco5.position.z==alfilNegro1.position.z)&&(peonBlanco5.position.y==alfilNegro1.position.y)){
					escena.remove(alfilNegro1);
				}
				if((peonBlanco5.position.x==alfilNegro2.position.x && peonBlanco5.position.z==alfilNegro2.position.z)&&(peonBlanco5.position.y==alfilNegro2.position.y)){
					escena.remove(alfilNegro2);
				}
				if((peonBlanco5.position.x==torreNegra1.position.x && peonBlanco5.position.z==torreNegra1.position.z)&&(peonBlanco5.position.y==torreNegra1.position.y)){
					escena.remove(torreNegra1);
				}
				if((peonBlanco5.position.x==torreNegra2.position.x && peonBlanco5.position.z==torreNegra2.position.z)&&(peonBlanco5.position.y==torreNegra2.position.y)){
					escena.remove(torreNegra2);
				}
				if((peonBlanco5.position.x==peonNegro1.position.x && peonBlanco5.position.z==peonNegro1.position.z)&&(peonBlanco5.position.y==peonNegro1.position.y)){
					escena.remove(peonNegro1);
				}
				if((peonBlanco5.position.x==peonNegro2.position.x && peonBlanco5.position.z==peonNegro2.position.z)&&(peonBlanco5.position.y==peonNegro2.position.y)){
					escena.remove(peonNegro2);
				}
				if((peonBlanco5.position.x==peonNegro3.position.x && peonBlanco5.position.z==peonNegro3.position.z)&&(peonBlanco5.position.y==peonNegro3.position.y)){
					escena.remove(peonNegro3);
				}
				if((peonBlanco5.position.x==peonNegro4.position.x && peonBlanco5.position.z==peonNegro4.position.z)&&(peonBlanco5.position.y==peonNegro4.position.y)){
					escena.remove(peonNegro4);
				}
				if((peonBlanco5.position.x==peonNegro5.position.x && peonBlanco5.position.z==peonNegro5.position.z)&&(peonBlanco5.position.y==peonNegro5.position.y)){
					escena.remove(peonNegro5);
				}
				if((peonBlanco5.position.x==peonNegro6.position.x && peonBlanco5.position.z==peonNegro6.position.z)&&(peonBlanco5.position.y==peonNegro6.position.y)){
					escena.remove(peonNegro6);
				}
				if((peonBlanco5.position.x==peonNegro7.position.x && peonBlanco5.position.z==peonNegro7.position.z)&&(peonBlanco5.position.y==peonNegro7.position.y)){
					escena.remove(peonNegro7);
				}
				if((peonBlanco5.position.x==peonNegro8.position.x && peonBlanco5.position.z==peonNegro8.position.z)&&(peonBlanco5.position.y==peonNegro8.position.y)){
					escena.remove(peonNegro8);
				}
				
				//////////////////////////////  Revisar si existen piezas amigas y manda alerta ////////////////////////
				if (((((((((((((((peonBlanco5.position.x==caballoBlanco1.position.x && peonBlanco5.position.z==caballoBlanco1.position.z)||
				(peonBlanco5.position.x==peonBlanco2.position.x && peonBlanco5.position.z==peonBlanco2.position.z))||
				(peonBlanco5.position.x==peonBlanco1.position.x && peonBlanco5.position.z==peonBlanco1.position.z))||
				(peonBlanco5.position.x==peonBlanco3.position.x && peonBlanco5.position.z==peonBlanco3.position.z))||
				(peonBlanco5.position.x==peonBlanco4.position.x && peonBlanco5.position.z==peonBlanco4.position.z))||
				(peonBlanco5.position.x==peonBlanco6.position.x && peonBlanco5.position.z==peonBlanco6.position.z))||
				(peonBlanco5.position.x==peonBlanco7.position.x && peonBlanco5.position.z==peonBlanco7.position.z))||
				(peonBlanco5.position.x==peonBlanco8.position.x && peonBlanco5.position.z==peonBlanco8.position.z))||
				(peonBlanco5.position.x==torreBlanca1.position.x && peonBlanco5.position.z==torreBlanca1.position.z))||
				(peonBlanco5.position.x==torreBlanca2.position.x && peonBlanco5.position.z==torreBlanca2.position.z))||
				(peonBlanco5.position.x==alfilBlanco1.position.x && peonBlanco5.position.z==alfilBlanco1.position.z))||
				(peonBlanco5.position.x==alfilBlanco2.position.x && peonBlanco5.position.z==alfilBlanco2.position.z))||
				(peonBlanco5.position.x==caballoBlanco2.position.x && peonBlanco5.position.z==caballoBlanco2.position.z))||
				(peonBlanco5.position.x==reinaBlanca.position.x && peonBlanco5.position.z==reinaBlanca.position.z))||
				(peonBlanco5.position.x==reyBlanco.position.x && peonBlanco5.position.z==reyBlanco.position.z)){
					alert("Movimiento inválido");
					peonBlanco5.position.x=objetivo.position.x;peonBlanco5.position.z=objetivo.position.z;
				}
			} //Termino Prototype act
		}//Termino if ficha y referencia
		
				if (peonBlanco6.position.x===objetivo.position.x && peonBlanco6.position.z===objetivo.position.z){
					PeonBlanco.prototype.sense = function(environment){
						this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
						var obstaculo = this.sensor.intersectObjects(objetivo,true);
						if(obstaculo.length >0){
							this.colision = 1;
							this.step=0;
						}
						else{
							this.colision = 0;
							this.step=0.25;
						}
					} //Termino Prototype sense
					PeonBlanco.prototype.act = function(environment){
						if (this.colision!=1){ //Si no está chocando
							if(peonBlanco6.position.x<=objetivo.position.x) //Checa el sentido del avance de la pieza según la referencia en x
							peonBlanco6.position.x += this.step;
							else
							peonBlanco6.position.x -= this.step;
						}
						if (this.colision!=1){ //Si no está chocando
							if(peonBlanco6.position.z<=objetivo.position.z) //Checa el sentido del avance de la pieza según la referencia en z
							peonBlanco6.position.z += this.step;
							else
							peonBlanco6.position.z -= this.step;
						}

						//////////////////////////////  Revisar si existen piezas enemigas y las destruye  //////////////////////
						if((peonBlanco6.position.x==reyNegro.position.x && peonBlanco6.position.z==reyNegro.position.z)&&(peonBlanco6.position.y==reyNegro.position.y)){
							escena.remove(reyNegro);
							alert("Fin del juego, equipo blanco ha ganado");
						}
						if((peonBlanco6.position.x==reinaNegra.position.x && peonBlanco6.position.z==reinaNegra.position.z)&&(peonBlanco6.position.y==reinaNegra.position.y)){
							escena.remove(reinaNegra);
						}
						if((peonBlanco6.position.x==caballoNegro1.position.x && peonBlanco6.position.z==caballoNegro1.position.z)&&(peonBlanco6.position.y==caballoNegro1.position.y)){
							escena.remove(caballoNegro1);
						}
						if((peonBlanco6.position.x==caballoNegro2.position.x && peonBlanco6.position.z==caballoNegro2.position.z)&&(peonBlanco6.position.y==caballoNegro2.position.y)){
							escena.remove(caballoNegro2);
						}
						if((peonBlanco6.position.x==alfilNegro1.position.x && peonBlanco6.position.z==alfilNegro1.position.z)&&(peonBlanco6.position.y==alfilNegro1.position.y)){
							escena.remove(alfilNegro1);
						}
						if((peonBlanco6.position.x==alfilNegro2.position.x && peonBlanco6.position.z==alfilNegro2.position.z)&&(peonBlanco6.position.y==alfilNegro2.position.y)){
							escena.remove(alfilNegro2);
						}
						if((peonBlanco6.position.x==torreNegra1.position.x && peonBlanco6.position.z==torreNegra1.position.z)&&(peonBlanco6.position.y==torreNegra1.position.y)){
							escena.remove(torreNegra1);
						}
						if((peonBlanco6.position.x==torreNegra2.position.x && peonBlanco6.position.z==torreNegra2.position.z)&&(peonBlanco6.position.y==torreNegra2.position.y)){
							escena.remove(torreNegra2);
						}
						if((peonBlanco6.position.x==peonNegro1.position.x && peonBlanco6.position.z==peonNegro1.position.z)&&(peonBlanco6.position.y==peonNegro1.position.y)){
							escena.remove(peonNegro1);
						}
						if((peonBlanco6.position.x==peonNegro2.position.x && peonBlanco6.position.z==peonNegro2.position.z)&&(peonBlanco6.position.y==peonNegro2.position.y)){
							escena.remove(peonNegro2);
						}
						if((peonBlanco6.position.x==peonNegro3.position.x && peonBlanco6.position.z==peonNegro3.position.z)&&(peonBlanco6.position.y==peonNegro3.position.y)){
							escena.remove(peonNegro3);
						}
						if((peonBlanco6.position.x==peonNegro4.position.x && peonBlanco6.position.z==peonNegro4.position.z)&&(peonBlanco6.position.y==peonNegro4.position.y)){
							escena.remove(peonNegro4);
						}
						if((peonBlanco6.position.x==peonNegro5.position.x && peonBlanco6.position.z==peonNegro5.position.z)&&(peonBlanco6.position.y==peonNegro5.position.y)){
							escena.remove(peonNegro5);
						}
						if((peonBlanco6.position.x==peonNegro6.position.x && peonBlanco6.position.z==peonNegro6.position.z)&&(peonBlanco6.position.y==peonNegro6.position.y)){
							escena.remove(peonNegro6);
						}
						if((peonBlanco6.position.x==peonNegro7.position.x && peonBlanco6.position.z==peonNegro7.position.z)&&(peonBlanco6.position.y==peonNegro7.position.y)){
							escena.remove(peonNegro7);
						}
						if((peonBlanco6.position.x==peonNegro8.position.x && peonBlanco6.position.z==peonNegro8.position.z)&&(peonBlanco6.position.y==peonNegro8.position.y)){
							escena.remove(peonNegro8);
						}
						
						//////////////////////////////  Revisar si existen piezas amigas y manda alerta ////////////////////////
						if (((((((((((((((peonBlanco6.position.x==caballoBlanco1.position.x && peonBlanco6.position.z==caballoBlanco1.position.z)||
						(peonBlanco6.position.x==peonBlanco2.position.x && peonBlanco6.position.z==peonBlanco2.position.z))||
						(peonBlanco6.position.x==peonBlanco1.position.x && peonBlanco6.position.z==peonBlanco1.position.z))||
						(peonBlanco6.position.x==peonBlanco3.position.x && peonBlanco6.position.z==peonBlanco3.position.z))||
						(peonBlanco6.position.x==peonBlanco4.position.x && peonBlanco6.position.z==peonBlanco4.position.z))||
						(peonBlanco6.position.x==peonBlanco5.position.x && peonBlanco6.position.z==peonBlanco5.position.z))||
						(peonBlanco6.position.x==peonBlanco7.position.x && peonBlanco6.position.z==peonBlanco7.position.z))||
						(peonBlanco6.position.x==peonBlanco8.position.x && peonBlanco6.position.z==peonBlanco8.position.z))||
						(peonBlanco6.position.x==torreBlanca1.position.x && peonBlanco6.position.z==torreBlanca1.position.z))||
						(peonBlanco6.position.x==torreBlanca2.position.x && peonBlanco6.position.z==torreBlanca2.position.z))||
						(peonBlanco6.position.x==alfilBlanco1.position.x && peonBlanco6.position.z==alfilBlanco1.position.z))||
						(peonBlanco6.position.x==alfilBlanco2.position.x && peonBlanco6.position.z==alfilBlanco2.position.z))||
						(peonBlanco6.position.x==caballoBlanco2.position.x && peonBlanco6.position.z==caballoBlanco2.position.z))||
						(peonBlanco6.position.x==reinaBlanca.position.x && peonBlanco6.position.z==reinaBlanca.position.z))||
						(peonBlanco6.position.x==reyBlanco.position.x && peonBlanco6.position.z==reyBlanco.position.z)){
							alert("Movimiento inválido");
							peonBlanco6.position.x=objetivo.position.x;peonBlanco6.position.z=objetivo.position.z;
						}
					} //Termino Prototype act
				}//Termino if ficha y referencia
				
				if (peonBlanco7.position.x===objetivo.position.x && peonBlanco7.position.z===objetivo.position.z){
					PeonBlanco.prototype.sense = function(environment){
						this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
						var obstaculo = this.sensor.intersectObjects(objetivo,true);
						if(obstaculo.length >0){
							this.colision = 1;
							this.step=0;
						}
						else{
							this.colision = 0;
							this.step=0.25;
						}
					} //Termino Prototype sense
					PeonBlanco.prototype.act = function(environment){
						if (this.colision!=1){ //Si no está chocando
							if(peonBlanco7.position.x<=objetivo.position.x) //Checa el sentido del avance de la pieza según la referencia en x
							peonBlanco7.position.x += this.step;
							else
							peonBlanco7.position.x -= this.step;
						}
						if (this.colision!=1){ //Si no está chocando
							if(peonBlanco7.position.z<=objetivo.position.z) //Checa el sentido del avance de la pieza según la referencia en z
							peonBlanco7.position.z += this.step;
							else
							peonBlanco7.position.z -= this.step;
						}

						//////////////////////////////  Revisar si existen piezas enemigas y las destruye  //////////////////////
						if((peonBlanco7.position.x==reyNegro.position.x && peonBlanco7.position.z==reyNegro.position.z)&&(peonBlanco7.position.y==reyNegro.position.y)){
							escena.remove(reyNegro);
							alert("Fin del juego, equipo blanco ha ganado");
						}
						if((peonBlanco7.position.x==reinaNegra.position.x && peonBlanco7.position.z==reinaNegra.position.z)&&(peonBlanco7.position.y==reinaNegra.position.y)){
							escena.remove(reinaNegra);
						}
						if((peonBlanco7.position.x==caballoNegro1.position.x && peonBlanco7.position.z==caballoNegro1.position.z)&&(peonBlanco7.position.y==caballoNegro1.position.y)){
							escena.remove(caballoNegro1);
						}
						if((peonBlanco7.position.x==caballoNegro2.position.x && peonBlanco7.position.z==caballoNegro2.position.z)&&(peonBlanco7.position.y==caballoNegro2.position.y)){
							escena.remove(caballoNegro2);
						}
						if((peonBlanco7.position.x==alfilNegro1.position.x && peonBlanco7.position.z==alfilNegro1.position.z)&&(peonBlanco7.position.y==alfilNegro1.position.y)){
							escena.remove(alfilNegro1);
						}
						if((peonBlanco7.position.x==alfilNegro2.position.x && peonBlanco7.position.z==alfilNegro2.position.z)&&(peonBlanco7.position.y==alfilNegro2.position.y)){
							escena.remove(alfilNegro2);
						}
						if((peonBlanco7.position.x==torreNegra1.position.x && peonBlanco7.position.z==torreNegra1.position.z)&&(peonBlanco7.position.y==torreNegra1.position.y)){
							escena.remove(torreNegra1);
						}
						if((peonBlanco7.position.x==torreNegra2.position.x && peonBlanco7.position.z==torreNegra2.position.z)&&(peonBlanco7.position.y==torreNegra2.position.y)){
							escena.remove(torreNegra2);
						}
						if((peonBlanco7.position.x==peonNegro1.position.x && peonBlanco7.position.z==peonNegro1.position.z)&&(peonBlanco7.position.y==peonNegro1.position.y)){
							escena.remove(peonNegro1);
						}
						if((peonBlanco7.position.x==peonNegro2.position.x && peonBlanco7.position.z==peonNegro2.position.z)&&(peonBlanco7.position.y==peonNegro2.position.y)){
							escena.remove(peonNegro2);
						}
						if((peonBlanco7.position.x==peonNegro3.position.x && peonBlanco7.position.z==peonNegro3.position.z)&&(peonBlanco7.position.y==peonNegro3.position.y)){
							escena.remove(peonNegro3);
						}
						if((peonBlanco7.position.x==peonNegro4.position.x && peonBlanco7.position.z==peonNegro4.position.z)&&(peonBlanco7.position.y==peonNegro4.position.y)){
							escena.remove(peonNegro4);
						}
						if((peonBlanco7.position.x==peonNegro5.position.x && peonBlanco7.position.z==peonNegro5.position.z)&&(peonBlanco7.position.y==peonNegro5.position.y)){
							escena.remove(peonNegro5);
						}
						if((peonBlanco7.position.x==peonNegro6.position.x && peonBlanco7.position.z==peonNegro6.position.z)&&(peonBlanco7.position.y==peonNegro6.position.y)){
							escena.remove(peonNegro6);
						}
						if((peonBlanco7.position.x==peonNegro7.position.x && peonBlanco7.position.z==peonNegro7.position.z)&&(peonBlanco7.position.y==peonNegro7.position.y)){
							escena.remove(peonNegro7);
						}
						if((peonBlanco7.position.x==peonNegro8.position.x && peonBlanco7.position.z==peonNegro8.position.z)&&(peonBlanco7.position.y==peonNegro8.position.y)){
							escena.remove(peonNegro8);
						}
						
						//////////////////////////////  Revisar si existen piezas amigas y manda alerta ////////////////////////
						if (((((((((((((((peonBlanco7.position.x==caballoBlanco1.position.x && peonBlanco7.position.z==caballoBlanco1.position.z)||
						(peonBlanco7.position.x==peonBlanco2.position.x && peonBlanco7.position.z==peonBlanco2.position.z))||
						(peonBlanco7.position.x==peonBlanco1.position.x && peonBlanco7.position.z==peonBlanco1.position.z))||
						(peonBlanco7.position.x==peonBlanco3.position.x && peonBlanco7.position.z==peonBlanco3.position.z))||
						(peonBlanco7.position.x==peonBlanco4.position.x && peonBlanco7.position.z==peonBlanco4.position.z))||
						(peonBlanco7.position.x==peonBlanco5.position.x && peonBlanco7.position.z==peonBlanco5.position.z))||
						(peonBlanco7.position.x==peonBlanco6.position.x && peonBlanco7.position.z==peonBlanco6.position.z))||
						(peonBlanco7.position.x==peonBlanco8.position.x && peonBlanco7.position.z==peonBlanco8.position.z))||
						(peonBlanco7.position.x==torreBlanca1.position.x && peonBlanco7.position.z==torreBlanca1.position.z))||
						(peonBlanco7.position.x==torreBlanca2.position.x && peonBlanco7.position.z==torreBlanca2.position.z))||
						(peonBlanco7.position.x==alfilBlanco1.position.x && peonBlanco7.position.z==alfilBlanco1.position.z))||
						(peonBlanco7.position.x==alfilBlanco2.position.x && peonBlanco7.position.z==alfilBlanco2.position.z))||
						(peonBlanco7.position.x==caballoBlanco2.position.x && peonBlanco7.position.z==caballoBlanco2.position.z))||
						(peonBlanco7.position.x==reinaBlanca.position.x && peonBlanco7.position.z==reinaBlanca.position.z))||
						(peonBlanco7.position.x==reyBlanco.position.x && peonBlanco7.position.z==reyBlanco.position.z)){
							alert("Movimiento inválido");
							peonBlanco7.position.x=objetivo.position.x;peonBlanco7.position.z=objetivo.position.z;
						}
					} //Termino Prototype act
				}//Termino if ficha y referencia
				
				if (peonBlanco8.position.x===objetivo.position.x && peonBlanco8.position.z===objetivo.position.z){
					PeonBlanco.prototype.sense = function(environment){
						this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
						var obstaculo = this.sensor.intersectObjects(objetivo,true);
						if(obstaculo.length >0){
							this.colision = 1;
							this.step=0;
						}
						else{
							this.colision = 0;
							this.step=0.25;
						}
					} //Termino Prototype sense
					PeonBlanco.prototype.act = function(environment){
						if (this.colision!=1){ //Si no está chocando
							if(peonBlanco8.position.x<=objetivo.position.x) //Checa el sentido del avance de la pieza según la referencia en x
							peonBlanco8.position.x += this.step;
							else
							peonBlanco8.position.x -= this.step;
						}
						if (this.colision!=1){ //Si no está chocando
							if(peonBlanco8.position.z<=objetivo.position.z) //Checa el sentido del avance de la pieza según la referencia en z
							peonBlanco8.position.z += this.step;
							else
							peonBlanco8.position.z -= this.step;
						}

						//////////////////////////////  Revisar si existen piezas enemigas y las destruye  //////////////////////
						if((peonBlanco8.position.x==reyNegro.position.x && peonBlanco8.position.z==reyNegro.position.z)&&(peonBlanco8.position.y==reyNegro.position.y)){
							escena.remove(reyNegro);
							alert("Fin del juego, equipo blanco ha ganado");
						}
						if((peonBlanco8.position.x==reinaNegra.position.x && peonBlanco8.position.z==reinaNegra.position.z)&&(peonBlanco8.position.y==reinaNegra.position.y)){
							escena.remove(reinaNegra);
						}
						if((peonBlanco8.position.x==caballoNegro1.position.x && peonBlanco8.position.z==caballoNegro1.position.z)&&(peonBlanco8.position.y==caballoNegro1.position.y)){
							escena.remove(caballoNegro1);
						}
						if((peonBlanco8.position.x==caballoNegro2.position.x && peonBlanco8.position.z==caballoNegro2.position.z)&&(peonBlanco8.position.y==caballoNegro2.position.y)){
							escena.remove(caballoNegro2);
						}
						if((peonBlanco8.position.x==alfilNegro1.position.x && peonBlanco8.position.z==alfilNegro1.position.z)&&(peonBlanco8.position.y==alfilNegro1.position.y)){
							escena.remove(alfilNegro1);
						}
						if((peonBlanco8.position.x==alfilNegro2.position.x && peonBlanco8.position.z==alfilNegro2.position.z)&&(peonBlanco8.position.y==alfilNegro2.position.y)){
							escena.remove(alfilNegro2);
						}
						if((peonBlanco8.position.x==torreNegra1.position.x && peonBlanco8.position.z==torreNegra1.position.z)&&(peonBlanco8.position.y==torreNegra1.position.y)){
							escena.remove(torreNegra1);
						}
						if((peonBlanco8.position.x==torreNegra2.position.x && peonBlanco8.position.z==torreNegra2.position.z)&&(peonBlanco8.position.y==torreNegra2.position.y)){
							escena.remove(torreNegra2);
						}
						if((peonBlanco8.position.x==peonNegro1.position.x && peonBlanco8.position.z==peonNegro1.position.z)&&(peonBlanco8.position.y==peonNegro1.position.y)){
							escena.remove(peonNegro1);
						}
						if((peonBlanco8.position.x==peonNegro2.position.x && peonBlanco8.position.z==peonNegro2.position.z)&&(peonBlanco8.position.y==peonNegro2.position.y)){
							escena.remove(peonNegro2);
						}
						if((peonBlanco8.position.x==peonNegro3.position.x && peonBlanco8.position.z==peonNegro3.position.z)&&(peonBlanco8.position.y==peonNegro3.position.y)){
							escena.remove(peonNegro3);
						}
						if((peonBlanco8.position.x==peonNegro4.position.x && peonBlanco8.position.z==peonNegro4.position.z)&&(peonBlanco8.position.y==peonNegro4.position.y)){
							escena.remove(peonNegro4);
						}
						if((peonBlanco8.position.x==peonNegro5.position.x && peonBlanco8.position.z==peonNegro5.position.z)&&(peonBlanco8.position.y==peonNegro5.position.y)){
							escena.remove(peonNegro5);
						}
						if((peonBlanco8.position.x==peonNegro6.position.x && peonBlanco8.position.z==peonNegro6.position.z)&&(peonBlanco8.position.y==peonNegro6.position.y)){
							escena.remove(peonNegro6);
						}
						if((peonBlanco8.position.x==peonNegro7.position.x && peonBlanco8.position.z==peonNegro7.position.z)&&(peonBlanco8.position.y==peonNegro7.position.y)){
							escena.remove(peonNegro7);
						}
						if((peonBlanco8.position.x==peonNegro8.position.x && peonBlanco8.position.z==peonNegro8.position.z)&&(peonBlanco8.position.y==peonNegro8.position.y)){
							escena.remove(peonNegro8);
						}
						
						//////////////////////////////  Revisar si existen piezas amigas y manda alerta ////////////////////////
						if (((((((((((((((peonBlanco8.position.x==caballoBlanco1.position.x && peonBlanco8.position.z==caballoBlanco1.position.z)||
						(peonBlanco8.position.x==peonBlanco2.position.x && peonBlanco8.position.z==peonBlanco2.position.z))||
						(peonBlanco8.position.x==peonBlanco1.position.x && peonBlanco8.position.z==peonBlanco1.position.z))||
						(peonBlanco8.position.x==peonBlanco3.position.x && peonBlanco8.position.z==peonBlanco3.position.z))||
						(peonBlanco8.position.x==peonBlanco4.position.x && peonBlanco8.position.z==peonBlanco4.position.z))||
						(peonBlanco8.position.x==peonBlanco5.position.x && peonBlanco8.position.z==peonBlanco5.position.z))||
						(peonBlanco8.position.x==peonBlanco6.position.x && peonBlanco8.position.z==peonBlanco6.position.z))||
						(peonBlanco8.position.x==peonBlanco7.position.x && peonBlanco8.position.z==peonBlanco7.position.z))||
						(peonBlanco8.position.x==torreBlanca1.position.x && peonBlanco8.position.z==torreBlanca1.position.z))||
						(peonBlanco8.position.x==torreBlanca2.position.x && peonBlanco8.position.z==torreBlanca2.position.z))||
						(peonBlanco8.position.x==alfilBlanco1.position.x && peonBlanco8.position.z==alfilBlanco1.position.z))||
						(peonBlanco8.position.x==alfilBlanco2.position.x && peonBlanco8.position.z==alfilBlanco2.position.z))||
						(peonBlanco8.position.x==caballoBlanco2.position.x && peonBlanco8.position.z==caballoBlanco2.position.z))||
						(peonBlanco8.position.x==reinaBlanca.position.x && peonBlanco8.position.z==reinaBlanca.position.z))||
						(peonBlanco8.position.x==reyBlanco.position.x && peonBlanco8.position.z==reyBlanco.position.z)){
							alert("Movimiento inválido");
							peonBlanco8.position.x=objetivo.position.x;peonBlanco8.position.z=objetivo.position.z;
						}
					} //Termino Prototype act
				}//Termino if ficha y referencia
				
				if (peonNegro1.position.x===objetivo.position.x && peonNegro1.position.z===objetivo.position.z){
					PeonNegro.prototype.sense = function(environment){
						this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
						var obstaculo = this.sensor.intersectObjects(objetivo,true);
						if(obstaculo.length >0){
							this.colision = 1;
							this.step=0;
						}
						else{
							this.colision = 0;
							this.step=0.25;
						}
					} //Termino Prototype sense
					PeonNegro.prototype.act = function(environment){
						if (this.colision!=1){ //Si no está chocando
							if(peonNegro1.position.x<=objetivo.position.x) //Checa el sentido del avance de la pieza según la referencia en x
							peonNegro1.position.x += this.step;
							else
							peonNegro1.position.x -= this.step;
						}
						if (this.colision!=1){ //Si no está chocando
							if(peonNegro1.position.z<=objetivo.position.z) //Checa el sentido del avance de la pieza según la referencia en z
							peonNegro1.position.z += this.step;
							else
							peonNegro1.position.z -= this.step;
						}
						
						//////////////////////////////  Revisar si existen piezas enemigas y las destruye  //////////////////////
						if((peonNegro1.position.x==reyBlanco.position.x && peonNegro1.position.z==reyBlanco.position.z)&&(peonNegro1.position.y==reyBlanco.position.y)){
							escena.remove(reyBlanco);
							alert("Fin del juego, equipo negro ha ganado");
						}
						if((peonNegro1.position.x==reinaBlanca.position.x && peonNegro1.position.z==reinaBlanca.position.z)&&(peonNegro1.position.y==reinaBlanca.position.y)){
							escena.remove(reinaBlanca);
						}
						if((peonNegro1.position.x==caballoBlanco1.position.x && peonNegro1.position.z==caballoBlanco1.position.z)&&(peonNegro1.position.y==caballoBlanco1.position.y)){
							escena.remove(caballoBlanco1);
						}
						if((peonNegro1.position.x==caballoBlanco2.position.x && peonNegro1.position.z==caballoBlanco2.position.z)&&(peonNegro1.position.y==caballoBlanco2.position.y)){
							escena.remove(caballoBlanco2);
						}
						if((peonNegro1.position.x==alfilBlanco1.position.x && peonNegro1.position.z==alfilBlanco1.position.z)&&(peonNegro1.position.y==alfilBlanco1.position.y)){
							escena.remove(alfilBlanco1);
						}
						if((peonNegro1.position.x==alfilBlanco2.position.x && peonNegro1.position.z==alfilBlanco2.position.z)&&(peonNegro1.position.y==alfilBlanco2.position.y)){
							escena.remove(alfilBlanco2);
						}
						if((peonNegro1.position.x==torreBlanca1.position.x && peonNegro1.position.z==torreBlanca1.position.z)&&(peonNegro1.position.y==torreBlanca1.position.y)){
							escena.remove(torreBlanca1);
						}
						if((peonNegro1.position.x==torreBlanca2.position.x && peonNegro1.position.z==torreBlanca2.position.z)&&(peonNegro1.position.y==torreBlanca2.position.y)){
							escena.remove(torreBlanca2);
						}
						if((peonNegro1.position.x==peonBlanco1.position.x && peonNegro1.position.z==peonBlanco1.position.z)&&(peonNegro1.position.y==peonBlanco1.position.y)){
							escena.remove(peonBlanco1);
						}
						if((peonNegro1.position.x==peonBlanco2.position.x && peonNegro1.position.z==peonBlanco2.position.z)&&(peonNegro1.position.y==peonBlanco2.position.y)){
							escena.remove(peonBlanco2);
						}
						if((peonNegro1.position.x==peonBlanco3.position.x && peonNegro1.position.z==peonBlanco3.position.z)&&(peonNegro1.position.y==peonBlanco3.position.y)){
							escena.remove(peonBlanco3);
						}
						if((peonNegro1.position.x==peonBlanco4.position.x && peonNegro1.position.z==peonBlanco4.position.z)&&(peonNegro1.position.y==peonBlanco4.position.y)){
							escena.remove(peonBlanco4);
						}
						if((peonNegro1.position.x==peonBlanco5.position.x && peonNegro1.position.z==peonBlanco5.position.z)&&(peonNegro1.position.y==peonBlanco5.position.y)){
							escena.remove(peonBlanco5);
						}
						if((peonNegro1.position.x==peonBlanco6.position.x && peonNegro1.position.z==peonBlanco6.position.z)&&(peonNegro1.position.y==peonBlanco6.position.y)){
							escena.remove(peonBlanco6);
						}
						if((peonNegro1.position.x==peonBlanco7.position.x && peonNegro1.position.z==peonBlanco7.position.z)&&(peonNegro1.position.y==peonBlanco7.position.y)){
							escena.remove(peonBlanco7);
						}
						if((peonNegro1.position.x==peonBlanco8.position.x && peonNegro1.position.z==peonBlanco8.position.z)&&(peonNegro1.position.y==peonBlanco8.position.y)){
							escena.remove(peonBlanco8);
						}
						
						//////////////////////////////  Revisar si existen piezas amigas y manda alerta ////////////////////////
						if (((((((((((((((peonNegro1.position.x==caballoNegro1.position.x && peonNegro1.position.z==caballoNegro1.position.z)||
						(peonNegro1.position.x==peonNegro2.position.x && peonNegro1.position.z==peonNegro2.position.z))||
						(peonNegro1.position.x==peonNegro3.position.x && peonNegro1.position.z==peonNegro3.position.z))||
						(peonNegro1.position.x==peonNegro4.position.x && peonNegro1.position.z==peonNegro4.position.z))||
						(peonNegro1.position.x==peonNegro5.position.x && peonNegro1.position.z==peonNegro5.position.z))||
						(peonNegro1.position.x==peonNegro6.position.x && peonNegro1.position.z==peonNegro6.position.z))||
						(peonNegro1.position.x==peonNegro7.position.x && peonNegro1.position.z==peonNegro7.position.z))||
						(peonNegro1.position.x==peonNegro8.position.x && peonNegro1.position.z==peonNegro8.position.z))||
						(peonNegro1.position.x==torreNegra1.position.x && peonNegro1.position.z==torreNegra1.position.z))||
						(peonNegro1.position.x==torreNegra2.position.x && peonNegro1.position.z==torreNegra2.position.z))||
						(peonNegro1.position.x==alfilNegro1.position.x && peonNegro1.position.z==alfilNegro1.position.z))||
						(peonNegro1.position.x==alfilNegro2.position.x && peonNegro1.position.z==alfilNegro2.position.z))||
						(peonNegro1.position.x==caballoNegro2.position.x && peonNegro1.position.z==caballoNegro2.position.z))||
						(peonNegro1.position.x==reinaNegra.position.x && peonNegro1.position.z==reinaNegra.position.z))||
						(peonNegro1.position.x==reyNegro.position.x && peonNegro1.position.z==reyNegro.position.z)){
							alert("Movimiento inválido");
							peonNegro1.position.x=objetivo.position.x;peonNegro1.position.z=objetivo.position.z;
						}
					} //Termino Prototype act
				}//Termino if ficha y referencia														
								
				if (peonNegro2.position.x===objetivo.position.x && peonNegro2.position.z===objetivo.position.z){
					PeonNegro.prototype.sense = function(environment){
						this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
						var obstaculo = this.sensor.intersectObjects(objetivo,true);
						if(obstaculo.length >0){
							this.colision = 1;
							this.step=0;
						}
						else{
							this.colision = 0;
							this.step=0.25;
						}
					} //Termino Prototype sense
					PeonNegro.prototype.act = function(environment){
						if (this.colision!=1){ //Si no está chocando
							if(peonNegro2.position.x<=objetivo.position.x) //Checa el sentido del avance de la pieza según la referencia en x
							peonNegro2.position.x += this.step;
							else
							peonNegro2.position.x -= this.step;
						}
						if (this.colision!=1){ //Si no está chocando
							if(peonNegro2.position.z<=objetivo.position.z) //Checa el sentido del avance de la pieza según la referencia en z
							peonNegro2.position.z += this.step;
							else
							peonNegro2.position.z -= this.step;
						}
						
						//////////////////////////////  Revisar si existen piezas enemigas y las destruye  //////////////////////
						if((peonNegro2.position.x==reyBlanco.position.x && peonNegro2.position.z==reyBlanco.position.z)&&(peonNegro2.position.y==reyBlanco.position.y)){
							escena.remove(reyBlanco);
							alert("Fin del juego, equipo negro ha ganado");
						}
						if((peonNegro2.position.x==reinaBlanca.position.x && peonNegro2.position.z==reinaBlanca.position.z)&&(peonNegro2.position.y==reinaBlanca.position.y)){
							escena.remove(reinaBlanca);
						}
						if((peonNegro2.position.x==caballoBlanco1.position.x && peonNegro2.position.z==caballoBlanco1.position.z)&&(peonNegro2.position.y==caballoBlanco1.position.y)){
							escena.remove(caballoBlanco1);
						}
						if((peonNegro2.position.x==caballoBlanco2.position.x && peonNegro2.position.z==caballoBlanco2.position.z)&&(peonNegro2.position.y==caballoBlanco2.position.y)){
							escena.remove(caballoBlanco2);
						}
						if((peonNegro2.position.x==alfilBlanco1.position.x && peonNegro2.position.z==alfilBlanco1.position.z)&&(peonNegro2.position.y==alfilBlanco1.position.y)){
							escena.remove(alfilBlanco1);
						}
						if((peonNegro2.position.x==alfilBlanco2.position.x && peonNegro2.position.z==alfilBlanco2.position.z)&&(peonNegro2.position.y==alfilBlanco2.position.y)){
							escena.remove(alfilBlanco2);
						}
						if((peonNegro2.position.x==torreBlanca1.position.x && peonNegro2.position.z==torreBlanca1.position.z)&&(peonNegro2.position.y==torreBlanca1.position.y)){
							escena.remove(torreBlanca1);
						}
						if((peonNegro2.position.x==torreBlanca2.position.x && peonNegro2.position.z==torreBlanca2.position.z)&&(peonNegro2.position.y==torreBlanca2.position.y)){
							escena.remove(torreBlanca2);
						}
						if((peonNegro2.position.x==peonBlanco1.position.x && peonNegro2.position.z==peonBlanco1.position.z)&&(peonNegro2.position.y==peonBlanco1.position.y)){
							escena.remove(peonBlanco1);
						}
						if((peonNegro2.position.x==peonBlanco2.position.x && peonNegro2.position.z==peonBlanco2.position.z)&&(peonNegro2.position.y==peonBlanco2.position.y)){
							escena.remove(peonBlanco2);
						}
						if((peonNegro2.position.x==peonBlanco3.position.x && peonNegro2.position.z==peonBlanco3.position.z)&&(peonNegro2.position.y==peonBlanco3.position.y)){
							escena.remove(peonBlanco3);
						}
						if((peonNegro2.position.x==peonBlanco4.position.x && peonNegro2.position.z==peonBlanco4.position.z)&&(peonNegro2.position.y==peonBlanco4.position.y)){
							escena.remove(peonBlanco4);
						}
						if((peonNegro2.position.x==peonBlanco5.position.x && peonNegro2.position.z==peonBlanco5.position.z)&&(peonNegro2.position.y==peonBlanco5.position.y)){
							escena.remove(peonBlanco5);
						}
						if((peonNegro2.position.x==peonBlanco6.position.x && peonNegro2.position.z==peonBlanco6.position.z)&&(peonNegro2.position.y==peonBlanco6.position.y)){
							escena.remove(peonBlanco6);
						}
						if((peonNegro2.position.x==peonBlanco7.position.x && peonNegro2.position.z==peonBlanco7.position.z)&&(peonNegro2.position.y==peonBlanco7.position.y)){
							escena.remove(peonBlanco7);
						}
						if((peonNegro2.position.x==peonBlanco8.position.x && peonNegro2.position.z==peonBlanco8.position.z)&&(peonNegro2.position.y==peonBlanco8.position.y)){
							escena.remove(peonBlanco8);
						}
						
						//////////////////////////////  Revisar si existen piezas amigas y manda alerta ////////////////////////
						if (((((((((((((((peonNegro2.position.x==caballoNegro1.position.x && peonNegro2.position.z==caballoNegro1.position.z)||
						(peonNegro2.position.x==peonNegro1.position.x && peonNegro2.position.z==peonNegro1.position.z))||
						(peonNegro2.position.x==peonNegro3.position.x && peonNegro2.position.z==peonNegro3.position.z))||
						(peonNegro2.position.x==peonNegro4.position.x && peonNegro2.position.z==peonNegro4.position.z))||
						(peonNegro2.position.x==peonNegro5.position.x && peonNegro2.position.z==peonNegro5.position.z))||
						(peonNegro2.position.x==peonNegro6.position.x && peonNegro2.position.z==peonNegro6.position.z))||
						(peonNegro2.position.x==peonNegro7.position.x && peonNegro2.position.z==peonNegro7.position.z))||
						(peonNegro2.position.x==peonNegro8.position.x && peonNegro2.position.z==peonNegro8.position.z))||
						(peonNegro2.position.x==torreNegra1.position.x && peonNegro2.position.z==torreNegra1.position.z))||
						(peonNegro2.position.x==torreNegra2.position.x && peonNegro2.position.z==torreNegra2.position.z))||
						(peonNegro2.position.x==alfilNegro1.position.x && peonNegro2.position.z==alfilNegro1.position.z))||
						(peonNegro2.position.x==alfilNegro2.position.x && peonNegro2.position.z==alfilNegro2.position.z))||
						(peonNegro2.position.x==caballoNegro2.position.x && peonNegro2.position.z==caballoNegro2.position.z))||
						(peonNegro2.position.x==reinaNegra.position.x && peonNegro2.position.z==reinaNegra.position.z))||
						(peonNegro2.position.x==reyNegro.position.x && peonNegro2.position.z==reyNegro.position.z)){
							alert("Movimiento inválido");
							peonNegro2.position.x=objetivo.position.x;peonNegro2.position.z=objetivo.position.z;
						}
					} //Termino Prototype act
				}//Termino if ficha y referencia
				
				if (peonNegro3.position.x===objetivo.position.x && peonNegro3.position.z===objetivo.position.z){
					PeonNegro.prototype.sense = function(environment){
						this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
						var obstaculo = this.sensor.intersectObjects(objetivo,true);
						if(obstaculo.length >0){
							this.colision = 1;
							this.step=0;
						}
						else{
							this.colision = 0;
							this.step=0.25;
						}
					} //Termino Prototype sense
					PeonNegro.prototype.act = function(environment){
						if (this.colision!=1){ //Si no está chocando
							if(peonNegro3.position.x<=objetivo.position.x) //Checa el sentido del avance de la pieza según la referencia en x
							peonNegro3.position.x += this.step;
							else
							peonNegro3.position.x -= this.step;
						}
						if (this.colision!=1){ //Si no está chocando
							if(peonNegro3.position.z<=objetivo.position.z) //Checa el sentido del avance de la pieza según la referencia en z
							peonNegro3.position.z += this.step;
							else
							peonNegro3.position.z -= this.step;
						}
						
						//////////////////////////////  Revisar si existen piezas enemigas y las destruye  //////////////////////
						if((peonNegro3.position.x==reyBlanco.position.x && peonNegro3.position.z==reyBlanco.position.z)&&(peonNegro3.position.y==reyBlanco.position.y)){
							escena.remove(reyBlanco);
							alert("Fin del juego, equipo negro ha ganado");
						}
						if((peonNegro3.position.x==reinaBlanca.position.x && peonNegro3.position.z==reinaBlanca.position.z)&&(peonNegro3.position.y==reinaBlanca.position.y)){
							escena.remove(reinaBlanca);
						}
						if((peonNegro3.position.x==caballoBlanco1.position.x && peonNegro3.position.z==caballoBlanco1.position.z)&&(peonNegro3.position.y==caballoBlanco1.position.y)){
							escena.remove(caballoBlanco1);
						}
						if((peonNegro3.position.x==caballoBlanco2.position.x && peonNegro3.position.z==caballoBlanco2.position.z)&&(peonNegro3.position.y==caballoBlanco2.position.y)){
							escena.remove(caballoBlanco2);
						}
						if((peonNegro3.position.x==alfilBlanco1.position.x && peonNegro3.position.z==alfilBlanco1.position.z)&&(peonNegro3.position.y==alfilBlanco1.position.y)){
							escena.remove(alfilBlanco1);
						}
						if((peonNegro3.position.x==alfilBlanco2.position.x && peonNegro3.position.z==alfilBlanco2.position.z)&&(peonNegro3.position.y==alfilBlanco2.position.y)){
							escena.remove(alfilBlanco2);
						}
						if((peonNegro3.position.x==torreBlanca1.position.x && peonNegro3.position.z==torreBlanca1.position.z)&&(peonNegro3.position.y==torreBlanca1.position.y)){
							escena.remove(torreBlanca1);
						}
						if((peonNegro3.position.x==torreBlanca2.position.x && peonNegro3.position.z==torreBlanca2.position.z)&&(peonNegro3.position.y==torreBlanca2.position.y)){
							escena.remove(torreBlanca2);
						}
						if((peonNegro3.position.x==peonBlanco1.position.x && peonNegro3.position.z==peonBlanco1.position.z)&&(peonNegro3.position.y==peonBlanco1.position.y)){
							escena.remove(peonBlanco1);
						}
						if((peonNegro3.position.x==peonBlanco2.position.x && peonNegro3.position.z==peonBlanco2.position.z)&&(peonNegro3.position.y==peonBlanco2.position.y)){
							escena.remove(peonBlanco2);
						}
						if((peonNegro3.position.x==peonBlanco3.position.x && peonNegro3.position.z==peonBlanco3.position.z)&&(peonNegro3.position.y==peonBlanco3.position.y)){
							escena.remove(peonBlanco3);
						}
						if((peonNegro3.position.x==peonBlanco4.position.x && peonNegro3.position.z==peonBlanco4.position.z)&&(peonNegro3.position.y==peonBlanco4.position.y)){
							escena.remove(peonBlanco4);
						}
						if((peonNegro3.position.x==peonBlanco5.position.x && peonNegro3.position.z==peonBlanco5.position.z)&&(peonNegro3.position.y==peonBlanco5.position.y)){
							escena.remove(peonBlanco5);
						}
						if((peonNegro3.position.x==peonBlanco6.position.x && peonNegro3.position.z==peonBlanco6.position.z)&&(peonNegro3.position.y==peonBlanco6.position.y)){
							escena.remove(peonBlanco6);
						}
						if((peonNegro3.position.x==peonBlanco7.position.x && peonNegro3.position.z==peonBlanco7.position.z)&&(peonNegro3.position.y==peonBlanco7.position.y)){
							escena.remove(peonBlanco7);
						}
						if((peonNegro3.position.x==peonBlanco8.position.x && peonNegro3.position.z==peonBlanco8.position.z)&&(peonNegro3.position.y==peonBlanco8.position.y)){
							escena.remove(peonBlanco8);
						}
						
						//////////////////////////////  Revisar si existen piezas amigas y manda alerta ////////////////////////
						if (((((((((((((((peonNegro3.position.x==caballoNegro1.position.x && peonNegro3.position.z==caballoNegro1.position.z)||
						(peonNegro3.position.x==peonNegro1.position.x && peonNegro3.position.z==peonNegro1.position.z))||
						(peonNegro3.position.x==peonNegro2.position.x && peonNegro3.position.z==peonNegro2.position.z))||
						(peonNegro3.position.x==peonNegro4.position.x && peonNegro3.position.z==peonNegro4.position.z))||
						(peonNegro3.position.x==peonNegro5.position.x && peonNegro3.position.z==peonNegro5.position.z))||
						(peonNegro3.position.x==peonNegro6.position.x && peonNegro3.position.z==peonNegro6.position.z))||
						(peonNegro3.position.x==peonNegro7.position.x && peonNegro3.position.z==peonNegro7.position.z))||
						(peonNegro3.position.x==peonNegro8.position.x && peonNegro3.position.z==peonNegro8.position.z))||
						(peonNegro3.position.x==torreNegra1.position.x && peonNegro3.position.z==torreNegra1.position.z))||
						(peonNegro3.position.x==torreNegra2.position.x && peonNegro3.position.z==torreNegra2.position.z))||
						(peonNegro3.position.x==alfilNegro1.position.x && peonNegro3.position.z==alfilNegro1.position.z))||
						(peonNegro3.position.x==alfilNegro2.position.x && peonNegro3.position.z==alfilNegro2.position.z))||
						(peonNegro3.position.x==caballoNegro2.position.x && peonNegro3.position.z==caballoNegro2.position.z))||
						(peonNegro3.position.x==reinaNegra.position.x && peonNegro3.position.z==reinaNegra.position.z))||
						(peonNegro3.position.x==reyNegro.position.x && peonNegro3.position.z==reyNegro.position.z)){
							alert("Movimiento inválido");
							peonNegro3.position.x=objetivo.position.x;peonNegro3.position.z=objetivo.position.z;
						}
					} //Termino Prototype act
				}//Termino if ficha y referencia
				
			if (peonNegro4.position.x===objetivo.position.x && peonNegro4.position.z===objetivo.position.z){
				PeonNegro.prototype.sense = function(environment){
					this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
					var obstaculo = this.sensor.intersectObjects(objetivo,true);
					if(obstaculo.length >0){
						this.colision = 1;
						this.step=0;
					}
					else{
						this.colision = 0;
						this.step=0.25;
					}
				} //Termino Prototype sense
				PeonNegro.prototype.act = function(environment){
					if (this.colision!=1){ //Si no está chocando
						if(peonNegro4.position.x<=objetivo.position.x) //Checa el sentido del avance de la pieza según la referencia en x
						peonNegro4.position.x += this.step;
						else
						peonNegro4.position.x -= this.step;
					}
					if (this.colision!=1){ //Si no está chocando
						if(peonNegro4.position.z<=objetivo.position.z) //Checa el sentido del avance de la pieza según la referencia en z
						peonNegro4.position.z += this.step;
						else
						peonNegro4.position.z -= this.step;
					}
					
					//////////////////////////////  Revisar si existen piezas enemigas y las destruye  //////////////////////
					if((peonNegro4.position.x==reyBlanco.position.x && peonNegro4.position.z==reyBlanco.position.z)&&(peonNegro4.position.y==reyBlanco.position.y)){
						escena.remove(reyBlanco);
						alert("Fin del juego, equipo negro ha ganado");
					}
					if((peonNegro4.position.x==reinaBlanca.position.x && peonNegro4.position.z==reinaBlanca.position.z)&&(peonNegro4.position.y==reinaBlanca.position.y)){
						escena.remove(reinaBlanca);
					}
					if((peonNegro4.position.x==caballoBlanco1.position.x && peonNegro4.position.z==caballoBlanco1.position.z)&&(peonNegro4.position.y==caballoBlanco1.position.y)){
						escena.remove(caballoBlanco1);
					}
					if((peonNegro4.position.x==caballoBlanco2.position.x && peonNegro4.position.z==caballoBlanco2.position.z)&&(peonNegro4.position.y==caballoBlanco2.position.y)){
						escena.remove(caballoBlanco2);
					}
					if((peonNegro4.position.x==alfilBlanco1.position.x && peonNegro4.position.z==alfilBlanco1.position.z)&&(peonNegro4.position.y==alfilBlanco1.position.y)){
						escena.remove(alfilBlanco1);
					}
					if((peonNegro4.position.x==alfilBlanco2.position.x && peonNegro4.position.z==alfilBlanco2.position.z)&&(peonNegro4.position.y==alfilBlanco2.position.y)){
						escena.remove(alfilBlanco2);
					}
					if((peonNegro4.position.x==torreBlanca1.position.x && peonNegro4.position.z==torreBlanca1.position.z)&&(peonNegro4.position.y==torreBlanca1.position.y)){
						escena.remove(torreBlanca1);
					}
					if((peonNegro4.position.x==torreBlanca2.position.x && peonNegro4.position.z==torreBlanca2.position.z)&&(peonNegro4.position.y==torreBlanca2.position.y)){
						escena.remove(torreBlanca2);
					}
					if((peonNegro4.position.x==peonBlanco1.position.x && peonNegro4.position.z==peonBlanco1.position.z)&&(peonNegro4.position.y==peonBlanco1.position.y)){
						escena.remove(peonBlanco1);
					}
					if((peonNegro4.position.x==peonBlanco2.position.x && peonNegro4.position.z==peonBlanco2.position.z)&&(peonNegro4.position.y==peonBlanco2.position.y)){
						escena.remove(peonBlanco2);
					}
					if((peonNegro4.position.x==peonBlanco3.position.x && peonNegro4.position.z==peonBlanco3.position.z)&&(peonNegro4.position.y==peonBlanco3.position.y)){
						escena.remove(peonBlanco3);
					}
					if((peonNegro4.position.x==peonBlanco4.position.x && peonNegro4.position.z==peonBlanco4.position.z)&&(peonNegro4.position.y==peonBlanco4.position.y)){
						escena.remove(peonBlanco4);
					}
					if((peonNegro4.position.x==peonBlanco5.position.x && peonNegro4.position.z==peonBlanco5.position.z)&&(peonNegro4.position.y==peonBlanco5.position.y)){
						escena.remove(peonBlanco5);
					}
					if((peonNegro4.position.x==peonBlanco6.position.x && peonNegro4.position.z==peonBlanco6.position.z)&&(peonNegro4.position.y==peonBlanco6.position.y)){
						escena.remove(peonBlanco6);
					}
					if((peonNegro4.position.x==peonBlanco7.position.x && peonNegro4.position.z==peonBlanco7.position.z)&&(peonNegro4.position.y==peonBlanco7.position.y)){
						escena.remove(peonBlanco7);
					}
					if((peonNegro4.position.x==peonBlanco8.position.x && peonNegro4.position.z==peonBlanco8.position.z)&&(peonNegro4.position.y==peonBlanco8.position.y)){
						escena.remove(peonBlanco8);
					}
					
					//////////////////////////////  Revisar si existen piezas amigas y manda alerta ////////////////////////
					if (((((((((((((((peonNegro4.position.x==caballoNegro1.position.x && peonNegro4.position.z==caballoNegro1.position.z)||
					(peonNegro4.position.x==peonNegro1.position.x && peonNegro4.position.z==peonNegro1.position.z))||
					(peonNegro4.position.x==peonNegro2.position.x && peonNegro4.position.z==peonNegro2.position.z))||
					(peonNegro4.position.x==peonNegro3.position.x && peonNegro4.position.z==peonNegro3.position.z))||
					(peonNegro4.position.x==peonNegro5.position.x && peonNegro4.position.z==peonNegro5.position.z))||
					(peonNegro4.position.x==peonNegro6.position.x && peonNegro4.position.z==peonNegro6.position.z))||
					(peonNegro4.position.x==peonNegro7.position.x && peonNegro4.position.z==peonNegro7.position.z))||
					(peonNegro4.position.x==peonNegro8.position.x && peonNegro4.position.z==peonNegro8.position.z))||
					(peonNegro4.position.x==torreNegra1.position.x && peonNegro4.position.z==torreNegra1.position.z))||
					(peonNegro4.position.x==torreNegra2.position.x && peonNegro4.position.z==torreNegra2.position.z))||
					(peonNegro4.position.x==alfilNegro1.position.x && peonNegro4.position.z==alfilNegro1.position.z))||
					(peonNegro4.position.x==alfilNegro2.position.x && peonNegro4.position.z==alfilNegro2.position.z))||
					(peonNegro4.position.x==caballoNegro2.position.x && peonNegro4.position.z==caballoNegro2.position.z))||
					(peonNegro4.position.x==reinaNegra.position.x && peonNegro4.position.z==reinaNegra.position.z))||
					(peonNegro4.position.x==reyNegro.position.x && peonNegro4.position.z==reyNegro.position.z)){
						alert("Movimiento inválido");
						peonNegro4.position.x=objetivo.position.x;peonNegro4.position.z=objetivo.position.z;
					}
				} //Termino Prototype act
			}//Termino if ficha y referencia
			
				if (peonNegro5.position.x===objetivo.position.x && peonNegro5.position.z===objetivo.position.z){
					PeonNegro.prototype.sense = function(environment){
						this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
						var obstaculo = this.sensor.intersectObjects(objetivo,true);
						if(obstaculo.length >0){
							this.colision = 1;
							this.step=0;
						}
						else{
							this.colision = 0;
							this.step=0.25;
						}
					} //Termino Prototype sense
					PeonNegro.prototype.act = function(environment){
						if (this.colision!=1){ //Si no está chocando
							if(peonNegro5.position.x<=objetivo.position.x) //Checa el sentido del avance de la pieza según la referencia en x
							peonNegro5.position.x += this.step;
							else
							peonNegro5.position.x -= this.step;
						}
						if (this.colision!=1){ //Si no está chocando
							if(peonNegro5.position.z<=objetivo.position.z) //Checa el sentido del avance de la pieza según la referencia en z
							peonNegro5.position.z += this.step;
							else
							peonNegro5.position.z -= this.step;
						}
						
						//////////////////////////////  Revisar si existen piezas enemigas y las destruye  //////////////////////
						if((peonNegro5.position.x==reyBlanco.position.x && peonNegro5.position.z==reyBlanco.position.z)&&(peonNegro5.position.y==reyBlanco.position.y)){
							escena.remove(reyBlanco);
							alert("Fin del juego, equipo negro ha ganado");
						}
						if((peonNegro5.position.x==reinaBlanca.position.x && peonNegro5.position.z==reinaBlanca.position.z)&&(peonNegro5.position.y==reinaBlanca.position.y)){
							escena.remove(reinaBlanca);
						}
						if((peonNegro5.position.x==caballoBlanco1.position.x && peonNegro5.position.z==caballoBlanco1.position.z)&&(peonNegro5.position.y==caballoBlanco1.position.y)){
							escena.remove(caballoBlanco1);
						}
						if((peonNegro5.position.x==caballoBlanco2.position.x && peonNegro5.position.z==caballoBlanco2.position.z)&&(peonNegro5.position.y==caballoBlanco2.position.y)){
							escena.remove(caballoBlanco2);
						}
						if((peonNegro5.position.x==alfilBlanco1.position.x && peonNegro5.position.z==alfilBlanco1.position.z)&&(peonNegro5.position.y==alfilBlanco1.position.y)){
							escena.remove(alfilBlanco1);
						}
						if((peonNegro5.position.x==alfilBlanco2.position.x && peonNegro5.position.z==alfilBlanco2.position.z)&&(peonNegro5.position.y==alfilBlanco2.position.y)){
							escena.remove(alfilBlanco2);
						}
						if((peonNegro5.position.x==torreBlanca1.position.x && peonNegro5.position.z==torreBlanca1.position.z)&&(peonNegro5.position.y==torreBlanca1.position.y)){
							escena.remove(torreBlanca1);
						}
						if((peonNegro5.position.x==torreBlanca2.position.x && peonNegro5.position.z==torreBlanca2.position.z)&&(peonNegro5.position.y==torreBlanca2.position.y)){
							escena.remove(torreBlanca2);
						}
						if((peonNegro5.position.x==peonBlanco1.position.x && peonNegro5.position.z==peonBlanco1.position.z)&&(peonNegro5.position.y==peonBlanco1.position.y)){
							escena.remove(peonBlanco1);
						}
						if((peonNegro5.position.x==peonBlanco2.position.x && peonNegro5.position.z==peonBlanco2.position.z)&&(peonNegro5.position.y==peonBlanco2.position.y)){
							escena.remove(peonBlanco2);
						}
						if((peonNegro5.position.x==peonBlanco3.position.x && peonNegro5.position.z==peonBlanco3.position.z)&&(peonNegro5.position.y==peonBlanco3.position.y)){
							escena.remove(peonBlanco3);
						}
						if((peonNegro5.position.x==peonBlanco4.position.x && peonNegro5.position.z==peonBlanco4.position.z)&&(peonNegro5.position.y==peonBlanco4.position.y)){
							escena.remove(peonBlanco4);
						}
						if((peonNegro5.position.x==peonBlanco5.position.x && peonNegro5.position.z==peonBlanco5.position.z)&&(peonNegro5.position.y==peonBlanco5.position.y)){
							escena.remove(peonBlanco5);
						}
						if((peonNegro5.position.x==peonBlanco6.position.x && peonNegro5.position.z==peonBlanco6.position.z)&&(peonNegro5.position.y==peonBlanco6.position.y)){
							escena.remove(peonBlanco6);
						}
						if((peonNegro5.position.x==peonBlanco7.position.x && peonNegro5.position.z==peonBlanco7.position.z)&&(peonNegro5.position.y==peonBlanco7.position.y)){
							escena.remove(peonBlanco7);
						}
						if((peonNegro5.position.x==peonBlanco8.position.x && peonNegro5.position.z==peonBlanco8.position.z)&&(peonNegro5.position.y==peonBlanco8.position.y)){
							escena.remove(peonBlanco8);
						}
						
						//////////////////////////////  Revisar si existen piezas amigas y manda alerta ////////////////////////
						if (((((((((((((((peonNegro5.position.x==caballoNegro1.position.x && peonNegro5.position.z==caballoNegro1.position.z)||
						(peonNegro5.position.x==peonNegro1.position.x && peonNegro5.position.z==peonNegro1.position.z))||
						(peonNegro5.position.x==peonNegro2.position.x && peonNegro5.position.z==peonNegro2.position.z))||
						(peonNegro5.position.x==peonNegro3.position.x && peonNegro5.position.z==peonNegro3.position.z))||
						(peonNegro5.position.x==peonNegro4.position.x && peonNegro5.position.z==peonNegro4.position.z))||
						(peonNegro5.position.x==peonNegro6.position.x && peonNegro5.position.z==peonNegro6.position.z))||
						(peonNegro5.position.x==peonNegro7.position.x && peonNegro5.position.z==peonNegro7.position.z))||
						(peonNegro5.position.x==peonNegro8.position.x && peonNegro5.position.z==peonNegro8.position.z))||
						(peonNegro5.position.x==torreNegra1.position.x && peonNegro5.position.z==torreNegra1.position.z))||
						(peonNegro5.position.x==torreNegra2.position.x && peonNegro5.position.z==torreNegra2.position.z))||
						(peonNegro5.position.x==alfilNegro1.position.x && peonNegro5.position.z==alfilNegro1.position.z))||
						(peonNegro5.position.x==alfilNegro2.position.x && peonNegro5.position.z==alfilNegro2.position.z))||
						(peonNegro5.position.x==caballoNegro2.position.x && peonNegro5.position.z==caballoNegro2.position.z))||
						(peonNegro5.position.x==reinaNegra.position.x && peonNegro5.position.z==reinaNegra.position.z))||
						(peonNegro5.position.x==reyNegro.position.x && peonNegro5.position.z==reyNegro.position.z)){
							alert("Movimiento inválido");
							peonNegro5.position.x=objetivo.position.x;peonNegro5.position.z=objetivo.position.z;
						}
					} //Termino Prototype act
				}//Termino if ficha y referencia
				
				if (peonNegro6.position.x===objetivo.position.x && peonNegro6.position.z===objetivo.position.z){
					PeonNegro.prototype.sense = function(environment){
						this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
						var obstaculo = this.sensor.intersectObjects(objetivo,true);
						if(obstaculo.length >0){
							this.colision = 1;
							this.step=0;
						}
						else{
							this.colision = 0;
							this.step=0.25;
						}
					} //Termino Prototype sense
					PeonNegro.prototype.act = function(environment){
						if (this.colision!=1){ //Si no está chocando
							if(peonNegro6.position.x<=objetivo.position.x) //Checa el sentido del avance de la pieza según la referencia en x
							peonNegro6.position.x += this.step;
							else
							peonNegro6.position.x -= this.step;
						}
						if (this.colision!=1){ //Si no está chocando
							if(peonNegro6.position.z<=objetivo.position.z) //Checa el sentido del avance de la pieza según la referencia en z
							peonNegro6.position.z += this.step;
							else
							peonNegro6.position.z -= this.step;
						}
						
						//////////////////////////////  Revisar si existen piezas enemigas y las destruye  //////////////////////
						if((peonNegro6.position.x==reyBlanco.position.x && peonNegro6.position.z==reyBlanco.position.z)&&(peonNegro6.position.y==reyBlanco.position.y)){
							escena.remove(reyBlanco);
							alert("Fin del juego, equipo negro ha ganado");
						}
						if((peonNegro6.position.x==reinaBlanca.position.x && peonNegro6.position.z==reinaBlanca.position.z)&&(peonNegro6.position.y==reinaBlanca.position.y)){
							escena.remove(reinaBlanca);
						}
						if((peonNegro6.position.x==caballoBlanco1.position.x && peonNegro6.position.z==caballoBlanco1.position.z)&&(peonNegro6.position.y==caballoBlanco1.position.y)){
							escena.remove(caballoBlanco1);
						}
						if((peonNegro6.position.x==caballoBlanco2.position.x && peonNegro6.position.z==caballoBlanco2.position.z)&&(peonNegro6.position.y==caballoBlanco2.position.y)){
							escena.remove(caballoBlanco2);
						}
						if((peonNegro6.position.x==alfilBlanco1.position.x && peonNegro6.position.z==alfilBlanco1.position.z)&&(peonNegro6.position.y==alfilBlanco1.position.y)){
							escena.remove(alfilBlanco1);
						}
						if((peonNegro6.position.x==alfilBlanco2.position.x && peonNegro6.position.z==alfilBlanco2.position.z)&&(peonNegro6.position.y==alfilBlanco2.position.y)){
							escena.remove(alfilBlanco2);
						}
						if((peonNegro6.position.x==torreBlanca1.position.x && peonNegro6.position.z==torreBlanca1.position.z)&&(peonNegro6.position.y==torreBlanca1.position.y)){
							escena.remove(torreBlanca1);
						}
						if((peonNegro6.position.x==torreBlanca2.position.x && peonNegro6.position.z==torreBlanca2.position.z)&&(peonNegro6.position.y==torreBlanca2.position.y)){
							escena.remove(torreBlanca2);
						}
						if((peonNegro6.position.x==peonBlanco1.position.x && peonNegro6.position.z==peonBlanco1.position.z)&&(peonNegro6.position.y==peonBlanco1.position.y)){
							escena.remove(peonBlanco1);
						}
						if((peonNegro6.position.x==peonBlanco2.position.x && peonNegro6.position.z==peonBlanco2.position.z)&&(peonNegro6.position.y==peonBlanco2.position.y)){
							escena.remove(peonBlanco2);
						}
						if((peonNegro6.position.x==peonBlanco3.position.x && peonNegro6.position.z==peonBlanco3.position.z)&&(peonNegro6.position.y==peonBlanco3.position.y)){
							escena.remove(peonBlanco3);
						}
						if((peonNegro6.position.x==peonBlanco4.position.x && peonNegro6.position.z==peonBlanco4.position.z)&&(peonNegro6.position.y==peonBlanco4.position.y)){
							escena.remove(peonBlanco4);
						}
						if((peonNegro6.position.x==peonBlanco5.position.x && peonNegro6.position.z==peonBlanco5.position.z)&&(peonNegro6.position.y==peonBlanco5.position.y)){
							escena.remove(peonBlanco5);
						}
						if((peonNegro6.position.x==peonBlanco6.position.x && peonNegro6.position.z==peonBlanco6.position.z)&&(peonNegro6.position.y==peonBlanco6.position.y)){
							escena.remove(peonBlanco6);
						}
						if((peonNegro6.position.x==peonBlanco7.position.x && peonNegro6.position.z==peonBlanco7.position.z)&&(peonNegro6.position.y==peonBlanco7.position.y)){
							escena.remove(peonBlanco7);
						}
						if((peonNegro6.position.x==peonBlanco8.position.x && peonNegro6.position.z==peonBlanco8.position.z)&&(peonNegro6.position.y==peonBlanco8.position.y)){
							escena.remove(peonBlanco8);
						}
						
						//////////////////////////////  Revisar si existen piezas amigas y manda alerta ////////////////////////
						if (((((((((((((((peonNegro6.position.x==caballoNegro1.position.x && peonNegro6.position.z==caballoNegro1.position.z)||
						(peonNegro6.position.x==peonNegro1.position.x && peonNegro6.position.z==peonNegro1.position.z))||
						(peonNegro6.position.x==peonNegro2.position.x && peonNegro6.position.z==peonNegro2.position.z))||
						(peonNegro6.position.x==peonNegro3.position.x && peonNegro6.position.z==peonNegro3.position.z))||
						(peonNegro6.position.x==peonNegro4.position.x && peonNegro6.position.z==peonNegro4.position.z))||
						(peonNegro6.position.x==peonNegro5.position.x && peonNegro6.position.z==peonNegro5.position.z))||
						(peonNegro6.position.x==peonNegro7.position.x && peonNegro6.position.z==peonNegro7.position.z))||
						(peonNegro6.position.x==peonNegro8.position.x && peonNegro6.position.z==peonNegro8.position.z))||
						(peonNegro6.position.x==torreNegra1.position.x && peonNegro6.position.z==torreNegra1.position.z))||
						(peonNegro6.position.x==torreNegra2.position.x && peonNegro6.position.z==torreNegra2.position.z))||
						(peonNegro6.position.x==alfilNegro1.position.x && peonNegro6.position.z==alfilNegro1.position.z))||
						(peonNegro6.position.x==alfilNegro2.position.x && peonNegro6.position.z==alfilNegro2.position.z))||
						(peonNegro6.position.x==caballoNegro2.position.x && peonNegro6.position.z==caballoNegro2.position.z))||
						(peonNegro6.position.x==reinaNegra.position.x && peonNegro6.position.z==reinaNegra.position.z))||
						(peonNegro6.position.x==reyNegro.position.x && peonNegro6.position.z==reyNegro.position.z)){
							alert("Movimiento inválido");
							peonNegro6.position.x=objetivo.position.x;peonNegro6.position.z=objetivo.position.z;
						}
					} //Termino Prototype act
				}//Termino if ficha y referencia
				
				if (peonNegro7.position.x===objetivo.position.x && peonNegro7.position.z===objetivo.position.z){
					PeonNegro.prototype.sense = function(environment){
						this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
						var obstaculo = this.sensor.intersectObjects(objetivo,true);
						if(obstaculo.length >0){
							this.colision = 1;
							this.step=0;
						}
						else{
							this.colision = 0;
							this.step=0.25;
						}
					} //Termino Prototype sense
					PeonNegro.prototype.act = function(environment){
						if (this.colision!=1){ //Si no está chocando
							if(peonNegro7.position.x<=objetivo.position.x) //Checa el sentido del avance de la pieza según la referencia en x
							peonNegro7.position.x += this.step;
							else
							peonNegro7.position.x -= this.step;
						}
						if (this.colision!=1){ //Si no está chocando
							if(peonNegro7.position.z<=objetivo.position.z) //Checa el sentido del avance de la pieza según la referencia en z
							peonNegro7.position.z += this.step;
							else
							peonNegro7.position.z -= this.step;
						}
						
						//////////////////////////////  Revisar si existen piezas enemigas y las destruye  //////////////////////
						if((peonNegro7.position.x==reyBlanco.position.x && peonNegro7.position.z==reyBlanco.position.z)&&(peonNegro7.position.y==reyBlanco.position.y)){
							escena.remove(reyBlanco);
							alert("Fin del juego, equipo negro ha ganado");
						}
						if((peonNegro7.position.x==reinaBlanca.position.x && peonNegro7.position.z==reinaBlanca.position.z)&&(peonNegro7.position.y==reinaBlanca.position.y)){
							escena.remove(reinaBlanca);
						}
						if((peonNegro7.position.x==caballoBlanco1.position.x && peonNegro7.position.z==caballoBlanco1.position.z)&&(peonNegro7.position.y==caballoBlanco1.position.y)){
							escena.remove(caballoBlanco1);
						}
						if((peonNegro7.position.x==caballoBlanco2.position.x && peonNegro7.position.z==caballoBlanco2.position.z)&&(peonNegro7.position.y==caballoBlanco2.position.y)){
							escena.remove(caballoBlanco2);
						}
						if((peonNegro7.position.x==alfilBlanco1.position.x && peonNegro7.position.z==alfilBlanco1.position.z)&&(peonNegro7.position.y==alfilBlanco1.position.y)){
							escena.remove(alfilBlanco1);
						}
						if((peonNegro7.position.x==alfilBlanco2.position.x && peonNegro7.position.z==alfilBlanco2.position.z)&&(peonNegro7.position.y==alfilBlanco2.position.y)){
							escena.remove(alfilBlanco2);
						}
						if((peonNegro7.position.x==torreBlanca1.position.x && peonNegro7.position.z==torreBlanca1.position.z)&&(peonNegro7.position.y==torreBlanca1.position.y)){
							escena.remove(torreBlanca1);
						}
						if((peonNegro7.position.x==torreBlanca2.position.x && peonNegro7.position.z==torreBlanca2.position.z)&&(peonNegro7.position.y==torreBlanca2.position.y)){
							escena.remove(torreBlanca2);
						}
						if((peonNegro7.position.x==peonBlanco1.position.x && peonNegro7.position.z==peonBlanco1.position.z)&&(peonNegro7.position.y==peonBlanco1.position.y)){
							escena.remove(peonBlanco1);
						}
						if((peonNegro7.position.x==peonBlanco2.position.x && peonNegro7.position.z==peonBlanco2.position.z)&&(peonNegro7.position.y==peonBlanco2.position.y)){
							escena.remove(peonBlanco2);
						}
						if((peonNegro7.position.x==peonBlanco3.position.x && peonNegro7.position.z==peonBlanco3.position.z)&&(peonNegro7.position.y==peonBlanco3.position.y)){
							escena.remove(peonBlanco3);
						}
						if((peonNegro7.position.x==peonBlanco4.position.x && peonNegro7.position.z==peonBlanco4.position.z)&&(peonNegro7.position.y==peonBlanco4.position.y)){
							escena.remove(peonBlanco4);
						}
						if((peonNegro7.position.x==peonBlanco5.position.x && peonNegro7.position.z==peonBlanco5.position.z)&&(peonNegro7.position.y==peonBlanco5.position.y)){
							escena.remove(peonBlanco5);
						}
						if((peonNegro7.position.x==peonBlanco6.position.x && peonNegro7.position.z==peonBlanco6.position.z)&&(peonNegro7.position.y==peonBlanco6.position.y)){
							escena.remove(peonBlanco6);
						}
						if((peonNegro7.position.x==peonBlanco7.position.x && peonNegro7.position.z==peonBlanco7.position.z)&&(peonNegro7.position.y==peonBlanco7.position.y)){
							escena.remove(peonBlanco7);
						}
						if((peonNegro7.position.x==peonBlanco8.position.x && peonNegro7.position.z==peonBlanco8.position.z)&&(peonNegro7.position.y==peonBlanco8.position.y)){
							escena.remove(peonBlanco8);
						}
						
						//////////////////////////////  Revisar si existen piezas amigas y manda alerta ////////////////////////
						if (((((((((((((((peonNegro7.position.x==caballoNegro1.position.x && peonNegro7.position.z==caballoNegro1.position.z)||
						(peonNegro7.position.x==peonNegro1.position.x && peonNegro7.position.z==peonNegro1.position.z))||
						(peonNegro7.position.x==peonNegro2.position.x && peonNegro7.position.z==peonNegro2.position.z))||
						(peonNegro7.position.x==peonNegro3.position.x && peonNegro7.position.z==peonNegro3.position.z))||
						(peonNegro7.position.x==peonNegro4.position.x && peonNegro7.position.z==peonNegro4.position.z))||
						(peonNegro7.position.x==peonNegro5.position.x && peonNegro7.position.z==peonNegro5.position.z))||
						(peonNegro7.position.x==peonNegro6.position.x && peonNegro7.position.z==peonNegro6.position.z))||
						(peonNegro7.position.x==peonNegro8.position.x && peonNegro7.position.z==peonNegro8.position.z))||
						(peonNegro7.position.x==torreNegra1.position.x && peonNegro7.position.z==torreNegra1.position.z))||
						(peonNegro7.position.x==torreNegra2.position.x && peonNegro7.position.z==torreNegra2.position.z))||
						(peonNegro7.position.x==alfilNegro1.position.x && peonNegro7.position.z==alfilNegro1.position.z))||
						(peonNegro7.position.x==alfilNegro2.position.x && peonNegro7.position.z==alfilNegro2.position.z))||
						(peonNegro7.position.x==caballoNegro2.position.x && peonNegro7.position.z==caballoNegro2.position.z))||
						(peonNegro7.position.x==reinaNegra.position.x && peonNegro7.position.z==reinaNegra.position.z))||
						(peonNegro7.position.x==reyNegro.position.x && peonNegro7.position.z==reyNegro.position.z)){
							alert("Movimiento inválido");
							peonNegro7.position.x=objetivo.position.x;peonNegro7.position.z=objetivo.position.z;
						}
					} //Termino Prototype act
				}//Termino if ficha y referencia
				
				if (peonNegro8.position.x===objetivo.position.x && peonNegro8.position.z===objetivo.position.z){
					PeonNegro.prototype.sense = function(environment){
						this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
						var obstaculo = this.sensor.intersectObjects(objetivo,true);
						if(obstaculo.length >0){
							this.colision = 1;
							this.step=0;
						}
						else{
							this.colision = 0;
							this.step=0.25;
						}
					} //Termino Prototype sense
					PeonNegro.prototype.act = function(environment){
						if (this.colision!=1){ //Si no está chocando
							if(peonNegro8.position.x<=objetivo.position.x) //Checa el sentido del avance de la pieza según la referencia en x
							peonNegro8.position.x += this.step;
							else
							peonNegro8.position.x -= this.step;
						}
						if (this.colision!=1){ //Si no está chocando
							if(peonNegro8.position.z<=objetivo.position.z) //Checa el sentido del avance de la pieza según la referencia en z
							peonNegro8.position.z += this.step;
							else
							peonNegro8.position.z -= this.step;
						}
						
						//////////////////////////////  Revisar si existen piezas enemigas y las destruye  //////////////////////
						if((peonNegro8.position.x==reyBlanco.position.x && peonNegro8.position.z==reyBlanco.position.z)&&(peonNegro8.position.y==reyBlanco.position.y)){
							escena.remove(reyBlanco);
							alert("Fin del juego, equipo negro ha ganado");
						}
						if((peonNegro8.position.x==reinaBlanca.position.x && peonNegro8.position.z==reinaBlanca.position.z)&&(peonNegro8.position.y==reinaBlanca.position.y)){
							escena.remove(reinaBlanca);
						}
						if((peonNegro8.position.x==caballoBlanco1.position.x && peonNegro8.position.z==caballoBlanco1.position.z)&&(peonNegro8.position.y==caballoBlanco1.position.y)){
							escena.remove(caballoBlanco1);
						}
						if((peonNegro8.position.x==caballoBlanco2.position.x && peonNegro8.position.z==caballoBlanco2.position.z)&&(peonNegro8.position.y==caballoBlanco2.position.y)){
							escena.remove(caballoBlanco2);
						}
						if((peonNegro8.position.x==alfilBlanco1.position.x && peonNegro8.position.z==alfilBlanco1.position.z)&&(peonNegro8.position.y==alfilBlanco1.position.y)){
							escena.remove(alfilBlanco1);
						}
						if((peonNegro8.position.x==alfilBlanco2.position.x && peonNegro8.position.z==alfilBlanco2.position.z)&&(peonNegro8.position.y==alfilBlanco2.position.y)){
							escena.remove(alfilBlanco2);
						}
						if((peonNegro8.position.x==torreBlanca1.position.x && peonNegro8.position.z==torreBlanca1.position.z)&&(peonNegro8.position.y==torreBlanca1.position.y)){
							escena.remove(torreBlanca1);
						}
						if((peonNegro8.position.x==torreBlanca2.position.x && peonNegro8.position.z==torreBlanca2.position.z)&&(peonNegro8.position.y==torreBlanca2.position.y)){
							escena.remove(torreBlanca2);
						}
						if((peonNegro8.position.x==peonBlanco1.position.x && peonNegro8.position.z==peonBlanco1.position.z)&&(peonNegro8.position.y==peonBlanco1.position.y)){
							escena.remove(peonBlanco1);
						}
						if((peonNegro8.position.x==peonBlanco2.position.x && peonNegro8.position.z==peonBlanco2.position.z)&&(peonNegro8.position.y==peonBlanco2.position.y)){
							escena.remove(peonBlanco2);
						}
						if((peonNegro8.position.x==peonBlanco3.position.x && peonNegro8.position.z==peonBlanco3.position.z)&&(peonNegro8.position.y==peonBlanco3.position.y)){
							escena.remove(peonBlanco3);
						}
						if((peonNegro8.position.x==peonBlanco4.position.x && peonNegro8.position.z==peonBlanco4.position.z)&&(peonNegro8.position.y==peonBlanco4.position.y)){
							escena.remove(peonBlanco4);
						}
						if((peonNegro8.position.x==peonBlanco5.position.x && peonNegro8.position.z==peonBlanco5.position.z)&&(peonNegro8.position.y==peonBlanco5.position.y)){
							escena.remove(peonBlanco5);
						}
						if((peonNegro8.position.x==peonBlanco6.position.x && peonNegro8.position.z==peonBlanco6.position.z)&&(peonNegro8.position.y==peonBlanco6.position.y)){
							escena.remove(peonBlanco6);
						}
						if((peonNegro8.position.x==peonBlanco7.position.x && peonNegro8.position.z==peonBlanco7.position.z)&&(peonNegro8.position.y==peonBlanco7.position.y)){
							escena.remove(peonBlanco7);
						}
						if((peonNegro8.position.x==peonBlanco8.position.x && peonNegro8.position.z==peonBlanco8.position.z)&&(peonNegro8.position.y==peonBlanco8.position.y)){
							escena.remove(peonBlanco8);
						}
						
						//////////////////////////////  Revisar si existen piezas amigas y manda alerta ////////////////////////
						if (((((((((((((((peonNegro8.position.x==caballoNegro1.position.x && peonNegro8.position.z==caballoNegro1.position.z)||
						(peonNegro8.position.x==peonNegro1.position.x && peonNegro8.position.z==peonNegro1.position.z))||
						(peonNegro8.position.x==peonNegro2.position.x && peonNegro8.position.z==peonNegro2.position.z))||
						(peonNegro8.position.x==peonNegro3.position.x && peonNegro8.position.z==peonNegro3.position.z))||
						(peonNegro8.position.x==peonNegro4.position.x && peonNegro8.position.z==peonNegro4.position.z))||
						(peonNegro8.position.x==peonNegro5.position.x && peonNegro8.position.z==peonNegro5.position.z))||
						(peonNegro8.position.x==peonNegro6.position.x && peonNegro8.position.z==peonNegro6.position.z))||
						(peonNegro8.position.x==peonNegro7.position.x && peonNegro8.position.z==peonNegro7.position.z))||
						(peonNegro8.position.x==torreNegra1.position.x && peonNegro8.position.z==torreNegra1.position.z))||
						(peonNegro8.position.x==torreNegra2.position.x && peonNegro8.position.z==torreNegra2.position.z))||
						(peonNegro8.position.x==alfilNegro1.position.x && peonNegro8.position.z==alfilNegro1.position.z))||
						(peonNegro8.position.x==alfilNegro2.position.x && peonNegro8.position.z==alfilNegro2.position.z))||
						(peonNegro8.position.x==caballoNegro2.position.x && peonNegro8.position.z==caballoNegro2.position.z))||
						(peonNegro8.position.x==reinaNegra.position.x && peonNegro8.position.z==reinaNegra.position.z))||
						(peonNegro8.position.x==reyNegro.position.x && peonNegro8.position.z==reyNegro.position.z)){
							alert("Movimiento inválido");
							peonNegro8.position.x=objetivo.position.x;peonNegro8.position.z=objetivo.position.z;
						}
					} //Termino Prototype act
				}//Termino if ficha y referencia
				
				if (alfilBlanco1.position.x===objetivo.position.x && alfilBlanco1.position.z===objetivo.position.z){
					AlfilBlanco.prototype.sense = function(environment){
						this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
						var obstaculo = this.sensor.intersectObjects(objetivo,true);
						if(obstaculo.length >0){
							this.colision = 1;
							this.step=0;
						}
						else{
							this.colision = 0;
							this.step=0.25;
						}
					} //Termino Prototype sense
					AlfilBlanco.prototype.act = function(environment){
						if (this.colision!=1){ //Si no está chocando
							if(alfilBlanco1.position.x<=objetivo.position.x) //Checa el sentido del avance de la pieza según la referencia en x
							alfilBlanco1.position.x += this.step;
							else
							alfilBlanco1.position.x -= this.step;
						}
						if (this.colision!=1){ //Si no está chocando
							if(alfilBlanco1.position.z<=objetivo.position.z) //Checa el sentido del avance de la pieza según la referencia en z
							alfilBlanco1.position.z += this.step;
							else
							alfilBlanco1.position.z -= this.step;
						}
						//////////////////////////////  Revisar si existen piezas enemigas y las destruye  //////////////////////
						if((alfilBlanco1.position.x==reyNegro.position.x && alfilBlanco1.position.z==reyNegro.position.z)&&(alfilBlanco1.position.y==reyNegro.position.y)){
							escena.remove(reyNegro);
							alert("Fin del juego, equipo blanco ha ganado");
						}
						if((alfilBlanco1.position.x==reinaNegra.position.x && alfilBlanco1.position.z==reinaNegra.position.z)&&(alfilBlanco1.position.y==reinaNegra.position.y)){
							escena.remove(reinaNegra);
						}
						if((alfilBlanco1.position.x==caballoNegro1.position.x && alfilBlanco1.position.z==caballoNegro1.position.z)&&(alfilBlanco1.position.y==caballoNegro1.position.y)){
							escena.remove(caballoNegro1);
						}
						if((alfilBlanco1.position.x==caballoNegro2.position.x && alfilBlanco1.position.z==caballoNegro2.position.z)&&(alfilBlanco1.position.y==caballoNegro2.position.y)){
							escena.remove(caballoNegro2);
						}
						if((alfilBlanco1.position.x==alfilNegro1.position.x && alfilBlanco1.position.z==alfilNegro1.position.z)&&(alfilBlanco1.position.y==alfilNegro1.position.y)){
							escena.remove(alfilNegro1);
						}
						if((alfilBlanco1.position.x==alfilNegro2.position.x && alfilBlanco1.position.z==alfilNegro2.position.z)&&(alfilBlanco1.position.y==alfilNegro2.position.y)){
							escena.remove(alfilNegro2);
						}
						if((alfilBlanco1.position.x==torreNegra1.position.x && alfilBlanco1.position.z==torreNegra1.position.z)&&(alfilBlanco1.position.y==torreNegra1.position.y)){
							escena.remove(torreNegra1);
						}
						if((alfilBlanco1.position.x==torreNegra2.position.x && alfilBlanco1.position.z==torreNegra2.position.z)&&(alfilBlanco1.position.y==torreNegra2.position.y)){
							escena.remove(torreNegra2);
						}
						if((alfilBlanco1.position.x==peonNegro1.position.x && alfilBlanco1.position.z==peonNegro1.position.z)&&(alfilBlanco1.position.y==peonNegro1.position.y)){
							escena.remove(peonNegro1);
						}
						if((alfilBlanco1.position.x==peonNegro2.position.x && alfilBlanco1.position.z==peonNegro2.position.z)&&(alfilBlanco1.position.y==peonNegro2.position.y)){
							escena.remove(peonNegro2);
						}
						if((alfilBlanco1.position.x==peonNegro3.position.x && alfilBlanco1.position.z==peonNegro3.position.z)&&(alfilBlanco1.position.y==peonNegro3.position.y)){
							escena.remove(peonNegro3);
						}
						if((alfilBlanco1.position.x==peonNegro4.position.x && alfilBlanco1.position.z==peonNegro4.position.z)&&(alfilBlanco1.position.y==peonNegro4.position.y)){
							escena.remove(peonNegro4);
						}
						if((alfilBlanco1.position.x==peonNegro5.position.x && alfilBlanco1.position.z==peonNegro5.position.z)&&(alfilBlanco1.position.y==peonNegro5.position.y)){
							escena.remove(peonNegro5);
						}
						if((alfilBlanco1.position.x==peonNegro6.position.x && alfilBlanco1.position.z==peonNegro6.position.z)&&(alfilBlanco1.position.y==peonNegro6.position.y)){
							escena.remove(peonNegro6);
						}
						if((alfilBlanco1.position.x==peonNegro7.position.x && alfilBlanco1.position.z==peonNegro7.position.z)&&(alfilBlanco1.position.y==peonNegro7.position.y)){
							escena.remove(peonNegro7);
						}
						if((alfilBlanco1.position.x==peonNegro8.position.x && alfilBlanco1.position.z==peonNegro8.position.z)&&(alfilBlanco1.position.y==peonNegro8.position.y)){
							escena.remove(peonNegro8);
						}
						
						//////////////////////////////  Revisar si existen piezas amigas y manda alerta ////////////////////////
						if (((((((((((((((alfilBlanco1.position.x==peonBlanco1.position.x && alfilBlanco1.position.z==peonBlanco1.position.z)||
						(alfilBlanco1.position.x==peonBlanco2.position.x && alfilBlanco1.position.z==peonBlanco2.position.z))||
						(alfilBlanco1.position.x==peonBlanco3.position.x && alfilBlanco1.position.z==peonBlanco3.position.z))||
						(alfilBlanco1.position.x==peonBlanco4.position.x && alfilBlanco1.position.z==peonBlanco4.position.z))||
						(alfilBlanco1.position.x==peonBlanco5.position.x && alfilBlanco1.position.z==peonBlanco5.position.z))||
						(alfilBlanco1.position.x==peonBlanco6.position.x && alfilBlanco1.position.z==peonBlanco6.position.z))||
						(alfilBlanco1.position.x==peonBlanco7.position.x && alfilBlanco1.position.z==peonBlanco7.position.z))||
						(alfilBlanco1.position.x==peonBlanco8.position.x && alfilBlanco1.position.z==peonBlanco8.position.z))||
						(alfilBlanco1.position.x==torreBlanca1.position.x && alfilBlanco1.position.z==torreBlanca1.position.z))||
						(alfilBlanco1.position.x==torreBlanca2.position.x && alfilBlanco1.position.z==torreBlanca2.position.z))||
						(alfilBlanco1.position.x==alfilBlanco2.position.x && alfilBlanco1.position.z==alfilBlanco2.position.z))||
						(alfilBlanco1.position.x==caballoBlanco1.position.x && alfilBlanco1.position.z==caballoBlanco1.position.z))||
						(alfilBlanco1.position.x==caballoBlanco2.position.x && alfilBlanco1.position.z==caballoBlanco2.position.z))||
						(alfilBlanco1.position.x==reinaBlanca.position.x && alfilBlanco1.position.z==reinaBlanca.position.z))||
						(alfilBlanco1.position.x==reyBlanco.position.x && alfilBlanco1.position.z==reyBlanco.position.z)){
							alert("Movimiento inválido");
							alfilBlanco1.position.x=objetivo.position.x;alfilBlanco1.position.z=objetivo.position.z;
						}
					} //Termino Prototype act
				}//Termino if ficha y referencia
				
				if (alfilBlanco2.position.x===objetivo.position.x && alfilBlanco2.position.z===objetivo.position.z){
					AlfilBlanco.prototype.sense = function(environment){
						this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
						var obstaculo = this.sensor.intersectObjects(objetivo,true);
						if(obstaculo.length >0){
							this.colision = 1;
							this.step=0;
						}
						else{
							this.colision = 0;
							this.step=0.25;
						}
					} //Termino Prototype sense
					
					AlfilBlanco.prototype.act = function(environment){
						if (this.colision!=1){ //Si no está chocando
							if(alfilBlanco2.position.x<=objetivo.position.x) //Checa el sentido del avance de la pieza según la referencia en x
							alfilBlanco2.position.x += this.step;
							else
							alfilBlanco2.position.x -= this.step;
						}
						if (this.colision!=1){ //Si no está chocando
							if(alfilBlanco2.position.z<=objetivo.position.z) //Checa el sentido del avance de la pieza según la referencia en z
							alfilBlanco2.position.z += this.step;
							else
							alfilBlanco2.position.z -= this.step;
						}
						//////////////////////////////  Revisar si existen piezas enemigas y las destruye  //////////////////////
						if((alfilBlanco2.position.x==reyNegro.position.x && alfilBlanco2.position.z==reyNegro.position.z)&&(alfilBlanco2.position.y==reyNegro.position.y)){
							escena.remove(reyNegro);
							alert("Fin del juego, equipo blanco ha ganado");
						}
						if((alfilBlanco2.position.x==reinaNegra.position.x && alfilBlanco2.position.z==reinaNegra.position.z)&&(alfilBlanco2.position.y==reinaNegra.position.y)){
							escena.remove(reinaNegra);
						}
						if((alfilBlanco2.position.x==caballoNegro1.position.x && alfilBlanco2.position.z==caballoNegro1.position.z)&&(alfilBlanco2.position.y==caballoNegro1.position.y)){
							escena.remove(caballoNegro1);
						}
						if((alfilBlanco2.position.x==caballoNegro2.position.x && alfilBlanco2.position.z==caballoNegro2.position.z)&&(alfilBlanco2.position.y==caballoNegro2.position.y)){
							escena.remove(caballoNegro2);
						}
						if((alfilBlanco2.position.x==alfilNegro1.position.x && alfilBlanco2.position.z==alfilNegro1.position.z)&&(alfilBlanco2.position.y==alfilNegro1.position.y)){
							escena.remove(alfilNegro1);
						}
						if((alfilBlanco2.position.x==alfilNegro2.position.x && alfilBlanco2.position.z==alfilNegro2.position.z)&&(alfilBlanco2.position.y==alfilNegro2.position.y)){
							escena.remove(alfilNegro2);
						}
						if((alfilBlanco2.position.x==torreNegra1.position.x && alfilBlanco2.position.z==torreNegra1.position.z)&&(alfilBlanco2.position.y==torreNegra1.position.y)){
							escena.remove(torreNegra1);
						}
						if((alfilBlanco2.position.x==torreNegra2.position.x && alfilBlanco2.position.z==torreNegra2.position.z)&&(alfilBlanco2.position.y==torreNegra2.position.y)){
							escena.remove(torreNegra2);
						}
						if((alfilBlanco2.position.x==peonNegro1.position.x && alfilBlanco2.position.z==peonNegro1.position.z)&&(alfilBlanco2.position.y==peonNegro1.position.y)){
							escena.remove(peonNegro1);
						}
						if((alfilBlanco2.position.x==peonNegro2.position.x && alfilBlanco2.position.z==peonNegro2.position.z)&&(alfilBlanco2.position.y==peonNegro2.position.y)){
							escena.remove(peonNegro2);
						}
						if((alfilBlanco2.position.x==peonNegro3.position.x && alfilBlanco2.position.z==peonNegro3.position.z)&&(alfilBlanco2.position.y==peonNegro3.position.y)){
							escena.remove(peonNegro3);
						}
						if((alfilBlanco2.position.x==peonNegro4.position.x && alfilBlanco2.position.z==peonNegro4.position.z)&&(alfilBlanco2.position.y==peonNegro4.position.y)){
							escena.remove(peonNegro4);
						}
						if((alfilBlanco2.position.x==peonNegro5.position.x && alfilBlanco2.position.z==peonNegro5.position.z)&&(alfilBlanco2.position.y==peonNegro5.position.y)){
							escena.remove(peonNegro5);
						}
						if((alfilBlanco2.position.x==peonNegro6.position.x && alfilBlanco2.position.z==peonNegro6.position.z)&&(alfilBlanco2.position.y==peonNegro6.position.y)){
							escena.remove(peonNegro6);
						}
						if((alfilBlanco2.position.x==peonNegro7.position.x && alfilBlanco2.position.z==peonNegro7.position.z)&&(alfilBlanco2.position.y==peonNegro7.position.y)){
							escena.remove(peonNegro7);
						}
						if((alfilBlanco2.position.x==peonNegro8.position.x && alfilBlanco2.position.z==peonNegro8.position.z)&&(alfilBlanco2.position.y==peonNegro8.position.y)){
							escena.remove(peonNegro8);
						}
						
						//////////////////////////////  Revisar si existen piezas amigas y manda alerta ////////////////////////
						if (((((((((((((((alfilBlanco2.position.x==peonBlanco1.position.x && alfilBlanco2.position.z==peonBlanco1.position.z)||
						(alfilBlanco2.position.x==peonBlanco2.position.x && alfilBlanco2.position.z==peonBlanco2.position.z))||
						(alfilBlanco2.position.x==peonBlanco3.position.x && alfilBlanco2.position.z==peonBlanco3.position.z))||
						(alfilBlanco2.position.x==peonBlanco4.position.x && alfilBlanco2.position.z==peonBlanco4.position.z))||
						(alfilBlanco2.position.x==peonBlanco5.position.x && alfilBlanco2.position.z==peonBlanco5.position.z))||
						(alfilBlanco2.position.x==peonBlanco6.position.x && alfilBlanco2.position.z==peonBlanco6.position.z))||
						(alfilBlanco2.position.x==peonBlanco7.position.x && alfilBlanco2.position.z==peonBlanco7.position.z))||
						(alfilBlanco2.position.x==peonBlanco8.position.x && alfilBlanco2.position.z==peonBlanco8.position.z))||
						(alfilBlanco2.position.x==torreBlanca1.position.x && alfilBlanco2.position.z==torreBlanca1.position.z))||
						(alfilBlanco2.position.x==torreBlanca2.position.x && alfilBlanco2.position.z==torreBlanca2.position.z))||
						(alfilBlanco2.position.x==alfilBlanco1.position.x && alfilBlanco2.position.z==alfilBlanco1.position.z))||
						(alfilBlanco2.position.x==caballoBlanco1.position.x && alfilBlanco2.position.z==caballoBlanco1.position.z))||
						(alfilBlanco2.position.x==caballoBlanco2.position.x && alfilBlanco2.position.z==caballoBlanco2.position.z))||
						(alfilBlanco2.position.x==reinaBlanca.position.x && alfilBlanco2.position.z==reinaBlanca.position.z))||
						(alfilBlanco2.position.x==reyBlanco.position.x && alfilBlanco2.position.z==reyBlanco.position.z)){
							alert("Movimiento inválido");
							alfilBlanco2.position.x=objetivo.position.x;alfilBlanco2.position.z=objetivo.position.z;
						}
					} //Termino Prototype act
				}//Termino if ficha y referencia

				if (alfilNegro1.position.x===objetivo.position.x && alfilNegro1.position.z===objetivo.position.z){
					AlfilBlanco.prototype.sense = function(environment){
						this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
						var obstaculo = this.sensor.intersectObjects(objetivo,true);
						if(obstaculo.length >0){
							this.colision = 1;
							this.step=0;
						}
						else{
							this.colision = 0;
							this.step=0.25;
						}
					} //Termino Prototype sense
					AlfilBlanco.prototype.act = function(environment){
						if (this.colision!=1){ //Si no está chocando
							if(alfilNegro1.position.x<=objetivo.position.x) //Checa el sentido del avance de la pieza según la referencia en x
							alfilNegro1.position.x += this.step;
							else
							alfilNegro1.position.x -= this.step;
						}
						if (this.colision!=1){ //Si no está chocando
							if(alfilNegro1.position.z<=objetivo.position.z) //Checa el sentido del avance de la pieza según la referencia en z
							alfilNegro1.position.z += this.step;
							else
							alfilNegro1.position.z -= this.step;
						}
						
						//////////////////////////////  Revisar si existen piezas enemigas y las destruye  //////////////////////
						if((alfilNegro1.position.x==reyBlanco.position.x && alfilNegro1.position.z==reyBlanco.position.z)&&(alfilNegro1.position.y==reyBlanco.position.y)){
							escena.remove(reyBlanco);
							alert("Fin del juego, equipo negro ha ganado");
						}
						if((alfilNegro1.position.x==reinaBlanca.position.x && alfilNegro1.position.z==reinaBlanca.position.z)&&(alfilNegro1.position.y==reinaBlanca.position.y)){
							escena.remove(reinaBlanca);
						}
						if((alfilNegro1.position.x==caballoBlanco1.position.x && alfilNegro1.position.z==caballoBlanco1.position.z)&&(alfilNegro1.position.y==caballoBlanco1.position.y)){
							escena.remove(caballoBlanco1);
						}
						if((alfilNegro1.position.x==caballoBlanco2.position.x && alfilNegro1.position.z==caballoBlanco2.position.z)&&(alfilNegro1.position.y==caballoBlanco2.position.y)){
							escena.remove(caballoBlanco2);
						}
						if((alfilNegro1.position.x==alfilBlanco1.position.x && alfilNegro1.position.z==alfilBlanco1.position.z)&&(alfilNegro1.position.y==alfilBlanco1.position.y)){
							escena.remove(alfilNegro1);
						}
						if((alfilNegro1.position.x==alfilBlanco2.position.x && alfilNegro1.position.z==alfilBlanco2.position.z)&&(alfilNegro1.position.y==alfilBlanco2.position.y)){
							escena.remove(alfilBlanco2);
						}
						if((alfilNegro1.position.x==torreBlanca1.position.x && alfilNegro1.position.z==torreBlanca1.position.z)&&(alfilNegro1.position.y==torreBlanca1.position.y)){
							escena.remove(torreBlanca1);
						}
						if((alfilNegro1.position.x==torreBlanca2.position.x && alfilNegro1.position.z==torreBlanca2.position.z)&&(alfilNegro1.position.y==torreBlanca2.position.y)){
							escena.remove(torreBlanca2);
						}
						if((alfilNegro1.position.x==peonBlanco1.position.x && alfilNegro1.position.z==peonBlanco1.position.z)&&(alfilNegro1.position.y==peonBlanco1.position.y)){
							escena.remove(peonBlanco1);
						}
						if((alfilNegro1.position.x==peonBlanco2.position.x && alfilNegro1.position.z==peonBlanco2.position.z)&&(alfilNegro1.position.y==peonBlanco2.position.y)){
							escena.remove(peonBlanco2);
						}
						if((alfilNegro1.position.x==peonBlanco3.position.x && alfilNegro1.position.z==peonBlanco3.position.z)&&(alfilNegro1.position.y==peonBlanco3.position.y)){
							escena.remove(peonBlanco3);
						}
						if((alfilNegro1.position.x==peonBlanco4.position.x && alfilNegro1.position.z==peonBlanco4.position.z)&&(alfilNegro1.position.y==peonBlanco4.position.y)){
							escena.remove(peonBlanco4);
						}
						if((alfilNegro1.position.x==peonBlanco5.position.x && alfilNegro1.position.z==peonBlanco5.position.z)&&(alfilNegro1.position.y==peonBlanco5.position.y)){
							escena.remove(peonBlanco5);
						}
						if((alfilNegro1.position.x==peonBlanco6.position.x && alfilNegro1.position.z==peonBlanco6.position.z)&&(alfilNegro1.position.y==peonBlanco6.position.y)){
							escena.remove(peonBlanco6);
						}
						if((alfilNegro1.position.x==peonBlanco7.position.x && alfilNegro1.position.z==peonBlanco7.position.z)&&(alfilNegro1.position.y==peonBlanco7.position.y)){
							escena.remove(peonBlanco7);
						}
						if((alfilNegro1.position.x==peonBlanco8.position.x && alfilNegro1.position.z==peonBlanco8.position.z)&&(alfilNegro1.position.y==peonBlanco8.position.y)){
							escena.remove(peonBlanco8);
						}
						
						//////////////////////////////  Revisar si existen piezas amigas y manda alerta ////////////////////////
						if (((((((((((((((alfilNegro1.position.x==peonNegro1.position.x && alfilNegro1.position.z==peonNegro1.position.z)||
						(alfilNegro1.position.x==peonNegro2.position.x && alfilNegro1.position.z==peonNegro2.position.z))||
						(alfilNegro1.position.x==peonNegro3.position.x && alfilNegro1.position.z==peonNegro3.position.z))||
						(alfilNegro1.position.x==peonNegro4.position.x && alfilNegro1.position.z==peonNegro4.position.z))||
						(alfilNegro1.position.x==peonNegro5.position.x && alfilNegro1.position.z==peonNegro5.position.z))||
						(alfilNegro1.position.x==peonNegro6.position.x && alfilNegro1.position.z==peonNegro6.position.z))||
						(alfilNegro1.position.x==peonNegro7.position.x && alfilNegro1.position.z==peonNegro7.position.z))||
						(alfilNegro1.position.x==peonNegro8.position.x && alfilNegro1.position.z==peonNegro8.position.z))||
						(alfilNegro1.position.x==torreNegra1.position.x && alfilNegro1.position.z==torreNegra1.position.z))||
						(alfilNegro1.position.x==torreNegra2.position.x && alfilNegro1.position.z==torreNegra2.position.z))||
						(alfilNegro1.position.x==alfilNegro2.position.x && alfilNegro1.position.z==alfilNegro2.position.z))||
						(alfilNegro1.position.x==caballoNegro1.position.x && alfilNegro1.position.z==caballoNegro1.position.z))||
						(alfilNegro1.position.x==caballoNegro2.position.x && alfilNegro1.position.z==caballoNegro2.position.z))||
						(alfilNegro1.position.x==reinaNegra.position.x && alfilNegro1.position.z==reinaNegra.position.z))||
						(alfilNegro1.position.x==reyNegro.position.x && alfilNegro1.position.z==reyNegro.position.z)){
							alert("Movimiento inválido");
							alfilNegro1.position.x=objetivo.position.x;alfilNegro1.position.z=objetivo.position.z;
						}
					} //Termino Prototype act
				}//Termino if ficha y referencia
				
				if (alfilNegro2.position.x===objetivo.position.x && alfilNegro2.position.z===objetivo.position.z){
					AlfilBlanco.prototype.sense = function(environment){
						this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
						var obstaculo = this.sensor.intersectObjects(objetivo,true);
						if(obstaculo.length >0){
							this.colision = 1;
							this.step=0;
						}
						else{
							this.colision = 0;
							this.step=0.25;
						}
					} //Termino Prototype sense
					AlfilBlanco.prototype.act = function(environment){
						if (this.colision!=1){ //Si no está chocando
							if(alfilNegro2.position.x<=objetivo.position.x) //Checa el sentido del avance de la pieza según la referencia en x
							alfilNegro2.position.x += this.step;
							else
							alfilNegro2.position.x -= this.step;
						}
						if (this.colision!=1){ //Si no está chocando
							if(alfilNegro2.position.z<=objetivo.position.z) //Checa el sentido del avance de la pieza según la referencia en z
							alfilNegro2.position.z += this.step;
							else
							alfilNegro2.position.z -= this.step;
						}
						
						//////////////////////////////  Revisar si existen piezas enemigas y las destruye  //////////////////////
						if((alfilNegro2.position.x==reyBlanco.position.x && alfilNegro2.position.z==reyBlanco.position.z)&&(alfilNegro2.position.y==reyBlanco.position.y)){
							escena.remove(reyBlanco);
							alert("Fin del juego, equipo negro ha ganado");
						}
						if((alfilNegro2.position.x==reinaBlanca.position.x && alfilNegro2.position.z==reinaBlanca.position.z)&&(alfilNegro2.position.y==reinaBlanca.position.y)){
							escena.remove(reinaBlanca);
						}
						if((alfilNegro2.position.x==caballoBlanco1.position.x && alfilNegro2.position.z==caballoBlanco1.position.z)&&(alfilNegro2.position.y==caballoBlanco1.position.y)){
							escena.remove(caballoBlanco1);
						}
						if((alfilNegro2.position.x==caballoBlanco2.position.x && alfilNegro2.position.z==caballoBlanco2.position.z)&&(alfilNegro2.position.y==caballoBlanco2.position.y)){
							escena.remove(caballoBlanco2);
						}
						if((alfilNegro2.position.x==alfilBlanco1.position.x && alfilNegro2.position.z==alfilBlanco1.position.z)&&(alfilNegro2.position.y==alfilBlanco1.position.y)){
							escena.remove(alfilNegro2);
						}
						if((alfilNegro2.position.x==alfilBlanco2.position.x && alfilNegro2.position.z==alfilBlanco2.position.z)&&(alfilNegro2.position.y==alfilBlanco2.position.y)){
							escena.remove(alfilBlanco2);
						}
						if((alfilNegro2.position.x==torreBlanca1.position.x && alfilNegro2.position.z==torreBlanca1.position.z)&&(alfilNegro2.position.y==torreBlanca1.position.y)){
							escena.remove(torreBlanca1);
						}
						if((alfilNegro2.position.x==torreBlanca2.position.x && alfilNegro2.position.z==torreBlanca2.position.z)&&(alfilNegro2.position.y==torreBlanca2.position.y)){
							escena.remove(torreBlanca2);
						}
						if((alfilNegro2.position.x==peonBlanco1.position.x && alfilNegro2.position.z==peonBlanco1.position.z)&&(alfilNegro2.position.y==peonBlanco1.position.y)){
							escena.remove(peonBlanco1);
						}
						if((alfilNegro2.position.x==peonBlanco2.position.x && alfilNegro2.position.z==peonBlanco2.position.z)&&(alfilNegro2.position.y==peonBlanco2.position.y)){
							escena.remove(peonBlanco2);
						}
						if((alfilNegro2.position.x==peonBlanco3.position.x && alfilNegro2.position.z==peonBlanco3.position.z)&&(alfilNegro2.position.y==peonBlanco3.position.y)){
							escena.remove(peonBlanco3);
						}
						if((alfilNegro2.position.x==peonBlanco4.position.x && alfilNegro2.position.z==peonBlanco4.position.z)&&(alfilNegro2.position.y==peonBlanco4.position.y)){
							escena.remove(peonBlanco4);
						}
						if((alfilNegro2.position.x==peonBlanco5.position.x && alfilNegro2.position.z==peonBlanco5.position.z)&&(alfilNegro2.position.y==peonBlanco5.position.y)){
							escena.remove(peonBlanco5);
						}
						if((alfilNegro2.position.x==peonBlanco6.position.x && alfilNegro2.position.z==peonBlanco6.position.z)&&(alfilNegro2.position.y==peonBlanco6.position.y)){
							escena.remove(peonBlanco6);
						}
						if((alfilNegro2.position.x==peonBlanco7.position.x && alfilNegro2.position.z==peonBlanco7.position.z)&&(alfilNegro2.position.y==peonBlanco7.position.y)){
							escena.remove(peonBlanco7);
						}
						if((alfilNegro2.position.x==peonBlanco8.position.x && alfilNegro2.position.z==peonBlanco8.position.z)&&(alfilNegro2.position.y==peonBlanco8.position.y)){
							escena.remove(peonBlanco8);
						}
						
						//////////////////////////////  Revisar si existen piezas amigas y manda alerta ////////////////////////
						if (((((((((((((((alfilNegro2.position.x==peonNegro1.position.x && alfilNegro2.position.z==peonNegro1.position.z)||
						(alfilNegro2.position.x==peonNegro2.position.x && alfilNegro2.position.z==peonNegro2.position.z))||
						(alfilNegro2.position.x==peonNegro3.position.x && alfilNegro2.position.z==peonNegro3.position.z))||
						(alfilNegro2.position.x==peonNegro4.position.x && alfilNegro2.position.z==peonNegro4.position.z))||
						(alfilNegro2.position.x==peonNegro5.position.x && alfilNegro2.position.z==peonNegro5.position.z))||
						(alfilNegro2.position.x==peonNegro6.position.x && alfilNegro2.position.z==peonNegro6.position.z))||
						(alfilNegro2.position.x==peonNegro7.position.x && alfilNegro2.position.z==peonNegro7.position.z))||
						(alfilNegro2.position.x==peonNegro8.position.x && alfilNegro2.position.z==peonNegro8.position.z))||
						(alfilNegro2.position.x==torreNegra1.position.x && alfilNegro2.position.z==torreNegra1.position.z))||
						(alfilNegro2.position.x==torreNegra2.position.x && alfilNegro2.position.z==torreNegra2.position.z))||
						(alfilNegro2.position.x==alfilNegro1.position.x && alfilNegro2.position.z==alfilNegro1.position.z))||
						(alfilNegro2.position.x==caballoNegro1.position.x && alfilNegro2.position.z==caballoNegro1.position.z))||
						(alfilNegro2.position.x==caballoNegro2.position.x && alfilNegro2.position.z==caballoNegro2.position.z))||
						(alfilNegro2.position.x==reinaNegra.position.x && alfilNegro2.position.z==reinaNegra.position.z))||
						(alfilNegro2.position.x==reyNegro.position.x && alfilNegro2.position.z==reyNegro.position.z)){
							alert("Movimiento inválido");
							alfilNegro2.position.x=objetivo.position.x;alfilNegro2.position.z=objetivo.position.z;
						}
					} //Termino Prototype act
				}//Termino if ficha y referencia
				
						
				
				if (caballoBlanco1.position.x===objetivo.position.x && caballoBlanco1.position.z===objetivo.position.z){
					CaballoBlanco.prototype.sense = function(environment){
						this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
						var obstaculo = this.sensor.intersectObjects(objetivo,true);
						if(obstaculo.length >0){
							this.colision = 1;
							this.step=0;
						}
						else{
							this.colision = 0;
							this.step=0.25;
						}
					} //Termino Prototype sense
					CaballoBlanco.prototype.act = function(environment){
						if (this.colision!=1){ //Si no está chocando
							if(caballoBlanco1.position.x<=objetivo.position.x) //Checa el sentido del avance de la pieza según la referencia en x
							caballoBlanco1.position.x += this.step;
							else
							caballoBlanco1.position.x -= this.step;
						}
						if (this.colision!=1){ //Si no está chocando
							if(caballoBlanco1.position.z<=objetivo.position.z) //Checa el sentido del avance de la pieza según la referencia en z
							caballoBlanco1.position.z += this.step;
							else
							caballoBlanco1.position.z -= this.step;
						}
						//////////////////////////////  Revisar si existen piezas enemigas y las destruye  //////////////////////
						if((caballoBlanco1.position.x==reyNegro.position.x && caballoBlanco1.position.z==reyNegro.position.z)&&(caballoBlanco1.position.y==reyNegro.position.y)){
							escena.remove(reyNegro);
							alert("Fin del juego, equipo blanco ha ganado");
						}
						if((caballoBlanco1.position.x==reinaNegra.position.x && caballoBlanco1.position.z==reinaNegra.position.z)&&(caballoBlanco1.position.y==reinaNegra.position.y)){
							escena.remove(reinaNegra);
						}
						if((caballoBlanco1.position.x==caballoNegro1.position.x && caballoBlanco1.position.z==caballoNegro1.position.z)&&(caballoBlanco1.position.y==caballoNegro1.position.y)){
							escena.remove(caballoNegro1);
						}
						if((caballoBlanco1.position.x==caballoNegro2.position.x && caballoBlanco1.position.z==caballoNegro2.position.z)&&(caballoBlanco1.position.y==caballoNegro2.position.y)){
							escena.remove(caballoNegro2);
						}
						if((caballoBlanco1.position.x==alfilNegro1.position.x && caballoBlanco1.position.z==alfilNegro1.position.z)&&(caballoBlanco1.position.y==alfilNegro1.position.y)){
							escena.remove(alfilNegro1);
						}
						if((caballoBlanco1.position.x==alfilNegro2.position.x && caballoBlanco1.position.z==alfilNegro2.position.z)&&(caballoBlanco1.position.y==alfilNegro2.position.y)){
							escena.remove(alfilNegro2);
						}
						if((caballoBlanco1.position.x==torreNegra1.position.x && caballoBlanco1.position.z==torreNegra1.position.z)&&(caballoBlanco1.position.y==torreNegra1.position.y)){
							escena.remove(torreNegra1);
						}
						if((caballoBlanco1.position.x==torreNegra2.position.x && caballoBlanco1.position.z==torreNegra2.position.z)&&(caballoBlanco1.position.y==torreNegra2.position.y)){
							escena.remove(torreNegra2);
						}
						if((caballoBlanco1.position.x==peonNegro1.position.x && caballoBlanco1.position.z==peonNegro1.position.z)&&(caballoBlanco1.position.y==peonNegro1.position.y)){
							escena.remove(peonNegro1);
						}
						if((caballoBlanco1.position.x==peonNegro2.position.x && caballoBlanco1.position.z==peonNegro2.position.z)&&(caballoBlanco1.position.y==peonNegro2.position.y)){
							escena.remove(peonNegro2);
						}
						if((caballoBlanco1.position.x==peonNegro3.position.x && caballoBlanco1.position.z==peonNegro3.position.z)&&(caballoBlanco1.position.y==peonNegro3.position.y)){
							escena.remove(peonNegro3);
						}
						if((caballoBlanco1.position.x==peonNegro4.position.x && caballoBlanco1.position.z==peonNegro4.position.z)&&(caballoBlanco1.position.y==peonNegro4.position.y)){
							escena.remove(peonNegro4);
						}
						if((caballoBlanco1.position.x==peonNegro5.position.x && caballoBlanco1.position.z==peonNegro5.position.z)&&(caballoBlanco1.position.y==peonNegro5.position.y)){
							escena.remove(peonNegro5);
						}
						if((caballoBlanco1.position.x==peonNegro6.position.x && caballoBlanco1.position.z==peonNegro6.position.z)&&(caballoBlanco1.position.y==peonNegro6.position.y)){
							escena.remove(peonNegro6);
						}
						if((caballoBlanco1.position.x==peonNegro7.position.x && caballoBlanco1.position.z==peonNegro7.position.z)&&(caballoBlanco1.position.y==peonNegro7.position.y)){
							escena.remove(peonNegro7);
						}
						if((caballoBlanco1.position.x==peonNegro8.position.x && caballoBlanco1.position.z==peonNegro8.position.z)&&(caballoBlanco1.position.y==peonNegro8.position.y)){
							escena.remove(peonNegro8);
						}
						
						//////////////////////////////  Revisar si existen piezas amigas y manda alerta ////////////////////////
						if (((((((((((((((caballoBlanco1.position.x==peonBlanco1.position.x && caballoBlanco1.position.z==peonBlanco1.position.z)||
						(caballoBlanco1.position.x==peonBlanco2.position.x && caballoBlanco1.position.z==peonBlanco2.position.z))||
						(caballoBlanco1.position.x==peonBlanco3.position.x && caballoBlanco1.position.z==peonBlanco3.position.z))||
						(caballoBlanco1.position.x==peonBlanco4.position.x && caballoBlanco1.position.z==peonBlanco4.position.z))||
						(caballoBlanco1.position.x==peonBlanco5.position.x && caballoBlanco1.position.z==peonBlanco5.position.z))||
						(caballoBlanco1.position.x==peonBlanco6.position.x && caballoBlanco1.position.z==peonBlanco6.position.z))||
						(caballoBlanco1.position.x==peonBlanco7.position.x && caballoBlanco1.position.z==peonBlanco7.position.z))||
						(caballoBlanco1.position.x==peonBlanco8.position.x && caballoBlanco1.position.z==peonBlanco8.position.z))||
						(caballoBlanco1.position.x==torreBlanca1.position.x && caballoBlanco1.position.z==torreBlanca1.position.z))||
						(caballoBlanco1.position.x==torreBlanca2.position.x && caballoBlanco1.position.z==torreBlanca2.position.z))||
						(caballoBlanco1.position.x==alfilBlanco1.position.x && caballoBlanco1.position.z==alfilBlanco1.position.z))||
						(caballoBlanco1.position.x==alfilBlanco2.position.x && caballoBlanco1.position.z==alfilBlanco2.position.z))||
						(caballoBlanco1.position.x==caballoBlanco2.position.x && caballoBlanco1.position.z==caballoBlanco2.position.z))||
						(caballoBlanco1.position.x==reinaBlanca.position.x && caballoBlanco1.position.z==reinaBlanca.position.z))||
						(caballoBlanco1.position.x==reyBlanco.position.x && caballoBlanco1.position.z==reyBlanco.position.z)){
							alert("Movimiento inválido");
							caballoBlanco1.position.x=objetivo.position.x;caballoBlanco1.position.z=objetivo.position.z;
						}
					} //Termino Prototype act
				}//Termino if ficha y referencia
				
				if (caballoNegro1.position.x===objetivo.position.x && caballoNegro1.position.z===objetivo.position.z){
					CaballoNegro.prototype.sense = function(environment){
						this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
						var obstaculo = this.sensor.intersectObjects(objetivo,true);
						if(obstaculo.length >0){
							this.colision = 1;
							this.step=0;
						}
						else{
							this.colision = 0;
							this.step=0.25;
						}
					} //Termino Prototype sense
					CaballoNegro.prototype.act = function(environment){
						if (this.colision!=1){ //Si no está chocando
							if(caballoNegro1.position.x<=objetivo.position.x) //Checa el sentido del avance de la pieza según la referencia en x
							caballoNegro1.position.x += this.step;
							else
							caballoNegro1.position.x -= this.step;
						}
						if (this.colision!=1){ //Si no está chocando
							if(caballoNegro1.position.z<=objetivo.position.z) //Checa el sentido del avance de la pieza según la referencia en z
							caballoNegro1.position.z += this.step;
							else
							caballoNegro1.position.z -= this.step;
						}

						//////////////////////////////  Revisar si existen piezas enemigas y las destruye  //////////////////////
						if((caballoNegro1.position.x==reyBlanco.position.x && caballoNegro1.position.z==reyBlanco.position.z)&&(caballoNegro1.position.y==reyBlanco.position.y)){
							escena.remove(reyBlanco);
							alert("Fin del juego, equipo negro ha ganado");
						}
						if((caballoNegro1.position.x==reinaBlanca.position.x && caballoNegro1.position.z==reinaBlanca.position.z)&&(caballoNegro1.position.y==reinaBlanca.position.y)){
							escena.remove(reinaBlanca);
						}
						if((caballoNegro1.position.x==caballoBlanco1.position.x && caballoNegro1.position.z==caballoBlanco1.position.z)&&(caballoNegro1.position.y==caballoBlanco1.position.y)){
							escena.remove(caballoBlanco1);
						}
						if((caballoNegro1.position.x==caballoBlanco2.position.x && caballoNegro1.position.z==caballoBlanco2.position.z)&&(caballoNegro1.position.y==caballoBlanco2.position.y)){
							escena.remove(caballoBlanco2);
						}
						if((caballoNegro1.position.x==alfilBlanco1.position.x && caballoNegro1.position.z==alfilBlanco1.position.z)&&(caballoNegro1.position.y==alfilBlanco1.position.y)){
							escena.remove(alfilBlanco1);
						}
						if((caballoNegro1.position.x==alfilBlanco2.position.x && caballoNegro1.position.z==alfilBlanco2.position.z)&&(caballoNegro1.position.y==alfilBlanco2.position.y)){
							escena.remove(alfilBlanco2);
						}
						if((caballoNegro1.position.x==torreBlanca1.position.x && caballoNegro1.position.z==torreBlanca1.position.z)&&(caballoNegro1.position.y==torreBlanca1.position.y)){
							escena.remove(torreBlanca1);
						}
						if((caballoNegro1.position.x==torreBlanca2.position.x && caballoNegro1.position.z==torreBlanca2.position.z)&&(caballoNegro1.position.y==torreBlanca2.position.y)){
							escena.remove(torreBlanca2);
						}
						if((caballoNegro1.position.x==peonBlanco1.position.x && caballoNegro1.position.z==peonBlanco1.position.z)&&(caballoNegro1.position.y==peonBlanco1.position.y)){
							escena.remove(peonBlanco1);
						}
						if((caballoNegro1.position.x==peonBlanco2.position.x && caballoNegro1.position.z==peonBlanco2.position.z)&&(caballoNegro1.position.y==peonBlanco2.position.y)){
							escena.remove(peonBlanco2);
						}
						if((caballoNegro1.position.x==peonBlanco3.position.x && caballoNegro1.position.z==peonBlanco3.position.z)&&(caballoNegro1.position.y==peonBlanco3.position.y)){
							escena.remove(peonBlanco3);
						}
						if((caballoNegro1.position.x==peonBlanco4.position.x && caballoNegro1.position.z==peonBlanco4.position.z)&&(caballoNegro1.position.y==peonBlanco4.position.y)){
							escena.remove(peonBlanco4);
						}
						if((caballoNegro1.position.x==peonBlanco5.position.x && caballoNegro1.position.z==peonBlanco5.position.z)&&(caballoNegro1.position.y==peonBlanco5.position.y)){
							escena.remove(peonBlanco5);
						}
						if((caballoNegro1.position.x==peonBlanco6.position.x && caballoNegro1.position.z==peonBlanco6.position.z)&&(caballoNegro1.position.y==peonBlanco6.position.y)){
							escena.remove(peonBlanco6);
						}
						if((caballoNegro1.position.x==peonBlanco7.position.x && caballoNegro1.position.z==peonBlanco7.position.z)&&(caballoNegro1.position.y==peonBlanco7.position.y)){
							escena.remove(peonBlanco7);
						}
						if((caballoNegro1.position.x==peonBlanco8.position.x && caballoNegro1.position.z==peonBlanco8.position.z)&&(caballoNegro1.position.y==peonBlanco8.position.y)){
							escena.remove(peonBlanco8);
						}
						
						//////////////////////////////  Revisar si existen piezas amigas y manda alerta ////////////////////////
						if (((((((((((((((caballoNegro1.position.x==peonNegro1.position.x && caballoNegro1.position.z==peonNegro1.position.z)||
						(caballoNegro1.position.x==peonNegro2.position.x && caballoNegro1.position.z==peonNegro2.position.z))||
						(caballoNegro1.position.x==peonNegro3.position.x && caballoNegro1.position.z==peonNegro3.position.z))||
						(caballoNegro1.position.x==peonNegro4.position.x && caballoNegro1.position.z==peonNegro4.position.z))||
						(caballoNegro1.position.x==peonNegro5.position.x && caballoNegro1.position.z==peonNegro5.position.z))||
						(caballoNegro1.position.x==peonNegro6.position.x && caballoNegro1.position.z==peonNegro6.position.z))||
						(caballoNegro1.position.x==peonNegro7.position.x && caballoNegro1.position.z==peonNegro7.position.z))||
						(caballoNegro1.position.x==peonNegro8.position.x && caballoNegro1.position.z==peonNegro8.position.z))||
						(caballoNegro1.position.x==torreNegra1.position.x && caballoNegro1.position.z==torreNegra1.position.z))||
						(caballoNegro1.position.x==torreNegra2.position.x && caballoNegro1.position.z==torreNegra2.position.z))||
						(caballoNegro1.position.x==alfilNegro1.position.x && caballoNegro1.position.z==alfilNegro1.position.z))||
						(caballoNegro1.position.x==alfilNegro2.position.x && caballoNegro1.position.z==alfilNegro2.position.z))||
						(caballoNegro1.position.x==caballoNegro2.position.x && caballoNegro1.position.z==caballoNegro2.position.z))||
						(caballoNegro1.position.x==reinaNegra.position.x && caballoNegro1.position.z==reinaNegra.position.z))||
						(caballoNegro1.position.x==reyNegro.position.x && caballoNegro1.position.z==reyNegro.position.z)){
							alert("Movimiento inválido");
							caballoNegro1.position.x=objetivo.position.x;caballoNegro1.position.z=objetivo.position.z;
						}
					} //Termino Prototype act
				}//Termino if ficha y referencia
				
			if (caballoBlanco2.position.x===objetivo.position.x && caballoBlanco2.position.z===objetivo.position.z){
				CaballoBlanco.prototype.sense = function(environment){
					this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
					var obstaculo = this.sensor.intersectObjects(objetivo,true);
					if(obstaculo.length >0){
						this.colision = 1;
						this.step=0;
					}
					else{
						this.colision = 0;
						this.step=0.25;
					}
				} //Termino Prototype sense
				CaballoBlanco.prototype.act = function(environment){
					if (this.colision!=1){ //Si no está chocando
						if(caballoBlanco2.position.x<=objetivo.position.x) //Checa el sentido del avance de la pieza según la referencia en x
						caballoBlanco2.position.x += this.step;
						else
						caballoBlanco2.position.x -= this.step;
					}
					if (this.colision!=1){ //Si no está chocando
						if(caballoBlanco2.position.z<=objetivo.position.z) //Checa el sentido del avance de la pieza según la referencia en z
						caballoBlanco2.position.z += this.step;
						else
						caballoBlanco2.position.z -= this.step;
					}
					
					//////////////////////////////  Revisar si existen piezas enemigas y las destruye  //////////////////////
					if((caballoBlanco2.position.x==reyNegro.position.x && caballoBlanco2.position.z==reyNegro.position.z)&&(caballoBlanco2.position.y==reyNegro.position.y)){
						escena.remove(reyNegro);
						alert("Fin del juego, equipo blanco ha ganado");
					}
					if((caballoBlanco2.position.x==reinaNegra.position.x && caballoBlanco2.position.z==reinaNegra.position.z)&&(caballoBlanco2.position.y==reinaNegra.position.y)){
						escena.remove(reinaNegra);
					}
					if((caballoBlanco2.position.x==caballoNegro1.position.x && caballoBlanco2.position.z==caballoNegro1.position.z)&&(caballoBlanco2.position.y==caballoNegro1.position.y)){
						escena.remove(caballoNegro1);
					}
					if((caballoBlanco2.position.x==caballoNegro2.position.x && caballoBlanco2.position.z==caballoNegro2.position.z)&&(caballoBlanco2.position.y==caballoNegro2.position.y)){
						escena.remove(caballoNegro2);
					}
					if((caballoBlanco2.position.x==alfilNegro1.position.x && caballoBlanco2.position.z==alfilNegro1.position.z)&&(caballoBlanco2.position.y==alfilNegro1.position.y)){
						escena.remove(alfilNegro1);
					}
					if((caballoBlanco2.position.x==alfilNegro2.position.x && caballoBlanco2.position.z==alfilNegro2.position.z)&&(caballoBlanco2.position.y==alfilNegro2.position.y)){
						escena.remove(alfilNegro2);
					}
					if((caballoBlanco2.position.x==torreNegra1.position.x && caballoBlanco2.position.z==torreNegra1.position.z)&&(caballoBlanco2.position.y==torreNegra1.position.y)){
						escena.remove(torreNegra1);
					}
					if((caballoBlanco2.position.x==torreNegra2.position.x && caballoBlanco2.position.z==torreNegra2.position.z)&&(caballoBlanco2.position.y==torreNegra2.position.y)){
						escena.remove(torreNegra2);
					}
					if((caballoBlanco2.position.x==peonNegro1.position.x && caballoBlanco2.position.z==peonNegro1.position.z)&&(caballoBlanco2.position.y==peonNegro1.position.y)){
						escena.remove(peonNegro1);
					}
					if((caballoBlanco2.position.x==peonNegro2.position.x && caballoBlanco2.position.z==peonNegro2.position.z)&&(caballoBlanco2.position.y==peonNegro2.position.y)){
						escena.remove(peonNegro2);
					}
					if((caballoBlanco2.position.x==peonNegro3.position.x && caballoBlanco2.position.z==peonNegro3.position.z)&&(caballoBlanco2.position.y==peonNegro3.position.y)){
						escena.remove(peonNegro3);
					}
					if((caballoBlanco2.position.x==peonNegro4.position.x && caballoBlanco2.position.z==peonNegro4.position.z)&&(caballoBlanco2.position.y==peonNegro4.position.y)){
						escena.remove(peonNegro4);
					}
					if((caballoBlanco2.position.x==peonNegro5.position.x && caballoBlanco2.position.z==peonNegro5.position.z)&&(caballoBlanco2.position.y==peonNegro5.position.y)){
						escena.remove(peonNegro5);
					}
					if((caballoBlanco2.position.x==peonNegro6.position.x && caballoBlanco2.position.z==peonNegro6.position.z)&&(caballoBlanco2.position.y==peonNegro6.position.y)){
						escena.remove(peonNegro6);
					}
					if((caballoBlanco2.position.x==peonNegro7.position.x && caballoBlanco2.position.z==peonNegro7.position.z)&&(caballoBlanco2.position.y==peonNegro7.position.y)){
						escena.remove(peonNegro7);
					}
					if((caballoBlanco2.position.x==peonNegro8.position.x && caballoBlanco2.position.z==peonNegro8.position.z)&&(caballoBlanco2.position.y==peonNegro8.position.y)){
						escena.remove(peonNegro8);
					}
					
					//////////////////////////////  Revisar si existen piezas amigas y manda alerta ////////////////////////
					if (((((((((((((((caballoBlanco2.position.x==peonBlanco1.position.x && caballoBlanco2.position.z==peonBlanco1.position.z)||
					(caballoBlanco2.position.x==peonBlanco2.position.x && caballoBlanco2.position.z==peonBlanco2.position.z))||
					(caballoBlanco2.position.x==peonBlanco3.position.x && caballoBlanco2.position.z==peonBlanco3.position.z))||
					(caballoBlanco2.position.x==peonBlanco4.position.x && caballoBlanco2.position.z==peonBlanco4.position.z))||
					(caballoBlanco2.position.x==peonBlanco5.position.x && caballoBlanco2.position.z==peonBlanco5.position.z))||
					(caballoBlanco2.position.x==peonBlanco6.position.x && caballoBlanco2.position.z==peonBlanco6.position.z))||
					(caballoBlanco2.position.x==peonBlanco7.position.x && caballoBlanco2.position.z==peonBlanco7.position.z))||
					(caballoBlanco2.position.x==peonBlanco8.position.x && caballoBlanco2.position.z==peonBlanco8.position.z))||
					(caballoBlanco2.position.x==torreBlanca1.position.x && caballoBlanco2.position.z==torreBlanca1.position.z))||
					(caballoBlanco2.position.x==torreBlanca2.position.x && caballoBlanco2.position.z==torreBlanca2.position.z))||
					(caballoBlanco2.position.x==alfilBlanco1.position.x && caballoBlanco2.position.z==alfilBlanco1.position.z))||
					(caballoBlanco2.position.x==alfilBlanco2.position.x && caballoBlanco2.position.z==alfilBlanco2.position.z))||
					(caballoBlanco2.position.x==caballoBlanco1.position.x && caballoBlanco2.position.z==caballoBlanco1.position.z))||
					(caballoBlanco2.position.x==reinaBlanca.position.x && caballoBlanco2.position.z==reinaBlanca.position.z))||
					(caballoBlanco2.position.x==reyBlanco.position.x && caballoBlanco2.position.z==reyBlanco.position.z)){
						alert("Movimiento inválido");
						caballoBlanco2.position.x=objetivo.position.x;caballoBlanco2.position.z=objetivo.position.z;
					}
				} //Termino Prototype act
			}//Termino if ficha y referencia	

				if (caballoNegro2.position.x===objetivo.position.x && caballoNegro2.position.z===objetivo.position.z){
					CaballoNegro.prototype.sense = function(environment){
						this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
						var obstaculo = this.sensor.intersectObjects(objetivo,true);
						if(obstaculo.length >0){
							this.colision = 1;
							this.step=0;
						}
						else{
							this.colision = 0;
							this.step=0.25;
						}
					} //Termino Prototype sense
					CaballoNegro.prototype.act = function(environment){
						if (this.colision!=1){ //Si no está chocando
							if(caballoNegro2.position.x<=objetivo.position.x) //Checa el sentido del avance de la pieza según la referencia en x
							caballoNegro2.position.x += this.step;
							else
							caballoNegro2.position.x -= this.step;
						}
						if (this.colision!=1){ //Si no está chocando
							if(caballoNegro2.position.z<=objetivo.position.z) //Checa el sentido del avance de la pieza según la referencia en z
							caballoNegro2.position.z += this.step;
							else
							caballoNegro2.position.z -= this.step;
						}

						//////////////////////////////  Revisar si existen piezas enemigas y las destruye  //////////////////////
						if((caballoNegro2.position.x==reyBlanco.position.x && caballoNegro2.position.z==reyBlanco.position.z)&&(caballoNegro2.position.y==reyBlanco.position.y)){
							escena.remove(reyBlanco);
							alert("Fin del juego, equipo negro ha ganado");
						}
						if((caballoNegro2.position.x==reinaBlanca.position.x && caballoNegro2.position.z==reinaBlanca.position.z)&&(caballoNegro2.position.y==reinaBlanca.position.y)){
							escena.remove(reinaBlanca);
						}
						if((caballoNegro2.position.x==caballoBlanco1.position.x && caballoNegro2.position.z==caballoBlanco1.position.z)&&(caballoNegro2.position.y==caballoBlanco1.position.y)){
							escena.remove(caballoBlanco1);
						}
						if((caballoNegro2.position.x==caballoBlanco2.position.x && caballoNegro2.position.z==caballoBlanco2.position.z)&&(caballoNegro2.position.y==caballoBlanco2.position.y)){
							escena.remove(caballoBlanco2);
						}
						if((caballoNegro2.position.x==alfilBlanco1.position.x && caballoNegro2.position.z==alfilBlanco1.position.z)&&(caballoNegro2.position.y==alfilBlanco1.position.y)){
							escena.remove(alfilBlanco1);
						}
						if((caballoNegro2.position.x==alfilBlanco2.position.x && caballoNegro2.position.z==alfilBlanco2.position.z)&&(caballoNegro2.position.y==alfilBlanco2.position.y)){
							escena.remove(alfilBlanco2);
						}
						if((caballoNegro2.position.x==torreBlanca1.position.x && caballoNegro2.position.z==torreBlanca1.position.z)&&(caballoNegro2.position.y==torreBlanca1.position.y)){
							escena.remove(torreBlanca1);
						}
						if((caballoNegro2.position.x==torreBlanca2.position.x && caballoNegro2.position.z==torreBlanca2.position.z)&&(caballoNegro2.position.y==torreBlanca2.position.y)){
							escena.remove(torreBlanca2);
						}
						if((caballoNegro2.position.x==peonBlanco1.position.x && caballoNegro2.position.z==peonBlanco1.position.z)&&(caballoNegro2.position.y==peonBlanco1.position.y)){
							escena.remove(peonBlanco1);
						}
						if((caballoNegro2.position.x==peonBlanco2.position.x && caballoNegro2.position.z==peonBlanco2.position.z)&&(caballoNegro2.position.y==peonBlanco2.position.y)){
							escena.remove(peonBlanco2);
						}
						if((caballoNegro2.position.x==peonBlanco3.position.x && caballoNegro2.position.z==peonBlanco3.position.z)&&(caballoNegro2.position.y==peonBlanco3.position.y)){
							escena.remove(peonBlanco3);
						}
						if((caballoNegro2.position.x==peonBlanco4.position.x && caballoNegro2.position.z==peonBlanco4.position.z)&&(caballoNegro2.position.y==peonBlanco4.position.y)){
							escena.remove(peonBlanco4);
						}
						if((caballoNegro2.position.x==peonBlanco5.position.x && caballoNegro2.position.z==peonBlanco5.position.z)&&(caballoNegro2.position.y==peonBlanco5.position.y)){
							escena.remove(peonBlanco5);
						}
						if((caballoNegro2.position.x==peonBlanco6.position.x && caballoNegro2.position.z==peonBlanco6.position.z)&&(caballoNegro2.position.y==peonBlanco6.position.y)){
							escena.remove(peonBlanco6);
						}
						if((caballoNegro2.position.x==peonBlanco7.position.x && caballoNegro2.position.z==peonBlanco7.position.z)&&(caballoNegro2.position.y==peonBlanco7.position.y)){
							escena.remove(peonBlanco7);
						}
						if((caballoNegro2.position.x==peonBlanco8.position.x && caballoNegro2.position.z==peonBlanco8.position.z)&&(caballoNegro2.position.y==peonBlanco8.position.y)){
							escena.remove(peonBlanco8);
						}
						
						//////////////////////////////  Revisar si existen piezas amigas y manda alerta ////////////////////////
						if (((((((((((((((caballoNegro2.position.x==peonNegro1.position.x && caballoNegro2.position.z==peonNegro1.position.z)||
						(caballoNegro2.position.x==peonNegro2.position.x && caballoNegro2.position.z==peonNegro2.position.z))||
						(caballoNegro2.position.x==peonNegro3.position.x && caballoNegro2.position.z==peonNegro3.position.z))||
						(caballoNegro2.position.x==peonNegro4.position.x && caballoNegro2.position.z==peonNegro4.position.z))||
						(caballoNegro2.position.x==peonNegro5.position.x && caballoNegro2.position.z==peonNegro5.position.z))||
						(caballoNegro2.position.x==peonNegro6.position.x && caballoNegro2.position.z==peonNegro6.position.z))||
						(caballoNegro2.position.x==peonNegro7.position.x && caballoNegro2.position.z==peonNegro7.position.z))||
						(caballoNegro2.position.x==peonNegro8.position.x && caballoNegro2.position.z==peonNegro8.position.z))||
						(caballoNegro2.position.x==torreNegra1.position.x && caballoNegro2.position.z==torreNegra1.position.z))||
						(caballoNegro2.position.x==torreNegra2.position.x && caballoNegro2.position.z==torreNegra2.position.z))||
						(caballoNegro2.position.x==alfilNegro1.position.x && caballoNegro2.position.z==alfilNegro1.position.z))||
						(caballoNegro2.position.x==alfilNegro2.position.x && caballoNegro2.position.z==alfilNegro2.position.z))||
						(caballoNegro2.position.x==caballoNegro1.position.x && caballoNegro2.position.z==caballoNegro1.position.z))||
						(caballoNegro2.position.x==reinaNegra.position.x && caballoNegro2.position.z==reinaNegra.position.z))||
						(caballoNegro2.position.x==reyNegro.position.x && caballoNegro2.position.z==reyNegro.position.z)){
							alert("Movimiento inválido");
							caballoNegro2.position.x=objetivo.position.x;caballoNegro2.position.z=objetivo.position.z;
						}
					} //Termino Prototype act
				}//Termino if ficha y referencia
			escena.remove(objetivo);
				} //Termino if indicador
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
   camara.lookAt(new THREE.Vector3(40, 0, 40));

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
