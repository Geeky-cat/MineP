window.onload=()=>{
    document.getElementById("mine").addEventListener("click", get);
    document.getElementById("cpy").addEventListener("click", ()=>{
    document.querySelector("textarea").select();
    document.execCommand('copy');
});
}
function get(){
    document.getElementById('mine').disabled=true;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, "pmine");
      });
      chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            document.getElementById('mine').disabled=false;
            request=request.split(',').join('\n');
            document.getElementById("tarea").value=request;
        });
        
}