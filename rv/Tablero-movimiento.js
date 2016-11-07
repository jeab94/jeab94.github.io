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
cargadorBlack.load("black_wood.jpg", fnBlack);
var cargadorWhite=new THREE.TextureLoader();
cargadorWhite.load("white_wood.jpg", fnWhite);
var cargadorWood=new THREE.TextureLoader();
cargadorWood.load("wood.jpg", fnWood);

Environment.prototype.setTablero = function(x, y, z){
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
marco3.translateX(40+x);

var orilla4 = new THREE.BoxGeometry( 5, 10, 80 );
var material4 = Marco;
var marco4 = new THREE.Mesh( orilla4, material4);
marco4.translateZ(40+z);
marco4.translateX(-2.5+x);
}
