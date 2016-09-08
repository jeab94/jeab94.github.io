var camara = new THREE.PerspectiveCamera();
camara.position.y = -190;
camara.position.z = -500;
camara.position.x = 0;
camara.lookAt(new THREE.Vector3(0,0,0));

//Tablero
var cubos = new Array();
for( int i=0; i<4; i++ )
    arr[i] = new A();
var c=0;
for (i=0;i<=7;i++){
for (var j=0;j<=7;j++){
var cubos.push( (property: cubos[c]) );
cubos[c].position.x = i*10;
cubos[c].position.y = j*10;
}
c=c++;
}

var escena = new THREE.Scene();
escena.add(cubos);

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth, window.innerHeight); //Renderizador en toda la pantalla

document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);
