let start = document.getElementById("start");
let reset = document.getElementById("reset");
let display = document.getElementById("display");
let timer;

function startCounter() {
  clearInterval(timer);
  let hours = document.getElementById("hours").value;
  let minutes = document.getElementById("minutes").value;
  let seconds = document.getElementById("seconds").value;
  let totalTimeSec =
    Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds);
  timer = setInterval(function () {
    if (totalTimeSec > 0) {
      totalTimeSec--;
      hours = Math.floor(totalTimeSec / 3600);
      minutes = Math.floor((totalTimeSec % 3600) / 60);
      seconds = Math.floor(totalTimeSec % 60);
      formattedHours = (hours < 10 ? "0" : "") + hours;
      formattedMinutes = (minutes < 10 ? "0" : "") + minutes;
      formattedSeconds = (seconds < 10 ? "0" : "") + seconds;
      display.innerText = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    } else {
      clearInterval(timer);
      display.innerText = "it's done";
      document.getElementById("doneSound").play();
      setTimeout(() => {
        document.getElementById("doneSound").pause();
      }, 5000);
    }
  }, 1000);
}

start.onclick = () => {
  startCounter();
};

reset.onclick = () => {
  clearInterval(timer);
  display.innerText = "00:00:00";
  hours.value = "00";
  minutes.value = "00";
  seconds.value = "00";
};

let darkThemeBtn = document.getElementById("darkThemeBtn");
darkThemeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    darkThemeBtn.innerText = "White Mode";
  } else {
    darkThemeBtn.innerText = "Dark Mode";
  }
});
