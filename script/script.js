(function() {
    const cep = document.querySelector('#cep')

    const camposEdit = (result) => {
        for(campo in result) {
            // Se em todo o document existir algum id == ao campo
            if(document.querySelector('#'+campo)) {
                // este id.value recebe o valor de campo(campo == atributo(obj))
                document.querySelector('#'+campo).value = result[campo]
            }
        }
    } 

    cep.addEventListener('blur', (e) => {
        let cepLimpo = cep.value.replace('-', '')
        const options = {
            method: 'GET', // metodo padrão de captura de dados.
            mode: 'cors', // cors == avisa que a comunicação de servidores é diferente.
            cache: 'default' 
        } // options define algumas informações de configuração entre diferentes servidores para gerar mais clareza na comunicação.

        fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`, options)
        .then(response => {response.json()
            .then(responseCep => camposEdit(responseCep))
        })        
        .catch(e => console.error('Algo deu errado' + e.message))
   })

})()
