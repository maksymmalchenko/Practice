// Сделайте функцию, которая считает и выводит количество своих вызовов.

const fn = () => {
    let calls = 0;

    const countCalls = () => {
        calls += 1;
        return calls;
    };

    return countCalls;
};

const constA = fn();

console.dir(constA);
console.log(constA());
console.dir(constA);
console.log(constA());
console.dir(constA);
console.log(constA());
