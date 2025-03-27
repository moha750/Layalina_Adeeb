// تهيئة Swiper الرئيسي
var mainSwiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// تهيئة معرض الصور مع تفعيل الـ loop
var gallerySwiper = new Swiper(".gallerySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    loopAdditionalSlides: 2,
    loopFillGroupWithBlank: true,
    autoHeight: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        600: {
            slidesPerView: 3,
            loopAdditionalSlides: 3,
        },
        1024: {
            slidesPerView: 4,
            loopAdditionalSlides: 4,
        }
    }
});

// عداد الأرقام
document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const increment = target / 100;
        let current = 0;

        const updateCounter = () => {
            if (current < target) {
                counter.innerText = Math.ceil(current);
                current += increment;
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });
});



// تهيئة Logo Slider مع حركة سلسة
var logoSlider = new Swiper(".logoSlider", {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    speed: 1000, // زيادة سرعة الانتقال
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        600: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 30,
        }
    },
    // إضافة تأثيرات حركية
    effect: 'slide', // أو 'coverflow' لمزيد من الإثارة
    grabCursor: true, // تغيير شكل المؤشر عند التحويم
    freeMode: {
        enabled: true, // حركة حرة عند السحب
        momentumRatio: 0.5, // تنعيم الحركة
    },
    // تحسين الأداء
    preloadImages: false,
    lazy: true,
});