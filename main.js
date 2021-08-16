Webcam.set({
    width: 300,
    height: 300,
    image_format: 'jpeg',
    jpeg_quality: 70
})

camera= document.getElementById("camera");

Webcam.attach(camera);

function takepicture(){
    Webcam.snap(function(data_uri){
        document.getElementById("snapshot").innerHTML="<img id='captured_picture' src='"+data_uri+"'>"
    })
}

console.log(ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Q9_UokDWd/model.json", modelLoaded);

function modelLoaded(){
    console.log("model is loaded");
}

function identify(){
    img=document.getElementById("captured_picture");
    classifier.classify(img, gotResult)
}
 
function gotResult(error,results){
    if (error){
        console.log(error);
    }
    else {
        console.log(results);
        document.getElementById("result_object").innerHTML=results[0].label;
        document.getElementById("result_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}