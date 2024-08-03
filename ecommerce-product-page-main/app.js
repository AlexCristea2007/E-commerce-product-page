document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");

    var menu_open = document.getElementById("menu_open");
    var menu_close = document.getElementById("menu_close");

    var menu = document.getElementById("menu_dropdown");
    var mobile_gallery = document.getElementById("mobile_image_gallery");
    var gallery_children = mobile_gallery.querySelectorAll('*');
    var shopping_dropdown = document.querySelector('.shopping_dropdown');

    menu_open.addEventListener('click', function() {
        console.log("Menu open clicked");
        menu.style.display = 'inline-block';
        shopping_dropdown.style.display = 'block';
        gallery_children.forEach(function(child) {
            child.style.zIndex = '-1';
        });
    });

    menu_close.addEventListener('click', function() {
        console.log("Menu close clicked");
        menu.style.display = 'none';
        shopping_dropdown.style.display = 'none';
        gallery_children.forEach(function(child) {
            child.style.zIndex = '1';
        });
    });
});


/* Supplies number */

function increment() {
    let number = document.getElementById("amount_counter");
    number.innerText = parseInt(number.innerText, 10) + 1;
}
function decrement() {
    let number = document.getElementById("amount_counter");
    let currentValue = parseInt(number.innerText, 10);
    if (currentValue > 0) {
        number.innerText = currentValue - 1;
    }
}

/* Cart */

var mobile_gallery = document.getElementById("mobile_image_gallery");

function showCart() {
    let cart = document.querySelector(".shopping_dropdown");
    if (cart.style.display === "none" || cart.style.display === "") {
        cart.style.display = "inline-block";
        mobile_gallery.style.zIndex = '-1';
    } else {
        cart.style.display = "none";
        mobile_gallery.style.zIndex = '1';
    }
}

function addProduct() {
    const number = document.getElementById("amount_counter").innerText;

    if (number >= 1) {
        let cart = document.getElementById("cart_product");
        cart.innerHTML = "";
        cart.style.paddingBlock = '20px';

        // Top container
        let top_div = document.createElement('div');
        top_div.setAttribute('id', 'c_top');

        // Image container
        let img_div = document.createElement('div');
        let img = document.createElement('img');
        img.setAttribute('src', './images/image-product-1-thumbnail.jpg');
        img.setAttribute('id', 'c_image');
        img_div.appendChild(img);

        // Text container
        let text_div = document.createElement('div');
        let text = document.createElement('p');
        text.setAttribute('id', 'c_desc');
        text.innerText = "Fall Limited Edition Sneakers $125.00 x ";

        let span = document.createElement('span');
        span.setAttribute('id', 'c_counter');
        span.innerText = number;

        let price = document.createElement('span');
        price.setAttribute('id', 'c_price');
        price.innerText = " $" + (125 * number).toFixed(2);

        text.appendChild(span);
        text.appendChild(price);
        text_div.appendChild(text);

        // Trash button
        let trash = document.createElement('button');
        let trash_img = document.createElement('img');
        trash_img.setAttribute('src', './images/icon-delete.svg');
        trash_img.setAttribute('alt', 'trash');
        trash.appendChild(trash_img);
        trash.setAttribute('id', 'c_trash');
        trash.setAttribute('onclick', 'removeItem()');

        // Append top
        top_div.appendChild(img_div);
        top_div.appendChild(text_div);
        top_div.appendChild(trash);

        // Bottom container
        let bottom_div = document.createElement('div');
        bottom_div.setAttribute('id', 'c_bottom');

        let button = document.createElement('button');
        button.setAttribute('id', 'c_button');
        button.innerText = "Checkout";
        
        // Apend bottom
        bottom_div.appendChild(button);

        cart.appendChild(top_div);
        cart.appendChild(bottom_div);
    }
}

function removeItem() {
    let cart = document.getElementById("cart_product");
    let span = document.getElementById('c_counter');
    let price = document.getElementById('c_price');

    let quantity = parseInt(span.innerText, 10);
    let unitPrice = 125.00; 

    if (quantity >= 2) {
        quantity -= 1;
        span.innerText = quantity;
        price.innerText = " $" + (unitPrice * quantity).toFixed(2);
    } else {
        cart.innerHTML = "Your cart is empty.";
        cart.style.paddingBlock = '80px';
    }
}

/* Image gallery */

var hero_btn = document.getElementById("hero_image_btn");

var hero_img1 = document.getElementById("hero_image1");
var hero_img2 = document.getElementById("hero_image2");
var hero_img3 = document.getElementById("hero_image3");
var hero_img4 = document.getElementById("hero_image4");

var gallery_btn1 = document.querySelector(".gallery_btn1");
var gallery_btn2 = document.querySelector(".gallery_btn2");
var gallery_btn3 = document.querySelector(".gallery_btn3");
var gallery_btn4 = document.querySelector(".gallery_btn4");

var small_img1 = document.getElementById("small_img1");
var small_img2 = document.getElementById("small_img2");
var small_img3 = document.getElementById("small_img3");
var small_img4 = document.getElementById("small_img4");

