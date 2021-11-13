
var addTask = () => {
    document.getElementById("title").classList.add("d-none");
    document.getElementById("title-edit").classList.remove("d-none");
    document.getElementById("list").classList.add("d-none");
    document.getElementById("form-task").classList.add("d-none");
    document.getElementById("form-edit").classList.remove("d-none");
    console.log("Hola");
};


document.getElementById("edit").addEventListener("click", addTask);
