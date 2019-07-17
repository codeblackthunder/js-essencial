/* class é uma função
    para dar o nome de uma class utilizamos a primeira letra de cada palavra em caixa alta
    variável em uma classe se chama atributo
    função dentro de uma classe se chama metodo

    então basicamente uma classe é um conjunto de metodos e atributos




*/
class CalcController {

    constructor() {

        this._locale = "pt-BR"
        this._currentDate;
        //Colocamos os nossos elementos na DOM como atributos 
        this._displayCalcEl = document.querySelector("#display");
        this._timeEl = document.querySelector("#hora");
        this._dateEl = document.querySelector("#data");

        this.initialize();
        this.initButtonsEvents();
    }

    initialize() {
        this.setDisplayDateTime();

        //setInterval utilizado para atualizar a cada 1000 ms no caso 1 segundo...
        setInterval(() => {
            this.setDisplayDateTime();
        }, 1000)

    }

    //metodo usado para retornar data formatada utilizando o metodo toLocalDate/TimeString
    setDisplayDateTime() {
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            //formatando as datas com os seguintes metodos
            //Incluir anotações na documentação https://docs.w3cub.com/javascript/global_objects/date/tolocaledatestring/
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
    }


    get displayTime() {
        return this._timeEl.innerHTML;
    }

    get displayDate() {
        return this._dateEl.innerHTML;
    }


    set displayTime(value) {
        this._timeEl.innerHTML = value;
    }

    set displayDate(value) {
        this._dateEl.innerHTML = value;
    }



    // usamos o innerHTML para modificar e mostrar o valor de nosso elemento

    addEventListenerAll(element, events, fn) {

        events.split(' ').forEach(event => {

            element.addEventListener(event, fn, false);

        });

    }
    initButtonsEvents() {
        //Quando há vários elementos em que nosso seletor indica,é necessário utilizar o querySelectorAll
        let buttons = document.querySelectorAll("#buttons>g,#parts>g");
        //quanndo utilizamos o querySelectorAll retorna um array,sendo assim é necessário percorre-lo
        //com o forEach percorremos nosso array definindo uma variavel e com ela definimos um evento
        buttons.forEach((btn, index) => {
            //o e seria toda a ação ocorrida no evento...
            this.addEventListenerAll(btn, 'click drag mouseover', e => {
                console.log(btn.className.baseVal.replace("btn-", ""));
            }); //fim evento

        }); // fim foreach
    }





    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value) {
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate() {
        //Classe do js responsavel pela parte de datas.
        return new Date();
    }


    set currentDate(valor) {
        this._currentDate = valor;
    }
}






