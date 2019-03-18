// video source: https://vimeo.com/90312869
let img;
let vid;
let theta = 0;

function setup() {
  // createCanvas(710, 400, WEBGL);
  createCanvas(windowWidth, windowHeight, WEBGL);
    // filter('INVERT');
  capture = createCapture(VIDEO);
  capture.size(500, 500);
  capture.hide();
  //   for (let i = 0; i <500; i++) {
  //   capturething[i] = new Capturething();
  // }

  // img = loadImage('assets/cat.jpg');
  // vid = createVideo(['assets/360video_256crop_v2.mp4']);
  // vid.elt.muted = true;
  // vid.loop();
  // vid.hide();
}

function draw() {
  background(250);
  // translate(-220, 0, 0);
  push();
  rotateZ(theta * mouseX * 0.001);
  rotateX(theta * mouseX * 0.001);
  rotateY(theta * mouseX * 0.001);
  //pass image as texture
  texture(capture);
  // sphere(200);
  box(200)
  pop();

  theta += 0.05;
}
