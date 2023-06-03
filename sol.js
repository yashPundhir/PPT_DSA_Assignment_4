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

**Question 8**

Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

*Return the array in the form* [x1,y1,x2,y2,...,xn,yn].

**Example 1:**

**Input:** nums = [2,5,1,3,4,7], n = 3

**Output:** [2,3,5,4,1,7]

**Explanation:** Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

*/
