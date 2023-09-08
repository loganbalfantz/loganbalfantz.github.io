// Wait for the document to load
document.addEventListener("DOMContentLoaded", function() {
  // Wait 5 seconds to simulate a "loading" period
  setTimeout(function() {
    // Hide the loading screen
    document.getElementById("loading-screen").style.display = "none";

    // Show the landing page
    const landingPage = document.getElementById("landing-page");
    landingPage.classList.remove("hidden");
    landingPage.style.opacity = 0;
    
    // Fade in transition for the landing page
    setTimeout(function() {
      landingPage.style.opacity = 1;
    }, 100); // Wait 100 milliseconds for the "display: block" to take effect
    
  }, 5000); // 5000 milliseconds = 5 seconds
});
