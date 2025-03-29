document.addEventListener('DOMContentLoaded', () => {
    const dropdownBtns = document.querySelectorAll('.dropdown-btn');

    dropdownBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const dropdownContent = btn.nextElementSibling;
            dropdownContent.classList.toggle('show');
        });
    });
});
