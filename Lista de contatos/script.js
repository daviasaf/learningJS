const nomeUsuario = document.querySelector("#nomeUsuario")
const telefoneUsuario = document.querySelector("#telefoneUsuario")
const inserir = document.querySelector("#inserir")
const tabela = document.querySelector("#tabela")
let contagem = 0

function criarTR(){
    const tr = document.createElement("tr")
    return tr
}

function criarTD(){
    const td = document.createElement("td")
    return td
}

function criarLinhaTabela(nome,celular,contagem, el){
    // Declarando variáveis
    const tr = criarTR()
    const tdContagem = criarTD()
    const tdNome = criarTD()
    const tdNumero = criarTD()
    const tdAcao = criarTD()

    //Criando botão excluir
    const botaoExcluir = document.createElement("button")
    botaoExcluir.id = "excluir"    
    botaoExcluir.innerHTML = "Excluir"

    // Colocando valores    
    tdContagem.innerHTML = contagem
    tdNome.innerHTML = nome
    tdNumero.innerHTML = celular
    tdAcao.appendChild(botaoExcluir)
    
    //Adicionando ao html
    tr.appendChild(tdContagem)
    tr.appendChild(tdNome)
    tr.appendChild(tdNumero)
    tr.appendChild(botaoExcluir)
    tr.appendChild(tdAcao)
    tabela.appendChild(tr)
}

// Pegando o click do usuário
document.addEventListener("click",(e)=>{
    const el = e.target
    // Se clicar no botão inserir
    if(el.id === "inserir"){
        //Caso não tenha nenhum valor, retorne
        if(!nomeUsuario.value && !telefoneUsuario.value) return;
        // Pega valores dos inputs
        let nome = nomeUsuario.value 
        let telefone = telefoneUsuario.value
        // Usa função criar tabela
        criarLinhaTabela(nome,telefone,contagem, el)
        contagem++
        //Redefine o input
        nomeUsuario.value = ""
        telefoneUsuario.value = ""
    }
    // Caso clique em excluir, exclui a tag tr selecionada
    if(el.id === "excluir"){
        el.closest("tr").remove()
        --contagem
    }

})
