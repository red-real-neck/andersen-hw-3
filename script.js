Array.prototype.myFilter = function (cb, context = window) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if ((cb.bind(context))(this[i], i, this)) result.push(this[i]);
    }
    return result;
}

function createDebounceFunction(delayInMs) {
    const currentTime = new Date();
    const timeOut = new Date().setTime(currentTime.getTime() + delayInMs);
    while (currentTime < timeOut) {
        currentTime.setTime(new Date().getTime());
    }
    return console.log('done');
}

createDebounceFunction(1000);