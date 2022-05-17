`use strict`;

console.log(`hey`);
const span = document.querySelectorAll("[id=copy]");
for (const item of span) {
  item.addEventListener("click", function () {
    navigator.clipboard.writeText(item.textContent);
    console.log(item.textContent);
  });
}
