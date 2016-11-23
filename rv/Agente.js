function Agent(x=0, y=0, z=0){ //Constructor
  THREE.Object3D.call(this);
  this.position.x = x;
  this.position.y = y;
  this.position.z = z;
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
