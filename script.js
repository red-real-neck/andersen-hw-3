Array.prototype.myFilter = function (cb, context = window) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if ((cb.bind(context))(this[i], i, this)) result.push(this[i]);
    }
    return result;
}


const arr = [1, 2, 3, 4, 5];
const arr2 = {
    1: 1,
    2: 2
};

const test = arr.myFilter(function(item) {
    console.log(this, item);
}, arr2);

