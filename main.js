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