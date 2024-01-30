const paginations = Array.from(document.querySelectorAll('.pagination'))
const swiperItems = document.querySelectorAll('.swiper__item')


//carousel in second section 'about'

paginations.forEach((elem) => {
    elem.addEventListener('click', () => {
        let swiperItem = document.querySelector('.swiper__item');
        let gaps = swiper.offsetWidth - swiperItems.length * swiperItem.offsetWidth;
        let gap = gaps / (swiperItems.length - 1);
        if (elem.id == 'pagination1') {
            pagination1.classList.add('checked')
            pagination2.classList.remove('checked')
            pagination3.classList.remove('checked')
            pagination4.classList.remove('checked')
            pagination5.classList.remove('checked')
            swiper.style.left = 0 + 'px';
        } else if (elem.id == 'pagination2') {
            let right = swiper.offsetWidth - swiperItem.offsetWidth * 4 - gap * 3;
            pagination2.classList.add('checked')
            pagination1.classList.remove('checked')
            pagination3.classList.remove('checked')
            pagination4.classList.remove('checked')
            pagination5.classList.remove('checked')
            swiper.style.left = '-' + right + 'px';
        } else if (elem.id == 'pagination3') {
            let right = swiper.offsetWidth - swiperItem.offsetWidth * 3 - gap * 2;
            pagination3.classList.add('checked')
            pagination2.classList.remove('checked')
            pagination1.classList.remove('checked')
            pagination4.classList.remove('checked')
            pagination5.classList.remove('checked')
            swiper.style.left = '-' + right + 'px';
        } else if (elem.id == 'pagination4') {
            let right = swiper.offsetWidth - swiperItem.offsetWidth * 2 - gap;
            pagination4.classList.add('checked')
            pagination2.classList.remove('checked')
            pagination3.classList.remove('checked')
            pagination1.classList.remove('checked')
            pagination5.classList.remove('checked')
            swiper.style.left = '-' + right + 'px';
        } else if (elem.id == 'pagination5') {
            let right = swiper.offsetWidth - swiperItem.offsetWidth;
            pagination5.classList.add('checked')
            pagination1.classList.remove('checked')
            pagination2.classList.remove('checked')
            pagination3.classList.remove('checked')
            pagination4.classList.remove('checked')
            swiper.style.left = '-' + right + 'px';
        }
    })
})

//remove scroll on submit buttons
const submitBtns = document.querySelectorAll('.modal__submitBtn')

for(let i = 0; i< submitBtns; i++) {
    submitBtns[i].addEventListener('click', function (event) {
       event.preventDefault();
    })
}

//paginations: switchers in 'favourites' section

let radiobtns = document.querySelectorAll('*[data-radiobutton]');

for (let i = 0; i < radiobtns.length; i++) {
    radiobtns[i].addEventListener('click', function () {
        let name = radiobtns[i].getAttribute('data-radiobutton')
        let items = document.querySelectorAll("[data-gallery-item='" + name + "']");
        let books = document.querySelectorAll('.fav-book');

        for (let i = 0; i < items.length; i++) {
            items[i].style.display = 'block'
        }
        for (let i = 0; i < books.length; i++) {
            if (books[i].getAttribute('data-gallery-item') != name)
                books[i].style.display = 'none'
        }
    })
}
//registration
const registrForm = document.querySelector('.modal-register-form');
let formData = {};


registrForm.addEventListener('input', function (event) {
    event.preventDefault();
    formData[event.target.name] = event.target.value;
    localStorage.setItem('user', JSON.stringify(formData))
})

