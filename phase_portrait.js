function generate() {
    console.log('masuk');
    var quad = document.querySelector('#quad').checked;
    var lx = Number(document.getElementById('lx').value);
    var ly = Number(document.getElementById('ly').value);
    var narrows = Number(document.getElementById('narrows').value);
    var inits = document.getElementById('inits').value;

    myplot = document.getElementById('plot');
    const xb = lx;
    const yb = ly;
    const xa = quad ? -lx : 0;
    const ya = quad ? -ly : 0;        
    X = linspace(xa, xb, narrows)
    Y = linspace(ya, yb, narrows)
    console.log(X)


    // Functions
    function linspace(start, stop, num) {
        const step = (stop - start) / num;
        return Array.from({length: num}, (_, i) => start + step * i);
    }   

}



