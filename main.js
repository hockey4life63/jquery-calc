//$(document).ready(function(){
    var calc ={
        firstNumber : "",
        secondNumber : "",
        total: "",
        operatorStored : "",
        state : 0,
        res : 0,
        updateDisplay: function(){

        },
        clearData: function(){

        },
        calculateTotal: function() {
            if (this.state === 1) {
                var firstNum = parseInt(this.firstNumber);
                var secondNUm = parseInt(this.secondNumber);
                var oper;
                switch(this.operatorStored) {
                    case 'plus':
                        this.total = firstNum + secondNUm;
                        break;
                    case 'minus':
                        this.total = firstNum - secondNUm;
                        break;
                    case 'times':
                        this.total = firstNum * secondNUm;
                        break;
                    case 'divide':
                        this.total = firstNum / secondNUm;
                        break;
                    case 'power':
                        this.total = Math.pow(firstNum, secondNUm);
                        break;   
                }
            }
        }
    };
//});