var labelAutomatic = document.getElementById('modoAutomaticoLabel');
var automatic = document.getElementById('modoAutomatico');
var defaultAutomatico = "true";
var opcionAutomatica;
var storage = chrome.storage.local;

loadOptions();

function loadOptions() {
    opcionAutomatica = localStorage["automatic"];
    
	if (opcionAutomatica == undefined) {
		opcionAutomatica = defaultAutomatico;
	}
    if (opcionAutomatica == "false"){
        
        document.getElementById('modoAutomatico').checked = false;
        labelAutomatic.style.color = "red";
    }


}

automatic.addEventListener('change',function() {
    
    cambiarColor();
    
});

function saveOptions() {
    
	localStorage["automatic"] = automatic.checked;
    storage.set({'automatic': automatic.checked});
    
}

function eraseOptions() {
	localStorage.removeItem("automatic");
	location.reload();
}

function cambiarColor(){
    opcionAutomatica = automatic.checked;
    
    if(opcionAutomatica){
       
       labelAutomatic.style.color = "darkgreen";
        opcionAutomatica = true;
       
   }else {
       
       labelAutomatic.style.color = "red";
       opcionAutomatica = false;
   };
    
   saveOptions();
    
}