
const GB128 = 599;
const GB256 = 699;
const GB512 = 899;
const TB1 = 1099;




document.getElementById("256").onclick = function() {
    document.getElementById("total").textContent = `From $${GB256} or $54.12/mo. for 24 mo.`
}
document.getElementById("512").onclick = function() {
  document.getElementById("total").textContent = `From $${GB512} or $66.95/mo. for 24 mo.` 
}

document.getElementById("1").onclick = function() {
  document.getElementById("total").textContent = `From $${TB1} or $72.95/mo. for 24 mo.`
}
document.getElementById("128").onclick = function() {
  document.getElementById("total").textContent = `From $${GB128} or $49.91/mo. for 24 mo.`
}
