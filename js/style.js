document.getElementById('arquivoInput').addEventListener('change', function() {
    var nomeArquivo = this.files[0] ? this.files[0].name : 'Nenhum arquivo selecionado';
    document.getElementById('nomeArquivo').textContent = nomeArquivo;
});