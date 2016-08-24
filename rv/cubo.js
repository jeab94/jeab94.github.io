var forma = new THREE.Geometry(); //Nueva variable tipo Geometría

forma.vertices.push( new THREE.Vector3( 1, 0, 1 ) ); //Enfocamos un valor de  un vector de 3 Vector3(x0,y0,z0) Vertice no.0 
forma.vertices.push( new THREE.Vector3( 1, 0,-1 ) ); //Vertice no.1
forma.vertices.push( new THREE.Vector3(-1, 0,-1 ) ); //Vertice no.2
forma.vertices.push( new THREE.Vector3(-1, 0,1 ) ); //Vertice no.3
forma.vertices.push( new THREE.Vector3( 0, 1, 0 ) ); //Vertice no.4

forma.faces.push( new THREE.Face3( 3, 1, 2 ) ); //Cara formada por tres vertices
forma.faces.push( new THREE.Face3( 3, 0, 1 ) );
//forma.faces.push( new THREE.Face3( 0, 1, 4 ) );
//forma.faces.push( new THREE.Face3( 1, 5, 4 ) );

////forma.vertices=[]
//forma.vertices.push( new THREE.Vector3( 1, 0, 1 ) ); //Enfocamos un valor de  un vector de 3 Vector3(x0,y0,z0) Vertice no.0 
//forma.vertices.push( new THREE.Vector3( 1, 0,-1 ) ); //Vertice no.1
//forma.vertices.push( new THREE.Vector3(-1, 0,-1 ) ); //Vertice no.2
//forma.vertices.push( new THREE.Vector3(-1, 0, 1 ) ); //Vertice no.3
//forma.vertices.push( new THREE.Vector3( 1, 2, 1 ) ); //Vertice no.4 
//forma.vertices.push( new THREE.Vector3( 1, 2,-1 ) ); //Vertice no.5
//forma.vertices.push( new THREE.Vector3(-1, 2,-1 ) ); //Vertice no.6
//forma.vertices.push( new THREE.Vector3(-1, 2, 1 ) ); //Vertice no.7


//forma.faces.push( new THREE.Face3( 3, 2, 1 ) ); //Cara formada por tres vertices
//forma.faces.push( new THREE.Face3( 3, 1, 0 ) );
//forma.faces.push( new THREE.Face3( 7, 6, 5 ) );
//forma.faces.push( new THREE.Face3( 7, 5, 4 ) );
//forma.faces.push( new THREE.Face3( 5, 4, 1 ) );
//forma.faces.push( new THREE.Face3( 6, 5, 2 ) );


forma.computeBoundingSphere(); //Esfera de menor tamaño que acota al objeto
forma.computeFaceNormals(); //Se computan las normales de las caras

var material = new THREE.MeshNormalMaterial();

var malla = new THREE.Mesh( forma, material );
malla.rotateX(Math.PI/4);

var escena = new THREE.Scene();
escena.add( malla );

var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara);
