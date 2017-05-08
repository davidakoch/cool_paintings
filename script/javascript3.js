$(document).ready(function() {

	//renoir brittany picture
	var row = document.getElementsByClassName("renoir")[0];
	var tiles = document.getElementsByClassName("photo-change");
	var hoverTile = document.getElementsByClassName("brittany")[0];

	$(hoverTile).mouseover(function() {
		
  
  		for (var i = 0; i < tiles.length; i++) {
    	var tile = tiles[i];
    	tile.classList.add('shiftRight');
  		}
	});

	hoverTile.addEventListener('mouseout', function() {
  
  		for (var i = 0; i < tiles.length; i++) {
    	var tile = tiles[i];
    	tile.classList.remove('shiftRight');
  		}
	});

	//renoir algiers 
	var row = document.getElementsByClassName("renoir")[0];
	var tiles = document.getElementsByClassName("photo-change");
	var hoverTile = document.getElementsByClassName("algier")[0];

	$(hoverTile).mouseover(function() {
  

    for (var i = 0; i < 1; i++) {
      var tile = tiles[i];
      tile.classList.add('shiftLeft');
      }
  
      for (var i = 2; i < tiles.length; i++) {
      var tile = tiles[i];
      tile.classList.add('shiftRight');
      }
  });


  hoverTile.addEventListener('mouseout', function() {
      for (var i = 0; i < 2; i++) {
      var tile = tiles[i];
      tile.classList.remove('shiftLeft');
      }
  
      for (var i = 2; i < tiles.length; i++) {
      var tile = tiles[i];
      tile.classList.remove('shiftRight');
      }
  });

  //renoir moulin
	var row = document.getElementsByClassName("renoir")[0];
	var tiles = document.getElementsByClassName("photo-change");
	var hoverTile = document.getElementsByClassName("moulin")[0];

 $(hoverTile).mouseover(function() {
    
    for (var i = 0; i < 2; i++) {
      var tile = tiles[i];
      tile.classList.add('shiftLeft');
      }
  
      for (var i = 3; i < tiles.length; i++) {
      var tile = tiles[i];
      tile.classList.add('shiftRight');
      }
  });

  hoverTile.addEventListener('mouseout', function() {
      for (var i = 0; i < 2; i++) {
      var tile = tiles[i];
      tile.classList.remove('shiftLeft');
      }
  
      for (var i = 3; i < tiles.length; i++) {
      var tile = tiles[i];
      tile.classList.remove('shiftRight');
      }
  });

  //renoir mousieur
	var row = document.getElementsByClassName("renoir")[0];
	var tiles = document.getElementsByClassName("photo-change");
	var hoverTile = document.getElementsByClassName("monsieur")[0];

	 $(hoverTile).mouseover(function() {
  
  
      for (var i = 0; i < tiles.length; i++) {
      var tile = tiles[i];
      tile.classList.add('shiftLeft');
      }
  });


  hoverTile.addEventListener('mouseout', function() {
  
      for (var i = 0; i < tiles.length; i++) {
      var tile = tiles[i];
      tile.classList.remove('shiftLeft');
      }
  });



});