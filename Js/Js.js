const button = document.querySelectorAll('.calculator_bottom');
const text = document.querySelector('.display_text');
let dataresult = text.getAttribute('value');
let t =0;

const buttonvalue = document.querySelectorAll('.main_btn');
Array.from(buttonvalue).forEach(e=>{
    e.addEventListener('click',()=>{     
        if(e.innerText == '='){
            dataresult = eval(dataresult);
            text.value = dataresult;
        }   
        else if(e.innerText =='Del'){
            let accurate = text.value; 
            dataresult = accurate.slice(0 , accurate.length-1);
            text.value = dataresult;
        }
        else if(e.innerText == '%')
            {
                dataresult = dataresult+e.innerText;
                text.value = dataresult;
                let valuedata = dataresult.slice(0,dataresult.length-1);
                dataresult = valuedata;
                dataresult = eval(dataresult+'/100');
            }
        else if(e.innerText == 'Ac'){
            dataresult = "";
            text.value = dataresult;
        }
        else{
            dataresult = dataresult+e.innerText;
            text.value = dataresult;
        }
    });
});
 