registrForm.addEventListener('submit', function (event) {
    event.preventDefault();
    user = JSON.parse(localStorage.getItem('user'))

    const profileIcon = document.querySelector('.profileIcon')
    const modalProfileIcon = document.querySelector('.modal-profileIcon')
    const userName = document.querySelector('.user-name')
    const dropMenuAuthorized = document.querySelector('.authorized')

    const membershipHeading = document.querySelector('.membership__h3');
    const placeholderName = document.querySelector('.placeholderName');
    const placeholderCardNumber =document.querySelector('.placeholderCardNumber')
    const membershipInfo = document.querySelector('.membership__p');

        dropMenu.style.display = 'none'
        dropMenuAuthorized.style.display = 'block'
        navbarIcon.style.display = 'none'
        profileIcon.style.display = 'block'
        profileIcon.innerHTML = `${user.name.split('')[0]}${user.lastName.split('')[0]}`;
        modalProfileIcon.innerHTML = `${user.name.split('')[0]}${user.lastName.split('')[0]}</p>`;
        userName.innerHTML =`<p>${user.name} ${user.lastName}</p>`

        profileIcon.addEventListener('click', () => {
            dropMenuAuthorized.classList.toggle('visible');
        });

        document.querySelector('.membership-profile__btn').style.display = 'block';
        document.querySelector('.membership-authorization__btn').style.display = 'none';
        document.querySelector('.membership-register__btn').style.display = 'none';
        membershipHeading.textContent = 'Visit your profile';
        membershipInfo.textContent = 'With a digital library card you get free access to the Library’s wide array of digital resources including e-books, databases, educational resources, and more.'
        placeholderName.removeAttribute('placeholder')
        placeholderName.setAttribute('placeholder', `${user.name} ${user.lastName}`)
        placeholderCardNumber.removeAttribute('placeholder');
        placeholderCardNumber.setAttribute('placeholder', 'F00234030')
        placeholderCardNumber.style.color = '#BB945F'
        document.querySelector('.membership-card-inner__btn').style.display = 'none';
        document.querySelector('.membership-status').style.display = 'flex';  

          document.querySelector("[data-modal-window=modalRegister]").style.display = 'none'
    document.body.style.overflow = ''
})

const logInForm = document.querySelector('.modal-log-form');

//authorisation
logInForm.addEventListener('submit', function (event) {
    event.preventDefault()
    user = JSON.parse(localStorage.getItem('user'))

    const email = logInForm.elements.email.value;
    const password = logInForm.elements.password.value;

    const savedEmail = user.email;
    const savedPassword = user.password;

    const profileIcon = document.querySelector('.profileIcon')
    const modalProfileIcon = document.querySelector('.modal-profileIcon')
    const userName = document.querySelector('.user-name')
    const dropMenuAuthorized = document.querySelector('.authorized')

    const membershipHeading = document.querySelector('.membership__h3');
    const placeholderName = document.querySelector('.placeholderName');
    const placeholderCardNumber =document.querySelector('.placeholderCardNumber')
    const membershipInfo = document.querySelector('.membership__p');

    if (email === savedEmail && password === savedPassword) {
        dropMenu.style.display = 'none'
        dropMenuAuthorized.style.display = 'block'
        navbarIcon.style.display = 'none'
        profileIcon.style.display = 'block'
        profileIcon.innerHTML = `${user.name.split('')[0]}${user.lastName.split('')[0]}`;
        modalProfileIcon.innerHTML = `<p>${user.name.split('')[0]}${user.lastName.split('')[0]}</p>`;
        userName.innerHTML =`<p>${user.name} ${user.lastName}</p>`
        profileIcon.addEventListener('click', () => {
            dropMenuAuthorized.classList.toggle('visible');
        });
        document.querySelector('.membership-profile__btn').style.display = 'block';
        document.querySelector('.membership-authorization__btn').style.display = 'none';
        document.querySelector('.membership-register__btn').style.display = 'none';
        membershipHeading.textContent = 'Visit your profile';
        membershipInfo.textContent = 'With a digital library card you get free access to the Library’s wide array of digital resources including e-books, databases, educational resources, and more.'
        placeholderName.removeAttribute('placeholder')
        placeholderName.setAttribute('placeholder', `${user.name} ${user.lastName}`)
        placeholderCardNumber.removeAttribute('placeholder');
        placeholderCardNumber.setAttribute('placeholder', 'F00234030')
        placeholderCardNumber.style.color = '#BB945F'
        document.querySelector('.membership-card-inner__btn').style.display = 'none';
        document.querySelector('.membership-status').style.display = 'flex';
    } else {

    }
    document.querySelector("[data-modal-window=modalLog]").style.display = 'none'
    document.body.style.overflow = ''
})
//log Out

