export const getImageUrl = (path) => {
  // Valida se o caminho é uma string não vazia
  if (typeof path !== 'string' || path.trim() === '') {
      console.warn('Caminho da imagem inválido. Usando imagem padrão.');
      path = 'default.png'; // Define uma imagem padrão
  }
  const test = '/assets/';
  const test2 = ' https://heitor-portfolio.vercel.app';
  return new URL(test+path, test2).href;
};