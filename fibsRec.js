function fibsRec(n) {
    if (n === 0) {
      return [];
    } else if (n === 1) {
      return [0];
    } else if (n === 2) {
      return [0, 1];
    } else {
      const fib = fibsRec(n - 1);
      fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
      return fib;
    }
  }
console.log(fibsRec(8)) 