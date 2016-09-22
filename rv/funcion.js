var escena, camara, renderizador;

function init(p){
  var malla = new THREE.Mesh(new THREE.BoxGeometry(p,p,p), new THREE.MeshNormalMaterial());
  escena = new THREE.Scene(); //Sin var son variables globales
  escena.add(malla);
  
  camara = new THREE.PerspectiveCamera();
  camara.position.z = 5*p;
  
  renderizador = new THREE.WebGLRenderer(); //Sin var son variables globales
  renderizador.setSize(100, 700);
  document.body.appendChild(renderizador.domElement);
}

var main = function (p){
  renderizador.render(escena, camara);
}



init(1);
main(2);
