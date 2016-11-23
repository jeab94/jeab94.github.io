var escena;
var renderizador;
var camara;
var tablero;

var cubo;
var cubos;
var marco1;
var marco2;
var marco3;
var marco4;
var orilla1;
var orilla2;
var orilla3;
var orilla4;

setup();
loop();

function setup(){
   escena = new Environment();

   camara = new THREE.PerspectiveCamera();

   camara.position.y = 50;
   camara.position.x = 40;
   camara.position.z = 150;
   camara.lookAt(new THREE.Vector3(0,0,0));

   renderizador = new THREE.WebGLRenderer();
   renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
   document.body.appendChild(renderizador.domElement);
   
   //Texturas
   var texturaBlack = new THREE.TextureLoader().load("black_marmol.jpg");
   var Gris = new THREE.MeshBasicMaterial({ map: texturaBlack });

   var texturaWhite = new THREE.TextureLoader().load("white_marmol.jpg");
   var Blanco = new THREE.MeshBasicMaterial({ map: texturaWhite });

   var texturaWood = new THREE.TextureLoader().load("wood.jpg");
   var Marco = new THREE.MeshBasicMaterial({ map: texturaWood });
   
   //Tablero
   x = 0;
   y = 0;
   z = 0;
   var lado = 10;
   var forma = new THREE.BoxBufferGeometry(lado,lado,lado);
   cubos = [];
   var material = Gris;
   
   for (var i=0;i<=7;i++){
   for (var j=0;j<=7;j++){
       if ((i+j) % 2 == 0){
           material= Gris;
           }
       else{
           material= Blanco;
           }
       cubo = new THREE.Mesh(forma ,material);
       cubo.position.x = j*lado+5+x;
       cubo.position.z = i*lado+5+z;
       cubo.position.y = y;
       cubos.push(cubo)

       }
   }

   orilla1 = new THREE.BoxGeometry( 90, 10, 5 );
   var material1 = Marco;
   marco1 = new THREE.Mesh( orilla1, material1 );
   marco1.translateZ(-2.5+z);
   marco1.translateX(40+x);
   marco1.translateY(y);

   orilla2 = new THREE.BoxGeometry( 5, 10, 80 );
   var material2 = Marco;
   marco2 = new THREE.Mesh( orilla2, material2);
   marco2.translateZ(40+z);
   marco2.translateX(82.5+x);
   marco2.translateY(y);

   orilla3 = new THREE.BoxGeometry( 90, 10, 5 );
   var material3 = Marco;
   marco3 = new THREE.Mesh( orilla3, material3);
   marco3.translateZ(82.5+z);
   marco3.translateX(40+x);
   marco3.translateY(y);

   orilla4 = new THREE.BoxGeometry( 5, 10, 80 );
   var material4 = Marco;
   marco4 = new THREE.Mesh( orilla4, material4);
   marco4.translateZ(40+z);
   marco4.translateX(-2.5+x);
   marco4.translateY(y);
   
   //Unión de tablero
   tablero = new THREE.Geometry();
   tablero.merge(marco1.geometry, marco1.matrix);
   tablero.merge(marco2.geometry, marco2.matrix);
   tablero.merge(marco3.geometry, marco3.matrix);
   tablero.merge(marco4.geometry, marco4.matrix);
   
/*   for(var q=1; q<=64; q++){
      tablero.merge(cubos[q].geometry, cubos[q].matrix);
   }
*/   
   escena.add( tablero );
}


function loop(){
     requestAnimationFrame(loop);
     escena.sense();
     escena.plan();
     escena.act();
     renderizador.render(escena, camara);
}


