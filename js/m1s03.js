/* scripts para o exercício 1*/
const birthDayDiv = document.getElementById("birthDayDiv");
const inputBirthDay = document.getElementById("inputBirthDay");
const btnCalcAge = document.getElementById("btnCalcAge");

let birthDateValid = undefined;

function initialize(){
    updateTime();
    seasons();

    if (listStorage) {  
        loadListStorage();
        document.getElementById("elementLoadList").innerHTML = 'Lista carregada com sucesso';
    } else { 
        document.getElementById("elementLoadList").innerHTML = 'Nenhuma lista foi encontrada';    
    }
}


btnCalcIdade.addEventListener("click", event => {
    checkInputDate();
    if (birthDateValid !== true){ //|| emailValido !== true || senhaValido !== true || csenhaValido !== true) {
        event.preventDefault(); //parar a propagação do evento através do DOM.
        console.log('dados não conferem')
    } else {
        calcAge();                
    }
});

function checkInputDate(){   

    if(inputBirthDay.value === ''){
        setError(inputBirthDay,"Data inválida");
        birthDateValid = false;
    } else {
        setNoError(inputBirthDay);
        birthDateValid = true;
    }
}

function calcAge() {          
    let inputDate = new Date(inputBirthDay.value);
    let month_diff = Date.now() - inputDate.getTime();  
    let age_dt = new Date(month_diff);   
    let inputYear = age_dt.getUTCFullYear();  
    //let currentYear = Date.now().getFullYear();
    
    // exemplo usando abs
    //let age = Math.abs(inputYear - 1970);  
    
    //exemplo usando floor
    //let age = Math.floor(inputYear - 1970);  

    //exemplo usando moment
    let age = Math.floor(moment(new Date()).diff(moment(inputDate),'years', true));
    
    
    let elementResult = document.querySelector(".elementResult");
    if(elementResult){
        birthDayDiv.removeChild(elementResult);
    }

    let resultCalcAge = document.createElement("p");
    resultCalcAge.className = "elementResult";
    resultCalcAge.appendChild(document.createTextNode(`Sua idade é: ${age}`));
    
    return birthDayDiv.appendChild(resultCalcAge);     
}  

function setError(input, message){
    const formParts = input.parentElement;
    formParts.className = 'form-parts error';
    const small = formParts.querySelector('small')
    small.innerText = message;
}

function setNoError(input){
    const formparts = input.parentElement;
    formparts.className = 'form-parts noerror';
}

/* scripts para o exercício 2*/
const inputNum1 = document.getElementById("input-num-1");
const inputNum2 = document.getElementById("input-num-2");
const inputResult = document.getElementById("result");

console.log(inputNum1.value);

calcSum.addEventListener("click", event => {    
    calculate(parseInt(inputNum1.value), parseInt(inputNum2.value), "sum");
});

calcSub.addEventListener("click", event => {    
    calculate(parseInt(inputNum1.value), parseInt(inputNum2.value), "sub");
});

calcMult.addEventListener("click", event => {    
    calculate(parseInt(inputNum1.value), parseInt(inputNum2.value), "mult");
});

calcSplit.addEventListener("click", event => {    
    calculate(parseInt(inputNum1.value), parseInt(inputNum2.value), "split");    
});

function calculate(num1, num2, operation){
    let result;
    if(operation === "sum"){
        result = num1 + num2;
    } else if(operation === "sub"){
        result = num1 - num2;
    } else if(operation === "mult"){
        result = num1 * num2;
    } else if(operation === "split"){
        if(num2 === 0) {
            console.error("O divisor (2º número) não pode ser zero!");
        } else {
            result = num1 / num2;
        }
    }        
    
    inputResult.value = result;
    console.log(`Resultado: ${result}`);
}

/* scripts para o exercício 3*/
const divEvenOdd = document.getElementById("divEvenOdd");
inputEvenOdd.addEventListener("change", evenOddEvent => {
    let oddResult;
    if((inputEvenOdd.value % 2) === 0 ){
        oddResult = "par";
    } else {
        oddResult = "impar";
    }

    let elementOddResult = document.querySelector(".elementOddResult");
    if(elementOddResult){
        divEvenOdd.removeChild(elementOddResult);
    }

    let resultOdd = document.createElement("p");
    resultOdd.className = "elementOddResult";
    resultOdd.appendChild(document.createTextNode(`O número é: ${oddResult}`));
    
    return divEvenOdd.appendChild(resultOdd);


});

/* scripts para o exercício 4*/
const elementTimeAccess = document.querySelector(".elementTimeAccess");
let currentdate = new Date(); 
let datetime = `Horário de acesso: ${String(currentdate.getHours()).padStart(2,'0')}:
                ${String(currentdate.getMinutes()).padStart(2,'0')}`;
elementTimeAccess.innerHTML = datetime;


/* scripts para o exercício 5*/
function updateTime() {
    let currentTime = new Date();
    let h = String(currentTime.getHours()).padStart(2,'0');
    let m = String(currentTime.getMinutes()).padStart(2,'0');        
    
    document.querySelector(".elementTimeActual").innerHTML = h + ":" + m;
    let t = setTimeout(function(){ updateTime() }, 500);

    seasons();
}   

