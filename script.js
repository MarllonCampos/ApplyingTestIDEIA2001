mobileItems = document.querySelector('.mobile .mobile-items')

headerMobile = document.querySelector('header.mobile')

var styleElem = document.head.appendChild(document.createElement("style"));



showMenu = document.querySelector('.mobile .mobile-menu .dropdown-menu label').addEventListener('click', function() {

    if (mobileItems.style.display == "initial") {
        mobileItems.style.display = "none"
        headerMobile.style.height = '22.9vh'
        styleElem.innerHTML = 'main:before {top:170px;}'
    } else {
        mobileItems.style.display = "initial"
        headerMobile.style.height = '53vh'
        styleElem.innerHTML = 'main:before {top:380px;}'
    }

    console.log(headerMobile)
})