const timeElement = document.getElementById("time");
const nameElement = document.getElementById("name");
const timerElement = document.getElementById("timer");

function updateTimeElements() {
  chrome.storage.local.get(["timer"]).then((res) => {
    const time = res.timer ?? 0;
    timerElement.textContent = `Timer: ${time}`;
  });
  const currentTime = new Date().toLocaleTimeString();
  timeElement.textContent = `The time is: ${currentTime}`;
}

updateTimeElements();
setInterval(updateTimeElements, 1000);

chrome.storage.sync.get(["name"]).then((res) => {
  const name = res.name ?? "unknown user";
  if (nameElement) {
    nameElement.textContent = `Hello, ${name}`;
  }
});
