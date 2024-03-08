// const fileInput = document.getElementById("fileInput");

// function findAverageValue(arr) {
// 	return (
// 		arr.reduce((acc, el) => {
// 			return acc + el;
// 		}) / sortArr.length
// 	);
// }

// function findMediana(arr) {
// 	const mid = Math.floor(arr.length / 2);
// 	if (arr.length % 2) {
// 		return arr[mid];
// 	} else {
// 		return (arr[mid - 1] + arr[mid]) / 2;
// 	}
// }

// function findIncreaseSubsequence(arr, value) {
// 	let resultArr = [];
// 	let cacheArr = [];
// 	let condition = null;

// 	for (let i = 1; i < arr.length; i += 1) {

// 		switch (value) {
// 			case "+":
// 				condition = arr[i] - arr[i - 1] <= 0;
// 				break;
// 			case "-":
// 				condition = arr[i] - arr[i - 1] >= 0;
// 				break;
// 			default:
// 				console.log("no value");
// 				return;
// 		}

// 		if (condition) {
// 			if (cacheArr.length) {
// 				resultArr.push(cacheArr);
// 			}
// 			cacheArr = [];
// 			continue;
// 		}

// 		if (!cacheArr.length) {
// 			cacheArr.push(arr[i - 1]);
// 		}
// 		cacheArr.push(arr[i]);
// 	}
// 	resultArr.push(cacheArr);

// 	const reasultArrSort = resultArr.sort((a, b) => a.length - b.length);

// 	return reasultArrSort.filter(
// 		(el) => el.length === reasultArrSort[reasultArrSort.length - 1].length
// 	);
// }

// fileInput.addEventListener("change", function () {
// 	const file = fileInput.files[0];
// 	const textType = /text.*/;

// 	if (file.type.match(textType)) {
// 		const reader = new FileReader();

// 		reader.readAsText(file);

// 		reader.onload = function () {
// 			const numberArr = reader.result.split("\n").map((el) => Number(el));
// 			const sortArr = [...numberArr].sort((a, b) => a - b);
// 			const minValue = sortArr[0];
// 			const maxValue = sortArr[sortArr.length - 1];
// 			const averageValue = findAverageValue(sortArr);
// 			const medianaValue = findMediana(sortArr);

// 			const maxIncreaseыSubsequences = findIncreaseSubsequence(numberArr, "+");
// 			const maxDecreasesSubsequences = findIncreaseSubsequence(numberArr, "-");

// 			console.log("minValue", minValue);
// 			console.log("maxValue", maxValue);
// 			console.log("medianaValue", medianaValue);
// 			console.log("averageValue", averageValue);

// 			console.log("maxIncreaseыSubsequences", maxIncreaseыSubsequences);
// 			console.log("maxDecreasesSubsequences", maxDecreasesSubsequences);
// 		};
// 	} else {
// 		fileDisplayArea.innerText = "File not supported!";
// 	}
// });
const arrValues = [1, 2, 5, 5, 5, 1, 1, 6, 6, 8, 7, 9, 10, 55, 55, 55];
function fnNumber(arr) {
	let cachArr = [];
	const resulArr = [];
	for (let i = 0; i < arr.length; i += 1) {
		cachArr = [];
		const condition = resulArr
			.map((el) => Object.keys(el))
			.some((key) => Number(key) === arr[i]);
		if (condition) {
			continue;
		}

		for (let j = i + 1; j < arr.length; j += 1) {
			if (arr[i] === arr[j]) {
				cachArr.push(arr[i]);
			}
		}
		if (cachArr.length) {
			resulArr.push({ [arr[i]]: cachArr.length + 1 });
		}
	}
	return resulArr;
}
function fnStr(str) {
	strArr = str.split("");
	let cachArr = [];
	const resulArr = [];
	for (let i = 0; i < strArr.length; i += 1) {
		cachArr = [];

		const condition = resulArr
			.map((el) => Object.keys(el))
			.some((key) => key === strArr[i]);

		if (condition) {
			continue;
		}

		for (let j = i + 1; j < strArr.length; j += 1) {
			if (strArr[i] === strArr[j]) {
				cachArr.push(strArr[i]);
			}
		}
		if (cachArr.length) {
			resulArr.push({ [strArr[i]]: cachArr.length + 1 });
		}
	}
	return resulArr;
}

console.log(fnNumber(arrValues));
console.log(fnStr("arrValuess"));
