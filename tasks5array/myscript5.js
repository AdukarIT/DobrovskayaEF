/*Task 1.

function getRandomArray(len) {
	let array = [];
	for (let i = 0; i < len; i++) {
		array[i] = (Math.random() * 2);
	} return array;
} 
console.log(getRandomArray(12));

Task 2.

function average(len) {
  let arr = getRandomArray(12);
  if (len == 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += Math.floor(arr[i]);
  }
  let averageArithmetic = sum / len;
  return averageArithmetic;
} 
console.log(average(12));


Task 3.

function minOneTwo(array) {
	let numbersMin = array.sort(function(a, b){
  	return a - b;
  }
 )
  console.log("Наименьшие числа в массиве: " + array[0] + " и " + array[1]);
}
minOneTwo(getRandomArray(12));

Task 4.

function remove(array) {
  getRandomArray(12);
  for(let i = 0; i < array.length; i++) {
    if (array[i] < 0.3) {
    array[i] = 0;
    }
  }
  return array;
}
console.log(remove(getRandomArray(12)));

Task 5.

function sum(array1, array2) {
	let array3 = new Array(array1.length);
	for (let i = 0; i < array1.length; i++) {
		array3[i] = array1[i] + array2[array1.length - 1 - i];
	}
	return array3;
}
console.log(sum(getRandomArray(12), getRandomArray(12)));

Task 6.

function bubble(array) {
	let array = getRandomArray(12);
    let temp; 
    for (let i = array.length - 1; i > 0; i--) {  
        let count = 0;
        for (let j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) {
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                count++;
            }
        }  
        if (count == 0) {
          break;
        } 
    }
  return array;
 }

console.log(bubble(getRandomArray(12)));

*/

