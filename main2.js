// амархан-1
// const arr1 = ["a", "b"];
// const arr2 = ["c", "d"];

// console.log(arr1.concat(arr2))

// амархан-2
// const arr =[1,2,3,4,5]

// console.log(arr.fill(0));

// амархан-3
// const even=[3,8,11,15,21]

// console.log(even.filter((num) => num % 2 === 0));

// амархан-4
// const arr = [10, 20, 30];
// const arr2 = arr.shift();
// const arr3 = arr.unshift(5);
// console.log(arr);

// дунд-5
// const arr=[1,[2,3],[4,[5]]]
// console.log(arr.flat(Infinity))

// дунд-6
// const arr = [1, 2, 3, 4, 5];
// const arr2 = arr.map((x) => x * 2);
// console.log(arr2);

// дунд-7
// const arr=[1,2,3]
// const arr2=arr.pop()
// const arr3=arr.push(4,5)
// console.log(arr)

// дунд-8
// const even = (currentValue) => currentValue % 2 === 0;
// const arr=[2,4,6,8]
// console.log(arr.every(even))
// console.log(arr.includes(2))

// дунд-9
// const arr = [50, 2, 11, 32];
// arr.sort((a, b) => a - b);
// console.log(arr);

// // дунд-10
// const arr = ["apple", "banana", "cherry", "mango"];
// const arr2 = arr.find((fruit) => fruit.startsWith("b"));
// console.log(arr2);

// дунд-11
// const arr=[5,22,8,130,44]
// const arr2 = arr.findIndex((num) => num > 10);
// console.log(arr2);

дунд-12
const arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const arr2 = arr.flat(Infinity);
const arr3 = arr2.filter((num) => num % 2 === 0);
const arr4 = arr3.map((x) => x * 2);

console.log(arr);
console.log(arr2);
console.log(arr3);
console.log(arr4);
