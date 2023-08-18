// triangle area
function triangleArea(){
    const base = inputValueById('triangle-base')
    const height = inputValueById('triangle-height')
    // validateInput(base,height)
    if(isNaN(base) || isNaN(height)){
        alert('Please give valid input')
        return;
    }
    const area = 0.5*base*height;
    setInnerText('triangle-area',area)
   showCalculation('Triangle Area',area)
}
//rectangle area
function rectangleArea(){
    const width = inputValueById('rectangle-width')
    const length = inputValueById('rectangle-length')
    // validateInput(width,length);
    if(isNaN(width) || isNaN(length)){
        alert('Please give valid input')
        return;
    }
    const area = width*length;
    setInnerText('rectangle-area',area)
   showCalculation('Rectangle Area',area)

}

//parallelogram area
function parallelogramArea(){
    const base = inputValueById('parallelogram-base')
    const height =inputValueById('parallelogram-height')
    // validateInput(base,height)
    if(isNaN(base) || isNaN(height)){
        alert('Please give valid input')
        return
    }
    const area = base*height
    setInnerText('parallelogram-area',area)
   showCalculation('Parallelogram Area',area)

}

//rhombus area
function rhombusArea(){
    const diagonal1 = inputValueById('rhombus-diagonal1')
    const diagonal2 = inputValueById('rhombus-diagonal2')
    // validateInput(diagonal1,diagonal1)
    if(isNaN(diagonal1) || isNaN(diagonal2)){
        alert('Please give valid input')
        return
    }
    const area = 0.5*diagonal1*diagonal2;
    setInnerText('rhombus-area',area)
   showCalculation('Rhombus Area',area)

}
//pentagon area
function pentagonArea(){
    const parameter = inputValueById('pentagon-parameter')
    const apothem = inputValueById('pentagon-apothem')
    // validateInput(parameter,apothem)
    if(isNaN(parameter) || isNaN(apothem)){
        alert('Please give valid input')
        return
    }
    const area = 0.5*parameter*apothem;
    setInnerText('pentagon-area',area)
   showCalculation('Pentagon Area',area)
}
//ellipse area 
function ellipseArea(){
    const base = inputValueById('ellipse-base')
    const height = inputValueById('ellipse-height')
    // validateInput(base,height)
    if(isNaN(base) || isNaN(height)){
        alert('Please give valid input')
        return
    }
    const area = 3.14*base*height;
    setInnerText('ellipse-area',area)
   showCalculation('Ellipse Area',area)
}