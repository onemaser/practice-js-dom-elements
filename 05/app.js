console.log('DOM');

const curr = document.querySelector('.js-curr');

const newButton = document.createElement('button')
newButton.innerText = `usuń z koszyka`
curr.parentElement.appendChild(newButton)

const children =Array.from(curr.parentElement.children)
console.log(children)

children.forEach(function(item) {
    if(item !== curr) {
        item.classList.add('siblings')
    }
}) 
const firstArticle = curr.parentElement

const siblingElement = firstArticle.nextElementSibling
console.log(siblingElement)

siblingElement.title = 'nextElementSibling'

const lastArticle = firstArticle.nextElementSibling.nextElementSibling
const btn = lastArticle.children[lastArticle.children.length -1];   
console.log(btn) 

const pElement = document.createElement('p')
pElement.innerText = 'jakis tekst'

lastArticle.insertBefore(pElement, btn)

const newArticle = firstArticle.cloneNode(true)
firstArticle.parentElement.insertBefore(newArticle, firstArticle)