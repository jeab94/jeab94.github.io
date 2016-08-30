var troncoForma = new THREE.CylinderGeometry(.25, .5, 1);
var esferaForma = new THREE.SphereGeometry(.65);
esferaForma.translate(0,1,0);

var troncoMalla = new THREE.Mesh(troncoForma);
var esferaMalla = new THREE.Mesh(esferaForma); //La malla calcula la matriz de la cinemática del objeto

var arbolForma = new THREE.Geometry();
arbolForma.merge(troncoMalla.geometry, troncoMalla.matrix); //La malla calcula la matriz de la cinemática del objeto
arbolForma.merge(esferaMalla.geometry, esferaMalla.matrix); //La malla calcula la matriz de la cinemática del objeto

var material = new THREE.MeshNormalMaterial();
var arbolMalla = new THREE.Mesh(arbolForma, material);

var escena = new THREE.Scene();
escena.add(arbolMalla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara);
