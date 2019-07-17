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
        this._dataAtual;
    }
}