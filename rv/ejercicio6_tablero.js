var camara = new THREE.OrthographicCamera();

camara.left = window.innerWidth/-2;
camara.right = window.innerWidth/2;
camara.top = window.innerHeight/2;
camara.bottom = window.innerHeight/-2;
camara.near = 0.1;
camara.far = 1000;
camara.updateProjectionMatrix(); //Actualiza la matriz de proyección

camara.position.y = 150;
camara.rotation.x = -Math.PI/2; 

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
orilla1.moveTo(-10,-5);
orilla1.lineTo(80,-5);
orilla1.lineTo(80,5);
orilla1.lineTo(-10,5);

var forma1 = new THREE.ExtrudeGeometry(orilla1, {amount: -5});
var material2 = materialCafe;
var marco1 = new THREE.Mesh(forma1, material2);
marco1.translateZ(-5);

var orilla2 = new THREE.Shape();
orilla2.moveTo(75,-5);
orilla2.lineTo(80,-5);
orilla2.lineTo(80,5);
orilla2.lineTo(75,5);

var forma2 = new THREE.ExtrudeGeometry(orilla2, {amount: 85});
var material2 = materialCafe;
var marco2 = new THREE.Mesh(forma2, material2);
marco2.translateZ(-5);
marco2.translateX(5);
var escena = new THREE.Scene();
escena.add(marco1);
escena.add(marco2);

var orilla3 = new THREE.Shape();
orilla3.moveTo(-10,-5);
orilla3.lineTo(75,-5);
orilla3.lineTo(75,5);
orilla3.lineTo(-10,5);


var forma3 = new THREE.Extrudegeometry(orilla3, {amount: 5});
var material3 = materialCafe;
var marco3 = new THREE.Mesh(forma3, material3);
marco3.translateZ(75);

var escena = new THREE.Scene();
escena.add(marco1);
escena.add(marco2);
escena.add(marco3);


for (i = 0; i < 64; i++) {
escena.add(cubos[i]);
}

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth, window.innerHeight); //Renderizador en toda la pantalla

document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);
