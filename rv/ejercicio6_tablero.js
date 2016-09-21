var luzPuntual1 = new THREE.PointLight(0xFFFFFF,1);
luzPuntual1.position.x = -50;
luzPuntual1.position.y = 100;
luzPuntual1.position.z = -50;

var luzPuntual2 = new THREE.PointLight(0xFFFFFF,1);
luzPuntual2.position.x = 130;
luzPuntual2.position.y = 100;
luzPuntual2.position.z = -50;

var luzPuntual3 = new THREE.PointLight(0xFFFFFF,1);
luzPuntual3.position.x = 130;
luzPuntual3.position.y = 100;
luzPuntual3.position.z = 130;

luzPuntual1.castShadow = true;
luzPuntual2.castShadow = true;
luzPuntual3.castShadow = true;

var camara = new THREE.PerspectiveCamera();

camara.position.y = 100;
camara.position.x = 100;
camara.position.z = 100;
camara.lookAt(new THREE.Vector3(40,5,40));

var materialBlanco = new THREE.MeshLambertMaterial( { 
    color: 0xffffff
} );

var materialGris = new THREE.MeshLambertMaterial( { 
    color: 0x888888 
} ); 
var materialCafe = new THREE.MeshLambertMaterial( { 
    color: 0x654321 
} );


var materialTorre1 = new THREE.MeshLambertMaterial( {
    color: 0xffffff,
    //transparent: true
} );
//materialTorre1.opacity = 1;
var materialTorre2 = new THREE.MeshLambertMaterial( {
    color: 0xffffff,
    //transparent: true
} );
//materialTorre2.opacity = 0.75;
var materialTorre3 = new THREE.MeshLambertMaterial( {
    color: 0x000000,
    //transparent: true
} );
//materialTorre3.opacity = 0.5;
var materialTorre4 = new THREE.MeshLambertMaterial( {
    color: 0x000000,
    //transparent: true
} );
//materialTorre4.opacity = 0.25;
        

//Tablero
var lado = 10;
var cubos = [];
//var material = materialGris;
//var forma = new THREE.BoxBufferGeometry(lado,lado,lado);
var tablero = new THREE.Geometry()

