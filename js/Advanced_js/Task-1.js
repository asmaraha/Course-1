let page = 1;
const contentDiv = document.getElementById('content');
const loadingIndicator = document.getElementById('loading');

function loadMoreContent() {
    for (let i = 0; i < 10; i++) {
        const newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerText = `Item ${(page - 1) * 10 + i + 1}`;
        contentDiv.appendChild(newItem);
    }
    loadingIndicator.style.display = 'none';
    page++;
}

const observer = new IntersectionObserver((entries) => {
    const lastEntry = entries[0];
    if (lastEntry.isIntersecting) {
        loadingIndicator.style.display = 'block';
        setTimeout(loadMoreContent, 1000);
    }
}, {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
});

loadMoreContent();

observer.observe(loadingIndicator);
