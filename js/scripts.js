const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');
const toggleColors = document.getElementById('toggle-colors');
const rootStryles = document.documentElement.style;

toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (toggleIcon.src.includes('moon.svg')) {
        toggleIcon.src = 'assets/icons/sun.svg';
    } else {
        toggleIcon.src = 'assets/icons/moon.svg';
}
})

toggleColors.addEventListener('click', (e) => {
    rootStryles.setProperty('--primary-color', e.target.dataset.color);
})