
// Funçao que confere se todos os  elementos do campo imput correspondem aos valores hexadecimal
const constainsSomeElement = (input, output) => {
  const compare = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  let value = input
  let splited = value.split('')
  let cond = splited.some(element => compare.includes(element))
  if(cond == false) {
    alert('Invalid input: enter a hexadecimal value!')
  } else {
    document.querySelector('.decimal').innerHTML = output;
  }
}

// Algoritimo de conversão binaria

const converterBin = () => {
  document.querySelector(".button").addEventListener("click", () => {
    const input = document.querySelector(".binary").value;
    const convert = () => parseInt(input, 2);
    if (input === "") return alert("Invalid input: enter a binary number!");
    if (input.split("").some((element) => element != "1" && element != "0")) {
      alert("Invalid input: enter a binary number!");
    } else {
      document.querySelector(".decimal").innerText = convert();
    }
    console.log(convert());
  });
};

// converterBin();

//-------------------------------------------------------------------------//

// Algoritimo de conversão hexadecimal

const converterHexa = () => {
  document.querySelector('.button').addEventListener('click', () => {
    const inputHexa = document.querySelector('.binary').value;
    const convertHexa = parseInt(inputHexa, 16);
    constainsSomeElement(inputHexa, convertHexa)
    
  })
}

// converterHexa()

// Chamada de funçoes

const selectOperation = () => {
  const inputSelected = document.querySelector('.select-field')
  inputSelected.addEventListener('change', () => {
    
    console.log(inputSelected)
  })
  
  
}

selectOperation()
