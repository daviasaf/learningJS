const container = document.querySelector("#container")
const ps = document.querySelectorAll("p")

const estilosBody = getComputedStyle(document.body)
const backgroundColor = estilosBody.backgroundColor;

for(p of ps){
    p.style.backgroundColor = "rgb(17, 86, 102)"
    p.style.padding = "10px"
    p.style.color = "white"
}