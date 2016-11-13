function gatear(){
    var node,
        ni = document.createNodeIterator(document.documentElement, NodeFilter.SHOW_TEXT);

    while(node = ni.nextNode()) {
        var value = node.nodeValue
        if (value.match(/macri/i)) {
            node.nodeValue = value.replace(/(Mauri(cio)? )?Macri Gato(?!(s| Gato))/gi,'Macri Gato').replace(/(M|m)acris(mo|ta)/gi,'$1acrigatis$2');
        }
    }
}

gatear();
