//Initializations : 

let rev1 = 'Reverse';


// Reversing string

    // 1. Using reverse method : 
    const reverse1 = rev1.split('').reverse('').join('');
    document.getElementById("usingReverse").innerHTML = reverse1;

    // 2. Using spread operator and reduce method
    const reverse2 = [...rev1].reduce((n,p) => p+n);
    document.getElementById("usingSpreadReduce").innerHTML = reverse2;
