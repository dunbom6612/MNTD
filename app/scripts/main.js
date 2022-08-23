const heading = document.getElementById('hero__heading');
const hero = document.getElementById('hero');
hero.addEventListener('scroll', () => {
  console.log('scroll');
  let scrollTop = window.pageYOffset || hero.scrollTop;
  console.log('scrollTop', scrollTop);
  console.log('heading', heading);
  heading.style.top = 40 + scrollTop * 0.05 + '%';
});
