function gcd(a, b){
    if(!b){
        return a;
    }
    return gcd(b, a%b);
}

//console.log(gcd(150, 168))

const fs = require('fs');
const readline = require('readline');
async function parseCSV(csvfile){
    const fileStream = fs.createReadStream(csvfile);
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    let result = [];
    for await (const line of rl){
        if(line.indexOf(',')>-1){
            let lsline = line.split(',');
            result.push(lsline);
        }

    }
    console.log(result)
    return result;
}
//console.log(parseCSV());

/*document.getElementById('file').onchange = function parseCSV (){
    var file = this.file[0];
    var reader = new FileReader();
    reader.onload = function (progressEvent){
        console.log(this.result);
        var lines = this.result.split('\n');
        for(var line = 0; line<lines.length; line++){
            console.log(lines[line]);
        }
    };
    reader.readAsText(file);
}*/
/*function quicksort(array) {
    if (array.length <= 1) {
        return array;
    }

    var pivot = array[0];

    var left = [];
    var right = [];

    for (var i = 1; i < array.length; i++) {
        array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }

    return quicksort(left).concat(pivot, quicksort(right));
};

var unsorted = [23, 45, 16, 37, 3, 99, 22];
var sorted = quicksort(unsorted);

console.log('Sorted array', sorted);*/

function quicksort(arr){
    return realsort(arr, 0, arr.length-1);
}
function realsort(A, lo, hi){
    if (lo>=hi||lo<0){
        return A;
    }
    let pi = partition(A, lo, hi);
    realsort(A, lo, pi-1);
    realsort(A, pi+1, hi);
    return A;
}
function partition(arr, lo, hi){
    let pivot = arr[hi];
    let i = lo-1;
    for(let j =lo; j<=hi-1; j++){
        if (arr[j]<=pivot){
            i+=1;
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            //[arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    i += 1;
    let temp2 = arr[i];
    arr[i] = arr[hi];
    arr[hi] = temp2;
    //[arr[i], arr[hi]] = [arr[hi], arr[i]];
    return i;
}
console.log(quicksort([2, 8, 5, 1, 4, 3]));

