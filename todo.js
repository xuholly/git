// 用数组存所有任务；每个任务是一个"对象"，含 text(内容) 和 done(是否完成)
let todos = [];

const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");
const stats = document.getElementById("stats");

// 函数：把 todos 数组"画"成页面上的列表
function render() {
  list.innerHTML = "";   // 先清空列表

  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];

    const li = document.createElement("li");
    if (todo.done) {
      li.classList.add("done");   // 完成的任务加划线样式
    }

    // 任务文字：点它切换完成状态
    const text = document.createElement("span");
    text.textContent = todo.text;
    text.addEventListener("click", () => {
      todo.done = !todo.done;   // ! 是"取反"：true 变 false，false 变 true
      render();
    });

    // 删除按钮：从数组里删掉这一条
    const delBtn = document.createElement("button");
    delBtn.textContent = "删除";
    delBtn.addEventListener("click", () => {
      todos.splice(i, 1);   // 从第 i 个位置删掉 1 个元素
      render();
    });

    li.appendChild(text);
    li.appendChild(delBtn);
    list.appendChild(li);
  }

  // 统计还剩几个没完成（用之前学的循环 + 条件判断）
  let left = 0;
  for (let i = 0; i < todos.length; i++) {
    if (!todos[i].done) left++;
  }

  if (todos.length === 0) {
    stats.textContent = "还没有任务";
  } else {
    stats.textContent = "共 " + todos.length + " 个，剩 " + left + " 个未完成";
  }
}

// 函数：把输入框里的内容添加成一条新任务
function addTodo() {
  const text = input.value.trim();   // trim() 去掉首尾空格
  if (text === "") return;           // 空内容就不添加

  todos.push({ text: text, done: false });  // 往数组末尾加一个对象
  input.value = "";                  // 清空输入框
  render();
}

addBtn.addEventListener("click", addTodo);

render();   // 打开页面先画一次
