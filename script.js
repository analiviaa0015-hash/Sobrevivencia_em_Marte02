alert("oi");
let pessoas =Number (prompt("Insira a quantidade de pessoas"));
const consumoDiario = 15; //litros por pessoa

// consumo total é baseado na quantidade de pessoas multiplicado pelo consumo diário por pessoa.
let consumoTotalBase = pessoas*consumoDiario;
let diasRestantes = oxigenio / consumoTotalBase;

alert (`Relatorio de Marte: Restam ${diasRestantes.toFixed(0)} dias de oxigênio`);