function selectImage1() {
    hero_img1.style.display = 'inline-block';
    hero_img2.style.display = 'none';
    hero_img3.style.display = 'none';
    hero_img4.style.display = 'none';

    small_img1.style.opacity = '.35';
    gallery_btn1.style.borderColor = 'hsl(26, 100%, 55%)';
    //
    small_img2.style.opacity = '1';
    gallery_btn2.style.borderColor = 'transparent';
    small_img3.style.opacity = '1';
    gallery_btn3.style.borderColor = 'transparent';
    small_img4.style.opacity = '1';
    gallery_btn4.style.borderColor = 'transparent';
}

function selectImage2() {
    hero_img1.style.display = 'none';
    hero_img2.style.display = 'inline-block';
    hero_img3.style.display = 'none';
    hero_img4.style.display = 'none';

    small_img1.style.opacity = '1';
    gallery_btn1.style.borderColor = 'transparent';
    //
    small_img2.style.opacity = '.35';
    gallery_btn2.style.borderColor = 'hsl(26, 100%, 55%)';
    //
    small_img3.style.opacity = '1';
    gallery_btn3.style.borderColor = 'transparent';
    small_img4.style.opacity = '1';
    gallery_btn4.style.borderColor = 'transparent';
}

function selectImage3() {
    hero_img1.style.display = 'none';
    hero_img2.style.display = 'none';
    hero_img3.style.display = 'inline-block';
    hero_img4.style.display = 'none';

    small_img1.style.opacity = '1';
    gallery_btn1.style.borderColor = 'transparent';
    small_img2.style.opacity = '1';
    gallery_btn2.style.borderColor = 'transparent';
    //
    small_img3.style.opacity = '.35';
    gallery_btn3.style.borderColor = 'hsl(26, 100%, 55%)';
    //
    small_img4.style.opacity = '1';
    gallery_btn4.style.borderColor = 'transparent';
}

function selectImage4() {
    hero_img1.style.display = 'none';
    hero_img2.style.display = 'none';
    hero_img3.style.display = 'none';
    hero_img4.style.display = 'inline-block';

    small_img1.style.opacity = '1';
    gallery_btn1.style.borderColor = 'transparent';
    small_img2.style.opacity = '1';
    gallery_btn2.style.borderColor = 'transparent';
    small_img3.style.opacity = '1';
    gallery_btn3.style.borderColor = 'transparent';
    //
    small_img4.style.opacity = '.35';
    gallery_btn4.style.borderColor = 'hsl(26, 100%, 55%)';
}

function showLB() {
    lightbox.style.display = 'inline-block';
}

gallery_btn1.addEventListener('click', selectImage1);
gallery_btn2.addEventListener('click', selectImage2);
gallery_btn3.addEventListener('click', selectImage3);
gallery_btn4.addEventListener('click', selectImage4);
hero_btn.addEventListener('click', showLB)

/* Lightbox */

var lightbox = document.getElementById("lightbox_section");

var close_btn = document.getElementById("close_btn");

var arrow_left = document.getElementById("arrow_left");
var arrow_right = document.getElementById("arrow_right");

var lightBoxHero_img1 = document.getElementById("LBhero_image1");
var lightBoxHero_img2 = document.getElementById("LBhero_image2");
var lightBoxHero_img3 = document.getElementById("LBhero_image3");
var lightBoxHero_img4 = document.getElementById("LBhero_image4");

lightBoxHero_img1.style.display = 'inline-block';
lightBoxHero_img2.style.display = 'none';
lightBoxHero_img3.style.display = 'none';
lightBoxHero_img4.style.display = 'none';

var lightBoxGallery_btn1 = document.getElementById("LBgallery_btn1");
var lightBoxGallery_btn2 = document.getElementById("LBgallery_btn2");
var lightBoxGallery_btn3 = document.getElementById("LBgallery_btn3");
var lightBoxGallery_btn4 = document.getElementById("LBgallery_btn4");

var number = 1;

function closeLB() {
    lightbox.style.display = 'none';
}

function slideLeft() {
    if (number === 1) {
        number = 4;
    } else {
        number--;
    }

    if (number === 1) {
        lightBoxHero_img1.style.display = 'inline-block';
        lightBoxHero_img2.style.display = 'none';
        lightBoxHero_img3.style.display = 'none';
        lightBoxHero_img4.style.display = 'none';
    } else if (number === 2) {
        lightBoxHero_img1.style.display = 'none';
        lightBoxHero_img2.style.display = 'inline-block';
        lightBoxHero_img3.style.display = 'none';
        lightBoxHero_img4.style.display = 'none';
    } else if (number === 3) {
        lightBoxHero_img1.style.display = 'none';
        lightBoxHero_img2.style.display = 'none';
        lightBoxHero_img3.style.display = 'inline-block';
        lightBoxHero_img4.style.display = 'none';
    } else if (number === 4) {
        lightBoxHero_img1.style.display = 'none';
        lightBoxHero_img2.style.display = 'none';
        lightBoxHero_img3.style.display = 'none';
        lightBoxHero_img4.style.display = 'inline-block';
    }
}

