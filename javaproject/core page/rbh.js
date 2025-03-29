// Add JavaScript functionality if needed
document.getElementById('subscribe-btn').addEventListener('click', function() {
    alert('Subscribe button clicked!');
});

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            themeIcon.src = '../images/sun.png';
        } else {
            themeIcon.src = '../images/moon.png';
        }
    });
});
