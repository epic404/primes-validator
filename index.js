function countPrimes(number) {
    let basePrimes = [2];
    let count = 0;

    for (let i = 0; i <= number; i++) {
        const testNum = i;

        for (let p = 0; p < basePrimes.length; p++) {
            const primeNum = basePrimes[p];

            if (testNum % primeNum === 0) {
                break;
            }

            if (p === basePrimes.length - 1) {
                basePrimes.push(testNum);
            }
        }
    }

    console.log(basePrimes.length);
}

// TEST
countPrimes(1000);