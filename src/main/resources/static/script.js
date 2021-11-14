
var addTask = (event) => {
    var action = event.target.getAttribute("href");
    document.getElementById("form-edit").action = action;
    document.getElementById("title").classList.add("d-none");
    document.getElementById("title-edit").classList.remove("d-none");
    document.getElementById("list").classList.add("d-none");
    document.getElementById("form-task").classList.add("d-none");
    document.getElementById("form-edit").classList.remove("d-none");
};

var changeMarked = (event) => {
    var id = event.target.value;
    var url = "/editTask/" + id;
    document.getElementById("form-edit").action = url;
    document.getElementById("form-edit").submit();
};


document.querySelectorAll('.edit').forEach(element => {
    element.addEventListener("click", addTask);
});
document.querySelectorAll('.checkbox').forEach(element => {
    element.addEventListener("change", changeMarked);
});
