const fileInput = document.getElementById("fileInput");



function findMediana(arr) {
	const mid = Math.floor(arr.length / 2);
	if (arr.length % 2) {
		return arr[mid];
	} else {
		return (arr[mid - 1] + arr[mid]) / 2;
	}
}

function findIncreaseSubsequence(arr){
	arr.reduce((acc,el)=> { 
		
		return},[])
}



fileInput.addEventListener("change", function (e) {
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

			console.log("minValue", minValue);
			console.log("maxValue", maxValue);
			console.log("medianaValue", medianaValue);
			console.log("averageValue", averageValue);
		};
	} else {
		fileDisplayArea.innerText = "File not supported!";
	}
});
