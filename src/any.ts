// any allows a variable to accept any types
function addingTwoNumber(x: any, y: any) {
    return x + y;
}

console.log(addingTwoNumber(1, 2));
console.log(addingTwoNumber("a", 2));
