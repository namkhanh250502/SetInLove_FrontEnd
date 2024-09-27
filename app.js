const yourDate = new Date("2022-12-24T00:00:00"),
  music = ["myheart", "betifulinwhite", "mylove"];

document.addEventListener(
  "DOMContentLoaded",
  function () {
    var rootTime = document.querySelector("time");

    document.querySelector("anni").textContent = `${
      yourDate.getDate() > 9 ? yourDate.getDate() : "0" + yourDate.getDate()
    }-${
      yourDate.getMonth() > 8
        ? yourDate.getMonth() + 1
        : "0" + (yourDate.getMonth() + 1)
    }-${yourDate.getFullYear()}`;

    document.querySelector("date").textContent =
      Math.floor(Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24) +
      " DAYS";

    function olock() {
      var today = new Date(),
        hrs = Math.floor(Math.floor((today - yourDate) / 1000) / 60 / 60) % 24,
        min = Math.floor(Math.floor((today - yourDate) / 1000) / 60) % 60,
        sec = Math.floor((today - yourDate) / 1000) % 60;
      rootTime.textContent = `${hrs > 9 ? hrs : "0" + hrs}:${
        min > 9 ? min : "0" + min
      }:${sec > 9 ? sec : "0" + sec}`;
    }
    olock();
    var timer = setInterval(function () {
      olock();
    }, 1000);
    document.querySelector("audio").setAttribute(
      "src",
      "https://cdn.glitch.global/b633a015-8e01-4966-ae0e-728035dd720f/hi.mp3?v=1657788222885"
      // "https://cdn.glitch.global/b633a015-8e01-4966-ae0e-728035dd720f/y2meta.com%20-%20D%E1%BA%ABu%20C%C3%B3%20L%E1%BB%97i%20L%E1%BA%A7m%20(Lofi%20Ver.)%20-%20Reddy%20Cover%20x%20Freak%20D%20(320%20kbps).mp3?v=1664333528465"
      // "https://cdn.glitch.me/b633a015-8e01-4966-ae0e-728035dd720f/mix_64m31s%20(audio-joiner.com).mp3?v=1664335354623"
    );

    document
      .getElementsByTagName("body")[0]
      .insertAdjacentHTML("beforeend", "<div id='mask'></div>");
  },
  false
);
