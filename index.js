var galleryFull = new Array();

const buttonAll = document.querySelector("#btn-all");
const buttonBracelets = document.querySelector("#btn-bracelets");
const buttonCahiers = document.querySelector("#btn-cahiers");
const buttonColliers = document.querySelector("#btn-colliers");
const buttonDecorations = document.querySelector("#btn-decorations");
const buttonDessins = document.querySelector("#btn-dessins");
const buttonLivres = document.querySelector("#btn-livres");
const buttonPendentifs = document.querySelector("#btn-pendentifs");
const buttonPendules = document.querySelector("#btn-pendules");
const buttonPierres = document.querySelector("#btn-pierres");
const buttonPochettes = document.querySelector("#btn-pochettes");
const buttonPorteParfum = document.querySelector("#btn-porte-parfum");
const buttonTableaux = document.querySelector("#btn-tableaux");
const buttonToteBags = document.querySelector("#btn-tote-bags");
const filters = document.querySelectorAll(".filter");


/********* Gallery display functions : **********/
function clearGallery(selector) {
    document.querySelector(selector)
        .innerHTML = ``;
}

function removeAllClass(balise, nameClass) {
    for (let i = 0; i < balise.length; i++) {
        balise[i].classList.remove(nameClass);
    }
}

function resetClick(filterId) {
    clearGallery(".gallery");
    removeAllClass(filters, "filter--active");
    filters[filterId].classList.add("filter--active");
}

function filterByCat(arr, id) {
    var result = arr.filter(function (article) {
        console.log(arr, id)
        return article.categoryId === id;
    });
    return result;
}

function fillGallery(arr) {
    for (let i = 0; i < arr.length; i++) {
        document.querySelector(".gallery")
            .innerHTML += `<figure>
                    <img src="${arr[i].cover}" alt="${arr[i].title}">
                    <figcaption>${arr[i].title}</figcaption>
                </figure>`;
    }
}

function displayGallery() {
    document.querySelector(".gallery").innerHTML = "";
    fetch("./public/articles.json")
        .then(data => data.json())
        .then(gallery => {
            galleryFull = gallery;
            console.log(galleryFull);
            fillGallery(gallery);

            //"All" button :
            buttonAll.addEventListener("click", () => {
                resetClick(0);
                fillGallery(gallery);
            });

            //"Bracelets" button :
            buttonBracelets.addEventListener("click", () => {
                resetClick(1);
                const filtered = filterByCat(galleryFull, 1);
                fillGallery(filtered);
            });

            //"Cahiers" button :
            buttonCahiers.addEventListener("click", () => {
                resetClick(2);
                const filtered = filterByCat(galleryFull, 2);
                fillGallery(filtered);
            });

            //"Colliers" button :
            buttonColliers.addEventListener("click", () => {
                resetClick(3);
                const filtered = filterByCat(galleryFull, 3);
                fillGallery(filtered);
            });

            //"Décorations" button :
            buttonDecorations.addEventListener("click", () => {
                resetClick(4);
                const filtered = filterByCat(galleryFull, 4);
                console.log(filtered)
                fillGallery(filtered);
            });

            //"Dessins" button :
            buttonDessins.addEventListener("click", () => {
                resetClick(5);
                const filtered = filterByCat(galleryFull, 5);
                fillGallery(filtered);
            });
            
            //"Livres" button :
            buttonLivres.addEventListener("click", () => {
                resetClick(6);
                const filtered = filterByCat(galleryFull, 6);
                fillGallery(filtered);
            });

            //"Pendentifs" button :
            buttonPendentifs.addEventListener("click", () => {
                resetClick(7);
                const filtered = filterByCat(galleryFull, 7);
                fillGallery(filtered);
            });

            //"Pendules" button :
            buttonPendules.addEventListener("click", () => {
                resetClick(8);
                const filtered = filterByCat(galleryFull, 8);
                fillGallery(filtered);
            });

            //"Pierres" button :
            buttonPierres.addEventListener("click", () => {
                resetClick(9);
                const filtered = filterByCat(galleryFull, 9);
                fillGallery(filtered);
            });

            //"Pochettes zippées" button :
            buttonPochettes.addEventListener("click", () => {
                resetClick(10);
                const filtered = filterByCat(galleryFull, 10);
                fillGallery(filtered);
            });

            //"Portes parfum" button :
            buttonPorteParfum.addEventListener("click", () => {
                resetClick(11);
                const filtered = filterByCat(galleryFull, 11);
                fillGallery(filtered);
            });

            //"Tableaux" button :
            buttonTableaux.addEventListener("click", () => {
                resetClick(12);
                const filtered = filterByCat(galleryFull, 12);
                fillGallery(filtered);
            });

            //"Tote Bags" button :
            buttonToteBags.addEventListener("click", () => {
                resetClick(13);
                const filtered = filterByCat(galleryFull, 13);
                fillGallery(filtered);
            });

        });
}

displayGallery();