//Let's see

// chrome.browserAction.onClicked.addEventListener(numClicks);
//
// function numClicks(tab){
//     console.log(tab);
// };

//Bear example. Something is wrong with line 2 and line 7.
// window.Fbs = {}
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     window.Fbs[request.url] = request.count
// })
//
// chrome.browserAction.onClicked.addListener(function(tab) {
//     chrome.tabs.create({url: 'counter.html'})
// })



chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        if (request.message=== "check check")
        sendResponse ({message: "hello there"});
    }
);
