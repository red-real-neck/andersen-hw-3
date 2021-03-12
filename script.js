Array.prototype.myFilter = function (cb, context = window) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if ((cb.bind(context))(this[i], i, this)) result.push(this[i]);
    }
    return result;
}

function createDebounceFunction(cb, delayInMs) {
    timerHandler = setTimeout(cb, delayInMs);
    clearTimeout(timerHandler);
    return function() {
        clearTimeout(timerHandler);
        timerHandler = setTimeout(cb, delayInMs);
    };
}

const log100 = () => console.log(100);
const debounceLog100 = createDebounceFunction(log100, 5000);
debounceLog100();
setTimeout(debounceLog100, 2000);
setTimeout(debounceLog100, 3000); 