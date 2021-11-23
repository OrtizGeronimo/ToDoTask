var addTask = (event) => {
    var action = event.target.getAttribute("href");
    document.querySelector("#container").innerHTML =
        "<h2 class=\"\" id=\"title-edit\"> Editing Task</h2>" +
        "<form th:fragment=\"_editForm\" th:action=\"@{/editTask/{id}(id=${task.id})}\" th:object=\"${task}\" method=\"post\" class=\"w-50 p-3 mx-auto \"\n" +
        "      id=\"form-edit\">\n" +
        "    <div class=\"form-group\">\n" +
        "        <input type=\"text\" placeholder=\"Task...\" class=\"w-75\" th:field=\"*{title}\" th:text=\"${task.title}\">\n" +
        "    </div>\n" +
        "    <div class=\"d-flex mx-auto justify-content-around w-50\">\n" +
        "        <button type=\"submit\" class=\"btn btn-outline-secondary\">Save</button>\n" +
        "        <a href=\"\" class=\"btn btn-outline-secondary\">Cancel</a>\n" +
        "    </div>\n" +
        "</form>";
    document.getElementById("form-edit").action = action;
    // document.getElementById("title").classList.add("d-none");
    // document.getElementById("title-edit").classList.remove("d-none");
    // document.getElementById("list").classList.add("d-none");
    // document.getElementById("form-task").classList.add("d-none");
    // document.getElementById("form-edit").classList.remove("d-none");
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
