// forms
const btnOpenAuth = document.querySelector('.auth_btn');
const formAuth = document.querySelector('.formAuth');
if (btnOpenAuth) {
    btnOpenAuth.addEventListener('click', ()=>{
        formAuth.classList.add('formAuth_open');
    }, true);
};
let spanAuth = document.getElementsByClassName("closeAuth")[0];
if (spanAuth) {
    spanAuth.addEventListener('click', () => {
        formAuth.classList.remove('formAuth_open');
    }, true);
};

const btnOpenReg = document.querySelector('.reg_btn');
const formReg = document.querySelector('.formReg');
if (btnOpenReg) {
    btnOpenReg.addEventListener('click', ()=>{
        formReg.classList.add('formReg_open');
    }, true);
};
let spanReg = document.getElementsByClassName("closeReg")[0];
if (spanReg) {
    spanReg.addEventListener('click', () => {
        formReg.classList.remove('formReg_open');
    }, true);
};

//accordeon
const stageTitles = document.querySelectorAll(".stg_item");
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
const rightBtn = document.querySelectorAll('.olymp_next');
const leftBtn = document.querySelectorAll('.olymp_prev');
olympBlock.forEach((item, i) => {
    let blockDemisions = item.getBoundingClientRect();
    let blockWidth = blockDemisions.width;
    rightBtn[i].addEventListener('click', () => {
        item.scrollLeft += blockWidth/2;
    });
    leftBtn[i].addEventListener('click', () => {
        item.scrollLeft -= blockWidth/2;
    });
    if (blockWidth <= 510) {
        rightBtn[i].addEventListener('click', () => {
            item.scrollLeft += blockWidth;
        });
        leftBtn[i].addEventListener('click', () => {
            item.scrollLeft -= blockWidth;
        });
    }
    else if (blockWidth >= 360) {
        rightBtn[i].addEventListener('click', () => {
            item.scrollLeft += blockWidth/2.5;
        });
        leftBtn[i].addEventListener('click', () => {
            item.scrollLeft -= blockWidth/2.5;
        });
    }
});

const nav = document.getElementById("navbar-toggler");
const menus = document.querySelectorAll(".formAuth");
if (nav) {
    nav.addEventListener('click', () => {
        for (let elem of menus) {
            elem.classList.toggle("formAuth_open");
        };
    }, true);
};

//send
const btnSend = document.querySelector('.btn_send');
const modalSend = document.querySelector('.sendModal');
let spanSend = document.getElementsByClassName("closeSend")[0];
if (spanSend) {
    spanSend.addEventListener('click', () => {
        modalSend.classList.remove('sendModal_open');
    }, true);
};
let spanCan = document.getElementsByClassName("btn_cancel")[0];
if (spanCan) {
    spanCan.addEventListener('click', () => {
        modalSend.classList.remove('sendModal_open');
    }, true);
};

const modalNotice = document.querySelector('.noticeModal');
let spanNotice = document.getElementsByClassName("closeNotice")[0];
if (spanNotice) {
    spanNotice.addEventListener('click', () => {
        modalNotice.classList.remove('noticeModal_open');
    }, true);
};

const modalErr = document.querySelector('.noticeModal-err');
let spanErr = document.getElementsByClassName("closeNotice")[0];
if (spanErr) {
    spanErr.addEventListener('click', () => {
        modalErr.classList.remove('noticeModal_err-open');
    }, true);
};

// progressbar
const progress = document.querySelector('.progress');
const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
if (progress) {
    window.addEventListener('scroll', () => {
        const windowScroll = window.pageYOffset;
        const progressWidth = (windowScroll / windowHeight).toFixed(2);
        progress.setAttribute('style', `transform: scaleX(${progressWidth});`);
    }, true);
};

// file name
const fileName = document.getElementById('file');
if (fileName) {
    fileName.addEventListener('change', (event) => {
        const files = event.target.files;  
        const loadName = document.getElementById('file_name');
        loadName.innerHTML = `${files[0].name}`;
        loadName.style.color = 'black';
    }, true);
}