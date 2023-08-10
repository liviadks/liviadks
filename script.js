document.getElementById('calcular').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var numeroPessoas = parseInt(document.getElementById('numeroPessoas').value);
    var tempoPasseio = parseInt(document.getElementById('tempoPasseio').value);
    
    var valorGas = (tempoPasseio / 5) * 10 * 15;
    var valorTaxa = numeroPessoas * 20;
    var valorTotal = valorGas + valorTaxa;
    
    document.getElementById('resultado').textContent = 'O valor total é de R$' + valorTotal.toFixed(2);
  });
  