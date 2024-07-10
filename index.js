// Function to receive and call a callback function
function receivesAFunction(callback) {
    // Call the callback function
    callback();
}

// Function to return a named function
function returnsANamedFunction() {
    // Define a named function and return it
    return function namedFunction() {
        // Some functionality
    };
}

// Function to return an anonymous function
function returnsAnAnonymousFunction() {
    // Return an anonymous function
    return function() {
        // Some functionality
    };
}

module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction
};

