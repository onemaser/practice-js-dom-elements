console.log('DOM');

const buttonSettings = {
    attr: {
        className: 'btn',
        title: 'super button'
    },
    css: {
        border: '1px solid #336699',
        padding: '5px 20px',
        color: '#444'
    },
    text: 'Click me!',
}

const button = document.querySelector('.parent-for-button')
const newButton = document.createElement('button')
newButton.innerText = buttonSettings.text

button.appendChild(newButton)

for(const key in buttonSettings.attr) {
    const value = buttonSettings.attr[key]
    newButton[key] = value
}

for(const key in buttonSettings.css) {
    const value = buttonSettings.css[key]
    newButton.style[key] = value
}