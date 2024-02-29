const fileInput = document.getElementById("fileInput");

function findMediana(arr) {
	const mid = Math.floor(arr.length / 2);
	if (arr.length % 2) {
		return arr[mid];
	} else {
		return (arr[mid - 1] + arr[mid]) / 2;
	}
}

function findIncreaseSubsequence(arr, value) {
	let resultArr = [];
	let cacheArr = [];
	let a = null;

	for (let i = 1; i < arr.length; i += 1) {
		switch (value) {
			case "+":
				a = arr[i] - arr[i - 1] <= 0;
				break;
			case "-":
				a = arr[i] - arr[i - 1] >= 0;
				break;
			default:
				console.log("no value");
				return;
		}

		if (a) {
			if (cacheArr.length) {
				resultArr.push(cacheArr);
			}
			cacheArr = [];
			continue;
		}

		if (!cacheArr.length) {
			cacheArr.push(arr[i - 1]);
		}
		cacheArr.push(arr[i]);
	}
	resultArr.push(cacheArr);

	const reasultArrSort = resultArr.sort((a, b) => a.length - b.length);

	return reasultArrSort.filter(
		(el) => el.length === reasultArrSort[reasultArrSort.length - 1].length
	);
}

fileInput.addEventListener("change", function () {
	const file = fileInput.files[0];
	const textType = /text.*/;

	if (file.type.match(textType)) {
		const reader = new FileReader();

		reader.readAsText(file);

		reader.onload = function () {
			const numberArr = reader.result.split("\n").map((el) => Number(el));
			const sortArr = [...numberArr].sort((a, b) => a - b);
			const minValue = sortArr[0];
			const maxValue = sortArr[sortArr.length - 1];

			const averageValue =
				sortArr.reduce((acc, el) => {
					return acc + el;
				}) / sortArr.length;
			const medianaValue = findMediana(sortArr);

			const maxIncreaseыSubsequences = findIncreaseSubsequence(numberArr, "+");
			const maxDecreasesSubsequences = findIncreaseSubsequence(numberArr, "-");

			console.log("minValue", minValue);
			console.log("maxValue", maxValue);
			console.log("medianaValue", medianaValue);
			console.log("averageValue", averageValue);

			console.log("maxIncreaseыSubsequences", maxIncreaseыSubsequences);
			console.log("maxDecreasesSubsequences", maxDecreasesSubsequences);
		};
	} else {
		fileDisplayArea.innerText = "File not supported!";
	}
});
