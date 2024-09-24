const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');

smoothScrollLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    // const targetTop = targetElement.offsetTop;
    // window.scrollTo({ top: targetTop, behavior: 'smooth' });
    targetElement.scrollIntoView({
      behavior: 'smooth'
    })
  });
});