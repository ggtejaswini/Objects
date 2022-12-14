img = "";
status = "";
objects = [];
function preload(){
    img = loadImage('ice-cream.jpg');
}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function modelloaded(){
    console.log("Model loaded!");
    status = true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
}
function draw(){
    image(img,0,0,640,420);
    if(status != ""){
        for(i=0; < objects.legnth ; i++){
            document.getElementById("status").innerHTML = "Status: Objects Detected";

            fill('red');
            percent = floor(objects[i].confidence*100);
            text(objects[i].label+ " " + percent+"%", objects[i].x,objects[i].y);
            noFill();
            stroke('red');
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
        }
    }
}
function back(){
    window.location("index.html");
}