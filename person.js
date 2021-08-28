var Object_Detector = "";
var img = "";
var objects = [];
status = "";

function preload(){
img=loadImage("https://image.shutterstock.com/image-photo/two-female-best-friends-sitting-260nw-1758174551.jpg")
}

function setup(){
canvas=createCanvas(500, 500)
canvas.center();
Object_Detector=ml5.objectDetector('cocossd', modelLoaded)
document.getElementById("status").innerHTML="status:detecting objects"
}

function modelLoaded(){
    console.log("modelLoaded")
    status=true;
    objectDetector.detect(img, gotResult)
    }
    
    function gotResult(error, results){
    if (error) {
    console.log(error)
    }
    console.log(results)
    objects=results
    }

function draw(){
image(img, 0, 0, 500, 500);
if (status!="") {
for (let i = 0; i < objects.length; i++) {
document.getElementById("status").innerHTML="status:object detected"
fill("red")
percent=floor(objects[i].confidence*100);
text(objects[i].label+""+percent+"%", objects[i].x+15, objects.y+15);
nofill()
stroke("red")
rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
}    
}
}

