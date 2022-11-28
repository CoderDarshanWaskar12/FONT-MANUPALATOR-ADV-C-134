difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(550,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
}

function draw() {
background('#00008B');
fill('#F90093');
stroke('#F90093');
document.getElementById("font_size").innerHTML = "Font Size Of The Text Will Be = "+difference+"px";
    textSize(difference);
    text('Darshan',50,400);
}

function gotPoses(results,error){
    if(error){
        console.error(error);
    }
    if(results.length > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;

        difference = floor(leftWristX - rightWristX);

        console.log("rightWristX = "+results[0].pose.rightWrist.x + " rightWristY = "+results[0].pose.rightWrist.y);
        console.log("leftWristX = "+results[0].pose.leftWrist.x + " leftWristY = "+results[0].pose.leftWrist.y);
    }
}