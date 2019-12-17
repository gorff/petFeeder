
//This script is for adding the webcam to the app
//https://www.kirupa.com/html5/accessing_your_webcam_in_html5.htm
var video = document.querySelector("#videoElement");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })

    });
}
