
const submitBtn = document.getElementById("submitBtn");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("exampleFormControlInput1")
const textArea = document.getElementById("exampleFormControlTextarea1")

submitBtn.onclick = function() {
  window.alert("Thank you for messaging us! \n We will contact you via your email.")
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  textArea.value = "";
}



