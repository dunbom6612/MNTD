const heading = document.getElementById('hero__heading');
const hero = document.getElementById('hero');
window.addEventListener('scroll', () => {
  console.log('scroll');
  let scrollTop = window.scrollY ;
  console.log('scrollTop', scrollTop);
  console.log('heading', heading);
  heading.style.top = 40 + scrollTop * 0.05 + '%';
});
