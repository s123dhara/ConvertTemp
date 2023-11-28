// console.log(a)

function change() {
  const input = document.querySelector(".temp-1 input").value;
  console.log(input);
  const show = document.querySelector(".container h3");

  const a = document.querySelector(".temp-1 select");
  const selectedOption = a.options[a.selectedIndex].value;
  console.log(selectedOption);
  // show.innerHTML = input
  if (selectedOption === "cel") {
    let f = (input*(9/5))+32
    show.innerHTML = ` = °${f} Farenheit`
    // console.log(show)
  } else {
    let c = (input-32)*(5/9)
    show.innerHTML = ` = °${c} Celcius`
    // console.log(show)
  }
}
