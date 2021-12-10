
function getDate () {
    const dateText = document.querySelector(".date-text");
    let today = new Date();
    const dayArray = ["일", "월", "화", "수", "목", "금", "토"]
    dateText.innerText = `${today.getMonth() + 1}월 ${today.getDate()}일 ${dayArray[today.getDay()]}요일 소식입니다`;
}

getDate();