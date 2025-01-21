chrome.action.onClicked.addListener((tab) => {
  console.log("Action button clicked on tab:", tab);

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["content.js"],
  }, () => {
    if (chrome.runtime.lastError) {
      console.error("Error executing script:", chrome.runtime.lastError.message);
    } else {
      console.log("Content script executed successfully.");
    }
  });
});
