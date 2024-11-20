document.getElementById('whatsappForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    // Obtenha os dados do formulário
    const name = document.getElementById('name').value;
    const message = document.getElementByClassName('tamanho').value;

    // Substitua pelo número do WhatsApp desejado (apenas números, sem "+" ou espaços)
    const phoneNumber = '5582981377291'; 

    // Crie o texto da mensagem
    const text = `Olá, meu nome é ${encodeURIComponent(name)}. ${encodeURIComponent(message)}`;

    // Construa o link do WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;

    // Redirecione para o WhatsApp
    window.open(whatsappURL, '_blank');
});