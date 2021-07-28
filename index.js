console.log("hello")
var svgCircle = document.getElementById("Opaque_Ring")
var step1 = document.getElementById("step1")
var step2 = document.getElementById("step2")
var step3 = document.getElementById("step3")
var step4 = document.getElementById("step4")
var step5 = document.getElementById("step5")
var step6 = document.getElementById("step6")
var step7 = document.getElementById("step7")
var col1 = document.getElementById("col1")
var col2 = document.getElementById("col2")
var circle_box_bg = document.getElementById("circle-box-bg")
var img__wrapper = document.getElementById("img__wrapper")
var svg__textwrapper = document.getElementById("svg__textwrapper")
var col1__text__wraper__head = document.getElementById("col1__text__wraper__head")
var col1__imgs1 = document.getElementById("col1__imgs1")
var col1__imgs2 = document.getElementById("col1__imgs2")

step1.addEventListener("click", () => {
    Opaque_Ring.style.strokeDashoffset = "1000";
    col1.style.backgroundColor = "purple";
    col2.style.backgroundColor = "silver";
    circle_box_bg.style.backgroundColor = "purple";
    img__wrapper.style.bottom = '0';
    svg__textwrapper.style.bottom = '0';
    col1__text__wraper__head.style.bottom = '0';
    col1__imgs1.style.display = 'block';
    col1__imgs2.style.display = 'none';
})

step2.addEventListener("click", () => {
    Opaque_Ring.style.strokeDashoffset = "839"
    col1.style.backgroundColor = "purple";
    col2.style.backgroundColor = "darkBlue"
    circle_box_bg.style.backgroundColor = "purple";
    img__wrapper.style.bottom = '45rem';
    svg__textwrapper.style.bottom = '8.3rem';
    col1__text__wraper__head.style.bottom = '100px';
    col1__imgs1.style.display = 'none';
    col1__imgs2.style.display = 'none';
})
step3.addEventListener("click", () => {
    Opaque_Ring.style.strokeDashoffset = "709"
    col1.style.backgroundColor = "#050f3a";
    col2.style.backgroundColor = "#0f1947";
    circle_box_bg.style.backgroundColor = "#050f3a";
    img__wrapper.style.bottom = '90.25rem';
    svg__textwrapper.style.bottom = '16.8rem';
    col1__text__wraper__head.style.bottom = '199px';
    col1__imgs1.style.display = 'none';
    col1__imgs2.style.display = 'none';
})
step4.addEventListener("click", () => {
    Opaque_Ring.style.strokeDashoffset = "574"
    col1.style.backgroundColor = "#15243b";
    col2.style.backgroundColor = "#0c111a";
    circle_box_bg.style.backgroundColor = "#15243b";
    img__wrapper.style.bottom = '135.25rem';
    svg__textwrapper.style.bottom = '27.3rem';
    col1__text__wraper__head.style.bottom = '0';
    col1__imgs1.style.display = 'none';
    col1__imgs2.style.display = 'none';
})
step5.addEventListener("click", () => {
    Opaque_Ring.style.strokeDashoffset = "447"
    col1.style.backgroundColor = "#1363e8";
    col2.style.backgroundColor = "#21cfeb";
    circle_box_bg.style.backgroundColor = "#1363e8";
    img__wrapper.style.bottom = '180.50rem';
    svg__textwrapper.style.bottom = '37rem';
    col1__text__wraper__head.style.bottom = '100px';
    col1__imgs1.style.display = 'none';
    col1__imgs2.style.display = 'none';
})
step6.addEventListener("click", () => {
    Opaque_Ring.style.strokeDashoffset = "321"
    col1.style.backgroundColor = "#022a91";
    col2.style.backgroundColor = "pink";
    circle_box_bg.style.backgroundColor = "#022a91";
    img__wrapper.style.bottom = '225.75rem';
    svg__textwrapper.style.bottom = '46rem';
    col1__text__wraper__head.style.bottom = '199px';
    col1__imgs1.style.display = 'none';
    col1__imgs2.style.display = 'none';
})
step7.addEventListener("click", () => {
    Opaque_Ring.style.strokeDashoffset = "181"
    col1.style.backgroundColor = "#01842d";
    col2.style.backgroundColor = "#01b71a";
    circle_box_bg.style.backgroundColor = "#01842d";
    img__wrapper.style.bottom = '270rem';
    svg__textwrapper.style.bottom = '55rem';
    col1__text__wraper__head.style.bottom = '0';
    col1__imgs1.style.display = 'none';
    col1__imgs2.style.display = 'block';
})


document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        Opaque_Ring.style.strokeDashoffset = "1000";
        col1.style.backgroundColor = "purple";
        col2.style.backgroundColor = "silver";
        circle_box_bg.style.backgroundColor = "purple";
        img__wrapper.style.bottom = '0';
        svg__textwrapper.style.bottom = '0';
        col1__text__wraper__head.style.bottom = '0';
        col1__imgs1.style.display = 'block';
        col1__imgs2.style.display = 'none';
    } else if (e.keyCode == '40') {
        Opaque_Ring.style.strokeDashoffset = "839"
        col1.style.backgroundColor = "purple";
        col2.style.backgroundColor = "darkBlue"
        circle_box_bg.style.backgroundColor = "purple";
        img__wrapper.style.bottom = '45rem';
        svg__textwrapper.style.bottom = '8.3rem';
        col1__text__wraper__head.style.bottom = '100px';
        col1__imgs1.style.display = 'none';
        col1__imgs2.style.display = 'none';
    } else if (e.keyCode == '37') {
        Opaque_Ring.style.strokeDashoffset = "709"
        col1.style.backgroundColor = "#050f3a";
        col2.style.backgroundColor = "#0f1947";
        circle_box_bg.style.backgroundColor = "#050f3a";
        img__wrapper.style.bottom = '90.25rem';
        svg__textwrapper.style.bottom = '16.8rem';
        col1__text__wraper__head.style.bottom = '199px';
        col1__imgs1.style.display = 'none';
        col1__imgs2.style.display = 'none';
    } else if (e.keyCode == '39') {
        Opaque_Ring.style.strokeDashoffset = "574"
        col1.style.backgroundColor = "#15243b";
        col2.style.backgroundColor = "#0c111a";
        circle_box_bg.style.backgroundColor = "#15243b";
        img__wrapper.style.bottom = '135.25rem';
        svg__textwrapper.style.bottom = '27.3rem';
        col1__text__wraper__head.style.bottom = '0';
        col1__imgs1.style.display = 'none';
        col1__imgs2.style.display = 'none';
    }

}