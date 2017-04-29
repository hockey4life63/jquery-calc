$(document).ready(function(){
    var calc ={
        firstNumber : "",
        secondNmber : "",
        operatorStored : "";
        state : 0,
        res : 0,
        opConvservion :{
            minus: "-",
            plus: "+",
            times: "*",
            divide:"/",
            power: "^"
        }
        updateDisplay :function(){
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
        function clearData(){

        },
        function storeNumber(number){

        }
    };



});