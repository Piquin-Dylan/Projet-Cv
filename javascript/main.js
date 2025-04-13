document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".container_list a"); // Sélection des liens
    const contents = document.querySelectorAll(".profil.content"); // Sélection des sections

    function hideAllContents() {
        contents.forEach(content => content.style.display = "none");
    }

    hideAllContents();
    document.querySelector("#item_1").style.display = "block";

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Supprime l'effet d'ancre
            const targetId = this.getAttribute("href"); // Récupération de l'ID ciblé
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                hideAllContents();
                targetElement.style.display = "block";
            }
        });
    });
});
const arrow = document.querySelectorAll('.arrow')
const articleContent = document.querySelectorAll('.article article')
const info = document.querySelector('.info')
let currentIndex = 0
console.log(currentIndex)
arrow.forEach(arrows => {
    arrows.addEventListener('click', (evt) => {
        evt.preventDefault()
        articleContent.forEach(article => {
            article.style.display = 'none'

            if (evt.target.classList.contains('arrow_left')) {
                articleContent[currentIndex].style.display = 'block'
                currentIndex--
                console.log(currentIndex)
            }

            if (evt.target.classList.contains('arrow_right')) {
                currentIndex++
                console.log(currentIndex)
            }
            if (currentIndex === 3) {
                currentIndex = 0
            }
            // Si currentIndex dépasse la limite (dernier article), revenir au premier
            if (currentIndex === articleContent.length) {
                currentIndex = 0;

            }
            // Si currentIndex devient négatif, revenir au dernier article
            if (currentIndex < 0) {
                currentIndex = articleContent.length - 1;
            }
        })

    })
})
// Supprime la classe 'no-js' au chargement
document.body.classList.remove('no-js');

document.querySelectorAll('.dropdown').forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu__deroulant');
    const options = dropdown.querySelectorAll('.menu__deroulant li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', (e) => {
        document.querySelectorAll('.dropdown').forEach(e => {
            if (e !== dropdown) {
                e.querySelector('.select').classList.remove('select-clicked');
                e.querySelector('.caret').classList.remove('caret-rotate');
                e.querySelector('.menu__deroulant').classList.remove('menu-open');
            }
        });

        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;

            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');

            options.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
        });
    });

    document.addEventListener('click', (event) => {
        if (!dropdown.contains(event.target)) {
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.documentElement.classList.remove("no-js"); // Supprime la classe si JS est activé

    const button = document.querySelector(".explore__section");
    const menu = document.querySelector(".navigation__secondaire");

    button.addEventListener("click", function () {
        menu.classList.toggle("show");
    });
});