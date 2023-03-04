"use script";


// let dragElements = document.querySelectorAll(".item")
// let dropElement = document.querySelector(".drop-elem")

// for (const elem of dragElements) {
//     elem.ondragstart = (e) =>{
//         e.dataTransfer.setData("id", e.target.getAttribute("id"));
//     }
// }

// dropElement.ondragover = (e) => {
//     e.preventDefault();
// }

// dropElement.ondrop=(e)=>{
//     let id = e.dataTransfer.getData("id")
//     let elem = document.getElementById(id)
//     document.getElementById(id).style.position = "absolute";
//     dropElement.append(elem);
// }

let button = document.querySelector("i")
let input = document.querySelector("input")
let tableBody = document.querySelector("table tbody")

button.addEventListener("click", function () {
    input.click();
})

input.addEventListener("change", function (e) {
    for (const file of e.target.files) {
        let reader = new FileReader();
        reader.onloadend = (event) => {

            let base64 = event.currentTarget.result;

            // tableBody.innerHTML += "<tr><td><img src="${base64}"></td><td>Otto</td><td>@mdo</td></tr>";
            tableBody.innerHTML += `<tr><td><img src="${base64}"></td><td>${file.name}</td><td>${file.size/1024} KB</td><td><i class="fa-solid fa-trash delete"></i></td></tr>`;
            // document.querySelector("img").setAttribute("src", event.currentTarget.result);
            let deleteButton = document.querySelectorAll(".delete")
            for(let i = 0; i<deleteButton.length;i++){
                deleteButton[i].addEventListener("click", function(){
                    deleteButton[i].parentElement.parentElement.style.display = "none";
                })
            }
            // deleteButton.addEventListener("click", function(){
            //     deleteButton.parentElement.parentElement.style.display = "none";
            // })
        }
        reader.readAsDataURL(file);
    }
})


