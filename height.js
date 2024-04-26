const setHeight = () => {
  let vh = window.innerHeight * 0.01;
  let vw = window.innerWidth;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setHeight()

window.addEventListener('resize', () => setHeight())