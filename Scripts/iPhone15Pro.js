
const GB128 = 799;
const GB256 = 999;
const T1 = 1199;


document.getElementById("128").onclick = function() {
  document.getElementById("total").textContent = `From $${GB128} or $36.95/mo. for 24 mo.`
}
document.getElementById("256").onclick = function() {
    document.getElementById("total").textContent = `From $${GB256} or $45.79/mo. for 24 mo.`
    document.getElementById("monthly").textContent = `$58.29/mo.`
}
document.getElementById("1").onclick = function() {
  document.getElementById("total").textContent = `From $${T1} or $54.12/mo. for 24 mo.` 
}

