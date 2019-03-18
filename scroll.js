var u;
var count;
var mods = [];
let capture;
let capturething = [];
let capturething1 = [];

function setup() {
  //////capture stuff
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(240, 240);
  capture.hide();
    for (let i = 0; i <500; i++) {
    capturething[i] = new Capturething();
  }
      for (let i = 0; i <500; i++) {
    capturething1[i] = new Capturething1();
  }
  noCursor();
  //////bgstuf
  u = 100;
  widthExtra = ((int(windowWidth/u))*u)+u;
  count = int(widthExtra/u);
  var index = 0;
  for (var xc = 0; xc < count*2; xc++) {
      mods[index++] = new Module((int(xc)*u),0);
   }
}

function draw() {
  noStroke();
  background(0);

  //   // background(random(255), random(255), random(255));
  // // background(50);
  // push();
  // stroke(random(255), random(255), random(255));
  // strokeWeight(random(2));
  // fill(random(255), random(255), random(255));
  // rotateY(frameCount * 0.01);

  // for (let j = 0; j < 5; j++) {
  //   push();
  //   for (let i = 0; i < 80; i++) {
  //     translate(
  //       sin(frameCount * 0.5 + j) * 100,
  //       sin(frameCount * 0.5 + j) * 100,
  //       i * 0.1
  //     );
  //     rotateZ(frameCount * 0.002);
  //     push();
  //     sphere(8, 6, 4);
  //     pop();
  //   }
  //   pop();
  // }
  // pop();

  ////background stuff
  for (var i = 0; i <= count; i++) {
    mods[i].draw();
  }
  ////capture stuff
  push();
  for (let i = 0; i <500; i++) {
  capturething[i].move();  
  capturething[i].show();
  }
  filter(INVERT);
  pop();

  push();
  for (let i = 0; i <500; i++) {
  capturething1[i].move();  
  capturething1[i].show();
  }
 
  pop();
}

function mousePressed() {
  for (var i = 0; i <= count; i++) {
    mods[i].Pressed();
  }
}

function Module(_x, _y) {
  this.x = _x;
  this.y = _y;
  this.j = 0;
  this.k = 1;
  this.forward = true;
}

Module.prototype.draw = function() {
  push();
  translate(this.x, this.y);
  noStroke();
  fill(255);
  quad(this.j,0,this.j+25,0,this.j+25,height,this.j,height);
  this.x = this.x + this.k;
  if(this.x > widthExtra){
    this.x = -u;
  }
  if(this.x < -u){
    this.x = widthExtra;
  }
  pop();
}

Module.prototype.Pressed = function() {
    if (this.forward === true){
      this.k = this.k*-1;
      this.forward = false;
      } else {
      this.k = this.k*-1;
      this.forward = true;
      }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


///capturething
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
    push();
    image(capture, 0, 0, 200, 200);
    pop();
    push();
    image(capture, 20, 20, 200, 200);
    pop();
    push();
    image(capture, 40, 40, 200, 200);
    pop();
    // sphere(300);
    
    }


  move(){
    translate(this.x, this.y)/4;

    if (this.x > windowHeight || this.x < 0) {
    this.xSpeed = this.xSpeed * -1;
  }

    if (this.y > windowWidth || this.y < 0) {
    this.ySpeed = this.ySpeed * -1;
  }
  
 this.x = this.x + this.xSpeed; 
 this.y = this.y + this.ySpeed;

  }
}

class Capturething1 {


  constructor() {

    this.x = 0;
    this.y = 0;
    this.xSpeed = random(3, -3);
    this.ySpeed = random(3, -3);
  }

  show() {

    // strokeWeight(random(5));
    noFill();
    push();
    image(capture, 500, 500, 200, 200);
    pop();
    // push();
    // image(capture, 20, 20, 200, 200);
    // pop();
    //     push();
    // image(capture, 40, 40, 200, 200);
    // pop();
    // sphere(300);
    
    }


  move(){
    translate(this.x, this.y)/2;

    if (this.x > windowHeight || this.x < 0) {
    this.xSpeed = this.xSpeed * 1;
  }

    if (this.y > windowWidth || this.y < 0) {
    this.ySpeed = this.ySpeed * 1;
  }
  
 this.x = this.x + this.xSpeed; 
 this.y = this.y + this.ySpeed;

  }
}