/* scripts para o exercício 6*/    
function seasons(){
    // 22-12 até 21-03 = verão        (mes>=12 e dia>=22) e (mes<=03 e dia <=21)
    // 22-03 até 21-06 = outono => se (mes>=03 e dia>=22) e (mes<=06 e dia <=21)
    // 22-06 até 21-09 = inverno =>   (mes>=06 e dia>=22) e (mes<=09 e dia <=21)
    // 22-09 até 21-12 = primavera    (mes>=09 e dia>=22) e (mes<=12 e dia <=21)

    let today = currentdate.getFullYear()+'-'+(currentdate.getMonth()+1)+'-'+currentdate.getDate();    
    let elementSeason = document.querySelector("#elementSeason");


    if(moment(today).isBetween('2021-12-22', '2022-03-21')) {
        elementSeason.className = "summer";
    } else if(moment(today).isBetween('2021-03-22', '2021-06-21')) {
        elementSeason.className = "fall";
    } else if(moment(today).isBetween('2021-06-22', '2021-09-21')) {
        elementSeason.className = "winter";
    } else if(moment(today).isBetween('2021-09-22', '2021-12-21')) {
        elementSeason.className = "spring";
    }     

}

/* scripts par o exercício 7 */
const inputList = document.getElementById("inputList");
const selectList = document.querySelector("#selectList");
let inputListValid = undefined;

function checkInputList(){   
    if(inputList.value.length === 0){
        setError(inputList,"Descreva o item.");
        inputListValid = false;
    } else {
        setNoError(inputList);
        inputListValid = true;
    }
}

btnAddList.addEventListener("click", event => {
    checkInputList();
    if (inputListValid !== true){ 
        event.preventDefault(); 
        console.log('dados não conferem')
    } else {
   
        let optionItem = document.createElement("option");
        optionItem.value = inputList.value;
        optionItem.innerHTML = inputList.value;
        
        selectList.appendChild(optionItem);
        inputList.value = '';                

        LIST_OPTIONS.push(optionItem.innerText);
    }
});

/* scripts para o exercício 8 */
const LIST_OPTIONS = [];
let listStorage = localStorage.getItem('storage-list');

btnSaveList.addEventListener("click", event => {
    saveListStorage();
})

function saveListStorage(){  
    const listJSON = JSON.stringify(LIST_OPTIONS);
    // armazena do localStorage
    localStorage.setItem('storage-list', listJSON);    

    console.log(LIST_OPTIONS);
    console.log(listJSON);
}

/* scripts para o exercício 9 */
function loadListStorage(){
    let listSaved = JSON.parse(listStorage);
    for(let itemlistSaved in listSaved){
      //Adiciona o elemento da listaSalva em LISTA_TAREFAS[] para que possam ser manipulados futuramente
      LIST_OPTIONS.push(listSaved[itemlistSaved]);  

      let optionItem = document.createElement("option");
      optionItem.value = LIST_OPTIONS[itemlistSaved];
      optionItem.innerHTML = LIST_OPTIONS[itemlistSaved];
      
      selectList.appendChild(optionItem);
    }
}

/* scripts para o exercício 10 */
const inputPAPGNum = document.getElementById("inputPAPGNum");
const inputPAPGRoot = document.getElementById("inputPAPGRoot");

let inputPAvalid = undefined;
let inputPGvalid = undefined;

function checkInputPA(){   
    if(inputPAPGNum.value.length === 0){
        setError(inputPAPGNum,"Informe o número.");
        inputPAvalid = false;
    } else {
        setNoError(inputPAPGNum);
        inputPAvalid = true;
    }
}
function checkInputPG(){       
    if(inputPAPGRoot.value.length === 0){
        setError(inputPAPGRoot,"Informe a razão.");
        inputPGvalid = false;
    } else {
        setNoError(inputPAPGRoot);
        inputPGvalid = true;
    }
}

let qtdeIterable = 7;

btnPA.addEventListener("click", event => {
    checkInputPA();    
    if (inputPAvalid !== true){
        event.preventDefault(); 
        console.log('dados não conferem')
    } else{
        checkInputPG();
        if(inputPGvalid !== true){ 
            event.preventDefault(); 
            console.log('dados não conferem')
        } 
    }
    
    let result = '';        
    let calcPA = parseInt(inputPAPGNum.value);    
    result = calcPA; 
    
    for (let index = 0; index < qtdeIterable-1; index++) {            
        calcPA += parseInt(inputPAPGRoot.value);
        result += (index<qtdeIterable?',':'') + calcPA;
        //console.log(result);
    }        
    
    document.getElementById("resultPA").innerHTML = `PA: ${result}`;  
});


btnPG.addEventListener("click", event => {
    checkInputPA();    
    if (inputPAvalid !== true){
        event.preventDefault(); 
        console.log('dados não conferem')
    } else{
        checkInputPG();
        if(inputPGvalid !== true){ 
            event.preventDefault(); 
            console.log('dados não conferem')
        } 
    }

    let result = '';        
    let calcPG = parseInt(inputPAPGNum.value);    
    result = calcPG; 
    
    for (let index = 0; index < qtdeIterable - 1; index++) {            
        calcPG *= parseInt(inputPAPGRoot.value);
        result += (index<qtdeIterable?',':'') + calcPG;
        //console.log(result);
    }        
    
    document.getElementById("resultPG").innerHTML = `PG: ${result}`;  
    
});