// Function to open the popup modal
function openModal() {
    document.getElementById("popupModal").style.display = "flex";
}

// Function to close the popup modal
function closeModal() {
    document.getElementById("popupModal").style.display = "none";
}

// Function triggered when buttons inside the popup are clicked
function buttonAction(buttonName) {
    alert(buttonName + " clicked!");
}

// Ensure the script runs after the document is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    console.log("Custom.js loaded successfully");
});
