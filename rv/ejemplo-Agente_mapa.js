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

function Wall(size, x, y){
  THREE.Mesh.call(this, new THREE.BoxGeometry(size, size, size), new THREE.MeshNormalMaterial());
  this.size = size;
  this.position.x = x;
  this.position.y = y;
}

Wall.prototype = new THREE. Mesh();

Environment.prototype.setMap = function(map){
  var _offset = Math.floor(map.length/2);
  
  for (var i=0; i<map.length; i++){
  for (var j=0; j<map.length; j++){
      if(map[i][j]==="x")
      this.add(new Wall(1, j-_offset, -(i-_offset)));
      else if(map[i][j]==="r")
      this.add(new Robot(0.5, j-_offset, -(i-_offset)));
      }
  }
}

function setup(){
  var mapa = new Array();
  mapa[0]  = "xxxxxxxxxxxxxxxxxxxxxxxxx";
  mapa[1]  = "xr               r      x";
  mapa[2]  = "x                       x";
  mapa[3]  = "xxxxxxxxxx xxxxxxxxxxxxxx";
  mapa[4]  = "x            r          x";
  mapa[5]  = "x                       x";
  mapa[6]  = "x             r         x";
  mapa[7]  = "x  r                    x";
  mapa[8]  = "xxxx xxxxxxxxxxxxxxxxxxxx";
  mapa[9]  = "x                       x";
  mapa[10] = "x     r                 x";
  mapa[11] = "x                       x";
  mapa[12] = "x   r                   x";
  mapa[13] = "xxxxxxxxxxxxxx  xxxxxxxxx";
  mapa[14] = "x                       x";
  mapa[15] = "x       r           r   x";
  mapa[16] = "x                       x";
  mapa[17] = "xxxxxxxxxxxxxxxxxxxxx   x";
  mapa[18] = "x                       x";
  mapa[19] = "x        r              x";
  mapa[20] = "xxxxx        xxxxxx   xxx";
  mapa[21] = "x                     r x";
  mapa[22] = "x                       x";
  mapa[23] = "x         r             x";
  mapa[24] = "xxxxxxxxxxxxxxxxxxxxxxxxx";
  
  environment = new Environment();
  
  environment.setMap(mapa);
  
  camera = new THREE.PerspectiveCamera();
  camera.position.z = 30;
  
  var lienzo = document.getElementById("ejemplo-Agente_mapa");
  
  renderer = new THREE.WebGLRenderer({canvas: lienzo, antialias: true});
  renderer.setSize(window.innerHeight*.95, window.innerHeight*.95);
  document.body.appendChild(renderer.domElement);
  
  environment.add(camera);

}

function loop(){
  requestAnimationFrame(loop);
  
  environment.sense();
  environment.plan();
  environment.act();
  
  renderer.render(environment, camera);
}

var environment, camera, renderer;

function Sensor(position, direction){
  THREE.Raycaster.call(this, position, direction);
  this. colision = false;
}

Sensor.prototype = new THREE.Raycaster();

function Robot(size, x, y){
 Agent.call(this, x, y);
  
 this.sensor = new Sensor();
 this.actuator = new THREE.Mesh(new THREE.BoxGeometry(size, size, size), new THREE.MeshBasicMaterial({color: '#aa0000'}));
 this.actuator.commands = [];
 this.add(this.actuator);
}

Robot.prototype = new Agent();

Robot.prototype.sense = function(environment){
  this.sensor.set(this.position, new THREE.Vector3(Math.cos(this.rotation.z), Math.sin(this.rotation.z), 0));
  var obstaculo = this.sensor.intersectObjects(environment.children, true);
  
  if((obstaculo.length>0 && (obstaculo[0].distance<=0.5)))
    this.sensor.colision=true;
  else
    this.sensor.colision=false;
}

Robot.prototype.plan = function(environment){
 this.actuator.commands = [];
 
 if (this.sensor.colision == true)
   this.actuator.commands.push('rotateCCW');
 else
   this.actuator.commands.push('goStraight');
}

Robot.prototype.act = function(environment){
  var command = this.actuator.commands.pop();
  
  if(command === undefined)
    console.log('Undefined command')
  else if(command in this.operations)
    this.operations[command](this);
  else
    console.log('Unknown command');
}

Robot.prototype.operations = {};

Robot.prototype.operations.goStraight = function(robot, distance){
  if (distance=== undefined)
    distance = 0.05;
  robot.position.x += distance*Math.cos(robot.rotation.z);
  robot.position.y += distance*Math.sin(robot.rotation.z);
}

Robot.prototype.operations.rotateCW = function(robot, angle){
 if (angle===undefined)
   angle = -Math.PI/2;
  robot.rotation.z += angle;
}

Robot.prototype.operations.rotateCCW = function(robot, angle){
 if (angle===undefined)
   angle = Math.PI/2;
  robot.rotation.z += angle;
}


setup();
loop();