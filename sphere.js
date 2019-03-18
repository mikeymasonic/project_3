// function setup() {
//   createCanvas(windowWidth, windowHeight, WEBGL);
// }

// function draw() {
//   // background(random(255), random(255), random(255));
//   // background(50);
//   stroke(random(255), random(255), random(255));
//   strokeWeight(random(2));
//   fill(random(255), random(255), random(255));
//   rotateY(frameCount * 0.01);

//   for (let j = 0; j < 5; j++) {
//     push();
//     for (let i = 0; i < 80; i++) {
//       translate(
//         sin(frameCount * 0.5 + j) * 100,
//         sin(frameCount * 0.5 + j) * 100,
//         i * 0.1
//       );
//       rotateZ(frameCount * 0.002);
//       push();
//       sphere(8, 6, 4);
//       pop();
//     }
//     pop();
//   }


// }


let r;
let circlething = [];
let factor = 0;
let total = 200;
let hit = false;

let xLoc = 200;
let yLoc = 200;
let speed = 200;

let angle = 0.0;
let jitter = 0.0;

var startTime;




function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  for (let i = 0; i < 5; i++) {
    circlething[i] = new Circlething();
  }

  noCursor();
  // time = millis();
  startTime = Math.floor(millis() / 500);
  // background(127);

}

function getVector(index, total) {
      const angle = map(index % total, 0, total, 0, TWO_PI);
      const v = p5.Vector.fromAngle(angle + PI);
      v.mult(r);
      return v;
}



function draw() {
  background(100);
  push();
  angle += 0.02; 
  for (let i = 0; i < 5; i++) {
  circlething[i].move();  
  circlething[i].show();
  }
  pop();

  // stroke(random(255), random(255), random(255));
  stroke(50);
  // strokeWeight(random(2));
  strokeWeight(1);


  stroke(127+127*sin(angle), 127+127*sin(angle), 127+127*sin(angle));
  // fill(random(255), random(255), random(255));
  // noFill();
  //   if (mouseDragged == true) {
  //   fill(random(255), random(255), random(255));
  // } else {
  //   noFill();
  // }


  rotateY(frameCount * 0.0025);

  for (let j = 0; j < 25; j++) {
    // push();
    for (let i = 0; i < 50; i++) {
      translate(
        sin(frameCount * 0.0008 + j) * 100,
        sin(frameCount * 0.0008 + j) * 100,
        i * 0.1
      );
      rotateZ(frameCount * 0.002);

        // sphere(8, 6, 4);
        sphere(random(23, 40));
        // box(8, 6, 4, 5);      

    }
    // pop();


  }

  // if (millis() > time+1){

  // // for (let i =0; i < 15; i++){
  // //   phaseChange[i]+= 1;
  // //   if (phaseChange[i] > 15){
  // //     phaseChange[i] = 0;
  // //   }
  // }
  // time = millis();
}


function mouseDragged(){

  // noBackground();

  fill(random(255), random(255), random(255));
}




class Circlething {
  constructor() {

    r = 300;
    this.size = r*2;
    this.x = 0;
    this.y = 0;
    this.xSpeed = random(-3, 3);
    this.ySpeed = random(-3, 3);
 }

show() {
    point(mouseX,mouseY);

    // hit = collidePointEllipse(mouseX,mouseY,xLoc, yLoc, this.size, this.size)

    // print("colliding? " + hit);
    factor += 0.015;
    stroke(127+127*sin(angle), 127+127*sin(angle));
    // strokeWeight(random(5));
    strokeWeight(2);
    noFill();
    ellipse(0, 0, r * 2);
    // sphere(0, 0, r * 2);

    // strokeWeight(random(3));
    for (let i = 0; i < total; i++) {
      const a = getVector(i, total);
      const b = getVector(i * factor, total);
      line(a.x, a.y, b.x, b.y);
    }

}

move(){
    translate(this.x, this.y)/4;

    if (this.x > width || this.x < 0) {
    this.xSpeed = this.xSpeed * -1;
  }

    if (this.y > height || this.y < 0) {
    this.ySpeed = this.ySpeed * -1;
  }
  
 this.x = this.x + this.xSpeed; 
 this.y = this.y + this.ySpeed;

  }
}