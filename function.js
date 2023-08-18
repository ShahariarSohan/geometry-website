// take input
function inputValueById(inputId){
     const input = document.getElementById(inputId).value
     const inputValue = parseFloat(input);
     return inputValue;
}
//set area
function setInnerText(elementId,areaValue){
    const area = document.getElementById(elementId)
    area.innerText = areaValue;
}
function showCalculation(name,value){
    const newDiv =document.getElementById('calculate')
    const p = document.createElement('p')
    p.innerText = name+ ' : '+ value + ' '+'cm^2'
    newDiv.appendChild(p);
}


// validation
// function validateInput(value1,value2){
//     if(isNaN(value1) || isNaN(value2)){
//         alert('Please give valid input')
//     }
// }