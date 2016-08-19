var escena = new THREE.Scene(); //Escena
var camara = new THREE.PerspectiveCamera(); //Cámara 
camara.position.z = 5;  //Las cámaras heredan de un objeto tipo Object3D() con posición 0,0,0 como default
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95, window.innerHeight*.95); //window da las dimensiones internas de la ventana del navegador (autoescalado al 95%)
document.body.appendChild(renderizador.domElement); //Inserta un nodo al Body 

var forma1 = new THREE.TetrahedronGeometry(1,0);
var material1 = new THREE.MeshNormalMaterial(); //el de default sería MeshBasicMaterial
var tetraedro = new THREE.Mesh(forma1,material1); //Cosntructor Mesh()
tetraedro.rotateX(-Math.PI/4); //Rota 45° en X
tetraedro.rotateY(-Math.PI/4); //Rota 45° en Y
escena.add(tetraedro);

//var CustomSinCurve = THREE.Curve.create(
  //  function ( scale ) { //custom curve constructor
    //    this.scale = (scale === undefined) ? 1 : scale;
    //},

    //function ( t ) { //getPoint: t is between 0-1
      //  var tx = t * 3 - 1.5,
        //    ty = Math.sin( 2 * Math.PI * t ),
          //  tz = 0;

        //return new THREE.Vector3(tx, ty, tz).multiplyScalar(this.scale);
   // }
//);

//var path = new CustomSinCurve( 10 );

//var geometry = new THREE.TubeGeometry(
  //  path,  //path
    //20,    //segments
    //2,     //radius
    //8,     //radiusSegments
    //false  //closed
//);
//escena.add(geometry);

renderizador.render(escena,camara);
