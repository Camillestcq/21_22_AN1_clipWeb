let audioPath = "./assets/audio/GoWithYou.mp4";
let sequencer;

let drawFlowerFlag = false;
let drawFlowerFlagOld = false;

let mainCamera;
let particules = [];
let isCameraTurnAround = false;

let isCameraStraight = false; 
let isCameraTurnLeft = false;
let isCameraRight = false;
let isCameraSpinAround = false;
let isCameraBounceUpAndDown = false;
let isCameraforward = false

function setup() {	
	colorMode(RGB);
	
	frameRate(60);
	createCanvas(window.innerWidth, window.innerHeight, WEBGL);
	mainCamera = createCamera();
	mainCamera.setPosition(0,0,800);
	mainCamera.lookAt(0,0,0);
	

	sequencer = new Sequencer(audioPath, 132);
	
	sequencer.registerSequence({
		name : "all",
		onStart : (event) => {
			console.log(event)
		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
		},
		
	});


	sequencer.registerSequence({
		name : "first",
		start:21, 
		stop:78,
		onStart : (event) => {
			console.log(event)
			isCameraTurnAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnAround = false;
		},
		
	});

		sequencer.registerSequence({
		name : "deux",
		start:79, 
		stop:94,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
		
	});

			sequencer.registerSequence({
		name : "trois",
		start:95, 
		stop:97,
		onStart : (event) => {
			console.log(event)
			isCameraSpinAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraSpinAround = false;
		},
		
	});

			sequencer.registerSequence({
		name : "quatre",
		start: 98, 
		stop:113,
		onStart : (event) => {
			console.log(event)
			isCameraTurnAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnAround = false;
		},
		
	});

			sequencer.registerSequence({
		name : "cinq",
		start:114, 
		stop:115,
		onStart : (event) => {
			console.log(event)
			isCameraSpinAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraSpinAround = false;
		},
		
	});

			sequencer.registerSequence({
		name : "21",
		start:100, 
		stop:113,
		onStart : (event) => {
			console.log(event)
			isCameraTurnAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnAround = false;
		},
		
	});

sequencer.registerSequence({
		name : "27",
		start:116, 
		stop:132,
		onStart : (event) => {
			console.log(event)
			isCameraTurnAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnAround = false;
		},
		
	});


			sequencer.registerSequence({
		name : "six",
		start:133, 
		stop:135,
		onStart : (event) => {
			console.log(event)
			isCameraSpinAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraSpinAround = false;
		},
		
	});

			sequencer.registerSequence({
		name : "28",
		start:136, 
		stop:143,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
		
	});

			sequencer.registerSequence({
		name : "sept",
		start:144, 
		stop:146,
		onStart : (event) => {
			console.log(event)
			isCameraSpinAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraSpinAround = false;
		},
		
	});

			sequencer.registerSequence({
		name : "29",
		start:147, 
		stop:156,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
		
	});

			sequencer.registerSequence({
		name : "huit",
		start:154, 
		stop:158,
		onStart : (event) => {
			console.log(event)
			isCameraSpinAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraSpinAround = false;
		},
		
	});

			sequencer.registerSequence({
		name : "22",
		start:159, 
		stop:212,
		onStart : (event) => {
			console.log(event)
			isCameraTurnAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnAround = false;
		},
		
	});


sequencer.registerSequence({
		name : "neuf",
		start:230, 
		stop:232,
		onStart : (event) => {
			console.log(event)
			isCameraSpinAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraSpinAround = false;
		},
		
	});

sequencer.registerSequence({
		name : "23",
		start:233, 
		stop:235,
		onStart : (event) => {
			console.log(event)
			isCameraTurnAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnAround = false;
		},
		
	});

		sequencer.registerSequence({
	name : "dix",
	start:235, 
	stop:237,
	onStart : (event) => {
		console.log(event)
		isCameraSpinAround = true ;

	},
	onStep : (event) => {
		console.log(event)
		particules.push( new Particule (0,0,0) ) ;
	},
	onStop : (event) => {
		console.log(event)
		isCameraSpinAround = false;
	},
	
});

sequencer.registerSequence({
		name : "onze",
		start:249, 
		stop:251,
		onStart : (event) => {
			console.log(event)
			isCameraSpinAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraSpinAround = false;
		},
		
	});

sequencer.registerSequence({
		name : "24",
		start:252, 
		stop:278,
		onStart : (event) => {
			console.log(event)
			isCameraTurnAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnAround = false;
		},
		
	});


sequencer.registerSequence({
		name : "douze",
		start:279, 
		stop: 281,
		onStart : (event) => {
			console.log(event)
			isCameraSpinAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraSpinAround = false;
		},
		
	});

sequencer.registerSequence({
		name : "30",
		start:282, 
		stop:287,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
		
	});

sequencer.registerSequence({
		name : "treize",
		start:288, 
		stop:290,
		onStart : (event) => {
			console.log(event)
			isCameraSpinAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraSpinAround = false;
		},
		
	});

sequencer.registerSequence({
		name : "quatorze",
		start:308, 
		stop:310,
		onStart : (event) => {
			console.log(event)
			isCameraSpinAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraSpinAround = false;
		},
		
	});

sequencer.registerSequence({
		name : "25",
		start:311, 
		stop:324,
		onStart : (event) => {
			console.log(event)
			isCameraTurnAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnAround = false;
		},
		
	});

sequencer.registerSequence({
		name : "quinze",
		start:325, 
		stop:327,
		onStart : (event) => {
			console.log(event)
			isCameraSpinAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraSpinAround = false;
		},
		
	});

sequencer.registerSequence({
		name : "31",
		start:328, 
		stop:335,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
		
	});

sequencer.registerSequence({
		name : "seize",
		start:336, 
		stop:338,
		onStart : (event) => {
			console.log(event)
			isCameraSpinAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraSpinAround = false;
		},
		
	});

sequencer.registerSequence({
		name : "32",
		start:339, 
		stop:344,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
		
	});

sequencer.registerSequence({
		name : "dixsept",
		start:345, 
		stop:347,
		onStart : (event) => {
			console.log(event)
			isCameraSpinAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraSpinAround = false;
		},
		
	});

sequencer.registerSequence({
		name : "33",
		start:348, 
		stop:353,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
		
	});

sequencer.registerSequence({
		name : "dixhuit",
		start:354, 
		stop:356,
		onStart : (event) => {
			console.log(event)
			isCameraSpinAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraSpinAround = false;
		},
		
	});

sequencer.registerSequence({
		name : "34",
		start:357, 
		stop:365,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
		
	});

sequencer.registerSequence({
		name : "dixneuf",
		start:366, 
		stop:368,
		onStart : (event) => {
			console.log(event)
			isCameraSpinAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraSpinAround = false;
		},
		
	});

sequencer.registerSequence({
		name : "vingt",
		start:159, 
		stop:212,
		onStart : (event) => {
			console.log(event)
			isCameraSpinAround = true ;
			},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraSpinAround = false;
		},
		
	});

	}
