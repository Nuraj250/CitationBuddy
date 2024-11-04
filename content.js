// Listen for messages from popup.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "generateCitation") {
        const title = document.title;
        const url = window.location.href;
        const citation = `"${title}". Retrieved from ${url}`;

        // Create an overlay for displaying the citation
        const citationOverlay = document.createElement('div');
        citationOverlay.innerText = citation;
        citationOverlay.style.position = 'fixed';
        citationOverlay.style.bottom = '10px';
        citationOverlay.style.right = '10px';
        citationOverlay.style.backgroundColor = '#f9f9f9';
        citationOverlay.style.border = '1px solid #000';
        citationOverlay.style.padding = '10px';
        citationOverlay.style.zIndex = '10000';
        citationOverlay.style.boxShadow = '0px 0px 10px rgba(0,0,0,0.5)';
        
        // Append overlay to the body
        document.body.appendChild(citationOverlay);

        // Auto-hide the overlay after 5 seconds
        setTimeout(() => {
            document.body.removeChild(citationOverlay);
        }, 5000);

        sendResponse({ status: "Citation generated" });
    }
});


