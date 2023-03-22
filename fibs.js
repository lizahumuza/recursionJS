 
        function fibs(n) {
            const fib = [0, 1]; 
            for (let i = 2; i < n; i++) {
            fib.push(fib[i-1] + fib[i-2]); // add the next number to the sequence
            }
        return fib.slice(0, n); 
        }
        console.log(fibs(8))