// call forms

const btnOpenAuth = document.querySelector('.auth_btn');
const formAuth = document.querySelector('.formAuth');
btnOpenAuth.addEventListener('click', ()=>{
    formAuth.classList.add('formAuth_open');
});

let spanAuth = document.getElementsByClassName("closeAuth")[0];
spanAuth.onclick = function() {
    formAuth.classList.remove('formAuth_open');
}

const btnOpenReg = document.querySelector('.reg_btn');
const formReg = document.querySelector('.formReg');
btnOpenReg.addEventListener('click', ()=>{
    formReg.classList.add('formReg_open');
});

let spanReg = document.getElementsByClassName("closeReg")[0];
spanReg.onclick = function() {
    formReg.classList.remove('formReg_open');
}

//accordeon
const stage = document.querySelector(".stage_item");
const stageTitles = stage.querySelectorAll(".stg_item");

stageTitles.forEach.call(stageTitles, function (stageTitle) {
    stageTitle.addEventListener("click", function () {
        const clickedStage = stageTitle.parentElement.querySelector(".stage_txt");
        stageTitle.classList.toggle("stg_item-active");
        clickedStage.classList.toggle("stage_txt-visible");
        if (clickedStage.classList.contains("stage_txt-visible")) {
            clickedStage.style.maxHeight = clickedStage.scrollHeight + "px";
        } 
        else {
            clickedStage.style.maxHeight = null;
        } 
    });
});

//slider
const olympBlock = document.querySelectorAll('.wrapper_block');
const rightBtn = document.querySelectorAll('.olymp_arrow-right');
const leftBtn = document.querySelectorAll('.olymp_arrow-left');

olympBlock.forEach((item, i) => {
    let blockDemisions = item.getBoundingClientRect();
    let blockWidth = blockDemisions.width;

    rightBtn[i].addEventListener('click', () => {
        item.scrollLeft += blockWidth/2;
    });
    leftBtn[i].addEventListener('click', () => {
        item.scrollLeft -= blockWidth/2;
    });
});

const nav = document.getElementById("navbar-toggler");
const menus = document.querySelectorAll(".formAuth");

nav.addEventListener('click', () => {
    for (let el of menus) {
        el.classList.toggle("formAuth_open");
    };
});