/* class é uma função
    para dar o nome de uma class utilizamos a primeira letra de cada palavra em caixa alta
    variável em uma classe se chama atributo
    função dentro de uma classe se chama metodo

    então basicamente uma classe é um conjunto de metodos e atributos




*/
class CalcController{
    //Construtor : metodo para construir um objeto,utilizado para colocar variáveis e etc
    constructor(){
        //this é dizer este objeto,sendo uma maneira em js para definir que é um atributo e metodos

        // formas de encapsulamento private,public e protected no js ainda não EXISTE para representar esta ideia utilizamos uma convenção _inicioAtributo

        this._displayCalc = "0";
        this._currentDate;
        this.initialize();
    }

    initialize(){
        //DOM é a manipulação da arvore de elementos do html ou seja colocar uma nova div e muito mais
        // usamos os eventos como gatilhos pra fazer alterações no DOM

        //utilizamos o comando document.querySelector para pegar por seletor um campo de nosso html ,amarrando ele podemos fazer alterações
        //usamos a convenção el para indicar que é um elemento do nosso document
        
let displayCalcEl= document.querySelector("#display");
let timeEl = document.querySelector("#hora");
let dataEl = document.querySelector("#data");
      //coloque uma informação neste elemento no formato html
      displayCalcEl.innerHTML = "4999"
      timeEl.innerHTML = "10:50"
      dataEl.innerHTML = "17/07/2019"
       
    }

    //Todo atributo queremos atribuir ou mostrar um dado ou seja utilizamos o get e set

//retornamos o dado
    get displayCalc(){
        return this._displayCalc;
    }
//atribuimos um valor
    set displayCalc(valor){
        this._displayCalc = valor;
    }

    get dataAtual(){
        return this._currentDate
    }


    set dataAtual(valor){
        this._currentDate = valor;
    }
}