document.querySelector('.logOut').addEventListener('click', function () {

    const profileIcon = document.querySelector('.profileIcon')
    const dropMenuAuthorized = document.querySelector('.authorized')

    const membershipHeading = document.querySelector('.membership__h3');
    const placeholderName = document.querySelector('.placeholderName');
    const placeholderCardNumber =document.querySelector('.placeholderCardNumber')
    const membershipInfo = document.querySelector('.membership__p');

    dropMenu.style.display = 'block'
    dropMenuAuthorized.style.display = 'none'
    navbarIcon.style.display = 'block'
    profileIcon.style.display = 'none'
    navbarIcon.addEventListener('click', () => {
        dropMenu.classList.toggle('visible');
    });
    document.querySelector('.membership-profile__btn').style.display = 'none';
    document.querySelector('.membership-authorization__btn').style.display = 'block';
    document.querySelector('.membership-register__btn').style.display = 'block';
    membershipHeading.textContent = 'Get a reader card';
    membershipInfo.textContent = 'You will be able to see a reader card after logging into account or you can reister a new account'
    placeholderName.removeAttribute('placeholder')
    placeholderName.setAttribute('placeholder', `Reader's name`)
    placeholderCardNumber.removeAttribute('placeholder');
    placeholderCardNumber.setAttribute('placeholder', 'Card number')
    //placeholderCardNumber.style.color = '#BB945F'
    document.querySelector('.membership-card-inner__btn').style.display = 'block';
    document.querySelector('.membership-status').style.display = 'none';
})

//navbar: dropdown profile menu
const dropMenu = document.querySelector('.drop-menu');

navbarIcon.addEventListener('click', () => {
    dropMenu.classList.toggle('visible');
})

const mask = document.querySelector('.mask')
//const wraps = document.querySelectorAll('.wrap')

//modals: logIn  Register  buyCards

let modalBtns = document.querySelectorAll("*[data-modal-btn]");

for (let i = 0; i < modalBtns.length; i++) {
    modalBtns[i].addEventListener('click', function () {
        let name = modalBtns[i].getAttribute('data-modal-btn');
        let modal = document.querySelector("[data-modal-window='" + name + "']");
        if (modalBtns[i].getAttribute('id') === 'modalLogSpan') {
            document.querySelector("[data-modal-window=modalLog]").style.display = 'none'
        } else if (modalBtns[i].getAttribute('id') === 'modalRegisterSpan') {
            document.querySelector("[data-modal-window=modalRegister]").style.display = 'none'
        } else if (modalBtns[i].getAttribute('id') === 'logIn' || modalBtns[i].getAttribute('id') === 'register') {
            dropMenu.classList.remove('visible')
        }
        document.body.style.overflow = 'hidden'
        modal.style.display = 'block';
        let close = modal.querySelector('.modal-close')
        close.addEventListener('click', function () {
            modal.style.display = 'none'
            document.body.style.overflow = ''
        })
    })
}

window.onclick = function (event) {
    if (event.target.hasAttribute('data-modal-window')) {
        let modals = document.querySelectorAll('*[data-modal-window]')
        for (let i = 0; i < modals.length; i++) {
            modals[i].style.display = 'none'
        }
    }
}
//addaptive menu on tablets: burger btns

burger.addEventListener('click', () => {
    const menu = document.querySelector('.navbar-menu-wrapper')
    menu.style.top = 65 + 'px'
    burger.style.display = 'none'
    burgerClose.style.display = 'block'
})

burgerClose.addEventListener('click', () => {
    const menu = document.querySelector('.navbar-menu-wrapper')
    menu.style.top = -1000 + 'px'
    burger.style.display = 'block'
    burgerClose.style.display = 'none'
})


