// ========== 一、数组 + for 循环 ==========
// 数组：用 [] 装一组数据，像一排有编号的格子（编号从 0 开始）
const fruits = ["苹果", "香蕉", "橙子", "西瓜"];

// 拿到要往里放内容的 <ul> 容器
const fruitList = document.getElementById("fruit-list");

// for 循环：让一段代码重复执行
// for (起点; 继续条件; 每轮结束后做什么)
// i 是"计数器"，从 0 开始；每轮结束 i+1；直到 i 不再小于数组长度就停
for (let i = 0; i < fruits.length; i++) {
  const li = document.createElement("li"); // 每轮创建一个 <li>
  li.textContent = fruits[i];              // fruits[i] = 第 i 个水果
  fruitList.appendChild(li);               // 挂到列表末尾
}

// ========== 二、条件判断 if / else ==========
const ageInput = document.getElementById("age-input");
const ageResult = document.getElementById("age-result");

ageInput.addEventListener("input", () => {
  const age = Number(ageInput.value); // Number() 把文字转成数字才能比较

  if (age >= 18) {                    // 如果 年龄 >= 18
    ageResult.textContent = "已成年";
  } else {                            // 否则
    ageResult.textContent = "未成年";
  }
});

// ========== 三、猜数字游戏（综合运用）==========
// Math.random() 生成 0~1 的随机小数，乘 100 取整再 +1，得到 1~100 的整数
const secret = Math.floor(Math.random() * 100) + 1;
let tries = 0;   // 记录猜了几次

const guessInput = document.getElementById("guess-input");
const guessBtn = document.getElementById("guess-btn");
const hint = document.getElementById("hint");

guessBtn.addEventListener("click", () => {
  const guess = Number(guessInput.value);
  tries = tries + 1;

  if (guess === secret) {              // === 表示"相等"
    hint.textContent = "答对了！你用了 " + tries + " 次";
  } else if (guess > secret) {         // 否则如果 猜大了
    hint.textContent = "太大了，再小一点";
  } else {                             // 否则（就是猜小了）
    hint.textContent = "太小了，再大一点";
  }
});
