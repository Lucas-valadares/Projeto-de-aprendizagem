import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  
  private numero1: any;
  private numero2: any;
  private resultado: any;
  private operacao: any | string;

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit() {
  	this.limpar();
  }

  limpar(): void {
  	this.numero1 = '0';
  	this.numero2 = null;
  	this.resultado = null;
  	this.operacao = null;
  }

  adicionarNumero(numero: string): void {
  	if (this.operacao === null) {
  	  this.numero1 = this.concatenarNumero(this.numero1, numero);
  	} if(this.operacao !== null && this.resultado === null) {
  	  this.numero2 = this.concatenarNumero(this.numero2, numero);
  	}
  }

  concatenarNumero(numAtual: string, numConcat: string): string {
  	// caso contenha apenas '0' ou null, reinicia o valor
    if (numAtual === '0' || numAtual === null) {
  	  numAtual = '';
  	}

    // primeiro dígito é '.', concatena '0' antes do ponto
  	if (numConcat === '.' && numAtual === '') {
  	  return '0.';
  	}

    // caso '.' digitado e já contenha um '.', apenas retorna
  	if (numConcat === '.' && numAtual.indexOf('.') > -1) {
  	  return numAtual;
  	}

  	return numAtual + numConcat;
  }

/**
 * Executa lógica quando um operador for selecionado.
 * Caso já possua uma operação selecionada, executa a 
 * operação anterior, e define a nova operação.   */


  definirOperacao(operacao: string): void {
// apenas define a operação caso não exista uma

	this.operacao = operacao;
  	if (this.operacao === null) {
		this.operacao = operacao;
      return;
  	}

  	if (this.numero2 !== null) {

  		this.operacao = operacao;
  		this.numero1 = this.resultado.toString();
  		this.numero2 = null;
  		this.resultado = null;

  	}
	  console.log(this.operacao);
  }


// Efetua o cálculo de uma operação.
  calcular(): void {
  	if (this.numero2 === null) {
  		return;
  	}
	
  	this.resultado = this.calculatorService.calcular(
  		parseFloat(this.numero1), 
  		parseFloat(this.numero2), 
  		this.operacao);
	this.operacao = this.operacao
  }

 // Retorna o valor a ser exibido na tela da calculadora.
  get displayOperacao(): string {
	if (this.operacao !== null && this.numero2 === null){
		return this.numero1 + "  " + this.operacao;
	}
	
	if (this.operacao !== null && this.numero2 !== null){
		return this.numero1 + " " + this.operacao + " " + this.numero2 + " =";
	}
	 return " "
  }
  get display(): string {

	if (this.resultado !== null) {
		return this.resultado.toString();
	}
	if (this.numero2 !== null) {
		return this.numero2;
	}
	return this.numero1 
  }
}

export class CalculatorService {

  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = 'x';
  static readonly PORCENTAGEM: string = '%';

  constructor() { }

  calcular(num1: number, num2: number, operacao: string): number {
  	let resultado: number; // armazena o resultado da operação

  	switch(operacao) {
  	  case CalculatorService.SOMA:
       resultado = num1 + num2;
  		break;
  	  case CalculatorService.SUBTRACAO:
  	    resultado = num1 - num2;
  		break;
  	  case CalculatorService.DIVISAO:
  	    resultado = num1 / num2;
  		break;
  	  case CalculatorService.MULTIPLICACAO:
  	    resultado = num1 * num2;
  		break;
	//   case CalculatorService.PORCENTAGEM:
	// 	resultado = (num1 / 100) * num2;
	//   break;
  	  default:
  	    resultado = 0;
  	}
  	return resultado;
  }

}

