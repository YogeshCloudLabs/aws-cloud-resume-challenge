/**
 * CLOUD RESUME PORTFOLIO - CORE JAVASCRIPT
 * Aspiring AWS Cloud & DevOps Engineer - Yogesh Dhotre
 */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMobileMenu();
    initHeaderScroll();
    initVisitorCounter();
});

/**
 * 1. THEME SWITCHER (LIGHT/DARK MODE)
 */
function initTheme() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
    }

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-theme');

        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
}

/**
 * 2. MOBILE MENU
 */
function initMobileMenu() {
    const hamburger = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!hamburger || !navMenu) return;

    hamburger.addEventListener('click', () => {
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';

        hamburger.setAttribute('aria-expanded', !isExpanded);
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.setAttribute('aria-expanded', 'false');
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

/**
 * 3. HEADER SHADOW
 */
function initHeaderScroll() {
    const header = document.getElementById('header');

    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

/**
 * 4. VISITOR COUNTER
 */
async function initVisitorCounter() {

    const counterElement = document.getElementById("visitor-count");

    if (!counterElement) return;

    const API_ENDPOINT =
        "https://8epa45cjhi.execute-api.us-east-1.amazonaws.com/visitor";

    counterElement.textContent = "Loading...";

    try {

        const response = await fetch(API_ENDPOINT);

        if (!response.ok) {
            throw new Error("API request failed");
        }

        const data = await response.json();

        counterElement.textContent =
            data.visitorCount.toLocaleString();
    } catch (error) {

        console.error("Visitor Counter Error:", error);

        counterElement.textContent = "Unavailable";
    }
}