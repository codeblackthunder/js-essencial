
class CalcController {

    constructor() {
        this._operation = [];
        this._locale = "pt-BR"
        this._currentDate;
        
        this._displayCalcEl = document.querySelector("#display");
        this._timeEl = document.querySelector("#hora");
        this._dateEl = document.querySelector("#data");

        this.initialize();
        this.initButtonsEvents();
    }

    initialize() {
        this.setDisplayDateTime();

      
        setInterval(() => {
            this.setDisplayDateTime();
        }, 1000)

    }


    setDisplayDateTime() {
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
           
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



    
    addEventListenerAll(element, events, fn) {

        events.split(' ').forEach(event => {

            element.addEventListener(event, fn, false);

        });

      


    }
    setError(){
        //enviamos pro display a mensagem error
        this.displayCalc = "Error";
    }
    clearAll(){

        //definimos a operação como vazia ou seja o limpar
        this._operation = [];
    }
    clearEntry(){
        //metodo nativo do js para excluir o ultimo elemento adicionado da lista
this._operation.pop();
    }

    addOperation(value){
        // metodo utilizado para acrescenta no array operation o valorde cada operação por exemplo cada botao digitado o valor sera iniciado neste array
        
        this._operation.push(value);
        console.log(this._operation);
    }

    execBtn(value) {
        //criando estrutura do switch
        switch (value) {
            case 'ac':
                this.clearAll();
                break;
            case 'soma':
                this.clearEntry();
                break;
            case 'subtracao':
                this.clearEntry();
                break;
            case 'divisao':
                this.clearEntry();
                break;
            case 'multiplicacao':
                this.clearEntry();
                break;
            case 'porcento':
                this.clearEntry();
                break;
            case 'igual':
                this.clearEntry();
                break;
                        // os numeros vao ter o mesmo comportamento ou seja apenas o ultimo valor precisa ter break
                    case '0':
                    case '1': 
                    case '2': 
                    case '3': 
                    case '4': 
                    case '5': 
                    case '6': 
                    case '7': 
                    case '8':
                    case '9': 
                     // populamos todo os numeros digitados
                        this.addOperation(parseInt(value));
                    break;
                    

                default:
                    this.setError();

                    
        }
    }

    initButtonsEvents() {
        //Quando há vários elementos em que nosso seletor indica,é necessário utilizar o querySelectorAll
        let buttons = document.querySelectorAll("#buttons>g,#parts>g");
        //quanndo utilizamos o querySelectorAll retorna um array,sendo assim é necessário percorre-lo
        //com o forEach percorremos nosso array definindo uma variavel e com ela definimos um evento
        buttons.forEach((btn, index) => {
            //o e seria toda a ação ocorrida no evento...
            this.addEventListenerAll(btn, 'click drag', e => {
                let textBtn = btn.className.baseVal.replace("btn-", "");
               this.execBtn(textBtn);
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






