const months = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

function render() {
  let output = "";

  for (let month of months) {
    output += `<div>${month}</div>`;
  }

  return output;
}

app.querySelector("main").innerHTML = render();
