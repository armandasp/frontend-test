const baseURL = "https://mysql-test-l36v5.ondigitalocean.app/back";

document.forms.register.addEventListener("submit", (e) => {
  e.preventDefault();

  const fullName = e.target.elements.fullName.value;
  const email = e.target.elements.email.value.trim().toLowerCase();
  const password = e.target.elements.password1.value;
  const password2 = e.target.elements.password2.value;

  console.log(fullName, email, password1, password2);

  if (password != password2) {
    return alert("Passwords do not match");
  }

  fetch(`${baseURL}/v1/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fullName, email, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.msg) {
        alert("Registration succesfull");
        return location.replace("/login.html");
      }

      return alert(data.err || "Unexpected error occured. Please try again");
    })
    .catch((err) => alert(err));
});
