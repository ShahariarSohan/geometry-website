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
       
}