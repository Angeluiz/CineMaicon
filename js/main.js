$(document).ready(function() {

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(__) _____-____'
    }); 

});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
        }

        form.classList.add('was-validated')
    }, false)
    })
})()

document.addEventListener('DOMContentLoaded', function() {
    const MensagemBemVindo = new bootstrap.Modal('#mensagem-bemvindo');
    setTimeout(function(){
        MensagemBemVindo.show();
    }, 2000)
})

