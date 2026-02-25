function setTab(tabId) {
  document.querySelectorAll(".tab").forEach(s => s.classList.remove("active"));
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));

  document.getElementById(tabId).classList.add("active");
  document.querySelector(`.tab-btn[data-tab="${tabId}"]`).classList.add("active");

  history.replaceState(null, "", `#${tabId}`);
}

document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => setTab(btn.dataset.tab));
});

document.querySelectorAll("[data-jump]").forEach(el => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    setTab(el.dataset.jump);
  });
});

const start = location.hash.replace("#", "");
if (["main","experience","projects"].includes(start)) setTab(start);