let display = document.getElementById('display');

let minutos = document.getElementById('minutos');
let segundos = document.getElementById('segundos');
let comecar = document.getElementById('comecar');

let cronometroSeg;
let minutoAtual;
let segundoAtual;
let interval;

for (let i = 0; i <= 60; i++) {
  minutos.innerHTML += '<option value="'+i+'"> '+i+' </option>'
}

for (let i = 1; i <= 60; i++) {
  segundos.innerHTML += '<option value="'+i+'"> '+i+' </option>'
}

comecar.addEventListener('click', function(){
  minutoAtual = minutos.value;
  segundoAtual = segundos.value;

  let min = minutoAtual < 10 ? '0' + minutoAtual : minutoAtual;
  let seg = segundoAtual < 10 ? '0' + segundoAtual : segundoAtual;
  display.childNodes[1].innerHTML = min + ':' + seg;

  
  interval = setInterval(function() {
    segundoAtual--;
    
    if(minutoAtual === 0) {
      minutoAtual = '0' + minutoAtual
    }
    if(segundoAtual < 10) {
      segundoAtual = '0' + segundoAtual
    }
    
    if(segundoAtual <= 0) {
      segundoAtual = '00';
      if(minutoAtual > 0) {
        minutoAtual--;
        segundoAtual = 59;
      } else {
        document.getElementById('sound').play();
        clearInterval(interval);
      }
      

    }
    display.childNodes[1].innerHTML = minutoAtual + ':' + segundoAtual;

  }, 1000)
})
