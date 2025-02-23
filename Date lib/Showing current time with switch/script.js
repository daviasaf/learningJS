const data = new Date()
let mesTexto
let diaSemanaTexto;
let ano;
let dia;

// Pegar dia da semana
const diaSemana = data.getDay(); 
function DiaSemana(diaSemana) { // Joga número do dia da semana (0-6)
    switch (diaSemana) {
        case 0:  diaSemanaTexto = "Domingo"; break;
        case 1:  diaSemanaTexto = "Segunda"; break;
        case 2:  diaSemanaTexto = "Terça"; break;
        case 3:  diaSemanaTexto = "Quarta"; break;
        case 4:  diaSemanaTexto = "Quinta"; break;
        case 5:  diaSemanaTexto = "Sexta"; break;
        case 6:  diaSemanaTexto = "Sábado"; break;
        default: diaSemanaTexto = "Dia Inválido";
    }
    return diaSemanaTexto;
}

// Pega mês (0 - 11)
const mesData = data.getMonth() + 1 
function Mes(mesData) {
    switch (mesData) {
        case 0:  mesTexto = "Janeiro"; break;
        case 1:  mesTexto = "Fevereiro"; break;
        case 2:  mesTexto = "Março"; break;
        case 3:  mesTexto = "Abril"; break;
        case 4:  mesTexto = "Maio"; break;
        case 5:  mesTexto = "Junho"; break;
        case 6:  mesTexto = "Julho"; break;
        case 7:  mesTexto = "Agosto"; break;
        case 8:  mesTexto = "Setembro"; break;
        case 9:  mesTexto = "Outubro"; break;
        case 10: mesTexto = "Novembro"; break;
        case 11: mesTexto = "Dezembro"; break;
        default: mesTexto = "Mês Inválido";
    }
    return mesTexto;
}

function DiaMes(d) { // Pega dia do mês
    const dia = d.getDate()
    return dia
}

function Year(y) { // Pega ano
    const ano = y.getFullYear()
    return ano
}
// Salva variáveis
dia = DiaMes(data);
ano = Year(data);
mesTexto = Mes(mesData);
diaSemanaTexto = DiaSemana(diaSemana);

console.log(`${diaSemanaTexto}, ${dia} de ${mesTexto} de ${ano} `)