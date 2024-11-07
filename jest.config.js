module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.jest.json' }], // Ajuste a configuração do ts-jest aqui
  },
  moduleNameMapper: {
    '^styled-components': 'styled-components/dist/styled-components.browser.cjs.js', // Correção da sintaxe do mapper
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'], // Ignora diretórios do Next.js e node_modules nos testes
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'], // Arquivo de setup para inicializações de testes

  collectCoverage: true, // Habilita a coleta de cobertura de testes
  collectCoverageFrom: [
    'src/**/*.ts(x)?', // Coleta cobertura de arquivos .ts e .tsx
    '!src/app/**', // Ignora a pasta app
    '!src/lib/registry.tsx', // Ignora o arquivo registry.tsx
    '!src/types/**',
    '!src/**/stories.tsx',
    '!src/styles/**'
  ],
  modulePaths: ['<rootDir>/src/'], // Permite importar módulos a partir de 'src' sem precisar de caminhos relativos
};
