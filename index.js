function napTime() {
    return "I need to finish my homework.";

}

function receivesAFunction(stayAwake) {
    napTime();
    stayAwake();

}

function returnsANamedFunction() {
    return receivesAFunction;
}


function returnsAnAnonymousFunction() {
    return function () { }
}
