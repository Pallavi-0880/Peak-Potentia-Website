const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const allCards = document.querySelectorAll('.content-card');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetTab = btn.dataset.tab;

        // Remove active class from all buttons and contents
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        // Add active class to clicked button
        btn.classList.add('active');

        // Filter and show content
        if (targetTab === 'all') {
            document.getElementById('all').classList.add('active');
        } else {
            const targetContent = document.getElementById(targetTab);
            const grid = targetContent.querySelector('.content-grid');
            grid.innerHTML = '';

            allCards.forEach(card => {
                // console.log(card)
                if (card.dataset.type === targetTab) {
                    grid.appendChild(card.cloneNode(true));
                }
            });

            targetContent.classList.add('active');
        }
    });
});

// Card Click Handler
document.addEventListener('click', (e) => {
    const card = e.target.closest('.content-card');
    if (card) {
        const type = card.dataset.type;
        console.log(`Opening ${type} content...`);
        // Add your link/modal logic here
    }
});

// Load More Button
document.querySelector('.btn-load-more').addEventListener('click', () => {
    console.log('Loading more content...');
    // Add your load more logic here
});