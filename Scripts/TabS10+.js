
const GB256 = 999.99;
const GB512 = 1119.99;


document.getElementById("256").onclick = function() {
    document.getElementById("total").textContent = `From $${GB256} or $41.67/mo. for 24 mo.`
}
document.getElementById("512").onclick = function() {
  document.getElementById("total").textContent = `From $${GB512} or $46.67/mo. for 24 mo.` 
}

