song1 = "";
song2 = "";
song1_status = "";
song2_status = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload()
{
    song1 = loadSound("bluebirdnaruto.mp3");
    song2 = loadSound("demonslayersong.mp3");
}


function setup() {
    canvas =  createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()  {
    console.log('PoseNet Is Initialized');
} 

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        scoreLeftWrist =  results[0].pose.keypoints[9].score;
        console.log("scoreLeft Wrist = " +scoreLeftWrist);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWrist = " + leftWristX +" leftWristY = "+ leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +" rightWristY = "+rightWristY);
    }
}

function draw() {
    image(video, 0, 0, 600, 500);

    song1_status = song1.isplaying();
    song2_status = song2.isplaying();

    fill("#FF0000");
    stroke("#FF0000");
}


function play()
{
    song1.play();
    song1.setVolume(1);
    song1.rate(1);
}

