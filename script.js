mobileItems = document.querySelector('.mobile .mobile-items')

main = document.querySelector('main:before')

showMenu = document.querySelector('.mobile .mobile-menu .dropdown-menu label').addEventListener('click', function() {
    mobileItems.style.display = mobileItems.style.display == "initial" ? "none" : "initial"
    console.log(main)

})