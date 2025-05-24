document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuButton = document.getElementById('menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    if (menuButton && sidebar) {
        menuButton.addEventListener('click', () => {
            sidebar.classList.toggle('expanded');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (sidebar && !sidebar.contains(e.target) && sidebar.classList.contains('expanded')) {
            sidebar.classList.remove('expanded');
        }
    });
});
