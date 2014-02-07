//content script executes in the context of a chrome tab
//Extensions do not have access to opened tab data
//content script is the only way for extensions to access tab data
var lastmodified = document.lastModified,
    url = document.URL;
chrome.extension.onMessage.addListener(function (message, sender, sendResponse) {
    //this will fire when asked for info by the popup
    //alert("message received from tab" + message);
    var d=new Date(lastmodified),
        datetime=d.toUTCString();
    sendResponse({"url": url, "lastmodified": datetime});
});
