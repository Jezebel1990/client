module.exports = {
  '*.{js,jsx,ts,tsx}': (filenames) => [
    `npm run lint --fix ${filenames.join(' ')}`, // Adiciona um espaço entre os arquivos
    `prettier --write ${filenames.join(' ')}`,   // Adiciona um espaço entre o comando e os arquivos
    `npm test -- --findRelatedTests ${filenames.join(' ')}`
  ]
};
