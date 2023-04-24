class Calculadora{
  valor1:number;
  valor2:number;
  
  constructor (valor1:number, valor2:number){
    this.valor1 = valor1;
    this.valor2 = valor2;
  }

  somar():number{
    return this.valor1 + this.valor2;
  }

  mostrar():any{
    return `A soma de ${this.valor1} + ${this.valor2} = `;
  }
}

let calcular = new Calculadora(10, 50);

console.log(calcular.mostrar(),calcular.somar())
