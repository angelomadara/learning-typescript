type AddTwoNumberType = {
    x: number;
    y: number;
};

function addTwoNumbers(params: AddTwoNumberType) {
    return params.x + params.y;
}

console.log(addTwoNumbers({ x: 1, y: 2 }));
