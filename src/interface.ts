interface AddTwoNumberArguments {
    x: number;
    y: number;
}

function addingTwoNumbers(params: AddTwoNumberArguments) {
    return params.x + params.y;
}

console.log(
    addingTwoNumbers({
        x: 1,
        y: 2,
    })
);
