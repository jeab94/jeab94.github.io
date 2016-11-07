var mat1 = false;
var mat2 = false;
var mat3 = false;

var environment
var renderer;
var camera;

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
var cargadorWhite=new THREE.TextureLoader();
var cargadorWood=new THREE.TextureLoader();

Environment.prototype.setTablero = function(x, y, z){
   cargadorBlack.load("black_wood.jpg", fnBlack);
   cargadorWhite.load("white_wood.jpg", fnWhite);
   cargadorWood.load("wood.jpg", fnWood);
   
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
}

function setup(){
   environment = new Environment();
  
   environment.setTablero(0,0,0);
   
   camera = new THREE.PerspectiveCamera();

   camera.position.y = 100;
   camera.position.x = 100;
   camera.position.z = 100;
   camera.lookAt(new THREE.Vector3(40,5,40));
   
   renderer = new THREE.WebGLRenderer();
   renderer.setSize(window.innerHeight, window.innerHeight);
   document.body.appendChild(renderer.domElement);
  
   environment.add(camera);
}

function loop(){
  requestAnimationFrame(loop);
  
  environment.sense();
  environment.plan();
  environment.act();
  
  renderer.render(environment, camera);
}

setup();
loop();
