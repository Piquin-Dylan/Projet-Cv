document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".container_list a"); // Sélection des liens
    const contents = document.querySelectorAll(".profil.content"); // Sélection des sections

    // Fonction pour cacher tous les articles
    function hideAllContents() {
        contents.forEach(content => content.style.display = "none");
    }

    // Cacher tous les articles sauf le premier au chargement
    hideAllContents();
    document.querySelector("#item_1").style.display = "block";

    // Gestion du clic sur les liens
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Supprime l'effet d'ancre
            const targetId = this.getAttribute("href"); // Récupération de l'ID ciblé
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                hideAllContents(); // Cache tous les articles
                targetElement.style.display = "block"; // Affiche le bon article
            }
        });
    });
});
