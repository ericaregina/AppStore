document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();  

    
    const nome = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('phone').value;
    const endereco = document.getElementById('address').value;
    const bairro = document.getElementById('neighborhood').value;
    const cidade = document.getElementById('city').value;
    const estado = document.getElementById('state').value;
    const numeroCartao = document.getElementById('card-number').value;
    const dataExpiracao = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;

    
    if (!nome || !email || !telefone || !endereco || !bairro || !cidade || !estado || !numeroCartao || !dataExpiracao || !cvv) {
        alert('Todos os campos são obrigatórios!');
        return;
    }

    const message = `
        Olá ${nome},<br>
        Seu pagamento foi processado com sucesso!<br>
        Detalhes do pagamento:<br>
        - Nome: ${nome}<br>
        - E-mail: ${email}<br>
        - Telefone: ${telefone}<br>
        - Endereço: ${endereco}, ${bairro}, ${cidade} - ${estado}<br>
        - Cartão: ${numeroCartao}<br>
        Agradecemos pela sua compra!`;

    document.getElementById('message').innerHTML = message;
});
