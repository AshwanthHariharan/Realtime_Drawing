
NoseX = 0;

NoseY = 0;

Difference = 0;

LeftWristx = 0;

RightWristx = 0;

function setup() {

canvas = createCanvas(600,500);

canvas.position(560,120);

video = createCapture(VIDEO);

video.size(550, 500);

poseNet = ml5.poseNet(video, modelLoaded);

poseNet.on('pose', gotPoses);

}

function draw() {

background('#34ebb4');

document.getElementById("square side").innerHTML = "Size of the square is = " + Difference + "px";

fill('F90093');

stroke('F90093');

square(NoseX, NoseY, Difference)

}

function modelLoaded() {

console.log("PoseNet is Intialized!");

}

function gotPoses(results) {

if(results.length > 0) {

console.log(results);

NoseX = results[0].pose.nose.x;

NoseY = results[0].pose.nose.y;

LeftWristx = results[0].pose.leftWrist.x;

RightWristx = results[0].pose.rightWrist.x;

Difference = floor(LeftWristx - RightWristx);

console.log("LeftWrist = " + LeftWristx + "RightWrist = " + RightWristx + "Difference = " + Difference);

}

}