// function declaration
function howdy(person, message) {
    console.log(person + ' says ' + message);
}

howdy('Tina', 'greetings!');

//function expression
var numba = function(string) {
    if (string.length < 7) {
        console.log('What a short little word!');
    } else if (string.length == 7) {
        console.log('7, what a perfect choice!');
    } else {
        console.log('I’m sorry, but that’s too many to count.');
    }
};

numba('7');
numba('seventy');
numba('university');

//function inception
function inception (callback, value) {
    callback(value);
}

function logger( message ) {
    console.log( message );
}

inception( logger, 'Inception is a great movie!' );
