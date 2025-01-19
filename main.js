const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

btn.addEventListener('click', () => {
    nav.classList.toggle('menu-open');
});

// Знаходимо кнопку для прокрутки в верх
const scrollToTopButton = document.getElementById('scrollToTop');

// Відстежуємо прокручування сторінки
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) { // Якщо прокрутили більше 500px
        scrollToTopButton.style.display = 'flex'; // Показуємо кнопку
    } else {
        scrollToTopButton.style.display = 'none'; // Ховаємо кнопку
    }
});

// Обробляємо натискання на кнопку для прокрутки в верх
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0, // Прокрутка до самого верху
        behavior: 'smooth' // Плавна анімація
    });
});

const menuLinks = document.querySelectorAll('.menu-item a');

menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // Перевіряємо, чи є у посилання id
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Якщо знайдено відповідний елемент
        if (targetElement) {
            e.preventDefault(); // Відміна стандартного переходу

            // Плавно прокручуємо до потрібного елемента
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});