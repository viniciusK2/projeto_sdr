novaTarefa = document.querySelector('[data-button]');

let valoresProdutos = [];

( () => {
    const criarTarefa = (evento) => {

    evento.preventDefault();
 
    const produto = document.querySelector('[data-input-produto]');
    const lista = document.querySelector('[data-lista]');
    const credito = document.querySelector('[data-input-credito]');
    const total = document.querySelector('[data-total]')
    const debito = document.querySelector('[data-input-debito]')
    const dinheiro = document.querySelector('[data-input-dinheiro]')
    
    const valorProduto = produto.value;
    const valorCredito = credito.value;
    const valorDebito = debito.value;
    const valorDinheiro = dinheiro.value;

    let resultadoCredito = parseFloat(valorCredito - ((valorCredito * 3.49) / 100)).toFixed(2);
    let resultadoDebito = parseFloat(valorDebito - ((valorDebito * 1.24) / 100)).toFixed(2);
    let resultadoDinheiro = parseFloat(valorDinheiro - ((valorDinheiro * 0) / 100)).toFixed(2);    

    let somaTotal = parseFloat(resultadoCredito) + parseFloat(resultadoDebito) + parseFloat(resultadoDinheiro);
    
    valoresProdutos.push(somaTotal);
    
    let soma = valoresProdutos.reduce((acc, current) => acc + current);

    const tarefa = document.createElement('li');

    const conteudo = `<p>${valorProduto} R$ ${valorCredito} ${valorDebito} ${valorDinheiro}</p>`;
    const conteudoCredito = `<p>Total: ${soma}</p>`;

    tarefa.classList.add("task")
    total.innerHTML = conteudoCredito;
    tarefa.innerHTML = conteudo;
    
    tarefa.appendChild(BotaoDeleta());
    lista.appendChild(tarefa);
    

    produto.value = " ";
    credito.value = " ";
    debito.value = " ";
    dinheiro.value = " ";

}


novaTarefa.addEventListener('click', criarTarefa);

const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button');

    botaoDeleta.innerHTML = 'Deletar';

    
    botaoDeleta.classList.add('button');
    botaoDeleta.addEventListener('click', deletarTarefa);

    return botaoDeleta;

}

const deletarTarefa = (evento) => {
    const botaoDeleta = evento.target;

    const tarefaCompleta = botaoDeleta.parentElement;

    tarefaCompleta.remove();
}
})();