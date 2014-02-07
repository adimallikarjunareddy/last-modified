document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        excutethis();
    }
}
function excutethis() {  // pop up to content page communication
    //ask for content of the page from contentscript.js
    //otherway around will not work
    chrome.tabs.query({'active': true, 'currentWindow': true}, function (tab) {
        //Be aware 'tab' is an array of tabs even though it only has 1 tab in it
        chrome.tabs.sendMessage(tab[0].id, "stuff", function (response) {
            document.getElementById("time").innerHTML = " Last Modified:" + response.lastmodified;
            document.getElementById("url").innerHTML = " URL:" + response.url;
        });
    });
}