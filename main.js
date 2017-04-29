<<<<<<< HEAD
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
=======
// $(document).ready(function(){
    var calc = {
        firstNumber : "",
        secondNumber : "",
        operatorStored : "",
        state : 0,
        res : 0,
        opConversion :{
            minus: "-",
            plus: "+",
            times: "*",
            divide:"/",
            power: "^"
        },
        updateDisplay : function(arg) {
            /*updates based on state
            'num1' update first num
            'num2'= second number update
            'op'= operator update
            'res'= result update*/
            if(arg === 'num1'){
                $("#first-number").html(this.firstNumber);
            }
            else if(arg === 'op'){
                $("#operator").html(this.opConversion[this.operatorStored]);
            }
            else if(arg === 'num2'){
                $("#second-number").html(this.secondNumber);
            }
            else if (arg === 'res') {
                $("#result").html(this.res);
            };

        },
        clearData :function(){
            this.firstNumber = "";
            this.secondNumber = "";
            this.operatorStored = "";
            this.state = 0;
            this.res = 0;
            $("#first-number").empty();
            $("#second-number").empty();
            $("#operator").empty();
            $("#result").empty();

        }
    };



// });
>>>>>>> 9708d70cfe859008045062c3705a6985e1a1817e
