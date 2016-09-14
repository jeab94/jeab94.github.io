var camara = new THREE.PerspectiveCamera();
camara.position.y = 0;
camara.position.z = 150;
camara.position.x = 40;
camara.lookAt(new THREE.Vector3(0,150,40));

var grayColor = new THREE.Color("rgb(128,128,128)");
var whiteColor = new THREE.Color("rgb(255,255,255)");
var brownColor = new THREE.Color("rgb(0,0,255)");
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
    cubo.position.x = j*lado;
    cubo.position.z = i*lado;
    cubos.push(cubo)
    }
}

var orilla1 = new THREE.Shape();
orilla1.moveTo(-5,0);
orilla1.lineTo(85,0);
orilla1.lineTo(85,10);
orilla1.lineTo(-5,10);

var forma1 = new THREE.ExtrudeGeometry(orilla1, {amount: -10});
var material2 = materialCafe;
var marco1 = new THREE.Mesh(forma1, material2);

var orilla2 = new THREE.Shape();
orilla2.moveTo(80,0);
orilla2.lineTo(85,0);
orilla2.lineTo(85,10);
orilla2.lineTo(80,10);

var forma2 = new THREE.ExtrudeGeometry(orilla2, {amount: 85});
var material2 = materialCafe;
var marco2 = new THREE.Mesh(forma2, material2);

var escena = new THREE.Scene();
escena.add(marco1);
escena.add(marco2);

for (i = 0; i < 64; i++) {
escena.add(cubos[i]);
}


var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth, window.innerHeight); //Renderizador en toda la pantalla

document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);
