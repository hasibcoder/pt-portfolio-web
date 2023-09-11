// script.js

const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check the user's local storage for the preferred mode
if (localStorage.getItem('darkMode') === 'enabled') {
    enableDarkMode();
}

darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

function enableDarkMode() {
    body.classList.add('dark-mode');
    colorContainer.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
}

function disableDarkMode() {
    body.classList.remove('dark-mode');
    colorContainer.classList.remove('dark-mode');
    localStorage.setItem('darkMode', null);
}