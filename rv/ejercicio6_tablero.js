var camara = new THREE.PerspectiveCamera();

camara.position.y = 150;
camara.position.x = 200;
camara.position.z = 200;
camara.lookAt(new THREE.Vector3(40,0,40));

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
var cubos = [];
var material = materialGris;
var forma = new THREE.BoxGeometry(lado,lado,lado);
var tablero = new THREE.Geometry()

for (i=0;i<=7;i++){
for (var j=0;j<=7;j++){
    if ((i+j) % 2 == 0){
        var material= materialGris;
        }
    else{
        var material= materialBlanco;
        }
    var lado = 10;
    var forma = new THREE.BoxGeometry(lado,lado,lado);
    var cubo = new THREE.Mesh(forma ,material);
    cubo.position.x = j*lado+5;
    cubo.position.z = i*lado+5;
    cubos.push(cubo)
    }
}

var orilla1 = new THREE.Shape();
orilla1.moveTo(3,-5);
orilla1.lineTo(87,-5);
orilla1.lineTo(87,5);
orilla1.lineTo(3,5);

var forma1 = new THREE.ExtrudeGeometry(orilla1, {amount: -5});
var material2 = materialCafe;
var marco1 = new THREE.Mesh(forma1, material2);

var orilla2 = new THREE.Shape();
orilla2.moveTo(85,-5);
orilla2.lineTo(87,-5);
orilla2.lineTo(87,5);
orilla2.lineTo(85,5);

var forma2 = new THREE.ExtrudeGeometry(orilla2, {amount: 80});
var material2 = materialCafe;
var marco2 = new THREE.Mesh(forma2, material2);

var orilla3 = new THREE.Shape();
orilla3.moveTo(3,-5);
orilla3.lineTo(87,-5);
orilla3.lineTo(87,5);
orilla3.lineTo(3,5);

var forma3 = new THREE.ExtrudeGeometry(orilla3, {amount: 5 });
var material3 = materialCafe;
var marco3 = new THREE.Mesh(forma3, material3);
marco3.translateZ(85);

var orilla4 = new THREE.Shape();
orilla4.moveTo(-5,-5);
orilla4.lineTo(-3,-5);
orilla4.lineTo(-3,5);
orilla4.lineTo(-5,5);

var forma4 = new THREE.ExtrudeGeometry(orilla4, {amount: 80})
var material4 = materialCafe;
var marco4 = new THREE.Mesh(forma4, material4);


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
