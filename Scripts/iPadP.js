

const GB256 = 999;
const GB512 = 1199;
const TB1 = 1599;
const TB2 = 1999;



document.getElementById("256").onclick = function() {
    document.getElementById("total").textContent = `From $${GB256} or $45.79/mo. for 24 mo.`
}
document.getElementById("512").onclick = function() {
  document.getElementById("total").textContent = `From $${GB512} or $54.12/mo. for 24 mo.` 
}

document.getElementById("1").onclick = function() {
  document.getElementById("total").textContent = `From $${TB1} or $66.95/mo. for 24 mo.`
}
document.getElementById("2").onclick = function() {
  document.getElementById("total").textContent = `From $${TB2} or $83.29/mo. for 24 mo.`
}