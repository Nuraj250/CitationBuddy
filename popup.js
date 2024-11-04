document.getElementById('generateCitation').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "generateCitation" }, (response) => {
            if (response && response.status === "Citation generated") {
                alert("Citation displayed on the page!");
            }
        });
    });
});
