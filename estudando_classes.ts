//Classes são como "modelos" que podemos usar para criar objetos com propriedades e comportamentos específicos

//class NomeDaClasse: define o nome da classe, que deve começar com letra maiúscula.
/*class NomeDaClasse {
    
    propriedade1: Tipo;         ***define as propriedades da classe, que podem ter qualquer nome, 
    propriedade2: Tipo;:            seguido de dois pontos e o tipo de dado.****

    
     ***define o construtor da classe, que é um método especial que é executado 
        quando um objeto da classe é criado. Ele recebe os parâmetros que serão usados 
        para inicializar as propriedades da classe.***
    constructor(parametro1: Tipo, parametro2: Tipo) {
        
        this.propriedade1 = parametro1;      ***inicializa as propriedades da classe
        this.propriedade2 = parametro2;:        com os valores passados no construtor.***

    }

    metodo1(): TipoDeRetorno { 
        // Corpo do método 
        define um método da classe, que pode ter qualquer nome, seguido 
        de parênteses e dois pontos, e o tipo de dado que ele retorna.
        O corpo do método deve estar entre chaves.
    }: 

    metodo2(parametro: Tipo): TipoDeRetorno { 
        // Corpo do método 
        define outro método da classe, que pode receber um ou 
        mais parâmetros e retornar um valor.
    }: 
}*/


class Pessoa {
    // o sinal ":" siginifica tipagem, que tipo de valor vai receber aquilo
    nome: string;
    idade: number;
    credito: any;

    constructor(nome: string, idade: number, credito: any) {
        //representa o propio valor passado atual no construct
        this.nome = nome;
        this.idade = idade;
        this.credito = credito;
    }

    //'***apresenta*** é um método'
    apresentar(): string {
        return `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos, e possuo um total de ${this.credito} de crédito`;
    }
    deposito(valor:any): any {
        return this.credito += valor;    
    }

}

let pessoa1 = new Pessoa("João", 25, 150.35);
let pessoa2 = new Pessoa("Maria", 49, 2500.47);

console.log(pessoa2.apresentar());
console.log(pessoa2.deposito(200));
console.log(pessoa2.apresentar());

