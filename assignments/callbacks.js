// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and
//a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = [ 'Pencil', 'Notebook', 'yo-yo', 'Gum' ];

//Given this problem:

function getLength(array, cb) {
	// getLength passes the length of the array into the callback.
	cb(array.length);
}
// Invoking function
getLength(items, function(length) {
	console.log(length);
});

function last(arr, cb) {
	// last passes the last item of the array into the callback.
	cb(arr[arr.length - 1]);
}
// Invoking Function
last(items, function(lastItem) {
	console.log(lastItem);
});

function sumNums(x, y, cb) {
	// sumNums adds two numbers (x, y) and passes the result to the callback.
	cb(x + y);
}
//Invoking Function
sumNums(10, 13, function(added) {
	console.log(added);
});

function multiplyNums(x, y, cb) {
	// multiplyNums multiplies two numbers and passes the result to the callback.
	cb(x * y);
}
// Invoking Function
multiplyNums(10, 13, function(multiplied) {
	console.log(multiplied);
});

function contains(item, list, cb) {
	// contains checks if an item is present inside of the given array/list.
	// Pass true to the callback if it is, otherwise pass false.
	if (list.includes(item) === true) {
		cb(true);
	} else {
		cb(false);
	}
}
contains('Notebook', items, function(find) {
	console.log(find);
});
/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
	// removeDuplicates removes all duplicate values from the given array.
	// Pass the duplicate free array to the callback function.
	// Do not mutate the original array.
}
