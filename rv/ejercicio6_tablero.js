var camara = new THREE.PerspectiveCamera();
camara.position.y = 150;
camara.position.z = 150;
camara.position.x = 150;
camara.lookAt(new THREE.Vector3(0,0,0));

var grayColor = new THREE.Color("rgb(128,128,128)");
var whiteColor = new THREE.Color("rgb(255,255,255)");
var brownColor = new THREE.Color("rgb(128,128,128)");
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

var orilla = new THREE.Shape();
orilla.moveTo(-10,0);
orilla.lineTo(90,0);
orilla.lineTo(90,10);
orilla.lineTo(-10,10);

var forma = new THREE.ExtrudeGeometry(orilla, {amount: 10});
var material2 = materialCafe;
var marco = new THREE.Mesh(forma, material2);

var tablero = new THREE.Geometry();
tablero.merge(marco.geometry, marco.matrix);

var escena = new THREE.Scene();
//for (i=1; i<=64;i++){
  //  tablero.merge(cubos[i].geometry, cubos[i].matrix);
    
//}
escena.add(tablero);

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth, window.innerHeight); //Renderizador en toda la pantalla

document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);
