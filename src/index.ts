let sales: number = 123456789;
let course: string = "typescript";
let is_published: boolean = true;

// enums
enum Size {
    Small = 1,
    Medium,
    Large,
}
let mySize: Size = Size.Small;
// console.log(mySize)

function calculateTax(income: number): number {
    if (income < 50_000) {
        return income * 1.2;
    }
    return income * 1.3;
}

// type alias
type Employee = {
    readonly id: number; // readonly property
    name: string;
    retire: (date: Date) => void;
};

let employee: Employee = {
    id: 1,
    name: "Angelo",
    retire: (date: Date) => {
        console.log(date);
    },
};

// union types
function kgToLbs(weight: number | string): number {
    // narrowing
    if (typeof weight == "number") {
        return weight * 2.2;
    } else {
        return parseInt(weight) * 2.2;
    }
}
