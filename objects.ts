let lucky = 23;

let unlucky: number;

interface Person {
    first: string;
    last: string;
    [key: string]: any
}

const person1: Person = { 
    first: "Jeff",
    last: 'Sessions',
    famous: true
}