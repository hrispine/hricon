document.addEventListener("DOMContentLoaded", function() {
  const splashScreen = document.getElementById("splash-screen");

  setTimeout(function() {
    splashScreen.classList.add("fade-out");
  }, 3000);
    
  setTimeout(function() {
    splashScreen.classList.add("hide");
  }, 4000);
});
