# KakaoClone
 > 카카오 회사 페이지(https://www.kakao.com) 클론 프로젝트
 * https://irondesk.github.io/KakaoClone/

## 📌 목적
### 의도 및 목표
 * 실제 서비스를 클론하면서, 퍼블리싱 능력과 간단한 JavaScript의 DOM을 학습하고자 하였습니다.
 * **소스 코드를 보지 않고** 결과물만 보면서 똑같이 구현하는 것을 목표로 하였습니다.
 * ``div`` 사용 지양하고 계층화된 시맨틱 태그(semantic tag) 사용하기

## 구조
```js
📦KakaoClone
 ┣ 📂img
 ┣ 📂news
 ┣ 📜index.html
 ┣ 📜index.js
 ┣ 📜README.md
 ┣ 📜reset.css
 ┗ 📜style.css
```

## 📌 요약
### ✔️ 주요 기능
  1. ``Date()``로 현재 날짜를 호출해 상단에 넣기
  2. 스크롤이 내려가면 상단에 '오늘의 카카오'만 남기고 고정하기
  3. 다크 모드 구현
  4. 모바일 디바이스를 고려한 반응형 웹 제작하기

#### 스크롤이벤트
 * ``document``에 srollTop의 좌표가 210px이 넘어갈 때 ``addEventListener``를 적용하였습니다. 
 * 적용 시엔 별도로 마크업한 ``.today-sticky`` 요소의 클래스에 ``on``을 추가하였습니다.
```js
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
```

#### 다크모드
 * 다크모드 전환 버튼이 두 개(PC, 모바일)가 있어, 코드 중복을 방지할 방법을 고민했습니다.
 * ``querySelectorAll``로 NodeList를 받아오고, ``forEach``로 ``addEventListener``를 적용하였습니다.
```js
function darkMode () {
    const darkBtn = document.querySelectorAll(".dark-btn");
    const body = document.querySelector("body");
    const nav = body.querySelector("nav");
    let darkQuery = [
        [document, 'body'],
        [body, 'nav'],
        [nav, '.navLeft'],
        [nav, '.navRight'],
        [body, '.today-container'],
        [body, '.sitemap'],
        [body, '.UseInfoMenu'],
        [body, '.today-sticky'],
        [body, '.mobile-menu']
    ]
    
    darkBtn.forEach((v) => {
        v.addEventListener("click", function() {
            if (!body.classList.contains("dark")) {
                darkQuery.map((value)=> {
                    value[0].querySelector(value[1]).classList.add("dark");
                });
            } else {
                darkQuery.map((value)=> {
                    value[0].querySelector(value[1]).classList.remove("dark");
                });
            }
        })
    });
}
```
