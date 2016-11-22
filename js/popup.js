chrome.tabs.executeScript(null,{code:"gatear()"});

document.querySelector('#go-to-options').addEventListener('click',function() {
  if (chrome.runtime.openOptionsPage) {
    // New way to open options pages, if supported (Chrome 42+).
    chrome.runtime.openOptionsPage();
  } else {
    // Reasonable fallback.
    window.open(chrome.runtime.getURL('../settings.html'));
  }
   
});