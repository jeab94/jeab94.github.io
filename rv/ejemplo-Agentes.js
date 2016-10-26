function Agent(x=0, y=0){ //Constructor
  THREE.Object3D.call(this);
  this.position.x = x;
  this.position.y = y;
}

Agent.prototype = new THREE.Object3D(); //Herencia

Agent.prototype.sense = function(environment) {};
Agent.prototype.plan = function(environment) {};
Agent.prototype.act = function(environment) {};

function Environment(){
  THREE.Scene.call(this); 
}

Environment.prototype = new THREE.Scene();

Environment.prototype.sense = function(){
  for (var i=0; i<this.children.length; i++){
   if (this.children[i].sense !== undefined) //Children son los objetos agregados a la escena (arreglo)
     this.children[i].sense(this);
  }
}

Environment.prototype.plan = function(){
  for (var i=0; i<this.children.length; i++){
   if (this.children[i].plan !== undefined) //Si puede planificar
     this.children[i].plan(this);           //Que planifique sobre el entorno
  }
}

Environment.prototype.act = function(){
  for (var i=0; i<this.children.length; i++){
   if (this.children[i].act !== undefined) //Si puede actuar
     this.children[i].act(this);          //Que actue sobre el entorno
  }
}

function Pelota (r, x, y){
  Agent.call(this,x,y); //Hereda de clase agente
  this.add(new THREE.Mesh(new THREE.SphereGeometry(r), new THREE.MeshNormalMaterial()));
  
  this.step = 0.1;
  this.colision = 0;
  this.radius = r;
  this.sensor = new THREE.Raycaster(this.position, new THREE.Vector3(1, 0, 0));
}

Pelota.prototype = new Agent();

Pelota.prototype.sense = function(environment){
  this.sensor.set(this.position, new THREE.Vector3(1, 0, 0));
  var obstaculo1 = this.sensor.intersectObjects (environment.children, true);
  
  this.sensor.set(this.position, new THREE.Vector3(-1, 0, 0));
  var obstaculo2 = this.sensor.intersectObjects (environment.children, true);

    if ((obstaculo1.length > 0 && //Determina si la distancia al primer objeto es <= al radio
       (obstaculo1[0].distance <= this.radius)) ||
       (obstaculo2.length > 0 && //Obstáculo 1 es en un sentido, Obstáculo 2 es en el otro sentido
       (obstaculo2[0].distance <= this.radius) ))
        this.colision = 1; //Marca colisión si hay obstáculo en un sentido o el otro
    else
        this.colision = 0;
}

Pelota.prototype.act = function(environment){
  if (this.colision === 1)
      this.step = -this.step;
  this.position.x += this.step;
}
      
function Pared(size, x=0, y=0){
  THREE.Object3D.call(this, x, y);
    
    this.add(new THREE.Mesh(new THREE.BoxGeometry(size, size, size), new THREE.MeshNormalMaterial()));
    
    this.size = size;
    this.position.x = x;
    this.position.y = y;
}
  
Pared.prototype = new THREE.Object3D();
  
function setup() {
  entorno = new Environment();
  camara = new THREE.PerspectiveCamera();
  camara.position.z = 15;
  camara.position.y = 2;
  camara.lookAt(0,0,0);
  
  entorno.add(new Pared(1, 7, 0));
  entorno.add(new Pared(1, -7, 0));
  entorno.add(new Pared(1, 7, 1));
  entorno.add(new Pared(1, -7, 1));
  entorno.add(new Pared(1, 7, -1));
  entorno.add(new Pared(1, -7, -1));
  entorno.add(new Pelota(0.5, 0, 0));
  entorno.add(new Pelota(0.5, 3.5, 0));
  
  entorno.add(camara);
  
   var lienzo = document.getElementById("ejemplo-Agentes");
  
  renderer = new THREE.WebGLRenderer({canvas: lienzo, antialias: true});
  renderer.setSize(window.innerHeight*.95, window.innerHeight*.95);
  document.body.appendChild(renderer.domElement);
}

function loop(){
  requestAnimationFrame(loop);
  
  entorno.sense();
  entorno.plan();
  entorno.act();
  renderer.render(entorno, camara);
}

setup();
loop();
