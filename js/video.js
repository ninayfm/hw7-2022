
var vid = document.getElementById("player1");
vid.autoplay = false;
vid.loop = false;
vid.load();

var vol = document.getElementById("volume");

var play = document.getElementById("play");
play.addEventListener("click", function() {
	vid.play();
	vol.innerHTML = vid.volume*100 + "%";
})

var pause = document.getElementById("pause");
pause.addEventListener("click", function() {
	vid.pause();
})

var slowdown = document.getElementById("slower");
slowdown.addEventListener("click", function() {
	vid.playbackRate -= 0.1;
	console.log("New speed is " + vid.playbackRate);
})

var speedup = document.getElementById("faster");
speedup.addEventListener("click", function() {
	vid.playbackRate += 0.1;
	console.log("New speed is " + vid.playbackRate);
})

var skip = document.getElementById("skip");
skip.addEventListener("click", function() {
	vid.currentTime += 10;
	if(vid.currentTime >= vid.duration) {
		vid.load();
	}
	console.log("Current location is " + vid.currentTime);
})

var mute = document.getElementById("mute");
mute.addEventListener("click", function() {
	if (vid.muted == false) {
		vid.muted = true;
		mute.textContent = 'Unmute';
		vol.innerHTML = currentvol*100 + "%";
	}
	else {
		vid.muted = false;
		mute.textContent = 'Mute';
		slider.value = currentvol;
		vol.innerHTML = currentvol + "%";
	}
})

var slider = document.getElementById("slider");
slider.addEventListener("change", function() {
	vol.innerHTML = this.value + "%";
	vid.volume = this.value/100;
})

var styled = document.getElementById("vintage");
styled.addEventListener("click", function() {
	console.log("Style applied");
	vid.classList.add("oldSchool");
})

var original = document.getElementById("orig");
original.addEventListener("click", function() {
	vid.classList.remove("oldSchool");
})


