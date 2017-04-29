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
        secondNmber : "",
        operatorStored : "",
        state : 0,
        res : 0,
        opConvservion :{
            minus: "-",
            plus: "+",
            times: "*",
            divide:"/",
            power: "^"
        },
        updateDisplay : function() {
            /*updates based on state
            0= first number update
            1= second number update
            2= operator update
            3= result update*/
            if(this.state === 0){
                $("#first-number").html(this.firstNumber);
            }
            else if(this.state === 1){
                $("#operatior").html(this.opConvservion[operatorStored]);
            }
            else if(this.state === 2){
                $("#second-number").html(this.secondNmber);
            }
            else if (this.state === 3) {
                $("#result").html(this.res);
            };

        },
        clearData :function(){
            this.firstNumber = "";
            this.secondNmber = "";
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
