// Initialize lucide icons
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    
    // Open the first category by default
    toggleCategory('melting');
});

// Function to toggle equipment categories
function toggleCategory(categoryId) {
    const content = document.getElementById(`${categoryId}-content`);
    const chevron = document.getElementById(`${categoryId}-chevron`);
    
    if (content.classList.contains('active')) {
        content.classList.remove('active');
        chevron.style.transform = 'rotate(0deg)';
    } else {
        content.classList.add('active');
        chevron.style.transform = 'rotate(180deg)';
    }
}

// Prevent zooming on the webpage
window.addEventListener("wheel", (e) => {
    const isPinching = e.ctrlKey;
    if (isPinching) e.preventDefault();
}, { passive: false });

// Add scroll to section functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add responsive menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}
