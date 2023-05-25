//exercise 1
function math(x, y) {
    var z = x + y;
    return z;
}
var output1 = math(29, 67);
console.log(output1);

//exercise 2
function max(x, y) {
    var z = 0;
    if (x > y) {
        z = x;
    } else {
        z = y;
    }
    return z;
}
var output2 = max(31, 77);
console.log(output2);

//exercise 3
function sum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
var arr = [21, 15, 6, 83, 64, 73];
var output3 = sum(arr);
console.log(output3);

//execise 4
function num(x) {
    var i = 0;
    while (i <= x) {
        return i;
        i++;
    }
}
var output4 = num(5);
console.log(output4);

//exercise 5
function max(x) {
    var max = 0
    for (var i = 0; i < x.length; i++) {
        if (x[i] > max) {
            max = x[i];
        }
    }
    return max;
}
var x = [20, 5, 62, 98, 101, 101, 28, 58];
var output5 = max(x);
console.log(output5);

