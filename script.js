// Add the animation class to the loader element
function showLoader() {
  var loader = document.querySelector('.loader');
  loader.classList.add('zoom-animation');
}

// Remove the animation class from the loader element
function hideLoader() {
  var loader = document.querySelector('.loader');
  loader.classList.remove('zoom-animation');
}

// Example usage
showLoader();

// Simulate a delay and hide the loader after 3 seconds
setTimeout(hideLoader, 3000);
