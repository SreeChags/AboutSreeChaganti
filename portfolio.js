const form = document.querySelector("form");
function getInputValue(id) {
  return document.getElementById(id).value;
}
function checkFormValidity() {
  const name = form.elements[0].value;
  const email = form.elements[1].value;
  const message = form.elements[2].value;
}
form.addEventListener("input", checkFormValidity);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.group("========== Form Submission ==========");
  console.log("Name: ", getInputValue("name"));
  console.log("Email: ", getInputValue("email"));
  console.log("Message: ", getInputValue("message"));
  console.groupEnd();
  form.reset();
  alert("Received your message. Thank you!!");
});
