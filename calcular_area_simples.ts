class Retangulo{
  altura:number;
  largura:number;

  constructor(altura:number, largura:number){
    this.altura = altura;
    this.largura = largura;
  }
  calcularArea():string{
    let area:number = this.altura * this.largura;
    return `O retangulo de ${this.altura} X ${this.largura} tem uma area de ${area}`;
  }
}

let area = new Retangulo(10,20);
console.log(area.calcularArea())
