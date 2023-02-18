let numberDays = document.getElementById("numberDays")
let text = document.getElementById("text")

function clock(){
  let data = new Date()

  let startingDay = 13; // dia em que o projeto de 100 dias começou. (14/02/2023)
  let day = data.getDate();

  let remainingDays = 100-(day - startingDay)

  numberDays.innerHTML = remainingDays;
  text.innerHTML = "dias!"

  if(remainingDays <= 0){
    numberDays.innerHTML = "Acabou o tempo!!!";
    text.innerHTML = ""
  }
}

clock()