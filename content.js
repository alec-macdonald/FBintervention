// // alert("Is this thing working?")
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse){
//     const re = new RegExp('Facebook', 'gi')
//     const matches = document.documentElement.innerHTML.match(re)
//     sendResponse({count: matches.length})
// })
//
// const re = new RegExp('Facebook', 'gi')
// const matches = document.documentElement.innerHTML.match(re)
// chrome.runtime.sendMessage({
//     url: window.location.href,
//     count: matches.length
// })

document.addEventListener("click", e=> {
    console.log("Hey there")
})

function click(tab) {
    let msg = {
        txt: "check check"
    }


chrome.runtime.sendMessage({message: "check check"}, (response) => {
        console.log(response.message);
    });
}
