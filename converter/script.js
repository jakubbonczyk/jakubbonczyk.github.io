const btn = document.querySelector('button');
const previousValues = document.querySelector('.previousvalues');
const resultClass = document.querySelector('.result');

const firstInput = document.querySelector('.input1');
const secondInput = document.querySelector('.input2');
const thirdInput = document.querySelector('.input3');

const getValues = (e) => {
    let value1 = firstInput.value;
    let value2 = secondInput.value;
    let value3 = thirdInput.value;
    let result = 0;

    if (value1 === "" || value2 === "" || value3 === "")
    {
        previousValues.textContent = `Inappropriate values. Try again!`
    }   else {
        value1 = parseInt(firstInput.value);
        value2 = parseInt(secondInput.value);
        value3 = parseInt(thirdInput.value);
        
        result = value1 + value2/60 + value3/3600;
        previousValues.textContent = `You have entered ${value1} : ${value2} : ${value3}`;
        resultClass.textContent = `Your value equals ${result}` ;
    }    
}

btn.addEventListener("click", getValues);
