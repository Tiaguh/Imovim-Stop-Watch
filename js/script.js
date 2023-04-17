let numberDays = document.getElementById("numberDays")
let text = document.getElementById("text")

function clock(){
  let beginData = new Date("2023-02-14")
  let actualData = new Date()

  let remainingDays = Math.trunc((actualData.getTime() - beginData.getTime()) / (1000 * 3600 *24));

  numberDays.innerHTML = 100 - remainingDays
  
}

clock()