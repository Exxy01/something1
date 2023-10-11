noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;
function setup(){
  canvas =  createCanvas(400, 400);
  canvas.position(500, 150);
  video = createCapture(VIDEO);
  video.size(550, 500)
 posenet = ml5.poseNet(video, modelLoaded)
 posenet.on("pose", gotPoses)
}

function draw(){
  background("#0000FF")
  fill("#FFA500");
  stroke("#FFA500");
  square(noseX, noseY, difference);
}
function modelLoaded(){
  console.log("Posenet is working, by the way, if you see this have a good day!")
}
function gotPoses(results){
  if(results.length > 0){
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
   console.log("NoseX:" + noseX + "NoseY:" + noseY );
   leftWristX = results[0].pose.leftWrist.x;
   rightWristX = results[0].pose.rightWrist.x;
   difference = floor(leftWristX - rightWristX);
   console.log("leftWristX: " + leftWristX + "rightWristX: " + rightWristX + "difference: "+ difference);
  }
}
