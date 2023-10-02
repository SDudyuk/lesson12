/*Task 1*/
function summarize(num) {
    return function (value = 1) {
        return num + value;
    };
}
/*Test:*/
const testSummarize = summarize(5);
console.log('Task 1 (arg=3):', testSummarize(3));
console.log('Task 1 (no arg):', testSummarize());

/*Task 2*/
function counter(startValue, step) {
    let counterValue = startValue;

    return {
        increment() {
            counterValue += step;
            return counterValue;
        },

        decrement() {
            counterValue -= step;
            return counterValue;
        },

        reset() {
            counterValue = startValue;
            return counterValue;
        },
    };
}
/*Test:*/
const testCounter = counter(10, 5);
console.log('Task 2', 'startValue: ', '10');
console.log('Task 2', 'increment 5: ', testCounter.increment());
console.log('Task 2', 'increment 5: ', testCounter.increment());
console.log('Task 2', 'reset: ', testCounter.reset());
console.log('Task 2', 'decrement 5: ', testCounter.decrement());
console.log('Task 2', 'reset: ', testCounter.reset());
