
const GB256 = 319.99;
const GB128 = 269.99;


document.getElementById("128").onclick = function() {
    document.getElementById("total").textContent = `From $${GB128} or $11.25/mo. for 24 mo.`
}
document.getElementById("256").onclick = function() {
  document.getElementById("total").textContent = `From $${GB256} or $13.99/mo. for 24 mo.` 
}
