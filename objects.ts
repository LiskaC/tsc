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


const arr: number[] = []

arr.push(1)
// will not accept:
// arr.push('1') or arr.push('false)

console.log("number array: ", arr)


type MyList = [number?, string?, boolean?]

const list: MyList = []


type YourList = [number, string, boolean]

const andAnotherList: YourList = [1, '1', true]

console.log("list with specified values: ", andAnotherList)