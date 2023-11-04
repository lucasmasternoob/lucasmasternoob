const generate = require('github-contributions');

generate().then(svg => {
  const fs = require('fs');
  fs.writeFileSync('github-contribution-grid-snake.svg', svg);
});
