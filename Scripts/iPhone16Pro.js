const GB128 = 999;
const GB256 = 1099;
const GB512 = 1299;
const T1 = 1499;


document.getElementById("128").onclick = function() {
  document.getElementById("total").textContent = `From $${GB128} or $41.62/mo. for 24 mo.`
}
document.getElementById("256").onclick = function() {
  document.getElementById("total").textContent = `From $${GB256} or $45.79/mo. for 24 mo.`
}
document.getElementById("512").onclick = function() {
    document.getElementById("total").textContent = `From $${GB512} or $54.12/mo. for 24 mo.`
    document.getElementById("monthly").textContent = `$58.29/mo.`
}
document.getElementById("1").onclick = function() {
  document.getElementById("total").textContent = `From $${T1} or $62.45/mo. for 24 mo.` 
}

