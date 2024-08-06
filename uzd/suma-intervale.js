function rangeSum(start, end) {
    // 1. atejusios informacijos (params) validavimas
    if (typeof start !== 'number') {
        return 'ERROR: pirma reiksme turi buti skaicius';
    }
    if (start === Infinity || start === -Infinity) {
        return 'ERROR: pirma reiksme turi buti normalus skaicius';
    }
    if (isNaN(start)) {
        return 'ERROR: pirma reiksme turi buti normalus skaicius';
    }
    if (start % 1 !== 0) {
        return 'ERROR: pirma reiksme turi buti sveikasis skaicius';
    }

    if (typeof end !== 'number') {
        return 'ERROR: antra reiksme turi buti skaicius';
    }
    if (end === Infinity || end === -Infinity) {
        return 'ERROR: antra reiksme turi buti normalus skaicius';
    }
    if (isNaN(end)) {
        return 'ERROR: antra reiksme turi buti normalus skaicius';
    }
    if (end % 1 !== 0) {
        return 'ERROR: antra reiksme turi buti sveikasis skaicius';
    }

    if (start > end) {
        return 'ERROR: pirmasis skaicius negali buti didesnis uz antraji';
    }

    // 2. logika
    let sum = 0;

    if (start === 0) {
        sum = end * (end + 1) / 2;
    } else if (end === 0) {
        sum = start * (start - 1) / 2;
    } else if (start < 0 && end > 0) {
        sum = end * (end + 1) / 2;
        sum += start * (start - 1) / 2;
    } else {
        for (let i = start; i <= end; i++) {
            sum += i;
        }
    }

    // 3. logikoje gauto rezultato validavimas

    // 4. rezultato grazinimas
    return sum;
}

console.log(rangeSum('labas', 'rytas'));
console.log(rangeSum(0, 'rytas'));
console.log(rangeSum('rytas', 2));
console.log(rangeSum(777, true));
console.log(rangeSum(true, 777));
console.log(rangeSum(true, false));
console.log(rangeSum(777, []));
console.log(rangeSum([], 777));
console.log(rangeSum([], [15]));
console.log(rangeSum([77], [15]));
console.log(rangeSum([77, 88], [15]));
console.log(rangeSum([77, 88], [15, 16]));
console.log(rangeSum(5, {}));
console.log(rangeSum({}, 5));
console.log(rangeSum({}, {}));
console.log(rangeSum(5, null));
console.log(rangeSum(null, 5));
console.log(rangeSum(null, null));
console.log(rangeSum(5, undefined));
console.log(rangeSum(undefined, 5));
console.log(rangeSum(undefined, undefined));
console.log(rangeSum(5, rangeSum));
console.log(rangeSum(rangeSum, 5));
console.log(rangeSum(rangeSum, rangeSum));
console.log(rangeSum(5, Infinity));
console.log(rangeSum(Infinity, 5));
console.log(rangeSum(Infinity, Infinity));
console.log(rangeSum(5, -Infinity));
console.log(rangeSum(-Infinity, 5));
console.log(rangeSum(-Infinity, -Infinity));
console.log(rangeSum(5, NaN));
console.log(rangeSum(NaN, 5));
console.log(rangeSum(NaN, NaN));

console.log('------------');

// console.log(rangeSum(1, 2, 999));
console.log(rangeSum(1));
console.log(rangeSum());

console.log('------------');

console.log(rangeSum(0, 3.5));
console.log(rangeSum(3.5, 10));
console.log(rangeSum(3.5, 10.82112));
console.log(rangeSum(0, -3.5));
console.log(rangeSum(-3.5, 10));
console.log(rangeSum(-3.5, -10.82112));

console.log('------------');

console.log(rangeSum(4, 0), '-->', 0);
console.log(rangeSum(10, 5), '-->', 0);

console.log('------------');

console.log(rangeSum(0, 4), '-->', 10);
console.log(rangeSum(-50, 50), '-->', 0);
console.log(rangeSum(0, 100), '-->', 5050);
console.log(rangeSum(-70, 30), '-->', -2020);
console.log(rangeSum(574, 815), '-->', 168069);
console.log(rangeSum(0, 0), '-->', 0);

console.log(rangeSum(0, 10), '-->', 55);
console.log(rangeSum(0, 100), '-->', 5050);
console.log(rangeSum(0, 1000), '-->', 500500);
console.log(rangeSum(0, 10_000), '-->', 50005000);
console.log(rangeSum(0, 100_000), '-->', 5000050000);
console.log(rangeSum(0, 100_000_000), '-->', 5000000050000000);
console.log(rangeSum(0, 1_000_000_000), '-->', 500000000500000000);
console.log(rangeSum(0, 10_000_000_000), '-->', 50000000005000000000);

console.log(rangeSum(-10, 0), '-->', -55);
console.log(rangeSum(-100, 0), '-->', -5050);
console.log(rangeSum(-1000, 0), '-->', -500500);
console.log(rangeSum(-10_000, 0), '-->', -50005000);
console.log(rangeSum(-100_000, 0), '-->', -5000050000);
console.log(rangeSum(-100_000_000, 0), '-->', -5000000050000000);
console.log(rangeSum(-1_000_000_000, 0), '-->', -500000000500000000);
console.log(rangeSum(-10_000_000_000, 0), '-->', -50000000005000000000);

// CPU -> 1 core -> 3GHz -> 3mljrd -> 10mljrd -> 3s