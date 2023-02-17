let right = -20
let i = 4
let timeout = 0

async function checkData() {
    let connection = await fetch("user.json");
    data = await connection.json();
    console.log(data)
    document.getElementById("box-a").innerHTML = `A: ${data.acount}`
    document.getElementById("box-b").innerHTML = `B: ${data.bcount}`
    document.getElementById("box-c").innerHTML = `C: ${data.ccount}`
    document.getElementById("box-d").innerHTML = `D: ${data.dcount}`
    document.getElementById("box-e").innerHTML = `E: ${data.ecount}`
    document.getElementById("box-f").innerHTML = `F: ${data.fcount}`
    document.getElementById("box-g").innerHTML = `G: ${data.gcount}`
    document.getElementById("box-h").innerHTML = `H: ${data.hcount}`
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