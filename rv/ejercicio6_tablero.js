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

var escena = new THREE.Scene();
escena.add(marco1);
escena.add(marco2);
escena.add(marco3);
escena.add(marco4);

for (i = 0; i < 64; i++) {
escena.add(cubos[i]);
}

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth, window.innerHeight); //Renderizador en toda la pantalla

document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);
