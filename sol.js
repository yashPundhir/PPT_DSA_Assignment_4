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

**Question 2**

Given two **0-indexed** integer arrays nums1 and nums2, return *a list* answer *of size* 2 *where:*

- answer[0] *is a list of all **distinct** integers in* nums1 *which are **not** present in* nums2*.*
- answer[1] *is a list of all **distinct** integers in* nums2 *which are **not** present in* nums1.

**Note** that the integers in the lists may be returned in **any** order.

**Example 1:**

**Input:** nums1 = [1,2,3], nums2 = [2,4,6]

**Output:** [[1,3],[4,6]]

**Explanation:**

For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].

For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].

*/

// Solution

function findMissingDistinct(nums1, nums2) {
	const set1 = new Set();
	const set2 = new Set();

	for (let num of nums1) {
		set1.add(num);
	}

	for (let num of nums2) {
		set2.add(num);
	}

	const notInNums2 = [];
	const notInNums1 = [];

	for (let num of nums1) {
		if (!set2.has(num)) {
			notInNums2.push(num);
		}
	}

	for (let num of nums2) {
		if (!set1.has(num)) {
			notInNums1.push(num);
		}
	}

	return [notInNums1, notInNums2];
}

const nums1 = [1, 2, 3];
const nums2 = [2, 4, 6];
console.log(findMissingDistinct(nums1, nums2)); // Output: [[1,3],[4,6]]

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

**Question 5**
You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase **may be** incomplete.

Given the integer n, return *the number of **complete rows** of the staircase you will build*.

**Example 1:**

[]()

![v2.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4bd91cfa-d2b1-47b3-8197-a72e8dcfff4b/v2.jpg)

**Input:** n = 5

**Output:** 2

**Explanation:** Because the 3rd row is incomplete, we return 2.

*/

// Solution

function arrangeCoins(n) {
	let left = 1;
	let right = n;

	while (left <= right) {
		const mid = Math.floor((left + right) / 2);
		const sum = (mid * (mid + 1)) / 2;

		if (sum <= n) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}

	return right;
}

const n = 5;
console.log(arrangeCoins(n)); // Output: 2

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

**Question 7**
You are given an m x n matrix M initialized with all 0's and an array of operations ops, where ops[i] = [ai, bi] means M[x][y] should be incremented by one for all 0 <= x < ai and 0 <= y < bi.

Count and return *the number of maximum integers in the matrix after performing all the operations*

**Example 1:**

![q4.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4d0890d0-7bc7-4f59-be8e-352d9f3c1c52/q4.jpg)

**Input:** m = 3, n = 3, ops = [[2,2],[3,3]]

**Output:** 4

**Explanation:** The maximum integer in M is 2, and there are four of it in M. So return 4.

*/

// Solution

function maxCount(m, n, ops) {
	let minRow = m;
	let minCol = n;

	for (let [ai, bi] of ops) {
		minRow = Math.min(minRow, ai);
		minCol = Math.min(minCol, bi);
	}

	return minRow * minCol;
}

// Example usage:
const m = 3;
const n = 3;
const ops = [
	[2, 2],
	[3, 3],
];
console.log(maxCount(m, n, ops)); // Output: 4

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

function rearrangeArray(nums, n) {
	const result = [];

	let ptrX = 0;
	let ptrY = n;

	for (let i = 0; i < n; i++) {
		result.push(nums[ptrX]);
		result.push(nums[ptrY]);
		ptrX++;
		ptrY++;
	}

	return result;
}

const nums = [2, 5, 1, 3, 4, 7];
const n = 3;
console.log(rearrangeArray(nums, n)); // Output: [2, 3, 5, 4, 1, 7]
