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
document.querySelectorAll('.navigation__secondaire').forEach(item => {
    item.addEventListener('click', function (event) {
alert('bjr')
        event.preventDefault()
    });
});