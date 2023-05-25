/**
 * adding ? after the property name makes it optional
 */
function fullName(params: { first: string; last?: string }) {
    return params.first + " " + params.last;
}

console.log(fullName({ first: "Angelo" }));
