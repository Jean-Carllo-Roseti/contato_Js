const form = document.getElementById('formulario');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNome = document.getElementById('nomeContato');
    const inputNumero = document.getElementById('numeroContato');

    let linha = '<tr class="linha-contao">'
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputNumero.value}</td>`;
    linha += `<td><button class="custom-button" onclick="excluirLinha()"></button></td>`;
    linha += '</tr>';

    linhas +=linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
});

function excluirLinha(button) {
    var row = button.closest('.linha-contato');
    if (row) {
        row.remove();
    }
}


function formatarNumero() {
    const inputNumero = document.getElementById('numeroContato');
    const numeros = inputNumero.value.replace(/\D/g, '');
    const formatado = numeros.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');

    if (numeros.length !== 11) {
        alert('Número inválido. Insira um número completo com DDD.');
        return;
    }

    inputNumero.value = formatado;
};
