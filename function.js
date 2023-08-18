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
// validation
// function validateInput(value1,value2){
//     if(isNaN(value1) || isNaN(value2)){
//         alert('Please give valid input')
//     }
// }