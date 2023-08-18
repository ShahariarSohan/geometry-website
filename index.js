// triangle area
function triangleArea(){
    const base = inputValueById('triangle-base')
    const height = inputValueById('triangle-height')
    validateInput(base,height)
    const area = 0.5*base*height;
    setInnerText('triangle-area',area)
}
//rectangle area
function rectangleArea(){
    const width = inputValueById('rectangle-width')
    const length = inputValueById('rectangle-length')
    validateInput(width,length);
    const area = width*length;
    setInnerText('rectangle-area',area)
}
//parallelogram area
function parallelogramArea(){
    const base = inputValueById('parallelogram-base')
    const height =inputValueById('parallelogram-height')
    validateInput(base,height)
    const area = base*height
    setInnerText('parallelogram-area',area)
}
//rhombus area
function rhombusArea(){
    const diagonal1 = inputValueById('rhombus-diagonal1')
    const diagonal2 = inputValueById('rhombus-diagonal2')
    validateInput(diagonal1,diagonal1)
    const area = 0.5*diagonal1*diagonal2;
    setInnerText('rhombus-area',area)
}
//pentagon area
function pentagonArea(){
    const parameter = inputValueById('pentagon-parameter')
    const apothem = inputValueById('pentagon-apothem')
    validateInput(parameter,apothem)
    const area = 0.5*parameter*apothem;
    setInnerText('pentagon-area',area)
}
//ellipse area 
function ellipseArea(){
    const base = inputValueById('ellipse-base')
    const height = inputValueById('ellipse-height')
    validateInput(base,height)
    const area = 3.14*base*height;
    setInnerText('ellipse-area',area)    
}