document.addEventListener('DOMContentLoaded', function () {
    console.log("it's work");
    if (window.SmoothScroll !== undefined) {
        const scroll = new SmoothScroll('a[href*="#"]', {
            updateURL: false,
            speed: 300,
        });
    }

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
});