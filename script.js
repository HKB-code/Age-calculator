const btnEl = document.querySelector(".button");
const birthEl = document.querySelector("#birthday");
const resultEl = document.querySelector(".result");

const calcAge = function () {
  let beforeTime = Date.now();
  console.log(beforeTime);
  if (birthEl.value === "") {
    alert("Please fill your DOB!");
  } else {
    const birthdayValue = birthEl.value;
    const age = getAge(birthdayValue);
    resultEl.textContent = `Your are ${age} ${
      age > 1 ? " year old" : "year's old"
    }`;
  }
  let afterTime = Date.now();
  console.log(afterTime);

  console.log(afterTime - beforeTime);
};
function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthDate.getFullYear();
  let month = currentDate.getMonth() - birthDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

btnEl.addEventListener("click", calcAge);

// Using "textContent" will return the complete text content, including the hidden text. However, using "innerText" will only return the visible text content, excluding the hidden text.
