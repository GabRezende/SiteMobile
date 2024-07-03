document.querySelectorAll('.slide').forEach(slide => {
    slide.addEventListener('click', function(event) {
        const description = this.querySelector('.description');
        
        // Mostra a descrição
        if (!description.classList.contains('visible')) {
            description.classList.remove('hidden');
            description.classList.add('visible');
        } else {
            // Esconde a descrição
            description.classList.remove('visible');
            description.classList.add('hidden');
        }
        
        // Evita que o evento de clique se propague para a imagem
        event.stopPropagation();
    });
});

