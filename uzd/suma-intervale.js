function rangeSum(start, end) {
    // 1. atejusios informacijos (params) validavimas

    // 2. logika
    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += i;
    }

    // 3. logikoje gauto rezultato validavimas

    // 4. rezultato grazinimas
    return sum;
}

// console.log(rangeSum(0, 4), '-->', 10);
// console.log(rangeSum(-50, 50), '-->', 0);
// console.log(rangeSum(0, 100), '-->', 5050);
// console.log(rangeSum(-70, 30), '-->', -2020);
// console.log(rangeSum(574, 815), '-->', 168069);
// console.log(rangeSum(0, 0), '-->', 0);

console.log(rangeSum('labas', 'rytas'));
