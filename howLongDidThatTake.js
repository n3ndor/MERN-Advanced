// Number.prototype.isPrime = function () {
//     if (this === 2) {
//         return true;
//     }
//     if (this <= 1 || this % 2 === 0) {
//         return false;
//     }
//     let sqrt = Math.sqrt(this);
//     for (let i = 3; i <= sqrt; i += 2) {
//         if (this % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// const { performance } = require('perf_hooks');
// const start = performance.now();
// let primeCount = 0;
// let num = 2;
// while (primeCount < 1e4) {
//     if (num.isPrime()) {
//         primeCount++;
//     }
//     num++;
// }
// console.log(`The 10,000th prime number is ${num - 1}`);
// console.log(`This took ${performance.now() - start} milliseconds to run`);
//10.000th took 135.87970000505447 milliseconds to run
//100.000th took 3718.6338000297546 milliseconds to run
//1.000.000th took 117726.51530003548 milliseconds to run
///////////////////////////////////////////////////////////////////////////////////////////

// const start = performance.now();

// function rFib(n) {
//     if (n < 2) {
//         return n;
//     }
//     return rFib(n - 1) + rFib(n - 2);
// }
// rFib(20);
//This took 1.1324999928474426 milliseconds to run


// function iFib(n) {
//     const val = [0, 1];
//     while (val.length - 1 < n) {
//         let len = val.length;
//         val.push(val[len - 1] + val[len - 2]);
//     }
//     return val[n];
// }
// iFib(20);
//This took 0.03960001468658447 milliseconds to run

// console.log(`This took ${performance.now() - start} milliseconds to run`);

//////////////////////////////////////////////////////////////////////////////////////////////

// const start = performance.now();

// const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";

// const reversed1 = story.split("").reverse().join("");
// //This took 0.07809996604919434 milliseconds to run

// let reversed2 = '';
// for (let i = story.length - 1; i >= 0; i--) {
//     reversed2 += story[i];
// }
// This took 0.17150002717971802 milliseconds to run

// const reversed3 = story.split("").reduce((acc, char) => char + acc, '');
// // This took 0.05180001258850098 milliseconds to run


// console.log(`This took ${performance.now() - start} milliseconds to run`);