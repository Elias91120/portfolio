document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.myCard');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            const detailText = this.getAttribute('data-detail');
            const detailView = document.createElement('div');
            detailView.classList.add('detailView');
            detailView.innerHTML = `
                <div class="detailContent">
                    <span class="closeDetail">&times;</span>
                    <p>${detailText}</p>
                </div>
            `;

            // Fermeture de la vue détaillée
            detailView.querySelector('.closeDetail').addEventListener('click', function() {
                detailView.remove();
            });

            // Assurez-vous qu'une seule vue détaillée peut être ouverte à la fois
            const existingDetailView = document.querySelector('.detailView');
            if (existingDetailView) {
                existingDetailView.remove();
            }

            document.body.appendChild(detailView);
        });
    });
});
