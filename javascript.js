

function collateResult(){
    var correctOptions = 0;
    for (let i = 0; i <= 5; i++) {
       var radios = document.getElementsByName("group"+i);
       for (var j = 0; j < radios.length; j++) {
           var radio = radios [j];
           if (radio.value === "correct" && radio.checked){
               correctOptions++;
           }
       }
        
    }
    alert("Out of 5 questios, you got   " + correctOptions);
}