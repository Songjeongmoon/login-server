"use strict";

const id = document.querySelector("#id");
const pw = document.querySelector("#password");
const btn = document.querySelector("button");

console.log(id);

btn.addEventListener("click", () => {
  const req = {
    id: id.value,
    pw: pw.value,
  };

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Tyoe": "application/json",
    },
    body: JSON.stringify(req),
  });
});
