document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#start-download").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ["background.js"],
      }, () => {
        if (chrome.runtime.lastError) {
          console.error("Error executing script:", chrome.runtime.lastError.message);
        } else {
          console.log("Content script executed successfully.");
        }
      });
    });
  });
});
