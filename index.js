document.addEventListener("DOMContentLoaded", () =>
  requestAnimationFrame(updateTime)
);

function updateTime() {
  let date = new Date();
  var days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

  var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  var minutes =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  var seconds =
    date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

  document.documentElement.style.setProperty(
    "--timer-day",
    "'" + days[date.getDay()] + "'"
  );
  document.documentElement.style.setProperty(
    "--timer-hours",
    "'" + hours + "'"
  );
  document.documentElement.style.setProperty(
    "--timer-minutes",
    "'" + minutes + "'"
  );
  document.documentElement.style.setProperty(
    "--timer-seconds",
    "'" + seconds + "'"
  );
  requestAnimationFrame(updateTime);
}
