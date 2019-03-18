let capture;
let capturething = [];

function setup() {
  createCanvas(800, 800);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  capture.hide();
    for (let i = 0; i <200; i++) {
    capturething[i] = new Capturething();
  }
  noCursor();
  background(127);

}

function draw() {
  background(255);
  
   for (let i = 0; i <200; i++) {
	capturething[i].move();  
  capturething[i].show();
  }
  filter('INVERT');
}


class Capturething {


	constructor() {

	this.x = 0;
    this.y = 0;
    this.xSpeed = random(-3, 3);
    this.ySpeed = random(-3, 3);
	}

	show() {

    // strokeWeight(random(5));
    noFill();
    image(capture, 200, 100, 320, 240);
    
    }


	move(){
    translate(this.x, this.y)/4;

    if (this.x > 800 || this.x < 0) {
    this.xSpeed = this.xSpeed * -1;
  }

    if (this.y > 800 || this.y < 0) {
    this.ySpeed = this.ySpeed * -1;
  }
  
 this.x = this.x + this.xSpeed; 
 this.y = this.y + this.ySpeed;

  }
}