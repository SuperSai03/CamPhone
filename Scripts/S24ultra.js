
const GB256 = 1299.99;
const GB512 = 1499.99;
const TB1 = 1659.99;




document.getElementById("256").onclick = function() {
    document.getElementById("total").textContent = `From $${GB256} or $54.17/mo. for 24 mo.`
}
document.getElementById("512").onclick = function() {
  document.getElementById("total").textContent = `From $${GB512} or $59.17/mo. for 24 mo.` 
}

document.getElementById("1").onclick = function() {
  document.getElementById("total").textContent = `From $${TB1} or $69.17/mo. for 24 mo.`
}

