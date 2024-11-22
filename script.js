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

            const tamanho = `\nTamanho escolhido: ${selectedSize.value}`;

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
            const cobertura = `\nCoberturas escolhidas: ${selectedCoberturas.join(', ')}`;           
            
            // Coleta todas as frutas marcadas
            const selectedFrutas = [];
            const checkboxes1 = document.querySelectorAll('input[name="frutas"]:checked');
            checkboxes1.forEach(checkbox => {
                selectedFrutas.push(checkbox.value);
            });

            // Validação para garantir que pelo menos uma cobertura foi marcada
            if (selectedFrutas.length === 0) {
                alert('Por favor, selecione pelo menos uma fruta.');
                return;
            }

            // Cria a mensagem com as frutas selecionadas
            const frutas = `\nFrutas escolhidas: ${selectedFrutas.join(', ')}`;

             // Coleta todas as adicionais marcadas

            const selectedAdicionais = [];
            const checkboxes2 = document.querySelectorAll('input[name="adicionais"]:checked');
            checkboxes2.forEach(checkbox => {
                selectedAdicionais.push(checkbox.value);
            });

            // Validação para garantir que pelo menos uma cobertura foi marcada
            if (selectedAdicionais.length === 0) {
                alert('Por favor, selecione pelo menos uma fruta.');
                return;
            }

            // Cria a mensagem com as adicionais selecionadas
            const adicionais = `\nAdicionais escolhidos: ${selectedAdicionais.join(', ')}`;
            
           // Coleta todos os cremes marca
           const selectedCremes = [];
           const checkboxes3 = document.querySelectorAll('input[name="cremes"]:checked');
           checkboxes3.forEach(checkbox => {
               selectedCremes.push(checkbox.value);
           });
       
           // Validação para garantir que pelo menos uma cobertura foi marcada
           if (selectedCremes.length === 0) {
               alert('Por favor, selecione pelo menos um creme.');
               return;
           }
       
            // Cria a mensagem com as adicionais selecionadas
            const cremes = `\nCremes escolhidos: ${selectedCremes.join(', ')}`;

           // Coleta todos os extras marca
           const selectedExtras = [];
           const checkboxes4 = document.querySelectorAll('input[name="extras"]:checked');
           checkboxes4.forEach(checkbox => {
               selectedExtras.push(checkbox.value);
           });
       
           // Validação para garantir que pelo menos uma cobertura foi marcada
           if (selectedExtras.length === 0) {
               alert('Por favor, selecione pelo menos um creme.');
               return;
           }
       
            // Cria a mensagem com as adicionais selecionadas
            const extras = `\nExtras escolhidos: ${selectedExtras.join(', ')}`;

            // Substitua pelo número do WhatsApp desejado
            const phoneNumber = '5582988472733'; 

            // Crie o texto da mensagem
            const text = `Olá, meu nome é ${encodeURIComponent(name)}. ${encodeURIComponent(tamanho)}. \n${encodeURIComponent(cobertura)}. ${encodeURIComponent(frutas)}. ${encodeURIComponent(adicionais)}. ${encodeURIComponent(cremes)}. ${encodeURIComponent(extras)}`;

            // Construa o link do WhatsApp
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;

            // Redirecione para o WhatsApp
            window.open(whatsappURL, '_blank');
        });    

