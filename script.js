var n = 0; //Counter variable

//Getting input and storing in table
function addTask(event) {
    event.preventDefault();

    let work = document.getElementById("work").value;
    let time = document.getElementById("time").value;

    var table = document.getElementById("table");

    var row = table.insertRow(1);
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);

    cell0.innerHTML = work;
    cell1.innerHTML = time;
    cell2.innerHTML = "<button onclick=chDone(this) id=todo>&#x23F3</button>";
    cell3.innerHTML = "<button onclick=removeRow(this)>&#x274E</button>";

    n++;
    work.value = time.value = null;
    document.getElementById("tasks").innerHTML = n;
}

//Deleting a row
function removeRow(row) {
    r = row.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(r);
    n--;
    document.getElementById("tasks").innerHTML = n;
}

//Deleting table
function removeAll() {
    for (var i = n; i > 0; i--)
        document.getElementById("table").deleteRow(1);
    n = 0;
    document.getElementById("tasks").innerHTML = n;
}

//Changing to done status
function chDone(row) {
    r = row.parentNode.parentNode.rowIndex;
    document.getElementById("table").rows[r].cells[2].innerHTML = "<button onclick=chTdo(this) id=done>&#x2705</button>";
}

//Changing to todo status
function chTdo(row) {
    r = row.parentNode.parentNode.rowIndex;
    document.getElementById("table").rows[r].cells[2].innerHTML = "<button onclick=chDone(this) id=todo>&#x23F3</button>";
}

//Showing menu options
function showMenu() {
    document.getElementById("menu").style.display = "inline";
}

//Showing image names
function showImages() {
    document.getElementById("images").style.display = "inline";
}

//Showing themes
function showTheme() {
    document.getElementById("pads").style.display = "inline";
}

//Changing background image as checklist
function checklist() {
    document.body.style.backgroundImage = "url('checkl.jfif')";
}

//Changing background image as clock
function clock() {
    document.body.style.backgroundImage = "url('clock.jpg')";
}

//Changing background image as study
function study() {
    document.body.style.backgroundImage = "url('work.jfif')";
}

//red blue theme
function padrb() {
    document.getElementById("table").style.background = "red";
    document.getElementById("form").style.background = "blue";
}

//green yellow theme
function padgy() {
    document.getElementById("table").style.background = "green";
    document.getElementById("form").style.background = "yellow";
}

//orange teal theme
function padot() {
    document.getElementById("table").style.background = "orange";
    document.getElementById("form").style.background = "teal";
}

//Hiding menu options
function hideMenu() {
    document.getElementById("menu").style.display = "none";
}