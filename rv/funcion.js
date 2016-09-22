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

//var main = function (p){
//  p(1);
//  renderizador.render(escena, camara);
//}
//main(init);

var loop = function(){ //while
   window.requestAnimationFrame(loop);
  renderizador.render(escena, camara);
  malla.rotateY(0.01);
}

var escena, camara, renderizador, malla;
init(1)
loop();
