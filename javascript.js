// document.getElementById("Calculator").innerHTML = "Hello World!";


// document.getElementsByClassName("press").addEventListener('click', calculation(value));
// // let value=document.getElementsByClassName("press").value;
// function calculation(value)
// {
//     let ele = document.getElementsByName("answer").value;
//     ele += value;
// }
// document.getElementsByClassName("result").addEventListener("click", resultfunction);
// function resultfunction(){
    //     let res = document.getElementByName(answer);
//     res.value = eval(res.value);
// }

let res = "";
let buttons = document.querySelectorAll('button');
let screen = document.getElementById('display');
for (item of buttons)
{
    item.addEventListener('click', (ele)=>{
        buttonText = ele.target.innerText;
        console.log('button text is ', buttonText);
        // let lastletter = res.slice(-1);
        if(buttonText == 'C')
        {
            res = "";
            screen.value = res;
        }
        else if(buttonText == "=")
        {
            let lastletter = res.slice(-1);
            if((lastletter == '+') || (lastletter == '-') || (lastletter == '*') || (lastletter == '%') || (lastletter == '/') || (lastletter == ''))
            {
                alert("It is not possible you have to press any digit!!");
            }
            else{
                screen.value = eval(res);
            }
        }
        else if(buttonText == "~")
        {
            res = res.substr(0,res.length-1);
            screen.value = res;
        }
        else if((buttonText == '+')  || (buttonText == '*') || (buttonText == '-') || (buttonText == '%') || (buttonText == '/'))
        {
            let lastletter = res.slice(-1);
            console.log(lastletter);
            let lasttwochar = res.slice(-2);
            if((buttonText == '-') && (res == ""))
            {
                res += buttonText;
                screen.value =  res;
            }
            if((lasttwochar == "--") && (buttonText=='-'))
            {
                // res = "";
                screen.value = res;
            }
            else if((lastletter == '-') && (buttonText=='-'))
            {
                res += buttonText;
                screen.value =  res;
            }
            else if((lastletter == '+') || (lastletter == '-') || (lastletter == '*') || (lastletter == '%') || (lastletter == '/') || (lastletter == ''))
            {
                // res = "Not possible";
                // screen.value = res;
                screen.value = res;
            }
            else
            {
                res += buttonText;
                screen.value =  res;
    
            }
        }
        else if(res.length > 18)
        {
            alert("Not possible");
        }
        else{
            if(res == "Not possible")
            {
                res = "";
            }
            res += buttonText;
            screen.value =  res;
        }
    })
    
}