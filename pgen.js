var send="";
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
    pmine()

    });

function pmine(sep){
    var output=[]
    var coll=document.getElementsByTagName("script");
    var payloads="";
    for(elem of coll){
        if(elem.innerHTML!="")
            payloads+=elem.innerHTML;
        else{
                var url="https://api.codetabs.com/v1/proxy/?quest="+elem.src
            $.get(url,(data)=>{payloads+=data})
        }
    }
$( document ).ajaxStop(function(){
    var res = payloads.match(/([a-z0-9-_]){1,100}/gi);
    output=Array.from(new Set(res))
    send=output.toString();
    chrome.runtime.sendMessage(send);
});
}
