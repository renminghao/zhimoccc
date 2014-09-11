/*
 *
 *By Crow
 *
 *The latest 2014.11.15
 *
 */
var TD = TD ||{};
TD.varietyArray = {
	"cuboid" : 		[140,	200,	140, 	0,		0,		0,		0,		0,	0],
	"cube" : 		[160,	160,	160,	0,		0,		0,		0,		0,	0],
	"people" : [
					[160,	110,	160,	0,		110,	0,		0,		0,	0],
					[110,	110,	110,	0,		0,		0,		0,		0,	0],
					[80,	50,		80,		0,		-70,	0, 		0,    	0,	0],
					[40,	80,		40,		-75,	0,		0,		-0.6,	0,	0],
					[40,	80,		40,		75,		0,		0,		-0.6,	0,	0]
		],
	"car" : [
					[240,	80,		100,	0,		0,		0,		0,		0,	0],
					[100,	60,		100,	0,		70,		0,		0,		0,	0]
	]
};


TD.Model = function(){

	this.loadTexture = function(path){
		var __D_texture = new THREE.Texture();
		var __D_material = new THREE.MeshBasicMaterial({
			morphTarget: true,
			map : __D_texture,
			overdraw : true
		});
		var image = new Image();
		image.onload = function() {
			__D_material.map.image = this;
			__D_texture.needsUpdate = true;
		};
		image.src = path;
		return __D_material;
	};

	this.eachRectangle = function(__D_mesh, arr){
		var __D_cube = null;
		var materials = [];
		var imgBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAABHUlEQVR4Xu3SsRGDQBAEQT4awhShkQafzEuEQI08+vw5o2vHnPNca52beywwxviM67qOfd+Px7Vg+41vAQxDABjw7hQgwCgQcwsEGAViboEAo0DMLRBgFIi5BQKMAjG3QIBRIOYWCDAKxNwCAUaBmFsgwCgQcwsEGAViboEAo0DMLRBgFIi5BQKMAjG3QIBRIOYWCDAKxNwCAUaBmFsgwCgQcwsEGAViboEAo0DMLRBgFIi5BQKMAjG3QIBRIOYWCDAKxNwCAUaBmFsgwCgQcwsEGAViboEAo0DMLRBgFIi5BQKMAjG3QIBRIOYWCDAKxNwCAUaBmFsgwCgQcwsEGAViboEAo0DMLRBgFIi5BQKMAjG3wH8A3orxz6vzL8RMWH/JOz5MAAAAAElFTkSuQmCC";
		// var imgBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAGLUlEQVR4Xu3bQY5TWRAF0WJn7AyzM3pl3d8DPDLqz8AvI6WDxKzkvBVBjPD79vX19e/1986fb3d+yOf9kRJ+79Gk//09pT0H/nP9/fU/ATxuBuLn3oPCZSGX34H8vLbfFXizEz+GwH4CAtnv0G/wQQIC+SBcH72fgED2O/QbfJCAQD4I10fvJyCQ/Q79Bh8kIJAPwvXR+wkIZL9Dv8EHCdz9390PTvDRCCQJPP9f8IdAkm6MChAQSECCCV0CAum6sSxAQCABCSZ0CQik68ayAAGBBCSY0CUgkK4bywIEBBKQYEKXgEC6biwLEHgF8nxy60VhwIgJPQK+i9VzYlGIgEBCMkzpERBIz4lFIQICCckwpUdAID0nFoUICCQkw5QeAYH0nFgUIiCQkAxTegQE0nNiUYiAJ7chGaakCDyuNd6kp5QYUyIgkJINW3IEBJJTYlCJgEBKNmzJERBITolBJQICKdmwJUdAIDklBpUICKRkw5YcAYHklBhUIvAKxJv0khZbUgR8Fyulw5gaAYHUjNiTIiCQlA5jagQEUjNiT4qAQFI6jKkREEjNiD0pAgJJ6TCmRkAgNSP2pAgIJKXDmBoBb9JrRuypEHhcQ7xJr9iwI0dAIDklBpUICKRkw5YcAYHklBhUIiCQkg1bcgQEklNiUImAQEo2bMkREEhOiUElAgIp2bAlR+AViDfpOTcGVQj4LlbFhB1JAgJJajGqQkAgFRN2JAkIJKnFqAoBgVRM2JEkIJCkFqMqBARSMWFHkoBAklqMqhAQSMWEHUkC3qQntRgVIPC4NniTHhBhQpOAQJperIoQEEhEhBlNAgJperEqQkAgERFmNAkIpOnFqggBgUREmNEkIJCmF6siBAQSEWFGk8ArEG/Sm4KsChDwXayABBO6BATSdWNZgIBAAhJM6BIQSNeNZQECAglIMKFLQCBdN5YFCAgkIMGELgGBdN1YFiAgkIAEE7oEvEnvurFslsDjOu9N+qwD18MEBBKWY9o8AYHMO7AgTEAgYTmmzRMQyLwDC8IEBBKWY9o8AYHMO7AgTEAgYTmmzRMQyLwDC8IEXoF4kx62ZNosAd/FmuXvepyAQOKCzJslIJBZ/q7HCQgkLsi8WQICmeXvepyAQOKCzJslIJBZ/q7HCQgkLsi8WQICmeXvepyAN+lxQeaNEXhcl71JH8PvcJ2AQOqG7BslIJBR/I7XCQikbsi+UQICGcXveJ2AQOqG7BslIJBR/I7XCQikbsi+UQICGcXveJ3AKxBv0uuq7Bsj4LtYY+gd3kBAIBss2ThGQCBj6B3eQEAgGyzZOEZAIGPoHd5AQCAbLNk4RkAgY+gd3kBAIBss2ThGQCBj6B3eQMCb9A2WbJwg8LiOepM+Qd7NFQQEskKTkVMEBDJF3t0VBASyQpORUwQEMkXe3RUEBLJCk5FTBAQyRd7dFQQEskKTkVMEBDJF3t0VBF6BeJO+wpeREwR8F2uCuptrCAhkjSpDJwgIZIK6m2sICGSNKkMnCAhkgrqbawgIZI0qQycICGSCuptrCAhkjSpDJwgIZIK6m2sIeJO+RpWhhwk8rnvepB+G7tweAgLZ48rSAQICGYDu5B4CAtnjytIBAgIZgO7kHgIC2ePK0gECAhmA7uQeAgLZ48rSAQICGYDu5B4Cr0C8Sd8jzdLDBHwX6zBw53YREMguX9YeJiCQw8Cd20VAILt8WXuYgEAOA3duFwGB7PJl7WECAjkM3LldBASyy5e1hwkI5DBw53YR8CZ9ly9rzxF4XKe8ST/H26VlBASyTJi5ZwkI5Cxv15YREMgyYeaeJSCQs7xdW0ZAIMuEmXuWgEDO8nZtGQGBLBNm7lkCAjnL27VlBF6BeJO+zJy55wj4LtY51i4tJCCQhdJMPkdAIOdYu7SQgEAWSjP5HAGBnGPt0kICAlkozeRzBARyjrVLCwkIZKE0k88REMg51i4tJOBN+kJpJh8h8LiueJN+BLUjGwkIZKM1m48REMgx1A5tJCCQjdZsPkZAIMdQO7SRgEA2WrP5GAGBHEPt0EYCfx3Ij5u/5c+bP+fz3oPC7z2X0/9evl8zvv/NfxQ+n+be+XP3M33ee5r4vecy8u/lP9iwUHRUqj/gAAAAAElFTkSuQmCC";
		for(var n = 0; n<6; n++)
			materials.push(this.loadTexture(imgBase64));
		
		__D_cube = new THREE.Mesh(new THREE.CubeGeometry(arr[0],arr[1],arr[2]), new THREE.MeshFaceMaterial(materials));
		__D_cube.position.set(arr[3], arr[4], arr[5]);
		__D_cube.rotation.set(arr[6], arr[7], arr[8]);
		__D_mesh.add(__D_cube);
		return __D_mesh;
	};
};


