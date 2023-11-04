const { ContributionGraph } = require('github-contributions');

// Configurações para a animação da cobrinha
const config = {
  username: 'lucasmasternoob', // Substitua por seu nome de usuário do GitHub
  // Adicione outras configurações necessárias, como cores, tamanho, etc.
};

// Crie a instância da ContributionGraph
const contributionGraph = new ContributionGraph(config);

// Gere a animação
contributionGraph.generate().then((svg) => {
  const fs = require('fs');
  fs.writeFileSync('github-contribution-grid-snake.svg', svg);
});
