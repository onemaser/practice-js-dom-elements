console.log('DOM');

const element = document.querySelector(`.comments__item.comments__item--newest` )
if(element !== null) {
    const elementWithAtrr = element.querySelectorAll('[data-info]')
    console.log(elementWithAtrr.length)
}