sequencer.registerSequence({
		name : "26",
		start:36, 
		stop:400,
		onStart : (event) => {
			console.log(event)
			isCameraTurnAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnAround = false;
		},
		
	});



function draw(){

 background(random(225), 225, random(225));
 if(isCameraTurnAround){
	let R = 800;
	let x = R * cos(millis()/1000);
	let z = R * sin(millis()/1000);
	mainCamera.setPosition(x,0,z)
	mainCamera.lookAt(0, 0, 0);
	}

		sequencer.update();
 if(isCameraStraight){
	let R = 800;
	let x = R/4 * cos(millis()/100);
	let z = R/4 * sin(millis()/100);
	mainCamera.setPosition(x,0,z)
	mainCamera.lookAt(0, 0, 0);
	}
		
			sequencer.update();
 if(isCameraTurnLeft){
	let R = 800;
	let x = R * cos(millis()/100);
	let z = R * sin(millis()/100);
	mainCamera.setPosition(x,0,z)
	mainCamera.lookAt(5, 0, 5);
	}
	
			sequencer.update();
 if(isCameraRight){
	let R = 800;
	let x = R/4 * cos(millis()/100);
	let z = R/4 * sin(millis()/100);
	mainCamera.setPosition(x,0,z)
	mainCamera.lookAt(0, 0, 0);
	}
		
			sequencer.update();
 if(isCameraSpinAround){
	let R = 800;
	let x = tan(millis()/100);
	let z = tan(millis()/100);
	mainCamera.setPosition(x,0,z)
	mainCamera.lookAt(0, 0, 0);
	}

	 if(isCameraBounceUpAndDown){
	let R = 800;
	let x = R/4 * cos(millis()/100);
	let z = R/4 * sin(millis()/100);
	mainCamera.setPosition(x,0,z)
	mainCamera.lookAt(0, 0, 0);
	}
		

	particules.forEach( (Particule)=> {
		Particule.draw();
	} );
  	
}

function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);
}

