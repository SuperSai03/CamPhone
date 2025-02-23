
const GB256 = 899;
const GB512 = 1099;
const T1 = 1299;


document.getElementById("256").onclick = function() {
  document.getElementById("total").textContent = `From $${GB256} or $36.95/mo. for 24 mo.`
}
document.getElementById("512").onclick = function() {
    document.getElementById("total").textContent = `From $${GB512} or $45.79/mo. for 24 mo.`
    document.getElementById("monthly").textContent = `$58.29/mo.`
}
document.getElementById("1").onclick = function() {
  document.getElementById("total").textContent = `From $${T1} or $54.12/mo. for 24 mo.` 
}

