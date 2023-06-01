/////////////index.html///////////////
function mainexe() {
    document.querySelector("h1").innerHTML = "Hello";
}

$(function () {
    $("#ajaxbtn").click(function () {
        $("main").load("main1.html");
    });
})

/////////////main1.html///////////////
function main1exe() {
    document.querySelector("h1").innerHTML = "Hello Main1";
}
