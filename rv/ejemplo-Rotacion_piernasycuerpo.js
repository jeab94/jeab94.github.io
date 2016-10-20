function Pieza(){
  
  THREE.Object3D.call(this);
  this.piernaIzq = new THREE.Mesh(new THREE.BoxGeometry(1,5,1));
  this.piernaDer = new THREE.Mesh(new THREE.BoxGeometry(1,5,1));
  var cuerpo = new THREE.Mesh(new THREE.BoxGeometry(5,10,5));
  this.add(this.piernaIzq,this.piernaDer,cuerpo);
  this.piernaIzq.position.set(0, -2.5,-2)
  this.piernaDer.position.set(0, -2.5, 2)
  cuerpo.position.set(0, 2.5, 0)
  
}
var pieza;

Pieza.prototype = new THREE.Object3D;

function setup(){
  pieza = new Pieza();
  
  camara = new THREE.PerspectiveCamera();
  camara.position.z = 20;
  
  var lienzo = document.getElementById("ejemplo-Rotacion_piernasycuerpo");
  renderizador = new THREE.WebGLRenderer({canvas: lienzo, antialias: true});
  renderizador.setSize(600,600);
  
  escena = new THREE.Scene();
  escena.add(pieza);
  
}

loop = function(){
  requestAnimationFrame(loop);
  renderizador.render(escena, camara);
  pieza.rotateY(0.01);
  for (int i=1;i<=30;i++){
  if (i>15){
  pieza.piernaIzq.rotateZ(0.01);
  pieza.piernaDer.rotateZ(0.01);
    }
  else {
  pieza.piernaIzq.rotateZ(-0.01);
  pieza.piernaDer.rotateZ(-0.01);
  
    }
  }
  
}

setup();
loop();
