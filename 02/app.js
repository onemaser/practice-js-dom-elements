console.log('DOM');


const links = document.querySelectorAll(`[data-url]`)
links.forEach(function(element){
    const linksAttr = element.getAttribute('data-url')

    element.setAttribute('href', linksAttr)
})
    
