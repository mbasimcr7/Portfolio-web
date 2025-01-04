document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("slide-in");
                    observer.unobserve(entry.target); // Stop observing once the animation is triggered
                }
            });
        },
        { threshold: 0.2 } // Trigger when 20% of the card is visible
    );

    cards.forEach(card => observer.observe(card));
});
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70, // Adjust for fixed navbar height
          behavior: 'smooth'
        });
      }
    });
  });
  
