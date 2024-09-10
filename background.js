//monitor the web requesta and block specific urls
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        const blockedUrls = ["ponhub.com", "xvideos.com"];
        const url = details.url.toLowerCase();
        const found = blockedUrls.some(word => url.includes(word))
        if (found){
            return {cancel: true};
        }
    },
    {urls: ["*://*/*"]},
    ["blocking"]
);