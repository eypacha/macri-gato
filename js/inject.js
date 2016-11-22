var storage = chrome.storage.local;

function gatear(){
    var node,
        ni = document.createNodeIterator(document.documentElement, NodeFilter.SHOW_TEXT);

    while(node = ni.nextNode()) {
        var value = node.nodeValue
        if (value.match(/macri/i)) {
              node.nodeValue = value.replace(/(Mauri(cio)? )?Macri(?! Gato)/gi,'Macri Gato');
        }
    }
}

storage.get("automatic", function(result) {
    if (result.automatic || typeof result.automatic == "undefined"){
        gatear();
    }
});

