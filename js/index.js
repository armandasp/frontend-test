const baseURL = "http://localhost:3000";
const token = localStorage.getItem("token");
const queryString = window.location.search;
const params = queryString.split("=")[1];

function displayGroups(data) {
  data.forEach((item) => {
    const allGroups = document.getElementById("groups");
    const group = document.createElement("div");
    group.setAttribute("class", "group");
    allGroups.append(group);
    const id = document.createElement("h2");
    const p = document.createElement("p");
    group.append(id, p);
    id.textContent = `ID: ${item.group_id}`;
    p.textContent = item.name;
    group.addEventListener("click", (e) => {
      location.replace("/bills.html");
    });
  });
}

fetch(`${baseURL}/v1/accounts/acc`, {
  headers: {
    authorization: `Bearer ${token}`,
  },
})
  .then((res) => res.json())
  .then((data) => displayGroups(data))
  .catch((err) => alert(err));

document.forms.addgroup.addEventListener("submit", (e) => {
  console.log("veikia");
  e.preventDefault();

  const group_id = document.getElementById("groupid").value;

  console.log(group_id);

  fetch(`${baseURL}/v1/accounts/acc`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ group_id }),
  })
    .then((res) => res.json())
    .then((data) => {
      document.forms.addgroup.reset();
      location.replace("/index.html");
      alert("data added successfully");
    })
    .catch((err) => alert(err));
});
