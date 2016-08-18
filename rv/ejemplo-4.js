var escena = new THREE.Scene(); //Escena
var camara = new THREE.PerspectiveCamera(); //Cámara 
camara.position.z = 5;  //Las cámaras heredan de un objeto tipo Object3D() con posición 0,0,0 como default
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95); //window da las dimensiones internas de la ventana del navegador (autoescalado al 95%)
document.body.appendChild( renderizador.domElement ); //Inserta un nodo al Body 
var forma = new THREE.BoxGeometry( 1,1,1);
var material = new THREE.MeshNormalMaterial(); //el de default sería MeshBasicMaterial
var cubo = new THREE.Mesh( forma,material ); //Cosntructor Mesh()
cubo.rotateX(-Math.PI/4); //Rota 45° en X
cubo.rotateY(-Math.PI/4); //Rota 45° en Y
renderizador.render( escena,camara );
