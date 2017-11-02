let on = false;

function hide (tab) {
    chrome.tabs.sendMessage(tab.id, {text: 'hide'});
}

function show (tab) {
    chrome.tabs.sendMessage(tab.id, {text: 'show'});
}

function updateIcon(tab) {
    let img, title;
    on = !on;

    if (on) {
        hide(tab);
        img = 'meetAssistantsHider_show.png';
        title = 'Show!';
    } else {
        show(tab);
        img = 'meetAssistantsHider_hide.png';
        title = 'Hide!';
    }

  chrome.browserAction.setIcon({path: img});
  chrome.browserAction.setTitle({title: title});
}

chrome.browserAction.onClicked.addListener(updateIcon);
