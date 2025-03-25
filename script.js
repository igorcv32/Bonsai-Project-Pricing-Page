document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        // Remove active class from all other items
        document.querySelectorAll('.faq-item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        // Toggle active class on clicked item
        item.classList.toggle('active');
    });
});