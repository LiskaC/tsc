const testingAsync = async () => {
    return "Async in typescript";
};
const pow = (x, y) => {
    return Math.pow(x, y);
};
console.log("power as a number: ", pow(373, 4));
const powInString = (x, y) => {
    return Math.pow(x, y).toString();
};
console.log("power as a string: ", powInString(373, 4));
