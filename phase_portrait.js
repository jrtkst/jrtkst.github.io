function generate() {
    
    var quad = document.querySelector('#quad').checked;
    var lx = Number(document.getElementById('lx').value);
    var ly = Number(document.getElementById('ly').value);
    var narrows = Number(document.getElementById('narrows').value);
    var inits = document.getElementById('inits').value;
    var inits_arr = inits.replaceAll("(", '').replaceAll(")", '').split(",");



    myplot = document.getElementById('plot');
    const xb = lx;
    const yb = ly;
    const xa = quad ? -lx : 0;
    const ya = quad ? -ly : 0;        
    X = linspace(xa, xb, narrows);
    Y = linspace(ya, yb, narrows);
    

    // Check apakah odeint working
    


}


// Functions
function linspace(start, stop, num) { 
    "linspace for js"
    const step = (stop - start) / num;
    return Array.from({length: num}, (_, i) => start + step * i);
}   

function odeint(funcs, Z0, T, num=200) {
    "ODE integration with Runge-Kutta algorithm"
    var fs = funcs();
    var k = length(fs); // Number of functions
    var h = T/num;      // Timestep
    var tspan = linspace(0, T, num+1);
    var out = Array(k + 1).fill().map(() => Array(num + 1).fill(0));
    for (var i = 0; i < num + 1; i++) {
        out[0][i] = tspan[i];
    };
    for (var j = 0; j < k + 1; j++) {
        out[j][0] = Z0[j];
    };
    sol_i = Z0;
    // Runge-Kutta 4
    for (var i = 1; i < num + 1; i++) {
        // K1
        var K1 = [];
        var inp1 = [tspan[i - 1]].concat(sol_i);
        for (var j = 0; j < k; j++) {
            var K1 = K1.concat(fs[j](inp1).map((x, _) => h * x));
        };
        // K2
        var K2 = [];
        var inp2 = sumArr(inp1, kArr(0.5, [h].concat(K1)));
        for (var j = 0; j < k; j++) { 
            var K2 = K2.concat(fs[j](inp2).map((x, _) => h * x)) 
        };
        // K3
        var K3 = [];
        var inp3 = sumArr(inp1, kArr(0.5, [h].concat(K2)));
        for (var j = 0; j < k; j++) { 
            var K3 = K3.concat(fs[j](inp3).map((x, _) => h * x)) 
        };
        // K4
        var K4 = [];
        var inp4 = sumArr(inp1, [h].concat(K3));
        for (var j = 0; j < k; j++) { 
            var K4 = K4.concat(fs[j](inp4).map((x, _) => h * x)) 
        };
        var sol_i = sumArr(sol_i, kArr(1/6, sumArr(K1, kArr(2, K2), kArr(2, K3), K4)));
        for (var s = 1; s < k + 1; s++) {
            out[s][i] = sol_i[s];
        }
    };
    return out;
};
function sumArr(...arr) {
    var n = arr.length;     // Number of arrays
    var k = arr[0].length;  // Entries of arrays
    var out = Array(arr[0].length).fill(0);
    for (var i = 0; i < n ;i++) {
        for (var j = 0; j < k; j++) {
            out[j] += arr[i][j]; 
        };
    };
    return out;
};
function kArr(k, arr) {
    return arr.map((val, _) => val * k);
};
function mulArr(a, b) {
    return a.map((val, i) => val * b[i]);
};
function meshgrid() {

};

function model() {
    var dxdt = function(U) {
        return 2*U[0]*U[1] - U[2]
    }
    var dydt = function(U) {
        return U[1] + 5*U[2]
    }
    return [dxdt, dydt]
};

function cpoint(Z0, T) {
    "Generate unique trajectory starting from Z0 for time T"
    var tspan = linspace(0, T, 300)
    ys = odeint
};



