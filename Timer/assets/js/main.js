function dataemsegundos(segundo){
    const data = new Date(segundo * 1000)
    return data.toLocaleTimeString("pt-BR",{
        hour12:false,
        timeZone:"GMT"
    })
}
const relogio = document.querySelector("#relogio")
const iniciar = document.querySelector("#iniciar")
const pausar = document.querySelector("#pausar")
const zerar = document.querySelector("#zerar")
let segundos = 0;
let timer;

function iniciarRelogio(){
        timer = setInterval(() => {
        segundos++
        relogio.textContent = dataemsegundos(segundos)
    }, 1000);
}

iniciar.addEventListener("click",()=>{
    clearInterval(timer)
    iniciarRelogio()
    relogio.style.color = "green"
})
pausar.addEventListener("click",()=>{
    clearInterval(timer)
    relogio.style.color = "red"
})
zerar.addEventListener("click",()=>{
    clearInterval(timer)
    segundos = 0;
    relogio.textContent = "00:00:00"
    relogio.style.color = "black"
})