color = chrome.storage.local.get('gh_duration_color')
addbutton = `document.getElementsByTagName("h2")[2].innerHTML += '<span class="label bg-`
addbutton.concat(color,' text-uppercase">')

username = window.location.href.split('/')[3]
a = httpget(urltype)
function httpGet(urltype,username)
{
    if(urltype == 1){
        url = "http:// "
    }
    else{
        url = "http://"
    }
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

addbutton.concat(a,"일째 불타는중 🔥</span>'")

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete' && tab.active) {
    document.getElementsByTagName("h2")[2].innerHTML += addbutton
    }
})