
const GB256 = 799.99
const GB512 = 849.99;


document.getElementById("256").onclick = function() {
  document.getElementById("total").textContent = `From $${GB256} or $33.33/mo. for 24 mo.` 
}

document.getElementById("512").onclick = function() {
  document.getElementById("total").textContent = `From $${GB512} or $45.42/mo. for 24 mo.` 
}


