$(document).ready(function() {



	/*create the jquery slideshow*/

	//hide all the images except the first one
	$(".photos img:gt(0)").hide();

	setInterval (function() {
		//get the current image - it is the visible one
		var current = $(".photos img:visible");

		//get immediate next image after the current if exist,
		//otherwise find the first one

		var next = current.next().length ? current.next() : $(".photos img:eq(0)");
		//hide the current image
		current.fadeOut (2000);
		//show the next one
		next.fadeIn(2000);


	}, 3000);

//Cezanne Paintings
//card players
	var row = document.getElementsByClassName("cezanne")[0];
	var tiles = document.getElementsByClassName("reveal-on-hover");
	var hoverTile = document.getElementsByClassName("card_players")[0];

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

//for Cezanne
//for Provenance

	var row = document.getElementsByClassName("cezanne")[0];

	var tiles = document.getElementsByClassName("reveal-on-hover");
	var hoverTile = document.getElementsByClassName("provenance")[0];

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

	



//for Cezanne
//for Painter

	var row = document.getElementsByClassName("cezanne")[0];

	var tiles = document.getElementsByClassName("reveal-on-hover");
	var hoverTile = document.getElementsByClassName("painter")[0];

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



//for Cezanne
//for apples

	var row = document.getElementsByClassName("cezanne")[0];
	var tiles = document.getElementsByClassName("reveal-on-hover");
	var hoverTile = document.getElementsByClassName("apples")[0];

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

