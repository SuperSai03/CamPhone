
const GB256 = 1899.99;
const GB512 = 2019.99;
const TB1 = 2259.99;




document.getElementById("256").onclick = function() {
    document.getElementById("total").textContent = `From $${GB256} or $79.17/mo. for 24 mo.`
}
document.getElementById("512").onclick = function() {
  document.getElementById("total").textContent = `From $${GB512} or $84.17/mo. for 24 mo.` 
}

document.getElementById("1").onclick = function() {
  document.getElementById("total").textContent = `From $${TB1} or $94.17/mo. for 24 mo.`
}

document.addEventListener('DOMContentLoaded', function() {
  const radioBtn = document.getElementById("radio1");

  const radio1 = document.getElementById("256");
  const radio2 = document.getElementById("512");

  
   radioBtn.addEventListener('change', function(){
    if (this.checked){

      radio1.disabled = false;
      radio2.disabled = false;

    }
    else {

      radio1.disabled = true;
      radio2.disabled = true;

    }
  });
  });