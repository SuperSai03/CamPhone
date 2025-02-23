
const TB1 = 699.99;
const GB512 = 649.99;



document.getElementById("1").onclick = function() {
    document.getElementById("total").textContent = `From $${TB1} or $29.1/mo. for 24 mo.`
}
document.getElementById("512").onclick = function() {
  document.getElementById("total").textContent = `From $${GB512} or $27.1/mo. for 24 mo.` 
}


