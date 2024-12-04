document.querySelector('.phone__version').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('open');
    document.querySelector('.contact').classList.toggle('open');
})