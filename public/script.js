document.getElementById('showMenu').addEventListener('click', () => {
    window.location.href = '#menu';
});

document.querySelectorAll('.buy-now').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.getAttribute('data-product');
        document.getElementById('product').value = product;
        window.location.href = `formulario-pagamento.html?produto=${encodeURIComponent(product)}`;
    });
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const product = document.getElementById('product').value.trim();

    if (name && email && message && product) {
        document.getElementById('responseMessage').textContent = `Obrigado pela mensagem, ${name}! Responderei em breve.`;
        document.getElementById('responseMessage').style.color = 'green';

        fetch('/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message, product })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Email enviado com sucesso:', data);
        })
        .catch(error => {
            console.error('Erro ao enviar email:', error);
            document.getElementById('responseMessage').textContent = 'Erro ao enviar o email.';
            document.getElementById('responseMessage').style.color = 'red';
        });
    } else {
        document.getElementById('responseMessage').textContent = 'Por favor, preencha todos os campos.';
        document.getElementById('responseMessage').style.color = 'red';
    }
    document.getElementById('contactForm').reset();
});
