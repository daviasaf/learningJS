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