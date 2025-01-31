// JavaScript to handle any dynamic behavior
document.addEventListener('DOMContentLoaded', (event) => {
  console.log('Gaswerk Audioguide loaded');

  // Add delay to each guide container
  const guides = document.querySelectorAll('.guide');
  guides.forEach((guide, index) => {
    guide.style.animationDelay = `${0.8 + index * 0.2}s`;
  });

  // Add delay to each subpage container
  const subpages = document.querySelectorAll('.subpage');
  subpages.forEach((subpage, index) => {
    subpage.style.animationDelay = `${0.8 + index * 0.2}s`;
  });
});
