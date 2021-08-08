export function criaErro(): never { //tipo de função que retorna um erro.
  throw new Error('Erro qualquer');
}

criaErro();

// Module mode
export default 1;