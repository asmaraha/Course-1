document.querySelectorAll('.draggable').forEach(item => {
    item.addEventListener('dragstart', dragStart);
});

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    e.target.classList.add('dragging');
}

const dropZone = document.getElementById('dropZone');

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('drag-over');
});

dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('drag-over');
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('drag-over');

    const id = e.dataTransfer.getData('text/plain');
    const draggableElement = document.getElementById(id);
    dropZone.appendChild(draggableElement);

    draggableElement.classList.remove('dragging');
});
