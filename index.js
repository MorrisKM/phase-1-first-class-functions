function receivesAFunction (sayHello) {
    sayHello();
}
function returnsANamedFunction () {
    function firstName () {
        console.log('Morris')
    }
    return firstName;
}
function returnsAnAnonymousFunction () {
    return function () {
        return 'Munene'
    }
}
sayHello = () => {
    return 'Hello'
}
receivesAFunction(sayHello());
console.log(returnsANamedFunction());
returnsAnAnonymousFunction();
sayHello();
