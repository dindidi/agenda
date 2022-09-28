const form = document.getElementById('form');
let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputDigiteNome = document.getElementById('digite-nome');
    const inputDigiteTelefone = document.getElementById('digite-telefone');

    let linha = '<tr>';
    linha += `<td>${inputDigiteNome.value}<td>`;
    linha += `${inputDigiteTelefone.value}`;
    linha += `</tr>`;
    linhas += linha;


    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputDigiteNome.value = '';
    inputDigiteTelefone.value = '';


})





