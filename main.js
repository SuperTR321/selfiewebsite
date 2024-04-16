var speechrec = window.webkitSpeechRecognition;
var human = new speechrec();
function start() {
    document.getElementById("textbox").innerHTML = "";
    human.start()
}

human.onresult = function(event) {
    var content = event.results[0][0].transcript;
    if(content=="take my selfie") {
    document.getElementById("textbox").innerHTML = content;
    speak();
}
}
function speak() {
    var synth = window.speechSynthesis;
    var speakData = "Taking selfie in 5 seconds";
    var speakthis = new SpeechSynthesisUtterance(speakData);
    synth.speak(speakthis);
    Webcam.attach(camera);
    setTimeout(function() {
        takeSnapShot();
        save();
    }, 5000);
}

Webcam.set({
    width: 350, height:250, image_format:"png", png_quality:100
});

camera = document.getElementById("camera");

function takeSnapShot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie" src="'+ data_uri +'">';
        console.log(data_uri);
    });
};

function save() {
    link=document.getElementById("link");
    img1=document.getElementById("selfie").src;
    link.href=img1;
    link.click();
}