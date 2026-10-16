// 用 getElementById 拿到页面上的元素
const countEl = document.getElementById("count");
const addBtn = document.getElementById("add-btn");
const resetBtn = document.getElementById("reset-btn");
const colorBtn = document.getElementById("color-btn");

// 当前计数，初始为 0
let count = 0;

// 点击 +1：数字加一，并更新页面显示
addBtn.addEventListener("click", () => {
  count = count + 1;
  countEl.textContent = count;
});

// 点击清零：把计数归零
resetBtn.addEventListener("click", () => {
  count = 0;
  countEl.textContent = count;
});

// 点击换背景色：从颜色列表里随机挑一个
const colors = ["#f0f4ff", "#fff0f5", "#f0fff4", "#fffbe6", "#f5f0ff"];
colorBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  document.body.style.background = colors[randomIndex];
});
