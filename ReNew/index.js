

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById('save-el')
let count = 0 
 console.log(countEl)

function increment () {
  count += 1
  countEl.textContent =  count
  
}


function save(){
  let counts = count + '  -  '
  saveEl.textContent += counts 
  countEl.textContent = 0
  count = 0
  
}


