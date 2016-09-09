var camara = new THREE.PerspectiveCamera();
camara.position.y = 100;
camara.position.z = 100;
camara.position.x = 100;
camara.lookAt(new THREE.Vector3(0,0,0));

var grayColor = new THREE.Color("rgb(128,128,128)");
var whiteColor = new THREE.Color("rgb(255,255,255)");
var materialBlanco = new THREE.MeshBasicMaterial();
var materialGris = new THREE.MeshBasicMaterial();
materialGris.color = grayColor;
materialBlanco.color = whiteColor;

//Tablero
var cubos = [];

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
    cubo.position.y = i*lado;
    cubos.push(cubo)
    }
}

//Unión
for (i=1; i<64;i++){
    cubos[0].add(cubos[i]);
    
}

var escena = new THREE.Scene();
for (i=1; i<64;i++){
    escena.add(cubos[i]);

}

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth, window.innerHeight); //Renderizador en toda la pantalla

document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);
