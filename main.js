function start() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/jb0UNw3_L/model.json', modelloaded);
}
function modelloaded() {
    classifier.classify(gotresults);
}
function gotresults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        r = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1;
        b = Math.floor(Math.random() * 255) + 1;


        document.getElementById("result-label").innerHTML = "I can hear- " + results[0].label;
        document.getElementById("result-confidence").innerHTML = "Accuracy - " + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result-label").style.color = "rgb(" + r + "," + g + "," + b + ")";
        document.getElementById("result-confidence").style.color = "rgb(" + g + "," + r + "," + b + ")";


        dog_img = document.getElementById("dog");
        cat_img = document.getElementById("cat");
        cow_img = document.getElementById("cow");
        lion_img = document.getElementById("lion");
        if (results[0].label == "Barking") {
            document.getElementById("dog").style = "border:6px solid red"
        }
        else {
            document.getElementById("dog").style = "border:3px solid grey"
        }
        if (results[0].label == "Mooing") {
            document.getElementById("cow").style = "border:6px solid red"
        }
        else {
            document.getElementById("cow").style = "border:3px solid grey"
        }

        if (results[0].label == "Roar") {
            document.getElementById("lion").style = "border:6px solid red"
        }
        else {
            document.getElementById("lion").style = "border:3px solid grey"
        }
        if (results[0].label == "Meowing") {
            document.getElementById("cat").style = "border:6px solid red"
        }
        else {
            document.getElementById("cat").style = "border:3px solid grey"
        }
    }}
