var mobileItems = document.querySelector('.mobile .mobile-items') // Pega os elementos que contem o menu do mobile

var headerMobile = document.querySelector('header.mobile') //Captura os elementos do header no mobile que contem o logo e o menu modificado

var popUp = document.querySelector('section#pop-up') // Captura o elemento de popup 

var popTitle = popUp.querySelector('.container .header .title') // Captura o titulo detro do elemento de popup

var popContent = popUp.querySelector('.container .content') // Captura o conteudo dentro do elemento de popup


var popClose = popUp.querySelector('.container .header .close-X').addEventListener('click', togglePop) // Captura o icone de fechar dentro do popup e adiciona um evento de click


function togglePop() { // Ao clicar no icone de fechar dentro do popup retira OU adiciona a classe hiding para que apareça ou não o popup
    popUp.classList.toggle('hiding')

}


var styleElem = document.head.appendChild(document.createElement("style")) // É utilizado como base para capturar pseudo-elementos

showMenu = document.querySelector('.mobile .mobile-menu .dropdown-menu label').addEventListener('click', dropdownMenu) // Captura o icone de DropDown Menu e adiciona um evento de clique ao mesmo

function dropdownMenu() { // Ao clicar no DropDown menu, é verificado se o display deste menu esta como initial ou none e a cada um ele modifica o tamanho do header, e também a posição do pseudo-elemnto do main::before
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

mobileMenu = document.querySelectorAll('.mobile-items') // Captura o menu do mobile e todos os seus atributos incluindo seus FILHOS (children)

for (const subItemsMobile of mobileMenu[0].children) { // Para cada filho(tag)  
    // console.log(subIten.innerText);
    subItemsMobile.addEventListener('click', function(e) { // Adiciona um ouvidor de evento (click neste caso) e então:
        togglePop() // Habilita o popup
        popTitle.innerText = `${e.target.innerText}` // Modifica o titulo deixando-o com o mesmo nome do "botão" clicado

        popContent.innerHTML = `Parabéns você entrou em ${e.target.innerText}` // Modifica o conteudo deixando-o com a frase escrita e o nome do "botão" clicado
    })

}

Menu = document.querySelectorAll('nav.itens-bar') // Captura o menu do desktop e todos os seus atributos incluindo seus FILHOS (children)
for (const subIten of Menu[0].children) { // Para cada filho(tag)  
    subIten.addEventListener('click', function(e) { // Adiciona um ouvidor de evento (click neste caso) e então:
        togglePop() // Habilita o popup
        popTitle.innerText = `${e.target.innerText}` // Modifica o titulo deixando-o com o mesmo nome do "botão" clicado

        popContent.innerHTML = `Parabéns você entrou em ${e.target.innerText}` // Modifica o conteudo deixando-o com a frase escrita e o nome do "botão" clicado
    })

}



Icones = document.querySelectorAll('main .select-items a div.cards') // Captura o menu do desktop e todos os seus atributos incluindo seus FILHOS (children)
for (const subIten of Icones) { // Para cada filho(tag)  
    subIten.addEventListener('click', function(e) { // Adiciona um ouvidor de evento (click neste caso) e então:
        togglePop() // Habilita o popup
        popTitle.innerText = `${e.target.innerText}` // Modifica o titulo deixando-o com o mesmo nome do "botão" clicado
        popContent.innerHTML = `Parabéns você entrou em ${e.target.innerText}` // Modifica o conteudo deixando-o com a frase escrita e o nome do "botão" clicado
    })

}