document.addEventListener('DOMContentLoaded', function() {
    const leftArrow = document.getElementById('scroll-left');
    const rightArrow = document.getElementById('scroll-right');
    const container = document.getElementById('projects-container');

    leftArrow.addEventListener('click', function() {
        container.scrollBy({
            left: -300, // Adjust the scroll amount as needed
            behavior: 'smooth'
        });
    });

    rightArrow.addEventListener('click', function() {
        container.scrollBy({
            left: 300, // Adjust the scroll amount as needed
            behavior: 'smooth'
        });
    });
});
