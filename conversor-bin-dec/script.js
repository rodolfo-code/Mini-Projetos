const converter = () => {
  document.querySelector(".button").addEventListener("click", () => {
    const input = document.querySelector(".binary");
    const convert = () => parseInt(input.value, 2);
    if (input.value.split("").some((element) => element != "1" && element != "0")
    ) {
      alert("Invalid input: enter a binary number!");
    } else {
      document.querySelector(".decimal").innerHTML = convert();
    }
  });
};

converter();
