// Service cards hover effect enhancement
document.addEventListener('DOMContentLoaded', function() {
  const serviceCards = document.querySelectorAll('.service-card');
  
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.querySelector('.card-icon').style.transform = 'scale(1.1)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.querySelector('.card-icon').style.transform = 'scale(1)';
    });
  });
  
  // Smooth scroll for learn more buttons
  const learnMoreButtons = document.querySelectorAll('.btn-learn-more');
  
  learnMoreButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      // This would be replaced with actual navigation logic
      console.log('Learn more clicked for: ' + this.parentElement.querySelector('h3').textContent);
    });
  });
});