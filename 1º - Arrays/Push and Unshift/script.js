
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers[numbers.length] = 10;
console.log(numbers);

// Method Push
// Insert an element on the final position

numbers.push(11);
console.log(numbers);

numbers.push(12, 13);
console.log(numbers);

// Insert an element on the first position

Array.prototype.insertFirstPosition = function(value) {
    for (let i = this.length; i >= 0; i--) {
        this[i] = this[i - 1];
    }
    this[0] = value;
}    
numbers.insertFirstPosition(-1);

console.log(numbers);

// Method Unshift

numbers.unshift(-2);
console.log(numbers);

numbers.unshift(-4, -3);
console.log(numbers);