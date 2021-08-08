let x = 10; // eslint-disable-line
x = 0b1010;
const y = 10; // o const será um tipo literal, você não poderá inferir outro tipo a ele.
const a = 100; // eslint-disable-line

const pessoa = {
  nome: 'Luiz' as const,
  sobrenome: 'Miranda',
};

export function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}
console.log(escolhaCor('Vermelho'), pessoa, x, y);
