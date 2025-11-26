// ======================= NAVBAR TOGGLE & ACTIVE LINKS =======================
// Select the navigation toggle (hamburger) button
const navToggle = document.querySelector('.nav-toggle'); // Get element with class 'nav-toggle'
// Select the nav links container
const navLinks = document.querySelector('.nav-links'); // Get element with class 'nav-links'
// Select all individual nav link anchors
const navItems = document.querySelectorAll('.nav-link'); // Get all elements with class 'nav-link'

// If the nav toggle button exists in the DOM
if (navToggle) { // Check for navToggle existence
    // Add a click event listener to the nav toggle button
    navToggle.addEventListener('click', () => { // On clicking toggle
        // Toggle the 'open' class on nav links container for mobile menu
        navLinks.classList.toggle('open'); // Add or remove 'open' class to show/hide menu
    }); // End click event handler
} // End if guard for navToggle

// For each nav link item
navItems.forEach(link => { // Loop through each nav link
    // Add a click event listener to each link
    link.addEventListener('click', () => { // On clicking a nav link
        // Remove 'open' class from nav links container (close menu on mobile)
        navLinks.classList.remove('open'); // Collapse mobile menu
    }); // End click handler
}); // End loop through navItems

// ======================= SCROLL-ACTIVE NAV LINK HIGHLIGHT =======================
// Select all sections that have IDs used in navigation
const sections = document.querySelectorAll('section[id]'); // Get all section elements with an id attribute

// Define a function to update the active nav link based on scroll position
function updateActiveNav() { // Declare function
    // Get scroll position of the page from top
    const scrollY = window.pageYOffset; // Vertical scroll offset

    // Loop through each section
    sections.forEach(section => { // Iterate sections
        // Get section height
        const sectionHeight = section.offsetHeight; // Height of current section
        // Get distance from top of page to top of section minus some offset
        const sectionTop = section.offsetTop - 120; // Top offset adjusted for header
        // Get current section id
        const sectionId = section.getAttribute('id'); // ID attribute string

        // Select nav link corresponding to this section using its href
        const currentNavLink = document.querySelector(`.nav-link[href="#${sectionId}"]`); // Nav link for this section

        // Check if current scroll position is within this section
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { // If in section range
            if (currentNavLink) { // If nav link exists
                // Add 'active' class to highlight this nav link
                currentNavLink.classList.add('active'); // Highlight link
            } // End if for currentNavLink
        } else { // If not within this section range
            if (currentNavLink) { // Check nav link exists
                // Remove 'active' class to un-highlight nav link
                currentNavLink.classList.remove('active'); // Remove highlight
            } // End if for currentNavLink
        } // End if-else
    }); // End loop through sections
} // End function updateActiveNav

// Attach scroll event listener to window to update active nav link on scroll
window.addEventListener('scroll', updateActiveNav); // On scroll, call updateActiveNav

// Run updateActiveNav once on load to set initial state
updateActiveNav(); // Initialize active link highlighting

// ======================= SCROLL TO TOP BUTTON LOGIC =======================
// Select the scroll-top button element
const scrollTopBtn = document.querySelector('.scroll-top'); // Get element with class 'scroll-top'

// Define a function to toggle visibility of scroll-top button
function handleScrollTopVisibility() { // Declare function
    // If user has scrolled down more than 400px from top
    if (window.pageYOffset > 400) { // Check scroll offset threshold
        // Add 'visible' class to show the button
        scrollTopBtn.classList.add('visible'); // Show scroll-top button
    } else { // If user is near top
        // Remove 'visible' class to hide the button
        scrollTopBtn.classList.remove('visible'); // Hide scroll-top button
    } // End if-else
} // End function handleScrollTopVisibility

// Attach scroll event listener to window to show/hide scroll-top button
window.addEventListener('scroll', handleScrollTopVisibility); // On scroll, call handleScrollTopVisibility

// Add click handler on scroll-top button if it exists
if (scrollTopBtn) { // Check button exists
    scrollTopBtn.addEventListener('click', () => { // Add click event listener
        // Smoothly scroll the window back to the top
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top with smooth behavior
    }); // End click handler
} // End if for scrollTopBtn

// ======================= OPTIONAL: HEADER SHADOW ON SCROLL =======================
// Select the site header element
const header = document.querySelector('.site-header'); // Get element with class 'site-header'

// Define function to add subtle visual change when scrolling
function handleHeaderOnScroll() { // Declare function
    // If user scrolled at least 20px from top
    if (window.pageYOffset > 20) { // Check scroll threshold
        // Add a class to header to visually emphasize it
        header.classList.add('scrolled'); // Add 'scrolled' class
    } else { // Otherwise if near top
        // Remove the class so header looks lighter
        header.classList.remove('scrolled'); // Remove 'scrolled' class
    } // End if-else
} // End function handleHeaderOnScroll

// Attach scroll event to update header style
window.addEventListener('scroll', handleHeaderOnScroll); // On scroll, call handleHeaderOnScroll

// Call handleHeaderOnScroll initially on page load
handleHeaderOnScroll(); // Initialize header state
