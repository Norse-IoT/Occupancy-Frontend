let right = -20
let i = 4
let timeout = 0

async function checkData() {
    let connection = await fetch("user.json");
    data = await connection.json();
    document.getElementById("sensor-data").innerHTML = data.sensor
    document.getElementById("count-data").innerHTML = data.count
}
checkData()
//update warning element
function changeWarning(text, border, background) {
    if (text == undefined) {
        text = ""
    }
    if (border == undefined) {
        border = "transparent"
    }
    if (background == undefined) {
        background = "transparent"
    }
    warning.innerHTML = text
    warning.style.borderColor = border
    warning.style.backgroundColor = background
    i = 4
    right = -20
}

//hide pop-up
setInterval(function(){
    right = right + i
    if (right >= 100) {
        changeWarning()
}}, 100)

function refresh() {
    changeWarning("Refreshing data...", "#ffc107", "#5a5a5a",)
    checkData
}