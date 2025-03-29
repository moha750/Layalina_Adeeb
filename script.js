// تعديل إعدادات Swiper الرئيسي
var mainSwiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    preloadImages: false,
    lazy: true,
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
    preloadImages: false,
    lazy: true,
    watchSlidesProgress: true,
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


// عداد الأرقام مع إعادة التشغيل عند الوصول للقسم
document.addEventListener("DOMContentLoaded", function() {
    const counterSection = document.querySelector('.container');
    const counters = document.querySelectorAll('.counter');
    let animationStarted = false;

    // دالة إعادة تعيين العدادات
    function resetCounters() {
        counters.forEach(counter => {
            counter.innerText = '0';
            counter.isAnimating = false;
        });
        animationStarted = false;
    }

    // دالة تشغيل العداد
    function animateCounter(counter) {
        if (counter.isAnimating) return;
        
        counter.isAnimating = true;
        const target = +counter.getAttribute('data-target');
        const duration = 2000; // مدة الحركة بالميلي ثانية
        const startTime = performance.now();
        
        function updateCounter(currentTime) {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const value = Math.floor(progress * target);
            
            counter.innerText = value;
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.isAnimating = false;
            }
        }
        
        requestAnimationFrame(updateCounter);
    }

    // متابعة حركة التمرير
    window.addEventListener('scroll', function() {
        const sectionTop = counterSection.getBoundingClientRect().top;
        const sectionHeight = counterSection.offsetHeight;
        const windowHeight = window.innerHeight;

        // عندما يصل المستخدم للقسم
        if (sectionTop < windowHeight - 100 && !animationStarted) {
            animationStarted = true;
            counters.forEach(animateCounter);
        }
        
        // إعادة التعيين عند الخروج من القسم
        if (sectionTop > windowHeight || sectionTop + sectionHeight < 0) {
            resetCounters();
        }
    });

    // تشغيل التحقق مباشرة إذا كان القسم ظاهرًا عند التحميل
    if (counterSection.getBoundingClientRect().top < window.innerHeight - 100) {
        animationStarted = true;
        counters.forEach(animateCounter);
    }
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











// Loading screen functionality
// Loading screen functionality
window.addEventListener('load', function() {
    // إضافة كلاس no-scroll للbody عند التحميل
    document.body.classList.add('no-scroll');
    
    setTimeout(function() {
        const loadingScreen = document.querySelector('.loading-screen');
        loadingScreen.style.opacity = '0';
        setTimeout(function() {
            loadingScreen.style.display = 'none';
            // إزالة كلاس no-scroll عند انتهاء التحميل
            document.body.classList.remove('no-scroll');
        }, 500);
    }, 1500); // Adjust this time as needed
});

// معالجة نموذج التواصل
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // جمع بيانات النموذج
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };
    
    // هنا يمكنك إضافة كود لإرسال البيانات إلى الخادم
    console.log('تم إرسال النموذج:', formData);
    
    // عرض رسالة نجاح
    alert('شكراً لتواصلك معنا! سنرد على رسالتك في أقرب وقت ممكن.');
    
    // إعادة تعيين النموذج
    this.reset();
});

