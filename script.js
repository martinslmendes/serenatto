const darkMode = document.querySelector('#dark-mode');
const body = document.querySelector('body');

darkMode.addEventListener('change', () => {
    const mode = darkMode.checked ? 'dark' : 'light';
    body.setAttribute('data-bs-theme', mode);
});