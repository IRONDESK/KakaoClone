
function getDate () {
    const dateText = document.querySelector(".date-text");
    const dayText1 = document.querySelector(".today-sticky .today-icon-text");
    const dayText2 = document.querySelector(".today-container .today-icon-text");
    let today = new Date();
    const dayArray = ["일", "월", "화", "수", "목", "금", "토"]
    dateText.innerText = `${today.getMonth() + 1}월 ${today.getDate()}일 ${dayArray[today.getDay()]}요일 소식입니다`;
    dayText1.innerText = `${today.getDate()}`;
    dayText2.innerText = `${today.getDate()}`;
}

function addClassOn () {
    // .footer-line-Left 메뉴
    const footerLine = document.querySelector('.footer-line')
    footerLine.addEventListener("click", function (e) {
        if (e.target.closest("li").classList.contains("top-title")) {
            e.target.closest("li").classList.toggle("on");
            e.target.nextElementSibling.classList.toggle("on");
        }
    })

    // .footer-line-Right 내 관련 사이트 버튼
    document.querySelector('.footer-line-Right').addEventListener("click", function (e) {
        e.target.nextElementSibling.classList.toggle("on");
        e.target.firstElementChild.classList.toggle("on")
    })
}

function scrollEvent () {
    document.addEventListener("scroll", function() {
        const currentScroll = document.documentElement.scrollTop;
        const todayCont = document.querySelector(".today-sticky");
        if (currentScroll > 210) {
            todayCont.classList.add("on");
        } else {
            todayCont.classList.remove("on");
        }
    })
}

function darkMode () {
    const darkBtn = document.querySelector("#dark-btn");
    const body = document.querySelector("body");


    darkBtn.addEventListener("click", function() {
        if (!body.classList.contains("dark")) {
            body.classList.add("dark");
            document.querySelector("body").classList.add("dark");
            document.querySelector("nav").classList.add("dark");
            document.querySelector(".today-container").classList.add("dark");
            document.querySelector(".sitemap").classList.add("dark");
            document.querySelector(".navLeft").classList.add("dark");
            document.querySelector(".navRight").classList.add("dark");
            document.querySelector(".UseInfoMenu").classList.add("dark");
        } else {
            body.classList.remove("dark");
            document.querySelector("body").classList.remove("dark");
            document.querySelector("nav").classList.remove("dark");
            document.querySelector(".today-container").classList.remove("dark");
            document.querySelector(".sitemap").classList.remove("dark");
            document.querySelector(".navLeft").classList.remove("dark");
            document.querySelector(".navRight").classList.remove("dark");
            document.querySelector(".UseInfoMenu").classList.remove("dark");
        }
    })
}



getDate();
addClassOn();
scrollEvent();
darkMode();