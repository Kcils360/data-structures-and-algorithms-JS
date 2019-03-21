'use strict';

module.exports = exports = {};

function arrayShift(arr, val){
    var array1 = [];
    var array2 = [];
    let half = arr.length/2;

    for(let i=0; i < half; i++){
        array1[i] = arr[i];
    }

    for(let i=half; i < arr.length; i++){
        let count = 0;
        array2[count] = arr[i];
    }

    array1[array1.length] = val;

    for(let i=0; i<array2.length; i++){
        array1[array1.length] = array2[i];
    }
    return array1;
}



///refactor later
function arrayShift2(arr, val){
    var array1 = [];
    let half = Math.floor(arr.length/2);

    for(let i=0; i < half; i++){
        array1[i] = arr[i];
    }
    array1[array1.length] = val;

    for(let i=half; i < arr.length; i++){
        let count = 0;
        array1[++half] = arr[i];        
    }
    return array1;    
}


//third refactor - do it in one for loop!
exports.arrayShift3(arr, val) = () => {
    var array1 = [];
    let half = Math.floor(arr.length/2);

    for(let i=0; i < arr.length; i++){
        if(i == half){
            array1[half] = val;
        }
        if(i<half){
            array1[i] = arr[i]
        }
        array1[i+1] = arr[i]    
    }
    return array1;         
}