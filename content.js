chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    const assistantsDiv = document.getElementsByClassName('Bx7THd')[0];
    if (assistantsDiv) {
        if (msg.text === 'show') {
            assistantsDiv.style.right = '0';
        } else if (msg.text === 'hide') {
            assistantsDiv.style.right = '99999999px';
        }
    } else {
        sendResponse(() => console.error('div not found'));
    }
});
