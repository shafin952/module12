const calculateBtn = document.querySelector("#calculateBtn");

calculateBtn.addEventListener("click", function() {
  const weight = document.querySelector("#weightInput").value;
  const height = document.querySelector("#heightInput").value / 100;
  const bmi = weight / (height * height);
  const resultDiv = document.querySelector(".result");
  resultDiv.textContent = `Your BMI is ${bmi.toFixed(2)}`;
});
