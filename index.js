const fileInput = document.getElementById("fileInput");

let contextArr = [];
fileInput.addEventListener("change", function (e) {
	const file = fileInput.files[0];
	const textType = /text.*/;
	if (file.type.match(textType)) {
		const reader = new FileReader();
		reader.readAsText(file);
		reader.onload = function () {
			contextArr = reader.result.split("\n");
            // console.log( contextText)


			// contextArr = contextText.split();
			// console.log("contextArrr", contextArr);
		};
	} else {
		fileDisplayArea.innerText = "File not supported!";
	}
});
