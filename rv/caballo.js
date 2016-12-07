   //CABALLO
     // Object
    var caballo;
    var loader=new THREE.STLLoader();
    loader.load( './Chess-Pieces/Horse.STL', function ( geometry ) {
    	caballo = geometry;
    } );
