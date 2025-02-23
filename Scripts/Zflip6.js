
const GB256 = 1099.99;
const GB512 = 1219.99;




document.getElementById("256").onclick = function() {
    document.getElementById("total").textContent = `From $${GB256} or $45.84/mo. for 24 mo.`
}
document.getElementById("512").onclick = function() {
  document.getElementById("total").textContent = `From $${GB512} or $50.84/mo. for 24 mo.` 
}

