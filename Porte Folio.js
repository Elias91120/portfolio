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

            // Ajoute l'animation de fondu
            setTimeout(() => {
                detailView.style.opacity = "1";
            }, 10);

            // Fermeture de la vue détaillée
            detailView.querySelector('.closeDetail').addEventListener('click', function() {
                detailView.style.opacity = "0";
                setTimeout(() => detailView.remove(), 300);
            });

            // Supprime une éventuelle ancienne vue détaillée
            const existingDetailView = document.querySelector('.detailView');
            if (existingDetailView) {
                existingDetailView.remove();
            }

            document.body.appendChild(detailView);
        });
    });
});
