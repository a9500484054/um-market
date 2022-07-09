document.addEventListener('DOMContentLoaded', () => {
    const umdpSection = document.querySelector('.umdp-section');
    const umdpBtn = document.querySelectorAll('.umdp-menu__btn');
    const blockContent = document.querySelectorAll('.umdp-section__content');

    const umdpMenuBtn = document.querySelector('.umdp-button-menu')
    const umdpMenuBlock = document.querySelector('.umdp-menu')
    

    if (umdpSection) {
        umdpSection.addEventListener('click', (e) => {
            if (e.target.classList.contains('umdp-menu__btn')) {
                const tabsPath = e.target.dataset.tabsPath;
                umdpBtn.forEach(el => {el.classList.remove('umdp-menu__btn--active')});
                document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('umdp-menu__btn--active');
                tabsUmdpHandler(tabsPath);
            }
        });
    }
    
    const tabsUmdpHandler = (path) => {
        blockContent.forEach(el => {el.classList.remove('umdp-section__content--active')});
        document.querySelector(`[data-tabs-target="${path}"]`).classList.add('umdp-section__content--active');
    };

    umdpMenuBtn.addEventListener('click', function() {
        umdpMenuBlock.classList.toggle('umdp-menu--active')
    })
})