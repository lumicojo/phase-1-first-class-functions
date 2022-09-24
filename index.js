
function receivesAFunction(callback) {
    return callback();
}

const returnsANamedFunction = function() {
    return dog;
}
    
function dog() {
    console.log("dog");
    
}

function returnsAnAnonymousFunction() {
    return function() {
        // Function Body
     }
}