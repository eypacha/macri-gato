function gatear(){
    var node,
        ni = document.createNodeIterator(document.documentElement, NodeFilter.SHOW_TEXT);

    while(node = ni.nextNode()) {
        var value = node.nodeValue
        if (value.match(/macri/i)) {
            
            node.nodeValue = value.replace(/(M|m)acris(mo|ta)/gi,'$1acrigatis$2').replace(/(Mauri(cio)? )?Macri (Gato |gato )?/g,'Macri Gato ');
        }
    }
}

chrome.storage.local.get("automatic", function(result) {
    if (result.automatic || typeof result.automatic == "undefined"){
        gatear();
    }
});