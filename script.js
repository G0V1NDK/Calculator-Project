let string =" ";
let buttons = document.querySelectorAll('.num-btn');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', function(e){
        // function for input screen
        function screen() {document.querySelector('.calc-screen').value = string};

        let screenOne = document.querySelector('.calc-screen');

        // function back() {
        //     var value = document.getElementById("clr").value;
        //     document.getElementById("clr").value = value.substr(0, value.length - 1);
        // }

        // operator functions
        if(e.target.innerHTML == '='){
            string = eval(string);
            screen();
        }
        // multiplication symbol
        // **needs working button 'X' 
        else if(e.target.innerText == '×'){
            // let multiply = e.target.innerText;
            // multiply = '*';
            // screenOne.value += multiply;

            // method-1
            // e.target.innerText = '*';
            // screenOne.value += e.target.innerText;
            // screen();
            
            // method-2
            e.target.innerText = '*';
            string += e.target.innerText;
            screenOne.value = string;
        }
        // backspace or delete
        else if(e.target.innerHTML == 'del'){
            screenOne.value = screenOne.value.substr(0, screenOne.value.length - 1);
            string = screenOne.value;  
        }
        // clear functioning
        else if(e.target.innerHTML == 'AC'){
            string = '';
            screen();
        }
        // display screen
        else{
            console.log(e.target.innerHTML);
            string = string + e.target.innerHTML; 
            screen();
        }
    }) 
});
