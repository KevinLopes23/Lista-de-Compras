const input = document.querySelector(".main-input-text");
const addButton = document.querySelector(".main-input-button");
const listContainer = document.querySelector(".main-list");

addButton.addEventListener("click", () => {
  const itemText = input.value.trim();

  if (itemText === "") return;

  listContainer.innerHTML += `
   <div class="main-list-item">
      <label>
        <input type="checkbox" />
        <span>${itemText}</span>
      </label>
      <button class="delete-btn" aria-label="Deletar ${itemText}">🗑️</button>
    </div>
  `;

  input.value = "";
});

listContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    const item = event.target.closest(".main-list-item");
    const itemText = item.querySelector("span").textContent;
    item.remove();
    const alertBox = document.querySelector(".footer-container .hidden");
    alertBox.classList.remove("hidden");
    alertBox.classList.add("footer-alert");
  }
});
