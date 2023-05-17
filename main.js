function setup() {
    video = createCapture(VIDEO)
    video.size(550 , 500)

     canvas=createCanvas(550 , 550)
     canvas.position(570 , 130)
     poseNet=ml5.poseNet(video , modeloaded);
     poseNet.on('pose' , gotposes);

}

function draw() {
   background('#FFCCCB')
}

function modeloaded() {
   console.log("posenet is intialized")
}

function gotposes(results){
   if(results.length > 0 ) {
       
       console.log(results)
   }


}

