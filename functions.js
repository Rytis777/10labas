// Select the toggle button and body element
const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Check localStorage for saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.add(savedTheme);
  updateButtonText();
}

// Add event listener for the toggle button
toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  
  // Save the current theme to localStorage
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark-mode");
  } else {
    localStorage.setItem("theme", "");
  }

  updateButtonText();
});

// Update button text based on the current theme
function updateButtonText() {
  if (body.classList.contains("dark-mode")) {
    toggleButton.textContent = "Switch to Light Mode";
  } else {
    toggleButton.textContent = "Switch to Dark Mode";
  }
}
