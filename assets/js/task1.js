"use script";

let button = document.querySelector("i")
let input = document.querySelector("input")
let dragarea = document.querySelector(".drag-part");
let tableBody = document.querySelector("table tbody")

button.addEventListener("click", function () {
    input.click();
})

dragarea.addEventListener("click", function () {
    input.click();
})

input.addEventListener("change", function (e) {
    for (const file of e.target.files) {
        let reader = new FileReader();
        reader.onloadend = (event) => {
            document.querySelector("img").setAttribute("class", "my-5");
            document.querySelector("img").setAttribute("src", event.currentTarget.result);
        }
        reader.readAsDataURL(file);
    }
})

dragarea.addEventListener("dragover", function (e) {
    e.preventDefault();
    dragarea.classList.add("hover-part");
})

dragarea.addEventListener("dragleave", function () {
    dragarea.classList.remove("hover-part");
})

dragarea.addEventListener("drop", function (e) {
    e.preventDefault();
    input.addEventListener("change", function (e) {
        for (const file of e.target.files) {
            let reader = new FileReader();
            reader.onloadend = (event) => {
                let base64 = event.currentTarget.result;
                tableBody.innerHTML += `<tr><td><img src="${base64}"></td><td>${file.name}</td><td>${file.size / 1024} KB</td><td><i class="fa-solid fa-trash delete"></i></td></tr>`;
                let deleteButton = document.querySelectorAll(".delete")
                for (let i = 0; i < deleteButton.length; i++) {
                    deleteButton[i].addEventListener("click", function () {
                        deleteButton[i].parentElement.parentElement.style.display = "none";
                    })
                }
            }
            reader.readAsDataURL(file);
        }
    })
})