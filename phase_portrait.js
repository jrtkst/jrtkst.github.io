const quad = document.querySelector('#quad').checked
const btn = document.querySelector('#btn')

var lx = Number(document.getElementById('lx').value)
var ly = Number(document.getElementById('ly').value)
var narrows = Number(document.getElementById('narrows').value)
var inits = document.getElementById('inits').value


myplot = document.getElementById('plot');
const xb = lx;
const yb = ly;
if (quad == true) {
    const xa = -lx;
    const ya = -ly;
} else {
    const xa = 0;
    const ya = 0;
}
    
X = linspace(xa, xb, narrows)
Y = linspace(ya, yb, narrows)


// Functions
function linspace(start, stop, num) {
    const step = (stop - start) / num;
    return Array.from({length: num}, (_, i) => start + step * i);
}   

