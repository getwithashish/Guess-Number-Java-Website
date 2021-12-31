
var inputerror = document.getElementById("inperror");
var guessno = document.getElementById("guessspan");
var genno = document.getElementById("genspan");
var disp_msg = document.getElementById("msg");
var disp_output = document.getElementById("output");

function validate(){
    var inputnum = parseInt(document.getElementById("inpnum").value);
    if(isNaN(inputnum) || inputnum < 0 || inputnum > 10){
        inputerror.innerHTML = "Choose a number between 1 and 10";
    }
    else{
        xhttpr = new XMLHttpRequest();
        xhttpr.onload = function(){
            if(this.status == 200){
                var resp = JSON.parse(this.responseText);
                // var resp = this.responseText;
                disp_output.style.display = "flex";
                guessno.innerHTML = inputnum;
                genno.innerHTML = resp[1];
                if(resp[0] == 0){
                    disp_msg.innerHTML = "You have guessed wrong. Try again";
                }
                else if(resp[0] == 1){
                    disp_msg.innerHTML = "Congratulations!!! You have guessed the correct number";
                }

            }
        };
        xhttpr.open("GET","guess?num="+inputnum);
        xhttpr.send();
    }
}

document.getElementById("clrbtn").addEventListener("click",()=>{
    inputerror.innerHTML = "";
    disp_output.style.display = "none";
});