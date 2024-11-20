        // Seleciona o formulário usando a classe
        document.getElementsByClassName('whatsappForm')[0].addEventListener('submit', function (e) {
            e.preventDefault(); // Impede o envio padrão do formulário

            // Seleciona os elementos pelo índice 0, já que getElementsByClassName retorna uma coleção
            const name = document.getElementsByClassName('name')[0].value;

            // Verifica qual botão de rádio está selecionado
            const selectedSize = document.querySelector('input[name="tamanho"]:checked');

            // Validação para garantir que um tamanho foi selecionado
            if (!selectedSize) {
                alert('Por favor, selecione um tamanho.');
                return;
            }

            const tamanho = `Tamanho escolhido: ${selectedSize.value}`;

            // Coleta todas as coberturas marcadas
            const selectedCoberturas = [];
            const checkboxes = document.querySelectorAll('input[name="cobertura"]:checked');
            checkboxes.forEach(checkbox => {
                selectedCoberturas.push(checkbox.value);
            });

            // Validação para garantir que pelo menos uma cobertura foi marcada
            if (selectedCoberturas.length === 0) {
                alert('Por favor, selecione pelo menos uma cobertura.');
                return;
            }

            // Cria a mensagem com as coberturas selecionadas
            const cobertura = `Coberturas escolhidas: ${selectedCoberturas.join(', ')}`;           

            // Substitua pelo número do WhatsApp desejado
            const phoneNumber = '5582981377291'; 

            // Crie o texto da mensagem
            const text = `Olá, meu nome é ${encodeURIComponent(name)}. ${encodeURIComponent(tamanho)}. ${encodeURIComponent(cobertura)}`;

            // Construa o link do WhatsApp
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;

            // Redirecione para o WhatsApp
            window.open(whatsappURL, '_blank');
        });