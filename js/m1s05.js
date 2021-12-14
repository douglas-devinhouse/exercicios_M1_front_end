const LIMITE = 300;
let storageIdDeTransacao = localStorage.getItem('storageIdDeTransacao');

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

document.querySelector("#pExercicio1").innerHTML = `Exercício 01: ${JSON.stringify(retangulos)}`;
console.log(`Exercício 01: ${JSON.stringify(retangulos)}`);

/* Exercicio 02 */
for(let ret of retangulos){
    document.querySelector("#pExercicio2").innerHTML += `Área retângulo(${retangulos.indexOf(ret)}): ${ret.calcularArea()} <br>`;
}
    
/* Exercício 03 */
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
                
                // os lançamentos de exceção foram substituídos por um console.error() 
                //apenas para evitar a interrupção do carregamento da página
                
                //throw `Exercício 03: Endereço inválido`;
                document.querySelector("#pExercicio3").innerHTML = `Endereço inválido (verifique o log)`;
                console.error(`Exercício 03: Endereço inválido`);
            }
        else {
            this.logradouro = logradouro;
            this.numero = numero;
            this.cidade = cidade;
            this.estado = estado;
            this.pais = pais;

            if(!(this.validaCEP(cep))){
                // os lançamentos de exceção foram substituídos por um console.error() 
                //apenas para evitar a interrupção do carregamento da página
                
                //throw 'Exercício 06: Formato de Cep Inválido';
                document.querySelector("#pExercicio6").innerHTML = 'Formato de Cep Inválido (verifique o log)';
                console.error('Exercício 06: Formato de Cep Inválido');
            }
                
            else
                this.cep = cep;
        }
    }

    validaCEP(codPostal){        
        let expressaoRegex = /^[0-9]{5}-[0-9]{3}$/;
        return expressaoRegex.test(codPostal);
    }
}

//let end = new Endereco('Rua padre luiz', '123', 'sjdr','mg','brasil','36300-000');
let end3 = new Endereco('Rua padre luiz', 123, 'sjdr','mg','brasil','36300-000'); //para falhar o exercicio 03
let end6 = new Endereco('Rua padre luiz', '123', 'sjdr','mg','brasil','36.300-000'); //para falhar o exercicio 06

//document.querySelector("#pExercicio3").innerHTML = 'Verificar no log a exceção (throw)';
//document.querySelector("#pExercicio6").innerHTML = 'Verificar no log a exceção (throw)';


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
           !(endereco instanceof(Endereco)) ) {            

            // os lançamentos de exceção foram substituídos por um console.error() 
            //apenas para evitar a interrupção do carregamento da página
            
            //throw `Exercício 04: Parâmetros de Cliente inválidos`;       
            document.querySelector("#pExercicio4").innerHTML = 'Parâmetros de Cliente inválidos (verifique o log)';
            console.error('Exercício 04: Parâmetros de Cliente inválidos');

        } else  if(!Cliente.validaCPF(cpf)){
            window.alert('CPF inválido');
            document.getElementById("cpf").value = '';
        } else {
            this.nome = nome;
            this.cpf = cpf;
            this.endereco = endereco;
            this.numeroDoCelular = numeroDoCelular;
        }
    }    

    static validaCPF(strCPF){        
        let Soma;
        let Resto;
        Soma = 0;
        if (strCPF.length !== 11) {            
            return false;
        }
        
        for (let i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;
    
        if ((Resto == 10) || (Resto == 11))  
            Resto = 0;
        if (Resto != parseInt(strCPF.substring(9, 10)) ) {
            return false;
        }
    
        Soma = 0;
        for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;
    
        if ((Resto == 10) || (Resto == 11))  
            Resto = 0;
        if (Resto != parseInt(strCPF.substring(10, 11) ) ) {
            return false;
        }      

        return true;
    };        
}

//cliente = new Cliente('Douglas','111.111.111-11',end,'99999-9999');
let end = new Endereco('Rua padre luiz', '123', 'sjdr','mg','brasil','36300-000');
cliente = new Cliente('Douglas','111.111.111-11',end,99999-9999); // para falhar o exercicio 04

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
            // os lançamentos de exceção foram substituídos por um console.error() 
            //apenas para evitar a interrupção do carregamento da página

            //throw 'Exercício 05: Parâmetros de Conta inválidos';
            document.querySelector("#pExercicio5").innerHTML = 'Parâmetros de Conta inválidos (verifique o log)';
            console.error('Exercício 05: Parâmetros de Conta inválidos');
        } else {
            this.numeroDaConta = numeroDaConta;
            this.saldo = saldo;
            this.cliente = cliente;
        }       
    }
}

