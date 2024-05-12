const url_cep = 'http://viacep.com.br/ws/{cep}/json/'
function atualizarEndereco() {
    cep = document.getElementById('cep')
    valor_cep = cep.value.replace(/[.-]/g, '')
    endereco = document.getElementById('endereco')

    url_cep_preenchido = url_cep.replace('{cep}', valor_cep)
    fetch(url_cep_preenchido)
        .then(function() {
            
        })
    //    .catch()
    // endereco.innerHTML = `Seu endereço: ${valor_cep}`
}