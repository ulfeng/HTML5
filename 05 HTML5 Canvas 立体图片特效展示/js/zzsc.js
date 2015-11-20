	
	function DemoApp() {
		
		var stage = new Clay.Stage(640, 480, document.getElementById("canvas"));
		var world = stage.getWorld();
		var camera = stage.getCamera();
		
		camera.set(0, 0, 800);
		camera.setTarget(Clay.Vector.ZERO);
		
		var light = new Clay.Light(-2,-2, 1, 3, .5);
		light.setColor(255, 255, 255)
		world.addLight(light);

		stage.resizeTo(640, 480);
		
		var palet = [
			new Clay.Material(37,47,51, 1, stage),
			new Clay.Material(65,92,79, 1, stage),
			new Clay.Material(134,156,128, 1, stage),
			new Clay.Material(147,194,204, 1, stage),
			new Clay.Material(206,234,238, 1, stage)
		];

		var rib = 256;
		var amount = 3;
		var offset = 266;
		function rand(range) { return Math.floor(Math.random() * range); };
		
		for (var i=0; i<amount; i++) {
			for (var j=0; j<amount; j++) {
				for (var k=0; k<amount; k++) {
				
					var x = ((offset * i) - (offset * (amount-1))/2)*1.5,
						y = (offset * j) - (offset * (amount-1))/2,
						z = (offset * k) - (offset * (amount-1))/2;

					var m = palet[rand(palet.length)];
					
					var cube = new Clay.Cube(x, y, z, 4, rib, rib, m);
					world.addShape(cube);
				}
			}
		}

		var flickr = [];
		var photos = document.getElementById("photos").getElementsByTagName("img");
		
		for(var i=0; i<photos.length; i++) {
			var photo = photos[i];
			var parent = photo.parentNode;
			if(/^a$/i.test(parent.nodeName)) {
				flickr.push(
					new Clay.Texture(photos[i].src, stage)
				);
			}
		}

		var cameraTarget = Clay.Vector.ZERO;
		var t = 0, radius = 1200, 
			slowMo = new Clay.Vector(20,20,20);
		
		stage.addEvent('click', function(e) {
			var poly = e.targetPolygon;
			var shape = e.targetShape;
			var rand = Math.floor(Math.random()*flickr.length);
			
			if(poly && shape) {
				poly.setMaterial(flickr[rand]);
				cameraTarget = shape;
			}
		});

		stage.addEvent('enterframe', function(){
			t += 0.01;

			var dif = cameraTarget.subtract(camera.target).divide(slowMo);
			camera.setTarget(camera.target.add(dif))
			
			var position = new Clay.Vector(
				cameraTarget.x + (Math.sin(t) * radius),
				cameraTarget.y + (Math.cos(t) * radius/2),
				cameraTarget.z + (Math.cos(t) * radius)
			);

			var move = position.subtract(camera).divide(slowMo);
			camera.moveBy(move);
		});

		var lbi = new Image();
			lbi.src = 'static/images/lostboys.png';

		stage.addEvent('postrender', function(renderer){
			try {
				renderer.context.drawImage(lbi,10,430);	
			} catch (e) {}
		});
		
		// run forest run!
		stage.run()
	}


	// init 

	window.addEventListener('load', function(){
		new DemoApp();
	}, false);