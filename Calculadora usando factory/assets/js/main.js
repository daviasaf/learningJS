function criaCalculadora(){
    return{
        display: document.querySelector(".display"),
        btnDel: document.querySelector("btn-del"),
        btnEq: document.querySelector("btn-eq"),
        

        inicia(){
            this.cliqueBotoes();
            this.pressionaEnter();
        },
        pressionaEnter(){
            this.display.addEventListener("keyup",(e)=>{
                if(e.keyCode == 13){
                    this.realizaConta()
                }
            })
        },
        cliqueBotoes(){
            document.addEventListener("click",(e)=>{
                const el = e.target

                if(el.classList.contains("btn-num")){
                    this.btnParaDisplay(el.textContent)
                }
                if(el.classList.contains("btn-clear")){
                    this.clearDisplay()
                }
                if(el.classList.contains("btn-del")){
                    this.deletaUm()
                }
                if(el.classList.contains("btn-eq")){
                    this.realizaConta()
                }
            })
        },
        btnParaDisplay(valor){
            this.display.value += valor
        },
        clearDisplay(){
            this.display.value = "";
        },
        deletaUm(){
            this.display.value = this.display.value.slice(0,-1)
        },
        realizaConta(){
            let conta = this.display.value
            try {
                conta = eval(conta)
                if(!conta){
                    alert("Conta inválida!")
                    return;
                }
                this.display.value = String(conta);
            } catch (e) {
                alert("Conta inválida!")
                return;
            }
        }
    }
}
const calculadora = criaCalculadora()
calculadora.inicia()