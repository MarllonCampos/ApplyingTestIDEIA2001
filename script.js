var mobileItems = document.querySelector('.mobile .mobile-items') // Pega os elementos que contem o menu do mobile

var headerMobile = document.querySelector('header.mobile') //Captura os elementos do header no mobile que contem o logo e o menu modificado

var popUp = document.querySelector('section#pop-up')

var popTitle = popUp.querySelector('.container .header .title')

var popContent = popUp.querySelector('.container .content')


var popClose = popUp.querySelector('.container .header .close-X').addEventListener('click', togglePop)


function togglePop() {
    popUp.classList.toggle('hiding')

}






var styleElem = document.head.appendChild(document.createElement("style"));

showMenu = document.querySelector('.mobile .mobile-menu .dropdown-menu label').addEventListener('click', dropdownMenu)

function dropdownMenu() {
    if (mobileItems.style.display == "initial") {
        mobileItems.style.display = "none"
        headerMobile.style.height = '22.9vh'
        styleElem.innerHTML = 'main:before {top:170px;}'
    } else {
        mobileItems.style.display = "initial"
        headerMobile.style.height = '53vh'
        styleElem.innerHTML = 'main:before {top:380px;}'
    }
}

mobileMenu = document.querySelectorAll('.mobile-items')

for (const subItemsMobile of mobileMenu[0].children) {
    // console.log(subIten.innerText);
    subItemsMobile.addEventListener('click', function(e) {
        togglePop()
        popTitle.innerText = `${e.target.innerText}`

        popContent.innerHTML = `Parabéns você entrou em ${e.target.innerText}`
    })

}

Menu = document.querySelectorAll('nav.itens-bar')

for (const subIten of Menu[0].children) {
    // console.log(subIten.innerText);
    subIten.addEventListener('click', function(e) {
        togglePop()
        popTitle.innerText = `${e.target.innerText}`

        popContent.innerHTML = `Parabéns você entrou em ${e.target.innerText}`
    })

}



Icones = document.querySelectorAll('main .select-items a div.cards')
console.log(Icones)
for (const subIten of Icones) {
    // console.log(subIten.innerText);
    subIten.addEventListener('click', function(e) {
        togglePop()
        popTitle.innerText = `${e.target.innerText}`
        console.log = e.target


        popContent.innerHTML = `Parabéns você entrou em ${e.target.innerText}`
    })

}