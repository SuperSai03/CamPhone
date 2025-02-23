const fullname = document.getElementById("name");
const email = document.getElementById("email");
const address = document.getElementById("address");
const city = document.getElementById("city");
const country = document.getElementById("country");
const zip = document.getElementById("zipCode")
const nameOnCard = document.getElementById("nameOnCard");
const number = document.getElementById("number");
const month = document.getElementById("month")
const year = document.getElementById("year")
const cvv =  document.getElementById("cvv")

document.getElementById("buyBtn").onclick = function() {
  window.alert(`Thank you for buying from us!`)
  fullname.value = "";
  email.value = "";
  address.value = "";
  city.value = "";
  country.value = "";
  zip.value = "";
  nameOnCard.value = "";
  number.value = "";
  month.value = "";
  year.value = "";
  cvv.value = "";
}
document.getElementById("financeBtn").onclick = function() {
  window.alert(`Thank you for buying from us. \n We are going to charge you via your payment method.`)
  fullname.value = "";
  email.value = "";
  address.value = "";
  city.value = "";
  country.value = "";
  zip.value = "";
  nameOnCard.value = "";
  number.value = "";
  month.value = "";
  year.value = "";
  cvv.value = "";
}


