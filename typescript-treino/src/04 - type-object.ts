const objetoA: {
  readonly chaveA: string; // readonly diz que o valor do atributo é imutável. read only = leia apenas. 
  chaveB: string;
  chaveC?: string; //a interrogação diz que essa chave é opcional
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveB = 'Outro valor';
objetoA.chaveC = 'Novo valor';
objetoA.chaveD = 'Nova chave';

console.log(objetoA);

// Module mode
export default 1;