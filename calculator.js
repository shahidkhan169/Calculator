document.addEventListener('keydown', function(event) {
    const key = event.key;
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '-', '*', '/'];

    if (allowedKeys.includes(key)) {
        display(key);
    } else if (key === 'Enter' || key === '=') {
        calculate();
    } else if (key === 'Escape') {
        Clear();
    } else if (key === 'Backspace') {
        del();
    }

    event.preventDefault();
});

const output=document.getElementById("output")
output.value="";
function Clear()
{
    output.value="0";
}
function display(num)
{
    if(output.value==="0")
    {
        output.value=num;
    }
    else{
        output.value+=num;
    }
    
}
function calculate()
{
    try{
        output.value=math.evaluate(output.value);
        output.classList.remove('error-message');
    }
    catch(error ){
        output.value="SYNTAX ERROR";
        output.classList.add('error-message');
    }
}

function del(){
    output.value=output.value.slice(0,-1);
}