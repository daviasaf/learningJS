//Atividade 1
const produtos = [
  { id: 1, nome: 'Notebook Gamer', categoria: 'Eletrônicos', preco: 7500, disponivel: true },
  { id: 2, nome: 'Mouse Sem Fio', categoria: 'Periféricos', preco: 150, disponivel: true },
  { id: 3, nome: 'Teclado Mecânico', categoria: 'Periféricos', preco: 400, disponivel: false },
  { id: 4, nome: 'Monitor UltraWide', categoria: 'Eletrônicos', preco: 2200, disponivel: true },
  { id: 5, nome: 'Webcam HD', categoria: 'Periféricos', preco: 250, disponivel: true },
  { id: 6, nome: 'Headset Gamer', categoria: 'Áudio', preco: 300, disponivel: false },
  { id: 7, nome: 'Smart TV 50"', categoria: 'Eletrônicos', preco: 3500, disponivel: true },
];


const produtosDiponiveis = produtos.filter((produto,chave,array)=>{
    if(produto.disponivel)return true
})


const produtosNome = produtos.map((produto,chave)=>{
    return produto.nome
})


const precoTodosProdutos = produtos.filter((produto)=>produto.disponivel).reduce((acumulador,valor)=>acumulador += valor.preco,0)

console.log(produtosDiponiveis)
console.log(produtosNome)
console.log(precoTodosProdutos)

//Atividade 2
const alunos = [
  { nome: 'Ana Silva', idade: 20, notas: [8, 7, 9, 6] },
  { nome: 'Bruno Costa', idade: 22, notas: [6, 5, 7, 8] },
  { nome: 'Carla Dias', idade: 21, notas: [9, 9, 10, 9] },
  { nome: 'Daniel Souza', idade: 19, notas: [5, 4, 6, 5] },
  { nome: 'Elisa Lima', idade: 20, notas: [7, 8, 7, 8] },
];
//                           Filtra alunos menos de 20 anos       Mapeia o nome deles
const alunosJovens = alunos.filter((aluno)=>aluno.idade<=20).map((aluno)=>aluno.nome)
//      Analisará cada aluno de uma vez
const alunosMedia = alunos.map((aluno)=>{
  //Soma as notas do aluno especifico
  const somaNota = aluno.notas.reduce((acc,nota)=>acc+nota,0)
  //Faz a média desse aluno
  const media = somaNota / aluno.notas.length
  //Retorna um objeto com o nome e a média do aluno
  return{
    nome:aluno.nome,
    idade:aluno.idade,
    media:media
  }
})
const aprovados = alunosMedia.filter((aluno)=>aluno.media>=7)
const somaIdade = aprovados.reduce((acc,aluno)=>acc+aluno.idade,0)
