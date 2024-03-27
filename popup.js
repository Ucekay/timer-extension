const timeElement = document.getElementById("time");
const nameElement = document.getElementById("name");
const currentTime = new Date().toLocaleTimeString();
timeElement.textContent = `The time is: ${currentTime}`;

chrome.action.setBadgeText(
  {
    text: "TIME",
  },
  () => {
    console.log("Badge text set");
  }
);

chrome.storage.sync.get(["name"]).then((res) => {
  const name = res.name ?? "unknown user";
  if (nameElement) {
    nameElement.textContent = `Hello, ${name}`;
  }
});
