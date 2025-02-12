export const getImageUrl = (path) => {
  // Valida se o caminho é uma string não vazia
  if (typeof path !== 'string' || path.trim() === '') {
      console.warn('Caminho da imagem inválido. Usando imagem padrão.');
      path = 'default.png'; // Define uma imagem padrão
  }
  const test = '/assets/';
  return new URL(test+path, import.meta.url).href;
};