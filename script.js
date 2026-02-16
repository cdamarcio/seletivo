document.addEventListener('DOMContentLoaded', () => {
    const inputBusca = document.getElementById('search');
    const selectStatus = document.getElementById('status');
    const cards = document.querySelectorAll('.card');

    function filtrar() {
        const termoBusca = inputBusca.value.toLowerCase();
        const statusFiltro = selectStatus.value;

        cards.forEach(card => {
            const titulo = card.querySelector('h3').innerText.toLowerCase();
            const badge = card.querySelector('.badge').innerText.toLowerCase();
            
            // Lógica de busca por texto
            const correspondeTexto = titulo.includes(termoBusca);
            
            // Lógica de busca por status (Aberto/Encerrado/etc)
            let correspondeStatus = true;
            if (statusFiltro !== 'todos') {
                correspondeStatus = badge.includes(statusFiltro);
            }

            // Exibe ou esconde o card
            if (correspondeTexto && correspondeStatus) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Ouvintes de eventos
    inputBusca.addEventListener('input', filtrar);
    selectStatus.addEventListener('change', filtrar);
});