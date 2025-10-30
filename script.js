async function buscarCotacao() {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL');
    const data = await response.json();
    const cotacao = data.USDBRL;

    document.getElementById('valor').textContent = `R$ ${parseFloat(cotacao.bid).toFixed(2)}`;
    document.getElementById('maior').textContent = `R$ ${parseFloat(cotacao.high).toFixed(2)}`;
    document.getElementById('menor').textContent = `R$ ${parseFloat(cotacao.low).toFixed(2)}`;
    document.getElementById('atualizacao').textContent = `Última atualização: ${new Date().toLocaleTimeString()}`;
  } catch (error) {
    console.error("Erro ao buscar cotação:", error);
    document.getElementById('valor').textContent = "Erro ao carregar dados";
  }
}

document.getElementById('atualizar').addEventListener('click', buscarCotacao);

// Buscar cotação ao carregar a página
buscarCotacao();
