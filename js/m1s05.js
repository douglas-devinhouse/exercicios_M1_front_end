/* Exercicios 01 e 02*/
class Retangulo{
    largura;
    altura;
    constructor(largura, altura){
        this.largura = largura;
        this.altura = altura;
    }

    calcularArea(){        
        return this.largura * this.altura;
    }
}

const retangulos = [];

retangulos.push(new Retangulo(10,5));
retangulos.push(new Retangulo(8,12));
retangulos.push(new Retangulo(15,22));

console.log(`Exercício 01: ${JSON.stringify(retangulos)}`);

for(let i=0; i<retangulos.length; i++){
    console.log(`Exercício 02: A área do retângulo(${i+1}) é ${retangulos[i].calcularArea()}`);
}
    
/* Exercício 03*/
class Endereco{
    logradouro;
    numero;
    cidade;
    estado;
    pais;
    cep;

    constructor(logradouro, numero, cidade, estado, pais, cep){
        if( (typeof(logradouro) !== 'string') || 
            (typeof(numero) !== 'string') || 
            (typeof(cidade) !== 'string') ||
            (typeof(estado) !== 'string') || 
            (typeof(pais) !== 'string') || 
            (typeof(cep) !== 'string') ) {
                throw `Exercício 03: Endereço inválido`;
            }
        else {
            this.logradouro = logradouro;
            this.numero = numero;
            this.cidade = cidade;
            this.estado = estado;
            this.pais = pais;

            if(!(this.validaCEP(cep)))
                throw 'Exercício 06: Formato de Cep Inválido';
            else
                this.cep = cep;
        }
    }

    validaCEP(codPostal){        
        var expressaoRegex = /^[0-9]{5}-[0-9]{3}$/;
        return expressaoRegex.test(codPostal);
    }
}

let end = new Endereco('Rua padre luiz', '123', 'sjdr','mg','brasil','36300-000');
//let end = new Endereco('Rua padre luiz', 123, 'sjdr','mg','brasil','36300-000'); //para falhar o exercicio 03
//let end = new Endereco('Rua padre luiz', '123', 'sjdr','mg','brasil','36300000'); //para falhar o exercicio 06

/* Exercício 04 */
class Cliente{
    nome;
    cpf;
    endereco;
    numeroDoCelular;

    constructor(nome, cpf, endereco, numeroDoCelular){
        if((typeof(nome) !== 'string') || 
           (typeof(cpf) !== 'string') || 
           (typeof(numeroDoCelular) !== 'string') ||
           !(endereco instanceof(Endereco)) ) 
        {
            throw `Exercício 04: Parâmetros de Cliente inválidos`;       
        } else {
            this.nome= nome;
            this.cpf= cpf;
            this.endereco= endereco;
            this.numeroDoCelular= numeroDoCelular;
        }
    }
}    

cliente = new Cliente('Douglas','111.111.111-11',end,'99999-9999');
//cliente = new Cliente('Douglas','111.111.111-11',end,99999-9999); // para falhar o exercicio 04

/* Exercício 05 */
class Conta{
    numeroDaConta;
    saldo;
    cliente;

    constructor(numeroDaConta, saldo, cliente){
        if( (typeof(numeroDaConta) !== 'string') ||
            (typeof(saldo) !== 'number') ||
            !(cliente instanceof Cliente) )
        {
            throw 'Exercício 05: Parâmetros de Conta inválidos';
        } else {
            this.numeroDaConta = numeroDaConta;
            this.saldo = saldo;
            this.cliente = cliente;
        }       
    }
}

conta = new Conta('123456',9999.99,cliente);
//conta = new Conta('123456','9999.99',cliente); //para falhar o exercicio 05



/* Exercício 07 validar cpf */


/* Exercício 08 */
class Transacao{
    conta;
    valorDaTransacao;
    constructor(conta, valorDaTransacao){
        if( (typeof(valorDaTransacao) !== 'number') ||
            !(conta instanceof Conta)) {
                throw 'Parâmetros de Tranação inválidos'
        } else {
            this.conta = conta;
            this.valorDaTransacao = valorDaTransacao;
        }
    }

    transferencia(valor){
        
    }
}