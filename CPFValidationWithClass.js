class validaCPF {
  constructor(cpfEnviado) {
    if (cpfEnviado === undefined) return false;
    Object.defineProperty(this, "cpfEnviado", {
      enumerable: true,
      writable: false,
      configurable: false,
      value: this.cpfEnviado = (cpfEnviado || '').replace(/\D+/g, "")
    });
  }
  valida() {
    //Se diferente de cpfEnviado (String vazia), retorne
    if (!this.cpfEnviado) return false;
    //Se o que for enviado for diferente de string, retorne
    if (typeof this.cpfEnviado !== "string") return false;
    //Se o que for enviado tiver um tamanho diferente de 11, retorne
    if (this.cpfEnviado.length !== 11) return false;
    //Se for sequencia de números, retorne
    if (this.isSequencial()) return false;
    let cpfVerificado = this.calculaCpfValidado();
    return cpfVerificado === this.cpfEnviado
  }
  isSequencial() {
    let sequencia = this.cpfEnviado[0].repeat(this.cpfEnviado.length);
    return sequencia === this.cpfEnviado;
  }
  criaDigitoVerificador(cpf) {
    
    let cpfArray = Array.from(cpf);
    let peso = cpf.length+1;
    let cpfSomado = cpfArray.reduce((acumulador, valor) => {
      //console.log(`${valor} * ${peso} = ${valor*peso}`);
      let total = Number(acumulador + valor * peso);
      peso--;
      return total;
    },0);
    //console.log("Total "+ cpfSomado);
    //console.log("----------");
    
    
    const digito = 11 - (cpfSomado % 11);
    return digito > 9 ? 0 : String(digito);
    //      condicao     falso   verdadeiro
  }
  calculaCpfValidado() {
    const cpfSemDigitos = this.cpfEnviado.slice(0, -2);
    const primeiroDigito = this.criaDigitoVerificador(cpfSemDigitos);
    const segundoDigito = this.criaDigitoVerificador(cpfSemDigitos + primeiroDigito);
    const novoCpf = cpfSemDigitos + primeiroDigito + segundoDigito;
    return novoCpf;
  }
}

const cpf = new validaCPF("357.718.970-35");
console.log(cpf.valida())
