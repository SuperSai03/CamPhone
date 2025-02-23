
const GB256 = 1199;
const GB512 = 1399;
const T1 = 1599;

document.getElementById("256").onclick = function() {
  document.getElementById("total").textContent = `From $${GB256} or $49.95/mo. for 24 mo.`
}
document.getElementById("512").onclick = function() {
    document.getElementById("total").textContent = `From $${GB512} or $58.29/mo. for 24 mo.`
    document.getElementById("monthly").textContent = `$58.29/mo.`
}
document.getElementById("1").onclick = function() {
  document.getElementById("total").textContent = `From $${T1} or $66.63/mo. for 24 mo.` 
}

document.addEventListener('DOMContentLoaded', function() {
const radioBtn = document.getElementById("radio1");
const radio1 = document.getElementById("256");
const radio2 = document.getElementById("512");
const radio3 = document.getElementById("1");

 radioBtn.addEventListener('change', function(){
  if (this.checked){
    radio1.disabled = false;
    radio2.disabled = false;
    radio3.disabled = false;
  }
  else {
    radio1.disabled = true;
    radio2.disabled = true;
    radio3.disabled = true
  }
});
});