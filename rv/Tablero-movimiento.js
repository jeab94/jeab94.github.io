var camara, escena, renderizador;
var indicador=0, indicadorcaballo=0;
var torreblanca1,torreblanca2,torrenegra1,torrenegra2;
var peonblanco1,peonblanco2,peonblanco3,peonblanco4,peonblanco5,peonblanco6,peonblanco7,peonblanco8;
var peonnegro1,peonnegro2,peonnegro3,peonnegro4,peonnegro5,peonnegro6,peonnegro7,peonnegro8;
var alfilblanco1,alfilblanco2,alfilnegro1,alfilnegro2;
var caballoblanco1,caballoblanco2,caballonegro1,caballonegro2;
var reinablanca,reinanegra;
var reyblanco,reynegro;

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
  var texturaluz = new THREE.TextureLoader().load('luzazul.jpg');
  var luzazul = new THREE.MeshLambertMaterial({map:texturaluz});
  this.add(new THREE.Mesh(new THREE.BoxGeometry(10, 10 ,10 ),luzazul));
  this.position.y=y;
  this.position.z=z;
  this.position.x=x;
}

Objetivo.prototype = new Agent();

Objetivo.prototype.act = function(environment){
  window.onload=function(){document.onkeydown=desplazar};
    function desplazar(pieza){
      var tecla = pieza.which;
	switch (tecla){
	  case 37 : //Izquierda
		if (indicador===1){
		  if (bloqueverde.position.x>=20){
		    bloqueverde.translateX(-10);
		  }
		}
		else{
		   escena.remove(grupomorado);
		   escena.remove(bloquerojo);
		   escena.remove(bloqueverde);
		   if (bloqueazul.position.x>=20){
		     bloqueazul.translateX(-10);
		   }
		}
		break;
	  case 38 :  //Arriba
		if (indicador===1){
		  if (bloqueverde.position.z>=-70){
		    bloqueverde.translateZ(-10);
		  }
		}
		else{
		   escena.remove(grupomorado);
		   escena.remove(bloquerojo);
		   escena.remove(bloqueverde);
		   if (bloqueazul.position.z>=-70){
		     bloqueazul.translateZ(-10);
		   }
		}
		break;
	  case 39 :  //Derecha 
		if (indicador===1){
		  if (bloqueverde.position.x<=70){
		    bloqueverde.translateX(10);
		  }
		}
		else{
		   escena.remove(grupomorado);
		   escena.remove(bloquerojo);
		   escena.remove(bloqueverde);
		   if (bloqueazul.position.x<=70){
		     bloqueazul.translateX(10);
		   }
		}
		break;
	  case 40 :  //Abajo
		if (indicador===1){
		  if (bloqueverde.position.z<=-20){
		    bloqueverde.translateZ(10);
		  }
		}
		else{
		   escena.remove(grupomorado);
		   escena.remove(bloquerojo);
		   escena.remove(bloqueverde);
		   if (bloqueazul.position.z<=-20){
		     bloqueazul.translateZ(10);
		   }
		}
		break;
	  case 13 :  //Enter
		if (indicador===1){
//////////////////////////////////////////////////////Torres///////////////////////////////////////////////////////////////////////////
		  ///////////////////////////////////Torre blanca 1//////////////////////////////////////////////////////////////////
		  if (torreblanca1.position.x===bloquerojo.position.x && torreblanca1.position.z===bloquerojo.position.z){
		    var bvtb1=bloqueverde;//Bloqueverdetorreblanca1
		    TorreBlanca.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvtb1,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
		      else
			{this.colision = 0;this.step=0.25;}
		    }//fin prototype sense

		    TorreBlanca.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(torreblanca1.position.x<=bvtb1.position.x)
			  torreblanca1.position.x += this.step;
			else
			  torreblanca1.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(torreblanca1.position.z<=bvtb1.position.z)
			  torreblanca1.position.z += this.step;
			else
			  torreblanca1.position.z -= this.step;
		      }//fin if posicion z
			//////////////////////////////////////////Piezas diferentes////////////////////////////////////////
			if((torreblanca1.position.x==torrenegra1.position.x && torreblanca1.position.z==torrenegra1.position.z)&&
			  (torreblanca1.position.y==torrenegra1.position.y))
			{torrenegra1.position.y=100;torrenegra1.position.x=100;escena.remove(torrenegra1);}
			if((torreblanca1.position.x==torrenegra2.position.x && torreblanca1.position.z==torrenegra2.position.z)&&
			  (torreblanca1.position.y==torrenegra2.position.y))
			{torrenegra2.position.y=100;torrenegra2.position.x=100;escena.remove(torrenegra2);}
			if((torreblanca1.position.x==caballonegro1.position.x && torreblanca1.position.z==caballonegro1.position.z)&&
			  (torreblanca1.position.y==caballonegro1.position.y))
			{caballonegro1.position.y=100;caballonegro1.position.x=100;escena.remove(caballonegro1);}
			if((torreblanca1.position.x==caballonegro2.position.x && torreblanca1.position.z==caballonegro2.position.z)&&
			  (torreblanca1.position.y==caballonegro2.position.y))
			{caballonegro2.position.y=100;caballonegro2.position.x=100;escena.remove(caballonegro2);}
			if((torreblanca1.position.x==alfilnegro1.position.x && torreblanca1.position.z==alfilnegro1.position.z)&&
			  (torreblanca1.position.y==alfilnegro1.position.y))
			{alfilnegro1.position.y=100;alfilnegro1.position.x=100;escena.remove(alfilnegro1);}
			if((torreblanca1.position.x==alfilnegro2.position.x && torreblanca1.position.z==alfilnegro2.position.z)&&
			  (torreblanca1.position.y==alfilnegro2.position.y))
			{alfilnegro2.position.y=100;alfilnegro2.position.x=100;escena.remove(alfilnegro2);}
			if((torreblanca1.position.x==reinanegra.position.x && torreblanca1.position.z==reinanegra.position.z)&&
			  (torreblanca1.position.y==reinanegra.position.y))
			{reinanegra.position.y=100;reinanegra.position.x=100;escena.remove(reinanegra);}
			if((torreblanca1.position.x==reynegro.position.x && torreblanca1.position.z==reynegro.position.z)&&
			  (torreblanca1.position.y==reynegro.position.y))
			{reynegro.position.y=100;reynegro.position.x=100;escena.remove(reynegro);}
			if((torreblanca1.position.x==peonnegro1.position.x && torreblanca1.position.z==peonnegro1.position.z)&&
			  (torreblanca1.position.y==peonnegro1.position.y))
			{peonnegro1.position.y=100;peonnegro1.position.x=100;escena.remove(peonnegro1);}
			if((torreblanca1.position.x==peonnegro2.position.x && torreblanca1.position.z==peonnegro2.position.z)&&
			  (torreblanca1.position.y==peonnegro2.position.y))
			{peonnegro2.position.y=100;peonnegro2.position.x=100;escena.remove(peonnegro2);}
			if((torreblanca1.position.x==peonnegro3.position.x && torreblanca1.position.z==peonnegro3.position.z)&&
			  (torreblanca1.position.y==peonnegro3.position.y))
			{peonnegro3.position.y=100;peonnegro3.position.x=100;escena.remove(peonnegro3);}
			if((torreblanca1.position.x==peonnegro4.position.x && torreblanca1.position.z==peonnegro4.position.z)&&
			  (torreblanca1.position.y==peonnegro4.position.y))
			{peonnegro4.position.y=100;peonnegro4.position.x=100;escena.remove(peonnegro4);}
			if((torreblanca1.position.x==peonnegro5.position.x && torreblanca1.position.z==peonnegro5.position.z)&&
			  (torreblanca1.position.y==peonnegro5.position.y))
			{peonnegro5.position.y=100;peonnegro5.position.x=100;escena.remove(peonnegro5);}
			if((torreblanca1.position.x==peonnegro6.position.x && torreblanca1.position.z==peonnegro6.position.z)&&
			  (torreblanca1.position.y==peonnegro6.position.y))
			{peonnegro6.position.y=100;peonnegro6.position.x=100;escena.remove(peonnegro6);}
			if((torreblanca1.position.x==peonnegro7.position.x && torreblanca1.position.z==peonnegro7.position.z)&&
			  (torreblanca1.position.y==peonnegro7.position.y))
			{peonnegro7.position.y=100;peonnegro7.position.x=100;escena.remove(peonnegro7);}
			if((torreblanca1.position.x==peonnegro8.position.x && torreblanca1.position.z==peonnegro8.position.z)&&
			  (torreblanca1.position.y==peonnegro8.position.y))
			{peonnegro8.position.y=100;peonnegro8.position.x=100;escena.remove(peonnegro8);}  
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((torreblanca1.position.x==peonblanco1.position.x && torreblanca1.position.z==peonblanco1.position.z)||
			   (torreblanca1.position.x==peonblanco2.position.x && torreblanca1.position.z==peonblanco2.position.z))||
			   (torreblanca1.position.x==peonblanco3.position.x && torreblanca1.position.z==peonblanco3.position.z))||
			   (torreblanca1.position.x==peonblanco4.position.x && torreblanca1.position.z==peonblanco4.position.z))||
			   (torreblanca1.position.x==peonblanco5.position.x && torreblanca1.position.z==peonblanco5.position.z))||
			   (torreblanca1.position.x==peonblanco6.position.x && torreblanca1.position.z==peonblanco6.position.z))||
			   (torreblanca1.position.x==peonblanco7.position.x && torreblanca1.position.z==peonblanco7.position.z))||
			   (torreblanca1.position.x==peonblanco8.position.x && torreblanca1.position.z==peonblanco8.position.z))||
			   (torreblanca1.position.x==torreblanca2.position.x && torreblanca1.position.z==torreblanca2.position.z))||
			   (torreblanca1.position.x==alfilblanco1.position.x && torreblanca1.position.z==alfilblanco1.position.z))||
			   (torreblanca1.position.x==alfilblanco2.position.x && torreblanca1.position.z==alfilblanco2.position.z))||
			   (torreblanca1.position.x==caballoblanco1.position.x && torreblanca1.position.z==caballoblanco1.position.z))||
			   (torreblanca1.position.x==caballoblanco2.position.x && torreblanca1.position.z==caballoblanco2.position.z))||
			   (torreblanca1.position.x==reyblanco.position.x && torreblanca1.position.z==reyblanco.position.z))||
			   (torreblanca1.position.x==reinablanca.position.x && torreblanca1.position.z==reinablanca.position.z)){
				alert("No puedes comer piezas del mismo color");
				torreblanca1.position.x=bloquerojo.position.x;torreblanca1.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if torreblanca1
		  /////////////////////////////////Torre blanca 2//////////////////////////////////////////////////////////////////
		  if (torreblanca2.position.x===bloquerojo.position.x && torreblanca2.position.z===bloquerojo.position.z){
		    var bvtb2=bloqueverde;//Bloqueverdetorreblanca2
		    TorreBlanca.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvtb2,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
		      else
			{this.colision = 0;this.step=0.25;}
		    }//fin prototype sense

		    TorreBlanca.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(torreblanca2.position.x<bvtb2.position.x)
			  torreblanca2.position.x += this.step;
			else
			  torreblanca2.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(torreblanca2.position.z<bvtb2.position.z)
			  torreblanca2.position.z += this.step;
			else
			  torreblanca2.position.z -= this.step;
		      }//fin if posicion z
			if((torreblanca2.position.x==torrenegra1.position.x && torreblanca2.position.z==torrenegra1.position.z)&&
			  (torreblanca2.position.y==torrenegra1.position.y))
			{torrenegra1.position.y=100;torrenegra1.position.x=100;escena.remove(torrenegra1);}
			if((torreblanca2.position.x==torrenegra2.position.x && torreblanca2.position.z==torrenegra2.position.z)&&
			  (torreblanca2.position.y==torrenegra2.position.y))
			{torrenegra2.position.y=100;torrenegra2.position.x=100;escena.remove(torrenegra2);}
			if((torreblanca2.position.x==caballonegro1.position.x && torreblanca2.position.z==caballonegro1.position.z)&&
			  (torreblanca2.position.y==caballonegro1.position.y))
			{caballonegro1.position.y=100;caballonegro1.position.x=100;escena.remove(caballonegro1);}
			if((torreblanca2.position.x==caballonegro2.position.x && torreblanca2.position.z==caballonegro2.position.z)&&
			  (torreblanca2.position.y==caballonegro2.position.y))
			{caballonegro2.position.y=100;caballonegro2.position.x=100;escena.remove(caballonegro2);}
			if((torreblanca2.position.x==alfilnegro1.position.x && torreblanca2.position.z==alfilnegro1.position.z)&&
			  (torreblanca2.position.y==alfilnegro1.position.y))
			{alfilnegro1.position.y=100;alfilnegro1.position.x=100;escena.remove(alfilnegro1);}
			if((torreblanca2.position.x==alfilnegro2.position.x && torreblanca2.position.z==alfilnegro2.position.z)&&
			  (torreblanca2.position.y==alfilnegro2.position.y))
			{alfilnegro2.position.y=100;alfilnegro2.position.x=100;escena.remove(alfilnegro2);}
			if((torreblanca2.position.x==reinanegra.position.x && torreblanca2.position.z==reinanegra.position.z)&&
			  (torreblanca2.position.y==reinanegra.position.y))
			{reinanegra.position.y=100;reinanegra.position.x=100;escena.remove(reinanegra);}
			if((torreblanca2.position.x==reynegro.position.x && torreblanca2.position.z==reynegro.position.z)&&
			  (torreblanca2.position.y==reynegro.position.y))
			{reynegro.position.y=100;reynegro.position.x=100;escena.remove(reynegro);}
			if((torreblanca2.position.x==peonnegro1.position.x && torreblanca2.position.z==peonnegro1.position.z)&&
			  (torreblanca2.position.y==peonnegro1.position.y))
			{peonnegro1.position.y=100;peonnegro1.position.x=100;escena.remove(peonnegro1);}
			if((torreblanca2.position.x==peonnegro2.position.x && torreblanca2.position.z==peonnegro2.position.z)&&
			  (torreblanca2.position.y==peonnegro2.position.y))
			{peonnegro2.position.y=100;peonnegro2.position.x=100;escena.remove(peonnegro2);}
			if((torreblanca2.position.x==peonnegro3.position.x && torreblanca2.position.z==peonnegro3.position.z)&&
			  (torreblanca2.position.y==peonnegro3.position.y))
			{peonnegro3.position.y=100;peonnegro3.position.x=100;escena.remove(peonnegro3);}
			if((torreblanca2.position.x==peonnegro4.position.x && torreblanca2.position.z==peonnegro4.position.z)&&
			  (torreblanca2.position.y==peonnegro4.position.y))
			{peonnegro4.position.y=100;peonnegro4.position.x=100;escena.remove(peonnegro4);}
			if((torreblanca2.position.x==peonnegro5.position.x && torreblanca2.position.z==peonnegro5.position.z)&&
			  (torreblanca2.position.y==peonnegro5.position.y))
			{peonnegro5.position.y=100;peonnegro5.position.x=100;escena.remove(peonnegro5);}
			if((torreblanca2.position.x==peonnegro6.position.x && torreblanca2.position.z==peonnegro6.position.z)&&
			  (torreblanca2.position.y==peonnegro6.position.y))
			{peonnegro6.position.y=100;peonnegro6.position.x=100;escena.remove(peonnegro6);}
			if((torreblanca2.position.x==peonnegro7.position.x && torreblanca2.position.z==peonnegro7.position.z)&&
			  (torreblanca2.position.y==peonnegro7.position.y))
			{peonnegro7.position.y=100;peonnegro7.position.x=100;escena.remove(peonnegro7);}
			if((torreblanca2.position.x==peonnegro8.position.x && torreblanca2.position.z==peonnegro8.position.z)&&
			  (torreblanca2.position.y==peonnegro8.position.y))
			{peonnegro8.position.y=100;peonnegro8.position.x=100;escena.remove(peonnegro8);}  
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((torreblanca2.position.x==peonblanco1.position.x && torreblanca2.position.z==peonblanco1.position.z)||
			   (torreblanca2.position.x==peonblanco2.position.x && torreblanca2.position.z==peonblanco2.position.z))||
			   (torreblanca2.position.x==peonblanco3.position.x && torreblanca2.position.z==peonblanco3.position.z))||
			   (torreblanca2.position.x==peonblanco4.position.x && torreblanca2.position.z==peonblanco4.position.z))||
			   (torreblanca2.position.x==peonblanco5.position.x && torreblanca2.position.z==peonblanco5.position.z))||
			   (torreblanca2.position.x==peonblanco6.position.x && torreblanca2.position.z==peonblanco6.position.z))||
			   (torreblanca2.position.x==peonblanco7.position.x && torreblanca2.position.z==peonblanco7.position.z))||
			   (torreblanca2.position.x==peonblanco8.position.x && torreblanca2.position.z==peonblanco8.position.z))||
			   (torreblanca2.position.x==torreblanca1.position.x && torreblanca2.position.z==torreblanca1.position.z))||
			   (torreblanca2.position.x==alfilblanco1.position.x && torreblanca2.position.z==alfilblanco1.position.z))||
			   (torreblanca2.position.x==alfilblanco2.position.x && torreblanca2.position.z==alfilblanco2.position.z))||
			   (torreblanca2.position.x==caballoblanco1.position.x && torreblanca2.position.z==caballoblanco1.position.z))||
			   (torreblanca2.position.x==caballoblanco2.position.x && torreblanca2.position.z==caballoblanco2.position.z))||
			   (torreblanca2.position.x==reyblanco.position.x && torreblanca2.position.z==reyblanco.position.z))||
			   (torreblanca2.position.x==reinablanca.position.x && torreblanca2.position.z==reinablanca.position.z)){
				alert("No puedes comer piezas del mismo color");
				torreblanca2.position.x=bloquerojo.position.x;torreblanca2.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if torreblanca2
		  /////////////////////////////////Torre negra 1///////////////////////////////////////////////////////////////////
		  if (torrenegra1.position.x===bloquerojo.position.x && torrenegra1.position.z===bloquerojo.position.z){
		    var bvtn1 = bloqueverde;
		    TorreNegra.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo2 = this.sensor.intersectObjects(bvtn1,true);
		      if(obstaculo2.length > 0)
			{this.colision = 1;this.step=0;}
		      else
			{this.colision = 0;this.step=0.25;}
		    }//fin prototype sense

		    TorreNegra.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(torrenegra1.position.x<bvtn1.position.x)
			  torrenegra1.position.x += this.step;
			else
			  torrenegra1.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(torrenegra1.position.z<bvtn1.position.z)
			  torrenegra1.position.z += this.step;
			else
			  torrenegra1.position.z -= this.step;
		      }//fin if posicion z
			if((torrenegra1.position.x==torreblanca1.position.x && torrenegra1.position.z==torreblanca1.position.z)&&
			  (torrenegra1.position.y==torreblanca1.position.y))
			{torreblanca1.position.y=100;torreblanca1.position.x=100;escena.remove(torreblanca1);}
			if((torrenegra1.position.x==torreblanca2.position.x && torrenegra1.position.z==torreblanca2.position.z)&&
			  (torrenegra1.position.y==torreblanca2.position.y))
			{torreblanca2.position.y=100;torreblanca2.position.x=100;escena.remove(torreblanca2);}
			if((torrenegra1.position.x==caballoblanco1.position.x && torrenegra1.position.z==caballoblanco1.position.z)&&
			  (torrenegra1.position.y==caballoblanco1.position.y))
			{caballoblanco1.position.y=100;caballoblanco1.position.x=100;escena.remove(caballoblanco1);}
			if((torrenegra1.position.x==caballoblanco2.position.x && torrenegra1.position.z==caballoblanco2.position.z)&&
			  (torrenegra1.position.y==caballoblanco2.position.y))
			{caballoblanco2.position.y=100;caballoblanco2.position.x=100;escena.remove(caballoblanco2);}
			if((torrenegra1.position.x==alfilblanco1.position.x && torrenegra1.position.z==alfilblanco1.position.z)&&
			  (torrenegra1.position.y==alfilblanco1.position.y))
			{alfilblanco1.position.y=100;alfilblanco1.position.x=100;escena.remove(alfilblanco1);}
			if((torrenegra1.position.x==alfilblanco2.position.x && torrenegra1.position.z==alfilblanco2.position.z)&&
			  (torrenegra1.position.y==alfilblanco2.position.y))
			{alfilblanco2.position.y=100;alfilblanco2.position.x=100;escena.remove(alfilblanco2);}
			if((torrenegra1.position.x==reinablanca.position.x && torrenegra1.position.z==reinablanca.position.z)&&
			  (torrenegra1.position.y==reinablanca.position.y))
			{reinablanca.position.y=100;reinablanca.position.x=100;escena.remove(reinablanca);}
			if((torrenegra1.position.x==reyblanco.position.x && torrenegra1.position.z==reyblanco.position.z)&&
			  (torrenegra1.position.y==reyblanco.position.y))
			{reyblanco.position.y=100;reyblanco.position.x=100;escena.remove(reyblanco);}
			if((torrenegra1.position.x==peonblanco1.position.x && torrenegra1.position.z==peonblanco1.position.z)&&
			  (torrenegra1.position.y==peonblanco1.position.y))
			{peonblanco1.position.y=100;peonblanco1.position.x=100;escena.remove(peonblanco1);}
			if((torrenegra1.position.x==peonblanco2.position.x && torrenegra1.position.z==peonblanco2.position.z)&&
			  (torrenegra1.position.y==peonblanco2.position.y))
			{peonblanco2.position.y=100;peonblanco2.position.x=100;escena.remove(peonblanco2);}
			if((torrenegra1.position.x==peonblanco3.position.x && torrenegra1.position.z==peonblanco3.position.z)&&
			  (torrenegra1.position.y==peonblanco3.position.y))
			{peonblanco3.position.y=100;peonblanco3.position.x=100;escena.remove(peonblanco3);}
			if((torrenegra1.position.x==peonblanco4.position.x && torrenegra1.position.z==peonblanco4.position.z)&&
			  (torrenegra1.position.y==peonblanco4.position.y))
			{peonblanco4.position.y=100;peonblanco4.position.x=100;escena.remove(peonblanco4);}
			if((torrenegra1.position.x==peonblanco5.position.x && torrenegra1.position.z==peonblanco5.position.z)&&
			  (torrenegra1.position.y==peonblanco5.position.y))
			{peonblanco5.position.y=100;peonblanco5.position.x=100;escena.remove(peonblanco5);}
			if((torrenegra1.position.x==peonblanco6.position.x && torrenegra1.position.z==peonblanco6.position.z)&&
			  (torrenegra1.position.y==peonblanco6.position.y))
			{peonblanco6.position.y=100;peonblanco6.position.x=100;escena.remove(peonblanco6);}
			if((torrenegra1.position.x==peonblanco7.position.x && torrenegra1.position.z==peonblanco7.position.z)&&
			  (torrenegra1.position.y==peonblanco7.position.y))
			{peonblanco7.position.y=100;peonblanco7.position.x=100;escena.remove(peonblanco7);}
			if((torrenegra1.position.x==peonblanco8.position.x && torrenegra1.position.z==peonblanco8.position.z)&&
			  (torrenegra1.position.y==peonblanco8.position.y))
			{peonblanco8.position.y=100;peonblanco8.position.x=100;escena.remove(peonblanco8);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((torrenegra1.position.x==peonnegro1.position.x && torrenegra1.position.z==peonnegro1.position.z)||
			   (torrenegra1.position.x==peonnegro2.position.x && torrenegra1.position.z==peonnegro2.position.z))||
			   (torrenegra1.position.x==peonnegro3.position.x && torrenegra1.position.z==peonnegro3.position.z))||
			   (torrenegra1.position.x==peonnegro4.position.x && torrenegra1.position.z==peonnegro4.position.z))||
			   (torrenegra1.position.x==peonnegro5.position.x && torrenegra1.position.z==peonnegro5.position.z))||
			   (torrenegra1.position.x==peonnegro6.position.x && torrenegra1.position.z==peonnegro6.position.z))||
			   (torrenegra1.position.x==peonnegro7.position.x && torrenegra1.position.z==peonnegro7.position.z))||
			   (torrenegra1.position.x==peonnegro8.position.x && torrenegra1.position.z==peonnegro8.position.z))||
			   (torrenegra1.position.x==torrenegra2.position.x && torrenegra1.position.z==torrenegra2.position.z))||
			   (torrenegra1.position.x==alfilnegro1.position.x && torrenegra1.position.z==alfilnegro1.position.z))||
			   (torrenegra1.position.x==alfilnegro2.position.x && torrenegra1.position.z==alfilnegro2.position.z))||
			   (torrenegra1.position.x==caballonegro1.position.x && torrenegra1.position.z==caballonegro1.position.z))||
			   (torrenegra1.position.x==caballonegro2.position.x && torrenegra1.position.z==caballonegro2.position.z))||
			   (torrenegra1.position.x==reynegro.position.x && torrenegra1.position.z==reynegro.position.z))||
			   (torrenegra1.position.x==reinanegra.position.x && torrenegra1.position.z==reinanegra.position.z)){
				alert("No puedes comer piezas del mismo color");
				torrenegra1.position.x=bloquerojo.position.x;torrenegra1.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if torreblanca2
		  ////////////////////////////Torre negra 2///////////////////////////////////////////////////////////////////  
		  if (torrenegra2.position.x===bloquerojo.position.x && torrenegra2.position.z===bloquerojo.position.z){
		    var bvtn2 = bloqueverde;
		    TorreNegra.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo2 = this.sensor.intersectObjects(bvtn2,true);
		      if(obstaculo2.length > 0)
			{this.colision = 1;this.step=0;}
		      else
			{this.colision = 0;this.step=0.25;}
		    }//fin prototype sense

		    TorreNegra.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(torrenegra2.position.x<bvtn2.position.x)
			  torrenegra2.position.x += this.step;
			else
			  torrenegra2.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(torrenegra2.position.z<bvtn2.position.z)
			  torrenegra2.position.z += this.step;
			else
			  torrenegra2.position.z -= this.step;
		      }//fin if posicion z
			if((torrenegra2.position.x==torreblanca1.position.x && torrenegra2.position.z==torreblanca1.position.z)&&
			  (torrenegra2.position.y==torreblanca1.position.y))
			{torreblanca1.position.y=100;torreblanca1.position.x=100;escena.remove(torreblanca1);}
			if((torrenegra2.position.x==torreblanca2.position.x && torrenegra2.position.z==torreblanca2.position.z)&&
			  (torrenegra2.position.y==torreblanca2.position.y))
			{torreblanca2.position.y=100;torreblanca2.position.x=100;escena.remove(torreblanca2);}
			if((torrenegra2.position.x==caballoblanco1.position.x && torrenegra2.position.z==caballoblanco1.position.z)&&
			  (torrenegra2.position.y==caballoblanco1.position.y))
			{caballoblanco1.position.y=100;caballoblanco1.position.x=100;escena.remove(caballoblanco1);}
			if((torrenegra2.position.x==caballoblanco2.position.x && torrenegra2.position.z==caballoblanco2.position.z)&&
			  (torrenegra2.position.y==caballoblanco2.position.y))
			{caballoblanco2.position.y=100;caballoblanco2.position.x=100;escena.remove(caballoblanco2);}
			if((torrenegra2.position.x==alfilblanco1.position.x && torrenegra2.position.z==alfilblanco1.position.z)&&
			  (torrenegra2.position.y==alfilblanco1.position.y))
			{alfilblanco1.position.y=100;alfilblanco1.position.x=100;escena.remove(alfilblanco1);}
			if((torrenegra2.position.x==alfilblanco2.position.x && torrenegra2.position.z==alfilblanco2.position.z)&&
			  (torrenegra2.position.y==alfilblanco2.position.y))
			{alfilblanco2.position.y=100;alfilblanco2.position.x=100;escena.remove(alfilblanco2);}
			if((torrenegra2.position.x==reinablanca.position.x && torrenegra2.position.z==reinablanca.position.z)&&
			  (torrenegra2.position.y==reinablanca.position.y))
			{reinablanca.position.y=100;reinablanca.position.x=100;escena.remove(reinablanca);}
			if((torrenegra2.position.x==reyblanco.position.x && torrenegra2.position.z==reyblanco.position.z)&&
			  (torrenegra2.position.y==reyblanco.position.y))
			{reyblanco.position.y=100;reyblanco.position.x=100;escena.remove(reyblanco);}
			if((torrenegra2.position.x==peonblanco1.position.x && torrenegra2.position.z==peonblanco1.position.z)&&
			  (torrenegra2.position.y==torreblanca1.position.y))
			{peonblanco1.position.y=100;peonblanco1.position.x=100;escena.remove(peonblanco1);}
			if((torrenegra2.position.x==peonblanco2.position.x && torrenegra2.position.z==peonblanco2.position.z)&&
			  (torrenegra2.position.y==peonblanco2.position.y))
			{peonblanco2.position.y=100;peonblanco2.position.x=100;escena.remove(peonblanco2);}
			if((torrenegra2.position.x==peonblanco3.position.x && torrenegra2.position.z==peonblanco3.position.z)&&
			  (torrenegra2.position.y==peonblanco3.position.y))
			{peonblanco3.position.y=100;peonblanco3.position.x=100;escena.remove(peonblanco3);}
			if((torrenegra2.position.x==peonblanco4.position.x && torrenegra2.position.z==peonblanco4.position.z)&&
			  (torrenegra2.position.y==peonblanco4.position.y))
			{peonblanco4.position.y=100;peonblanco4.position.x=100;escena.remove(peonblanco4);}
			if((torrenegra2.position.x==peonblanco5.position.x && torrenegra2.position.z==peonblanco5.position.z)&&
			  (torrenegra2.position.y==peonblanco5.position.y))
			{peonblanco5.position.y=100;peonblanco5.position.x=100;escena.remove(peonblanco5);}
			if((torrenegra2.position.x==peonblanco6.position.x && torrenegra2.position.z==peonblanco6.position.z)&&
			  (torrenegra2.position.y==peonblanco6.position.y))
			{peonblanco6.position.y=100;peonblanco6.position.x=100;escena.remove(peonblanco6);}
			if((torrenegra2.position.x==peonblanco7.position.x && torrenegra2.position.z==peonblanco7.position.z)&&
			  (torrenegra2.position.y==peonblanco7.position.y))
			{peonblanco7.position.y=100;peonblanco7.position.x=100;escena.remove(peonblanco7);}
			if((torrenegra2.position.x==peonblanco8.position.x && torrenegra2.position.z==peonblanco8.position.z)&&
			  (torrenegra2.position.y==peonblanco8.position.y))
			{peonblanco8.position.y=100;peonblanco8.position.x=100;escena.remove(peonblanco8);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((torrenegra2.position.x==peonnegro1.position.x && torrenegra2.position.z==peonnegro1.position.z)||
			   (torrenegra2.position.x==peonnegro2.position.x && torrenegra2.position.z==peonnegro2.position.z))||
			   (torrenegra2.position.x==peonnegro3.position.x && torrenegra2.position.z==peonnegro3.position.z))||
			   (torrenegra2.position.x==peonnegro4.position.x && torrenegra2.position.z==peonnegro4.position.z))||
			   (torrenegra2.position.x==peonnegro5.position.x && torrenegra2.position.z==peonnegro5.position.z))||
			   (torrenegra2.position.x==peonnegro6.position.x && torrenegra2.position.z==peonnegro6.position.z))||
			   (torrenegra2.position.x==peonnegro7.position.x && torrenegra2.position.z==peonnegro7.position.z))||
			   (torrenegra2.position.x==peonnegro8.position.x && torrenegra2.position.z==peonnegro8.position.z))||
			   (torrenegra2.position.x==torrenegra1.position.x && torrenegra2.position.z==torrenegra1.position.z))||
			   (torrenegra2.position.x==alfilnegro1.position.x && torrenegra2.position.z==alfilnegro1.position.z))||
			   (torrenegra2.position.x==alfilnegro2.position.x && torrenegra2.position.z==alfilnegro2.position.z))||
			   (torrenegra2.position.x==caballonegro1.position.x && torrenegra2.position.z==caballonegro1.position.z))||
			   (torrenegra2.position.x==caballonegro2.position.x && torrenegra2.position.z==caballonegro2.position.z))||
			   (torrenegra2.position.x==reynegro.position.x && torrenegra2.position.z==reynegro.position.z))||
			   (torrenegra2.position.x==reinanegra.position.x && torrenegra2.position.z==reinanegra.position.z)){
				alert("No puedes comer piezas del mismo color");
				torrenegra2.position.x=bloquerojo.position.x;torrenegra2.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if torreblanca2
//////////////////////////////////////////////////////Peones///////////////////////////////////////////////////////////////////////////
		  ///////////////////////////////////Peon blanco 1//////////////////////////////////////////////////////////////////
		  if (peonblanco1.position.x===bloquerojo.position.x && peonblanco1.position.z===bloquerojo.position.z){
		    var bvpb1=bloqueverde;//Bloqueverdetorreblanca1

		    PeonBlanco.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvpb1,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
		      else
			{this.colision = 0;this.step=0.25;}
		    }//fin prototype sense

		    PeonBlanco.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(peonblanco1.position.x<bvpb1.position.x)
			  peonblanco1.position.x += this.step;
			else
			  peonblanco1.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(peonblanco1.position.z<bvpb1.position.z)
			  peonblanco1.position.z += this.step;
			else
			  peonblanco1.position.z -= this.step;
		      }//fin if posicion z
			if((peonblanco1.position.x==torrenegra1.position.x && peonblanco1.position.z==torrenegra1.position.z)&&
			  (peonblanco1.position.y==torrenegra1.position.y))
			{torrenegra1.position.y=100;torrenegra1.position.x=100;escena.remove(torrenegra1);}
			if((peonblanco1.position.x==torrenegra2.position.x && peonblanco1.position.z==torrenegra2.position.z)&&
			  (peonblanco1.position.y==torrenegra2.position.y))
			{torrenegra2.position.y=100;torrenegra2.position.x=100;escena.remove(torrenegra2);}
			if((peonblanco1.position.x==caballonegro1.position.x && peonblanco1.position.z==caballonegro1.position.z)&&
			  (peonblanco1.position.y==caballonegro1.position.y))
			{caballonegro1.position.y=100;caballonegro1.position.x=100;escena.remove(caballonegro1);}
			if((peonblanco1.position.x==caballonegro2.position.x && peonblanco1.position.z==caballonegro2.position.z)&&
			  (peonblanco1.position.y==caballonegro2.position.y))
			{caballonegro2.position.y=100;caballonegro2.position.x=100;escena.remove(caballonegro2);}
			if((peonblanco1.position.x==alfilnegro1.position.x && peonblanco1.position.z==alfilnegro1.position.z)&&
			  (peonblanco1.position.y==alfilnegro1.position.y))
			{alfilnegro1.position.y=100;alfilnegro1.position.x=100;escena.remove(alfilnegro1);}
			if((peonblanco1.position.x==alfilnegro2.position.x && peonblanco1.position.z==alfilnegro2.position.z)&&
			  (peonblanco1.position.y==alfilnegro2.position.y))
			{alfilnegro2.position.y=100;alfilnegro2.position.x=100;escena.remove(alfilnegro2);}
			if((peonblanco1.position.x==reinanegra.position.x && peonblanco1.position.z==reinanegra.position.z)&&
			  (peonblanco1.position.y==reinanegra.position.y))
			{reinanegra.position.y=100;reinanegra.position.x=100;escena.remove(reinanegra);}
			if((peonblanco1.position.x==reynegro.position.x && peonblanco1.position.z==reynegro.position.z)&&
			  (peonblanco1.position.y==reynegro.position.y))
			{reynegro.position.y=100;reynegro.position.x=100;escena.remove(reynegro);}
			if((peonblanco1.position.x==peonnegro1.position.x && peonblanco1.position.z==peonnegro1.position.z)&&
			  (peonblanco1.position.y==peonnegro1.position.y))
			{peonnegro1.position.y=100;peonnegro1.position.x=100;escena.remove(peonnegro1);}
			if((peonblanco1.position.x==peonnegro2.position.x && peonblanco1.position.z==peonnegro2.position.z)&&
			  (peonblanco1.position.y==peonnegro2.position.y))
			{peonnegro2.position.y=100;peonnegro2.position.x=100;escena.remove(peonnegro2);}
			if((peonblanco1.position.x==peonnegro3.position.x && peonblanco1.position.z==peonnegro3.position.z)&&
			  (peonblanco1.position.y==peonnegro3.position.y))
			{peonnegra3.position.y=100;peonnegro3.position.x=100;escena.remove(peonnegro3);}
			if((peonblanco1.position.x==peonnegro4.position.x && peonblanco1.position.z==peonnegro4.position.z)&&
			  (peonblanco1.position.y==peonnegro4.position.y))
			{peonnegro4.position.y=100;peonnegro4.position.x=100;escena.remove(peonnegro4);}
			if((peonblanco1.position.x==peonnegro5.position.x && peonblanco1.position.z==peonnegro5.position.z)&&
			  (peonblanco1.position.y==peonnegro5.position.y))
			{peonnegro5.position.y=100;peonnegro5.position.x=100;escena.remove(peonnegro5);}
			if((peonblanco1.position.x==peonnegro6.position.x && peonblanco1.position.z==peonnegro6.position.z)&&
			  (peonblanco1.position.y==peonnegro6.position.y))
			{peonnegro6.position.y=100;peonnegro6.position.x=100;escena.remove(peonnegro6);}
			if((peonblanco1.position.x==peonnegro7.position.x && peonblanco1.position.z==peonnegro7.position.z)&&
			  (peonblanco1.position.y==peonnegro7.position.y))
			{peonnegro7.position.y=100;peonnegro7.position.x=100;escena.remove(peonnegro7);}
			if((peonblanco1.position.x==peonnegro8.position.x && peonblanco1.position.z==peonnegro8.position.z)&&
			  (peonblanco1.position.y==peonnegro8.position.y))
			{peonnegro8.position.y=100;peonnegro8.position.x=100;escena.remove(peonnegro8);}   
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((peonblanco1.position.x==torreblanca1.position.x && peonblanco1.position.z==torreblanca1.position.z)||
			   (peonblanco1.position.x==peonblanco2.position.x && peonblanco1.position.z==peonblanco2.position.z))||
			   (peonblanco1.position.x==peonblanco3.position.x && peonblanco1.position.z==peonblanco3.position.z))||
			   (peonblanco1.position.x==peonblanco4.position.x && peonblanco1.position.z==peonblanco4.position.z))||
			   (peonblanco1.position.x==peonblanco5.position.x && peonblanco1.position.z==peonblanco5.position.z))||
			   (peonblanco1.position.x==peonblanco6.position.x && peonblanco1.position.z==peonblanco6.position.z))||
			   (peonblanco1.position.x==peonblanco7.position.x && peonblanco1.position.z==peonblanco7.position.z))||
			   (peonblanco1.position.x==peonblanco8.position.x && peonblanco1.position.z==peonblanco8.position.z))||
			   (peonblanco1.position.x==torreblanca2.position.x && peonblanco1.position.z==torreblanca2.position.z))||
			   (peonblanco1.position.x==alfilblanco1.position.x && peonblanco1.position.z==alfilblanco1.position.z))||
			   (peonblanco1.position.x==alfilblanco2.position.x && peonblanco1.position.z==alfilblanco2.position.z))||
			   (peonblanco1.position.x==caballoblanco1.position.x && peonblanco1.position.z==caballoblanco1.position.z))||
			   (peonblanco1.position.x==caballoblanco2.position.x && peonblanco1.position.z==caballoblanco2.position.z))||
			   (peonblanco1.position.x==reyblanco.position.x && peonblanco1.position.z==reyblanco.position.z))||
			   (peonblanco1.position.x==reinablanca.position.x && peonblanco1.position.z==reinablanca.position.z)){
				alert("No puedes comer piezas del mismo color");
				peonblanco1.position.x=bloquerojo.position.x;peonblanco1.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if peonblanco1
		  ///////////////////////////////////Peon blanco 2//////////////////////////////////////////////////////////////////
		  if (peonblanco2.position.x===bloquerojo.position.x && peonblanco2.position.z===bloquerojo.position.z){
		    var bvpb2=bloqueverde;//Bloqueverdetorreblanca1

		    PeonBlanco.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvpb2,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
		      else
			{this.colision = 0;this.step=0.25;}
		    }//fin prototype sense

		    PeonBlanco.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(peonblanco2.position.x<bvpb2.position.x)
			  peonblanco2.position.x += this.step;
			else
			  peonblanco2.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(peonblanco2.position.z<bvpb2.position.z)
			  peonblanco2.position.z += this.step;
			else
			  peonblanco2.position.z -= this.step;
		      }//fin if posicion z
			if((peonblanco2.position.x==torrenegra1.position.x && peonblanco2.position.z==torrenegra1.position.z)&&
			  (peonblanco2.position.y==torrenegra1.position.y))
			{torrenegra1.position.y=100;torrenegra1.position.x=100;escena.remove(torrenegra1);}
			if((peonblanco2.position.x==torrenegra2.position.x && peonblanco2.position.z==torrenegra2.position.z)&&
			  (peonblanco2.position.y==torrenegra2.position.y))
			{torrenegra2.position.y=100;torrenegra2.position.x=100;escena.remove(torrenegra2);}
			if((peonblanco2.position.x==caballonegro1.position.x && peonblanco2.position.z==caballonegro1.position.z)&&
			  (peonblanco2.position.y==caballonegro1.position.y))
			{caballonegro1.position.y=100;caballonegro1.position.x=100;escena.remove(caballonegro1);}
			if((peonblanco2.position.x==caballonegro2.position.x && peonblanco2.position.z==caballonegro2.position.z)&&
			  (peonblanco2.position.y==caballonegro2.position.y))
			{caballonegro2.position.y=100;caballonegro2.position.x=100;escena.remove(caballonegro2);}
			if((peonblanco2.position.x==alfilnegro1.position.x && peonblanco2.position.z==alfilnegro1.position.z)&&
			  (peonblanco2.position.y==alfilnegro1.position.y))
			{alfilnegro1.position.y=100;alfilnegro1.position.x=100;escena.remove(alfilnegro1);}
			if((peonblanco2.position.x==alfilnegro2.position.x && peonblanco2.position.z==alfilnegro2.position.z)&&
			  (peonblanco2.position.y==alfilnegro2.position.y))
			{alfilnegro2.position.y=100;alfilnegro2.position.x=100;escena.remove(alfilnegro2);}
			if((peonblanco2.position.x==reinanegra.position.x && peonblanco2.position.z==reinanegra.position.z)&&
			  (peonblanco2.position.y==reinanegra.position.y))
			{reinanegra.position.y=100;reinanegra.position.x=100;escena.remove(reinanegra);}
			if((peonblanco2.position.x==reynegro.position.x && peonblanco2.position.z==reynegro.position.z)&&
			  (peonblanco2.position.y==reynegro.position.y))
			{reynegro.position.y=100;reynegro.position.x=100;escena.remove(reynegro);}
			if((peonblanco2.position.x==peonnegro1.position.x && peonblanco2.position.z==peonnegro1.position.z)&&
			  (peonblanco2.position.y==peonnegro1.position.y))
			{peonnegro1.position.y=100;peonnegro1.position.x=100;escena.remove(peonnegro1);}
			if((peonblanco2.position.x==peonnegro2.position.x && peonblanco2.position.z==peonnegro2.position.z)&&
			  (peonblanco2.position.y==peonnegro2.position.y))
			{peonnegro2.position.y=100;peonnegro2.position.x=100;escena.remove(peonnegro2);}
			if((peonblanco2.position.x==peonnegro3.position.x && peonblanco2.position.z==peonnegro3.position.z)&&
			  (peonblanco2.position.y==peonnegro3.position.y))
			{peonnegro3.position.y=100;peonnegro3.position.x=100;escena.remove(peonnegro3);}
			if((peonblanco2.position.x==peonnegro4.position.x && peonblanco2.position.z==peonnegro4.position.z)&&
			  (peonblanco2.position.y==peonnegro4.position.y))
			{peonnegro4.position.y=100;peonnegro4.position.x=100;escena.remove(peonnegro4);}
			if((peonblanco2.position.x==peonnegro5.position.x && peonblanco2.position.z==peonnegro5.position.z)&&
			  (peonblanco2.position.y==peonnegro5.position.y))
			{peonnegro5.position.y=100;peonnegro5.position.x=100;escena.remove(peonnegro5);}
			if((peonblanco2.position.x==peonnegro6.position.x && peonblanco2.position.z==peonnegro6.position.z)&&
			  (peonblanco2.position.y==peonnegro6.position.y))
			{peonnegro6.position.y=100;peonnegro6.position.x=100;escena.remove(peonnegro6);}
			if((peonblanco2.position.x==peonnegro7.position.x && peonblanco2.position.z==peonnegro7.position.z)&&
			  (peonblanco2.position.y==peonnegro7.position.y))
			{peonnegro7.position.y=100;peonnegro7.position.x=100;escena.remove(peonnegro7);}
			if((peonblanco2.position.x==peonnegro8.position.x && peonblanco2.position.z==peonnegro8.position.z)&&
			  (peonblanco2.position.y==peonnegro8.position.y))
			{peonnegro8.position.y=100;peonnegro8.position.x=100;escena.remove(peonnegro8);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((peonblanco2.position.x==torreblanca1.position.x && peonblanco2.position.z==torreblanca1.position.z)||
			   (peonblanco2.position.x==peonblanco1.position.x && peonblanco2.position.z==peonblanco1.position.z))||
			   (peonblanco2.position.x==peonblanco3.position.x && peonblanco2.position.z==peonblanco3.position.z))||
			   (peonblanco2.position.x==peonblanco4.position.x && peonblanco2.position.z==peonblanco4.position.z))||
			   (peonblanco2.position.x==peonblanco5.position.x && peonblanco2.position.z==peonblanco5.position.z))||
			   (peonblanco2.position.x==peonblanco6.position.x && peonblanco2.position.z==peonblanco6.position.z))||
			   (peonblanco2.position.x==peonblanco7.position.x && peonblanco2.position.z==peonblanco7.position.z))||
			   (peonblanco2.position.x==peonblanco8.position.x && peonblanco2.position.z==peonblanco8.position.z))||
			   (peonblanco2.position.x==torreblanca2.position.x && peonblanco2.position.z==torreblanca2.position.z))||
			   (peonblanco2.position.x==alfilblanco1.position.x && peonblanco2.position.z==alfilblanco1.position.z))||
			   (peonblanco2.position.x==alfilblanco2.position.x && peonblanco2.position.z==alfilblanco2.position.z))||
			   (peonblanco2.position.x==caballoblanco1.position.x && peonblanco2.position.z==caballoblanco1.position.z))||
			   (peonblanco2.position.x==caballoblanco2.position.x && peonblanco2.position.z==caballoblanco2.position.z))||
			   (peonblanco2.position.x==reyblanco.position.x && peonblanco2.position.z==reyblanco.position.z))||
			   (peonblanco2.position.x==reinablanca.position.x && peonblanco2.position.z==reinablanca.position.z)){
				alert("No puedes comer piezas del mismo color");
				peonblanco2.position.x=bloquerojo.position.x;peonblanco2.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if peonblanco2		
		  ///////////////////////////////////Peon blanco 3//////////////////////////////////////////////////////////////////
		  if (peonblanco3.position.x===bloquerojo.position.x && peonblanco3.position.z===bloquerojo.position.z){
		    var bvpb3=bloqueverde;//Bloqueverdetorreblanca1

		    PeonBlanco.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvpb3,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
		      else
			{this.colision = 0;this.step=0.25;}
		    }//fin prototype sense

		    PeonBlanco.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(peonblanco3.position.x<bvpb3.position.x)
			  peonblanco3.position.x += this.step;
			else
			  peonblanco3.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(peonblanco3.position.z<bvpb3.position.z)
			  peonblanco3.position.z += this.step;
			else
			  peonblanco3.position.z -= this.step;
		      }//fin if posicion z
			if((peonblanco3.position.x==torrenegra1.position.x && peonblanco3.position.z==torrenegra1.position.z)&&
			  (peonblanco3.position.y==torrenegra1.position.y))
			{torrenegra1.position.y=100;torrenegra1.position.x=100;escena.remove(torrenegra1);}
			if((peonblanco3.position.x==torrenegra2.position.x && peonblanco3.position.z==torrenegra2.position.z)&&
			  (peonblanco3.position.y==torrenegra2.position.y))
			{torrenegra2.position.y=100;torrenegra2.position.x=100;escena.remove(torrenegra2);}
			if((peonblanco3.position.x==caballonegro1.position.x && peonblanco3.position.z==caballonegro1.position.z)&&
			  (peonblanco3.position.y==caballonegro1.position.y))
			{caballonegro1.position.y=100;caballonegro1.position.x=100;escena.remove(caballonegro1);}
			if((peonblanco3.position.x==caballonegro2.position.x && peonblanco3.position.z==caballonegro2.position.z)&&
			  (peonblanco3.position.y==caballonegro2.position.y))
			{caballonegro2.position.y=100;caballonegro2.position.x=100;escena.remove(caballonegro2);}
			if((peonblanco3.position.x==alfilnegro1.position.x && peonblanco3.position.z==alfilnegro1.position.z)&&
			  (peonblanco3.position.y==alfilnegro1.position.y))
			{alfilnegro1.position.y=100;alfilnegro1.position.x=100;escena.remove(alfilnegro1);}
			if((peonblanco3.position.x==alfilnegro2.position.x && peonblanco3.position.z==alfilnegro2.position.z)&&
			  (peonblanco3.position.y==alfilnegro2.position.y))
			{alfilnegro2.position.y=100;alfilnegro2.position.x=100;escena.remove(alfilnegro2);}
			if((peonblanco3.position.x==reinanegra.position.x && peonblanco3.position.z==reinanegra.position.z)&&
			  (peonblanco3.position.y==reinanegra.position.y))
			{reinanegra.position.y=100;reinanegra.position.x=100;escena.remove(reinanegra);}
			if((peonblanco3.position.x==reynegro.position.x && peonblanco3.position.z==reynegro.position.z)&&
			  (peonblanco3.position.y==reynegro.position.y))
			{reynegro.position.y=100;reynegro.position.x=100;escena.remove(reynegro);}
			if((peonblanco3.position.x==peonnegro1.position.x && peonblanco3.position.z==peonnegro1.position.z)&&
			  (peonblanco3.position.y==peonnegro1.position.y))
			{peonnegro1.position.y=100;peonnegro1.position.x=100;escena.remove(peonnegro1);}
			if((peonblanco3.position.x==peonnegro2.position.x && peonblanco3.position.z==peonnegro2.position.z)&&
			  (peonblanco3.position.y==peonnegro2.position.y))
			{peonnegro2.position.y=100;peonnegro2.position.x=100;escena.remove(peonnegro2);}
			if((peonblanco3.position.x==peonnegro3.position.x && peonblanco3.position.z==peonnegro3.position.z)&&
			  (peonblanco3.position.y==peonnegro3.position.y))
			{peonnegro3.position.y=100;peonnegro3.position.x=100;escena.remove(peonnegro3);}
			if((peonblanco3.position.x==peonnegro4.position.x && peonblanco3.position.z==peonnegro4.position.z)&&
			  (peonblanco3.position.y==peonnegro4.position.y))
			{peonnegro4.position.y=100;peonnegro4.position.x=100;escena.remove(peonnegro4);}
			if((peonblanco3.position.x==peonnegro5.position.x && peonblanco3.position.z==peonnegro5.position.z)&&
			  (peonblanco3.position.y==peonnegro5.position.y))
			{peonnegro5.position.y=100;peonnegro5.position.x=100;escena.remove(peonnegro5);}
			if((peonblanco3.position.x==peonnegro6.position.x && peonblanco3.position.z==peonnegro6.position.z)&&
			  (peonblanco3.position.y==peonnegro6.position.y))
			{peonnegro6.position.y=100;peonnegro6.position.x=100;escena.remove(peonnegro6);}
			if((peonblanco3.position.x==peonnegro7.position.x && peonblanco3.position.z==peonnegro7.position.z)&&
			  (peonblanco3.position.y==peonnegro7.position.y))
			{peonnegro7.position.y=100;peonnegro7.position.x=100;escena.remove(peonnegro7);}
			if((peonblanco3.position.x==peonnegro8.position.x && peonblanco3.position.z==peonnegro8.position.z)&&
			  (peonblanco3.position.y==peonnegro8.position.y))
			{peonnegro8.position.y=100;peonnegro8.position.x=100;escena.remove(peonnegro8);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((peonblanco3.position.x==torreblanca1.position.x && peonblanco3.position.z==torreblanca1.position.z)||
			   (peonblanco3.position.x==peonblanco2.position.x && peonblanco3.position.z==peonblanco2.position.z))||
			   (peonblanco3.position.x==peonblanco1.position.x && peonblanco3.position.z==peonblanco1.position.z))||
			   (peonblanco3.position.x==peonblanco4.position.x && peonblanco3.position.z==peonblanco4.position.z))||
			   (peonblanco3.position.x==peonblanco5.position.x && peonblanco3.position.z==peonblanco5.position.z))||
			   (peonblanco3.position.x==peonblanco6.position.x && peonblanco3.position.z==peonblanco6.position.z))||
			   (peonblanco3.position.x==peonblanco7.position.x && peonblanco3.position.z==peonblanco7.position.z))||
			   (peonblanco3.position.x==peonblanco8.position.x && peonblanco3.position.z==peonblanco8.position.z))||
			   (peonblanco3.position.x==torreblanca2.position.x && peonblanco3.position.z==torreblanca2.position.z))||
			   (peonblanco3.position.x==alfilblanco1.position.x && peonblanco3.position.z==alfilblanco1.position.z))||
			   (peonblanco3.position.x==alfilblanco2.position.x && peonblanco3.position.z==alfilblanco2.position.z))||
			   (peonblanco3.position.x==caballoblanco1.position.x && peonblanco3.position.z==caballoblanco1.position.z))||
			   (peonblanco3.position.x==caballoblanco2.position.x && peonblanco3.position.z==caballoblanco2.position.z))||
			   (peonblanco3.position.x==reyblanco.position.x && peonblanco3.position.z==reyblanco.position.z))||
			   (peonblanco3.position.x==reinablanca.position.x && peonblanco3.position.z==reinablanca.position.z)){
				alert("No puedes comer piezas del mismo color");
				peonblanco3.position.x=bloquerojo.position.x;peonblanco3.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if peonblanco3
		  ///////////////////////////////////Peon blanco 4//////////////////////////////////////////////////////////////////
		  if (peonblanco4.position.x===bloquerojo.position.x && peonblanco4.position.z===bloquerojo.position.z){
		    var bvpb4=bloqueverde;//Bloqueverdetorreblanca1

		    PeonBlanco.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvpb4,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
		      else
			{this.colision = 0;this.step=0.25;}
		    }//fin prototype sense

		    PeonBlanco.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(peonblanco4.position.x<bvpb4.position.x)
			  peonblanco4.position.x += this.step;
			else
			  peonblanco4.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(peonblanco4.position.z<bvpb4.position.z)
			  peonblanco4.position.z += this.step;
			else
			  peonblanco4.position.z -= this.step;
		      }//fin if posicion z
			if((peonblanco4.position.x==torrenegra1.position.x && peonblanco4.position.z==torrenegra1.position.z)&&
			  (peonblanco4.position.y==torrenegra1.position.y))
			{torrenegra1.position.y=100;torrenegra1.position.x=100;escena.remove(torrenegra1);}
			if((peonblanco4.position.x==torrenegra2.position.x && peonblanco4.position.z==torrenegra2.position.z)&&
			  (peonblanco4.position.y==torrenegra2.position.y))
			{torrenegra2.position.y=100;torrenegra2.position.x=100;escena.remove(torrenegra2);}
			if((peonblanco4.position.x==caballonegro1.position.x && peonblanco4.position.z==caballonegro1.position.z)&&
			  (peonblanco4.position.y==caballonegro1.position.y))
			{caballonegro1.position.y=100;caballonegro1.position.x=100;escena.remove(caballonegro1);}
			if((peonblanco4.position.x==caballonegro2.position.x && peonblanco4.position.z==caballonegro2.position.z)&&
			  (peonblanco4.position.y==caballonegro2.position.y))
			{caballonegro2.position.y=100;caballonegro2.position.x=100;escena.remove(caballonegro2);}
			if((peonblanco4.position.x==alfilnegro1.position.x && peonblanco4.position.z==alfilnegro1.position.z)&&
			  (peonblanco4.position.y==alfilnegro1.position.y))
			{alfilnegro1.position.y=100;alfilnegro1.position.x=100;escena.remove(alfilnegro1);}
			if((peonblanco4.position.x==alfilnegro2.position.x && peonblanco4.position.z==alfilnegro2.position.z)&&
			  (peonblanco4.position.y==alfilnegro2.position.y))
			{alfilnegro2.position.y=100;alfilnegro2.position.x=100;escena.remove(alfilnegro2);}
			if((peonblanco4.position.x==reinanegra.position.x && peonblanco4.position.z==reinanegra.position.z)&&
			  (peonblanco4.position.y==reinanegra.position.y))
			{reinanegra.position.y=100;reinanegra.position.x=100;escena.remove(reinanegra);}
			if((peonblanco4.position.x==reynegro.position.x && peonblanco4.position.z==reynegro.position.z)&&
			  (peonblanco4.position.y==reynegro.position.y))
			{reynegro.position.y=100;reynegro.position.x=100;escena.remove(reynegro);}
			if((peonblanco4.position.x==peonnegro1.position.x && peonblanco4.position.z==peonnegro1.position.z)&&
			  (peonblanco4.position.y==peonnegro1.position.y))
			{peonnegro1.position.y=100;peonnegro1.position.x=100;escena.remove(peonnegro1);}
			if((peonblanco4.position.x==peonnegro2.position.x && peonblanco4.position.z==peonnegro2.position.z)&&
			  (peonblanco4.position.y==peonnegro2.position.y))
			{peonnegro2.position.y=100;peonnegro2.position.x=100;escena.remove(peonnegro2);}
			if((peonblanco4.position.x==peonnegro3.position.x && peonblanco4.position.z==peonnegro3.position.z)&&
			  (peonblanco4.position.y==peonnegro3.position.y))
			{peonnegro3.position.y=100;peonnegro3.position.x=100;escena.remove(peonnegro3);}
			if((peonblanco4.position.x==peonnegro4.position.x && peonblanco4.position.z==peonnegro4.position.z)&&
			  (peonblanco4.position.y==peonnegro4.position.y))
			{peonnegro4.position.y=100;peonnegro4.position.x=100;escena.remove(peonnegro4);}
			if((peonblanco4.position.x==peonnegro5.position.x && peonblanco4.position.z==peonnegro5.position.z)&&
			  (peonblanco4.position.y==peonnegro5.position.y))
			{peonnegro5.position.y=100;peonnegro5.position.x=100;escena.remove(peonnegro5);}
			if((peonblanco4.position.x==peonnegro6.position.x && peonblanco4.position.z==peonnegro6.position.z)&&
			  (peonblanco4.position.y==peonnegro6.position.y))
			{peonnegro6.position.y=100;peonnegro6.position.x=100;escena.remove(peonnegro6);}
			if((peonblanco4.position.x==peonnegro7.position.x && peonblanco4.position.z==peonnegro7.position.z)&&
			  (peonblanco4.position.y==peonnegro7.position.y))
			{peonnegro7.position.y=100;peonnegro7.position.x=100;escena.remove(peonnegro7);}
			if((peonblanco4.position.x==peonnegro8.position.x && peonblanco4.position.z==peonnegro8.position.z)&&
			  (peonblanco4.position.y==peonnegro8.position.y))
			{peonnegro8.position.y=100;peonnegro8.position.x=100;escena.remove(peonnegro8);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((peonblanco4.position.x==torreblanca1.position.x && peonblanco4.position.z==torreblanca1.position.z)||
			   (peonblanco4.position.x==peonblanco2.position.x && peonblanco4.position.z==peonblanco2.position.z))||
			   (peonblanco4.position.x==peonblanco3.position.x && peonblanco4.position.z==peonblanco3.position.z))||
			   (peonblanco4.position.x==peonblanco1.position.x && peonblanco4.position.z==peonblanco1.position.z))||
			   (peonblanco4.position.x==peonblanco5.position.x && peonblanco4.position.z==peonblanco5.position.z))||
			   (peonblanco4.position.x==peonblanco6.position.x && peonblanco4.position.z==peonblanco6.position.z))||
			   (peonblanco4.position.x==peonblanco7.position.x && peonblanco4.position.z==peonblanco7.position.z))||
			   (peonblanco4.position.x==peonblanco8.position.x && peonblanco4.position.z==peonblanco8.position.z))||
			   (peonblanco4.position.x==torreblanca2.position.x && peonblanco4.position.z==torreblanca2.position.z))||
			   (peonblanco4.position.x==alfilblanco1.position.x && peonblanco4.position.z==alfilblanco1.position.z))||
			   (peonblanco4.position.x==alfilblanco2.position.x && peonblanco4.position.z==alfilblanco2.position.z))||
			   (peonblanco4.position.x==caballoblanco1.position.x && peonblanco4.position.z==caballoblanco1.position.z))||
			   (peonblanco4.position.x==caballoblanco2.position.x && peonblanco4.position.z==caballoblanco2.position.z))||
			   (peonblanco4.position.x==reyblanco.position.x && peonblanco4.position.z==reyblanco.position.z))||
			   (peonblanco4.position.x==reinablanca.position.x && peonblanco4.position.z==reinablanca.position.z)){
				alert("No puedes comer piezas del mismo color");
				peonblanco4.position.x=bloquerojo.position.x;peonblanco4.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if peonblanco4
		  ///////////////////////////////////Peon blanco 5//////////////////////////////////////////////////////////////////
		  if (peonblanco5.position.x===bloquerojo.position.x && peonblanco5.position.z===bloquerojo.position.z){
		    var bvpb5=bloqueverde;//Bloqueverdetorreblanca1

		    PeonBlanco.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvpb5,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
		      else
			{this.colision = 0;this.step=0.25;}
		    }//fin prototype sense

		    PeonBlanco.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(peonblanco5.position.x<bvpb5.position.x)
			  peonblanco5.position.x += this.step;
			else
			  peonblanco5.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(peonblanco5.position.z<bvpb5.position.z)
			  peonblanco5.position.z += this.step;
			else
			  peonblanco5.position.z -= this.step;
		      }//fin if posicion z
			if((peonblanco5.position.x==torrenegra1.position.x && peonblanco5.position.z==torrenegra1.position.z)&&
			  (peonblanco5.position.y==torrenegra1.position.y))
			{torrenegra1.position.y=100;torrenegra1.position.x=100;escena.remove(torrenegra1);}
			if((peonblanco5.position.x==torrenegra2.position.x && peonblanco5.position.z==torrenegra2.position.z)&&
			  (peonblanco5.position.y==torrenegra2.position.y))
			{torrenegra2.position.y=100;torrenegra2.position.x=100;escena.remove(torrenegra2);}
			if((peonblanco5.position.x==caballonegro1.position.x && peonblanco5.position.z==caballonegro1.position.z)&&
			  (peonblanco5.position.y==caballonegro1.position.y))
			{caballonegro1.position.y=100;caballonegro1.position.x=100;escena.remove(caballonegro1);}
			if((peonblanco5.position.x==caballonegro2.position.x && peonblanco5.position.z==caballonegro2.position.z)&&
			  (peonblanco5.position.y==caballonegro2.position.y))
			{caballonegro2.position.y=100;caballonegro2.position.x=100;escena.remove(caballonegro2);}
			if((peonblanco5.position.x==alfilnegro1.position.x && peonblanco5.position.z==alfilnegro1.position.z)&&
			  (peonblanco5.position.y==alfilnegro1.position.y))
			{alfilnegro1.position.y=100;alfilnegro1.position.x=100;escena.remove(alfilnegro1);}
			if((peonblanco5.position.x==alfilnegro2.position.x && peonblanco5.position.z==alfilnegro2.position.z)&&
			  (peonblanco5.position.y==alfilnegro2.position.y))
			{alfilnegro2.position.y=100;alfilnegro2.position.x=100;escena.remove(alfilnegro2);}
			if((peonblanco5.position.x==reinanegra.position.x && peonblanco5.position.z==reinanegra.position.z)&&
			  (peonblanco5.position.y==reinanegra.position.y))
			{reinanegra.position.y=100;reinanegra.position.x=100;escena.remove(reinanegra);}
			if((peonblanco5.position.x==reynegro.position.x && peonblanco5.position.z==reynegro.position.z)&&
			  (peonblanco5.position.y==reynegro.position.y))
			{reynegro.position.y=100;reynegro.position.x=100;escena.remove(reynegro);}
			if((peonblanco5.position.x==peonnegro1.position.x && peonblanco5.position.z==peonnegro1.position.z)&&
			  (peonblanco5.position.y==peonnegro1.position.y))
			{peonnegro1.position.y=100;peonnegro1.position.x=100;escena.remove(peonnegro1);}
			if((peonblanco5.position.x==peonnegro2.position.x && peonblanco5.position.z==peonnegro2.position.z)&&
			  (peonblanco5.position.y==peonnegro2.position.y))
			{peonnegro2.position.y=100;peonnegro2.position.x=100;escena.remove(peonnegro2);}
			if((peonblanco5.position.x==peonnegro3.position.x && peonblanco5.position.z==peonnegro3.position.z)&&
			  (peonblanco5.position.y==peonnegro3.position.y))
			{peonnegro3.position.y=100;peonnegro3.position.x=100;escena.remove(peonnegro3);}
			if((peonblanco5.position.x==peonnegro4.position.x && peonblanco5.position.z==peonnegro4.position.z)&&
			  (peonblanco5.position.y==peonnegro4.position.y))
			{peonnegro4.position.y=100;peonnegro4.position.x=100;escena.remove(peonnegro4);}
			if((peonblanco5.position.x==peonnegro5.position.x && peonblanco5.position.z==peonnegro5.position.z)&&
			  (peonblanco5.position.y==peonnegro5.position.y))
			{peonnegro5.position.y=100;peonnegro5.position.x=100;escena.remove(peonnegro5);}
			if((peonblanco5.position.x==peonnegro6.position.x && peonblanco5.position.z==peonnegro6.position.z)&&
			  (peonblanco5.position.y==peonnegro6.position.y))
			{peonnegro6.position.y=100;peonnegro6.position.x=100;escena.remove(peonnegro6);}
			if((peonblanco5.position.x==peonnegro7.position.x && peonblanco5.position.z==peonnegro7.position.z)&&
			  (peonblanco5.position.y==peonnegro7.position.y))
			{peonnegro7.position.y=100;peonnegro7.position.x=100;escena.remove(peonnegro7);}
			if((peonblanco5.position.x==peonnegro8.position.x && peonblanco5.position.z==peonnegro8.position.z)&&
			  (peonblanco5.position.y==peonnegro8.position.y))
			{peonnegro8.position.y=100;peonnegro8.position.x=100;escena.remove(peonnegro8);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((peonblanco5.position.x==torreblanca1.position.x && peonblanco5.position.z==torreblanca1.position.z)||
			   (peonblanco5.position.x==peonblanco2.position.x && peonblanco5.position.z==peonblanco2.position.z))||
			   (peonblanco5.position.x==peonblanco3.position.x && peonblanco5.position.z==peonblanco3.position.z))||
			   (peonblanco5.position.x==peonblanco4.position.x && peonblanco5.position.z==peonblanco4.position.z))||
			   (peonblanco5.position.x==peonblanco1.position.x && peonblanco5.position.z==peonblanco1.position.z))||
			   (peonblanco5.position.x==peonblanco6.position.x && peonblanco5.position.z==peonblanco6.position.z))||
			   (peonblanco5.position.x==peonblanco7.position.x && peonblanco5.position.z==peonblanco7.position.z))||
			   (peonblanco5.position.x==peonblanco8.position.x && peonblanco5.position.z==peonblanco8.position.z))||
			   (peonblanco5.position.x==torreblanca2.position.x && peonblanco5.position.z==torreblanca2.position.z))||
			   (peonblanco5.position.x==alfilblanco1.position.x && peonblanco5.position.z==alfilblanco1.position.z))||
			   (peonblanco5.position.x==alfilblanco2.position.x && peonblanco5.position.z==alfilblanco2.position.z))||
			   (peonblanco5.position.x==caballoblanco1.position.x && peonblanco5.position.z==caballoblanco1.position.z))||
			   (peonblanco5.position.x==caballoblanco2.position.x && peonblanco5.position.z==caballoblanco2.position.z))||
			   (peonblanco5.position.x==reyblanco.position.x && peonblanco5.position.z==reyblanco.position.z))||
			   (peonblanco5.position.x==reinablanca.position.x && peonblanco5.position.z==reinablanca.position.z)){
				alert("No puedes comer piezas del mismo color");
				peonblanco5.position.x=bloquerojo.position.x;peonblanco5.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if peonblanco5
		  ///////////////////////////////////Peon blanco 6//////////////////////////////////////////////////////////////////
		  if (peonblanco6.position.x===bloquerojo.position.x && peonblanco6.position.z===bloquerojo.position.z){
		    var bvpb6=bloqueverde;//Bloqueverdetorreblanca1

		    PeonBlanco.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvpb6,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
		      else
			{this.colision = 0;this.step=0.25;}
		    }//fin prototype sense

		    PeonBlanco.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(peonblanco6.position.x<bvpb6.position.x)
			  peonblanco6.position.x += this.step;
			else
			  peonblanco6.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(peonblanco6.position.z<bvpb6.position.z)
			  peonblanco6.position.z += this.step;
			else
			  peonblanco6.position.z -= this.step;
		      }//fin if posicion z
			if((peonblanco6.position.x==torrenegra1.position.x && peonblanco6.position.z==torrenegra1.position.z)&&
			  (peonblanco6.position.y==torrenegra1.position.y))
			{torrenegra1.position.y=100;torrenegra1.position.x=100;escena.remove(torrenegra1);}
			if((peonblanco6.position.x==torrenegra2.position.x && peonblanco6.position.z==torrenegra2.position.z)&&
			  (peonblanco6.position.y==torrenegra2.position.y))
			{torrenegra2.position.y=100;torrenegra2.position.x=100;escena.remove(torrenegra2);}
			if((peonblanco6.position.x==caballonegro1.position.x && peonblanco6.position.z==caballonegro1.position.z)&&
			  (peonblanco6.position.y==caballonegro1.position.y))
			{caballonegro1.position.y=100;caballonegro1.position.x=100;escena.remove(caballonegro1);}
			if((peonblanco6.position.x==caballonegro2.position.x && peonblanco6.position.z==caballonegro2.position.z)&&
			  (peonblanco6.position.y==caballonegro2.position.y))
			{caballonegro2.position.y=100;caballonegro2.position.x=100;escena.remove(caballonegro2);}
			if((peonblanco6.position.x==alfilnegro1.position.x && peonblanco6.position.z==alfilnegro1.position.z)&&
			  (peonblanco6.position.y==alfilnegro1.position.y))
			{alfilnegro1.position.y=100;alfilnegro1.position.x=100;escena.remove(alfilnegro1);}
			if((peonblanco6.position.x==alfilnegro2.position.x && peonblanco6.position.z==alfilnegro2.position.z)&&
			  (peonblanco6.position.y==alfilnegro2.position.y))
			{alfilnegro2.position.y=100;alfilnegro2.position.x=100;escena.remove(alfilnegro2);}
			if((peonblanco6.position.x==reinanegra.position.x && peonblanco6.position.z==reinanegra.position.z)&&
			  (peonblanco6.position.y==reinanegra.position.y))
			{reinanegra.position.y=100;reinanegra.position.x=100;escena.remove(reinanegra);}
			if((peonblanco6.position.x==reynegro.position.x && peonblanco6.position.z==reynegro.position.z)&&
			  (peonblanco6.position.y==reynegro.position.y))
			{reynegro.position.y=100;reynegro.position.x=100;escena.remove(reynegro);}
			if((peonblanco6.position.x==peonnegro1.position.x && peonblanco6.position.z==peonnegro1.position.z)&&
			  (peonblanco6.position.y==peonnegro1.position.y))
			{peonnegro1.position.y=100;peonnegro1.position.x=100;escena.remove(peonnegro1);}
			if((peonblanco6.position.x==peonnegro2.position.x && peonblanco6.position.z==peonnegro2.position.z)&&
			  (peonblanco6.position.y==peonnegro2.position.y))
			{peonnegro2.position.y=100;peonnegro2.position.x=100;escena.remove(peonnegro2);}
			if((peonblanco6.position.x==peonnegro3.position.x && peonblanco6.position.z==peonnegro3.position.z)&&
			  (peonblanco6.position.y==peonnegro3.position.y))
			{peonnegro3.position.y=100;peonnegro3.position.x=100;escena.remove(peonnegro3);}
			if((peonblanco6.position.x==peonnegro4.position.x && peonblanco6.position.z==peonnegro4.position.z)&&
			  (peonblanco6.position.y==peonnegro4.position.y))
			{peonnegro4.position.y=100;peonnegro4.position.x=100;escena.remove(peonnegro4);}
			if((peonblanco6.position.x==peonnegro5.position.x && peonblanco6.position.z==peonnegro5.position.z)&&
			  (peonblanco6.position.y==peonnegro5.position.y))
			{peonnegro5.position.y=100;peonnegro5.position.x=100;escena.remove(peonnegro5);}
			if((peonblanco6.position.x==peonnegro6.position.x && peonblanco6.position.z==peonnegro6.position.z)&&
			  (peonblanco6.position.y==peonnegro6.position.y))
			{peonnegro6.position.y=100;peonnegro6.position.x=100;escena.remove(peonnegro6);}
			if((peonblanco6.position.x==peonnegro7.position.x && peonblanco6.position.z==peonnegro7.position.z)&&
			  (peonblanco6.position.y==peonnegro7.position.y))
			{peonnegro7.position.y=100;peonnegro7.position.x=100;escena.remove(peonnegro7);}
			if((peonblanco6.position.x==peonnegro8.position.x && peonblanco6.position.z==peonnegro8.position.z)&&
			  (peonblanco6.position.y==peonnegro8.position.y))
			{peonnegro8.position.y=100;peonnegro8.position.x=100;escena.remove(peonnegro8);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((peonblanco6.position.x==torreblanca1.position.x && peonblanco6.position.z==torreblanca1.position.z)||
			   (peonblanco6.position.x==peonblanco2.position.x && peonblanco6.position.z==peonblanco2.position.z))||
			   (peonblanco6.position.x==peonblanco3.position.x && peonblanco6.position.z==peonblanco3.position.z))||
			   (peonblanco6.position.x==peonblanco4.position.x && peonblanco6.position.z==peonblanco4.position.z))||
			   (peonblanco6.position.x==peonblanco5.position.x && peonblanco6.position.z==peonblanco5.position.z))||
			   (peonblanco6.position.x==peonblanco1.position.x && peonblanco6.position.z==peonblanco1.position.z))||
			   (peonblanco6.position.x==peonblanco7.position.x && peonblanco6.position.z==peonblanco7.position.z))||
			   (peonblanco6.position.x==peonblanco8.position.x && peonblanco6.position.z==peonblanco8.position.z))||
			   (peonblanco6.position.x==torreblanca2.position.x && peonblanco6.position.z==torreblanca2.position.z))||
			   (peonblanco6.position.x==alfilblanco1.position.x && peonblanco6.position.z==alfilblanco1.position.z))||
			   (peonblanco6.position.x==alfilblanco2.position.x && peonblanco6.position.z==alfilblanco2.position.z))||
			   (peonblanco6.position.x==caballoblanco1.position.x && peonblanco6.position.z==caballoblanco1.position.z))||
			   (peonblanco6.position.x==caballoblanco2.position.x && peonblanco6.position.z==caballoblanco2.position.z))||
			   (peonblanco6.position.x==reyblanco.position.x && peonblanco6.position.z==reyblanco.position.z))||
			   (peonblanco6.position.x==reinablanca.position.x && peonblanco6.position.z==reinablanca.position.z)){
				alert("No puedes comer piezas del mismo color");
				peonblanco6.position.x=bloquerojo.position.x;peonblanco6.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if peonblanco6
		  ///////////////////////////////////Peon blanco 7//////////////////////////////////////////////////////////////////
		  if (peonblanco7.position.x===bloquerojo.position.x && peonblanco7.position.z===bloquerojo.position.z){
		    var bvpb7=bloqueverde;//Bloqueverdetorreblanca1

		    PeonBlanco.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvpb7,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
		      else
			{this.colision = 0;this.step=0.25;}
		    }//fin prototype sense

		    PeonBlanco.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(peonblanco7.position.x<bvpb7.position.x)
			  peonblanco7.position.x += this.step;
			else
			  peonblanco7.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(peonblanco7.position.z<bvpb7.position.z)
			  peonblanco7.position.z += this.step;
			else
			  peonblanco7.position.z -= this.step;
		      }//fin if posicion z
			if((peonblanco7.position.x==torrenegra1.position.x && peonblanco7.position.z==torrenegra1.position.z)&&
			  (peonblanco7.position.y==torrenegra1.position.y))
			{torrenegra1.position.y=100;torrenegra1.position.x=100;escena.remove(torrenegra1);}
			if((peonblanco7.position.x==torrenegra2.position.x && peonblanco7.position.z==torrenegra2.position.z)&&
			  (peonblanco7.position.y==torrenegra2.position.y))
			{torrenegra2.position.y=100;torrenegra2.position.x=100;escena.remove(torrenegra2);}
			if((peonblanco7.position.x==caballonegro1.position.x && peonblanco7.position.z==caballonegro1.position.z)&&
			  (peonblanco7.position.y==caballonegro1.position.y))
			{caballonegro1.position.y=100;caballonegro1.position.x=100;escena.remove(caballonegro1);}
			if((peonblanco7.position.x==caballonegro2.position.x && peonblanco7.position.z==caballonegro2.position.z)&&
			  (peonblanco7.position.y==caballonegro2.position.y))
			{caballonegro2.position.y=100;caballonegro2.position.x=100;escena.remove(caballonegro2);}
			if((peonblanco7.position.x==alfilnegro1.position.x && peonblanco7.position.z==alfilnegro1.position.z)&&
			  (peonblanco7.position.y==alfilnegro1.position.y))
			{alfilnegro1.position.y=100;alfilnegro1.position.x=100;escena.remove(alfilnegro1);}
			if((peonblanco7.position.x==alfilnegro2.position.x && peonblanco7.position.z==alfilnegro2.position.z)&&
			  (peonblanco7.position.y==alfilnegro2.position.y))
			{alfilnegro2.position.y=100;alfilnegro2.position.x=100;escena.remove(alfilnegro2);}
			if((peonblanco7.position.x==reinanegra.position.x && peonblanco7.position.z==reinanegra.position.z)&&
			  (peonblanco7.position.y==reinanegra.position.y))
			{reinanegra.position.y=100;reinanegra.position.x=100;escena.remove(reinanegra);}
			if((peonblanco7.position.x==reynegro.position.x && peonblanco7.position.z==reynegro.position.z)&&
			  (peonblanco7.position.y==reynegro.position.y))
			{reynegro.position.y=100;reynegro.position.x=100;escena.remove(reynegro);}
			if((peonblanco7.position.x==peonnegro1.position.x && peonblanco7.position.z==peonnegro1.position.z)&&
			  (peonblanco7.position.y==peonnegro1.position.y))
			{peonnegro1.position.y=100;peonnegro1.position.x=100;escena.remove(peonnegro1);}
			if((peonblanco7.position.x==peonnegro2.position.x && peonblanco7.position.z==peonnegro2.position.z)&&
			  (peonblanco7.position.y==peonnegro2.position.y))
			{peonnegro2.position.y=100;peonnegro2.position.x=100;escena.remove(peonnegro2);}
			if((peonblanco7.position.x==peonnegro3.position.x && peonblanco7.position.z==peonnegro3.position.z)&&
			  (peonblanco7.position.y==peonnegro3.position.y))
			{peonengro3.position.y=100;peonnegro3.position.x=100;escena.remove(peonnegro3);}
			if((peonblanco7.position.x==peonnegro4.position.x && peonblanco7.position.z==peonnegro4.position.z)&&
			  (peonblanco7.position.y==peonnegro4.position.y))
			{peonnegro4.position.y=100;peonnegro4.position.x=100;escena.remove(peonnegro4);}
			if((peonblanco7.position.x==peonnegro5.position.x && peonblanco7.position.z==peonnegro5.position.z)&&
			  (peonblanco7.position.y==peonnegro5.position.y))
			{peonnegro5.position.y=100;peonnegro5.position.x=100;escena.remove(peonnegro5);}
			if((peonblanco7.position.x==peonnegro6.position.x && peonblanco7.position.z==peonnegro6.position.z)&&
			  (peonblanco7.position.y==peonnegro6.position.y))
			{peonnegro6.position.y=100;peonnegro6.position.x=100;escena.remove(peonnegro6);}
			if((peonblanco7.position.x==peonnegro7.position.x && peonblanco7.position.z==peonnegro7.position.z)&&
			  (peonblanco7.position.y==peonnegro7.position.y))
			{peonengro7.position.y=100;peonnegro7.position.x=100;escena.remove(peonnegro7);}
			if((peonblanco7.position.x==peonnegro8.position.x && peonblanco7.position.z==peonnegro8.position.z)&&
			  (peonblanco7.position.y==peonnegro8.position.y))
			{peonnegro8.position.y=100;peonnegro8.position.x=100;escena.remove(peonnegro8);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((peonblanco7.position.x==torreblanca1.position.x && peonblanco7.position.z==torreblanca1.position.z)||
			   (peonblanco7.position.x==peonblanco2.position.x && peonblanco7.position.z==peonblanco2.position.z))||
			   (peonblanco7.position.x==peonblanco3.position.x && peonblanco7.position.z==peonblanco3.position.z))||
			   (peonblanco7.position.x==peonblanco4.position.x && peonblanco7.position.z==peonblanco4.position.z))||
			   (peonblanco7.position.x==peonblanco5.position.x && peonblanco7.position.z==peonblanco5.position.z))||
			   (peonblanco7.position.x==peonblanco6.position.x && peonblanco7.position.z==peonblanco6.position.z))||
			   (peonblanco7.position.x==peonblanco1.position.x && peonblanco7.position.z==peonblanco1.position.z))||
			   (peonblanco7.position.x==peonblanco8.position.x && peonblanco7.position.z==peonblanco8.position.z))||
			   (peonblanco7.position.x==torreblanca2.position.x && peonblanco7.position.z==torreblanca2.position.z))||
			   (peonblanco7.position.x==alfilblanco1.position.x && peonblanco7.position.z==alfilblanco1.position.z))||
			   (peonblanco7.position.x==alfilblanco2.position.x && peonblanco7.position.z==alfilblanco2.position.z))||
			   (peonblanco7.position.x==caballoblanco1.position.x && peonblanco7.position.z==caballoblanco1.position.z))||
			   (peonblanco7.position.x==caballoblanco2.position.x && peonblanco7.position.z==caballoblanco2.position.z))||
			   (peonblanco7.position.x==reyblanco.position.x && peonblanco7.position.z==reyblanco.position.z))||
			   (peonblanco7.position.x==reinablanca.position.x && peonblanco7.position.z==reinablanca.position.z)){
				alert("No puedes comer piezas del mismo color");
				peonblanco7.position.x=bloquerojo.position.x;peonblanco7.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if peonblanco7
		  ///////////////////////////////////Peon blanco 8//////////////////////////////////////////////////////////////////
		  if (peonblanco8.position.x===bloquerojo.position.x && peonblanco8.position.z===bloquerojo.position.z){
		    var bvpb8=bloqueverde;//Bloqueverdetorreblanca1

		    PeonBlanco.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvpb8,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
		      else
			{this.colision = 0;this.step=0.25;}
		    }//fin prototype sense

		    PeonBlanco.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(peonblanco8.position.x<bvpb8.position.x)
			  peonblanco8.position.x += this.step;
			else
			  peonblanco8.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(peonblanco8.position.z<bvpb8.position.z)
			  peonblanco8.position.z += this.step;
			else
			  peonblanco8.position.z -= this.step;
		      }//fin if posicion z
			if((peonblanco8.position.x==torrenegra1.position.x && peonblanco8.position.z==torrenegra1.position.z)&&
			  (peonblanco8.position.y==torrenegra1.position.y))
			{torrenegra1.position.y=100;torrenegra1.position.x=100;escena.remove(torrenegra1);}
			if((peonblanco8.position.x==torrenegra2.position.x && peonblanco8.position.z==torrenegra2.position.z)&&
			  (peonblanco8.position.y==torrenegra2.position.y))
			{torrenegra2.position.y=100;torrenegra2.position.x=100;escena.remove(torrenegra2);}
			if((peonblanco8.position.x==caballonegro1.position.x && peonblanco8.position.z==caballonegro1.position.z)&&
			  (peonblanco8.position.y==caballonegro1.position.y))
			{caballonegro1.position.y=100;caballonegro1.position.x=100;escena.remove(caballonegro1);}
			if((peonblanco8.position.x==caballonegro2.position.x && peonblanco8.position.z==caballonegro2.position.z)&&
			  (peonblanco8.position.y==caballonegro2.position.y))
			{caballonegro2.position.y=100;caballonegro2.position.x=100;escena.remove(caballonegro2);}
			if((peonblanco8.position.x==alfilnegro1.position.x && peonblanco8.position.z==alfilnegro1.position.z)&&
			  (peonblanco8.position.y==alfilnegro1.position.y))
			{alfilnegro1.position.y=100;alfilnegro1.position.x=100;escena.remove(alfilnegro1);}
			if((peonblanco8.position.x==alfilnegro2.position.x && peonblanco8.position.z==alfilnegro2.position.z)&&
			  (peonblanco8.position.y==alfilnegro2.position.y))
			{alfilnegro2.position.y=100;alfilnegro2.position.x=100;escena.remove(alfilnegro2);}
			if((peonblanco8.position.x==reinanegra.position.x && peonblanco8.position.z==reinanegra.position.z)&&
			  (peonblanco8.position.y==reinanegra.position.y))
			{reinanegra.position.y=100;reinanegra.position.x=100;escena.remove(reinanegra);}
			if((peonblanco8.position.x==reynegro.position.x && peonblanco8.position.z==reynegro.position.z)&&
			  (peonblanco8.position.y==reynegro.position.y))
			{reynegro.position.y=100;reynegro.position.x=100;escena.remove(reynegro);}
			if((peonblanco8.position.x==peonnegro1.position.x && peonblanco8.position.z==peonnegro1.position.z)&&
			  (peonblanco8.position.y==peonnegro1.position.y))
			{peonnegro1.position.y=100;peonnegro1.position.x=100;escena.remove(peonnegro1);}
			if((peonblanco8.position.x==peonnegro2.position.x && peonblanco8.position.z==peonnegro2.position.z)&&
			  (peonblanco8.position.y==peonnegro2.position.y))
			{peonnegro2.position.y=100;peonnegro2.position.x=100;escena.remove(peonnegro2);}
			if((peonblanco8.position.x==peonnegro3.position.x && peonblanco8.position.z==peonnegro3.position.z)&&
			  (peonblanco8.position.y==peonnegro3.position.y))
			{peonnegro3.position.y=100;peonnegro3.position.x=100;escena.remove(peonnegro3);}
			if((peonblanco8.position.x==peonnegro4.position.x && peonblanco8.position.z==peonnegro4.position.z)&&
			  (peonblanco8.position.y==peonnegro4.position.y))
			{peonnegro4.position.y=100;peonnegro4.position.x=100;escena.remove(peonnegro4);}
			if((peonblanco8.position.x==peonnegro5.position.x && peonblanco8.position.z==peonnegro5.position.z)&&
			  (peonblanco8.position.y==peonnegro5.position.y))
			{peonnegro5.position.y=100;peonnegro5.position.x=100;escena.remove(peonnegro5);}
			if((peonblanco8.position.x==peonnegro6.position.x && peonblanco8.position.z==peonnegro6.position.z)&&
			  (peonblanco8.position.y==peonnegro6.position.y))
			{peonnegro6.position.y=100;peonnegro6.position.x=100;escena.remove(peonnegro6);}
			if((peonblanco8.position.x==peonnegro7.position.x && peonblanco8.position.z==peonnegro7.position.z)&&
			  (peonblanco8.position.y==peonnegro7.position.y))
			{peonnegro7.position.y=100;peonnegro7.position.x=100;escena.remove(peonnegro7);}
			if((peonblanco8.position.x==peonnegro8.position.x && peonblanco8.position.z==peonnegro8.position.z)&&
			  (peonblanco8.position.y==peonnegro8.position.y))
			{peonnegro8.position.y=100;peonnegro8.position.x=100;escena.remove(peonnegro8);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((peonblanco8.position.x==torreblanca1.position.x && peonblanco8.position.z==torreblanca1.position.z)||
			   (peonblanco8.position.x==peonblanco2.position.x && peonblanco8.position.z==peonblanco2.position.z))||
			   (peonblanco8.position.x==peonblanco3.position.x && peonblanco8.position.z==peonblanco3.position.z))||
			   (peonblanco8.position.x==peonblanco4.position.x && peonblanco8.position.z==peonblanco4.position.z))||
			   (peonblanco8.position.x==peonblanco5.position.x && peonblanco8.position.z==peonblanco5.position.z))||
			   (peonblanco8.position.x==peonblanco6.position.x && peonblanco8.position.z==peonblanco6.position.z))||
			   (peonblanco8.position.x==peonblanco7.position.x && peonblanco8.position.z==peonblanco7.position.z))||
			   (peonblanco8.position.x==peonblanco1.position.x && peonblanco8.position.z==peonblanco1.position.z))||
			   (peonblanco8.position.x==torreblanca2.position.x && peonblanco8.position.z==torreblanca2.position.z))||
			   (peonblanco8.position.x==alfilblanco1.position.x && peonblanco8.position.z==alfilblanco1.position.z))||
			   (peonblanco8.position.x==alfilblanco2.position.x && peonblanco8.position.z==alfilblanco2.position.z))||
			   (peonblanco8.position.x==caballoblanco1.position.x && peonblanco8.position.z==caballoblanco1.position.z))||
			   (peonblanco8.position.x==caballoblanco2.position.x && peonblanco8.position.z==caballoblanco2.position.z))||
			   (peonblanco8.position.x==reyblanco.position.x && peonblanco8.position.z==reyblanco.position.z))||
			   (peonblanco8.position.x==reinablanca.position.x && peonblanco8.position.z==reinablanca.position.z)){
				alert("No puedes comer piezas del mismo color");
				peonblanco8.position.x=bloquerojo.position.x;peonblanco8.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if peonblanco8
		  ///////////////////////////////////Peon negro 1//////////////////////////////////////////////////////////////////
		  if (peonnegro1.position.x===bloquerojo.position.x && peonnegro1.position.z===bloquerojo.position.z){
		    var bvpn1=bloqueverde;//Bloqueverdetorreblanca1

		    PeonNegro.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvpn1,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
		      else
			{this.colision = 0;this.step=0.25;}
		    }//fin prototype sense

		    PeonNegro.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(peonnegro1.position.x<bvpn1.position.x)
			  peonnegro1.position.x += this.step;
			else
			  peonnegro1.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(peonnegro1.position.z<bvpn1.position.z)
			  peonnegro1.position.z += this.step;
			else
			  peonnegro1.position.z -= this.step;
		      }//fin if posicion z
			if((peonnegro1.position.x==torreblanca1.position.x && peonnegro1.position.z==torreblanca1.position.z)&&
			  (peonnegro1.position.y==torreblanca1.position.y))
			{torreblanca1.position.y=100;torreblanca1.position.x=100;escena.remove(torreblanca1);}
			if((peonnegro1.position.x==torreblanca2.position.x && peonnegro1.position.z==torreblanca2.position.z)&&
			  (peonnegro1.position.y==torreblanca2.position.y))
			{torreblanca2.position.y=100;torreblanca2.position.x=100;escena.remove(torreblanca2);}
			if((peonnegro1.position.x==caballoblanco1.position.x && peonnegro1.position.z==caballoblanco1.position.z)&&
			  (peonnegro1.position.y==caballoblanco1.position.y))
			{caballoblanco1.position.y=100;caballoblanco1.position.x=100;escena.remove(caballoblanco1);}
			if((peonnegro1.position.x==caballoblanco2.position.x && peonnegro1.position.z==caballoblanco2.position.z)&&
			  (peonnegro1.position.y==caballoblanco2.position.y))
			{caballoblanco2.position.y=100;caballoblanco2.position.x=100;escena.remove(caballoblanco2);}
			if((peonnegro1.position.x==alfilblanco1.position.x && peonnegro1.position.z==alfilblanco1.position.z)&&
			  (peonnegro1.position.y==alfilblanco1.position.y))
			{alfilblanco1.position.y=100;alfilblanco1.position.x=100;escena.remove(alfilblanco1);}
			if((peonnegro1.position.x==alfilblanco2.position.x && peonnegro1.position.z==alfilblanco2.position.z)&&
			  (peonnegro1.position.y==alfilblanco2.position.y))
			{alfilblanco2.position.y=100;alfilblanco2.position.x=100;escena.remove(alfilblanco2);}
			if((peonnegro1.position.x==reinablanca.position.x && peonnegro1.position.z==reinablanca.position.z)&&
			  (peonnegro1.position.y==reinablanca.position.y))
			{reinablanca.position.y=100;reinablanca.position.x=100;escena.remove(reinablanca);}
			if((peonnegro1.position.x==reyblanco.position.x && peonnegro1.position.z==reyblanco.position.z)&&
			  (peonnegro1.position.y==reyblanco.position.y))
			{reyblanco.position.y=100;reyblanco.position.x=100;escena.remove(reyblanco);}
			if((peonnegro1.position.x==peonblanco1.position.x && peonnegro1.position.z==peonblanco1.position.z)&&
			  (peonnegro1.position.y==peonblanco1.position.y))
			{peonblanco1.position.y=100;peonblanco1.position.x=100;escena.remove(peonblanco1);}
			if((peonnegro1.position.x==peonblanco2.position.x && peonnegro1.position.z==peonblanco2.position.z)&&
			  (peonnegro1.position.y==peonblanco2.position.y))
			{peonblanco2.position.y=100;peonblanco2.position.x=100;escena.remove(peonblanco2);}
			if((peonnegro1.position.x==peonblanco3.position.x && peonnegro1.position.z==peonblanco3.position.z)&&
			  (peonnegro1.position.y==peonblanco3.position.y))
			{peonblanco3.position.y=100;peonblanco3.position.x=100;escena.remove(peonblanco3);}
			if((peonnegro1.position.x==peonblanco4.position.x && peonnegro1.position.z==peonblanco4.position.z)&&
			  (peonnegro1.position.y==peonblanco4.position.y))
			{peonblanco4.position.y=100;peonblanco4.position.x=100;escena.remove(peonblanco4);}
			if((peonnegro1.position.x==peonblanco5.position.x && peonnegro1.position.z==peonblanco5.position.z)&&
			  (peonnegro1.position.y==peonblanco5.position.y))
			{peonblanco5.position.y=100;peonblanco5.position.x=100;escena.remove(peonblanco5);}
			if((peonnegro1.position.x==peonblanco6.position.x && peonnegro1.position.z==peonblanco6.position.z)&&
			  (peonnegro1.position.y==peonblanco6.position.y))
			{peonblanco6.position.y=100;peonblanco6.position.x=100;escena.remove(peonblanco6);}
			if((peonnegro1.position.x==peonblanco7.position.x && peonnegro1.position.z==peonblanco7.position.z)&&
			  (peonnegro1.position.y==peonblanco7.position.y))
			{peonblanco7.position.y=100;peonblanco7.position.x=100;escena.remove(peonblanco7);}
			if((peonnegro1.position.x==peonblanco8.position.x && peonnegro1.position.z==peonblanco8.position.z)&&
			  (peonnegro1.position.y==peonblanco8.position.y))
			{peonblanco8.position.y=100;peonblanco8.position.x=100;escena.remove(peonblanco8);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((peonnegro1.position.x==torrenegra1.position.x && peonnegro1.position.z==torrenegra1.position.z)||
			   (peonnegro1.position.x==peonnegro2.position.x && peonnegro1.position.z==peonnegro2.position.z))||
			   (peonnegro1.position.x==peonnegro3.position.x && peonnegro1.position.z==peonnegro3.position.z))||
			   (peonnegro1.position.x==peonnegro4.position.x && peonnegro1.position.z==peonnegro4.position.z))||
			   (peonnegro1.position.x==peonnegro5.position.x && peonnegro1.position.z==peonnegro5.position.z))||
			   (peonnegro1.position.x==peonnegro6.position.x && peonnegro1.position.z==peonnegro6.position.z))||
			   (peonnegro1.position.x==peonnegro7.position.x && peonnegro1.position.z==peonnegro7.position.z))||
			   (peonnegro1.position.x==peonnegro8.position.x && peonnegro1.position.z==peonnegro8.position.z))||
			   (peonnegro1.position.x==torrenegra2.position.x && peonnegro1.position.z==torrenegra2.position.z))||
			   (peonnegro1.position.x==alfilnegro1.position.x && peonnegro1.position.z==alfilnegro1.position.z))||
			   (peonnegro1.position.x==alfilnegro2.position.x && peonnegro1.position.z==alfilnegro2.position.z))||
			   (peonnegro1.position.x==caballonegro1.position.x && peonnegro1.position.z==caballonegro1.position.z))||
			   (peonnegro1.position.x==caballonegro2.position.x && peonnegro1.position.z==caballonegro2.position.z))||
			   (peonnegro1.position.x==reynegro.position.x && peonnegro1.position.z==reynegro.position.z))||
			   (peonnegro1.position.x==reinanegra.position.x && peonnegro1.position.z==reinanegra.position.z)){
				alert("No puedes comer piezas del mismo color");
				peonnegro1.position.x=bloquerojo.position.x;peonnegro1.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if peonnegro1
		  ///////////////////////////////////Peon negro 2//////////////////////////////////////////////////////////////////
		  if (peonnegro2.position.x===bloquerojo.position.x && peonnegro2.position.z===bloquerojo.position.z){
		    var bvpn2=bloqueverde;//Bloqueverdetorreblanca1

		    PeonNegro.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvpn2,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
		      else
			{this.colision = 0;this.step=0.25;}
		    }//fin prototype sense

		    PeonNegro.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(peonnegro2.position.x<bvpn2.position.x)
			  peonnegro2.position.x += this.step;
			else
			  peonnegro2.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(peonnegro2.position.z<bvpn2.position.z)
			  peonnegro2.position.z += this.step;
			else
			  peonnegro2.position.z -= this.step;
		      }//fin if posicion z
			if((peonnegro2.position.x==torreblanca1.position.x && peonnegro2.position.z==torreblanca1.position.z)&&
			  (peonnegro2.position.y==torreblanca1.position.y))
			{torreblanca1.position.y=100;torreblanca1.position.x=100;escena.remove(torreblanca1);}
			if((peonnegro2.position.x==torreblanca2.position.x && peonnegro2.position.z==torreblanca2.position.z)&&
			  (peonnegro2.position.y==torreblanca2.position.y))
			{torreblanca2.position.y=100;torreblanca2.position.x=100;escena.remove(torreblanca2);}
			if((peonnegro2.position.x==caballoblanco1.position.x && peonnegro2.position.z==caballoblanco1.position.z)&&
			  (peonnegro2.position.y==caballoblanco1.position.y))
			{caballoblanco1.position.y=100;caballoblanco1.position.x=100;escena.remove(caballoblanco1);}
			if((peonnegro2.position.x==caballoblanco2.position.x && peonnegro2.position.z==caballoblanco2.position.z)&&
			  (peonnegro2.position.y==caballoblanco2.position.y))
			{caballoblanco2.position.y=100;caballoblanco2.position.x=100;escena.remove(caballoblanco2);}
			if((peonnegro2.position.x==alfilblanco1.position.x && peonnegro2.position.z==alfilblanco1.position.z)&&
			  (peonnegro2.position.y==alfilblanco1.position.y))
			{alfilblanco1.position.y=100;alfilblanco1.position.x=100;escena.remove(alfilblanco1);}
			if((peonnegro2.position.x==alfilblanco2.position.x && peonnegro2.position.z==alfilblanco2.position.z)&&
			  (peonnegro2.position.y==alfilblanco2.position.y))
			{alfilblanco2.position.y=100;alfilblanco2.position.x=100;escena.remove(alfilblanco2);}
			if((peonnegro2.position.x==reinablanca.position.x && peonnegro2.position.z==reinablanca.position.z)&&
			  (peonnegro2.position.y==reinablanca.position.y))
			{reinablanca.position.y=100;reinablanca.position.x=100;escena.remove(reinablanca);}
			if((peonnegro2.position.x==reyblanco.position.x && peonnegro2.position.z==reyblanco.position.z)&&
			  (peonnegro2.position.y==reyblanco.position.y))
			{reyblanco.position.y=100;reyblanco.position.x=100;escena.remove(reyblanco);}
			if((peonnegro2.position.x==peonblanco1.position.x && peonnegro2.position.z==peonblanco1.position.z)&&
			  (peonnegro2.position.y==peonblanco1.position.y))
			{peonblanco1.position.y=100;peonblanco1.position.x=100;escena.remove(peonblanco1);}
			if((peonnegro2.position.x==peonblanco2.position.x && peonnegro2.position.z==peonblanco2.position.z)&&
			  (peonnegro2.position.y==peonblanco2.position.y))
			{peonblanco2.position.y=100;peonblanco2.position.x=100;escena.remove(peonblanco2);}
			if((peonnegro2.position.x==peonblanco3.position.x && peonnegro2.position.z==peonblanco3.position.z)&&
			  (peonnegro2.position.y==peonblanco3.position.y))
			{peonblanco3.position.y=100;peonblanco3.position.x=100;escena.remove(peonblanco3);}
			if((peonnegro2.position.x==peonblanco4.position.x && peonnegro2.position.z==peonblanco4.position.z)&&
			  (peonnegro2.position.y==peonblanco4.position.y))
			{peonblanco4.position.y=100;peonblanco4.position.x=100;escena.remove(peonblanco4);}
			if((peonnegro2.position.x==peonblanco5.position.x && peonnegro2.position.z==peonblanco5.position.z)&&
			  (peonnegro2.position.y==peonblanco5.position.y))
			{peonblanco5.position.y=100;peonblanco5.position.x=100;escena.remove(peonblanco5);}
			if((peonnegro2.position.x==peonblanco6.position.x && peonnegro2.position.z==peonblanco6.position.z)&&
			  (peonnegro2.position.y==peonblanco6.position.y))
			{peonblanco6.position.y=100;peonblanco6.position.x=100;escena.remove(peonblanco6);}
			if((peonnegro2.position.x==peonblanco7.position.x && peonnegro2.position.z==peonblanco7.position.z)&&
			  (peonnegro2.position.y==peonblanco7.position.y))
			{peonblanco7.position.y=100;peonblanco7.position.x=100;escena.remove(peonblanco7);}
			if((peonnegro2.position.x==peonblanco8.position.x && peonnegro2.position.z==peonblanco8.position.z)&&
			  (peonnegro2.position.y==peonblanco8.position.y))
			{peonblanco8.position.y=100;peonblanco8.position.x=100;escena.remove(peonblanco8);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((peonnegro2.position.x==torrenegra1.position.x && peonnegro2.position.z==torrenegra1.position.z)||
			   (peonnegro2.position.x==peonnegro1.position.x && peonnegro2.position.z==peonnegro1.position.z))||
			   (peonnegro2.position.x==peonnegro3.position.x && peonnegro2.position.z==peonnegro3.position.z))||
			   (peonnegro2.position.x==peonnegro4.position.x && peonnegro2.position.z==peonnegro4.position.z))||
			   (peonnegro2.position.x==peonnegro5.position.x && peonnegro2.position.z==peonnegro5.position.z))||
			   (peonnegro2.position.x==peonnegro6.position.x && peonnegro2.position.z==peonnegro6.position.z))||
			   (peonnegro2.position.x==peonnegro7.position.x && peonnegro2.position.z==peonnegro7.position.z))||
			   (peonnegro2.position.x==peonnegro8.position.x && peonnegro2.position.z==peonnegro8.position.z))||
			   (peonnegro2.position.x==torrenegra2.position.x && peonnegro2.position.z==torrenegra2.position.z))||
			   (peonnegro2.position.x==alfilnegro1.position.x && peonnegro2.position.z==alfilnegro1.position.z))||
			   (peonnegro2.position.x==alfilnegro2.position.x && peonnegro2.position.z==alfilnegro2.position.z))||
			   (peonnegro2.position.x==caballonegro1.position.x && peonnegro2.position.z==caballonegro1.position.z))||
			   (peonnegro2.position.x==caballonegro2.position.x && peonnegro2.position.z==caballonegro2.position.z))||
			   (peonnegro2.position.x==reynegro.position.x && peonnegro2.position.z==reynegro.position.z))||
			   (peonnegro2.position.x==reinanegra.position.x && peonnegro2.position.z==reinanegra.position.z)){
				alert("No puedes comer piezas del mismo color");
				peonnegro2.position.x=bloquerojo.position.x;peonnegro2.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if peonnegro2
		  ///////////////////////////////////Peon negro 3//////////////////////////////////////////////////////////////////
		  if (peonnegro3.position.x===bloquerojo.position.x && peonnegro3.position.z===bloquerojo.position.z){
		    var bvpn3=bloqueverde;//Bloqueverdetorreblanca1

		    PeonNegro.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvpn3,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
		      else
			{this.colision = 0;this.step=0.25;}
		    }//fin prototype sense

		    PeonNegro.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(peonnegro3.position.x<bvpn3.position.x)
			  peonnegro3.position.x += this.step;
			else
			  peonnegro3.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(peonnegro3.position.z<bvpn3.position.z)
			  peonnegro3.position.z += this.step;
			else
			  peonnegro3.position.z -= this.step;
		      }//fin if posicion z
			if((peonnegro3.position.x==torreblanca1.position.x && peonnegro3.position.z==torreblanca1.position.z)&&
			  (peonnegro3.position.y==torreblanca1.position.y))
			{torreblanca1.position.y=100;torreblanca1.position.x=100;escena.remove(torreblanca1);}
			if((peonnegro3.position.x==torreblanca2.position.x && peonnegro3.position.z==torreblanca2.position.z)&&
			  (peonnegro3.position.y==torreblanca2.position.y))
			{torreblanca2.position.y=100;torreblanca2.position.x=100;escena.remove(torreblanca2);}
			if((peonnegro3.position.x==caballoblanco1.position.x && peonnegro3.position.z==caballoblanco1.position.z)&&
			  (peonnegro3.position.y==caballoblanco1.position.y))
			{caballoblanco1.position.y=100;caballoblanco1.position.x=100;escena.remove(caballoblanco1);}
			if((peonnegro3.position.x==caballoblanco2.position.x && peonnegro3.position.z==caballoblanco2.position.z)&&
			  (peonnegro3.position.y==caballoblanco2.position.y))
			{caballoblanco2.position.y=100;caballoblanco2.position.x=100;escena.remove(caballoblanco2);}
			if((peonnegro3.position.x==alfilblanco1.position.x && peonnegro3.position.z==alfilblanco1.position.z)&&
			  (peonnegro3.position.y==alfilblanco1.position.y))
			{alfilblanco1.position.y=100;alfilblanco1.position.x=100;escena.remove(alfilblanco1);}
			if((peonnegro3.position.x==alfilblanco2.position.x && peonnegro3.position.z==alfilblanco2.position.z)&&
			  (peonnegro3.position.y==alfilblanco2.position.y))
			{alfilblanco2.position.y=100;alfilblanco2.position.x=100;escena.remove(alfilblanco2);}
			if((peonnegro3.position.x==reinablanca.position.x && peonnegro3.position.z==reinablanca.position.z)&&
			  (peonnegro3.position.y==reinablanca.position.y))
			{reinablanca.position.y=100;reinablanca.position.x=100;escena.remove(reinablanca);}
			if((peonnegro3.position.x==reyblanco.position.x && peonnegro3.position.z==reyblanco.position.z)&&
			  (peonnegro3.position.y==reyblanco.position.y))
			{reyblanco.position.y=100;reyblanco.position.x=100;escena.remove(reyblanco);}
			if((peonnegro3.position.x==peonblanco1.position.x && peonnegro3.position.z==peonblanco1.position.z)&&
			  (peonnegro3.position.y==peonblanco1.position.y))
			{peonblanco1.position.y=100;peonblanco1.position.x=100;escena.remove(peonblanco1);}
			if((peonnegro3.position.x==peonblanco2.position.x && peonnegro3.position.z==peonblanco2.position.z)&&
			  (peonnegro3.position.y==peonblanco2.position.y))
			{peonblanco2.position.y=100;peonblanco2.position.x=100;escena.remove(peonblanco2);}
			if((peonnegro3.position.x==peonblanco3.position.x && peonnegro3.position.z==peonblanco3.position.z)&&
			  (peonnegro3.position.y==peonblanco3.position.y))
			{peonblanco3.position.y=100;peonblanco3.position.x=100;escena.remove(peonblanco3);}
			if((peonnegro3.position.x==peonblanco4.position.x && peonnegro3.position.z==peonblanco4.position.z)&&
			  (peonnegro3.position.y==peonblanco4.position.y))
			{peonblanco4.position.y=100;peonblanco4.position.x=100;escena.remove(peonblanco4);}
			if((peonnegro3.position.x==peonblanco5.position.x && peonnegro3.position.z==peonblanco5.position.z)&&
			  (peonnegro3.position.y==peonblanco5.position.y))
			{peonblanco5.position.y=100;peonblanco5.position.x=100;escena.remove(peonblanco5);}
			if((peonnegro3.position.x==peonblanco6.position.x && peonnegro3.position.z==peonblanco6.position.z)&&
			  (peonnegro3.position.y==peonblanco6.position.y))
			{peonblanco6.position.y=100;peonblanco6.position.x=100;escena.remove(peonblanco6);}
			if((peonnegro3.position.x==peonblanco7.position.x && peonnegro3.position.z==peonblanco7.position.z)&&
			  (peonnegro3.position.y==peonblanco7.position.y))
			{peonblanco7.position.y=100;peonblanco7.position.x=100;escena.remove(peonblanco7);}
			if((peonnegro3.position.x==peonblanco8.position.x && peonnegro3.position.z==peonblanco8.position.z)&&
			  (peonnegro3.position.y==peonblanco8.position.y))
			{peonblanco8.position.y=100;peonblanco8.position.x=100;escena.remove(peonblanco8);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((peonnegro3.position.x==torrenegra1.position.x && peonnegro3.position.z==torrenegra1.position.z)||
			   (peonnegro3.position.x==peonnegro2.position.x && peonnegro3.position.z==peonnegro2.position.z))||
			   (peonnegro3.position.x==peonnegro1.position.x && peonnegro3.position.z==peonnegro1.position.z))||
			   (peonnegro3.position.x==peonnegro4.position.x && peonnegro3.position.z==peonnegro4.position.z))||
			   (peonnegro3.position.x==peonnegro5.position.x && peonnegro3.position.z==peonnegro5.position.z))||
			   (peonnegro3.position.x==peonnegro6.position.x && peonnegro3.position.z==peonnegro6.position.z))||
			   (peonnegro3.position.x==peonnegro7.position.x && peonnegro3.position.z==peonnegro7.position.z))||
			   (peonnegro3.position.x==peonnegro8.position.x && peonnegro3.position.z==peonnegro8.position.z))||
			   (peonnegro3.position.x==torrenegra2.position.x && peonnegro3.position.z==torrenegra2.position.z))||
			   (peonnegro3.position.x==alfilnegro1.position.x && peonnegro3.position.z==alfilnegro1.position.z))||
			   (peonnegro3.position.x==alfilnegro2.position.x && peonnegro3.position.z==alfilnegro2.position.z))||
			   (peonnegro3.position.x==caballonegro1.position.x && peonnegro3.position.z==caballonegro1.position.z))||
			   (peonnegro3.position.x==caballonegro2.position.x && peonnegro3.position.z==caballonegro2.position.z))||
			   (peonnegro3.position.x==reynegro.position.x && peonnegro3.position.z==reynegro.position.z))||
			   (peonnegro3.position.x==reinanegra.position.x && peonnegro3.position.z==reinanegra.position.z)){
				alert("No puedes comer piezas del mismo color");
				peonnegro3.position.x=bloquerojo.position.x;peonnegro3.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if peonnegro3
		  ///////////////////////////////////Peon negro 4//////////////////////////////////////////////////////////////////
		  if (peonnegro4.position.x===bloquerojo.position.x && peonnegro4.position.z===bloquerojo.position.z){
		    var bvpn4=bloqueverde;//Bloqueverdetorreblanca1

		    PeonNegro.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvpn4,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
		      else
			{this.colision = 0;this.step=0.25;}
		    }//fin prototype sense

		    PeonNegro.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(peonnegro4.position.x<bvpn4.position.x)
			  peonnegro4.position.x += this.step;
			else
			  peonnegro4.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(peonnegro4.position.z<bvpn4.position.z)
			  peonnegro4.position.z += this.step;
			else
			  peonnegro4.position.z -= this.step;
		      }//fin if posicion z
			if((peonnegro4.position.x==torreblanca1.position.x && peonnegro4.position.z==torreblanca1.position.z)&&
			  (peonnegro4.position.y==torreblanca1.position.y))
			{torreblanca1.position.y=100;torreblanca1.position.x=100;escena.remove(torreblanca1);}
			if((peonnegro4.position.x==torreblanca2.position.x && peonnegro4.position.z==torreblanca2.position.z)&&
			  (peonnegro4.position.y==torreblanca2.position.y))
			{torreblanca2.position.y=100;torreblanca2.position.x=100;escena.remove(torreblanca2);}
			if((peonnegro4.position.x==caballoblanco1.position.x && peonnegro4.position.z==caballoblanco1.position.z)&&
			  (peonnegro4.position.y==caballoblanco1.position.y))
			{caballoblanco1.position.y=100;caballoblanco1.position.x=100;escena.remove(caballoblanco1);}
			if((peonnegro4.position.x==caballoblanco2.position.x && peonnegro4.position.z==caballoblanco2.position.z)&&
			  (peonnegro4.position.y==caballoblanco2.position.y))
			{caballoblanco2.position.y=100;caballoblanco2.position.x=100;escena.remove(caballoblanco2);}
			if((peonnegro4.position.x==alfilblanco1.position.x && peonnegro4.position.z==alfilblanco1.position.z)&&
			  (peonnegro4.position.y==alfilblanco1.position.y))
			{alfilblanco1.position.y=100;alfilblanco1.position.x=100;escena.remove(alfilblanco1);}
			if((peonnegro4.position.x==alfilblanco2.position.x && peonnegro4.position.z==alfilblanco2.position.z)&&
			  (peonnegro4.position.y==alfilblanco2.position.y))
			{alfilblanco2.position.y=100;alfilblanco2.position.x=100;escena.remove(alfilblanco2);}
			if((peonnegro4.position.x==reinablanca.position.x && peonnegro4.position.z==reinablanca.position.z)&&
			  (peonnegro4.position.y==reinablanca.position.y))
			{reinablanca.position.y=100;reinablanca.position.x=100;escena.remove(reinablanca);}
			if((peonnegro4.position.x==reyblanco.position.x && peonnegro4.position.z==reyblanco.position.z)&&
			  (peonnegro4.position.y==reyblanco.position.y))
			{reyblanco.position.y=100;reyblanco.position.x=100;escena.remove(reyblanco);}
			if((peonnegro4.position.x==peonblanco1.position.x && peonnegro4.position.z==peonblanco1.position.z)&&
			  (peonnegro4.position.y==peonblanco1.position.y))
			{peonblanco1.position.y=100;peonblanco1.position.x=100;escena.remove(peonblanco1);}
			if((peonnegro4.position.x==peonblanco2.position.x && peonnegro4.position.z==peonblanco2.position.z)&&
			  (peonnegro4.position.y==peonblanco2.position.y))
			{peonblanco2.position.y=100;peonblanco2.position.x=100;escena.remove(peonblanco2);}
			if((peonnegro4.position.x==peonblanco3.position.x && peonnegro4.position.z==peonblanco3.position.z)&&
			  (peonnegro4.position.y==peonblanco3.position.y))
			{peonblanco3.position.y=100;peonblanco3.position.x=100;escena.remove(peonblanco3);}
			if((peonnegro4.position.x==peonblanco4.position.x && peonnegro4.position.z==peonblanco4.position.z)&&
			  (peonnegro4.position.y==peonblanco4.position.y))
			{peonblanco4.position.y=100;peonblanco4.position.x=100;escena.remove(peonblanco4);}
			if((peonnegro4.position.x==peonblanco5.position.x && peonnegro4.position.z==peonblanco5.position.z)&&
			  (peonnegro4.position.y==peonblanco5.position.y))
			{peonblanco5.position.y=100;peonblanco5.position.x=100;escena.remove(peonblanco5);}
			if((peonnegro4.position.x==peonblanco6.position.x && peonnegro4.position.z==peonblanco6.position.z)&&
			  (peonnegro4.position.y==peonblanco6.position.y))
			{peonblanco6.position.y=100;peonblanco6.position.x=100;escena.remove(peonblanco6);}
			if((peonnegro4.position.x==peonblanco7.position.x && peonnegro4.position.z==peonblanco7.position.z)&&
			  (peonnegro4.position.y==peonblanco7.position.y))
			{peonblanco7.position.y=100;peonblanco7.position.x=100;escena.remove(peonblanco7);}
			if((peonnegro4.position.x==peonblanco8.position.x && peonnegro4.position.z==peonblanco8.position.z)&&
			  (peonnegro4.position.y==peonblanco8.position.y))
			{peonblanco8.position.y=100;peonblanco8.position.x=100;escena.remove(peonblanco8);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((peonnegro4.position.x==torrenegra1.position.x && peonnegro4.position.z==torrenegra1.position.z)||
			   (peonnegro4.position.x==peonnegro2.position.x && peonnegro4.position.z==peonnegro2.position.z))||
			   (peonnegro4.position.x==peonnegro3.position.x && peonnegro4.position.z==peonnegro3.position.z))||
			   (peonnegro4.position.x==peonnegro1.position.x && peonnegro4.position.z==peonnegro1.position.z))||
			   (peonnegro4.position.x==peonnegro5.position.x && peonnegro4.position.z==peonnegro5.position.z))||
			   (peonnegro4.position.x==peonnegro6.position.x && peonnegro4.position.z==peonnegro6.position.z))||
			   (peonnegro4.position.x==peonnegro7.position.x && peonnegro4.position.z==peonnegro7.position.z))||
			   (peonnegro4.position.x==peonnegro8.position.x && peonnegro4.position.z==peonnegro8.position.z))||
			   (peonnegro4.position.x==torrenegra2.position.x && peonnegro4.position.z==torrenegra2.position.z))||
			   (peonnegro4.position.x==alfilnegro1.position.x && peonnegro4.position.z==alfilnegro1.position.z))||
			   (peonnegro4.position.x==alfilnegro2.position.x && peonnegro4.position.z==alfilnegro2.position.z))||
			   (peonnegro4.position.x==caballonegro1.position.x && peonnegro4.position.z==caballonegro1.position.z))||
			   (peonnegro4.position.x==caballonegro2.position.x && peonnegro4.position.z==caballonegro2.position.z))||
			   (peonnegro4.position.x==reynegro.position.x && peonnegro4.position.z==reynegro.position.z))||
			   (peonnegro4.position.x==reinanegra.position.x && peonnegro4.position.z==reinanegra.position.z)){
				alert("No puedes comer piezas del mismo color");
				peonnegro4.position.x=bloquerojo.position.x;peonnegro4.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if peonnegro4
		  ///////////////////////////////////Peon negro 5//////////////////////////////////////////////////////////////////
		  if (peonnegro5.position.x===bloquerojo.position.x && peonnegro5.position.z===bloquerojo.position.z){
		    var bvpn5=bloqueverde;//Bloqueverdetorreblanca1

		    PeonNegro.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvpn5,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
		      else
			{this.colision = 0;this.step=0.25;}
		    }//fin prototype sense

		    PeonNegro.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(peonnegro5.position.x<bvpn5.position.x)
			  peonnegro5.position.x += this.step;
			else
			  peonnegro5.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(peonnegro5.position.z<bvpn5.position.z)
			  peonnegro5.position.z += this.step;
			else
			  peonnegro5.position.z -= this.step;
		      }//fin if posicion z
			if((peonnegro5.position.x==torreblanca1.position.x && peonnegro5.position.z==torreblanca1.position.z)&&
			  (peonnegro5.position.y==torreblanca1.position.y))
			{torreblanca1.position.y=100;torreblanca1.position.x=100;escena.remove(torreblanca1);}
			if((peonnegro5.position.x==torreblanca2.position.x && peonnegro5.position.z==torreblanca2.position.z)&&
			  (peonnegro5.position.y==torreblanca2.position.y))
			{torreblanca2.position.y=100;torreblanca2.position.x=100;escena.remove(torreblanca2);}
			if((peonnegro5.position.x==caballoblanco1.position.x && peonnegro5.position.z==caballoblanco1.position.z)&&
			  (peonnegro5.position.y==caballoblanco1.position.y))
			{caballoblanco1.position.y=100;caballoblanco1.position.x=100;escena.remove(caballoblanco1);}
			if((peonnegro5.position.x==caballoblanco2.position.x && peonnegro5.position.z==caballoblanco2.position.z)&&
			  (peonnegro5.position.y==caballoblanco2.position.y))
			{caballonegro2.position.y=100;caballoblanco2.position.x=100;escena.remove(caballoblanco2);}
			if((peonnegro5.position.x==alfilblanco1.position.x && peonnegro5.position.z==alfilblanco1.position.z)&&
			  (peonnegro5.position.y==alfilblanco1.position.y))
			{alfilblanco1.position.y=100;alfilblanco1.position.x=100;escena.remove(alfilblanco1);}
			if((peonnegro5.position.x==alfilblanco2.position.x && peonnegro5.position.z==alfilblanco2.position.z)&&
			  (peonnegro5.position.y==alfilblanco2.position.y))
			{alfilblanco2.position.y=100;alfilblanco2.position.x=100;escena.remove(alfilblanco2);}
			if((peonnegro5.position.x==reinablanca.position.x && peonnegro5.position.z==reinablanca.position.z)&&
			  (peonnegro5.position.y==reinablanca.position.y))
			{reinablanca.position.y=100;reinablanca.position.x=100;escena.remove(reinablanca);}
			if((peonnegro5.position.x==reyblanco.position.x && peonnegro5.position.z==reyblanco.position.z)&&
			  (peonnegro5.position.y==reyblanco.position.y))
			{reyblanco.position.y=100;reyblanco.position.x=100;escena.remove(reyblanco);}
			if((peonnegro5.position.x==peonblanco1.position.x && peonnegro5.position.z==peonblanco1.position.z)&&
			  (peonnegro5.position.y==peonblanco1.position.y))
			{peonblanco1.position.y=100;peonblanco1.position.x=100;escena.remove(peonblanco1);}
			if((peonnegro5.position.x==peonblanco2.position.x && peonnegro5.position.z==peonblanco2.position.z)&&
			  (peonnegro5.position.y==peonblanco2.position.y))
			{peonblanco2.position.y=100;peonblanco2.position.x=100;escena.remove(peonblanco2);}
			if((peonnegro5.position.x==peonblanco3.position.x && peonnegro5.position.z==peonblanco3.position.z)&&
			  (peonnegro5.position.y==peonblanco3.position.y))
			{peonblanco3.position.y=100;peonblanco3.position.x=100;escena.remove(peonblanco3);}
			if((peonnegro5.position.x==peonblanco4.position.x && peonnegro5.position.z==peonblanco4.position.z)&&
			  (peonnegro5.position.y==peonblanco4.position.y))
			{peonblanco4.position.y=100;peonblanco4.position.x=100;escena.remove(peonblanco4);}
			if((peonnegro5.position.x==peonblanco5.position.x && peonnegro5.position.z==peonblanco5.position.z)&&
			  (peonnegro5.position.y==peonblanco5.position.y))
			{peonblanco5.position.y=100;peonblanco5.position.x=100;escena.remove(peonblanco5);}
			if((peonnegro5.position.x==peonblanco6.position.x && peonnegro5.position.z==peonblanco6.position.z)&&
			  (peonnegro5.position.y==peonblanco6.position.y))
			{peonblanco6.position.y=100;peonblanco6.position.x=100;escena.remove(peonblanco6);}
			if((peonnegro5.position.x==peonblanco7.position.x && peonnegro5.position.z==peonblanco7.position.z)&&
			  (peonnegro5.position.y==peonblanco7.position.y))
			{peonblanco7.position.y=100;peonblanco7.position.x=100;escena.remove(peonblanco7);}
			if((peonnegro5.position.x==peonblanco8.position.x && peonnegro5.position.z==peonblanco8.position.z)&&
			  (peonnegro5.position.y==peonblanco8.position.y))
			{peonblanco8.position.y=100;peonblanco8.position.x=100;escena.remove(peonblanco8);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((peonnegro5.position.x==torrenegra1.position.x && peonnegro5.position.z==torrenegra1.position.z)||
			   (peonnegro5.position.x==peonnegro2.position.x && peonnegro5.position.z==peonnegro2.position.z))||
			   (peonnegro5.position.x==peonnegro3.position.x && peonnegro5.position.z==peonnegro3.position.z))||
			   (peonnegro5.position.x==peonnegro4.position.x && peonnegro5.position.z==peonnegro4.position.z))||
			   (peonnegro5.position.x==peonnegro1.position.x && peonnegro5.position.z==peonnegro1.position.z))||
			   (peonnegro5.position.x==peonnegro6.position.x && peonnegro5.position.z==peonnegro6.position.z))||
			   (peonnegro5.position.x==peonnegro7.position.x && peonnegro5.position.z==peonnegro7.position.z))||
			   (peonnegro5.position.x==peonnegro8.position.x && peonnegro5.position.z==peonnegro8.position.z))||
			   (peonnegro5.position.x==torrenegra2.position.x && peonnegro5.position.z==torrenegra2.position.z))||
			   (peonnegro5.position.x==alfilnegro1.position.x && peonnegro5.position.z==alfilnegro1.position.z))||
			   (peonnegro5.position.x==alfilnegro2.position.x && peonnegro5.position.z==alfilnegro2.position.z))||
			   (peonnegro5.position.x==caballonegro1.position.x && peonnegro5.position.z==caballonegro1.position.z))||
			   (peonnegro5.position.x==caballonegro2.position.x && peonnegro5.position.z==caballonegro2.position.z))||
			   (peonnegro5.position.x==reynegro.position.x && peonnegro5.position.z==reynegro.position.z))||
			   (peonnegro5.position.x==reinanegra.position.x && peonnegro5.position.z==reinanegra.position.z)){
				alert("No puedes comer piezas del mismo color");
				peonnegro5.position.x=bloquerojo.position.x;peonnegro5.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if peonnegro5
		  ///////////////////////////////////Peon negro 6//////////////////////////////////////////////////////////////////
		  if (peonnegro6.position.x===bloquerojo.position.x && peonnegro6.position.z===bloquerojo.position.z){
		    var bvpn6=bloqueverde;//Bloqueverdetorreblanca1

		    PeonNegro.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvpn6,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
		      else
			{this.colision = 0;this.step=0.25;}
		    }//fin prototype sense

		    PeonNegro.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(peonnegro6.position.x<bvpn6.position.x)
			  peonnegro6.position.x += this.step;
			else
			  peonnegro6.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(peonnegro6.position.z<bvpn6.position.z)
			  peonnegro6.position.z += this.step;
			else
			  peonnegro6.position.z -= this.step;
		      }//fin if posicion z
			if((peonnegro6.position.x==torreblanca1.position.x && peonnegro6.position.z==torreblanca1.position.z)&&
			  (peonnegro6.position.y==torreblanca1.position.y))
			{torreblanca1.position.y=100;torreblanca1.position.x=100;escena.remove(torreblanca1);}
			if((peonnegro6.position.x==torreblanca2.position.x && peonnegro6.position.z==torreblanca2.position.z)&&
			  (peonnegro6.position.y==torreblanca2.position.y))
			{torreblanca2.position.y=100;torreblanca2.position.x=100;escena.remove(torreblanca2);}
			if((peonnegro6.position.x==caballoblanco1.position.x && peonnegro6.position.z==caballoblanco1.position.z)&&
			  (peonnegro6.position.y==caballoblanco1.position.y))
			{caballoblanco1.position.y=100;caballoblanco1.position.x=100;escena.remove(caballoblanco1);}
			if((peonnegro6.position.x==caballoblanco2.position.x && peonnegro6.position.z==caballoblanco2.position.z)&&
			  (peonnegro6.position.y==caballoblanco2.position.y))
			{caballoblanco2.position.y=100;caballoblanco2.position.x=100;escena.remove(caballoblanco2);}
			if((peonnegro6.position.x==alfilblanco1.position.x && peonnegro6.position.z==alfilblanco1.position.z)&&
			  (peonnegro6.position.y==alfilblanco1.position.y))
			{alfilblanco1.position.y=100;alfilblanco1.position.x=100;escena.remove(alfilblanco1);}
			if((peonnegro6.position.x==alfilblanco2.position.x && peonnegro6.position.z==alfilblanco2.position.z)&&
			  (peonnegro6.position.y==alfilblanco2.position.y))
			{alfilblanco2.position.y=100;alfilblanco2.position.x=100;escena.remove(alfilblanco2);}
			if((peonnegro6.position.x==reinablanca.position.x && peonnegro6.position.z==reinablanca.position.z)&&
			  (peonnegro6.position.y==reinablanca.position.y))
			{reinablanca.position.y=100;reinablanca.position.x=100;escena.remove(reinablanca);}
			if((peonnegro6.position.x==reyblanco.position.x && peonnegro6.position.z==reyblanco.position.z)&&
			  (peonnegro6.position.y==reyblanco.position.y))
			{reyblanco.position.y=100;reyblanco.position.x=100;escena.remove(reyblanco);}
			if((peonnegro6.position.x==peonblanco1.position.x && peonnegro6.position.z==peonblanco1.position.z)&&
			  (peonnegro6.position.y==peonblanco1.position.y))
			{peonblanco1.position.y=100;peonblanco1.position.x=100;escena.remove(peonblanco1);}
			if((peonnegro6.position.x==peonblanco2.position.x && peonnegro6.position.z==peonblanco2.position.z)&&
			  (peonnegro6.position.y==peonblanco2.position.y))
			{peonblanco2.position.y=100;peonblanco2.position.x=100;escena.remove(peonblanco2);}
			if((peonnegro6.position.x==peonblanco3.position.x && peonnegro6.position.z==peonblanco3.position.z)&&
			  (peonnegro6.position.y==peonblanco3.position.y))
			{peonblanco3.position.y=100;peonblanco3.position.x=100;escena.remove(peonblanco3);}
			if((peonnegro6.position.x==peonblanco4.position.x && peonnegro6.position.z==peonblanco4.position.z)&&
			  (peonnegro6.position.y==peonblanco4.position.y))
			{peonblanco4.position.y=100;peonblanco4.position.x=100;escena.remove(peonblanco4);}
			if((peonnegro6.position.x==peonblanco5.position.x && peonnegro6.position.z==peonblanco5.position.z)&&
			  (peonnegro6.position.y==peonblanco5.position.y))
			{peonblanco5.position.y=100;peonblanco5.position.x=100;escena.remove(peonblanco5);}
			if((peonnegro6.position.x==peonblanco6.position.x && peonnegro6.position.z==peonblanco6.position.z)&&
			  (peonnegro6.position.y==peonblanco6.position.y))
			{peonblanco6.position.y=100;peonblanco6.position.x=100;escena.remove(peonblanco6);}
			if((peonnegro6.position.x==peonblanco7.position.x && peonnegro6.position.z==peonblanco7.position.z)&&
			  (peonnegro6.position.y==peonblanco7.position.y))
			{peonblanco7.position.y=100;peonblanco7.position.x=100;escena.remove(peonblanco7);}
			if((peonnegro6.position.x==peonblanco8.position.x && peonnegro6.position.z==peonblanco8.position.z)&&
			  (peonnegro6.position.y==peonblanco8.position.y))
			{peonblanco8.position.y=100;peonblanco8.position.x=100;escena.remove(peonblanco8);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((peonnegro6.position.x==torrenegra1.position.x && peonnegro6.position.z==torrenegra1.position.z)||
			   (peonnegro6.position.x==peonnegro2.position.x && peonnegro6.position.z==peonnegro2.position.z))||
			   (peonnegro6.position.x==peonnegro3.position.x && peonnegro6.position.z==peonnegro3.position.z))||
			   (peonnegro6.position.x==peonnegro4.position.x && peonnegro6.position.z==peonnegro4.position.z))||
			   (peonnegro6.position.x==peonnegro5.position.x && peonnegro6.position.z==peonnegro5.position.z))||
			   (peonnegro6.position.x==peonnegro1.position.x && peonnegro6.position.z==peonnegro1.position.z))||
			   (peonnegro6.position.x==peonnegro7.position.x && peonnegro6.position.z==peonnegro7.position.z))||
			   (peonnegro6.position.x==peonnegro8.position.x && peonnegro6.position.z==peonnegro8.position.z))||
			   (peonnegro6.position.x==torrenegra2.position.x && peonnegro6.position.z==torrenegra2.position.z))||
			   (peonnegro6.position.x==alfilnegro1.position.x && peonnegro6.position.z==alfilnegro1.position.z))||
			   (peonnegro6.position.x==alfilnegro2.position.x && peonnegro6.position.z==alfilnegro2.position.z))||
			   (peonnegro6.position.x==caballonegro1.position.x && peonnegro6.position.z==caballonegro1.position.z))||
			   (peonnegro6.position.x==caballonegro2.position.x && peonnegro6.position.z==caballonegro2.position.z))||
			   (peonnegro6.position.x==reynegro.position.x && peonnegro6.position.z==reynegro.position.z))||
			   (peonnegro6.position.x==reinanegra.position.x && peonnegro6.position.z==reinanegra.position.z)){
				alert("No puedes comer piezas del mismo color");
				peonnegro6.position.x=bloquerojo.position.x;peonnegro6.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if peonnegro6
		  ///////////////////////////////////Peon negro 7/////////////////////////////////////////////////////////////////
		  if (peonnegro7.position.x===bloquerojo.position.x && peonnegro7.position.z===bloquerojo.position.z){
		    var bvpn7=bloqueverde;//Bloqueverdetorreblanca1

		    PeonNegro.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvpn7,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
		      else
			{this.colision = 0;this.step=0.25;}
		    }//fin prototype sense

		    PeonNegro.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(peonnegro7.position.x<bvpn7.position.x)
			  peonnegro7.position.x += this.step;
			else
			  peonnegro7.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(peonnegro7.position.z<bvpn7.position.z)
			  peonnegro7.position.z += this.step;
			else
			  peonnegro7.position.z -= this.step;
		      }//fin if posicion z
			if((peonnegro7.position.x==torreblanca1.position.x && peonnegro7.position.z==torreblanca1.position.z)&&
			  (peonnegro7.position.y==torreblanca1.position.y))
			{torreblanca.position.y=100;torreblanca1.position.x=100;escena.remove(torreblanca1);}
			if((peonnegro7.position.x==torreblanca2.position.x && peonnegro7.position.z==torreblanca2.position.z)&&
			  (peonnegro7.position.y==torreblanca2.position.y))
			{torreblanca2.position.y=100;torreblanca2.position.x=100;escena.remove(torreblanca2);}
			if((peonnegro7.position.x==caballoblanco1.position.x && peonnegro7.position.z==caballoblanco1.position.z)&&
			  (peonnegro7.position.y==caballoblanco1.position.y))
			{caballoblanco1.position.y=100;caballoblanco1.position.x=100;escena.remove(caballoblanco1);}
			if((peonnegro7.position.x==caballoblanco2.position.x && peonnegro7.position.z==caballoblanco2.position.z)&&
			  (peonnegro7.position.y==caballoblanco2.position.y))
			{caballoblanco2.position.y=100;caballoblanco2.position.x=100;escena.remove(caballoblanco2);}
			if((peonnegro7.position.x==alfilblanco1.position.x && peonnegro7.position.z==alfilblanco1.position.z)&&
			  (peonnegro7.position.y==alfilblanco1.position.y))
			{alfilblanco1.position.y=100;alfilblanco1.position.x=100;escena.remove(alfilblanco1);}
			if((peonnegro7.position.x==alfilblanco2.position.x && peonnegro7.position.z==alfilblanco2.position.z)&&
			  (peonnegro7.position.y==alfilblanco2.position.y))
			{alfilblanco2.position.y=100;alfilblanco2.position.x=100;escena.remove(alfilblanco2);}
			if((peonnegro7.position.x==reinablanca.position.x && peonnegro7.position.z==reinablanca.position.z)&&
			  (peonnegro7.position.y==reinablanca.position.y))
			{reinablanca.position.y=100;reinablanca.position.x=100;escena.remove(reinablanca);}
			if((peonnegro7.position.x==reyblanco.position.x && peonnegro7.position.z==reyblanco.position.z)&&
			  (peonnegro7.position.y==reyblanco.position.y))
			{reyblanco.position.y=100;reyblanco.position.x=100;escena.remove(reyblanco);}
			if((peonnegro7.position.x==peonblanco1.position.x && peonnegro7.position.z==peonblanco1.position.z)&&
			  (peonnegro7.position.y==peonblanco1.position.y))
			{peonblanco1.position.y=100;peonblanco1.position.x=100;escena.remove(peonblanco1);}
			if((peonnegro7.position.x==peonblanco2.position.x && peonnegro7.position.z==peonblanco2.position.z)&&
			  (peonnegro7.position.y==peonblanco2.position.y))
			{peonblanco2.position.y=100;peonblanco2.position.x=100;escena.remove(peonblanco2);}
			if((peonnegro7.position.x==peonblanco3.position.x && peonnegro7.position.z==peonblanco3.position.z)&&
			  (peonnegro7.position.y==peonblanco3.position.y))
			{peonblanco3.position.y=100;peonblanco3.position.x=100;escena.remove(peonblanco3);}
			if((peonnegro7.position.x==peonblanco4.position.x && peonnegro7.position.z==peonblanco4.position.z)&&
			  (peonnegro7.position.y==peonblanco4.position.y))
			{peonblanco4.position.y=100;peonblanco4.position.x=100;escena.remove(peonblanco4);}
			if((peonnegro7.position.x==peonblanco5.position.x && peonnegro7.position.z==peonblanco5.position.z)&&
			  (peonnegro7.position.y==peonblanco5.position.y))
			{peonblanco5.position.y=100;peonblanco5.position.x=100;escena.remove(peonblanco5);}
			if((peonnegro7.position.x==peonblanco6.position.x && peonnegro7.position.z==peonblanco6.position.z)&&
			  (peonnegro7.position.y==peonblanco6.position.y))
			{peonblanco6.position.y=100;peonblanco6.position.x=100;escena.remove(peonblanco6);}
			if((peonnegro7.position.x==peonblanco7.position.x && peonnegro7.position.z==peonblanco7.position.z)&&
			  (peonnegro7.position.y==peonblanco7.position.y))
			{peonblanco7.position.y=100;peonblanco7.position.x=100;escena.remove(peonblanco7);}
			if((peonnegro7.position.x==peonblanco8.position.x && peonnegro7.position.z==peonblanco8.position.z)&&
			  (peonnegro7.position.y==peonblanco8.position.y))
			{peonblanco8.position.y=100;peonblanco8.position.x=100;escena.remove(peonblanco8);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((peonnegro7.position.x==torrenegra1.position.x && peonnegro7.position.z==torrenegra1.position.z)||
			   (peonnegro7.position.x==peonnegro2.position.x && peonnegro7.position.z==peonnegro2.position.z))||
			   (peonnegro7.position.x==peonnegro3.position.x && peonnegro7.position.z==peonnegro3.position.z))||
			   (peonnegro7.position.x==peonnegro4.position.x && peonnegro7.position.z==peonnegro4.position.z))||
			   (peonnegro7.position.x==peonnegro5.position.x && peonnegro7.position.z==peonnegro5.position.z))||
			   (peonnegro7.position.x==peonnegro6.position.x && peonnegro7.position.z==peonnegro6.position.z))||
			   (peonnegro7.position.x==peonnegro1.position.x && peonnegro7.position.z==peonnegro1.position.z))||
			   (peonnegro7.position.x==peonnegro8.position.x && peonnegro7.position.z==peonnegro8.position.z))||
			   (peonnegro7.position.x==torrenegra2.position.x && peonnegro7.position.z==torrenegra2.position.z))||
			   (peonnegro7.position.x==alfilnegro1.position.x && peonnegro7.position.z==alfilnegro1.position.z))||
			   (peonnegro7.position.x==alfilnegro2.position.x && peonnegro7.position.z==alfilnegro2.position.z))||
			   (peonnegro7.position.x==caballonegro1.position.x && peonnegro7.position.z==caballonegro1.position.z))||
			   (peonnegro7.position.x==caballonegro2.position.x && peonnegro7.position.z==caballonegro2.position.z))||
			   (peonnegro7.position.x==reynegro.position.x && peonnegro7.position.z==reynegro.position.z))||
			   (peonnegro7.position.x==reinanegra.position.x && peonnegro7.position.z==reinanegra.position.z)){
				alert("No puedes comer piezas del mismo color");
				peonnegro7.position.x=bloquerojo.position.x;peonnegro7.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if peonnegro7
		  ///////////////////////////////////Peon negro 8//////////////////////////////////////////////////////////////////
		  if (peonnegro8.position.x===bloquerojo.position.x && peonnegro8.position.z===bloquerojo.position.z){
		    var bvpn8=bloqueverde;//Bloqueverdetorreblanca1

		    PeonNegro.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvpn8,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
		      else
			{this.colision = 0;this.step=0.25;}
		    }//fin prototype sense

		    PeonNegro.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(peonnegro8.position.x<bvpn8.position.x)
			  peonnegro8.position.x += this.step;
			else
			  peonnegro8.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(peonnegro8.position.z<bvpn8.position.z)
			  peonnegro8.position.z += this.step;
			else
			  peonnegro8.position.z -= this.step;
		      }//fin if posicion z
			if((peonnegro8.position.x==torreblanca1.position.x && peonnegro8.position.z==torreblanca1.position.z)&&
			  (peonnegro8.position.y==torreblanca1.position.y))
			{torreblanca1.position.y=100;torreblanca1.position.x=100;escena.remove(torreblanca1);}
			if((peonnegro8.position.x==torreblanca2.position.x && peonnegro8.position.z==torreblanca2.position.z)&&
			  (peonnegro8.position.y==torreblanca2.position.y))
			{torreblanca2.position.y=100;torreblanca2.position.x=100;escena.remove(torreblanca2);}
			if((peonnegro8.position.x==caballoblanco1.position.x && peonnegro8.position.z==caballoblanco1.position.z)&&
			  (peonnegro8.position.y==caballoblanco1.position.y))
			{caballoblanco1.position.y=100;caballoblanco1.position.x=100;escena.remove(caballoblanco1);}
			if((peonnegro8.position.x==caballoblanco2.position.x && peonnegro8.position.z==caballoblanco2.position.z)&&
			  (peonnegro8.position.y==caballoblanco2.position.y))
			{caballoblanco2.position.y=100;caballoblanco2.position.x=100;escena.remove(caballoblanco2);}
			if((peonnegro8.position.x==alfilblanco1.position.x && peonnegro8.position.z==alfilblanco1.position.z)&&
			  (peonnegro8.position.y==alfilblanco1.position.y))
			{alfilblanco1.position.y=100;alfilblanco1.position.x=100;escena.remove(alfilblanco1);}
			if((peonnegro8.position.x==alfilblanco2.position.x && peonnegro8.position.z==alfilblanco2.position.z)&&
			  (peonnegro8.position.y==alfilblanco2.position.y))
			{alfilblanco2.position.y=100;alfilblanco2.position.x=100;escena.remove(alfilblanco2);}
			if((peonnegro8.position.x==reinablanca.position.x && peonnegro8.position.z==reinablanca.position.z)&&
			  (peonnegro8.position.y==reinablanca.position.y))
			{reinablanca.position.y=100;reinablanca.position.x=100;escena.remove(reinablanca);}
			if((peonnegro8.position.x==reyblanco.position.x && peonnegro8.position.z==reyblanco.position.z)&&
			  (peonnegro8.position.y==reyblanco.position.y))
			{reyblanco.position.y=100;reyblanco.position.x=100;escena.remove(reyblanco);}
			if((peonnegro8.position.x==peonblanco1.position.x && peonnegro8.position.z==peonblanco1.position.z)&&
			  (peonnegro8.position.y==peonblanco1.position.y))
			{peonblanco1.position.y=100;peonblanco1.position.x=100;escena.remove(peonblanco1);}
			if((peonnegro8.position.x==peonblanco2.position.x && peonnegro8.position.z==peonblanco2.position.z)&&
			  (peonnegro8.position.y==peonblanco2.position.y))
			{peonblanco2.position.y=100;peonblanco2.position.x=100;escena.remove(peonblanco2);}
			if((peonnegro8.position.x==peonblanco3.position.x && peonnegro8.position.z==peonblanco3.position.z)&&
			  (peonnegro8.position.y==peonblanco3.position.y))
			{peonblanco3.position.y=100;peonblanco3.position.x=100;escena.remove(peonblanco3);}
			if((peonnegro8.position.x==peonblanco4.position.x && peonnegro8.position.z==peonblanco4.position.z)&&
			  (peonnegro8.position.y==peonblanco4.position.y))
			{peonblanco4.position.y=100;peonblanco4.position.x=100;escena.remove(peonblanco4);}
			if((peonnegro8.position.x==peonblanco5.position.x && peonnegro8.position.z==peonblanco5.position.z)&&
			  (peonnegro8.position.y==peonblanco5.position.y))
			{peonblanco5.position.y=100;peonblanco5.position.x=100;escena.remove(peonblanco5);}
			if((peonnegro8.position.x==peonblanco6.position.x && peonnegro8.position.z==peonblanco6.position.z)&&
			  (peonnegro8.position.y==peonblanco6.position.y))
			{peonblanco6.position.y=100;peonblanco6.position.x=100;escena.remove(peonblanco6);}
			if((peonnegro8.position.x==peonblanco7.position.x && peonnegro8.position.z==peonblanco7.position.z)&&
			  (peonnegro8.position.y==peonblanco7.position.y))
			{peonblanco7.position.y=100;peonblanco7.position.x=100;escena.remove(peonblanco7);}
			if((peonnegro8.position.x==peonblanco8.position.x && peonnegro8.position.z==peonblanco8.position.z)&&
			  (peonnegro8.position.y==peonblanco8.position.y))
			{peonblanco8.position.y=100;peonblanco8.position.x=100;escena.remove(peonblanco8);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((peonnegro8.position.x==torrenegra1.position.x && peonnegro8.position.z==torrenegra1.position.z)||
			   (peonnegro8.position.x==peonnegro2.position.x && peonnegro8.position.z==peonnegro2.position.z))||
			   (peonnegro8.position.x==peonnegro3.position.x && peonnegro8.position.z==peonnegro3.position.z))||
			   (peonnegro8.position.x==peonnegro4.position.x && peonnegro8.position.z==peonnegro4.position.z))||
			   (peonnegro8.position.x==peonnegro5.position.x && peonnegro8.position.z==peonnegro5.position.z))||
			   (peonnegro8.position.x==peonnegro6.position.x && peonnegro8.position.z==peonnegro6.position.z))||
			   (peonnegro8.position.x==peonnegro7.position.x && peonnegro8.position.z==peonnegro7.position.z))||
			   (peonnegro8.position.x==peonnegro1.position.x && peonnegro8.position.z==peonnegro1.position.z))||
			   (peonnegro8.position.x==torrenegra2.position.x && peonnegro8.position.z==torrenegra2.position.z))||
			   (peonnegro8.position.x==alfilnegro1.position.x && peonnegro8.position.z==alfilnegro1.position.z))||
			   (peonnegro8.position.x==alfilnegro2.position.x && peonnegro8.position.z==alfilnegro2.position.z))||
			   (peonnegro8.position.x==caballonegro1.position.x && peonnegro8.position.z==caballonegro1.position.z))||
			   (peonnegro8.position.x==caballonegro2.position.x && peonnegro8.position.z==caballonegro2.position.z))||
			   (peonnegro8.position.x==reynegro.position.x && peonnegro8.position.z==reynegro.position.z))||
			   (peonnegro8.position.x==reinanegra.position.x && peonnegro8.position.z==reinanegra.position.z)){
				alert("No puedes comer piezas del mismo color");
				peonnegro8.position.x=bloquerojo.position.x;peonnegro8.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if peonnegro8
//////////////////////////////////////////////////////Alfiles///////////////////////////////////////////////////////////////////////////
		  ///////////////////////////////////Alfil Blanco 1//////////////////////////////////////////////////////////////////
		  if (alfilblanco1.position.x===bloquerojo.position.x && alfilblanco1.position.z===bloquerojo.position.z){
		    var bvab1=bloqueverde;//Bloqueverdealfilblanco1
		    AlfilBlanco.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvab1,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
		      else
			{this.colision = 0;this.step=0.25;}
		    }//fin prototype sense

		    AlfilBlanco.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(alfilblanco1.position.x<bvab1.position.x)
			  alfilblanco1.position.x += this.step;
			else
			  alfilblanco1.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(alfilblanco1.position.z<bvab1.position.z)
			  alfilblanco1.position.z += this.step;
			else
			  alfilblanco1.position.z -= this.step;
		      }//fin if posicion z
			if((alfilblanco1.position.x==torrenegra1.position.x && alfilblanco1.position.z==torrenegra1.position.z)&&
			  (alfilblanco1.position.y==torrenegra1.position.y))
			{torrenegra1.position.y=100;torrenegra1.position.x=100;escena.remove(torrenegra1);}
			if((alfilblanco1.position.x==torrenegra2.position.x && alfilblanco1.position.z==torrenegra2.position.z)&&
			  (alfilblanco1.position.y==torrenegra2.position.y))
			{torrenegra2.position.y=100;torrenegra2.position.x=100;escena.remove(torrenegra2);}
			if((alfilblanco1.position.x==caballonegro1.position.x && alfilblanco1.position.z==caballonegro1.position.z)&&
			  (alfilblanco1.position.y==caballonegro1.position.y))
			{caballonegro1.position.y=100;caballonegro1.position.x=100;escena.remove(caballonegro1);}
			if((alfilblanco1.position.x==caballonegro2.position.x && alfilblanco1.position.z==caballonegro2.position.z)&&
			  (alfilblanco1.position.y==caballonegro2.position.y))
			{caballonegro2.position.y=100;caballonegro2.position.x=100;escena.remove(caballonegro2);}
			if((alfilblanco1.position.x==alfilnegro1.position.x && alfilblanco1.position.z==alfilnegro1.position.z)&&
			  (alfilblanco1.position.y==alfilnegro1.position.y))
			{alfilnegro1.position.y=100;alfilnegro1.position.x=100;escena.remove(alfilnegro1);}
			if((alfilblanco1.position.x==alfilnegro2.position.x && alfilblanco1.position.z==alfilnegro2.position.z)&&
			  (alfilblanco1.position.y==alfilnegro2.position.y))
			{alfilnegro2.position.y=100;alfilnegro2.position.x=100;escena.remove(alfilnegro2);}
			if((alfilblanco1.position.x==reinanegra.position.x && alfilblanco1.position.z==reinanegra.position.z)&&
			  (alfilblanco1.position.y==reinanegra.position.y))
			{reinanegra.position.y=100;reinanegra.position.x=100;escena.remove(reinanegra);}
			if((alfilblanco1.position.x==reynegro.position.x && alfilblanco1.position.z==reynegro.position.z)&&
			  (alfilblanco1.position.y==reynegro.position.y))
			{reynegro.position.y=100;reynegro.position.x=100;escena.remove(reynegro);}
			if((alfilblanco1.position.x==peonnegro1.position.x && alfilblanco1.position.z==peonnegro1.position.z)&&
			  (alfilblanco1.position.y==peonnegro1.position.y))
			{peonnegro1.position.y=100;peonnegro1.position.x=100;escena.remove(peonnegro1);}
			if((alfilblanco1.position.x==peonnegro2.position.x && alfilblanco1.position.z==peonnegro2.position.z)&&
			  (alfilblanco1.position.y==peonnegro2.position.y))
			{peonnegro2.position.y=100;peonnegro2.position.x=100;escena.remove(peonnegro2);}
			if((alfilblanco1.position.x==peonnegro3.position.x && alfilblanco1.position.z==peonnegro3.position.z)&&
			  (alfilblanco1.position.y==peonnegro3.position.y))
			{peonnegro3.position.y=100;peonnegro3.position.x=100;escena.remove(peonnegro3);}
			if((alfilblanco1.position.x==peonnegro4.position.x && alfilblanco1.position.z==peonnegro4.position.z)&&
			  (alfilblanco1.position.y==peonnegro4.position.y))
			{peonnegro4.position.y=100;peonnegro4.position.x=100;escena.remove(peonnegro4);}
			if((alfilblanco1.position.x==peonnegro5.position.x && alfilblanco1.position.z==peonnegro5.position.z)&&
			  (alfilblanco1.position.y==peonnegro5.position.y))
			{peonnegro5.position.y=100;peonnegro5.position.x=100;escena.remove(peonnegro5);}
			if((alfilblanco1.position.x==peonnegro6.position.x && alfilblanco1.position.z==peonnegro6.position.z)&&
			  (alfilblanco1.position.y==peonnegro6.position.y))
			{peonnegro6.position.y=100;peonnegro6.position.x=100;escena.remove(peonnegro6);}
			if((alfilblanco1.position.x==peonnegro7.position.x && alfilblanco1.position.z==peonnegro7.position.z)&&
			  (alfilblanco1.position.y==peonnegro7.position.y))
			{peonnegro7.position.y=100;peonnegro7.position.x=100;escena.remove(peonnegro7);}
			if((alfilblanco1.position.x==peonnegro8.position.x && alfilblanco1.position.z==peonnegro8.position.z)&&
			  (alfilblanco1.position.y==peonnegro8.position.y))
			{peonnegro8.position.y=100;peonnegro8.position.x=100;escena.remove(peonnegro8);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((alfilblanco1.position.x==peonblanco1.position.x && alfilblanco1.position.z==peonblanco1.position.z)||
			   (alfilblanco1.position.x==peonblanco2.position.x && alfilblanco1.position.z==peonblanco2.position.z))||
			   (alfilblanco1.position.x==peonblanco3.position.x && alfilblanco1.position.z==peonblanco3.position.z))||
			   (alfilblanco1.position.x==peonblanco4.position.x && alfilblanco1.position.z==peonblanco4.position.z))||
			   (alfilblanco1.position.x==peonblanco5.position.x && alfilblanco1.position.z==peonblanco5.position.z))||
			   (alfilblanco1.position.x==peonblanco6.position.x && alfilblanco1.position.z==peonblanco6.position.z))||
			   (alfilblanco1.position.x==peonblanco7.position.x && alfilblanco1.position.z==peonblanco7.position.z))||
			   (alfilblanco1.position.x==peonblanco8.position.x && alfilblanco1.position.z==peonblanco8.position.z))||
			   (alfilblanco1.position.x==torreblanca2.position.x && alfilblanco1.position.z==torreblanca2.position.z))||
			   (alfilblanco1.position.x==torreblanca1.position.x && alfilblanco1.position.z==torreblanca1.position.z))||
			   (alfilblanco1.position.x==alfilblanco2.position.x && alfilblanco1.position.z==alfilblanco2.position.z))||
			   (alfilblanco1.position.x==caballoblanco1.position.x && alfilblanco1.position.z==caballoblanco1.position.z))||
			   (alfilblanco1.position.x==caballoblanco2.position.x && alfilblanco1.position.z==caballoblanco2.position.z))||
			   (alfilblanco1.position.x==reyblanco.position.x && alfilblanco1.position.z==reyblanco.position.z))||
			   (alfilblanco1.position.x==reinablanca.position.x && alfilblanco1.position.z==reinablanca.position.z)){
				alert("No puedes comer piezas del mismo color");
				alfilblanco1.position.x=bloquerojo.position.x;alfilblanco1.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if alfilblanco1
		  /////////////////////////////////Alfil blanco 2//////////////////////////////////////////////////////////////////
		  if (alfilblanco2.position.x===bloquerojo.position.x && alfilblanco2.position.z===bloquerojo.position.z){
		    var bvab2=bloqueverde;//Bloqueverdealfilblanco2
		    AlfilBlanco.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvab2,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
		      else
			{this.colision = 0;this.step=0.25;}
		    }//fin prototype sense

		    AlfilBlanco.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(alfilblanco2.position.x<bvab2.position.x)
			  alfilblanco2.position.x += this.step;
			else
			  alfilblanco2.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(alfilblanco2.position.z<bvab2.position.z)
			  alfilblanco2.position.z += this.step;
			else
			  alfilblanco2.position.z -= this.step;
		      }//fin if posicion z
			if((alfilblanco2.position.x==torrenegra1.position.x && alfilblanco2.position.z==torrenegra1.position.z)&&
			  (alfilblanco2.position.y==torrenegra1.position.y))
			{torrenegra1.position.y=100;torrenegra1.position.x=100;escena.remove(torrenegra1);}
			if((alfilblanco2.position.x==torrenegra2.position.x && alfilblanco2.position.z==torrenegra2.position.z)&&
			  (alfilblanco2.position.y==torrenegra2.position.y))
			{torrenegra2.position.y=100;torrenegra2.position.x=100;escena.remove(torrenegra2);}
			if((alfilblanco2.position.x==caballonegro1.position.x && alfilblanco2.position.z==caballonegro1.position.z)&&
			  (alfilblanco2.position.y==caballonegro1.position.y))
			{caballonegro1.position.y=100;caballonegro1.position.x=100;escena.remove(caballonegro1);}
			if((alfilblanco2.position.x==caballonegro2.position.x && alfilblanco2.position.z==caballonegro2.position.z)&&
			  (alfilblanco2.position.y==caballonegro2.position.y))
			{caballonegro2.position.y=100;caballonegro2.position.x=100;escena.remove(caballonegro2);}
			if((alfilblanco2.position.x==alfilnegro1.position.x && alfilblanco2.position.z==alfilnegro1.position.z)&&
			  (alfilblanco2.position.y==alfilnegro1.position.y))
			{alfilnegro1.position.y=100;alfilnegro1.position.x=100;escena.remove(alfilnegro1);}
			if((alfilblanco2.position.x==alfilnegro2.position.x && alfilblanco2.position.z==alfilnegro2.position.z)&&
			  (alfilblanco2.position.y==alfilnegro2.position.y))
			{alfilnegro2.position.y=100;alfilnegro2.position.x=100;escena.remove(alfilnegro2);}
			if((alfilblanco2.position.x==reinanegra.position.x && alfilblanco2.position.z==reinanegra.position.z)&&
			  (alfilblanco2.position.y==reinanegra.position.y))
			{reinanegra.position.y=100;reinanegra.position.x=100;escena.remove(reinanegra);}
			if((alfilblanco2.position.x==reynegro.position.x && alfilblanco2.position.z==reynegro.position.z)&&
			  (alfilblanco2.position.y==reynegro.position.y))
			{reynegro.position.y=100;reynegro.position.x=100;escena.remove(reynegro);}
			if((alfilblanco2.position.x==peonnegro1.position.x && alfilblanco2.position.z==peonnegro1.position.z)&&
			  (alfilblanco2.position.y==peonnegro1.position.y))
			{peonnegro1.position.y=100;peonnegro1.position.x=100;escena.remove(peonnegro1);}
			if((alfilblanco2.position.x==peonnegro2.position.x && alfilblanco2.position.z==peonnegro2.position.z)&&
			  (alfilblanco2.position.y==peonnegro2.position.y))
			{peonnegro2.position.y=100;peonnegro2.position.x=100;escena.remove(peonnegro2);}
			if((alfilblanco2.position.x==peonnegro3.position.x && alfilblanco2.position.z==peonnegro3.position.z)&&
			  (alfilblanco2.position.y==peonnegro3.position.y))
			{peonnegro3.position.y=100;peonnegro3.position.x=100;escena.remove(peonnegro3);}
			if((alfilblanco2.position.x==peonnegro4.position.x && alfilblanco2.position.z==peonnegro4.position.z)&&
			  (alfilblanco2.position.y==peonnegro4.position.y))
			{peonnegro4.position.y=100;peonnegro4.position.x=100;escena.remove(peonnegro4);}
			if((alfilblanco2.position.x==peonnegro5.position.x && alfilblanco2.position.z==peonnegro5.position.z)&&
			  (alfilblanco2.position.y==peonnegro5.position.y))
			{peonnegro5.position.y=100;peonnegro5.position.x=100;escena.remove(peonnegro5);}
			if((alfilblanco2.position.x==peonnegro6.position.x && alfilblanco2.position.z==peonnegro6.position.z)&&
			  (alfilblanco2.position.y==peonnegro6.position.y))
			{peonnegro6.position.y=100;peonnegro6.position.x=100;escena.remove(peonnegro6);}
			if((alfilblanco2.position.x==peonnegro7.position.x && alfilblanco2.position.z==peonnegro7.position.z)&&
			  (alfilblanco2.position.y==peonnegro7.position.y))
			{peonnegro7.position.y=100;peonnegro7.position.x=100;escena.remove(peonnegro7);}
			if((alfilblanco2.position.x==peonnegro8.position.x && alfilblanco2.position.z==peonnegro8.position.z)&&
			  (alfilblanco2.position.y==peonnegro8.position.y))
			{peonnegro8.position.y=100;peonnegro8.position.x=100;escena.remove(peonnegro8);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((alfilblanco2.position.x==peonblanco1.position.x && alfilblanco2.position.z==peonblanco1.position.z)||
			   (alfilblanco2.position.x==peonblanco2.position.x && alfilblanco2.position.z==peonblanco2.position.z))||
			   (alfilblanco2.position.x==peonblanco3.position.x && alfilblanco2.position.z==peonblanco3.position.z))||
			   (alfilblanco2.position.x==peonblanco4.position.x && alfilblanco2.position.z==peonblanco4.position.z))||
			   (alfilblanco2.position.x==peonblanco5.position.x && alfilblanco2.position.z==peonblanco5.position.z))||
			   (alfilblanco2.position.x==peonblanco6.position.x && alfilblanco2.position.z==peonblanco6.position.z))||
			   (alfilblanco2.position.x==peonblanco7.position.x && alfilblanco2.position.z==peonblanco7.position.z))||
			   (alfilblanco2.position.x==peonblanco8.position.x && alfilblanco2.position.z==peonblanco8.position.z))||
			   (alfilblanco2.position.x==torreblanca2.position.x && alfilblanco2.position.z==torreblanca2.position.z))||
			   (alfilblanco2.position.x==torreblanca1.position.x && alfilblanco2.position.z==torreblanca1.position.z))||
			   (alfilblanco2.position.x==alfilblanco1.position.x && alfilblanco2.position.z==alfilblanco1.position.z))||
			   (alfilblanco2.position.x==caballoblanco1.position.x && alfilblanco2.position.z==caballoblanco1.position.z))||
			   (alfilblanco2.position.x==caballoblanco2.position.x && alfilblanco2.position.z==caballoblanco2.position.z))||
			   (alfilblanco2.position.x==reyblanco.position.x && alfilblanco2.position.z==reyblanco.position.z))||
			   (alfilblanco2.position.x==reinablanca.position.x && alfilblanco2.position.z==reinablanca.position.z)){
				alert("No puedes comer piezas del mismo color");
				alfilblanco2.position.x=bloquerojo.position.x;alfilblanco2.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if alfilblanco2
		  /////////////////////////////////Alfil Negro 1///////////////////////////////////////////////////////////////////
		  if (alfilnegro1.position.x===bloquerojo.position.x && alfilnegro1.position.z===bloquerojo.position.z){
		    var bvan1 = bloqueverde;
		    AlfilNegro.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo2 = this.sensor.intersectObjects(bvan1,true);
		      if(obstaculo2.length > 0)
			{this.colision = 1;this.step=0;}
		      else
			{this.colision = 0;this.step=0.25;}
		    }//fin prototype sense

		    AlfilNegro.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(alfilnegro1.position.x<bvan1.position.x)
			  alfilnegro1.position.x += this.step;
			else
			  alfilnegro1.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(alfilnegro1.position.z<bvan1.position.z)
			  alfilnegro1.position.z += this.step;
			else
			  alfilnegro1.position.z -= this.step;
		      }//fin if posicion z
			if((alfilnegro1.position.x==torreblanca1.position.x && alfilnegro1.position.z==torreblanca1.position.z)&&
			  (alfilnegro1.position.y==torreblanca1.position.y))
			{torreblanca1.position.y=100;torreblanca1.position.x=100;escena.remove(torreblanca1);}
			if((alfilnegro1.position.x==torreblanca2.position.x && alfilnegro1.position.z==torreblanca2.position.z)&&
			  (alfilnegro1.position.y==torreblanca2.position.y))
			{torreblanca2.position.y=100;torreblanca2.position.x=100;escena.remove(torreblanca2);}
			if((alfilnegro1.position.x==caballoblanco1.position.x && alfilnegro1.position.z==caballoblanco1.position.z)&&
			  (alfilnegro1.position.y==caballoblanco1.position.y))
			{caballoblanco1.position.y=100;caballoblanco1.position.x=100;escena.remove(caballoblanco1);}
			if((alfilnegro1.position.x==caballoblanco2.position.x && alfilnegro1.position.z==caballoblanco2.position.z)&&
			  (alfilnegro1.position.y==caballoblanco2.position.y))
			{caballoblanco2.position.y=100;caballoblanco2.position.x=100;escena.remove(caballoblanco2);}
			if((alfilnegro1.position.x==alfilblanco1.position.x && alfilnegro1.position.z==alfilblanco1.position.z)&&
			  (alfilnegro1.position.y==alfilblanco1.position.y))
			{alfilblanco1.position.y=100;alfilblanco1.position.x=100;escena.remove(alfilblanco1);}
			if((alfilnegro1.position.x==alfilblanco2.position.x && alfilnegro1.position.z==alfilblanco2.position.z)&&
			  (alfilnegro1.position.y==alfilblanco2.position.y))
			{alfilblanco2.position.y=100;alfilblanco2.position.x=100;escena.remove(alfilblanco2);}
			if((alfilnegro1.position.x==reinablanca.position.x && alfilnegro1.position.z==reinablanca.position.z)&&
			  (alfilnegro1.position.y==reinablanca.position.y))
			{reinablanca.position.y=100;reinablanca.position.x=100;escena.remove(reinablanca);}
			if((alfilnegro1.position.x==reyblanco.position.x && alfilnegro1.position.z==reyblanco.position.z)&&
			  (alfilnegro1.position.y==reyblanco.position.y))
			{reyblanco.position.y=100;reyblanco.position.x=100;escena.remove(reyblanco);}
			if((alfilnegro1.position.x==peonblanco1.position.x && alfilnegro1.position.z==peonblanco1.position.z)&&
			  (alfilnegro1.position.y==peonblanco1.position.y))
			{peonblanco1.position.y=100;peonblanco1.position.x=100;escena.remove(peonblanco1);}
			if((alfilnegro1.position.x==peonblanco2.position.x && alfilnegro1.position.z==peonblanco2.position.z)&&
			  (alfilnegro1.position.y==peonblanco2.position.y))
			{peonblanco2.position.y=100;peonblanco2.position.x=100;escena.remove(peonblanco2);}
			if((alfilnegro1.position.x==peonblanco3.position.x && alfilnegro1.position.z==peonblanco3.position.z)&&
			  (alfilnegro1.position.y==peonblanco3.position.y))
			{peonblanco3.position.y=100;peonblanco3.position.x=100;escena.remove(peonblanco3);}
			if((alfilnegro1.position.x==peonblanco4.position.x && alfilnegro1.position.z==peonblanco4.position.z)&&
			  (alfilnegro1.position.y==peonblanco4.position.y))
			{peonblanco4.position.y=100;peonblanco4.position.x=100;escena.remove(peonblanco4);}
			if((alfilnegro1.position.x==peonblanco5.position.x && alfilnegro1.position.z==peonblanco5.position.z)&&
			  (alfilnegro1.position.y==peonblanco5.position.y))
			{peonblanco5.position.y=100;peonblanco5.position.x=100;escena.remove(peonblanco5);}
			if((alfilnegro1.position.x==peonblanco6.position.x && alfilnegro1.position.z==peonblanco6.position.z)&&
			  (alfilnegro1.position.y==peonblanco6.position.y))
			{peonblanco6.position.y=100;peonblanco6.position.x=100;escena.remove(peonblanco6);}
			if((alfilnegro1.position.x==peonblanco7.position.x && alfilnegro1.position.z==peonblanco7.position.z)&&
			  (alfilnegro1.position.y==peonblanco7.position.y))
			{peonblanco7.position.y=100;peonblanco7.position.x=100;escena.remove(peonblanco7);}
			if((alfilnegro1.position.x==peonblanco8.position.x && alfilnegro1.position.z==peonblanco8.position.z)&&
			  (alfilnegro1.position.y==peonblanco8.position.y))
			{peonblanco8.position.y=100;peonblanco8.position.x=100;escena.remove(peonblanco8);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((alfilnegro1.position.x==peonnegro1.position.x && alfilnegro1.position.z==peonnegro1.position.z)||
			   (alfilnegro1.position.x==peonnegro2.position.x && alfilnegro1.position.z==peonnegro2.position.z))||
			   (alfilnegro1.position.x==peonnegro3.position.x && alfilnegro1.position.z==peonnegro3.position.z))||
			   (alfilnegro1.position.x==peonnegro4.position.x && alfilnegro1.position.z==peonnegro4.position.z))||
			   (alfilnegro1.position.x==peonnegro5.position.x && alfilnegro1.position.z==peonnegro5.position.z))||
			   (alfilnegro1.position.x==peonnegro6.position.x && alfilnegro1.position.z==peonnegro6.position.z))||
			   (alfilnegro1.position.x==peonnegro7.position.x && alfilnegro1.position.z==peonnegro7.position.z))||
			   (alfilnegro1.position.x==peonnegro8.position.x && alfilnegro1.position.z==peonnegro8.position.z))||
			   (alfilnegro1.position.x==torrenegra2.position.x && alfilnegro1.position.z==torrenegra2.position.z))||
			   (alfilnegro1.position.x==torrenegra1.position.x && alfilnegro1.position.z==torrenegra1.position.z))||
			   (alfilnegro1.position.x==alfilnegro2.position.x && alfilnegro1.position.z==alfilnegro2.position.z))||
			   (alfilnegro1.position.x==caballonegro1.position.x && alfilnegro1.position.z==caballonegro1.position.z))||
			   (alfilnegro1.position.x==caballonegro2.position.x && alfilnegro1.position.z==caballonegro2.position.z))||
			   (alfilnegro1.position.x==reynegro.position.x && alfilnegro1.position.z==reynegro.position.z))||
			   (alfilnegro1.position.x==reinanegra.position.x && alfilnegro1.position.z==reinanegra.position.z)){
				alert("No puedes comer piezas del mismo color");
				alfilnegro1.position.x=bloquerojo.position.x;alfilnegro1.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if alfilnegro1
		  ////////////////////////////Alfil Negro 2///////////////////////////////////////////////////////////////////  
		  if (alfilnegro2.position.x===bloquerojo.position.x && alfilnegro2.position.z===bloquerojo.position.z){
		    var bvan2 = bloqueverde;
		    AlfilNegro.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo2 = this.sensor.intersectObjects(bvan2,true);
		      if(obstaculo2.length > 0)
			{this.colision = 1;this.step=0;}
		      else
			{this.colision = 0;this.step=0.25;}
		    }//fin prototype sense

		    AlfilNegro.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(alfilnegro2.position.x<bvan2.position.x)
			  alfilnegro2.position.x += this.step;
			else
			  alfilnegro2.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(alfilnegro2.position.z<bvan2.position.z)
			  alfilnegro2.position.z += this.step;
			else
			  alfilnegro2.position.z -= this.step;
		      }//fin if posicion z
			if((alfilnegro2.position.x==torreblanca1.position.x && alfilnegro2.position.z==torreblanca1.position.z)&&
			  (alfilnegro2.position.y==torreblanca1.position.y))
			{torreblanca1.position.y=100;torreblanca1.position.x=100;escena.remove(torreblanca1);}
			if((alfilnegro2.position.x==torreblanca2.position.x && alfilnegro2.position.z==torreblanca2.position.z)&&
			  (alfilnegro2.position.y==torreblanca2.position.y))
			{torreblanca2.position.y=100;torreblanca2.position.x=100;escena.remove(torreblanca2);}
			if((alfilnegro2.position.x==caballoblanco1.position.x && alfilnegro2.position.z==caballoblanco1.position.z)&&
			  (alfilnegro2.position.y==caballoblanco1.position.y))
			{caballoblanco1.position.y=100;caballoblanco1.position.x=100;escena.remove(caballoblanco1);}
			if((alfilnegro2.position.x==caballoblanco2.position.x && alfilnegro2.position.z==caballoblanco2.position.z)&&
			  (alfilnegro2.position.y==caballoblanco2.position.y))
			{caballoblanco2.position.y=100;caballoblanco2.position.x=100;escena.remove(caballoblanco2);}
			if((alfilnegro2.position.x==alfilblanco1.position.x && alfilnegro2.position.z==alfilblanco1.position.z)&&
			  (alfilnegro2.position.y==alfilblanco1.position.y))
			{alfilblanco1.position.y=100;alfilblanco1.position.x=100;escena.remove(alfilblanco1);}
			if((alfilnegro2.position.x==alfilblanco2.position.x && alfilnegro2.position.z==alfilblanco2.position.z)&&
			  (alfilnegro2.position.y==alfilblanco2.position.y))
			{alfilblanco2.position.y=100;alfilblanco2.position.x=100;escena.remove(alfilblanco2);}
			if((alfilnegro2.position.x==reinablanca.position.x && alfilnegro2.position.z==reinablanca.position.z)&&
			  (alfilnegro2.position.y==reinablanca.position.y))
			{reinablanca.position.y=100;reinablanca.position.x=100;escena.remove(reinablanca);}
			if((alfilnegro2.position.x==reyblanco.position.x && alfilnegro2.position.z==reyblanco.position.z)&&
			  (alfilnegro2.position.y==reyblanco.position.y))
			{reyblanco.position.y=100;reyblanco.position.x=100;escena.remove(reyblanco);}
			if((alfilnegro2.position.x==peonblanco1.position.x && alfilnegro2.position.z==peonblanco1.position.z)&&
			  (alfilnegro2.position.y==peonblanco1.position.y))
			{peonblanco1.position.y=100;peonblanco1.position.x=100;escena.remove(peonblanco1);}
			if((alfilnegro2.position.x==peonblanco2.position.x && alfilnegro2.position.z==peonblanco2.position.z)&&
			  (alfilnegro2.position.y==peonblanco2.position.y))
			{peonblanco2.position.y=100;peonblanco2.position.x=100;escena.remove(peonblanco2);}
			if((alfilnegro2.position.x==peonblanco3.position.x && alfilnegro2.position.z==peonblanco3.position.z)&&
			  (alfilnegro2.position.y==peonblanco3.position.y))
			{peonblanco3.position.y=100;peonblanco3.position.x=100;escena.remove(peonblanco3);}
			if((alfilnegro2.position.x==peonblanco4.position.x && alfilnegro2.position.z==peonblanco4.position.z)&&
			  (alfilnegro2.position.y==peonblanco4.position.y))
			{peonblanco4.position.y=100;peonblanco4.position.x=100;escena.remove(peonblanco4);}
			if((alfilnegro2.position.x==peonblanco5.position.x && alfilnegro2.position.z==peonblanco5.position.z)&&
			  (alfilnegro2.position.y==peonblanco5.position.y))
			{peonblanco5.position.y=100;peonblanco5.position.x=100;escena.remove(peonblanco5);}
			if((alfilnegro2.position.x==peonblanco6.position.x && alfilnegro2.position.z==peonblanco6.position.z)&&
			  (alfilnegro2.position.y==peonblanco6.position.y))
			{peonblanco6.position.y=100;peonblanco6.position.x=100;escena.remove(peonblanco6);}
			if((alfilnegro2.position.x==peonblanco7.position.x && alfilnegro2.position.z==peonblanco7.position.z)&&
			  (alfilnegro2.position.y==peonblanco7.position.y))
			{peonblanco7.position.y=100;peonblanco7.position.x=100;escena.remove(peonblanco7);}
			if((alfilnegro2.position.x==peonblanco8.position.x && alfilnegro2.position.z==peonblanco8.position.z)&&
			  (alfilnegro2.position.y==peonblanco8.position.y))
			{peonblanco8.position.y=100;peonblanco8.position.x=100;escena.remove(peonblanco8);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((alfilnegro2.position.x==peonnegro1.position.x && alfilnegro2.position.z==peonnegro1.position.z)||
			   (alfilnegro2.position.x==peonnegro2.position.x && alfilnegro2.position.z==peonnegro2.position.z))||
			   (alfilnegro2.position.x==peonnegro3.position.x && alfilnegro2.position.z==peonnegro3.position.z))||
			   (alfilnegro2.position.x==peonnegro4.position.x && alfilnegro2.position.z==peonnegro4.position.z))||
			   (alfilnegro2.position.x==peonnegro5.position.x && alfilnegro2.position.z==peonnegro5.position.z))||
			   (alfilnegro2.position.x==peonnegro6.position.x && alfilnegro2.position.z==peonnegro6.position.z))||
			   (alfilnegro2.position.x==peonnegro7.position.x && alfilnegro2.position.z==peonnegro7.position.z))||
			   (alfilnegro2.position.x==peonnegro8.position.x && alfilnegro2.position.z==peonnegro8.position.z))||
			   (alfilnegro2.position.x==torrenegra2.position.x && alfilnegro2.position.z==torrenegra2.position.z))||
			   (alfilnegro2.position.x==alfilnegro1.position.x && alfilnegro2.position.z==alfilnegro1.position.z))||
			   (alfilnegro2.position.x==torrenegra1.position.x && alfilnegro2.position.z==torrenegra1.position.z))||
			   (alfilnegro2.position.x==caballonegro1.position.x && alfilnegro2.position.z==caballonegro1.position.z))||
			   (alfilnegro2.position.x==caballonegro2.position.x && alfilnegro2.position.z==caballonegro2.position.z))||
			   (alfilnegro2.position.x==reynegro.position.x && alfilnegro2.position.z==reynegro.position.z))||
			   (alfilnegro2.position.x==reinanegra.position.x && alfilnegro2.position.z==reinanegra.position.z)){
				alert("No puedes comer piezas del mismo color");
				alfilnegro2.position.x=bloquerojo.position.x;alfilnegro2.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if alfilnegro2
//////////////////////////////////////////////////////Reinas///////////////////////////////////////////////////////////////////////////
		  ///////////////////////////////////Reina Blanca//////////////////////////////////////////////////////////////////
		  if (reinablanca.position.x===bloquerojo.position.x && reinablanca.position.z===bloquerojo.position.z){
		    var bvrab=bloqueverde;
		    ReinaBlanca.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvrab,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
		      else
			{this.colision = 0;this.step=0.25;}
		    }//fin prototype sense

		    ReinaBlanca.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(reinablanca.position.x<bvrab.position.x)
			  reinablanca.position.x += this.step;
			else
			  reinablanca.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(reinablanca.position.z<bvrab.position.z)
			  reinablanca.position.z += this.step;
			else
			  reinablanca.position.z -= this.step;
		      }//fin if posicion z
			if((reinablanca.position.x==torrenegra1.position.x && reinablanca.position.z==torrenegra1.position.z)&&
			  (reinablanca.position.y==torrenegra1.position.y))
			{torrenegra1.position.y=100;torrenegra1.position.x=100;escena.remove(torrenegra1);}
			if((reinablanca.position.x==torrenegra2.position.x && reinablanca.position.z==torrenegra2.position.z)&&
			  (reinablanca.position.y==torrenegra2.position.y))
			{torrenegra2.position.y=100;torrenegra2.position.x=100;escena.remove(torrenegra2);}
			if((reinablanca.position.x==caballonegro1.position.x && reinablanca.position.z==caballonegro1.position.z)&&
			  (reinablanca.position.y==caballonegro1.position.y))
			{caballonegro1.position.y=100;caballonegro1.position.x=100;escena.remove(caballonegro1);}
			if((reinablanca.position.x==caballonegro2.position.x && reinablanca.position.z==caballonegro2.position.z)&&
			  (reinablanca.position.y==caballonegro2.position.y))
			{caballonegro2.position.y=100;caballonegro2.position.x=100;escena.remove(caballonegro2);}
			if((reinablanca.position.x==alfilnegro1.position.x && reinablanca.position.z==alfilnegro1.position.z)&&
			  (reinablanca.position.y==alfilnegro1.position.y))
			{alfilnegro1.position.y=100;alfilnegro1.position.x=100;escena.remove(alfilnegro1);}
			if((reinablanca.position.x==alfilnegro2.position.x && reinablanca.position.z==alfilnegro2.position.z)&&
			  (reinablanca.position.y==alfilnegro2.position.y))
			{alfilnegro2.position.y=100;alfilnegro2.position.x=100;escena.remove(alfilnegro2);}
			if((reinablanca.position.x==reinanegra.position.x && reinablanca.position.z==reinanegra.position.z)&&
			  (reinablanca.position.y==reinanegra.position.y))
			{reinanegra.position.y=100;reinanegra.position.x=100;escena.remove(reinanegra);}
			if((reinablanca.position.x==reynegro.position.x && reinablanca.position.z==reynegro.position.z)&&
			  (reinablanca.position.y==reynegro.position.y))
			{reynegro.position.y=100;reynegro.position.x=100;escena.remove(reynegro);}
			if((reinablanca.position.x==peonnegro1.position.x && reinablanca.position.z==peonnegro1.position.z)&&
			  (reinablanca.position.y==peonnegro1.position.y))
			{peonnegro1.position.y=100;peonnegro1.position.x=100;escena.remove(peonnegro1);}
			if((reinablanca.position.x==peonnegro2.position.x && reinablanca.position.z==peonnegro2.position.z)&&
			  (reinablanca.position.y==peonnegro2.position.y))
			{peonnegro2.position.y=100;peonnegro2.position.x=100;escena.remove(peonnegro2);}
			if((reinablanca.position.x==peonnegro3.position.x && reinablanca.position.z==peonnegro3.position.z)&&
			  (reinablanca.position.y==peonnegro3.position.y))
			{peonnegro3.position.y=100;peonnegro3.position.x=100;escena.remove(peonnegro3);}
			if((reinablanca.position.x==peonnegro4.position.x && reinablanca.position.z==peonnegro4.position.z)&&
			  (reinablanca.position.y==peonnegro4.position.y))
			{peonengro4.position.y=100;peonnegro4.position.x=100;escena.remove(peonnegro4);}
			if((reinablanca.position.x==peonnegro5.position.x && reinablanca.position.z==peonnegro5.position.z)&&
			  (reinablanca.position.y==peonnegro5.position.y))
			{peonnegro5.position.y=100;peonnegro5.position.x=100;escena.remove(peonnegro5);}
			if((reinablanca.position.x==peonnegro6.position.x && reinablanca.position.z==peonnegro6.position.z)&&
			  (reinablanca.position.y==peonnegro6.position.y))
			{peonnegro6.position.y=100;peonnegro6.position.x=100;escena.remove(peonnegro6);}
			if((reinablanca.position.x==peonnegro7.position.x && reinablanca.position.z==peonnegro7.position.z)&&
			  (reinablanca.position.y==peonnegro7.position.y))
			{peonnegro7.position.y=100;peonnegro7.position.x=100;escena.remove(peonnegro7);}
			if((reinablanca.position.x==peonnegro8.position.x && reinablanca.position.z==peonnegro8.position.z)&&
			  (reinablanca.position.y==peonnegro8.position.y))
			{peonnegro8.position.y=100;peonnegro8.position.x=100;escena.remove(peonnegro8);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((reinablanca.position.x==peonblanco1.position.x && reinablanca.position.z==peonblanco1.position.z)||
			   (reinablanca.position.x==peonblanco2.position.x && reinablanca.position.z==peonblanco2.position.z))||
			   (reinablanca.position.x==peonblanco3.position.x && reinablanca.position.z==peonblanco3.position.z))||
			   (reinablanca.position.x==peonblanco4.position.x && reinablanca.position.z==peonblanco4.position.z))||
			   (reinablanca.position.x==peonblanco5.position.x && reinablanca.position.z==peonblanco5.position.z))||
			   (reinablanca.position.x==peonblanco6.position.x && reinablanca.position.z==peonblanco6.position.z))||
			   (reinablanca.position.x==peonblanco7.position.x && reinablanca.position.z==peonblanco7.position.z))||
			   (reinablanca.position.x==peonblanco8.position.x && reinablanca.position.z==peonblanco8.position.z))||
			   (reinablanca.position.x==torreblanca2.position.x && reinablanca.position.z==torreblanca2.position.z))||
			   (reinablanca.position.x==torreblanca1.position.x && reinablanca.position.z==torreblanca1.position.z))||
			   (reinablanca.position.x==alfilblanco2.position.x && reinablanca.position.z==alfilblanco2.position.z))||
			   (reinablanca.position.x==caballoblanco1.position.x && reinablanca.position.z==caballoblanco1.position.z))||
			   (reinablanca.position.x==caballoblanco2.position.x && reinablanca.position.z==caballoblanco2.position.z))||
			   (reinablanca.position.x==reyblanco.position.x && reinablanca.position.z==reyblanco.position.z))||
			   (reinablanca.position.x==alfilblanco1.position.x && reinablanca.position.z==alfilblanco1.position.z)){
				alert("No puedes comer piezas del mismo color");
				reinablanca.position.x=bloquerojo.position.x;reinablanca.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if reinablanca
		  /////////////////////////////////Reina Negra//////////////////////////////////////////////////////////////////
		  if (reinanegra.position.x===bloquerojo.position.x && reinanegra.position.z===bloquerojo.position.z){
		    var bvran=bloqueverde;
		    ReinaNegra.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvran,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
		      else
			{this.colision = 0;this.step=0.25;}
		    }//fin prototype sense

		    ReinaNegra.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(reinanegra.position.x<bvran.position.x)
			  reinanegra.position.x += this.step;
			else
			  reinanegra.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(reinanegra.position.z<bvran.position.z)
			  reinanegra.position.z += this.step;
			else
			  reinanegra.position.z -= this.step;
		      }//fin if posicion z
			if((reinanegra.position.x==torreblanca1.position.x && reinanegra.position.z==torreblanca1.position.z)&&
			  (reinanegra.position.y==torreblanca1.position.y))
			{torreblanca1.position.y=100;torreblanca1.position.x=100;escena.remove(torreblanca1);}
			if((reinanegra.position.x==torreblanca2.position.x && reinanegra.position.z==torreblanca2.position.z)&&
			  (reinanegra.position.y==torreblanca2.position.y))
			{torreblanca2.position.y=100;torreblanca2.position.x=100;escena.remove(torreblanca2);}
			if((reinanegra.position.x==caballoblanco1.position.x && reinanegra.position.z==caballoblanco1.position.z)&&
			  (reinanegra.position.y==caballoblanco1.position.y))
			{caballoblanco1.position.y=100;caballoblanco1.position.x=100;escena.remove(caballoblanco1);}
			if((reinanegra.position.x==caballoblanco2.position.x && reinanegra.position.z==caballoblanco2.position.z)&&
			  (reinanegra.position.y==caballoblanco2.position.y))
			{caballoblanco2.position.y=100;caballoblanco2.position.x=100;escena.remove(caballoblanco2);}
			if((reinanegra.position.x==alfilblanco1.position.x && reinanegra.position.z==alfilblanco1.position.z)&&
			  (reinanegra.position.y==alfilblanco1.position.y))
			{alfilblanco1.position.y=100;alfilblanco1.position.x=100;escena.remove(alfilblanco1);}
			if((reinanegra.position.x==alfilblanco2.position.x && reinanegra.position.z==alfilblanco2.position.z)&&
			  (reinanegra.position.y==alfilblanco2.position.y))
			{alfilblanco2.position.y=100;alfilblanco2.position.x=100;escena.remove(alfilblanco2);}
			if((reinanegra.position.x==reinablanca.position.x && reinanegra.position.z==reinablanca.position.z)&&
			  (reinanegra.position.y==reinablanca.position.y))
			{reinablanca.position.y=100;reinablanca.position.x=100;escena.remove(reinablanca);}
			if((reinanegra.position.x==reyblanco.position.x && reinanegra.position.z==reyblanco.position.z)&&
			  (reinanegra.position.y==reyblanco.position.y))
			{reyblanco.position.y=100;reyblanco.position.x=100;escena.remove(reyblanco);}
			if((reinanegra.position.x==peonblanco1.position.x && reinanegra.position.z==peonblanco1.position.z)&&
			  (reinanegra.position.y==peonblanco1.position.y))
			{peonblanco1.position.y=100;peonblanco1.position.x=100;escena.remove(peonblanco1);}
			if((reinanegra.position.x==peonblanco2.position.x && reinanegra.position.z==peonblanco2.position.z)&&
			  (reinanegra.position.y==peonblanco2.position.y))
			{peonblanco2.position.y=100;peonblanco2.position.x=100;escena.remove(peonblanco2);}
			if((reinanegra.position.x==peonblanco3.position.x && reinanegra.position.z==peonblanco3.position.z)&&
			  (reinanegra.position.y==peonblanco3.position.y))
			{peonblanco3.position.y=100;peonblanco3.position.x=100;escena.remove(peonblanco3);}
			if((reinanegra.position.x==peonblanco4.position.x && reinanegra.position.z==peonblanco4.position.z)&&
			  (reinanegra.position.y==peonblanco4.position.y))
			{peonblanco4.position.y=100;peonblanco4.position.x=100;escena.remove(peonblanco4);}
			if((reinanegra.position.x==peonblanco5.position.x && reinanegra.position.z==peonblanco5.position.z)&&
			  (reinanegra.position.y==peonblanco5.position.y))
			{peonblanco5.position.y=100;peonblanco5.position.x=100;escena.remove(peonblanco5);}
			if((reinanegra.position.x==peonblanco6.position.x && reinanegra.position.z==peonblanco6.position.z)&&
			  (reinanegra.position.y==peonblanco6.position.y))
			{peonblanco6.position.y=100;peonblanco6.position.x=100;escena.remove(peonblanco6);}
			if((reinanegra.position.x==peonblanco7.position.x && reinanegra.position.z==peonblanco7.position.z)&&
			  (reinanegra.position.y==peonblanco7.position.y))
			{peonblanco7.position.y=100;peonblanco7.position.x=100;escena.remove(peonblanco7);}
			if((reinanegra.position.x==peonblanco8.position.x && reinanegra.position.z==peonblanco8.position.z)&&
			  (reinanegra.position.y==peonblanco8.position.y))
			{peonblanco8.position.y=100;peonblanco8.position.x=100;escena.remove(peonblanco8);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((reinanegra.position.x==peonnegro1.position.x && reinanegra.position.z==peonnegro1.position.z)||
			   (reinanegra.position.x==peonnegro2.position.x && reinanegra.position.z==peonnegro2.position.z))||
			   (reinanegra.position.x==peonnegro3.position.x && reinanegra.position.z==peonnegro3.position.z))||
			   (reinanegra.position.x==peonnegro4.position.x && reinanegra.position.z==peonnegro4.position.z))||
			   (reinanegra.position.x==peonnegro5.position.x && reinanegra.position.z==peonnegro5.position.z))||
			   (reinanegra.position.x==peonnegro6.position.x && reinanegra.position.z==peonnegro6.position.z))||
			   (reinanegra.position.x==peonnegro7.position.x && reinanegra.position.z==peonnegro7.position.z))||
			   (reinanegra.position.x==peonnegro8.position.x && reinanegra.position.z==peonnegro8.position.z))||
			   (reinanegra.position.x==torrenegra2.position.x && reinanegra.position.z==torrenegra2.position.z))||
			   (reinanegra.position.x==alfilnegro1.position.x && reinanegra.position.z==alfilnegro1.position.z))||
			   (reinanegra.position.x==alfilnegro2.position.x && reinanegra.position.z==alfilnegro2.position.z))||
			   (reinanegra.position.x==caballonegro1.position.x && reinanegra.position.z==caballonegro1.position.z))||
			   (reinanegra.position.x==caballonegro2.position.x && reinanegra.position.z==caballonegro2.position.z))||
			   (reinanegra.position.x==reynegro.position.x && reinanegra.position.z==reynegro.position.z))||
			   (reinanegra.position.x==torrenegra1.position.x && reinanegra.position.z==torrenegra1.position.z)){
				alert("No puedes comer piezas del mismo color");
				reinanegra.position.x=bloquerojo.position.x;reinanegra.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if reinanegra
//////////////////////////////////////////////////////Reyes///////////////////////////////////////////////////////////////////////////
		  ///////////////////////////////////Rey Blanco//////////////////////////////////////////////////////////////////
		  if (reyblanco.position.x===bloquerojo.position.x && reyblanco.position.z===bloquerojo.position.z){
		    var bvryb=bloqueverde;
		    ReyBlanco.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvryb,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
		      else
			{this.colision = 0;this.step=0.25;}
		    }//fin prototype sense

		    ReyBlanco.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(reyblanco.position.x<bvryb.position.x)
			  reyblanco.position.x += this.step;
			else
			  reyblanco.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(reyblanco.position.z<bvryb.position.z)
			  reyblanco.position.z += this.step;
			else
			  reyblanco.position.z -= this.step;
		      }//fin if posicion z
			if((reyblanco.position.x==torrenegra1.position.x && reyblanco.position.z==torrenegra1.position.z)&&
			  (reyblanco.position.y==torrenegra1.position.y))
			{torrenegra1.position.y=100;torrenegra1.position.x=100;escena.remove(torrenegra1);}
			if((reyblanco.position.x==torrenegra2.position.x && reyblanco.position.z==torrenegra2.position.z)&&
			  (reyblanco.position.y==torrenegra2.position.y))
			{torrenegra2.position.y=100;torrenegra2.position.x=100;escena.remove(torrenegra2);}
			if((reyblanco.position.x==caballonegro1.position.x && reyblanco.position.z==caballonegro1.position.z)&&
			  (reyblanco.position.y==caballonegro1.position.y))
			{caballonegro1.position.y=100;caballonegro1.position.x=100;escena.remove(caballonegro1);}
			if((reyblanco.position.x==caballonegro2.position.x && reyblanco.position.z==caballonegro2.position.z)&&
			  (reyblanco.position.y==caballonegro2.position.y))
			{caballonegro2.position.y=100;caballonegro2.position.x=100;escena.remove(caballonegro2);}
			if((reyblanco.position.x==alfilnegro1.position.x && reyblanco.position.z==alfilnegro1.position.z)&&
			  (reyblanco.position.y==alfilnegro1.position.y))
			{alfilnegro1.position.y=100;alfilnegro1.position.x=100;escena.remove(alfilnegro1);}
			if((reyblanco.position.x==alfilnegro2.position.x && reyblanco.position.z==alfilnegro2.position.z)&&
			  (reyblanco.position.y==alfilnegro2.position.y))
			{alfilnegro2.position.y=100;alfilnegro2.position.x=100;escena.remove(alfilnegro2);}
			if((reyblanco.position.x==reinanegra.position.x && reyblanco.position.z==reinanegra.position.z)&&
			  (reyblanco.position.y==reinanegra.position.y))
			{reinanegra.position.y=100;reinanegra.position.x=100;escena.remove(reinanegra);}
			if((reyblanco.position.x==reynegro.position.x && reyblanco.position.z==reynegro.position.z)&&
			  (reyblanco.position.y==reynegro.position.y))
			{reynegro.position.y=100;reynegro.position.x=100;escena.remove(reynegro);}
			if((reyblanco.position.x==peonnegro1.position.x && reyblanco.position.z==peonnegro1.position.z)&&
			  (reyblanco.position.y==peonnegro1.position.y))
			{peonnegro1.position.y=100;peonnegro1.position.x=100;escena.remove(peonnegro1);}
			if((reyblanco.position.x==peonnegro2.position.x && reyblanco.position.z==peonnegro2.position.z)&&
			  (reyblanco.position.y==peonnegro2.position.y))
			{peonnegro2.position.y=100;peonnegro2.position.x=100;escena.remove(peonnegro2);}
			if((reyblanco.position.x==peonnegro3.position.x && reyblanco.position.z==peonnegro3.position.z)&&
			  (reyblanco.position.y==peonnegro3.position.y))
			{peonnegro3.position.y=100;peonnegro3.position.x=100;escena.remove(peonnegro3);}
			if((reyblanco.position.x==peonnegro4.position.x && reyblanco.position.z==peonnegro4.position.z)&&
			  (reyblanco.position.y==peonnegro4.position.y))
			{peonnegro4.position.y=100;peonnegro4.position.x=100;escena.remove(peonnegro4);}
			if((reyblanco.position.x==peonnegro5.position.x && reyblanco.position.z==peonnegro5.position.z)&&
			  (reyblanco.position.y==peonnegro5.position.y))
			{peonnegro5.position.y=100;peonnegro5.position.x=100;escena.remove(peonnegro5);}
			if((reyblanco.position.x==peonnegro6.position.x && reyblanco.position.z==peonnegro6.position.z)&&
			  (reyblanco.position.y==peonnegro6.position.y))
			{peonnegro6.position.y=100;peonnegro6.position.x=100;escena.remove(peonnegro6);}
			if((reyblanco.position.x==peonnegro7.position.x && reyblanco.position.z==peonnegro7.position.z)&&
			  (reyblanco.position.y==peonnegro7.position.y))
			{peonengro7.position.y=100;peonnegro7.position.x=100;escena.remove(peonnegro7);}
			if((reyblanco.position.x==peonnegro8.position.x && reyblanco.position.z==peonnegro8.position.z)&&
			  (reyblanco.position.y==peonnegro8.position.y))
			{peonnegro8.position.y=100;peonnegro8.position.x=100;escena.remove(peonnegro8);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((reyblanco.position.x==peonblanco1.position.x && reyblanco.position.z==peonblanco1.position.z)||
			   (reyblanco.position.x==peonblanco2.position.x && reyblanco.position.z==peonblanco2.position.z))||
			   (reyblanco.position.x==peonblanco3.position.x && reyblanco.position.z==peonblanco3.position.z))||
			   (reyblanco.position.x==peonblanco4.position.x && reyblanco.position.z==peonblanco4.position.z))||
			   (reyblanco.position.x==peonblanco5.position.x && reyblanco.position.z==peonblanco5.position.z))||
			   (reyblanco.position.x==peonblanco6.position.x && reyblanco.position.z==peonblanco6.position.z))||
			   (reyblanco.position.x==peonblanco7.position.x && reyblanco.position.z==peonblanco7.position.z))||
			   (reyblanco.position.x==peonblanco8.position.x && reyblanco.position.z==peonblanco8.position.z))||
			   (reyblanco.position.x==torreblanca2.position.x && reyblanco.position.z==torreblanca2.position.z))||
			   (reyblanco.position.x==torreblanca1.position.x && reyblanco.position.z==torreblanca1.position.z))||
			   (reyblanco.position.x==alfilblanco2.position.x && reyblanco.position.z==alfilblanco2.position.z))||
			   (reyblanco.position.x==caballoblanco1.position.x && reyblanco.position.z==caballoblanco1.position.z))||
			   (reyblanco.position.x==caballoblanco2.position.x && reyblanco.position.z==caballoblanco2.position.z))||
			   (reyblanco.position.x==alfilblanco1.position.x && reyblanco.position.z==alfilblanco1.position.z))||
			   (reyblanco.position.x==reinablanca.position.x && reyblanco.position.z==reinablanca.position.z)){
				alert("No puedes comer piezas del mismo color");
				reyblanco.position.x=bloquerojo.position.x;reyblanco.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if reyblanco
		  /////////////////////////////////Rey Negro//////////////////////////////////////////////////////////////////
		  if (reynegro.position.x===bloquerojo.position.x && reynegro.position.z===bloquerojo.position.z){
		    var bvryn=bloqueverde;
		    ReyNegro.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvryn,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
		      else
			{this.colision = 0;this.step=0.25;}
		    }//fin prototype sense

		    ReyNegro.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(reynegro.position.x<bvryn.position.x)
			  reynegro.position.x += this.step;
			else
			  reynegro.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(reynegro.position.z<bvryn.position.z)
			  reynegro.position.z += this.step;
			else
			  reynegro.position.z -= this.step;
		      }//fin if posicion z
			if((reynegro.position.x==torreblanca1.position.x && reynegro.position.z==torreblanca1.position.z)&&
			  (reynegro.position.y==torreblanca1.position.y))
			{torreblanca1.position.y=100;torreblanca1.position.x=100;escena.remove(torreblanca1);}
			if((reynegro.position.x==torreblanca2.position.x && reynegro.position.z==torreblanca2.position.z)&&
			  (reynegro.position.y==torreblanca2.position.y))
			{torreblanca2.position.y=100;torreblanca2.position.x=100;escena.remove(torreblanca2);}
			if((reynegro.position.x==caballoblanco1.position.x && reynegro.position.z==caballoblanco1.position.z)&&
			  (reynegro.position.y==caballoblanco1.position.y))
			{caballoblanco1.position.y=100;caballoblanco1.position.x=100;escena.remove(caballoblanco1);}
			if((reynegro.position.x==caballoblanco2.position.x && reynegro.position.z==caballoblanco2.position.z)&&
			  (reynegro.position.y==caballoblanco2.position.y))
			{caballoblanco2.position.y=100;caballoblanco2.position.x=100;escena.remove(caballoblanco2);}
			if((reynegro.position.x==alfilblanco1.position.x && reynegro.position.z==alfilblanco1.position.z)&&
			  (reynegro.position.y==alfilblanco1.position.y))
			{alfilblanco1.position.y=100;alfilblanco1.position.x=100;escena.remove(alfilblanco1);}
			if((reynegro.position.x==alfilblanco2.position.x && reynegro.position.z==alfilblanco2.position.z)&&
			  (reynegro.position.y==alfilblanco2.position.y))
			{alfilblanco2.position.y=100;alfilblanco2.position.x=100;escena.remove(alfilblanco2);}
			if((reynegro.position.x==reinablanca.position.x && reynegro.position.z==reinablanca.position.z)&&
			  (reynegro.position.y==reinablanca.position.y))
			{reinablanca.position.y=100;reinablanca.position.x=100;escena.remove(reinablanca);}
			if((reynegro.position.x==reyblanco.position.x && reynegro.position.z==reyblanco.position.z)&&
			  (reynegro.position.y==reyblanco.position.y))
			{reyblanco.position.y=100;reyblanco.position.x=100;escena.remove(reyblanco);}
			if((reynegro.position.x==peonblanco1.position.x && reynegro.position.z==peonblanco1.position.z)&&
			  (reynegro.position.y==peonblanco1.position.y))
			{peonblanco1.position.y=100;peonblanco1.position.x=100;escena.remove(peonblanco1);}
			if((reynegro.position.x==peonblanco2.position.x && reynegro.position.z==peonblanco2.position.z)&&
			  (reynegro.position.y==peonblanco2.position.y))
			{peonblanco2.position.y=100;peonblanco2.position.x=100;escena.remove(peonblanco2);}
			if((reynegro.position.x==peonblanco3.position.x && reynegro.position.z==peonblanco3.position.z)&&
			  (reynegro.position.y==peonblanco3.position.y))
			{peonblanco3.position.y=100;peonblanco3.position.x=100;escena.remove(peonblanco3);}
			if((reynegro.position.x==peonblanco4.position.x && reynegro.position.z==peonblanco4.position.z)&&
			  (reynegro.position.y==peonblanco4.position.y))
			{peonblanco4.position.y=100;peonblanco4.position.x=100;escena.remove(peonblanco4);}
			if((reynegro.position.x==peonblanco5.position.x && reynegro.position.z==peonblanco5.position.z)&&
			  (reynegro.position.y==peonblanco5.position.y))
			{peonblanco5.position.y=100;peonblanco5.position.x=100;escena.remove(peonblanco5);}
			if((reynegro.position.x==peonblanco6.position.x && reynegro.position.z==peonblanco6.position.z)&&
			  (reynegro.position.y==peonblanco6.position.y))
			{peonblanco6.position.y=100;peonblanco6.position.x=100;escena.remove(peonblanco6);}
			if((reynegro.position.x==peonblanco7.position.x && reynegro.position.z==peonblanco7.position.z)&&
			  (reynegro.position.y==peonblanco7.position.y))
			{peonblanco7.position.y=100;peonblanco7.position.x=100;escena.remove(peonblanco7);}
			if((reynegro.position.x==peonblanco8.position.x && reynegro.position.z==peonblanco8.position.z)&&
			  (reynegro.position.y==peonblanco8.position.y))
			{peonblanco8.position.y=100;peonblanco8.position.x=100;escena.remove(peonblanco8);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((reynegro.position.x==peonnegro1.position.x && reynegro.position.z==peonnegro1.position.z)||
			   (reynegro.position.x==peonnegro2.position.x && reynegro.position.z==peonnegro2.position.z))||
			   (reynegro.position.x==peonnegro3.position.x && reynegro.position.z==peonnegro3.position.z))||
			   (reynegro.position.x==peonnegro4.position.x && reynegro.position.z==peonnegro4.position.z))||
			   (reynegro.position.x==peonnegro5.position.x && reynegro.position.z==peonnegro5.position.z))||
			   (reynegro.position.x==peonnegro6.position.x && reynegro.position.z==peonnegro6.position.z))||
			   (reynegro.position.x==peonnegro7.position.x && reynegro.position.z==peonnegro7.position.z))||
			   (reynegro.position.x==peonnegro8.position.x && reynegro.position.z==peonnegro8.position.z))||
			   (reynegro.position.x==torrenegra2.position.x && reynegro.position.z==torrenegra2.position.z))||
			   (reynegro.position.x==alfilnegro1.position.x && reynegro.position.z==alfilnegro1.position.z))||
			   (reynegro.position.x==alfilnegro2.position.x && reynegro.position.z==alfilnegro2.position.z))||
			   (reynegro.position.x==caballonegro1.position.x && reynegro.position.z==caballonegro1.position.z))||
			   (reynegro.position.x==caballonegro2.position.x && reynegro.position.z==caballonegro2.position.z))||
			   (reynegro.position.x==torrenegra1.position.x && reynegro.position.z==torrenegra1.position.z))||
			   (reynegro.position.x==reinanegra.position.x && reynegro.position.z==reinanegra.position.z)){
				alert("No puedes comer piezas del mismo color");
				reynegro.position.x=bloquerojo.position.x;reynegro.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if reynegro
//////////////////////////////////////////////////////Caballos///////////////////////////////////////////////////////////////////////////
		  ///////////////////////////////////Caballo Blanco 1//////////////////////////////////////////////////////////////////
		  if (caballoblanco1.position.x===bloquerojo.position.x && caballoblanco1.position.z===bloquerojo.position.z){
		    var bvcb1=bloqueverde;
		    CaballoBlanco.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvcb1,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
		      else
			{this.colision = 0;this.step=0.25;}
		    }//fin prototype sense

		    CaballoBlanco.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(caballoblanco1.position.x<bvcb1.position.x)
			  caballoblanco1.position.x += this.step;
			else
			  caballoblanco1.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(caballoblanco1.position.z<bvcb1.position.z)
			  caballoblanco1.position.z += this.step;
			else
			  caballoblanco1.position.z -= this.step;
		      }//fin if posicion z
		      if (this.colision!=1){
			if(caballoblanco1.position.x!=bvcb1.position.x || caballoblanco1.position.z!=bvcb1.position.z)
			   {caballoblanco1.position.y += this.step/2;}
			else
			   {caballoblanco1.position.y = 4.5;}
		      }//fin if posicion y
			if((caballoblanco1.position.x==torrenegra1.position.x && caballoblanco1.position.z==torrenegra1.position.z)&&
			  (caballoblanco1.position.y==torrenegra1.position.y))
			{torrenegra1.position.y=100;torrenegra1.position.x=100;escena.remove(torrenegra1);}
			if((caballoblanco1.position.x==torrenegra2.position.x && caballoblanco1.position.z==torrenegra2.position.z)&&
			  (caballoblanco1.position.y==torrenegra2.position.y))
			{torrenegra2.position.y=100;torrenegra2.position.x=100;escena.remove(torrenegra2);}
			if((caballoblanco1.position.x==caballonegro1.position.x && caballoblanco1.position.z==caballonegro1.position.z)&&
			  (caballoblanco1.position.y==caballonegro1.position.y))
			{caballonegro1.position.y=100;caballonegro1.position.x=100;escena.remove(caballonegro1);}
			if((caballoblanco1.position.x==caballonegro2.position.x && caballoblanco1.position.z==caballonegro2.position.z)&&
			  (caballoblanco1.position.y==caballonegro2.position.y))
			{caballonegro2.position.y=100;caballonegro2.position.x=100;escena.remove(caballonegro2);}
			if((caballoblanco1.position.x==alfilnegro1.position.x && caballoblanco1.position.z==alfilnegro1.position.z)&&
			  (caballoblanco1.position.y==alfilnegro1.position.y))
			{alfilnegro1.position.y=100;alfilnegro1.position.x=100;escena.remove(alfilnegro1);}
			if((caballoblanco1.position.x==alfilnegro2.position.x && caballoblanco1.position.z==alfilnegro2.position.z)&&
			  (caballoblanco1.position.y==alfilnegro2.position.y))
			{alfilnegro2.position.y=100;alfilnegro2.position.x=100;escena.remove(alfilnegro2);}
			if((caballoblanco1.position.x==reinanegra.position.x && caballoblanco1.position.z==reinanegra.position.z)&&
			  (caballoblanco1.position.y==reinanegra.position.y))
			{reinanegra.position.y=100;reinanegra.position.x=100;escena.remove(reinanegra);}
			if((caballoblanco1.position.x==reynegro.position.x && caballoblanco1.position.z==reynegro.position.z)&&
			  (caballoblanco1.position.y==reynegro.position.y))
			{reynegro.position.y=100;reynegro.position.x=100;escena.remove(reynegro);}
			if((caballoblanco1.position.x==peonnegro1.position.x && caballoblanco1.position.z==peonnegro1.position.z)&&
			  (caballoblanco1.position.y==peonnegro1.position.y))
			{peonnegro1.position.y=100;peonnegro1.position.x=100;escena.remove(peonnegro1);}
			if((caballoblanco1.position.x==peonnegro2.position.x && caballoblanco1.position.z==peonnegro2.position.z)&&
			  (caballoblanco1.position.y==peonnegro2.position.y))
			{peonnegro2.position.y=100;peonnegro2.position.x=100;escena.remove(peonnegro2);}
			if((caballoblanco1.position.x==peonnegro3.position.x && caballoblanco1.position.z==peonnegro3.position.z)&&
			  (caballoblanco1.position.y==peonnegro3.position.y))
			{peonnegro3.position.y=100;peonnegro3.position.x=100;escena.remove(peonnegro3);}
			if((caballoblanco1.position.x==peonnegro4.position.x && caballoblanco1.position.z==peonnegro4.position.z)&&
			  (caballoblanco1.position.y==peonnegro4.position.y))
			{peonnegro4.position.y=100;peonnegro4.position.x=100;escena.remove(peonnegro4);}
			if((caballoblanco1.position.x==peonnegro5.position.x && caballoblanco1.position.z==peonnegro5.position.z)&&
			  (caballoblanco1.position.y==peonnegro5.position.y))
			{peonnegro5.position.y=100;peonnegro5.position.x=100;escena.remove(peonnegro5);}
			if((caballoblanco1.position.x==peonnegro6.position.x && caballoblanco1.position.z==peonnegro6.position.z)&&
			  (caballoblanco1.position.y==peonnegro6.position.y))
			{peonnegro6.position.y=100;peonnegro6.position.x=100;escena.remove(peonnegro6);}
			if((caballoblanco1.position.x==peonnegro7.position.x && caballoblanco1.position.z==peonnegro7.position.z)&&
			  (caballoblanco1.position.y==peonnegro7.position.y))
			{peonnegro7.position.y=100;peonnegro7.position.x=100;escena.remove(peonnegro7);}
			if((caballoblanco1.position.x==peonnegro8.position.x && caballoblanco1.position.z==peonnegro8.position.z)&&
			  (caballoblanco1.position.y==peonnegro8.position.y))
			{peonnegro8.position.y=100;peonnegro8.position.x=100;escena.remove(peonnegro8);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if ((((((((((((((((caballoblanco1.position.x==peonblanco1.position.x && caballoblanco1.position.z==peonblanco1.position.z)||
			   (caballoblanco1.position.x==peonblanco2.position.x && caballoblanco1.position.z==peonblanco2.position.z))||
			   (caballoblanco1.position.x==peonblanco3.position.x && caballoblanco1.position.z==peonblanco3.position.z))||
			   (caballoblanco1.position.x==peonblanco4.position.x && caballoblanco1.position.z==peonblanco4.position.z))||
			   (caballoblanco1.position.x==peonblanco5.position.x && caballoblanco1.position.z==peonblanco5.position.z))||
			   (caballoblanco1.position.x==peonblanco6.position.x && caballoblanco1.position.z==peonblanco6.position.z))||
			   (caballoblanco1.position.x==peonblanco7.position.x && caballoblanco1.position.z==peonblanco7.position.z))||
			   (caballoblanco1.position.x==peonblanco8.position.x && caballoblanco1.position.z==peonblanco8.position.z))||
			   (caballoblanco1.position.x==torreblanca2.position.x && caballoblanco1.position.z==torreblanca2.position.z))||
			   (caballoblanco1.position.x==torreblanca1.position.x && caballoblanco1.position.z==torreblanca1.position.z))||
			   (caballoblanco1.position.x==alfilblanco2.position.x && caballoblanco1.position.z==alfilblanco2.position.z))||
			   (caballoblanco1.position.x==alfilblanco1.position.x && caballoblanco1.position.z==alfilblanco1.position.z))||
			   (caballoblanco1.position.x==caballoblanco2.position.x && caballoblanco1.position.z==caballoblanco2.position.z))||
			   (caballoblanco1.position.x==reyblanco.position.x && caballoblanco1.position.z==reyblanco.position.z))||
			   (caballoblanco1.position.x==reinablanca.position.x && caballoblanco1.position.z==reinablanca.position.z))&&
			   (caballoblanco1.position.y==4.5)){
				alert("No puedes comer piezas del mismo color");
				caballoblanco1.position.x=bloquerojo.position.x;caballoblanco1.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if caballoblanco1
		  /////////////////////////////////Caballo blanco 2//////////////////////////////////////////////////////////////////
		  if (caballoblanco2.position.x===bloquerojo.position.x && caballoblanco2.position.z===bloquerojo.position.z){
		    var bvcb2=bloqueverde;//Bloqueverdealfilblanco2
		    CaballoBlanco.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvcb2,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
		      else
			{this.colision = 0;this.step=0.25;}
		    }//fin prototype sense

		    CaballoBlanco.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(caballoblanco2.position.x<bvcb2.position.x)
			  caballoblanco2.position.x += this.step;
			else
			  caballoblanco2.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(caballoblanco2.position.z<bvcb2.position.z)
			  caballoblanco2.position.z += this.step;
			else
			  caballoblanco2.position.z -= this.step;
		      }//fin if posicion z
		      if (this.colision!=1){
			if(caballoblanco2.position.x!=bvcb2.position.x || caballoblanco2.position.z!=bvcb2.position.z)
			   {caballoblanco2.position.y += this.step/2;}
			else
			   {caballoblanco2.position.y = 4.5;}
		      }//fin if posicion y
			if((caballoblanco2.position.x==torrenegra1.position.x && caballoblanco2.position.z==torrenegra1.position.z)&&
			  (caballoblanco2.position.y==torrenegra1.position.y))
			{torrenegra1.position.y=100;torrenegra1.position.x=100;escena.remove(torrenegra1);}
			if((caballoblanco2.position.x==torrenegra2.position.x && caballoblanco2.position.z==torrenegra2.position.z)&&
			  (caballoblanco2.position.y==torrenegra2.position.y))
			{torrenegra2.position.y=100;torrenegra2.position.x=100;escena.remove(torrenegra2);}
			if((caballoblanco2.position.x==caballonegro1.position.x && caballoblanco2.position.z==caballonegro1.position.z)&&
			  (caballoblanco2.position.y==caballonegro1.position.y))
			{caballonegro1.position.y=100;caballonegro1.position.x=100;escena.remove(caballonegro1);}
			if((caballoblanco2.position.x==caballonegro2.position.x && caballoblanco2.position.z==caballonegro2.position.z)&&
			  (caballoblanco2.position.y==caballonegro2.position.y))
			{caballonegro2.position.y=100;caballonegro2.position.x=100;escena.remove(caballonegro2);}
			if((caballoblanco2.position.x==alfilnegro1.position.x && caballoblanco2.position.z==alfilnegro1.position.z)&&
			  (caballoblanco2.position.y==alfilnegro1.position.y))
			{alfilnegro1.position.y=100;alfilnegro1.position.x=100;escena.remove(alfilnegro1);}
			if((caballoblanco2.position.x==alfilnegro2.position.x && caballoblanco2.position.z==alfilnegro2.position.z)&&
			  (caballoblanco2.position.y==alfilnegro2.position.y))
			{alfilnegro2.position.y=100;alfilnegro2.position.x=100;escena.remove(alfilnegro2);}
			if((caballoblanco2.position.x==reinanegra.position.x && caballoblanco2.position.z==reinanegra.position.z)&&
			  (caballoblanco2.position.y==reinanegra.position.y))
			{reinanegra.position.y=100;reinanegra.position.x=100;escena.remove(reinanegra);}
			if((caballoblanco2.position.x==reynegro.position.x && caballoblanco2.position.z==reynegro.position.z)&&
			  (caballoblanco2.position.y==reynegro.position.y))
			{reynegro.position.y=100;reynegro.position.x=100;escena.remove(reynegro);}
			if((caballoblanco2.position.x==peonnegro1.position.x && caballoblanco2.position.z==peonnegro1.position.z)&&
			  (caballoblanco2.position.y==peonnegro1.position.y))
			{peonnegro1.position.y=100;peonnegro1.position.x=100;escena.remove(peonnegro1);}
			if((caballoblanco2.position.x==peonnegro2.position.x && caballoblanco2.position.z==peonnegro2.position.z)&&
			  (caballoblanco2.position.y==peonnegro2.position.y))
			{peonnegro2.position.y=100;peonnegro2.position.x=100;escena.remove(peonnegro2);}
			if((caballoblanco2.position.x==peonnegro3.position.x && caballoblanco2.position.z==peonnegro3.position.z)&&
			  (caballoblanco2.position.y==peonnegro3.position.y))
			{peonnegro3.position.y=100;peonnegro3.position.x=100;escena.remove(peonnegro3);}
			if((caballoblanco2.position.x==peonnegro4.position.x && caballoblanco2.position.z==peonnegro4.position.z)&&
			  (caballoblanco2.position.y==peonnegro4.position.y))
			{peonnegro4.position.y=100;peonnegro4.position.x=100;escena.remove(peonnegro4);}
			if((caballoblanco2.position.x==peonnegro5.position.x && caballoblanco2.position.z==peonnegro5.position.z)&&
			  (caballoblanco2.position.y==peonnegro5.position.y))
			{peonnegro5.position.y=100;peonnegro5.position.x=100;escena.remove(peonnegro5);}
			if((caballoblanco2.position.x==peonnegro6.position.x && caballoblanco2.position.z==peonnegro6.position.z)&&
			  (caballoblanco2.position.y==peonnegro6.position.y))
			{peonnegro6.position.y=100;peonnegro6.position.x=100;escena.remove(peonnegro6);}
			if((caballoblanco2.position.x==peonnegro7.position.x && caballoblanco2.position.z==peonnegro7.position.z)&&
			  (caballoblanco2.position.y==peonnegro7.position.y))
			{peonnegro7.position.y=100;peonnegro7.position.x=100;escena.remove(peonnegro7);}
			if((caballoblanco2.position.x==peonnegro8.position.x && caballoblanco2.position.z==peonnegro8.position.z)&&
			  (caballoblanco2.position.y==peonnegro8.position.y))
			{peonnegro8.position.y=100;peonnegro8.position.x=100;escena.remove(peonnegro8);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if ((((((((((((((((caballoblanco2.position.x==peonblanco1.position.x && caballoblanco2.position.z==peonblanco1.position.z)||
			   (caballoblanco2.position.x==peonblanco2.position.x && caballoblanco2.position.z==peonblanco2.position.z))||
			   (caballoblanco2.position.x==peonblanco3.position.x && caballoblanco2.position.z==peonblanco3.position.z))||
			   (caballoblanco2.position.x==peonblanco4.position.x && caballoblanco2.position.z==peonblanco4.position.z))||
			   (caballoblanco2.position.x==peonblanco5.position.x && caballoblanco2.position.z==peonblanco5.position.z))||
			   (caballoblanco2.position.x==peonblanco6.position.x && caballoblanco2.position.z==peonblanco6.position.z))||
			   (caballoblanco2.position.x==peonblanco7.position.x && caballoblanco2.position.z==peonblanco7.position.z))||
			   (caballoblanco2.position.x==peonblanco8.position.x && caballoblanco2.position.z==peonblanco8.position.z))||
			   (caballoblanco2.position.x==torreblanca2.position.x && caballoblanco2.position.z==torreblanca2.position.z))||
			   (caballoblanco2.position.x==torreblanca1.position.x && caballoblanco2.position.z==torreblanca1.position.z))||
			   (caballoblanco2.position.x==alfilblanco2.position.x && caballoblanco2.position.z==alfilblanco2.position.z))||
			   (caballoblanco2.position.x==caballoblanco1.position.x && caballoblanco2.position.z==caballoblanco1.position.z))||
			   (caballoblanco2.position.x==alfilblanco1.position.x && caballoblanco2.position.z==alfilblanco1.position.z))||
			   (caballoblanco2.position.x==reyblanco.position.x && caballoblanco2.position.z==reyblanco.position.z))||
			   (caballoblanco2.position.x==reinablanca.position.x && caballoblanco2.position.z==reinablanca.position.z))&&
				(caballoblanco2.position.y==4.5)){
				alert("No puedes comer piezas del mismo color");
				caballoblanco2.position.x=bloquerojo.position.x;caballoblanco2.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if caballoblanco2
		  /////////////////////////////////Caballo Negro 1///////////////////////////////////////////////////////////////////
		  if (caballonegro1.position.x===bloquerojo.position.x && caballonegro1.position.z===bloquerojo.position.z){
		    var bvcn1 = bloqueverde;
		    CaballoNegro.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo2 = this.sensor.intersectObjects(bvcn1,true);
		      if(obstaculo2.length > 0)
			{this.colision = 1;this.step=0;}
		      else
			{this.colision = 0;this.step=0.25;}
		    }//fin prototype sense

		    CaballoNegro.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(caballonegro1.position.x<bvcn1.position.x)
			  caballonegro1.position.x += this.step;
			else
			  caballonegro1.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(caballonegro1.position.z<bvcn1.position.z)
			  caballonegro1.position.z += this.step;
			else
			  caballonegro1.position.z -= this.step;
		      }//fin if posicion z
		      if (this.colision!=1){
			if(caballonegro1.position.x!=bvcn1.position.x || caballonegro1.position.z!=bvcn1.position.z)
			   {caballonegro1.position.y += this.step/2;}
			else
			   {caballonegro1.position.y = 4.5;}
		      }//fin if posicion y
			if((caballonegro1.position.x==torreblanca1.position.x && caballonegro1.position.z==torreblanca1.position.z)&&
			  (caballonegro1.position.y==torreblanca1.position.y))
			{torreblanca1.position.y=100;torreblanca1.position.x=100;escena.remove(torreblanca1);}
			if((caballonegro1.position.x==torreblanca2.position.x && caballonegro1.position.z==torreblanca2.position.z)&&
			  (caballonegro1.position.y==torreblanca2.position.y))
			{torreblanca2.position.y=100;torreblanca2.position.x=100;escena.remove(torreblanca2);}
			if((caballonegro1.position.x==caballoblanco1.position.x && caballonegro1.position.z==caballoblanco1.position.z)&&
			  (caballonegro1.position.y==caballoblanco1.position.y))
			{caballoblanco1.position.y=100;caballoblanco1.position.x=100;escena.remove(caballoblanco1);}
			if((caballonegro1.position.x==caballoblanco2.position.x && caballonegro1.position.z==caballoblanco2.position.z)&&
			  (caballonegro1.position.y==caballoblanco2.position.y))
			{caballoblanco2.position.y=100;caballoblanco2.position.x=100;escena.remove(caballoblanco2);}
			if((caballonegro1.position.x==alfilblanco1.position.x && caballonegro1.position.z==alfilblanco1.position.z)&&
			  (caballonegro1.position.y==alfilblanco1.position.y))
			{alfilblanco1.position.y=100;alfilblanco1.position.x=100;escena.remove(alfilblanco1);}
			if((caballonegro1.position.x==alfilblanco2.position.x && caballonegro1.position.z==alfilblanco2.position.z)&&
			  (caballonegro1.position.y==alfilblanco2.position.y))
			{alfilblanco2.position.y=100;alfilblanco2.position.x=100;escena.remove(alfilblanco2);}
			if((caballonegro1.position.x==reinablanca.position.x && caballonegro1.position.z==reinablanca.position.z)&&
			  (caballonegro1.position.y==reinablanca.position.y))
			{reinablanca.position.y=100;reinablanca.position.x=100;escena.remove(reinablanca);}
			if((caballonegro1.position.x==reyblanco.position.x && caballonegro1.position.z==reyblanco.position.z)&&
			  (caballonegro1.position.y==reyblanco.position.y))
			{reyblanco.position.y=100;reyblanco.position.x=100;escena.remove(reyblanco);}
			if((caballonegro1.position.x==peonblanco1.position.x && caballonegro1.position.z==peonblanco1.position.z)&&
			  (caballonegro1.position.y==peonblanco1.position.y))
			{peonblanco1.position.y=100;peonblanco1.position.x=100;escena.remove(peonblanco1);}
			if((caballonegro1.position.x==peonblanco2.position.x && caballonegro1.position.z==peonblanco2.position.z)&&
			  (caballonegro1.position.y==peonblanco2.position.y))
			{peonblanco2.position.y=100;peonblanco2.position.x=100;escena.remove(peonblanco2);}
			if((caballonegro1.position.x==peonblanco3.position.x && caballonegro1.position.z==peonblanco3.position.z)&&
			  (caballonegro1.position.y==peonblanco3.position.y))
			{peonblanco3.position.y=100;peonblanco3.position.x=100;escena.remove(peonblanco3);}
			if((caballonegro1.position.x==peonblanco4.position.x && caballonegro1.position.z==peonblanco4.position.z)&&
			  (caballonegro1.position.y==peonblanco4.position.y))
			{peonblanco4.position.y=100;peonblanco4.position.x=100;escena.remove(peonblanco4);}
			if((caballonegro1.position.x==peonblanco5.position.x && caballonegro1.position.z==peonblanco5.position.z)&&
			  (caballonegro1.position.y==peonblanco5.position.y))
			{peonblanco5.position.y=100;peonblanco5.position.x=100;escena.remove(peonblanco5);}
			if((caballonegro1.position.x==peonblanco6.position.x && caballonegro1.position.z==peonblanco6.position.z)&&
			  (caballonegro1.position.y==peonblanco6.position.y))
			{peonblanco6.position.y=100;peonblanco6.position.x=100;escena.remove(peonblanco6);}
			if((caballonegro1.position.x==peonblanco7.position.x && caballonegro1.position.z==peonblanco7.position.z)&&
			  (caballonegro1.position.y==peonblanco7.position.y))
			{peonblanco7.position.y=100;peonblanco7.position.x=100;escena.remove(peonblanco7);}
			if((caballonegro1.position.x==peonblanco8.position.x && caballonegro1.position.z==peonblanco8.position.z)&&
			  (caballonegro1.position.y==peonblanco8.position.y))
			{peonblanco8.position.y=100;peonblanco8.position.x=100;escena.remove(peonblanco8);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if ((((((((((((((((caballonegro1.position.x==peonnegro1.position.x && caballonegro1.position.z==peonnegro1.position.z)||
			   (caballonegro1.position.x==peonnegro2.position.x && caballonegro1.position.z==peonnegro2.position.z))||
			   (caballonegro1.position.x==peonnegro3.position.x && caballonegro1.position.z==peonnegro3.position.z))||
			   (caballonegro1.position.x==peonnegro4.position.x && caballonegro1.position.z==peonnegro4.position.z))||
			   (caballonegro1.position.x==peonnegro5.position.x && caballonegro1.position.z==peonnegro5.position.z))||
			   (caballonegro1.position.x==peonnegro6.position.x && caballonegro1.position.z==peonnegro6.position.z))||
			   (caballonegro1.position.x==peonnegro7.position.x && caballonegro1.position.z==peonnegro7.position.z))||
			   (caballonegro1.position.x==peonnegro8.position.x && caballonegro1.position.z==peonnegro8.position.z))||
			   (caballonegro1.position.x==torrenegra2.position.x && caballonegro1.position.z==torrenegra2.position.z))||
			   (caballonegro1.position.x==alfilnegro1.position.x && caballonegro1.position.z==alfilnegro1.position.z))||
			   (caballonegro1.position.x==alfilnegro2.position.x && caballonegro1.position.z==alfilnegro2.position.z))||
			   (caballonegro1.position.x==torrenegra1.position.x && caballonegro1.position.z==torrenegra1.position.z))||
			   (caballonegro1.position.x==caballonegro2.position.x && caballonegro1.position.z==caballonegro2.position.z))||
			   (caballonegro1.position.x==reynegro.position.x && caballonegro1.position.z==reynegro.position.z))||
			   (caballonegro1.position.x==reinanegra.position.x && caballonegro1.position.z==reinanegra.position.z))&&
				(caballonegro1.position.y==4.5)){
				alert("No puedes comer piezas del mismo color");
				caballonegro1.position.x=bloquerojo.position.x;caballonegro1.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if caballonegro1
		  ////////////////////////////Caballo Negro 2///////////////////////////////////////////////////////////////////  
		  if (caballonegro2.position.x===bloquerojo.position.x && caballonegro2.position.z===bloquerojo.position.z){
		    var bvcn2 = bloqueverde;
		    CaballoNegro.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo2 = this.sensor.intersectObjects(bvcn2,true);
		      if(obstaculo2.length > 0)
			{this.colision = 1;this.step=0;}
		      else
			{this.colision = 0;this.step=0.25;}
		    }//fin prototype sense

		    CaballoNegro.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(caballonegro2.position.x<bvcn2.position.x)
			  caballonegro2.position.x += this.step;
			else
			  caballonegro2.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(caballonegro2.position.z<bvcn2.position.z)
			  caballonegro2.position.z += this.step;
			else
			  caballonegro2.position.z -= this.step;
		      }//fin if posicion z
		      if (this.colision!=1){
			if(caballonegro2.position.x!=bvcn2.position.x || caballonegro2.position.z!=bvcn2.position.z)
			   {caballonegro2.position.y += this.step/2;}
			else
			   {caballonegro2.position.y = 4.5;}
		      }//fin if posicion y
			if((caballonegro2.position.x==torreblanca1.position.x && caballonegro2.position.z==torreblanca1.position.z)&&
			  (caballonegro2.position.y==torreblanca1.position.y))
			{torreblanca1.position.y=100;torreblanca1.position.x=100;escena.remove(torreblanca1);}
			if((caballonegro2.position.x==torreblanca2.position.x && caballonegro2.position.z==torreblanca2.position.z)&&
			  (caballonegro2.position.y==torreblanca2.position.y))
			{torreblanca2.position.y=100;torreblanca2.position.x=100;escena.remove(torreblanca2);}
			if((caballonegro2.position.x==caballoblanco1.position.x && caballonegro2.position.z==caballoblanco1.position.z)&&
			  (caballonegro2.position.y==caballoblanco1.position.y))
			{caballoblanco1.position.y=100;caballoblanco1.position.x=100;escena.remove(caballoblanco1);}
			if((caballonegro2.position.x==caballoblanco2.position.x && caballonegro2.position.z==caballoblanco2.position.z)&&
			  (caballonegro2.position.y==caballoblanco2.position.y))
			{caballoblanco2.position.y=100;caballoblanco2.position.x=100;escena.remove(caballoblanco2);}
			if((caballonegro2.position.x==alfilblanco1.position.x && caballonegro2.position.z==alfilblanco1.position.z)&&
			  (caballonegro2.position.y==alfilblanco1.position.y))
			{alfilblanco1.position.y=100;alfilblanco1.position.x=100;escena.remove(alfilblanco1);}
			if((caballonegro2.position.x==alfilblanco2.position.x && caballonegro2.position.z==alfilblanco2.position.z)&&
			  (caballonegro2.position.y==alfilblanco2.position.y))
			{alfilblanco2.position.y=100;alfilblanco2.position.x=100;escena.remove(alfilblanco2);}
			if((caballonegro2.position.x==reinablanca.position.x && caballonegro2.position.z==reinablanca.position.z)&&
			  (caballonegro2.position.y==reinablanca.position.y))
			{reinablanca.position.y=100;reinablanca.position.x=100;escena.remove(reinablanca);}
			if((caballonegro2.position.x==reyblanco.position.x && caballonegro2.position.z==reyblanco.position.z)&&
			  (caballonegro2.position.y==reyblanco.position.y))
			{reyblanco.position.y=100;reyblanco.position.x=100;escena.remove(reyblanco);}
			if((caballonegro2.position.x==peonblanco1.position.x && caballonegro2.position.z==peonblanco1.position.z)&&
			  (caballonegro2.position.y==peonblanco1.position.y))
			{peonblanco1.position.y=100;peonblanco1.position.x=100;escena.remove(peonblanco1);}
			if((caballonegro2.position.x==peonblanco2.position.x && caballonegro2.position.z==peonblanco2.position.z)&&
			  (caballonegro2.position.y==peonblanco2.position.y))
			{peonblanco2.position.y=100;peonblanco2.position.x=100;escena.remove(peonblanco2);}
			if((caballonegro2.position.x==peonblanco3.position.x && caballonegro2.position.z==peonblanco3.position.z)&&
			  (caballonegro2.position.y==peonblanco3.position.y))
			{peonblanco3.position.y=100;peonblanco3.position.x=100;escena.remove(peonblanco3);}
			if((caballonegro2.position.x==peonblanco4.position.x && caballonegro2.position.z==peonblanco4.position.z)&&
			  (caballonegro2.position.y==peonblanco4.position.y))
			{peonblanco4.position.y=100;peonblanco4.position.x=100;escena.remove(peonblanco4);}
			if((caballonegro2.position.x==peonblanco5.position.x && caballonegro2.position.z==peonblanco5.position.z)&&
			  (caballonegro2.position.y==peonblanco5.position.y))
			{peonblanco5.position.y=100;peonblanco5.position.x=100;escena.remove(peonblanco5);}
			if((caballonegro2.position.x==peonblanco6.position.x && caballonegro2.position.z==peonblanco6.position.z)&&
			  (caballonegro2.position.y==peonblanco6.position.y))
			{peonblanco6.position.y=100;peonblanco6.position.x=100;escena.remove(peonblanco6);}
			if((caballonegro2.position.x==peonblanco7.position.x && caballonegro2.position.z==peonblanco7.position.z)&&
			  (caballonegro2.position.y==peonblanco7.position.y))
			{peonblanco7.position.y=100;peonblanco7.position.x=100;escena.remove(peonblanco7);}
			if((caballonegro2.position.x==peonblanco8.position.x && caballonegro2.position.z==peonblanco8.position.z)&&
			  (caballonegro2.position.y==peonblanco8.position.y))
			{peonblanco8.position.y=100;eonblanco8.position.x=100;escena.remove(peonblanco8);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if ((((((((((((((((caballonegro2.position.x==peonnegro1.position.x && caballonegro2.position.z==peonnegro1.position.z)||
			   (caballonegro2.position.x==peonnegro2.position.x && caballonegro2.position.z==peonnegro2.position.z))||
			   (caballonegro2.position.x==peonnegro3.position.x && caballonegro2.position.z==peonnegro3.position.z))||
			   (caballonegro2.position.x==peonnegro4.position.x && caballonegro2.position.z==peonnegro4.position.z))||
			   (caballonegro2.position.x==peonnegro5.position.x && caballonegro2.position.z==peonnegro5.position.z))||
			   (caballonegro2.position.x==peonnegro6.position.x && caballonegro2.position.z==peonnegro6.position.z))||
			   (caballonegro2.position.x==peonnegro7.position.x && caballonegro2.position.z==peonnegro7.position.z))||
			   (caballonegro2.position.x==peonnegro8.position.x && caballonegro2.position.z==peonnegro8.position.z))||
			   (caballonegro2.position.x==torrenegra2.position.x && caballonegro2.position.z==torrenegra2.position.z))||
			   (caballonegro2.position.x==alfilnegro1.position.x && caballonegro2.position.z==alfilnegro1.position.z))||
			   (caballonegro2.position.x==alfilnegro2.position.x && caballonegro2.position.z==alfilnegro2.position.z))||
			   (caballonegro2.position.x==caballonegro1.position.x && caballonegro2.position.z==caballonegro1.position.z))||
			   (caballonegro2.position.x==torrenegra1.position.x && caballonegro2.position.z==torrenegra1.position.z))||
			   (caballonegro2.position.x==reynegro.position.x && caballonegro2.position.z==reynegro.position.z))||
			   (caballonegro2.position.x==reinanegra.position.x && caballonegro2.position.z==reinanegra.position.z))&&
				(caballonegro2.position.y==4.5)){
				alert("No puedes comer piezas del mismo color");
				caballonegro2.position.x=bloquerojo.position.x;caballonegro2.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if caballonegro2
		indicador=0;
		}//fin if indicador
////////////////////////////////////////Movimientos de piezas/////////////////////////////////////////////////////////////////////////
		else{
		   escena.remove(bloquerojo);
		   bloquerojo = new BloqueRojo(bloqueazul.position.x,0,bloqueazul.position.z);
		   escena.add(bloquerojo);
		   //////////////////////////////////////Torres////////////////////////////////////////////////////////////////////
		   if ((((torreblanca1.position.x===bloquerojo.position.x && torreblanca1.position.z===bloquerojo.position.z)||
			 (torreblanca2.position.x===bloquerojo.position.x && torreblanca2.position.z===bloquerojo.position.z))||
			 (torrenegra1.position.x===bloquerojo.position.x && torrenegra1.position.z===bloquerojo.position.z))||
			 (torrenegra2.position.x===bloquerojo.position.x && torrenegra2.position.z===bloquerojo.position.z)){
		     grupomorado = new THREE.Group();
		     for (i=1;i<=8;i++){ 
		       bloquemorado = new BloqueMorado(bloquerojo.position.x,0,-i*10);
		       grupomorado.add(bloquemorado);
		     }
		     for (i=1;i<=8;i++){ 
		       bloquemorado = new BloqueMorado(i*10,0,bloquerojo.position.z);
		       grupomorado.add(bloquemorado);
		     }	
		     escena.add(grupomorado);  
		     bloqueverde = new BloqueVerde(bloquerojo.position.x,0,bloquerojo.position.z);
		     escena.add(bloqueverde);
		     indicador=1;
		   }//fin if Torres
		   /////////////////////////////////Peones////////////////////////////////////////////////////////////////////////
		   if ((((((((peonblanco1.position.x===bloquerojo.position.x && peonblanco1.position.z===bloquerojo.position.z)||
			     (peonblanco2.position.x===bloquerojo.position.x && peonblanco2.position.z===bloquerojo.position.z))||
			     (peonblanco3.position.x===bloquerojo.position.x && peonblanco3.position.z===bloquerojo.position.z))||
			     (peonblanco4.position.x===bloquerojo.position.x && peonblanco4.position.z===bloquerojo.position.z))||
			     (peonblanco5.position.x===bloquerojo.position.x && peonblanco5.position.z===bloquerojo.position.z))||
			     (peonblanco6.position.x===bloquerojo.position.x && peonblanco6.position.z===bloquerojo.position.z))||
			     (peonblanco7.position.x===bloquerojo.position.x && peonblanco7.position.z===bloquerojo.position.z))||
			     (peonblanco8.position.x===bloquerojo.position.x && peonblanco8.position.z===bloquerojo.position.z)){
		     grupomorado = new THREE.Group();
		     bloquemorado = new BloqueMorado(bloquerojo.position.x+10,0,bloquerojo.position.z);
		     if (bloquemorado.position.x>80){
			bloquemorado.visible=false;
		     }
		     grupomorado.add(bloquemorado);
		     if ((((((((((((((((peonnegro1.position.x===bloquerojo.position.x+10 && peonnegro1.position.z===bloquerojo.position.z-10)||
			     (peonnegro2.position.x===bloquerojo.position.x+10 && peonnegro2.position.z===bloquerojo.position.z-10))||
			     (peonnegro3.position.x===bloquerojo.position.x+10 && peonnegro3.position.z===bloquerojo.position.z-10))||
			     (peonnegro4.position.x===bloquerojo.position.x+10 && peonnegro4.position.z===bloquerojo.position.z-10))||
			     (peonnegro5.position.x===bloquerojo.position.x+10 && peonnegro5.position.z===bloquerojo.position.z-10))||
			     (peonnegro6.position.x===bloquerojo.position.x+10 && peonnegro6.position.z===bloquerojo.position.z-10))||
			     (peonnegro7.position.x===bloquerojo.position.x+10 && peonnegro7.position.z===bloquerojo.position.z-10))||
			     (peonnegro8.position.x===bloquerojo.position.x+10 && peonnegro8.position.z===bloquerojo.position.z-10))||
			     (torrenegra1.position.x===bloquerojo.position.x+10 && torrenegra1.position.z===bloquerojo.position.z-10))||
			     (torrenegra2.position.x===bloquerojo.position.x+10 && torrenegra2.position.z===bloquerojo.position.z-10))||
			     (caballonegro1.position.x===bloquerojo.position.x+10 && caballonegro1.position.z===bloquerojo.position.z-10))||
			     (caballonegro2.position.x===bloquerojo.position.x+10 && caballonegro2.position.z===bloquerojo.position.z-10))||
			     (alfilnegro1.position.x===bloquerojo.position.x+10 && alfilnegro1.position.z===bloquerojo.position.z-10))||
			     (alfilnegro2.position.x===bloquerojo.position.x+10 && alfilnegro2.position.z===bloquerojo.position.z-10))||
			     (reinanegra.position.x===bloquerojo.position.x+10 && reinanegra.position.z===bloquerojo.position.z-10))||
			     (reynegro.position.x===bloquerojo.position.x+10 && reynegro.position.z===bloquerojo.position.z-10)){
			     bloquemorado = new BloqueMorado(bloquerojo.position.x+10,0,bloquerojo.position.z-10);
			     if (bloquemorado.position.x>80){
				bloquemorado.visible=false;
			     }
			     grupomorado.add(bloquemorado);
		     }
		     if ((((((((((((((((peonnegro1.position.x===bloquerojo.position.x+10 && peonnegro1.position.z===bloquerojo.position.z+10)||
			     (peonnegro2.position.x===bloquerojo.position.x+10 && peonnegro2.position.z===bloquerojo.position.z+10))||
			     (peonnegro3.position.x===bloquerojo.position.x+10 && peonnegro3.position.z===bloquerojo.position.z+10))||
			     (peonnegro4.position.x===bloquerojo.position.x+10 && peonnegro4.position.z===bloquerojo.position.z+10))||
			     (peonnegro5.position.x===bloquerojo.position.x+10 && peonnegro5.position.z===bloquerojo.position.z+10))||
			     (peonnegro6.position.x===bloquerojo.position.x+10 && peonnegro6.position.z===bloquerojo.position.z+10))||
			     (peonnegro7.position.x===bloquerojo.position.x+10 && peonnegro7.position.z===bloquerojo.position.z+10))||
			     (peonnegro8.position.x===bloquerojo.position.x+10 && peonnegro8.position.z===bloquerojo.position.z+10))||
			     (torrenegra1.position.x===bloquerojo.position.x+10 && torrenegra1.position.z===bloquerojo.position.z+10))||
			     (torrenegra2.position.x===bloquerojo.position.x+10 && torrenegra2.position.z===bloquerojo.position.z+10))||
			     (caballonegro1.position.x===bloquerojo.position.x+10 && caballonegro1.position.z===bloquerojo.position.z+10))||
			     (caballonegro2.position.x===bloquerojo.position.x+10 && caballonegro2.position.z===bloquerojo.position.z+10))||
			     (alfilnegro1.position.x===bloquerojo.position.x+10 && alfilnegro1.position.z===bloquerojo.position.z+10))||
			     (alfilnegro2.position.x===bloquerojo.position.x+10 && alfilnegro2.position.z===bloquerojo.position.z+10))||
			     (reinanegra.position.x===bloquerojo.position.x+10 && reinanegra.position.z===bloquerojo.position.z+10))||
			     (reynegro.position.x===bloquerojo.position.x+10 && reynegro.position.z===bloquerojo.position.z+10)){
			     bloquemorado = new BloqueMorado(bloquerojo.position.x+10,0,bloquerojo.position.z+10);
			     if (bloquemorado.position.x>80){
				bloquemorado.visible=false;
			     }
			     grupomorado.add(bloquemorado);
		     }
		     escena.add(grupomorado);  
		     bloqueverde = new BloqueVerde(bloquerojo.position.x,0,bloquerojo.position.z);
		     escena.add(bloqueverde);
		     indicador=1;
		   }//fin if Peones blancos
		   if ((((((((peonnegro1.position.x===bloquerojo.position.x && peonnegro1.position.z===bloquerojo.position.z)||
			     (peonnegro2.position.x===bloquerojo.position.x && peonnegro2.position.z===bloquerojo.position.z))||
			     (peonnegro3.position.x===bloquerojo.position.x && peonnegro3.position.z===bloquerojo.position.z))||
			     (peonnegro4.position.x===bloquerojo.position.x && peonnegro4.position.z===bloquerojo.position.z))||
			     (peonnegro5.position.x===bloquerojo.position.x && peonnegro5.position.z===bloquerojo.position.z))||
			     (peonnegro6.position.x===bloquerojo.position.x && peonnegro6.position.z===bloquerojo.position.z))||
			     (peonnegro7.position.x===bloquerojo.position.x && peonnegro7.position.z===bloquerojo.position.z))||
			     (peonnegro8.position.x===bloquerojo.position.x && peonnegro8.position.z===bloquerojo.position.z)){
			 grupomorado = new THREE.Group();
			 bloquemorado = new BloqueMorado(bloquerojo.position.x-10,0,bloquerojo.position.z);
		     if (bloquemorado.position.x<10){
			bloquemorado.visible=false;
		     }
		     grupomorado.add(bloquemorado);
		     if (((((((((((((((peonblanco1.position.x===bloquerojo.position.x-10 && peonblanco1.position.z===bloquerojo.position.z-10)||
			     (peonblanco2.position.x===bloquerojo.position.x-10 && peonblanco2.position.z===bloquerojo.position.z-10))||
			     (peonblanco3.position.x===bloquerojo.position.x-10 && peonblanco3.position.z===bloquerojo.position.z-10))||
			     (peonblanco4.position.x===bloquerojo.position.x-10 && peonblanco4.position.z===bloquerojo.position.z-10))||
			     (peonblanco5.position.x===bloquerojo.position.x-10 && peonblanco5.position.z===bloquerojo.position.z-10))||
			     (peonblanco6.position.x===bloquerojo.position.x-10 && peonblanco6.position.z===bloquerojo.position.z-10))||
			     (peonblanco7.position.x===bloquerojo.position.x-10 && peonblanco7.position.z===bloquerojo.position.z-10))||
			     (peonblanco8.position.x===bloquerojo.position.x-10 && peonblanco8.position.z===bloquerojo.position.z-10))||
			     (torreblanca1.position.x===bloquerojo.position.x-10 && torreblanca1.position.z===bloquerojo.position.z-10)||
			     (torreblanca2.position.x===bloquerojo.position.x-10 && torreblanca2.position.z===bloquerojo.position.z-10))||
			     (caballoblanco1.position.x===bloquerojo.position.x-10 && caballoblanco1.position.z===bloquerojo.position.z-10))||
			     (caballoblanco2.position.x===bloquerojo.position.x-10 && caballoblanco2.position.z===bloquerojo.position.z-10))||
			     (alfilblanco1.position.x===bloquerojo.position.x-10 && alfilblanco1.position.z===bloquerojo.position.z-10))||
			     (alfilblanco2.position.x===bloquerojo.position.x-10 && alfilblanco2.position.z===bloquerojo.position.z-10))||
			     (reinablanca.position.x===bloquerojo.position.x-10 && reinablanca.position.z===bloquerojo.position.z-10))||
			     (reyblanco.position.x===bloquerojo.position.x-10 && reyblanco.position.z===bloquerojo.position.z-10)){
			     bloquemorado = new BloqueMorado(bloquerojo.position.x-10,0,bloquerojo.position.z-10);
			     if (bloquemorado.position.x<10){
				bloquemorado.visible=false;
			     }
			     grupomorado.add(bloquemorado);
		     }
		     if (((((((((((((((peonblanco1.position.x===bloquerojo.position.x-10 && peonblanco1.position.z===bloquerojo.position.z+10)||
			     (peonblanco2.position.x===bloquerojo.position.x-10 && peonblanco2.position.z===bloquerojo.position.z+10))||
			     (peonblanco3.position.x===bloquerojo.position.x-10 && peonblanco3.position.z===bloquerojo.position.z+10))||
			     (peonblanco4.position.x===bloquerojo.position.x-10 && peonblanco4.position.z===bloquerojo.position.z+10))||
			     (peonblanco5.position.x===bloquerojo.position.x-10 && peonblanco5.position.z===bloquerojo.position.z+10))||
			     (peonblanco6.position.x===bloquerojo.position.x-10 && peonblanco6.position.z===bloquerojo.position.z+10))||
			     (peonblanco7.position.x===bloquerojo.position.x-10 && peonblanco7.position.z===bloquerojo.position.z+10))||
			     (peonblanco8.position.x===bloquerojo.position.x-10 && peonblanco8.position.z===bloquerojo.position.z+10))||
			     (torreblanca1.position.x===bloquerojo.position.x-10 && torreblanca1.position.z===bloquerojo.position.z+10)||
			     (torreblanca2.position.x===bloquerojo.position.x-10 && torreblanca2.position.z===bloquerojo.position.z+10))||
			     (caballoblanco1.position.x===bloquerojo.position.x-10 && caballoblanco1.position.z===bloquerojo.position.z+10))||
			     (caballoblanco2.position.x===bloquerojo.position.x-10 && caballoblanco2.position.z===bloquerojo.position.z+10))||
			     (alfilblanco1.position.x===bloquerojo.position.x-10 && alfilblanco1.position.z===bloquerojo.position.z+10))||
			     (alfilblanco2.position.x===bloquerojo.position.x-10 && alfilblanco2.position.z===bloquerojo.position.z+10))||
			     (reinablanca.position.x===bloquerojo.position.x-10 && reinablanca.position.z===bloquerojo.position.z+10))||
			     (reyblanco.position.x===bloquerojo.position.x-10 && reyblanco.position.z===bloquerojo.position.z+10)){
			     bloquemorado = new BloqueMorado(bloquerojo.position.x-10,0,bloquerojo.position.z+10);
			     if (bloquemorado.position.x<10){
				bloquemorado.visible=false;
			     }
			     grupomorado.add(bloquemorado);
		     }  
		     escena.add(grupomorado);  
		     bloqueverde = new BloqueVerde(bloquerojo.position.x,0,bloquerojo.position.z);
		     escena.add(bloqueverde);
		     indicador=1;
		   }//fin if Peones negros
		//////////////////////////////////////////////Alfiles////////////////////////////////////////////////////////////
		   if ((((alfilblanco1.position.x===bloquerojo.position.x && alfilblanco1.position.z===bloquerojo.position.z)||
			 (alfilblanco2.position.x===bloquerojo.position.x && alfilblanco2.position.z===bloquerojo.position.z))||
			 (alfilnegro1.position.x===bloquerojo.position.x && alfilnegro1.position.z===bloquerojo.position.z))||
			 (alfilnegro2.position.x===bloquerojo.position.x && alfilnegro2.position.z===bloquerojo.position.z)){
		     grupomorado = new THREE.Group();
		     for (i=1;i<=8;i++){ 
		       bloquemorado = new BloqueMorado(bloquerojo.position.x+(i*10),0,bloquerojo.position.z-(i*10));
		       if (bloquemorado.position.x>80 || bloquemorado.position.z<-80){bloquemorado.visible=false;}
		       grupomorado.add(bloquemorado);
		     }
		     for (i=1;i<=8;i++){ 
		       bloquemorado = new BloqueMorado(bloquerojo.position.x-(i*10),0,bloquerojo.position.z-(i*10));
		       if (bloquemorado.position.x<10 || bloquemorado.position.z<-80){bloquemorado.visible=false;}
		       grupomorado.add(bloquemorado);
		     }	
		     for (i=1;i<=8;i++){ 
		       bloquemorado = new BloqueMorado(bloquerojo.position.x+(i*10),0,bloquerojo.position.z+(i*10));
		       if (bloquemorado.position.x>80 || bloquemorado.position.z>-10){bloquemorado.visible=false;}
		       grupomorado.add(bloquemorado);
		     }
		     for (i=1;i<=8;i++){ 
		       bloquemorado = new BloqueMorado(bloquerojo.position.x-(i*10),0,bloquerojo.position.z+(i*10));
		       if (bloquemorado.position.x<10 || bloquemorado.position.z>-10){bloquemorado.visible=false;}
		       grupomorado.add(bloquemorado);
		     }	
		     escena.add(grupomorado);  
		     bloqueverde = new BloqueVerde(bloquerojo.position.x,0,bloquerojo.position.z);
		     escena.add(bloqueverde);
		     indicador=1;
		   }//fin if Alfiles
		//////////////////////////////////////////////Reinas////////////////////////////////////////////////////////////
		   if ((reinablanca.position.x===bloquerojo.position.x && reinablanca.position.z===bloquerojo.position.z)||
		       (reinanegra.position.x===bloquerojo.position.x && reinanegra.position.z===bloquerojo.position.z)){
		     grupomorado = new THREE.Group();
		     for (i=1;i<=8;i++){ 
		       bloquemorado = new BloqueMorado(bloquerojo.position.x,0,-i*10);
		       grupomorado.add(bloquemorado);
		     }
		     for (i=1;i<=8;i++){ 
		       bloquemorado = new BloqueMorado(i*10,0,bloquerojo.position.z);
		       grupomorado.add(bloquemorado);
		     }	
		     for (i=1;i<=8;i++){ 
		       bloquemorado = new BloqueMorado(bloquerojo.position.x+(i*10),0,bloquerojo.position.z-(i*10));
		       if (bloquemorado.position.x>80 || bloquemorado.position.z<-80){bloquemorado.visible=false;}
		       grupomorado.add(bloquemorado);
		     }
		     for (i=1;i<=8;i++){ 
		       bloquemorado = new BloqueMorado(bloquerojo.position.x-(i*10),0,bloquerojo.position.z-(i*10));
		       if (bloquemorado.position.x<10 || bloquemorado.position.z<-80){bloquemorado.visible=false;}
		       grupomorado.add(bloquemorado);
		     }	
		     for (i=1;i<=8;i++){ 
		       bloquemorado = new BloqueMorado(bloquerojo.position.x+(i*10),0,bloquerojo.position.z+(i*10));
		       if (bloquemorado.position.x>80 || bloquemorado.position.z>-10){bloquemorado.visible=false;}
		       grupomorado.add(bloquemorado);
		     }
		     for (i=1;i<=8;i++){ 
		       bloquemorado = new BloqueMorado(bloquerojo.position.x-(i*10),0,bloquerojo.position.z+(i*10));
		       if (bloquemorado.position.x<10 || bloquemorado.position.z>-10){bloquemorado.visible=false;}
		       grupomorado.add(bloquemorado);
		     }	
		     escena.add(grupomorado);  
		     bloqueverde = new BloqueVerde(bloquerojo.position.x,0,bloquerojo.position.z);
		     escena.add(bloqueverde);
		     indicador=1;
		   }//fin if Reinas
		//////////////////////////////////////////////Reyes////////////////////////////////////////////////////////////
		   if ((reyblanco.position.x===bloquerojo.position.x && reyblanco.position.z===bloquerojo.position.z)||
		       (reynegro.position.x===bloquerojo.position.x && reynegro.position.z===bloquerojo.position.z)){
		     grupomorado = new THREE.Group();
		     bloquemorado1 = new BloqueMorado(bloquerojo.position.x+10,0,bloquerojo.position.z-10);//Noreste
		     if (bloquemorado1.position.x>80 || bloquemorado1.position.z<-80){bloquemorado1.visible=false;}
		     grupomorado.add(bloquemorado1);
		     bloquemorado2 = new BloqueMorado(bloquerojo.position.x,0,bloquerojo.position.z-10);//Norte
		     if (bloquemorado2.position.z<-80){bloquemorado2.visible=false;}
		     grupomorado.add(bloquemorado2);
		     bloquemorado3 = new BloqueMorado(bloquerojo.position.x-10,0,bloquerojo.position.z-10);//Noroeste
		     if (bloquemorado3.position.x<10 || bloquemorado3.position.z<-80){bloquemorado3.visible=false;}
		     grupomorado.add(bloquemorado3);
		     bloquemorado4 = new BloqueMorado(bloquerojo.position.x-10,0,bloquerojo.position.z);//Este
		     if (bloquemorado4.position.x<10){bloquemorado4.visible=false;}
		     grupomorado.add(bloquemorado4);
		     bloquemorado5 = new BloqueMorado(bloquerojo.position.x-10,0,bloquerojo.position.z+10);//Sureste
		     if (bloquemorado5.position.x<10 || bloquemorado5.position.z>-10){bloquemorado5.visible=false;}
		     grupomorado.add(bloquemorado5);
		     bloquemorado6 = new BloqueMorado(bloquerojo.position.x,0,bloquerojo.position.z+10);//Sur
		     if (bloquemorado6.position.z>-10){bloquemorado6.visible=false;}
		     grupomorado.add(bloquemorado6);   
		     bloquemorado7 = new BloqueMorado(bloquerojo.position.x+10,0,bloquerojo.position.z+10);//Suroeste
		     if (bloquemorado7.position.x>80 || bloquemorado7.position.z>-10){bloquemorado7.visible=false;}
		     grupomorado.add(bloquemorado7);
		     bloquemorado8 = new BloqueMorado(bloquerojo.position.x+10,0,bloquerojo.position.z);//Oeste
		     if (bloquemorado8.position.x>80){bloquemorado8.visible=false;}
		     grupomorado.add(bloquemorado8); 
		     escena.add(grupomorado);  
		     bloqueverde = new BloqueVerde(bloquerojo.position.x,0,bloquerojo.position.z);
		     escena.add(bloqueverde);
		     indicador=1;
		   }//fin if Reyes
		//////////////////////////////////////////////Caballos////////////////////////////////////////////////////////////
		   if ((((caballoblanco1.position.x===bloquerojo.position.x && caballoblanco1.position.z===bloquerojo.position.z)||
			 (caballoblanco2.position.x===bloquerojo.position.x && caballoblanco2.position.z===bloquerojo.position.z))||
			 (caballonegro1.position.x===bloquerojo.position.x && caballonegro1.position.z===bloquerojo.position.z))||
			 (caballonegro2.position.x===bloquerojo.position.x && caballonegro2.position.z===bloquerojo.position.z)){
		     grupomorado = new THREE.Group();
		     bloquemorado1 = new BloqueMorado(bloquerojo.position.x+20,0,bloquerojo.position.z-10);//Noreste
		     if (bloquemorado1.position.x>80 || bloquemorado1.position.z<-80){bloquemorado1.visible=false;}
		     grupomorado.add(bloquemorado1);
		     bloquemorado2 = new BloqueMorado(bloquerojo.position.x+10,0,bloquerojo.position.z-20);//Noreste
		     if (bloquemorado2.position.x>80 || bloquemorado2.position.z<-80){bloquemorado2.visible=false;}
		     grupomorado.add(bloquemorado2);
		     bloquemorado3 = new BloqueMorado(bloquerojo.position.x-10,0,bloquerojo.position.z-20);//Noroeste
		     if (bloquemorado3.position.x<10 || bloquemorado3.position.z<-80){bloquemorado3.visible=false;}
		     grupomorado.add(bloquemorado3);
		     bloquemorado4 = new BloqueMorado(bloquerojo.position.x-20,0,bloquerojo.position.z-10);//Noroeste
		     if (bloquemorado4.position.x<10 || bloquemorado4.position.z<-80){bloquemorado4.visible=false;}
		     grupomorado.add(bloquemorado4);
		     bloquemorado5 = new BloqueMorado(bloquerojo.position.x-20,0,bloquerojo.position.z+10);//Sureste
		     if (bloquemorado5.position.x<10 || bloquemorado5.position.z>-10){bloquemorado5.visible=false;}
		     grupomorado.add(bloquemorado5);
		     bloquemorado6 = new BloqueMorado(bloquerojo.position.x-10,0,bloquerojo.position.z+20);//Sureste
		     if (bloquemorado6.position.x<10 || bloquemorado6.position.z>-10){bloquemorado6.visible=false;}
		     grupomorado.add(bloquemorado6);   
		     bloquemorado7 = new BloqueMorado(bloquerojo.position.x+10,0,bloquerojo.position.z+20);//Suroeste
		     if (bloquemorado7.position.x>80 || bloquemorado7.position.z>-10){bloquemorado7.visible=false;}
		     grupomorado.add(bloquemorado7);
		     bloquemorado8 = new BloqueMorado(bloquerojo.position.x+20,0,bloquerojo.position.z+10);//Suroeste
		     if (bloquemorado8.position.x>80 || bloquemorado8.position.z>-10){bloquemorado8.visible=false;}
		     grupomorado.add(bloquemorado8);  
		     escena.add(grupomorado);  
		     bloqueverde = new BloqueVerde(bloquerojo.position.x,0,bloquerojo.position.z);
		     escena.add(bloqueverde);
		     indicador=1;
		   }//fin if Caballos
		}//fin else
	break;
	}//fin switch
    }//fin function desplazar
}
	
//////////////////////////////////  CONSTRUCTOR POSICIÓN INICIAL  ///////////////////////////////////////////////////////

function BloqueRojo(x=0,y=0,z=0){
  Agent.call(this,x,y,z);
  var texturaluz = new THREE.TextureLoader().load('luzroja.jpg');
  var luzroja = new THREE.MeshLambertMaterial({map:texturaluz});
  this.add(new THREE.Mesh(new THREE.BoxGeometry(10.2,10.2,10.2),luzroja));
  this.position.y=y;
  this.position.z=z;
  this.position.x=x;
}

BloqueRojo.prototype = new Agent();

///////////////////////////////////////  CONSTRUCTOR AYUDA  ////////////////////////////////////////////////////////////

function BloqueMorado(x=0,y=0,z=0){
  Agent.call(this,x,y,z);
  var texturaluz = new THREE.TextureLoader().load('luzmorada.jpeg');
  var luzmorada = new THREE.MeshLambertMaterial({map:texturaluz});
  this.add(new THREE.Mesh(new THREE.BoxGeometry(10.1,10.1,10.1),luzmorada));
  this.position.y=y;
  this.position.z=z;
  this.position.x=x;
}

BloqueMorado.prototype = new Agent();

///////////////////////////////////////  CONSTRUCTOR SELECCIÓN  ////////////////////////////////////////////////////////////

function BloqueVerde(x=0,y=0,z=0){
  Agent.call(this,x,y,z);
  var texturaluz = new THREE.TextureLoader().load('luzverde.jpg');
  var luzverde = new THREE.MeshLambertMaterial({map:texturaluz});
  this.add(new THREE.Mesh(new THREE.BoxGeometry(10.2,10.2,10.2),luzverde));
  this.position.y=y;
  this.position.z=z;
  this.position.x=x;
}

BloqueVerde.prototype = new Agent();

setup();
loop();
//////////////////////////////////////////   SETUP Y LOOP   /////////////////////////////////////////////////////////////////	
function setup() {
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

   reynegro = new ReyNegro(45, 10, 5);
   reyblanco = new ReyBlanco(45, 10, 75);
   escena.add(reynegro, reyblanco);
   reinanegra = new ReinaNegra(35, 10, 5);
   reinablanca = new ReinaBlanca(35, 10, 75);
   escena.add(reinanegra, reinablanca);
   caballonegro1 = new CaballoNegro(15, 10, 5);
   caballoblanco1 = new CaballoBlanco(15, 10, 75);
   caballonegro2 = new CaballoNegro(65, 10, 5);
   caballoblanco2 = new CaballoBlanco(65, 10, 75);
   escena.add(caballonegro1, caballoblanco1);
   escena.add(caballonegro2, caballoblanco2);
   peonnegro1 = new PeonNegro(5, 10, 15);
   peonblanco1 = new PeonBlanco(5, 10, 65);
   escena.add(peonnegro1, peonblanco1);
   peonnegro2 = new PeonNegro(15, 10, 15);
   peonblanco2 = new PeonBlanco(15, 10, 65);
   escena.add(peonnegro2, peonblanco2);
   peonnegro3 = new PeonNegro(25, 10, 15);
   peonblanco3 = new PeonBlanco(25, 10, 65);
   escena.add(peonnegro3, peonblanco3);
   peonnegro4 = new PeonNegro(35, 10, 15);
   peonblanco4 = new PeonBlanco(35, 10, 65);
   escena.add(peonnegro4, peonblanco4);
   peonnegro5 = new PeonNegro(45, 10, 15);
   peonblanco5 = new PeonBlanco(45, 10, 65);
   escena.add(peonnegro5, peonblanco5);
   peonnegro6 = new PeonNegro(55, 10, 15);
   peonblanco6 = new PeonBlanco(55, 10, 65);
   escena.add(peonnegro6, peonblanco6);
   peonnegro7 = new PeonNegro(65, 10, 15);
   peonblanco7 = new PeonBlanco(65, 10, 65);
   escena.add(peonnegro7, peonblanco7);
   peonnegro8 = new PeonNegro(75, 10, 15);
   peonblanco8 = new PeonBlanco(75, 10, 65);
   escena.add(peonnegro8, peonblanco8);
   alfilnegro1 = new PeonNegro(25, 10, 5);
   alfilblanco1 = new PeonBlanco(25, 10, 75);
   escena.add(alfilnegro1, alfilblanco1);
   alfilnegro2 = new PeonNegro(55, 10, 5);
   alfilblanco2 = new PeonBlanco(55, 10, 75);
   escena.add(alfilnegro2, alfilblanco2);
   torrenegra1 = new TorreNegra(5, 10, 5);
   torreblanca1 = new TorreBlanca(5, 10, 75);
   escena.add(torrenegra1, torreblanca1);
   torrenegra2 = new TorreNegra(75, 10, 5);
   torreblanca2 = new TorreBlanca(75, 10, 75);
   escena.add(torrenegra2, torreblanca2);

	/////////////////////////////////////    Cursor Inicial    ////////////////////////////////////////////////////////////////
	bloqueazul = new BloqueAzul(10,0,-10);
	escena.add(bloqueazul);
	//Luces
	escena.add(luzPuntual1, luzPuntual2, luzPuntual3, luzPuntual4);
	escena.rotateX(Math.PI/4);
}

function loop() {
  requestAnimationFrame(loop);
  escena.sense();
  escena.plan();
  escena.act();
  renderizador.render(escena, camara);
}

