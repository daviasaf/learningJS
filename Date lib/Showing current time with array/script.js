const data = new Date()

// Pegar dia da semana
const diaSemana = data.getDay();
// Dia da semana vem de 0-6, então puxa na constante
function DiaSemana(diaSemana) {
	const DiaSemanaTexto = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
	return DiaSemanaTexto[diaSemana];
}
let diaSemanaTexto = DiaSemana(diaSemana)


// Pega mês 
const mes = data.getMonth() // (0-11)
function Mes(mes) {
	const mesTexto = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
	return mesTexto[mes];
}
let mesTexto = Mes(mes)

// Pega dia do mês
function DiaMes(data) {
	const dia = data.getDate()
	return dia
}
let diaTexto = DiaMes(data)

// Pega ano
function Year(y) {
	const ano = y.getFullYear()
	return ano
}
let ano = Year(data)

// Salva variáveis
dia = DiaMes(data);
ano = Year(data);
mesTexto = Mes(mes);
diaSemanaTexto = DiaSemana(diaSemana);

// Mandando para HTML
// let horaHTML = document.getElementById("horaHTML")
// horaHTML.textContent = `${diaSemanaTexto}, ${dia} de ${mesTexto} de ${ano} `

console.log(dia, ano, mesTexto, diaSemanaTexto)
// const h1 = document.querySelector("h1");
// const date = new Date;
// const opcoes = {
// 	dataStyle:"full"
// };
// h1.textContent = date.toLocaleDateString("pt-BR", opcoes);
