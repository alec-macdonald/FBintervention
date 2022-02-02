
// //Event listeners
// document.addEventListener('keypress',(event) => {
//     var name = event.key;
//     var code = event.code;
//     alert(`Key pressed ${name} \r\n Key code value: ${code}`);
// }, false);
//
// document.addEventListener('click',(event) => {
//     var name = event.click;
//     var code = event.code2;
//     alert(`Click detected \r\n Click code: ${code}`);
// }, false);
//





//Examples for bear video 2.
// document.addEventListener('DOMContentLoaded', function() {
//
//     const bg = chrome.extension.getBackgroundPage()
//     Object.keys(bg.Fbs).forEach(function(url) {
//         const div = document.createElement('div')
//         div.textContent = `${url}: ${bg.Fbs[url]}`
//         document.body.appendChild(div)
//     })

//Examples for bear video 1.
    // document.querySelector('button').addEventListener('click', onclick, false)
    // function onclick () {
    //     chrome.tabs.query({currentWindow: true, active:true},
    //     function(tabs){
    //         chrome.tabs.sendMessage(tabs[0].id, 'Hello', setCount)
    //     })
    // }
    //
    // function setCount(res) {
    //     const div = document.createElement('div')
    //     div.textContent = `${res.count} Facebooks`
    //     document.body.appendChild(div)
    // }
// }, false)
//Last line needed for both.
