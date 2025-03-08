document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("startButton");
    const startMenuContent = document.querySelector(".start-menu-content");
  
    startButton.addEventListener("click", function() {
      startMenuContent.style.display = (startMenuContent.style.display === "block") ? "none" : "block";
    });
  });
  