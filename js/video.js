document.addEventListener("DOMContentLoaded", function() {

var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

console.log("stressed out");

document.querySelector("#play").addEventListener("click", function PlayVideo() {
video.play()
console.log("Play Video");
		});

document.querySelector("#pause").addEventListener("click", function Pausevideo() {
video.pause()
console.log("Pause Video");
    });

document.querySelector("#slower").addEventListener("click", function SlowVideo() {
video.playbackRate=video.playbackRate * 0.05;
	console.log("Slowed video speed is " + video.playbackRate)
    });

document.querySelector("#faster").addEventListener("click", function FastVideo() {
video.playbackRate=video.playbackRate * 1.05;
	console.log("Faster videos speed is " + video.playbackRate)
	});

document.querySelector("#skip").addEventListener("click", function() {
video.currentTime += 15;
	if(video.currentTime > video.duration - 15) {
		video.currentTime=0
	}
   console.log("Skipped to" + video.currentTime);
    });

mutebutton = document.querySelector("#mute")

document.querySelector("#mute").addEventListener("click", function() {
    if (video.muted === false) {
		video.muted = true;
		mutebutton.textContent = "Unmute"
	}
	else {video.muted=false
		mutebutton.textContent = "Mute"
	}
	console.log("Mute Video");
    });

var slider=document.querySelector("#slider");
var output=document.querySelector("#volume")
output.innerHTML = slider.value

document.querySelector("#slider").addEventListener("click", function() {
	output.innerHTML = this.value;
	video.volume = slider.value
     console.log("Slider Video Volume is " + this.value);
     });

})

document.querySelector("#vintage").addEventListener("click", function() {
	var element = document.getElementById("player1");
	element.classList.add("oldSchool");
	console.log("Vintage Video" + element.classList);
   });

document.querySelector("#orig").addEventListener("click", function() {
    var element = document.getElementById("player1");
	element.classList.remove("oldSchool");
	console.log("Vintage Video" + element.classList);
    });