for (i=0;i<=7;i++){
for (var j=0;j<=7;j++){
    if ((i+j) % 2 == 0){
        var material= materialGris;
        }
    else{
        var material= materialBlanco;
        }
    var forma = new THREE.BoxBufferGeometry(lado,lado,lado);
    var cubo = new THREE.Mesh(forma ,material);
    cubo.position.x = j*lado+5;
    cubo.position.z = i*lado+5;
    cubo.receiveShadow = true;
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

marco1.receiveShadow = true;
marco2.receiveShadow = true;
marco3.receiveShadow = true;
marco4.receiveShadow = true;

//Torre1Blanca

    //Base de la torre
    var base1 = new THREE.Shape();
    
    base1.moveTo( -40, -10 );
    base1.lineTo( -40, 10 );
    base1.lineTo( 40, 10 );
    base1.lineTo( 40, -10 );
    base1.lineTo( -40, -10 );
    
    var torre11 = new THREE.ExtrudeGeometry(base1, { amount: 80 } );
    torre11.translate(0, -95, -40);
    var malla11 = new THREE.Mesh(torre11, new THREE.Material());
    
    //Mitad inferior de la torre
    var puntos11 = [];
    
    for( var i = 0; i < 100; i++ ){ //Son 50 puntos
      puntos11.push( new THREE.Vector2( Math.sin(i*0.1)*15+40, (i-5)*2) );
    }
    
    var torre21 = new THREE.LatheGeometry(puntos11); //Torno
    torre21.translate(0, -75, 0);
    
    var malla21 = new THREE.Mesh( torre21, new THREE.Material() );
    
    //Mitad superior de la torre
    var superior1 = new THREE.CylinderGeometry( 42, 42, 20, 32);
    
    superior1.translate( 0, 125, 0 );
    
    var malla41 = new THREE.Mesh( superior1, new THREE.Material() );
    
    //Terminación de la torre
    var puntos21 = [];
    
    for ( var j = 0; j < 100 ; j++ ){
      puntos21.push( new THREE.Vector2( 25-j/4, j+135 ) );
    }
    
    var torre31 = new THREE.LatheGeometry(puntos21);
    var malla31 = new THREE.Mesh( torre31, new THREE.Material() );
    
    //Unión
    var torreForma11 = new THREE.Geometry();
    //var torreForma2 = new THREE.Geometry();
    torreForma11.merge(malla11.geometry, malla11.matrix); //La malla calcula la matriz de la cinemática del objeto
    torreForma11.merge(malla21.geometry, malla21.matrix); //La malla calcula la matriz de la cinemática del objeto
    //torreForma2.merge(torreForma1.geometry, torreForma1.matrix);
    torreForma11.merge(malla31.geometry, malla31.matrix);//
    torreForma11.merge(malla41.geometry, malla31.matrix);
    
    //materialTorre1.opacity = 1;
    var torre1 = new THREE.Mesh(torreForma11, materialTorre1);
    torre1.scale.set(0.07,0.07,0.07);
    torre1.translateY(10);
    torre1.translateX(5);
    torre1.translateZ(5);
    torre1.castShadow = true;
    
//Torre2Blanca

//Base de la torre
    var base2 = new THREE.Shape();
    
    base2.moveTo( -40, -10 );
    base2.lineTo( -40, 10 );
    base2.lineTo( 40, 10 );
    base2.lineTo( 40, -10 );
    base2.lineTo( -40, -10 );
    
    var torre12 = new THREE.ExtrudeGeometry(base2, { amount: 80 } );
    torre12.translate(0, -95, -40);
    var malla12 = new THREE.Mesh(torre11, new THREE.Material());
    
    //Mitad inferior de la torre
    var puntos12 = [];
    
    for( var i = 0; i < 100; i++ ){ //Son 50 puntos
      puntos12.push( new THREE.Vector2( Math.sin(i*0.1)*15+40, (i-5)*2) );
    }
    
    var torre22 = new THREE.LatheGeometry(puntos12); //Torno
    torre22.translate(0, -75, 0);
    
    var malla22 = new THREE.Mesh( torre22, new THREE.Material() );
    
    //Mitad superior de la torre
    var superior2 = new THREE.CylinderGeometry( 42, 42, 20, 32);
    
    superior2.translate( 0, 125, 0 );
    
    var malla42 = new THREE.Mesh( superior2, new THREE.Material() );
    
    //Terminación de la torre
    var puntos22 = [];
    
    for ( var j = 0; j < 100 ; j++ ){
      puntos22.push( new THREE.Vector2( 25-j/4, j+135 ) );
    }
    
    var torre32 = new THREE.LatheGeometry(puntos22);
    var malla32 = new THREE.Mesh( torre32, new THREE.Material() );
    
    //Unión
    var torreForma12 = new THREE.Geometry();
    torreForma12.merge(malla12.geometry, malla12.matrix); //La malla calcula la matriz de la cinemática del objeto
    torreForma12.merge(malla22.geometry, malla22.matrix); //La malla calcula la matriz de la cinemática del objeto
    torreForma12.merge(malla32.geometry, malla32.matrix);//
    torreForma12.merge(malla42.geometry, malla32.matrix);
    
    //materialTorre1.opacity = 0.75;
    var torre2 = new THREE.Mesh(torreForma12, materialTorre2);
    torre2.scale.set(0.07,0.07,0.07);
    torre2.translateY(10);
    torre2.translateX(5);
    torre2.translateZ(75);
    torre2.castShadow = true;
    
//Torre3Negra

    //Base de la torre
    var base3 = new THREE.Shape();
    
    base3.moveTo( -40, -10 );
    base3.lineTo( -40, 10 );
    base3.lineTo( 40, 10 );
    base3.lineTo( 40, -10 );
    base3.lineTo( -40, -10 );
    
    var torre13 = new THREE.ExtrudeGeometry(base3, { amount: 80 } );
    torre13.translate(0, -95, -40);
    var malla13 = new THREE.Mesh(torre11, new THREE.Material());
    
    //Mitad inferior de la torre
    var puntos13 = [];
    
    for( var i = 0; i < 100; i++ ){ //Son 50 puntos
      puntos13.push( new THREE.Vector2( Math.sin(i*0.1)*15+40, (i-5)*2) );
    }
    
    var torre23 = new THREE.LatheGeometry(puntos13); //Torno
    torre23.translate(0, -75, 0);
    
    var malla23 = new THREE.Mesh( torre23, new THREE.Material() );
    
    //Mitad superior de la torre
    var superior3 = new THREE.CylinderGeometry( 42, 42, 20, 32);
    
    superior3.translate( 0, 125, 0 );
    
    var malla43 = new THREE.Mesh( superior3, new THREE.Material() );
    
    //Terminación de la torre
    var puntos23 = [];
    
    for ( var j = 0; j < 100 ; j++ ){
      puntos23.push( new THREE.Vector2( 25-j/4, j+135 ) );
    }
    
    var torre33 = new THREE.LatheGeometry(puntos23);
    var malla33 = new THREE.Mesh( torre33, new THREE.Material() );
    
    //Unión
    var torreForma13 = new THREE.Geometry();
    torreForma13.merge(malla13.geometry, malla13.matrix); //La malla calcula la matriz de la cinemática del objeto
    torreForma13.merge(malla23.geometry, malla23.matrix); //La malla calcula la matriz de la cinemática del objeto
    torreForma13.merge(malla33.geometry, malla33.matrix);//
    torreForma13.merge(malla43.geometry, malla33.matrix);
    
    //materialTorre2.opacity = 0.5;
    var torre3 = new THREE.Mesh(torreForma13, materialTorre3);
    torre3.scale.set(0.07,0.07,0.07);
    torre3.translateY(10);
    torre3.translateX(75);
    torre3.translateZ(5);
    torre3.castShadow = true;

//Torre4Negra

    //Base de la torre
    var base4 = new THREE.Shape();
    
    base4.moveTo( -40, -10 );
    base4.lineTo( -40, 10 );
    base4.lineTo( 40, 10 );
    base4.lineTo( 40, -10 );
    base4.lineTo( -40, -10 );
    
    var torre14 = new THREE.ExtrudeGeometry(base4, { amount: 80 } );
    torre14.translate(0, -95, -40);
    var malla14 = new THREE.Mesh(torre14, new THREE.Material());
    
    //Mitad inferior de la torre
    var puntos14 = [];
    
    for( var i = 0; i < 100; i++ ){ //Son 50 puntos
      puntos14.push( new THREE.Vector2( Math.sin(i*0.1)*15+40, (i-5)*2) );
    }
    
    var torre24 = new THREE.LatheGeometry(puntos14); //Torno
    torre24.translate(0, -75, 0);
    
    var malla24 = new THREE.Mesh( torre24, new THREE.Material() );
    
    //Mitad superior de la torre
    var superior4 = new THREE.CylinderGeometry( 42, 42, 20, 32);
    
    superior4.translate( 0, 125, 0 );
    
    var malla44 = new THREE.Mesh( superior4, new THREE.Material() );
    
    //Terminación de la torre
    var puntos24 = [];
    
    for ( var j = 0; j < 100 ; j++ ){
      puntos24.push( new THREE.Vector2( 25-j/4, j+135 ) );
    }
    
    var torre34 = new THREE.LatheGeometry(puntos24);
    var malla34 = new THREE.Mesh( torre34, new THREE.Material() );
    
    //Unión
    var torreForma14 = new THREE.Geometry();
    torreForma14.merge(malla14.geometry, malla14.matrix); //La malla calcula la matriz de la cinemática del objeto
    torreForma14.merge(malla24.geometry, malla24.matrix); //La malla calcula la matriz de la cinemática del objeto
    torreForma14.merge(malla33.geometry, malla34.matrix);//
    torreForma14.merge(malla43.geometry, malla34.matrix);
    
    //materialTorre2.opacity = 0;
    var torre4 = new THREE.Mesh(torreForma14, materialTorre4);
    torre4.scale.set(0.07,0.07,0.07);
    torre4.translateY(10);
    torre4.translateX(75);
    torre4.translateZ(75);
    torre4.castShadow = true;
    

var escena = new THREE.Scene();
escena.add(marco1);
escena.add(marco2);
escena.add(marco3);
escena.add(marco4);
escena.add(torre1);
escena.add(torre2);
escena.add(torre3);
escena.add(torre4);
escena.add(luzPuntual1, luzPuntual2, luzPuntual3);


for (i = 0; i < 64; i++) {
escena.add(cubos[i]);

}


var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth, window.innerHeight); //Renderizador en toda la pantalla
renderizador.shadowMapEnabled = true;

document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);
