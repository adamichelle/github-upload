const errorDiv = document.getElementById("errorMsg");

document.getElementById("binaryInput").addEventListener("input", function(e) {
  e.preventDefault();
  let decimal = 0,
    exponent;

  let binaryString = e.target.value;

  if (binaryString.match(/^[0-1]+$/g) === null && binaryString != "") {
    document.getElementById("output").style.visibility = "hidden";
    const errorMsg = "Enter a string with just 0s and/or 1s";
    errorDiv.style.display = "block";
    errorDiv.innerText = errorMsg;
    return;
  }

  errorDiv.innerText = "";
  errorDiv.style.display = "none";

  for (let i = binaryString.length - 1; i >= 0; i--) {
    exponent = binaryString.length - 1 - i;

    decimal += parseInt(binaryString[i]) * Math.pow(2, exponent);
  }

  document.getElementById("output").style.visibility = "visible";
  document.getElementById("decimalOutput").innerText = decimal;
});