const elementos = [ 
    {tag: "p", texto:"Frase 1"}, // 0
    {tag: "div", texto: "Frase 2"}, // 1
    {tag: "footer", texto: "Frase 3"}, // 2
    {tag: "section", texto: "Frase 4"} // 3
]
const section = document.querySelector("section")
const div = document.createElement("div")


for (i=0;i<elementos.length;i++){
    const {tag, texto} = elementos[i]
    let tagsCriadas = document.createElement(tag)
    tagsCriadas.textContent = texto
    div.appendChild(tagsCriadas)
}
section.appendChild(div)
