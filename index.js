// triangle
function triangleArea(){
    const base = inputValueById('triangle-base')
    const height = inputValueById('triangle-height')
    validateInput(base,height)
    const area = 0.5*base*height;
    setInnerText('triangle-area',area)
}