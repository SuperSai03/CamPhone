const GB128 = 799;
const GB256 = 899;
const GB512 = 1099;



document.getElementById("128").onclick = function() {
  document.getElementById("total").textContent = `From $${GB128} or $33.29/mo. for 24 mo.`
}
document.getElementById("256").onclick = function() {
  document.getElementById("total").textContent = `From $${GB256} or $37.45/mo. for 24 mo.`
}
document.getElementById("512").onclick = function() {
    document.getElementById("total").textContent = `From $${GB512} or $45.79/mo. for 24 mo.`
    document.getElementById("monthly").textContent = `$58.29/mo.`
}

