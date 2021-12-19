
function getDate () {
    const dateText = document.querySelector(".date-text");
    let today = new Date();
    const dayArray = ["일", "월", "화", "수", "목", "금", "토"]
    dateText.innerText = `${today.getMonth() + 1}월 ${today.getDate()}일 ${dayArray[today.getDay()]}요일 소식입니다`;
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



getDate();
addClassOn();
scrollEvent();