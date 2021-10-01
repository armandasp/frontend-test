const baseURL = "https://mysql-test-l36v5.ondigitalocean.app";
const token = localStorage.getItem("token");
const queryString = window.location.search;

console.log(queryString);

function displaytable(data) {
  data.forEach((item) => {
    const tbody = document.querySelectror("tbody");
    const row = document.createElement("tr");
    tbody.append(row);

    const td1 = document.createElement("td");
    td1.textContent = item.id;

    const td2 = document.createElement("td");
    td2.textContent = item.description;

    const td3 = document.createElement("td");
    td3.textContent = `$ ${item.amount}`;
  });
}
// fetch(`${baseURL}/v1/bills/bill/${params}`, {
//   headers: {
//     authorization: `Bearer ${token}`,
//   },
// })
//   .then((res) => res.json())
//   .then((data) => displaytable(data))
//   .catch((err) => alert(err));
