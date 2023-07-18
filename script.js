const burger = document.querySelector('.container');
const burgerline = document.querySelectorAll('.menuline');
const navLinks = document.querySelector('.menu ul');
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu ul li');
const me = document.querySelector('main .page-title');
const body = document.querySelector('body');
const cross = document.querySelector('.menu  .fa-xmark ')
const theme = document.querySelector('.menu .material-symbols-outlined')
const title = document.querySelector('.title')
const gmail = document.querySelector(
    'body > main > div > div.second-line > ul > li:nth-child(2) > a > img'
);
const links = document.querySelectorAll('.menu ul li a')
const listfooter = document.querySelector('.footer-items ul')
const listfooteritems = document.querySelectorAll('.footer-items ul li')
const spanfooter = document.querySelector('.footer-items span')
const github = document.querySelector('body > footer > div > ul > li:nth-child(1) > a > img')
const rsschool = document.querySelector('body > footer > div > ul > li:nth-child(3) > a > img')
const text1 = "Maxim Krauchyk";
const text2 = "Junior Frontend & Python Developer";
const typewriter1 = document.getElementById('twfullname');
const typewriter2 = document.getElementById('typewritterwhoiam');
let index1 = 0;
let index2 = 0;
let isDarkMode = false;

theme.addEventListener("click", () => {
    index1 = 0;
    index2 = 0;
    typewriter1.textContent = "";

    typewriter2.textContent = "";

    typeWriter1();
    typeWriter2();

    if (isDarkMode) {
        theme.textContent = "light_mode";
        body.style.backgroundColor = "#23232B"
        body.style.color = "#ffffff"
        gmail.src = "images_md/contacts/gmail.png"
        gmail.alt = "Gmail"
        links.forEach(link => {
            link.style.color = 'snow';
        });
        burgerline.forEach(link => {
            link.style.backgroundColor = 'snow';
        });

        listfooter.style.backgroundColor = 'white'
        listfooteritems.forEach(item => {
            item.style.color = 'black';
        });
        spanfooter.style.color = 'black'
        spanfooter.style.cursor = "pointer"
        github.src = "images_md/icons/github_footer.png"
        github.alt = "Github"

        rsschool.src = "images_md/icons/rs_school.png"
        rsschool.alt = "RS Logo"
    } else {
        theme.textContent = "dark_mode";
        body.style.backgroundColor = "#ffffff"
        body.style.color = "#000000"
        gmail.src = "images_md/contacts/gmail_white.png"
        gmail.alt = "Light Gmail"
        links.forEach(link => {
            link.style.color = 'black';
        });
        burgerline.forEach(item => {
            item.style.backgroundColor = 'black';
        });
        listfooter.style.backgroundColor = 'black'
        listfooteritems.forEach(item => {
            item.style.color = 'white';
        });
        spanfooter.style.color = 'white'
        spanfooter.style.cursor = "pointer"
        github.src = "images_md/icons/github_white.png"
        github.alt = "Github White"

        rsschool.src = "images_md/icons/rsschool_white.png"
        rsschool.alt = "RS Logo White"


    }

    isDarkMode = !isDarkMode;
});
setInterval(() => {
    typeWriter1();
    typeWriter2();
}, 100);


cross.addEventListener("click", () => {
    navLinks.style.left = "";
    body.style.overflow = 'auto';
    navLinks.style = "";
    navLinks.classList.remove('active');
    body.classList.remove('active');
    cross.style.display = "none"
    cross.style.opacity = ""
    burger.style.display = "flex"
})


function toggleMenu() {
    navLinks.classList.toggle('active');
    body.classList.toggle('active');
    cross.style.opacity = "1"
    cross.style.display = "flex"
    burger.style.display = "none"
    if (navLinks.classList.contains('active')) {
        navLinks.style.left = "-17px";
        navLinks.style.display = "flex";
        body.style.overflow = "hidden";

    } else {
        navLinks.style.left = "";
        body.style.overflow = 'auto';
        navLinks.classList.remove('active');
        body.classList.remove('active');

    }
}
// Burger Menu 
function updateMenuDisplay() {
    if (window.innerWidth <= 939) {
        cross.style.display = "none"
        burger.style.display = "flex"

        if (navLinks.classList.contains('active')) {
            navLinks.style.left = "-17px";
            navLinks.style.display = "flex";
            body.style.overflow = "hidden";

        } else {
            navLinks.style.left = "";
            body.style.overflow = 'auto';
            navLinks.classList.remove('active');
            body.classList.remove('active');

        }

        burger.addEventListener('click', toggleMenu);
        menuItems.forEach((item) => {
            item.addEventListener('click', () => {
                cross.style.display = "none"
                burger.style.display = "flex"

                window.location.href = item.querySelector('a').getAttribute('href');
                toggleMenu();
                navLinks.classList.remove('active');
                body.classList.remove('active');
                body.style.overflow = ""
                navLinks.style.left = "-1000px";


            });
        });
    } else if (window.innerWidth > 939) {
        cross.style.display = "none"
        burger.style.display = "flex"

        if (navLinks.classList.contains('active')) {
            navLinks.style.left = "-17px";
            navLinks.style.display = "flex";
            body.style.overflow = "hidden";

        } else {
            navLinks.style.left = "";
            body.style.overflow = 'auto';
            navLinks.classList.remove('active');
            body.classList.remove('active');

        }

    }
    menuItems.forEach((item) => {
        item.removeEventListener('click', () => {
            toggleMenu();
        });
    });
    menuItems.forEach((item) => {
        item.addEventListener('click', () => {
            cross.style.display = "none"
            burger.style.display = "flex"
            window.location.href = item.querySelector('a').getAttribute('href');
            navLinks.classList = "";
            body.classList = "";
            body.style.overflow = ""
            navLinks.style = "";


        });

    });


}
function typeWriter1() {
    if (index1 < text1.length) {
        typewriter1.textContent += text1.charAt(index1);
        index1++;
        setTimeout(typeWriter1, 100);
    }
}
function typeWriter2() {
    if (index2 < text2.length) {
        typewriter2.textContent += text2.charAt(index2);
        index2++;
        setTimeout(typeWriter2, 100); // Adjust the delay here (in milliseconds)
    }

}
// Изначальная установка отображения меню при загрузке страницы
updateMenuDisplay();

// Обработчик события resize для отслеживания изменений размера окна
window.addEventListener('resize', updateMenuDisplay);
