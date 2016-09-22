var escena, camara, renderizador, malla, step;

function init(p){
  malla = new THREE.Mesh(new THREE.BoxGeometry(p,p,p), new THREE.MeshNormalMaterial()); //malla es variable global
  escena = new THREE.Scene(); //Sin var son variables globales
  escena.add(malla);
  
  camara = new THREE.PerspectiveCamera();
  camara.position.z = 5*p;
  step = 1;
  
  renderizador = new THREE.WebGLRenderer(); //Sin var son variables globales
  renderizador.setSize(700, 700);
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
  if(Math.abs(malla.position.x) >= 3000){
    step = -step;
    malla.position.x = malla.position.x+step;
  }
  
}


init(1)
loop();
