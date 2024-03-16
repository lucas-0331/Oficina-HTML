document.addEventListener('DOMContentLoaded', function() {
    const copyButtons = document.querySelectorAll('.copy-button');

    copyButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const container = this.parentElement;
            const codeElement = container.querySelector('.copyable-code');

            const tempTextArea = document.createElement('textarea');
            tempTextArea.value = codeElement.innerText;

            document.body.appendChild(tempTextArea);

            tempTextArea.select();
            tempTextArea.setSelectionRange(0, 99999);

            document.execCommand('copy');

            document.body.removeChild(tempTextArea);

            button.innerHTML = '<img src="img/icons8-check-48.png" alt="Icone Copiado" class="button-icon"><span>Código Copiado</span>';
            
            setTimeout(function() {
                button.innerHTML = '<img src="img/icons8-copy-48.png" alt="Icone Copiar" class="button-icon"><span>Copiar Código</span>';
            }, 4000);
        });
    });
});
