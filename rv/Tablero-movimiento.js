var mat1 = false;
var mat2 = false;
var mat3 = false;

var environment
var renderer;
var camera;

var cargadorBlack = new THREE.TextureLoader().load("black_marmol.jpg");
var Gris = new THREE.MeshBasicMaterial({ map: cargadorBlack });

var cargadorWhite = new THREE.TextureLoader().load("white_marmol.jpg");
var Blanco = new THREE.MeshBasicMaterial({ map: cargadorWhite });

var cargadorWood = new THREE.TextureLoader().load("wood.jpg");
var Marco = new THREE.MeshBasicMaterial({ map: cargadorWood });

setTablero = function(x, y, z){

   //Tablero
   var lado = 10;
   var cubos = [];
   var material = Gris;
   var tablero = new THREE.Geometry()

   for (var i=0;i<=7;i++){
   for (var j=0;j<=7;j++){
       if ((i+j) % 2 == 0){
           material= Gris;
           }
       else{
           material= Blanco;
           }
       var forma = new THREE.BoxBufferGeometry(lado,lado,lado);
       var cubo = new THREE.Mesh(forma ,material);
       cubo.position.x = j*lado+5+x;
       cubo.position.z = i*lado+5+z;
       cubo.position.y = y;
       cubos.push(cubo)

       }
   }

   var orilla1 = new THREE.BoxGeometry( 90, 10, 5 );
   var material1 = Marco;
   var marco1 = new THREE.Mesh( orilla1, material1 );
   marco1.translateZ(-2.5+z);
   marco1.translateX(40+x);
   marco1.translateY(y);

   var orilla2 = new THREE.BoxGeometry( 5, 10, 80 );
   var material2 = Marco;
   var marco2 = new THREE.Mesh( orilla2, material2);
   marco2.translateZ(40+z);
   marco2.translateX(82.5+x);
   marco2.translateY(y);

   var orilla3 = new THREE.BoxGeometry( 90, 10, 5 );
   var material3 = Marco;
   var marco3 = new THREE.Mesh( orilla3, material3);
   marco3.translateZ(82.5+z);
   marco3.translateX(40+x);
   marco3.translateY(y);

   var orilla4 = new THREE.BoxGeometry( 5, 10, 80 );
   var material4 = Marco;
   var marco4 = new THREE.Mesh( orilla4, material4);
   marco4.translateZ(40+z);
   marco4.translateX(-2.5+x);
   marco4.translateY(y);
   
   //Unión de tablero
   var tablero = new THREE.Geometry();
   tablero.merge(marco1.geometry, marco1.matrix);
   tablero.merge(marco2.geometry, marco2.matrix);
   tablero.merge(marco3.geometry, marco3.matrix);
   tablero.merge(marco4.geometry, marco4.matrix);
   for(var q=1; q<=64; q++){
      tablero.merge(cubos[q]);
   }
   
   environment.add(tablero);
  
}

setup();
loop();

function setup(){
   environment = new Environment();
  
   setTablero(0,0,0);
   
   camera = new THREE.PerspectiveCamera();

   camera.position.y = 100;
   camera.position.x = 100;
   camera.position.z = 100;
   camera.lookAt(new THREE.Vector3(0,0,0));
   
   renderer = new THREE.WebGLRenderer();
   renderer.setSize(window.innerHeight*.95, window.innerHeight*.95);
   document.body.appendChild(renderer.domElement);
   renderer.render(environment, camera);
}

function loop(){
   if(mat1 && mat2 && mat3){
     requestAnimationFrame(loop);
         environment.sense();
         environment.plan();
         environment.act();
  }
   renderer.render(environment, camera);
}


