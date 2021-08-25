function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(300, 300);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/qzTEcs_0-/model.json', modelLoaded);
}

function modelLoaded() {
    console.log('model loaded');
}

function draw() {
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}