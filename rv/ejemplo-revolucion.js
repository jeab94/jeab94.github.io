var puntos = [];

for( var i = 0; i < 50; i++ ){ //Son 50 puntos
  puntos.push( new THREE.Vector2( Math.sin(i*0.2)*15+50, (i-5)*2) );
}

var forma = new THREE.LatheGeometry(puntos); //Torno

var material = new THREE.MeshNormalMaterial();

var malla = new THREE.Mesh( forma, material );
malla.rotateX( Math.PI/6 );
