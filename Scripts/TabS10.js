
const GB256 = 1319.99;
const GB512 = 1619.99;


document.getElementById("512").onclick = function() {
    document.getElementById("total").textContent = `From $${GB256} or $54.49/mo. for 24 mo.`
}
document.getElementById("1").onclick = function() {
  document.getElementById("total").textContent = `From $${GB512} or $67.49/mo. for 24 mo.` 
}

