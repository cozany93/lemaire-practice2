document.addEventListener(`DOMContentLoaded`, function () { 
    // AOS
    AOS.init();

    // 마우스휠 이벤트(헤더가 휠이 내려갈때는 안보이다가 올라갈때 보이게끔 설정)
    window.addEventListener(`wheel`, (event) => { 
        const headerArea = document.querySelector(`.header_area`);

        if (event.deltaY > 0) {
            // wheel down
            headerArea.classList.remove(`scroll`);
        } else {
            // wheel up
            headerArea.classList.add(`scroll`);
        }

    });

    // body 에 bg 변경(스크롤 이벤트 offset 값 활용)
    const sec2 = document.querySelector(`.sec_2`);
    const sec3 = document.querySelector(`.sec_3`);

    window.addEventListener(`scroll`, () => { 
        const sec2Offset = sec2.offsetTop - 500;
        const sec3Offset = sec3.offsetTop;

        const scrollTop = window.scrollY;
        const bodyBg = document.querySelector(`body`);

        if (scrollTop > sec2Offset && scrollTop < sec3Offset) {
            bodyBg.classList.add(`bg`);
        } else {
            bodyBg.classList.remove(`bg`);
        }
    });


    // 과제 : sec_4 swiper
    var swiper = new Swiper(".ceoSwiper", {
        direction: "vertical",
        loop: true,
        // autoplay: {
        //     delay: 1500,
        //     disableOnInteraction: false, // 다른 인터렉션이 있을때 자동재생이 멈추는 것을 방지
        // },
        //   pagination: {
        //     el: ".swiper-pagination",
        //     clickable: true,
        //   },
    });


    // 과제 : sub_menu
    // 마우스 올리면 카테고리에 맞는 탭 활성화
    const submenuTab = document.querySelectorAll(`.main_menu li`);
    const submenuBox = document.querySelector(`.sub_menu_box`);

    for (const li of submenuTab){
        li.addEventListener(`mouseenter`, function () { 
            submenuBox.classList.add(`active`);

            // 탭메뉴 연결
            const tab = this.getAttribute(`data-tab`);
            const subMenu = document.querySelectorAll(`.sub_menu`);

            for (const tabContent of subMenu){
                tabContent.classList.remove(`active`);
            }

            const changeTab = document.querySelector(`#${tab}`);
            changeTab.classList.add(`active`);
        });
    }

    // 서브메뉴박스에서 마우서 나가면 기존 상태로 변경
    submenuBox.addEventListener(`mouseleave`, function () { 
        this.classList.remove(`active`);
    });


    // 상단이동버튼
    // 300px 이상일때 top_btn 보여지게끔(scroll 클래스명 설정해놓음) / 최상단으로 올라가는 상단이동 버튼 구현해보기 -> 클릭했을때 최상단으로 이동 
    const topBtn = document.querySelector(`.top_btn`);

    window.addEventListener(`scroll`, function () { 
        const scrollTop = window.scrollY;

        if (scrollTop >= 300) {
            topBtn.classList.add(`scroll`);
        } else {
            topBtn.classList.remove(`scroll`);
        }
    });

    topBtn.addEventListener(`click`, () => { 
        window.scrollTo({
            top: 0,
            behavior: `smooth`
        });
    });

    // 작은그리드에서 햄버거 버튼 클릭하면 메인메뉴만 출력 / 햄버거 버튼은 위치값 서로 바뀌도록 처리
});