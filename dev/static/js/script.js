document.addEventListener('DOMContentLoaded', function () {
    console.log("it's work");
    if (window.SmoothScroll !== undefined) {
        const scroll = new SmoothScroll('a[href*="#"]', {
            updateURL: false,
            speed: 300,
        });
    }

    // todo fix event on every tab
    const tabs = document.querySelectorAll('.tabs');
    if (tabs) {
        tabs.forEach(tabsItem => {
            const tabsName = tabsItem.querySelectorAll('.tabs__name');
            const activeTab = tabsItem.querySelector('.tabs__name.active');
            const activeTabID = activeTab.dataset.tab;
            const activeTabContent = tabsItem.querySelector(`[data-tab-content="${activeTabID}"]`);
            activeTabContent.classList.add('active');

            tabsItem.addEventListener('click', function (e) {
                e.preventDefault();
                if (e.target.classList.contains('tabs__name')) {
                    tabsName.forEach(name => {
                        name.classList.remove('active');
                    });
                    const currentActiveTab = e.target.dataset.tab;
                    const nextActiveContent = tabsItem.querySelector(`[data-tab-content="${currentActiveTab}"]`);
                    tabsItem.querySelector('.tabs__content.active').classList.remove('active');
                    e.target.classList.add('active');
                    nextActiveContent.classList.add('active');
                }
            });
        });
    }

    const btnMenu = document.querySelector('.menu-open');
    const menu = document.querySelector('.menu');
    if (btnMenu && menu) {
        btnMenu.addEventListener('click', () => {
            btnMenu.classList.toggle('active');
            menu.classList.toggle('active');
            document.body.classList.toggle('hidden');
        });
    }

    const mainBgPhoto = document.querySelector('.main-bg');
    const clientWidth = window.screen.width;

    if (mainBgPhoto && clientWidth <= 780) {
        const clonePhoto = mainBgPhoto.cloneNode(true);
        const main = document.querySelector('.main');
        main.append(clonePhoto);
        mainBgPhoto.remove();
    }

    const familySwiper = document.querySelector('.family-swiper');
    if (familySwiper) {
        const swiper = new Swiper('.family-swiper', {
            scrollbar: {
                el: '.swiper-scrollbar'
            },
            navigation: {
                nextEl: '.family-swiper__btn.-next',
                prevEl: '.family-swiper__btn.-prev'
            },
            slidesPerView: 'auto',
            spaceBetween: 18,
            breakpoints: {
                601: {
                    spaceBetween: 55,
                },
            }
        });
    }

    const momentsSwiper = document.querySelector('.moments-slider__swiper');
    if (momentsSwiper) {
        const swiper = new Swiper(momentsSwiper, {
            slidesPerView: 1,

            pagination: {
                el: '.js-swiper-count',
                type: 'fraction',
                renderFraction: function (currentClass, totalClass) {
                    return 'Фото <span class="' + currentClass + '"></span>' +
                        ' из ' +
                        '<span class="' + totalClass + '"></span>';
                },
            },
            navigation: {
                nextEl: '.moments-slider__btn.-next',
                prevEl: '.moments-slider__btn.-prev'
            },
        });
    }

    // todo fix addEventListener
    const moments = document.querySelector('.moments');
    const momentsSlider = document.querySelector('.moments-modal');
    if (moments) {
        moments.addEventListener('click', (e) => {
            e.preventDefault();
            const el = e.target.closest('[data-moments-slider]');
            if (!el) {
                return;
            }
            momentsSlider.classList.add('active');
            const scrollTop = document.documentElement.scrollTop;
            const siteHeight = document.documentElement.offsetHeight;
            const modalHeight = momentsSlider.clientHeight;
            console.log(scrollTop, modalHeight, siteHeight);
            console.log(scrollTop + modalHeight < siteHeight);
            if (scrollTop + modalHeight < siteHeight) {
                momentsSlider.style.top = scrollTop + 'px';
            } else {
                momentsSlider.style.top = siteHeight - modalHeight + 'px';
            }
        });

        momentsSlider.addEventListener('click', (e) => {
            if (e.target.dataset.modalClose !== undefined || e.target.closest('[data-modal-close]')) {
                momentsSlider.classList.remove('active');
                momentsSlider.style.top = 0;
            }
        });
    }

    const formSearch = document.querySelector('.form-search');

    if (formSearch) {
        document.addEventListener('click', (e) => {
            const btnOpenForm = e.target.closest('.js-open-search');
            const btnCloseForm = e.target.closest('.form-search__close');
            const isFormSearchClick = e.target.closest('.form-search');
            const hasFormSearchClass = formSearch.classList.contains('active');

            if (btnOpenForm) {
                formSearch.classList.add('active');
            }
            if (hasFormSearchClass && !btnOpenForm && !isFormSearchClick || btnCloseForm) {
                formSearch.classList.remove('active');
            }
        });
    }


});