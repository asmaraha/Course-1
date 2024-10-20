const lazyImages = document.querySelectorAll('.lazy-image');

const lazyLoad = (image) => {
    const src = image.getAttribute('data-src');
    if (!src) {
        return;
    }
    image.src = src;
    image.removeAttribute('data-src');
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const image = entry.target;
            lazyLoad(image);
            observer.unobserve(image);
        }
    });
}, {
    root: null,
    rootMargin: '0px 0px 50px 0px',
    threshold: 0
});

lazyImages.forEach(image => {
    observer.observe(image);
});
