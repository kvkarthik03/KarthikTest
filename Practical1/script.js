
let button = document.querySelector("#button");
 
button.addEventListener("click", calculateBmi);

function calculateBmi() {
    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);
 
    let result = document.querySelector("#result");

    if (height === "" || isNaN(height))
        result.innerHTML = "Enter a valid Height";
 
    else if (weight === "" || isNaN(weight))
        result.innerHTML = "Enter a valid Weight";

    else {
        let bmi = (weight / ((height * height)/ 10000)).toFixed(2);
        
        if (bmi < 18.6) result.innerHTML =
            `Under Weight : Your BMI is <span>${bmi}</span>`;
    
        else if (bmi >= 18.6 && bmi < 24.9)
            result.innerHTML =
                `Normal : Your BMI is <span>${bmi}</span>`;
    
        else result.innerHTML =
            `Over Weight : Your BMI is <span>${bmi}</span>`;
    }
}