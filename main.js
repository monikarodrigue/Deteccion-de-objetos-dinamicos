img = "";
status=""; 
objects=[];

function preload(){
 //img = loadImage('dog_cat.jpg');
 //img = loadImage('animales2.jfif');
 //img= loadImage('animales.jpg');
 // img= loadImage('animales1.jpg');
 img= loadImage('imagen3.jpg');

}
 function setup() {
  canvas = createCanvas(380, 380);
  canvas.center();
  video=createCapture(VIDEO);
  video.size(380,380);
  
  objectDetector=ml5.objectDetector("cocossd",modelLoaded);
  document.getElementById("estatus").innerHTML="Estatus: Detectando objetos";
  video.hide();
}

function modelLoaded(){
  console.log("Modelo cargado!");
  status=true;
  //objectDetector.detect(video,gotResult);
}


function gotResult(error,results){
  if (error){
    console.error(error);
  }
  console.log(results);
  objects= results;

}

 
function draw() {
  image(video, 0, 0, 380, 380);
 
 if(status!= ""){

  r=random(255);
  g=random(255);
  b=random(255);

  objectDetector.detect(video,gotResult);

    for(i=0; i<objects.length;i++){

    document.getElementById("estatus").innerHTML="Estatus: objeto detectado";
    document.getElementById("number_objects").innerHTML="Numero de objetos detectados: "+objects.length;
    
    fill(r,g,b);
    
    percent=floor(objects[i].confidence*100);
    text(objects[i].label+" "+percent+"%", objects[i].x+15,objects[i].y+15);
   text()
    noFill();
   
    stroke(r,g,b);
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
   }

 }
        
    
}