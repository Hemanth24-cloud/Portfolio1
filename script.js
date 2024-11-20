// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark Mode Toggle
const toggleButton = document.getElementById('toggle-button');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    document.documentElement.style.setProperty('--background-color', '#333');
    document.documentElement.style.setProperty('--text-color', '#ffffff');
    toggleButton.textContent = 'Switch to Light Mode';
    toggleButton.classList.remove('light-mode');
  } else {
    document.documentElement.style.setProperty('--background-color', '#ffffff');
    document.documentElement.style.setProperty('--text-color', '#000000');
    toggleButton.textContent = 'Switch to Dark Mode';
    toggleButton.classList.add('light-mode');
  }
});


// Skill Bar Animation
window.addEventListener('scroll', () => {
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        const skillLevel = bar.getAttribute('data-skill');
        if (bar.getBoundingClientRect().top < window.innerHeight - 50) {
            bar.style.width = skillLevel + '%';
        }
    });
});
