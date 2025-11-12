const bilder = document.querySelectorAll('.zoom-img');

bilder.forEach(bild => {
  bild.addEventListener('mouseenter', () => {
    bild.style.transform = 'scale(1.2)';
  });

  bild.addEventListener('mouseleave', () => {
    bild.style.transform = 'scale(1)';
  });
});
