// Assignment 4 Questions - 2D Arrays | DSA

/*

**Question 1**

Given three integer arrays arr1, arr2 and arr3 **sorted** in **strictly increasing** order, return a sorted array of **only** the integers that appeared in **all** three arrays.

**Example 1:**

Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]

Output: [1,5]

**Explanation:** Only 1 and 5 appeared in the three arrays.

*/

// Solution 1

// using hash map

function commonElements(arr1, arr2, arr3) {
	let commEl = {};
	let sortedArray = [];
	for (const el of arr1) {
		commEl[el] = 1;
	}
	for (const el of arr2) {
		if (el in commEl) {
			commEl[el] = commEl[el] + 1;
		}
	}
	for (const el of arr3) {
		if (el in commEl) {
			commEl[el] = commEl[el] + 1;
		}
	}
	for (const el in commEl) {
		if (Object.hasOwnProperty.call(commEl, el)) {
			if (commEl[el] === 3) {
				sortedArray.push(Number(el));
			}
		}
	}
	return sortedArray;
}

// using three pointer approach

function commonElements(arr1, arr2, arr3) {
	let p1 = 0;
	let p2 = 0;
	let p3 = 0;
	let sortedArray = [];
	while (p1 < arr1.length && p2 < arr2.length && p3 < arr3.length) {
		if (
			arr1[p1] === arr2[p2] &&
			arr1[p1] === arr3[p3] &&
			arr2[p2] === arr3[p3]
		) {
			sortedArray.push(arr1[p1]);
			p1 = p1 + 1;
			p2 = p2 + 1;
			p3 = p3 + 1;
		} else {
			if (arr1[p1] === Math.min(arr1[p1], arr2[p2], arr3[p3])) {
				p1 = p1 + 1;
			}
			if (arr2[p2] === Math.min(arr1[p1], arr2[p2], arr3[p3])) {
				p2 = p2 + 1;
			}
			if (arr3[p3] === Math.min(arr1[p1], arr2[p2], arr3[p3])) {
				p3 = p3 + 1;
			}
		}
	}
	return sortedArray;
}

/*

**Question 3**

Given a 2D integer array matrix, return *the **transpose** of* matrix.

The **transpose** of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

**Example 1:**

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]

Output: [[1,4,7],[2,5,8],[3,6,9]]

*/

// Solution 3

function transposeMatrix(matrix) {
	let temp = 0;
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			temp = matrix[i][j];
			matrix[i][j] = matrix[j][i];
			matrix[j][i] = temp;
		}
	}
	return matrix;
}

/*

**Question 4**

Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is **maximized**. Return *the maximized sum*.

**Example 1:**

Input: nums = [1,4,3,2]

Output: 4

**Explanation:** All possible pairings (ignoring the ordering of elements) are:

1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3

2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3

3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4

So the maximum possible sum is 4.

*/

// Solution 4

function maxPairSum(nums) {
	nums.sort((a, b) => a - b);
	let sum = 0;
	for (let index = 0; index < nums.length; index = index + 2) {
		sum = sum + nums[index];
	}
	return sum;
}

/*

**Question 6**

Given an integer array nums sorted in **non-decreasing** order, return *an array of **the squares of each number** sorted in non-decreasing order*.

**Example 1:**

Input: nums = [-4,-1,0,3,10]

Output: [0,1,9,16,100]

**Explanation:** After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100]

*/

// Solution 6

function square(nums) {
	let count = 0;
	for (const num of nums) {
		if (num < 0) {
			count = count + 1;
		}
	}
	if (count === 0) {
		for (let i = 0; i < nums.length; i++) {
			nums[i] = nums[i] * nums[i];
		}
	}
	return nums;
}

/*

**Question 8**

Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

*Return the array in the form* [x1,y1,x2,y2,...,xn,yn].

**Example 1:**

**Input:** nums = [2,5,1,3,4,7], n = 3

**Output:** [2,3,5,4,1,7]

**Explanation:** Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

*/

// Solution 8

// function pairArray(nums){
//   const n = nums.length/2;
//   for (let i = 0; i < n; i++) {

//   }
// }
