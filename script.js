// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// WhatsApp Form Submit
document.querySelector('.kontak-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nama = this.querySelector('input[type="text"]').value;
    const wa = this.querySelector('input[type="tel"]').value;
    const pesan = this.querySelector('textarea').value;
    
    const waMessage = `Halo Taqadum Percetakan!%0A%0ANama: ${nama}%0ANo. WA: ${wa}%0A%0APesan: ${pesan}`;
    const waUrl = `https://wa.me/6287894036976?text=${waMessage}`;
    
    window.open(waUrl, '_blank');
    
    // Reset form
    this.reset();
    
    alert('Pesan berhasil dikirim ke WhatsApp! 🚀');
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Animate on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe layanan cards and portofolio items
document.querySelectorAll('.layanan-card, .portofolio-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});