TD.Model.prototype = {

	cubeEve : function(variety){

		var __D_mesh = new THREE.Object3D();
		
		var arr = TD.varietyArray[variety];
		// __D_mesh.rotation.x = 0.5;

		if(arr[0][0]){
			for(i in arr){
				var tempArray = arr[i];
				__D_mesh = this.eachRectangle(__D_mesh, tempArray);
			};
		}else{
			__D_mesh = this.eachRectangle(__D_mesh, arr);
		}
		return __D_mesh;
	}
};


TD.Environment = function(){

	this.getScene = function(){
		return new THREE.Scene();
	};

	this.getCamera = function(){
		var __D_camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
		__D_camera.position.z = 360;
		__D_camera.position.y = 50;
		return __D_camera;
	};

	this.getMesh = function(){
		return new THREE.Object3D();
	};

	this.getRenderer = function(){
		var __D_renderer = new THREE.WebGLRenderer({
			antialias:true,//antialias:true/false是否开启反锯齿
			precision:"highp",//precision:highp/mediump/lowp着色精度选择
			alpha:true,//alpha:true/false是否可以设置背景色透明
			premultipliedAlpha:false,
			stencil:false,
			preserveDrawingBuffer:false,//preserveDrawingBuffer:true/false是否保存绘图缓冲
			maxLights:1//maxLights:最大灯光数
		});	//

		__D_renderer.setSize(window.innerWidth, window.innerHeight);
		return __D_renderer;
	};
};



