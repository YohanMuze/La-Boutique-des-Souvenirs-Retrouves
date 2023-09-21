var galleryFull, galleryActual = new Array();

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

const modal = document.querySelector("#modal-article");

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
        return article.categoryId === id;
    });
    return result;
}

function filterById(arr, check) {
    var result = arr.filter(function (article) {
        return article.id === check;
    });
    return result;
}


function fillGallery(arr) {
    for (let i = 0; i < arr.length; i++) {
        document.querySelector(".gallery")
            .innerHTML += `    
                <figure>
                    <a class="modal-link" href="#modal-article">
                        <img id="${arr[i].id}" src="${arr[i].cover}" alt="${arr[i].title}">
                        <figcaption>${arr[i].title}</figcaption>
                    </a>
                </figure>`;
    }
    let modalLink = document.querySelectorAll(".modal-link");
    console.log(modalLink);
    modalLink.forEach(a => {
        a.addEventListener("click", (e) => {
            openModal(e);
            console.log(modal);
        })
    });
}

function displayGallery() {
    document.querySelector(".gallery").innerHTML = "";
    fetch("./public/articles.json")
        .then(data => data.json())
        .then(gallery => {
            galleryFull = gallery;
            galleryActual = galleryFull
            fillGallery(gallery);

            //"All" button :
            buttonAll.addEventListener("click", () => {
                resetClick(0);
                galleryActual = galleryFull;
                fillGallery(galleryFull);
            });

            //"Bracelets" button :
            buttonBracelets.addEventListener("click", () => {
                resetClick(1);
                const filtered = filterByCat(galleryFull, 1);
                galleryActual = filtered;
                fillGallery(filtered);
            });

            //"Cahiers" button :
            buttonCahiers.addEventListener("click", () => {
                resetClick(2);
                const filtered = filterByCat(galleryFull, 2);
                galleryActual = filtered;
                fillGallery(filtered);
            });

            //"Colliers" button :
            buttonColliers.addEventListener("click", () => {
                resetClick(3);
                const filtered = filterByCat(galleryFull, 3);
                galleryActual = filtered;
                fillGallery(filtered);
            });

            //"Décorations" button :
            buttonDecorations.addEventListener("click", () => {
                resetClick(4);
                const filtered = filterByCat(galleryFull, 4);
                galleryActual = filtered;
                fillGallery(filtered);
            });

            //"Dessins" button :
            buttonDessins.addEventListener("click", () => {
                resetClick(5);
                const filtered = filterByCat(galleryFull, 5);
                galleryActual = filtered;
                fillGallery(filtered);
            });
            
            //"Livres" button :
            buttonLivres.addEventListener("click", () => {
                resetClick(6);
                const filtered = filterByCat(galleryFull, 6);
                galleryActual = filtered;
                fillGallery(filtered);
            });

            //"Pendentifs" button :
            buttonPendentifs.addEventListener("click", () => {
                resetClick(7);
                const filtered = filterByCat(galleryFull, 7);
                galleryActual = filtered;
                fillGallery(filtered);
            });

            //"Pendules" button :
            buttonPendules.addEventListener("click", () => {
                resetClick(8);
                const filtered = filterByCat(galleryFull, 8);
                galleryActual = filtered;
                fillGallery(filtered);
            });

            //"Pierres" button :
            buttonPierres.addEventListener("click", () => {
                resetClick(9);
                const filtered = filterByCat(galleryFull, 9);
                galleryActual = filtered;
                fillGallery(filtered);
            });

            //"Pochettes zippées" button :
            buttonPochettes.addEventListener("click", () => {
                resetClick(10);
                const filtered = filterByCat(galleryFull, 10);
                galleryActual = filtered;
                fillGallery(filtered);
            });

            //"Portes parfum" button :
            buttonPorteParfum.addEventListener("click", () => {
                resetClick(11);
                const filtered = filterByCat(galleryFull, 11);
                galleryActual = filtered;
                fillGallery(filtered);
            });

            //"Tableaux" button :
            buttonTableaux.addEventListener("click", () => {
                resetClick(12);
                const filtered = filterByCat(galleryFull, 12);
                galleryActual = filtered;
                fillGallery(filtered);
            });

            //"Tote Bags" button :
            buttonToteBags.addEventListener("click", () => {
                resetClick(13);
                const filtered = filterByCat(galleryFull, 13);
                galleryActual = filtered;
                fillGallery(filtered);
            });

        });
}

/********* Modal's functions *********/

function openModal(e) {
    e.preventDefault();
    modal.showModal();
    modal.style.display = "flex";
    let target = e.target.id;
    let article = filterById(galleryActual, target);
    console.log(article);
    fillModal(article, target);
}

function closeModal() {
    modal.close();
    modal.style.display = "none";
}

function fillModal(article) {
        document.querySelector(".modal-wrapper")
            .innerHTML = 
    `
    <div class="modal-wrapper__header"><img class="modal-wrapper__header__img" src="./public/close_cross.png"></div>
    <div class="modal-wrapper__layout">    
        <figure class="modal-wrapper__fig">
            <img class="modal-wrapper__fig__img" src="${article[0].cover}">
            <figcaption class="modal-wrapper__fig__caption">${article[0].title}</figcaption>
        </figure>
        <div class="modal-wrapper__info">
            <h2 class="modal-wrapper__info__h">${article[0].title}</h2>
            <div class="modal-wrapper__info__div-price">
                <h3 class="modal-wrapper__info__div-price__title">Prix :</h3>
                <p class="modal-wrapper__info__div-price__price">${article[0].price}</p>
            </div>
            <div class="modal-wrapper__info__details">
                <h3 class="modal-wrapper__info__details__title">Détails :</h3>    
                <p class="modal-wrapper__info__details__p">${article[0].description}</p>
            </div>
        </div>
    </div>
    `;
    document.querySelector(".modal-wrapper__header__img")
    .addEventListener("click", (closeModal));
}

displayGallery();
