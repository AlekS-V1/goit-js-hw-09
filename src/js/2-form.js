let formData = {
  email: "",
  message: ""
}
const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

const savedData = JSON.parse(localStorage.getItem(localStorageKey)) || formData;
console.log(savedData);

form.addEventListener("input", (event) => {
  const formIn = event.target;
  
  if (formIn.name) {
    formData[formIn.name] = formIn.value.trim();
  }
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.elements.email.value = savedData.email || "";
form.elements.message.value = savedData.message || "";


form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const textField = evt.target.elements;

  const currentData = {
    email: textField.email.value.trim(),
    message: textField.message.value.trim()
  };

  if (currentData.email === "" || currentData.message === "") {
    return alert('Fill please all fields');
  }
  console.log(currentData);
  localStorage.removeItem(localStorageKey);
  form.reset();
  formData.email = "";
  formData.message = "";
    
});
