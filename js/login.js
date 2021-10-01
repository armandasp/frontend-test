const baseURL = "https://mysql-test-l36v5.ondigitalocean.app";
const token = localStorage.getItem("token");

// if (token) {
//   location.replace("/index.html");
// }

document.forms.login.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = e.target.elements.email.value.trim().toLowerCase();
  const password = e.target.elements.password.value;

  console.log(email, password);

  fetch(`${baseURL}/v1/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.token) {
        localStorage.setItem("token", data.token);
        location.replace("/index.html");
        return "";
      }

      return alert(data.err || "Unexpected error occured. Please try again");
    })
    .catch((err) => alert(err));
});