//conta = new Conta('123456',9999.99,cliente);
conta = new Conta('123456','9999.99',cliente); //para falhar o exercicio 05


/* Exercício 07 validar cpf */
btnValidarCPF.addEventListener("click", e =>{
    let inputCPF = document.getElementById("cpf").value;
    let endCPF = new Endereco('Rua CPF','123','Virginia Beach','Virginia','USA','00000-000');
    let clienteCPF = new Cliente('TESTE CPF',inputCPF,endCPF,'99999-9999');
});

/* Exercício 08 */
class Transacao{
    idTransacao; /* Exercício 09 */
    conta;
    valorDaTransacao;
    contaTransferencia;
    constructor(conta, valorDaTransacao, contaTransferencia=undefined){
        if( (typeof(valorDaTransacao) !== 'number') ||
            !(conta instanceof Conta)) {
                // os lançamentos de exceção foram substituídos por um console.error() 
                //apenas para evitar a interrupção do carregamento da página

                document.querySelector("#pExercicio8").innerHTML = 'Parâmetros de Tranação inválidos (verifique o log)';
                console.error('Exercício 08: Parâmetros de Tranação inválidos');
                //throw 'Parâmetros de Tranação inválidos'
        } else {
            this.idTransacao++;
            this.conta = conta;
            this.valorDaTransacao = valorDaTransacao;
            if(contaTransferencia !== undefined)
                this.contaTransferencia = contaTransferencia;            
        }
    }

    deposito(){
        this.conta.saldo += this.valorDaTransacao;
        
    } 

    transferencia(){
        this.conta.saldo -= this.valorDaTransacao;
        contaDestino.saldo += this.valorDaTransacao;        
    }
}

//criação das instâncias apenas para conseguir realizar a opereção nas duas contas
let endClienteDestino = new Endereco('Rua AAA',"555",'Floripa','SC','Brasil','99999-999');
let clienteDestino = new Cliente('Maria','11111111111',endClienteDestino,'99199-9999');
let contaDestino = new Conta("321",0,clienteDestino);

let endClienteDeposito = new Endereco('Rua xxxxxx',"555",'Floripa','SC','Brasil','99999-999');
let clienteDeposito = new Cliente('Douglas','11111111111',endClienteDeposito,'99199-9999');
let contaDeposito = new Conta("321",1000,clienteDeposito);   


btnDepositar.addEventListener("click", e =>{
    let inputValor = parseInt(document.getElementById("valor").value);

    if(inputValor <= 0) 
        alert('O valor deve ser maior que 0');
    else if(inputValor > LIMITE)
        alert(`Seu limite para depósito é de R$ ${LIMITE}`);
    else {      
        transacao = new Transacao(contaDeposito, inputValor);
        transacao.deposito();
        document.querySelector("#clienteA").innerHTML = `Conta: ${clienteDeposito.nome}`;
        document.querySelector("#saldoContaA").innerHTML = `Saldo: ${contaDeposito.saldo}`;
    }
})

function atualizarQtdeTransacoes(){
    if(storageIdDeTransacao)
    document.querySelector("#pExercicio9").innerHTML = `Transações realizadas: ${storageIdDeTransacao}`;
}
atualizarQtdeTransacoes();

btnTransferir.addEventListener("click", e =>{
    let inputValor = parseInt(document.getElementById("valor").value);
    if(inputValor <= 0) 
        alert('O valor deve ser maior que 0');
    else if(inputValor > contaDeposito.saldo)
        alert('Saldo insuficiente!');        
    else if(inputValor > LIMITE)
        alert(`Seu limite de transferência é de R$ ${LIMITE}`);
    else {
        transacao = new Transacao(contaDeposito, inputValor);

        /*Exercício 09: Armazenei o idDeTransacao no localStorage para fazer o incremento*/
        if(storageIdDeTransacao) {
            storageIdDeTransacao++;
            transacao.idTransacao = storageIdDeTransacao;
            localStorage.setItem('storageIdDeTransacao', storageIdDeTransacao);            
        } else {
            storageIdDeTransacao = 1;
            localStorage.setItem('storageIdDeTransacao', storageIdDeTransacao);
        }
        atualizarQtdeTransacoes();
        transacao.transferencia();            

        document.querySelector("#clienteA").innerHTML = `Conta: ${clienteDeposito.nome}`;
        document.querySelector("#saldoContaA").innerHTML = `Saldo: ${contaDeposito.saldo}`;

        document.querySelector("#clienteB").innerHTML = `Conta: ${clienteDestino.nome}`;
        document.querySelector("#saldoContaB").innerHTML = `Saldo: ${contaDestino.saldo}`;
    }            
})
