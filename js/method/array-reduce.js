// [1, 2, 3] -> 123
// [true, false] -> true

const marks = [10, 2, 8, 4, 6];

let sum = 0;
for (const mark of marks) {
    sum += mark;
}
console.log(sum);

const markSum = marks.reduce((sum, mark) => sum + mark, 0);
console.log(markSum);

console.log([1, 2, 3, 4, 5]);

// 1+2+3+4+5 = 15
console.log([1, 2, 3, 4, 5].reduce((t, n) => t + n));

// 0+1+2+3+4+5 = 15
console.log([1, 2, 3, 4, 5].reduce((t, n) => t + n, 0));

// 1000+1+2+3+4+5 = 1015
console.log([1, 2, 3, 4, 5].reduce((t, n) => t + n, 1000));

// 1-2-3-4-5 = -13
console.log([1, 2, 3, 4, 5].reduce((t, n) => t - n));

// 0-1-2-3-4-5 = -15
console.log([1, 2, 3, 4, 5].reduce((t, n) => t - n, 0));

// 1*2*3*4*5 = 120
console.log([1, 2, 3, 4, 5].reduce((t, n) => t * n));

// 0*1*2*3*4*5 = 0
console.log([1, 2, 3, 4, 5].reduce((t, n) => t * n, 0));

// 1*1*2*3*4*5 = 120
console.log([1, 2, 3, 4, 5].reduce((t, n) => t * n, 1));

// 333*1*2*3*4*5 = 39960
console.log([1, 2, 3, 4, 5].reduce((t, n) => t * n, 333));

console.log([1, 2, 3, 4, 5].reduce((max, n) => max > n ? max : n, -Infinity));
console.log([4, 5, 1, 2, 3].reduce((max, n) => max > n ? max : n, -Infinity));
console.log([5, 4, 1, 2, 3].reduce((max, n) => max > n ? max : n, -Infinity));
console.log([5].reduce((max, n) => max > n ? max : n, -Infinity));
console.log([].reduce((max, n) => max > n ? max : n, -Infinity));

console.log([-5, -4, -1, -2, -3].reduce((max, n) => max > n ? max : n, -Infinity));

console.clear();

console.log([10, 2, 8, 4, 6].reduce((min, n) => min < n ? min : n, Infinity));
