class Pessoa{
  nome:string;
  idade:number;

  constructor(nome:string, idade:number){
    this.nome = nome;
    this.idade = idade;
  }

  dizerOla():string{
      return `Olá ${this.nome}, você tem ${this.idade} Anos. Seja Bem Vindo(a)`;
  }

}
  let pessoa = new Pessoa('Felippe', 19);

  console.log(pessoa.dizerOla());

