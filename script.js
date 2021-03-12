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