// triangle
function triangleArea(){
    const base = inputValueById('triangle-base')
    const height = inputValueById('triangle-height')
    validateInput(base,height)
    const area = 0.5*base*height;
    setInnerText('triangle-area',area)
}
//rectangle
function rectangleArea(){
    const width = inputValueById('rectangle-width')
    const length = inputValueById('rectangle-length')
    validateInput(width,length);
    const area = width*length;
    setInnerText('rectangle-area',area)
}
//parallelogram
function parallelogramArea(){
    const base = inputValueById('parallelogram-base')
    const height =inputValueById('parallelogram-height')
    validateInput(base,height)
    const area = base*height
    setInnerText('parallelogram-area',area)
}
//rhombus
function rhombusArea(){
    const diagonal1 = inputValueById('rhombus-diagonal1')
    const diagonal2 = inputValueById('rhombus-diagonal2')
    validateInput(diagonal1,diagonal1)
    const area = 0.5*diagonal1*diagonal2;
    setInnerText('rhombus-area',area)

}