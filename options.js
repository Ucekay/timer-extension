const nameInput = document.getElementById("name-input");
const saveBtn = document.getElementById("save-btn");

saveBtn.addEventListener("click", () => {
  const name = nameInput.value;
  chrome.storage.sync.set({ name }).then(() => {
    console.log("Name saved");
  });
});

chrome.storage.sync.get(["name"]).then((res) => {
  nameInput.value = res.name;
});
