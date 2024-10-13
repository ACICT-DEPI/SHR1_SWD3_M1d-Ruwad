
/*=============== SHOW MENU ===============*/

const navMenu=document.getElementById("nav-menu"),
        navToggle=document.getElementById("nav-toggle"),
        navClose=document.getElementById("nav-close")

/*===== MENU SHOW =====*/
/* Validate if constant exists */

if(navToggle){
    navToggle.addEventListener("click",()=>{
        navMenu.classList.add("show-menu")
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

if(navClose){
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove("show-menu")
    })
}

/*=============== SHOW CART ===============*/
const cart=document.getElementById("cart"),
        cartShop=document.getElementById("cart-shop"),
        cartClose=document.getElementById("cart-close")

/*===== CART SHOW =====*/
/* Validate if constant exists */
if(cartShop){
    cartShop.addEventListener("click",()=>{
        cart.classList.add("show-cart")
    })
/*===== CART HIDDEN =====*/
/* Validate if constant exists */
    cartClose.addEventListener("click",()=>{
        cart.classList.remove("show-cart")
    })
}


/*=============== SHOW LOGIN ===============*/
const login=document.getElementById("login"),
        loginButton=document.getElementById("login-toggle"),
        loginClose=document.getElementById("login-close")

/*===== LOGIN SHOW =====*/
/* Validate if constant exists */
if(loginButton){
    loginButton.addEventListener("click",()=>{
        login.classList.add("show-login")
    })
/*===== LOGIN HIDDEN =====*/
/* Validate if constant exists */

    loginClose.addEventListener("click",()=>{
        login.classList.remove("show-login")
    })
}


/*=============== HOME SWIPER ===============*/
// var homeSwiper = new Swiper(".home-swiper", {
//     spaceBetween: 30,
//     loop: true,
    
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
// });

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById("header");
    //  When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add("scroll-header"); else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);
/*=============== NEW SWIPER ===============*/
// var newSwiper = new Swiper(".new-swiper", {
//     spaceBetween: 16,
//     centeredSlides: true,
//     slidesPerView: "auto",
//     loop: true,
// });


/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp() {
    const scrolUp=document.getElementById("scroll-up");
    if(this.scrollY >= 350){ scrolUp.classList.add("show-scroll");}
else{
    scrolUp.classList.remove("show-scroll")
}
}
window.addEventListener("scroll",scrollUp)
/*=============== LIGHT BOX ===============*/


/*=============== QUESTIONS ACCORDION ===============*/

const accordionItem = document.querySelectorAll(".questions__item");

accordionItem.forEach((item) => {
    const accordionHeader = item.querySelector(".questions__header");

    accordionHeader.addEventListener("click", () => {
        const openItem = document.querySelector(".accordion-open");

        toggleItem(item);

        if(openItem && openItem !== item) {
            toggleItem(openItem);
        }
    })
});

const toggleItem = (item) => {
    const accordionContent = item.querySelector(".questions__content");

    if(item.classList.contains("accordion-open")) {
        accordionContent.removeAttribute("style");
        item.classList.remove("accordion-open");
    }
    else {
        accordionContent.style.height = accordionContent.scrollHeight + "px";
        item.classList.add("accordion-open");
    }
}


/*=============== STYLE SWITCHER ===============*/

/*=============== register handel ===============*/
const users = JSON.parse(localStorage.getItem('users')) || [];

// Function to generate a unique user ID
function generateUniqueId() {
    return 'user_' + Math.random().toString(36).substr(2, 9); // Generates a random ID
}

// Registration logic
document.getElementById('register-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const regUsername = document.getElementById('reg-username').value;
    const regPassword = document.getElementById('reg-password').value;
    const regPhone = document.getElementById('reg-phone').value;
    const regAddress = document.getElementById('reg-address').value;
    const errorMessageDiv = document.getElementById('error-message');

    // Check if email is already in use
    const existingUser = users.find(u => u.username === regUsername);
    if (existingUser) {
        errorMessageDiv.textContent = 'Email is already in use. Please use a different email.';
        return;
    }

    // Validate password
    if (regPassword.length < 6) {
        errorMessageDiv.textContent = 'Password must be at least 6 characters long.';
        return;
    }

    // Create a new user object with unique ID, phone, and address
    const newUser = {
        id: generateUniqueId(),
        username: regUsername,
        password: regPassword,
        phone: regPhone,
        address: regAddress
    };

    // Save the new user in the users array and localStorage
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    window.location.href = 'index.html'; // Redirect to login
    login.classList.add("show-login")
});

/*=============== login handel ===============*/
// Login logic
let isAuthanticated;
const loginFrom=document.getElementById('login-form')
loginFrom.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessageDiv = document.getElementById('error-message');

    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        
        window.location.href = 'index.html'; // Redirect to home
        isAuthanticated=true
        login.classList.remove("show-login")
    } else {
        errorMessageDiv.textContent = 'Invalid email or password!';
    }
});
