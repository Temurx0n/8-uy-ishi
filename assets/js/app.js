const formEl = document.querySelector("#todo_form");
const inputEl = document.querySelector("#inputs");
const closeIconEl = document.querySelector("#input_value_remove");
const todoTaskEl = document.querySelector(".todo_task");

const deleteAllEl = document.querySelector("#delete_all_btn");

formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    let data = new Date();

    let fullTime = data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();

    //   create elelmentlar
    let cardDiv = document.createElement("div");
    let inputValuePEl = document.createElement("p");
    let btnDiv = document.createElement("div");
    let btn1 = document.createElement("button");
    let btn2 = document.createElement("button");
    let btn3 = document.createElement("button");
    let btn4 = document.createElement("button");

    //   classlar nomi
    cardDiv.className = "cards";
    inputValuePEl.className = "task_name";
    btnDiv.className = "btn_group";
    btn1.className = "complite_btn";
    btn2.className = "edit_btn";
    btn3.className = "time_btn";
    btn4.className = "delete_btn";

    inputValuePEl.innerHTML = inputEl.value;

    btn1.innerHTML = `<i class="bi bi-check2-circle"></i> <br> Complete`;
    btn2.innerHTML = `<i class="bi bi-pencil-square"></i> <br> Edit`;
    btn4.innerHTML = `<i class="bi bi-trash3"></i> <br> Delete`;

    cardDiv.appendChild(inputValuePEl);
    cardDiv.appendChild(btnDiv);
    btnDiv.appendChild(btn1);
    btnDiv.appendChild(btn2);
    btnDiv.appendChild(btn3);
    btnDiv.appendChild(btn4);

    todoTaskEl.prepend(cardDiv);

    inputEl.value = "";

    btn3.innerHTML = `<i class="bi bi-clock"></i> <br> ` + fullTime;

    btn1.addEventListener("click", () => {
        inputValuePEl.classList.toggle("task_comiplite");
        btn1.innerHTML = `<i class="bi bi-check2-all"></i> `;
        btn1.style.fontSize = "30px"
    });


    btn4.addEventListener("click", () => {
        let deleteOneBolean = confirm("Rostanham uchirmoqchimisiz?");
        if (deleteOneBolean) {
            cardDiv.remove();
        }
    });
});

delete_all_btn.addEventListener("click", () => {
    let boleanDeleteValue = confirm("Siz rostanham hammasini uchirmoqchimisiz?");

    if (boleanDeleteValue) {
        todoTaskEl.innerHTML = "";
    }
});

closeIconEl.addEventListener("click", () => {
    inputEl.value = "";
});
