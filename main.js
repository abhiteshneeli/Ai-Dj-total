sound_1="";
sound_2="";

leftwristx="";
leftwristy="";

rightwristx="";
rightwristy="";

scroe_leftwrist="";
scroe_rightwrist="";

function preload(){
    sound_1=loadSound("Believer.mp3");
    sound_2=loadSound("fire all around.mp3");
}


function setup() {
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose', gotposes)
}

function gotposes(results){

    if (results.length > 0) {

        console.log(results);

        scroe_leftwrist=results[0].pose.keypoints[9].score;
        console.log("score of leftwrist"+scroe_leftwrist);

        scroe_rightwrist=results[0].pose.keypoints[10].score;
        console.log("score of rightwrist"+scroe_rightwrist);

        leftwristx=results[0].pose.leftWrist.x;
        leftwristy=results[0].pose.leftWrist.y;

        rightwristx=results[0].pose.rightWrist.x;
        rightwristy=results[0].pose.rightWrist.y;

        console.log("leftwristx = "+leftwristx+"leftwristy = "+leftwristy);
        console.log("rightwristx = "+leftwristx+"rightwristy = "+rightwristy);
        
    }
}
function modelloaded(){
    console.log("poseNET is loaded");
}

function draw(){
    image(video,0,0,600,500);

    fill("#ff0000");
    stroke("#ff0000");

    if (scroe_leftwrist > 0.2) {
        
    sound_1.play();
    }
    if (scroe_leftwrist < 0.2) {
        
        sound_1.stop();
        }




        if (scroe_rightwrist > 0.2) {
        
        
            sound_2.play();
            }    if (scroe_rightwrist < 0.2) {
        
        
                sound_2.stop();
                }
    
}