var matches = document.documentElement.innerHTML.match(/Macri/);

if(matches != null){
    
    gatear();
}

function gatear(){
    var elementos = document.getElementsByTagName('*');

    for (var i = 0; i < elementos.length; i++) {
        var elemento = elementos[i];

        for (var j = 0; j < elemento.childNodes.length; j++) {
            var node = elemento.childNodes[j];

            if (node.nodeType === 3) {
               var original = node.nodeValue;
               var sinceramiento = original.replace(/(Mauri(cio)? )?Macri(?! Gato)/g,'Macri Gato');

                if (sinceramiento !== original) {
                    elemento.replaceChild(document.createTextNode(sinceramiento), node);
                }
            }
        }
    }
}