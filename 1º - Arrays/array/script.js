let daysOfWeek = new Array();
daysOfWeek = new Array(7);

console.log(daysOfWeek);

daysOfWeek = new Array('sunday', 'monday', 'tuesday', 'wednesday',
                        'thursday', 'friday', 'saturday');
console.log(daysOfWeek);

// The Better Practice Way

let daysOfWeek2 = [];

console.log(daysOfWeek.length);

// Accesing all the elements with a Loop

for (let i = 0; i < daysOfWeek.length; i++) {
    console.log(daysOfWeek[i]);
    
}

// Sequence of Fibonacci

const fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;
for (let i = 3; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
for (let i = 1; i < fibonacci.length; i++) {
    console.log(fibonacci[i]);
    
}

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers[numbers.length] = 10;
console.log(numbers);