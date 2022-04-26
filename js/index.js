let up = document.querySelector('.up')
let home = document.querySelector('.home')
let AboutUs = document.querySelector('.AboutUs')
let ourmenue = document.querySelector('.Our-Menue')
let reserve = document.querySelector('.Reserve')
let contact = document.querySelector('.contact')
let header = document.querySelector('header')
window.onscroll = function () {
    console.log(this.scrollY)
    if (this.scrollY >= 100) {
        up.classList.add('show')
        header.classList.add('top')
    } else {
        up.classList.remove('show')
        header.classList.remove('top')
    }
    if (this.scrollY >= 0) {
        home.classList.add('active')
    };

    if (this.scrollY >= 831) {
        home.classList.remove('active')
        AboutUs.classList.add('active')
    }else {
        AboutUs.classList.remove('active')
    };
    if (this.scrollY >= 1365) {
        AboutUs.classList.remove('active')
        ourmenue.classList.add('active')
    }else {
        ourmenue.classList.remove('active')
    };
    if (this.scrollY >= 2065) {
        ourmenue.classList.remove('active')
        reserve.classList.add('active')
    }else {
        reserve.classList.remove('active')
    };
    
    if (this.scrollY >= 2830) {
        reserve.classList.remove('active')
        contact.classList.add('active')
    } else {
        contact.classList.remove('active')
    }
}
up.onclick = function () {
    window.scrollTo ({
        top: 0
    })
}
let buttom = document.querySelector('.toggle-menu')
let list = document.querySelector('ul')
buttom.onclick = function () {
    this.classList.toggle('active')
    list.classList.toggle('open')
}
let bullets = document.querySelectorAll('.bullets li')
bullets.forEach(function(ele) {
    ele.onclick = function () {
        bullets.forEach(function(ele) {
            ele.classList.remove('active')
        })
        this.classList.toggle('active')
    }
})
let load = document.querySelector('.Loading')
window.addEventListener("load", function () {
    load.style.display = "none"
})