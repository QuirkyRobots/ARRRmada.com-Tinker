// reveal button to return to top of page
document.addEventListener("DOMContentLoaded", function() {
  let rtt = document.getElementById("return-to-top");    
  window.onscroll = function() {    
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    rtt.style.opacity = 1;
  } else { rtt.style.opacity = 0;}}
});

// copy text to clipboard and show message confirming copy
async function copyToClipboard() {
  const divContent = document.getElementById("codeOutput").innerText;
  try {
      await navigator.clipboard.writeText(divContent);
      const copiedText = document.getElementById('copiedText');
      copiedText.classList.remove('hidden'); 
      copiedText.classList.add('show');
      setTimeout(() => {
        copiedText.classList.remove('show');
        copiedText.classList.add('hidden');
      }, 2000);
  } catch (err) {
      console.error('Failed to copy text: ', err);
  }
}

// check a filename includes a image extension
function isImageFileName(filename) {
  var validExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg', '.webp'];
  
  for (var i = 0; i < validExtensions.length; i++) {
    if (filename.toLowerCase().endsWith(validExtensions[i])) {
      return true;
    }
  }  
  return false;
}; 

// Makes the site brighter for darker displays or bright rooms.

function toggleStyle() {
  document.body.classList.toggle('brighten');
}

document.addEventListener("keydown", e => { if (e.shiftKey && e.code === 'KeyL') toggleStyle(); });
document.addEventListener("click", e => { 
  if (e.target.closest('.light-mode')) { 
    toggleStyle(); 
    document.querySelectorAll('.light-mode').forEach(el => el.classList.toggle('lights-on'));
  }
});

// Mockup alert untill buttons are working.

window.onload = function() {
  const lastAlertTime = localStorage.getItem("lastAlertTime");
  const currentTime = new Date().getTime();
  const timeInterval = 60 * 60 * 1000; 

  if (lastAlertTime === null || currentTime - lastAlertTime >= timeInterval) {
    setTimeout(function() {
      alert("NEW FEATURES\n\nPress Shift + L to lighten the theme\n\nJS lazy load removed in favour of native lazy load, which is faster and means there's less JS, making it easier for the community to manage");
      localStorage.setItem("lastAlertTime", currentTime);
    }, 1000);
  }
};
