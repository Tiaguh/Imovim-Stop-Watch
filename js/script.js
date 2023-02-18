let result = document.getElementById("res")
let result2 = document.getElementById("res2")

function clock(){
  let data = new Date()

  let initalDay = 13;
  let day = data.getDate();

  let remainingDays = 100-(day - initalDay)

  result.innerHTML = remainingDays;
  result2.innerHTML = "dias!"

  console.log(remainingDays);

  if(remainingDays <= 0){
    result.innerHTML = "Acabou o tempo!!!";
    result2.innerHTML = ""
  }
}

clock()