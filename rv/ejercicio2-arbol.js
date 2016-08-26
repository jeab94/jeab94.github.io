var escena = new THREE.Scene(); //Escena
var camara = new THREE.PerspectiveCamera(); //Cámara 
camara.position.z = 5;  //Las cámaras heredan de un objeto tipo Object3D() con posición 0,0,0 como default
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95, window.innerHeight*.95); //window da las dimensiones internas de la ventana del navegador (autoescalado al 95%)
document.body.appendChild(renderizador.domElement); //Inserta un nodo al Body 

var forma1 = new THREE.TetrahedronGeometry(1,0);
var material1 = new THREE.MeshBasicMaterial({ color: 0x999900 }); //el de default sería MeshBasicMaterial
var tetraedro = new THREE.Mesh( forma1, material1 ); //Cosntructor Mesh()
tetraedro.rotateX(-Math.PI/4); //Rota 45° en X
tetraedro.rotateY(-Math.PI/4); //Rota 45° en Y
tetraedro.translateY(1);

var forma2 = new THREE.CylinderGeometry( 0.25, 0.375, 2, 10 );
var material2 = new THREE.MeshBasicMaterial({ color: 0x993300 });
var cilindro = new THREE.Mesh( forma2, material2 );
//cilindro.translateY();
cilindro.rotateX(-Math.PI/4); //Rota 45° en X
cilindro.rotateY(-Math.PI/4); //Rota 45° en Y

escena.add( tetraedro, cilindro );

renderizador.render(escena,camara);
