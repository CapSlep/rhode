
const products = {
    pink:
    {
        name: 'piggy + shortcake',
        images: [
            './img/slider/pink/pink_1.webp',
            './img/slider/pink/pink_2.webp',
            './img/slider/pink/pink_3.webp',
            './img/slider/pink/pink_4.webp',
        ]
    },
    peach:
    {
        name: 'freckle + peach pit',
        images: [
            './img/slider/peach/peach_1.webp',
            './img/slider/peach/peach_2.webp',
            './img/slider/peach/peach_3.webp',
            './img/slider/peach/peach_4.webp',
        ],
    },
    coral:
    {
        name: 'spicy marg + guava spritz',
        images: [
            './img/slider/coral/coral_1.webp',
            './img/slider/coral/coral_2.webp',
            './img/slider/coral/coral_3.webp',
            './img/slider/coral/coral_4.webp',
        ],
    },
    mauve:
    {
        name: 'sleepy girl + salty tan',
        images: [
            './img/slider/mauve/mauve_1.webp',
            './img/slider/mauve/mauve_2.webp',
            './img/slider/mauve/mauve_3.webp',
            './img/slider/mauve/mauve_4.webp',
        ],
    },
};

let chosenProduct = products.pink;

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: 'true',
        renderBullet: function (index, className) {
            // Replace these with your own image URLs
            var images = chosenProduct.images;

            return '<span class="' + className + '"><img src="' + images[index] + '" alt="Slide ' + (index + 1) + '"></span>';
        },
    },
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

function updateSlider() {
    const images = document.querySelectorAll('.swiper-slide img');

    // Loop through each image and change the src attribute
    images.forEach((img, index) => {
        // Example: Modify the src attribute, here appending '_new' before the file extension
        const newSrc = chosenProduct.images[index]; // Example of modifying the src
        img.setAttribute('src', newSrc);
    });

}

function updateName() {
    const selectedName = document.getElementById('selectedName');
    selectedName.innerText = chosenProduct.name;
}

function bindSwitchers() {

    // Find elements with specific data-product-title values
    const elements = document.querySelectorAll('[data-product-title="pink"], [data-product-title="peach"], [data-product-title="coral"], [data-product-title="mauve"]');

    const updateSwitchers = (selectedAttribute) => {
        elements.forEach(element => {
            element.removeAttribute('data-selected');
            if (selectedAttribute == element.getAttribute('data-product-title'))
                element.setAttribute('data-selected', 'true');
        });
    };

    const clickHandler = (event, selectedAttribute) => {
        event.preventDefault();
        updateSlider();
        updateName();
        // Re-render the pagination bullets with the new images
        swiper.pagination.render();
        swiper.pagination.update();
        updateSwitchers(selectedAttribute);
    };

    // Loop through the found elements and do something with them
    elements.forEach(element => {
        elementAttribute = element.getAttribute('data-product-title');
        // console.log(element.getAttribute('data-product-title')); // Example action
        switch (elementAttribute) {
            case 'pink':
                element.addEventListener('click', (e) => {
                    chosenProduct = products.pink;
                    clickHandler(e, 'pink');
                });
                break;
            case 'peach':
                element.addEventListener('click', (e) => {
                    chosenProduct = products.peach;
                    clickHandler(e, 'peach');
                });
                break;
            case 'coral':
                element.addEventListener('click', (e) => {
                    chosenProduct = products.coral;
                    clickHandler(e, 'coral');
                });
                break;
            case 'mauve':
                element.addEventListener('click', (e) => {
                    chosenProduct = products.mauve;
                    clickHandler(e, 'mauve');
                });
                break;

            default:
                console.error("SOMETHING WENT WRONG!");
                break;
        }
    });
    updateSlider();
    updateName();
}
bindSwitchers();


const colorExpandButton = document.getElementById("colorExpand");
const colorSwitchPopup = document.getElementById('colorPopup');

colorExpandButton.addEventListener('click', (e) => {
    colorSwitchPopup.classList.toggle('product__switches-popup-active');
});

const buyButton = document.getElementById('buyButton');
buyButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'https://www.google.com';
});
