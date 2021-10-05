function preload() {
  
}

function setup() {
  canvas = createCanvas(600, 600);
  video = createCapture(VIDEO);
  video.hide();  
}

function take_snapshot(){
   save('student_name.png');
}

function draw() {
  image(video, 150, 150, 200, 200);
  fill("blue");
  rect(25, 30, 10, 440);
  rect(470, 30, 10, 440);
  rect(33, 470, 440, 10);
  rect(33, 20, 440, 10);
  rect(33, 470, 440, 10);
  fill("#00FFFF");
  rect(10, 5, 50, 50);
  rect(10, 445, 50, 50);
  rect(445, 445, 50, 50);
  rect(445, 5, 50, 50);
}