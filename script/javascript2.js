$(document).ready(function() {

  //for Matisse Madras
	var row = document.getElementsByClassName("matisse")[0];
	var tiles = document.getElementsByClassName("photo-change");
	var hoverTile = document.getElementsByClassName("madras")[0];

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

//for Matisse troits
  var row = document.getElementsByClassName("matisse")[0];
  var tiles = document.getElementsByClassName("photo-change");
  var hoverTile = document.getElementsByClassName("troits")[0];

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

//for Matisse Lux

  var row = document.getElementsByClassName("matisse")[0];

  var tiles = document.getElementsByClassName("photo-change");
  var hoverTile = document.getElementsByClassName("lux")[0];

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

//for Matisse stripe
  var row = document.getElementsByClassName("matisse")[0];
  var tiles = document.getElementsByClassName("photo-change");
  var hoverTile = document.getElementsByClassName("stripe")[0];

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