const headerNoti = document.querySelector('.header-notifi');
const headerNotiMore = document.querySelector('#header-noti');
headerNoti.addEventListener('click', (e) => {
    headerNotiMore.classList.toggle('show');
})
window.addEventListener('click', function(e) {
    // if(!e.target.matches('#header-noti') && !e.target.matches('.header-notifi i')) {
    //     headerNotiMore.classList.remove('show');
    // }
    if(!headerNotiMore.contains(e.target) && !e.target.matches('.header-notifi i')) {
        headerNotiMore.classList.remove('show');
    }
})
const headerSign = document.querySelector('.header-signs');
const headerSignMore = document.querySelector('.header-sign');
headerSign.addEventListener('click', (e) => {
    headerSignMore.classList.toggle('show');
})
window.addEventListener('click', function(e) {
    if(!e.target.matches('.header-sign') && !e.target.matches('.header-signs i')) {
        headerSignMore.classList.remove('show');
    }
})

// login
const login = document.querySelector('#login');
const loginShow = document.querySelector('.login');
const loginWrap = document.querySelector('.login-wrap')
const closeLogin = document.querySelector('.login-close');
login.addEventListener('click', (e) => {
    loginShow.classList.add('show');
})
closeLogin.addEventListener('click', () => {
    loginShow.classList.remove('show');
})
window.addEventListener('click', function(e) {
    if(!loginWrap.contains(e.target) && !e.target.matches('#login')) {
        loginShow.classList.remove('show');
    }
    // console.log(loginWrap.contains(e.target) && e.target.matches('#login'));
})
// show password
const input = document.querySelector('.input-password input');
const showPassword = document.querySelector('.input-password i');
showPassword.addEventListener('click', function() {
    if(input.type == 'password') {
        input.type = 'text';
        showPassword.classList.remove('fa-eye-slash');
        showPassword.classList.add('fa-eye');
    }
    else {
        input.type = 'password';
        showPassword.classList.add('fa-eye-slash');
        showPassword.classList.remove('fa-eye');
    }
})

// menu
const headerMenu = document.querySelector('.header-right-menu div');
const headerMenuMore = document.querySelector('.header-menu-more');
const headerMenuClose = document.querySelector('.header-menu-close i');
headerMenu.addEventListener('click', (e) => {
    headerMenuMore.classList.add('show');
})
headerMenuClose.addEventListener('click', () => {
    // console.log(1);
    headerMenuMore.classList.remove('show');
})
window.addEventListener('click', function(e) {
    if(!headerMenuMore.contains(e.target) && !e.target.matches('.header-right-menu div i')) {
        headerMenuMore.classList.remove('show');
    }
})

// location
const locations = document.querySelector('.header-center-location');
const inputLocation = document.querySelector('.header-center-location input');
const lineLocation = document.querySelector('.header-center-line');
const moreLocation = document.querySelector('.header-location-more');
const namesLocation = document.querySelectorAll('.header-location-item');
const namePlace = document.querySelectorAll('.header-location-item p');
inputLocation.addEventListener('click', (e) => {
    lineLocation.classList.add('show');
    moreLocation.classList.add('show');
})
inputLocation.addEventListener('input', (e) => {
    let filter = e.target.value;
    filter.toLowerCase();
    [...namePlace].forEach(item => {
        let text = item.textContent;
        let index = text.toLowerCase().indexOf(filter);
        if(index >= 0 && text.toLowerCase().startsWith(filter.charAt(0))) {
            // item.textContent = `${text.substring(0, index)}<span class="primary">${text.substring(index, index + filter.length)}</span>${text.substring(index + filter.length)}`;
            item.innerHTML = `${text.substring(
                0,
                index
              )}<span style="color: red;">${text.substring(
                index,
                index + filter.length
              )}</span>${text.substring(index + filter.length)}`;
        }
    })
})
namesLocation.forEach(function(item) {
    item.addEventListener('click', (e) => {
        // console.log(item.innerText);
        inputLocation.value = item.innerText;
        lineLocation.classList.remove('show');
        moreLocation.classList.remove('show');
    })
})
window.addEventListener('click', (e) => {
    if(!locations.contains(e.target) && !e.target.matches('.header-center-location input')) {
        lineLocation.classList.remove('show');
        moreLocation.classList.remove('show');
    }

})
// Header-center-number
const numberPlus = document.querySelectorAll('.header-number-plus');
const numberItem = document.querySelectorAll('.header-number-item')
const numberMinus = document.querySelectorAll('.header-number-minus');
const numberSpan = document.querySelectorAll('.header-number-content > span');
let room = document.querySelector('.room');
let parents = document.querySelector('.parents');
let childrents = document.querySelector('.childrents');
const numberH3 = document.querySelector('.header-center-number > h3');
const numberMore = document.querySelector('.header-number-more');
numberH3.addEventListener('click', function() {
    numberMore.classList.add('show');
})
window.addEventListener('click', function(e) {
    if(!numberMore.contains(e.target) && !e.target.matches('.header-center-number > h3')) {
        numberMore.classList.remove('show');
    }
})
numberItem.forEach((item, index) => {
    let number = parseInt(numberSpan[index].textContent);
    console.log(number);
    numberPlus[index].addEventListener('click', function() {
        number += 1;
        // console.log(number);
        numberSpan[index].textContent = number;
        if(index === 0) {
            room.textContent = number
        }
        if(index === 1) {
            parents.textContent = number;
        }
        if(index === 2) {
            childrents.textContent = number;
        }

    })
    numberMinus[index].addEventListener('click', function() {
        number -= 1;
        // console.log(number);
        // if(number < 0) {
        //     return
        // }
        numberSpan[index].textContent = number;
        if(index === 0) {
            room.textContent = number
        }
        if(index === 1) {
            parents.textContent = number;
        }
        if(index === 2) {
            childrents.textContent = number;
        }
    })
})
// Youlike
const heart = document.querySelectorAll('.youlike-item-icon');
heart.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        // console.log(e.currentTarget);
        const heartIcon = e.currentTarget.querySelector('i');
        // console.log(heartIcon);
        
        heartIcon.classList.toggle('fas');
        heartIcon.style.color = '#ff3366';
    })
})
// hotel
const hotelButton = document.querySelector('.hotel-button');
const hotelItem = document.querySelectorAll('.hotel-body .youlike-item');
hotelButton.addEventListener('click', function(e) {
    if(e.target.classList.contains('btn')) {
        hotelButton.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
        const btnValue = e.target.getAttribute('data-filter');
        console.log(btnValue);
        hotelItem.forEach((item) => {
            if(item.classList.contains(btnValue)) {
                item.classList.add('active');
            }
            else {
                item.classList.remove('active');
            }
        })
    }
})















// Chat
const chatHeader = document.querySelector('.chat-hearder');
const chatContent = document.querySelector('.chat-content');
const chatHeaderIcon = document.querySelector('.chat-hearder i');
chatHeader.addEventListener('click', function() {
    chatContent.classList.toggle('show');
    chatHeaderIcon.classList.toggle('fa-plus');
    chatHeaderIcon.classList.toggle('fa-minus');
})
window.addEventListener('click', function() {
    
})