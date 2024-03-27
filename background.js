chrome.alarms.create({
  periodInMinutes: 1 / 60,
});

chrome.alarms.onAlarm.addListener((alarm) => {
  chrome.storage.local.get(["timer", "isRunning"]).then((res) => {
    const time = res.timer ?? 0;
    const isRunning = res.isRunning ?? true;
    if (!isRunning) return;
    chrome.storage.local.set({ timer: time + 1 });
    chrome.action.setBadgeText({
      text: `${time + 1}`,
    });
    chrome.storage.sync.get(["notificatinoTime"]).then((res) => {
      const notificationTime = res.notificationTime ?? 1200;
      if (time % notificationTime === 0) {
        this.registration.showNotification("Chrome Timer Extension"),
          {
            message: `${notificationTime} seconds has passed!`,
            icon: "icon.png",
          };
      }
    });
  });
});
