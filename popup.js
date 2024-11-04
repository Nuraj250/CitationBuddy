
document.getElementById('generateCitation').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const currentTab = tabs[0];
        chrome.scripting.executeScript({
            target: { tabId: currentTab.id },
            function: generateCitation,
        });
    });
});

function generateCitation() {
    const title = document.title; // Page title
    const url = window.location.href; // Page URL
    const citation = `"${title}". Retrieved from ${url}`;

    const citationDiv = document.createElement('div');
    citationDiv.innerText = citation;
    citationDiv.style.position = 'fixed';
    citationDiv.style.top = '10px';
    citationDiv.style.right = '10px';
    citationDiv.style.backgroundColor = '#ffffff';
    citationDiv.style.border = '1px solid #000';
    citationDiv.style.padding = '10px';
    citationDiv.style.zIndex = '1000';
    document.body.appendChild(citationDiv);

    // Copy to clipboard functionality
    navigator.clipboard.writeText(citation).then(() => {
        alert("Citation copied to clipboard!");
    });
}
