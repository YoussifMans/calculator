function fullscreen() {
    switch (document.fullscreen) {
        case false:
            document.body.requestFullscreen();
            document.getElementById("fullScreen").style.backgroundImage = "url(resources/images/exit_fullscreen.png)";
            break;
    
        case true:
            document.exitFullscreen();
            document.getElementById("fullScreen").style.backgroundImage = "url(resources/images/fullscreen.png)"
            break;
        
        default:
            document.body.requestFullscreen();
            break;
    }
}

var num1, num2, oper;
var input = document.getElementById("input");

function btnClick(caller) {
    switch (caller) {
        case "ac":
            input.innerHTML = "";
            num1 = 0;
            num2 = 0;
            break;

        case "one":
            input.innerHTML += "1";
            break;
    
        case "two":
            input.innerHTML += "2";
            break;

        case "thr":
            input.innerHTML += "3";
            break;
        
        case "fou":
            input.innerHTML += "4";
            break;
        
        case "fiv":
            input.innerHTML += "5";
            break;

        case "six":
            input.innerHTML += "6";
            break;

        case "sev":
            input.innerHTML += "7";
            break;

        case "eig":
            input.innerHTML += "8";
            break;

        case "nin":
            input.innerHTML += '9';
            break;

        case "p":
            num1 = parseInt(input.innerHTML);
            oper = "p";
            input.innerHTML = "";
            break;

        case "m":
            num1 = parseInt(input.innerHTML);
            oper = "m";
            input.innerHTML = "";
            break;

        case "x":
            num1 = parseInt(input.innerHTML);
            oper = "x";
            input.innerHTML = "";
            break;

        case "d":
            num1 = parseFloat(input.innerHTML);
            oper = "m";
            input.innerHTML = "";
            break;

        case "e":
            num2 = parseFloat(input.innerHTML);
            switch (oper) {
                case "p":
                    input.innerHTML = num1 + num2;
                    break;
                
                case "m":
                    input.innerHTML = num1 - num2;
                    break;

                case "x":
                    input.innerHTML = num1 * num2;
                    break;

                case "d":
                    if (num2 == 0) {
                        input.innerHTML = "Math Error";
                        num1 = 0;
                        num2 = 0;
                        oper = "";
                    } else {
                        input.innerHTML = num1 / num2;
                    }
                    break;

                case "":
                    num1 = parseFloat(input.innerHTML);
                    input.innerHTML = num1;
                    num1 = 0;
                    num2 = 0;
                    oper = "";
                    break;
            }
    }
}