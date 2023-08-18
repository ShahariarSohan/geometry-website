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
    const p1 = document.createElement('p')
    p1.innerText = name+ ' : '+ value +'cm^2'
    newDiv.appendChild(p1);
    const p2 = document.createElement('p')
    newDiv.appendChild(p2)
    p2.innerHTML =`<button class=" text-white font-bold p-2 bg-violet-800  rounded-md">convert m<sup>2</sup></button>
    `
    
}


// validation
// function validateInput(value1,value2){
//     if(isNaN(value1) || isNaN(value2)){
//         alert('Please give valid input')
//     }
// }