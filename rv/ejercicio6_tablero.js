var camara = new THREE.PerspectiveCamera();

camara.position.y = 100;
camara.position.x = 100;
camara.position.z = 100;
camara.lookAt(new THREE.Vector3(40,5,40));

var luzPuntual1 = new THREE.PointLight(0xFFFFFF,0.8);
luzPuntual1.position.x = 40;
luzPuntual1.position.y = 100;
luzPuntual1.position.z = 40;

var materialBlanco = new THREE.MeshLambertMaterial( { 
    color: 0xffffff
} );

var materialCafe = new THREE.MeshLambertMaterial( { 
    color: 0x654321 
} );

//Tablero
var lado = 10;
var cubos = [];
var material = materialGris;
var tablero = new THREE.Geometry()

for (i=0;i<=7;i++){
for (var j=0;j<=7;j++){
    if ((i+j) % 2 == 0){
        material= materialGris;
        }
    else{
        material= materialBlanco;
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

//Torre1Blanca
    torre1 = mallaTorre.clone();
    torre1.scale.set(0.07,0.07,0.07);
    torre1.translateY(10);
    torre1.translateX(5);
    torre1.translateZ(5);
    torre1.material = materialBlanco;
    
//Torre2Blanca
    torre2 = mallaTorre.clone();
    torre2.scale.set(0.07,0.07,0.07);
    torre2.translateY(10);
    torre2.translateX(5);
    torre2.translateZ(75);
    torre2.material = materialBlanco;
    
//Torre3Negra
    torre3 = mallaTorre.clone();
    torre3.scale.set(0.07,0.07,0.07);
    torre3.translateY(10);
    torre3.translateX(75);
    torre3.translateZ(5);
    
//Torre4Negra
    torre4 = mallaTorre.clone();
    torre4.scale.set(0.07,0.07,0.07);
    torre4.translateY(10);
    torre4.translateX(75);
    torre4.translateZ(75);
    
var escena = new THREE.Scene();
escena.add(marco1);
escena.add(marco2);
escena.add(marco3);
escena.add(marco4);
escena.add(torre1);
escena.add(torre2);
escena.add(torre3);
escena.add(torre4);
escena.add(luzPuntual1);


for (i = 0; i < 64; i++) {
escena.add(cubos[i]);
}

var renderizador = new THREE.WebGLRenderer({});
renderizador.setSize(window.innerWidth, window.innerHeight); //Renderizador en toda la pantalla

document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);