function slideRight() {
    if (number === 4) {
        number = 1;
    } else {
        number++;
    }

    if (number === 1) {
        lightBoxHero_img1.style.display = 'inline-block';
        lightBoxHero_img2.style.display = 'none';
        lightBoxHero_img3.style.display = 'none';
        lightBoxHero_img4.style.display = 'none';
    } else if (number === 2) {
        lightBoxHero_img1.style.display = 'none';
        lightBoxHero_img2.style.display = 'inline-block';
        lightBoxHero_img3.style.display = 'none';
        lightBoxHero_img4.style.display = 'none';
    } else if (number === 3) {
        lightBoxHero_img1.style.display = 'none';
        lightBoxHero_img2.style.display = 'none';
        lightBoxHero_img3.style.display = 'inline-block';
        lightBoxHero_img4.style.display = 'none';
    } else if (number === 4) {
        lightBoxHero_img1.style.display = 'none';
        lightBoxHero_img2.style.display = 'none';
        lightBoxHero_img3.style.display = 'none';
        lightBoxHero_img4.style.display = 'inline-block';
    }
}

function selectLightboxImage1() {
    lightBoxHero_img1.style.display = 'inline-block';
    lightBoxHero_img2.style.display = 'none';
    lightBoxHero_img3.style.display = 'none';
    lightBoxHero_img4.style.display = 'none';

    lightBoxGallery_btn1.style.borderColor = 'hsl(26, 100%, 55%)';
    lightBoxGallery_btn2.style.borderColor = 'transparent';
    lightBoxGallery_btn3.style.borderColor = 'transparent';
    lightBoxGallery_btn4.style.borderColor = 'transparent';
}

function selectLightboxImage2() {
    lightBoxHero_img1.style.display = 'none';
    lightBoxHero_img2.style.display = 'inline-block';
    lightBoxHero_img3.style.display = 'none';
    lightBoxHero_img4.style.display = 'none';

    lightBoxGallery_btn1.style.borderColor = 'transparent';
    lightBoxGallery_btn2.style.borderColor = 'hsl(26, 100%, 55%)';
    lightBoxGallery_btn3.style.borderColor = 'transparent';
    lightBoxGallery_btn4.style.borderColor = 'transparent';
}

function selectLightboxImage3() {
    lightBoxHero_img1.style.display = 'none';
    lightBoxHero_img2.style.display = 'none';
    lightBoxHero_img3.style.display = 'inline-block';
    lightBoxHero_img4.style.display = 'none';

    lightBoxGallery_btn1.style.borderColor = 'transparent';
    lightBoxGallery_btn2.style.borderColor = 'transparent';
    lightBoxGallery_btn3.style.borderColor = 'hsl(26, 100%, 55%)';
    lightBoxGallery_btn4.style.borderColor = 'transparent';
}

function selectLightboxImage4() {
    lightBoxHero_img1.style.display = 'none';
    lightBoxHero_img2.style.display = 'none';
    lightBoxHero_img3.style.display = 'none';
    lightBoxHero_img4.style.display = 'inline-block';

    lightBoxGallery_btn1.style.borderColor = 'transparent';
    lightBoxGallery_btn2.style.borderColor = 'transparent';
    lightBoxGallery_btn3.style.borderColor = 'transparent';
    lightBoxGallery_btn4.style.borderColor = 'hsl(26, 100%, 55%)';
}

close_btn.addEventListener('click', closeLB);
arrow_left.addEventListener('click', slideLeft);
arrow_right.addEventListener('click', slideRight);
lightBoxGallery_btn1.addEventListener('click', selectLightboxImage1);
lightBoxGallery_btn2.addEventListener('click', selectLightboxImage2);
lightBoxGallery_btn3.addEventListener('click', selectLightboxImage3);
lightBoxGallery_btn4.addEventListener('click', selectLightboxImage4);

document.addEventListener('DOMContentLoaded', function() {
    /* Mobile gallery */
    var left_btn = document.getElementById("mobile_left_arrow");
    var right_btn = document.getElementById("mobile_right_arrow");

    var number2 = 1;

    var images = [
        document.getElementById("mobile_img1"),
        document.getElementById("mobile_img2"),
        document.getElementById("mobile_img3"),
        document.getElementById("mobile_img4")
    ];

    function Mslideleft() {
        number2 = (number2 === 1) ? 4 : number2 - 1;
        changeImage();
    }

    function Mslideright() {
        number2 = (number2 === 4) ? 1 : number2 + 1;
        changeImage();
    }

    function changeImage() {
        images.forEach((img, index) => {
            img.style.display = (index === number2 - 1) ? 'inline-block' : 'none';
        });
    }

    left_btn.addEventListener('click', Mslideleft);
    right_btn.addEventListener('click', Mslideright);

    changeImage();
});
