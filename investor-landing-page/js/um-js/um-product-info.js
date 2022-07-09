document.addEventListener('DOMContentLoaded', () => {

    
    const umProductInfo = document.querySelector('.um-product-info');
    const umDescBtnProduct = document.querySelectorAll('.um-desc-btn-product__btn');
    const franchisePopupForm = document.querySelectorAll('.um-features-desc-feat');

    if (umProductInfo) {
        umProductInfo.addEventListener('click', (e) => {
            if (e.target.classList.contains('um-desc-btn-product__btn')) {
                const tabsPath = e.target.dataset.tabsPath;
                umDescBtnProduct.forEach(el => {el.classList.remove('um-desc-btn-product__btn--active')});
                document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('um-desc-btn-product__btn--active');
                tabsUmdpHandler(tabsPath);
            }
        });
    }
    
    const tabsUmdpHandler = (path) => {
        franchisePopupForm.forEach(el => {el.classList.remove('um-features-desc-feat--active')});
        document.querySelector(`[data-tabs-target="${path}"]`).classList.add('um-features-desc-feat--active');
    };

    const umProductWrap = document.querySelector('.um-product__wrap');
    const umProductPreviewItem = document.querySelectorAll('.um-product-preview__img');
    const umProductImagesImg = document.querySelectorAll('.um-product-images__img');

    if (umProductWrap) {
        umProductWrap.addEventListener('click', (e) => {
            if (e.target.classList.contains('um-product-preview__img')) {
                const tabsPath = e.target.dataset.tabsPath;
                umProductPreviewItem.forEach(el => {el.classList.remove('um-product-preview__img--active')});
                document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('um-product-preview__img--active');
                tabsProductImg(tabsPath);
            }
        });
    }
    
    const tabsProductImg = (path) => {
        umProductImagesImg.forEach(el => {el.classList.remove('um-product-images__img--active')});
        document.querySelector(`[data-tabs-target="${path}"]`).classList.add('um-product-images__img--active');
    };

})

var swiper = new Swiper(".um-product-slider", {
    pagination: {
      el: ".swiper-pagination",
    },
  });