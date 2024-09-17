function filterSelection(category) {
    const items = document.querySelectorAll('.Portfolio-content');
    const buttons = document.querySelectorAll('.portfolio-filter button');

    buttons.forEach(button => button.classList.remove('active')); 

    const activeButton = Array.from(buttons).find(button => button.textContent.toLowerCase().includes(category));
    if (activeButton) activeButton.classList.add('active'); 

    if (category === 'all') {
        items.forEach(item => item.style.display = 'flex');
    } else {
        items.forEach(item => {
            if (item.classList.contains(category)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    }
}

filterSelection('all');

