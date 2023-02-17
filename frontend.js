let right = -20
let i = 4
let timeout = 0
let data;
//YYYY-MM-DD-HH-SS

async function checkData() {
    let connection = await fetch("new.json");
    data = await connection.json();
    data = data[0]
    console.log(data)
    document.getElementById("box-a").innerHTML = `A: ${data.boxa}`
    document.getElementById("box-b").innerHTML = `B: ${data.boxb}`
    document.getElementById("box-c").innerHTML = `C: ${data.boxc}`
    document.getElementById("box-d").innerHTML = `D: ${data.boxd}`
    document.getElementById("box-e").innerHTML = `E: ${data.boxe}`
    document.getElementById("box-f").innerHTML = `F: ${data.boxf}`
    document.getElementById("box-g").innerHTML = `G: ${data.boxg}`
    document.getElementById("box-h").innerHTML = `H: ${data.boxh}`
}
//checkData()
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
    checkData()
}