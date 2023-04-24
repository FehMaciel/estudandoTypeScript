class Carro{
  modelo:string;
  ano:number;
  preco:number;

  constructor(modelo:string, ano:number, preco:number){
    this.modelo = modelo;
    this.ano = ano;
    this.preco = preco;
  }

  desconto():string{
    let valor:number = this.preco - this.preco * 0.10;
    return `O carro ${this.modelo}\nAno ${this.ano}\nPassara de ${this.preco} para ${valor}`;
  }
}

let carro1 = new Carro('FOX', 2004, 16000);
console.log(carro1.desconto())
