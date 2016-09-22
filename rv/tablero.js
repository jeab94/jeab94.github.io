var camara = new THREE.PerspectiveCamera();

camara.position.y = 100;
camara.position.x = 100;
camara.position.z = 100;
camara.lookAt(new THREE.Vector3(40,5,40));

var luzPuntual1 = new THREE.PointLight(0xFFFFFF,1);
luzPuntual1.position.x = -50;
luzPuntual1.position.y = 100;
luzPuntual1.position.z = -50;

var luzPuntual2 = new THREE.PointLight(0xFFFFFF,1);
luzPuntual2.position.x = 130;
luzPuntual2.position.y = 100;
luzPuntual2.position.z = -50;

var luzPuntual3 = new THREE.PointLight(0xFFFFFF,1);
luzPuntual3.position.x = -50;
luzPuntual3.position.y = 100;
luzPuntual3.position.z = 130;

whiteColor = new THREE.Color(0xffffff);
var materialBlanco = new THREE.MeshPhongMaterial( { color: whiteColor } ); 

brownColor = new THREE.Color(0x654321);
var materialCafe = new THREE.MeshPhongMaterial( { color: brownColor } ); 

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

var materialBlanco1 = new THREE.MeshPhongMaterial( { color: whiteColor, opacity: 1, transparent: true } );
//Torre1Blanca
    torre1 = mallaTorre.clone();
    torre1.scale.set(0.07,0.07,0.07);
    torre1.translateY(10);
    torre1.translateX(5);
    torre1.translateZ(5);
    torre1.material = materialBlanco1;
    
var materialBlanco2 = new THREE.MeshPhongMaterial( { color: whiteColor, opacity: 0.75, transparent: true } );
//Torre2Blanca
    torre2 = mallaTorre.clone();
    torre2.scale.set(0.07,0.07,0.07);
    torre2.translateY(10);
    torre2.translateX(5);
    torre2.translateZ(75);
    torre2.material = materialBlanco2;

grayColor = new THREE.Color(0x888888);
brownColor = new THREE.Color(0x654321);
var materialCafe = new THREE.MeshPhongMaterial( { color: brownColor } );     
var materialNegro1 = new THREE.MeshPhongMaterial( { color: grayColor, opacity: 0.5, transparent: true } );
//Torre3Negra
    torre3 = mallaTorre.clone();
    torre3.scale.set(0.07,0.07,0.07);
    torre3.translateY(10);
    torre3.translateX(75);
    torre3.translateZ(5);
    torre3.material = materialNegro1;
var materialNegro2 = new THREE.MeshPhongMaterial( { color: grayColor, opacity: 0.25, transparent: true } );
//Torre4Negra
    torre4 = mallaTorre.clone();
    torre4.scale.set(0.07,0.07,0.07);
    torre4.translateY(10);
    torre4.translateX(75);
    torre4.translateZ(75);
    torre4.material = materialNegro2;
    
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
escena.add(luzPuntual2);
escena.add(luzPuntual3);


for (i = 0; i < 64; i++) {
escena.add(cubos[i]);
cubos[i].receiveShadow = true;
}

var renderizador = new THREE.WebGLRenderer({});
renderizador.setSize(window.innerWidth, window.innerHeight); //Renderizador en toda la pantalla

renderizador.shadowMap.enabled = true;
luzPuntual1.castShadow = true;
luzPuntual2.castShadow = true;
luzPuntual3.castSahdow = true;
marco1.receiveShadow = true;
marco2.receiveShadow = true;
marco3.receiveShadow = true;
marco4.receiveShadow = true;
torre1.castShadow = true;
torre2.castShadow = true;
torre3.castShadow = true;
torre4.castShadow = true;

document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);


