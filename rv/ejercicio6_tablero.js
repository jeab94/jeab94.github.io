var camara = new THREE.PerspectiveCamera();
camara.position.y = -190;
camara.position.z = -500;
camara.position.x = 0;
camara.lookAt(new THREE.Vector3(0,0,0));

var materialBlanco = new THREE.MeshBasicMaterial({color: 0xd3d3d3 });
var materialGris = new THREE.MeshBasicMaterial({color: 0xffffff});


//Tablero
var cubos = new Array();

var c=0;
for (i=0;i<=7;i++){
for (var j=0;j<=7;j++){
    if ((i+j) % 2 == 0){
        material= materialBlanco;
        }
    else{
        material= materialGris;
        }
    var cubo = new THREE.Mesh(new THREE.BoxGeometry(1,1,1),material);
    cubos.push(cubo)
    c=c++;
}
}

var escena = new THREE.Scene();
escena.add(cubos);

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth, window.innerHeight); //Renderizador en toda la pantalla

document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);
