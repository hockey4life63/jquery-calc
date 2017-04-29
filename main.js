
// $(document).ready(function(){
    
$('.number').on('click', function() {

    if(calc.state === 0) {

        calc.firstNumber += $(this).attr('value');
        calc.updateDisplay('num1');

        console.log('mystring ' + calc.firstNumber);

    } else if (calc.state === 1) {

        calc.secondNumber += $(this).attr('value');
        calc.updateDisplay('num2');

        console.log('mystring ' + calc.secondNumber);
    }
});

    $('.operator').on('click', function() {
        calc.operatorStored += $(this).attr('value');
        calc.state = 1;
        calc.updateDisplay('op');
    })

    $('#button-equal').on('click', function() {
        calc.calculateTotal();
        calc.updateDisplay('res');
    })

    $('#button-clear').on('click', function() {
        calc.clearData();
    })



    var calc = {
        firstNumber : "",
        secondNumber : "",
        operatorStored : "",
        state : 0,
        total : 0,
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
                $("#result").html(this.total);
            };

        },
        clearData :function(){
            this.firstNumber = "";
            this.secondNumber = "";
            this.operatorStored = "";
            this.state = 0;
            this.total = 0;
            $("#first-number").empty();
            $("#second-number").empty();
            $("#operator").empty();
            $("#result").empty();

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



// });
